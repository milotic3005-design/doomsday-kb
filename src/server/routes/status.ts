import { Router } from 'express'
import { getSystemProfile, supportsThinkingMode } from '../services/system-info'
import * as ollamaClient from '../services/ollama-client'
import { getVectorStore } from '../services/vector-store'

const router = Router()

router.get('/', async (_req, res) => {
  try {
    const system = getSystemProfile()
    const ollamaHealthy = await ollamaClient.healthCheck()

    let models: any[] = []
    let activeModel: string | null = null
    if (ollamaHealthy) {
      models = await ollamaClient.listModels()
      // Determine active model based on system recommendation
      const recommended = system.recommendedModel
      const hasRecommended = models.some((m) => m.name.includes(recommended.split(':')[0]))
      activeModel = hasRecommended ? recommended : (models.find((m) => !m.name.includes('embed'))?.name || null)
    }

    let vectorStats = { totalChunks: 0, domains: {} as Record<string, number> }
    try {
      const store = getVectorStore()
      vectorStats = await store.getStats()
    } catch {
      // Store not initialized yet
    }

    res.json({
      ollama: {
        running: ollamaHealthy,
        models: models.map((m) => m.name),
        activeModel,
        supportsThinking: activeModel ? supportsThinkingMode(activeModel) : false
      },
      vectorStore: vectorStats,
      system: {
        totalRAM: system.totalRAM,
        freeRAM: system.freeRAM,
        cpuCount: system.cpuCount,
        cpuModel: system.cpuModel,
        recommendedModel: system.recommendedModel
      }
    })
  } catch (err: any) {
    res.status(500).json({ error: err.message })
  }
})

export default router
