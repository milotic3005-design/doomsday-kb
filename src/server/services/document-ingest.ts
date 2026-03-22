import fs from 'fs'
import path from 'path'
import { app } from 'electron'
import { chunkDocument } from './chunker'
import * as ollamaClient from './ollama-client'
import { getVectorStore } from './vector-store'
import type { EmbeddedChunk } from '../types'

let knowledgeBasePath: string | null = null

export function getKnowledgeBasePath(): string {
  if (knowledgeBasePath) return knowledgeBasePath

  try {
    // Production: knowledge-base is in extraResources
    if (app.isPackaged) {
      knowledgeBasePath = path.join(process.resourcesPath, 'knowledge-base')
    } else {
      // Development: use project directory
      knowledgeBasePath = path.join(process.cwd(), 'knowledge-base')
    }
  } catch {
    // Fallback if app not ready yet
    knowledgeBasePath = path.join(process.cwd(), 'knowledge-base')
  }

  return knowledgeBasePath
}

type ProgressCallback = (info: {
  domain: string
  file: string
  chunksProcessed: number
  status: string
}) => void

export async function ingestDomain(
  domain: string,
  onProgress?: ProgressCallback
): Promise<number> {
  const kbPath = getKnowledgeBasePath()
  const domainPath = path.join(kbPath, domain)

  if (!fs.existsSync(domainPath)) {
    throw new Error(`Domain directory not found: ${domain}`)
  }

  const store = getVectorStore()

  // Delete existing chunks for this domain to allow re-indexing
  await store.deleteByDomain(domain)

  const files = fs.readdirSync(domainPath).filter((f) => {
    const ext = path.extname(f).toLowerCase()
    return ['.md', '.txt', '.pdf'].includes(ext)
  })

  let totalChunks = 0

  for (const file of files) {
    const filePath = path.join(domainPath, file)
    onProgress?.({ domain, file, chunksProcessed: 0, status: 'reading' })

    // Extract text based on file type
    let text: string
    const ext = path.extname(file).toLowerCase()

    if (ext === '.pdf') {
      try {
        const pdfParse = (await import('pdf-parse')).default
        const buffer = fs.readFileSync(filePath)
        const pdfData = await pdfParse(buffer)
        text = pdfData.text
      } catch (err) {
        console.error(`[Ingest] Failed to parse PDF ${file}:`, err)
        onProgress?.({ domain, file, chunksProcessed: 0, status: 'error' })
        continue
      }
    } else {
      text = fs.readFileSync(filePath, 'utf-8')
    }

    // Strip YAML frontmatter from markdown
    if (ext === '.md') {
      text = text.replace(/^---[\s\S]*?---\s*/, '')
    }

    // Extract title from first heading or filename
    const titleMatch = text.match(/^#\s+(.+)$/m)
    const title = titleMatch
      ? titleMatch[1].trim()
      : path.basename(file, ext).replace(/-/g, ' ')

    // Chunk the document
    const chunks = chunkDocument({
      text,
      source: file,
      domain,
      title
    })

    if (chunks.length === 0) continue

    onProgress?.({ domain, file, chunksProcessed: 0, status: 'embedding' })

    // Generate embeddings in batches
    const BATCH_SIZE = 10
    const embeddedChunks: EmbeddedChunk[] = []

    for (let i = 0; i < chunks.length; i += BATCH_SIZE) {
      const batch = chunks.slice(i, i + BATCH_SIZE)
      const texts = batch.map((c) => c.text)

      try {
        const vectors = await ollamaClient.generateEmbeddings(texts)

        for (let j = 0; j < batch.length; j++) {
          embeddedChunks.push({
            ...batch[j],
            vector: vectors[j]
          })
        }
      } catch (err) {
        console.error(`[Ingest] Embedding batch failed for ${file}:`, err)
        // Try one by one as fallback
        for (const chunk of batch) {
          try {
            const vector = await ollamaClient.generateEmbedding(chunk.text)
            embeddedChunks.push({ ...chunk, vector })
          } catch {
            console.error(`[Ingest] Skipping chunk from ${file}`)
          }
        }
      }

      onProgress?.({
        domain,
        file,
        chunksProcessed: Math.min(i + BATCH_SIZE, chunks.length),
        status: 'embedding'
      })
    }

    // Store in vector database
    if (embeddedChunks.length > 0) {
      await store.addDocuments(embeddedChunks)
      totalChunks += embeddedChunks.length
    }

    onProgress?.({
      domain,
      file,
      chunksProcessed: embeddedChunks.length,
      status: 'done'
    })
  }

  return totalChunks
}

export async function ingestAll(onProgress?: ProgressCallback): Promise<number> {
  const kbPath = getKnowledgeBasePath()

  if (!fs.existsSync(kbPath)) {
    throw new Error('Knowledge base directory not found')
  }

  const domains = fs
    .readdirSync(kbPath, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)

  let totalChunks = 0
  for (const domain of domains) {
    totalChunks += await ingestDomain(domain, onProgress)
  }

  return totalChunks
}
