import { Ollama } from 'ollama'
import type { ChatMessage, ModelInfo } from '../types'

const client = new Ollama({ host: 'http://127.0.0.1:11434' })

export async function generateChat(
  model: string,
  messages: { role: string; content: string }[],
  options?: { temperature?: number }
) {
  return client.chat({
    model,
    messages: messages as any,
    stream: true,
    options: {
      temperature: options?.temperature ?? 0.7
    }
  })
}

export async function generateEmbedding(text: string): Promise<number[]> {
  const response = await client.embed({
    model: 'nomic-embed-text',
    input: text
  })
  return response.embeddings[0]
}

export async function generateEmbeddings(texts: string[]): Promise<number[][]> {
  const response = await client.embed({
    model: 'nomic-embed-text',
    input: texts
  })
  return response.embeddings
}

export async function pullModel(
  modelName: string,
  onProgress?: (progress: { status: string; completed?: number; total?: number }) => void
): Promise<void> {
  const stream = await client.pull({ model: modelName, stream: true })
  for await (const part of stream) {
    onProgress?.({
      status: part.status,
      completed: (part as any).completed,
      total: (part as any).total
    })
  }
}

export async function listModels(): Promise<ModelInfo[]> {
  const response = await client.list()
  return response.models.map((m) => ({
    name: m.name,
    size: m.size,
    modified: m.modified_at.toString()
  }))
}

export async function deleteModel(modelName: string): Promise<void> {
  await client.delete({ model: modelName })
}

export async function isModelLoaded(modelName: string): Promise<boolean> {
  try {
    const models = await client.list()
    return models.models.some((m) => m.name.includes(modelName))
  } catch {
    return false
  }
}

export async function healthCheck(): Promise<boolean> {
  try {
    await client.list()
    return true
  } catch {
    return false
  }
}
