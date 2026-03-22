import { Router } from 'express'
import * as ollamaClient from '../services/ollama-client'

const router = Router()

// GET /api/models — list all installed models with size info
router.get('/', async (_req, res) => {
  try {
    const models = await ollamaClient.listModels()
    res.json({ models })
  } catch (err: any) {
    res.status(500).json({ error: err.message })
  }
})

// POST /api/models/pull — pull a model with SSE progress streaming
// Body: { name: string }
// Streams SSE events: { type: 'progress', status, completed, total, percent } | { type: 'done' } | { type: 'error', error }
router.post('/pull', async (req, res) => {
  const { name } = req.body
  if (!name || typeof name !== 'string') {
    res.status(400).json({ error: 'Model name required' })
    return
  }

  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    Connection: 'keep-alive'
  })

  try {
    await ollamaClient.pullModel(name.trim(), (progress) => {
      const percent =
        progress.total && progress.completed
          ? Math.round((progress.completed / progress.total) * 100)
          : null
      res.write(
        `data: ${JSON.stringify({ type: 'progress', status: progress.status, completed: progress.completed, total: progress.total, percent })}\n\n`
      )
    })
    res.write(`data: ${JSON.stringify({ type: 'done' })}\n\n`)
  } catch (err: any) {
    res.write(`data: ${JSON.stringify({ type: 'error', error: err.message })}\n\n`)
  }

  res.end()
})

// DELETE /api/models/:name — delete an installed model
router.delete('/:name', async (req, res) => {
  try {
    // name may contain ':' which URL-encodes to %3A
    const name = decodeURIComponent(req.params.name)
    await ollamaClient.deleteModel(name)
    res.json({ success: true })
  } catch (err: any) {
    res.status(500).json({ error: err.message })
  }
})

export default router
