import { Router } from 'express'
import * as ollamaClient from '../services/ollama-client'
import { getVectorStore } from '../services/vector-store'

const router = Router()

router.post('/', async (req, res) => {
  try {
    const { query, domain, limit } = req.body

    if (!query) {
      res.status(400).json({ error: 'Query is required' })
      return
    }

    // Embed the query
    const queryVector = await ollamaClient.generateEmbedding(query)

    // Search vector store
    const store = getVectorStore()
    const results = await store.search(queryVector, {
      limit: limit || 10,
      domain: domain || undefined
    })

    res.json({ results })
  } catch (err: any) {
    res.status(500).json({ error: err.message })
  }
})

export default router
