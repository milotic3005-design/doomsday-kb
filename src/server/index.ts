import express from 'express'
import chatRouter from './routes/chat'
import searchRouter from './routes/search'
import documentsRouter from './routes/documents'
import statusRouter from './routes/status'
import modelsRouter from './routes/models'

export async function startServer(port: number): Promise<ReturnType<typeof express.application.listen>> {
  const app = express()

  app.use(express.json({ limit: '10mb' }))

  // CORS for Electron renderer
  app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    if (_req.method === 'OPTIONS') {
      res.sendStatus(200)
      return
    }
    next()
  })

  app.use('/api/chat', chatRouter)
  app.use('/api/search', searchRouter)
  app.use('/api/documents', documentsRouter)
  app.use('/api/status', statusRouter)
  app.use('/api/models', modelsRouter)

  return new Promise((resolve) => {
    const server = app.listen(port, '127.0.0.1', () => {
      console.log(`[Server] API running on http://127.0.0.1:${port}`)
      resolve(server as any)
    })
  })
}
