import { Router } from 'express'
import fs from 'fs'
import path from 'path'
import { getKnowledgeBasePath } from '../services/document-ingest'
import { ingestDomain, ingestAll } from '../services/document-ingest'
import type { DomainPack } from '../types'

const router = Router()

// GET /api/documents - List all domains and their documents
router.get('/', async (_req, res) => {
  try {
    const kbPath = getKnowledgeBasePath()
    const domains: DomainPack[] = []

    if (!fs.existsSync(kbPath)) {
      res.json({ domains: [] })
      return
    }

    const entries = fs.readdirSync(kbPath, { withFileTypes: true })
    for (const entry of entries) {
      if (!entry.isDirectory()) continue

      const domainPath = path.join(kbPath, entry.name)
      const metaPath = path.join(domainPath, 'domain.json')

      let domainMeta: DomainPack
      if (fs.existsSync(metaPath)) {
        domainMeta = JSON.parse(fs.readFileSync(metaPath, 'utf-8'))
      } else {
        domainMeta = {
          id: entry.name,
          name: entry.name.charAt(0).toUpperCase() + entry.name.slice(1),
          description: '',
          icon: 'folder',
          priority: 99,
          documents: []
        }
      }

      // List actual files in the domain
      const files = fs.readdirSync(domainPath).filter((f) =>
        ['.md', '.txt', '.pdf'].includes(path.extname(f).toLowerCase())
      )

      domainMeta.documents = files.map((f) => ({
        file: f,
        title: path.basename(f, path.extname(f)).replace(/-/g, ' '),
        tags: []
      }))

      domains.push(domainMeta)
    }

    domains.sort((a, b) => a.priority - b.priority)
    res.json({ domains })
  } catch (err: any) {
    res.status(500).json({ error: err.message })
  }
})

// GET /api/documents/:domain/:file - Read a specific document
router.get('/:domain/:file', async (req, res) => {
  try {
    const { domain, file } = req.params
    const kbPath = getKnowledgeBasePath()
    const filePath = path.join(kbPath, domain, file)

    // Prevent directory traversal
    const resolved = path.resolve(filePath)
    if (!resolved.startsWith(path.resolve(kbPath))) {
      res.status(403).json({ error: 'Access denied' })
      return
    }

    if (!fs.existsSync(filePath)) {
      res.status(404).json({ error: 'Document not found' })
      return
    }

    const content = fs.readFileSync(filePath, 'utf-8')
    res.json({
      domain,
      file,
      content,
      title: path.basename(file, path.extname(file)).replace(/-/g, ' ')
    })
  } catch (err: any) {
    res.status(500).json({ error: err.message })
  }
})

// POST /api/documents/ingest - Ingest/re-index knowledge base
router.post('/ingest', async (req, res) => {
  try {
    const { domain } = req.body

    // Set up SSE for progress
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive'
    })

    const onProgress = (info: { domain: string; file: string; chunksProcessed: number; status: string }) => {
      res.write(`data: ${JSON.stringify(info)}\n\n`)
    }

    if (domain) {
      await ingestDomain(domain, onProgress)
    } else {
      await ingestAll(onProgress)
    }

    res.write(`data: ${JSON.stringify({ status: 'complete' })}\n\n`)
    res.end()
  } catch (err: any) {
    if (!res.headersSent) {
      res.status(500).json({ error: err.message })
    } else {
      res.write(`data: ${JSON.stringify({ status: 'error', error: err.message })}\n\n`)
      res.end()
    }
  }
})

export default router
