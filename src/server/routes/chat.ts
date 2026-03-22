import { Router } from 'express'
import { RAGPipeline } from '../services/rag-pipeline'

const router = Router()
const ragPipeline = new RAGPipeline()

router.post('/', async (req, res) => {
  try {
    const { message, model, thinkingMode, conversationHistory } = req.body

    if (!message) {
      res.status(400).json({ error: 'Message is required' })
      return
    }

    const selectedModel = model || 'llama3.2:3b'
    const history = conversationHistory || []

    // Set up SSE
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive'
    })

    try {
      const { stream, sources } = await ragPipeline.query(message, {
        model: selectedModel,
        thinkingMode: thinkingMode ?? false,
        history
      })

      // Send sources first
      res.write(`data: ${JSON.stringify({ type: 'sources', sources })}\n\n`)

      // Stream tokens
      for await (const chunk of stream) {
        const token = chunk.message?.content || ''
        if (token) {
          res.write(`data: ${JSON.stringify({ type: 'token', token })}\n\n`)
        }
      }

      res.write(`data: ${JSON.stringify({ type: 'done' })}\n\n`)
    } catch (err: any) {
      res.write(`data: ${JSON.stringify({ type: 'error', error: err.message })}\n\n`)
    }

    res.end()
  } catch (err: any) {
    if (!res.headersSent) {
      res.status(500).json({ error: err.message })
    }
  }
})

export default router
