import { encode } from 'gpt-tokenizer'
import { v4 as uuidv4 } from 'uuid'
import type { DocumentChunk, ChunkMetadata } from '../types'

const CHUNK_SIZE = 512      // tokens
const CHUNK_OVERLAP = 50    // tokens

interface ChunkInput {
  text: string
  source: string
  domain: string
  title: string
}

export function chunkDocument(input: ChunkInput): DocumentChunk[] {
  const { text, source, domain, title } = input
  const chunks: DocumentChunk[] = []

  // Split into paragraphs first
  const paragraphs = text.split(/\n\s*\n/).filter((p) => p.trim().length > 0)

  // Accumulate tokens across paragraphs to form chunks
  let currentTokens: number[] = []
  let currentText = ''
  let overlapTokens: number[] = []
  let overlapText = ''

  for (const paragraph of paragraphs) {
    const cleanParagraph = paragraph.trim()
    const paragraphTokens = encode(cleanParagraph)

    // If a single paragraph exceeds chunk size, split it by sentences
    if (paragraphTokens.length > CHUNK_SIZE) {
      // Flush current buffer first
      if (currentTokens.length > 0) {
        chunks.push(createChunk(currentText, currentTokens.length, source, domain, title, chunks.length))
        // Save overlap from end of current chunk
        const overlapStart = Math.max(0, currentTokens.length - CHUNK_OVERLAP)
        overlapTokens = currentTokens.slice(overlapStart)
        overlapText = getTextForTokens(currentText, overlapStart, currentTokens.length)
        currentTokens = []
        currentText = ''
      }

      // Split paragraph into sentences and chunk them
      const sentences = splitIntoSentences(cleanParagraph)
      let sentenceBuffer = overlapText
      let sentenceTokenCount = overlapTokens.length
      overlapTokens = []
      overlapText = ''

      for (const sentence of sentences) {
        const sentenceTokens = encode(sentence)

        if (sentenceTokenCount + sentenceTokens.length > CHUNK_SIZE && sentenceBuffer.trim()) {
          chunks.push(createChunk(sentenceBuffer.trim(), sentenceTokenCount, source, domain, title, chunks.length))
          // Overlap from end
          const overlapContent = getLastNTokensText(sentenceBuffer, CHUNK_OVERLAP)
          sentenceBuffer = overlapContent + ' ' + sentence
          sentenceTokenCount = encode(sentenceBuffer).length
        } else {
          sentenceBuffer += (sentenceBuffer ? ' ' : '') + sentence
          sentenceTokenCount += sentenceTokens.length
        }
      }

      // Remainder goes back to current buffer
      if (sentenceBuffer.trim()) {
        currentText = sentenceBuffer.trim()
        currentTokens = encode(currentText)
      }
      continue
    }

    // Normal paragraph - add to current buffer
    const newText = currentText ? currentText + '\n\n' + cleanParagraph : cleanParagraph
    const newTokens = encode(newText)

    if (newTokens.length > CHUNK_SIZE && currentText) {
      // Current buffer is full, flush it
      chunks.push(createChunk(currentText, currentTokens.length, source, domain, title, chunks.length))
      // Start new chunk with overlap from end of previous
      const overlapContent = getLastNTokensText(currentText, CHUNK_OVERLAP)
      currentText = overlapContent + '\n\n' + cleanParagraph
      currentTokens = encode(currentText)
    } else {
      currentText = newText
      currentTokens = newTokens
    }
  }

  // Flush remaining
  if (currentText.trim()) {
    chunks.push(createChunk(currentText.trim(), currentTokens.length, source, domain, title, chunks.length))
  }

  // Update totalChunks in all chunks
  const totalChunks = chunks.length
  for (const chunk of chunks) {
    chunk.metadata.totalChunks = totalChunks
  }

  return chunks
}

function createChunk(
  text: string,
  tokenCount: number,
  source: string,
  domain: string,
  title: string,
  chunkIndex: number
): DocumentChunk {
  return {
    id: uuidv4(),
    text,
    tokenCount,
    metadata: {
      source,
      domain,
      title,
      chunkIndex,
      totalChunks: 0 // updated after all chunks created
    }
  }
}

function splitIntoSentences(text: string): string[] {
  // Split on sentence-ending punctuation followed by space or newline
  return text
    .split(/(?<=[.!?])\s+/)
    .filter((s) => s.trim().length > 0)
}

function getLastNTokensText(text: string, n: number): string {
  const tokens = encode(text)
  if (tokens.length <= n) return text
  // Approximate: take last portion of text
  const ratio = n / tokens.length
  const charStart = Math.floor(text.length * (1 - ratio))
  // Find a word boundary near charStart
  const wordBoundary = text.indexOf(' ', charStart)
  return wordBoundary > 0 ? text.slice(wordBoundary + 1) : text.slice(charStart)
}

function getTextForTokens(text: string, startToken: number, endToken: number): string {
  const tokens = encode(text)
  const ratio = startToken / tokens.length
  const charStart = Math.floor(text.length * ratio)
  const wordBoundary = text.indexOf(' ', charStart)
  return wordBoundary > 0 ? text.slice(wordBoundary + 1) : text.slice(charStart)
}
