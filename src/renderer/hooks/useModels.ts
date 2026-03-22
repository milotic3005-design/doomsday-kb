import { useState, useCallback, useEffect } from 'react'

const API_BASE = 'http://127.0.0.1:3333'

export interface ModelInfo {
  name: string
  size: number
  modified: string
}

export interface PullProgress {
  status: string
  completed?: number
  total?: number
  percent?: number | null
}

export function useModels() {
  const [models, setModels] = useState<ModelInfo[]>([])
  const [loading, setLoading] = useState(true)
  const [pulling, setPulling] = useState<string | null>(null)
  const [pullProgress, setPullProgress] = useState<PullProgress | null>(null)
  const [pullError, setPullError] = useState<string | null>(null)
  const [deleting, setDeleting] = useState<string | null>(null)

  const fetchModels = useCallback(async () => {
    try {
      const res = await fetch(`${API_BASE}/api/models`)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json()
      setModels(data.models || [])
    } catch {
      // Ollama may not be ready yet
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchModels()
  }, [fetchModels])

  const pullModel = useCallback(async (name: string) => {
    setPulling(name)
    setPullProgress({ status: 'Starting download...' })
    setPullError(null)

    try {
      const res = await fetch(`${API_BASE}/api/models/pull`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name })
      })

      const reader = res.body?.getReader()
      if (!reader) throw new Error('No response body')

      const decoder = new TextDecoder()
      let buffer = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        buffer += decoder.decode(value, { stream: true })
        const lines = buffer.split('\n')
        buffer = lines.pop() || ''

        for (const line of lines) {
          if (!line.startsWith('data: ')) continue
          try {
            const data = JSON.parse(line.slice(6))
            if (data.type === 'done') {
              setPullProgress({ status: 'Complete!' })
              await fetchModels()
            } else if (data.type === 'error') {
              setPullError(data.error)
            } else if (data.type === 'progress') {
              setPullProgress({
                status: data.status,
                completed: data.completed,
                total: data.total,
                percent: data.percent
              })
            }
          } catch {
            // ignore parse errors
          }
        }
      }
    } catch (err: any) {
      setPullError(err.message)
    } finally {
      setPulling(null)
    }
  }, [fetchModels])

  const deleteModel = useCallback(async (name: string) => {
    setDeleting(name)
    try {
      const res = await fetch(`${API_BASE}/api/models/${encodeURIComponent(name)}`, {
        method: 'DELETE'
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      await fetchModels()
    } catch (err: any) {
      console.error('Delete failed:', err)
    } finally {
      setDeleting(null)
    }
  }, [fetchModels])

  return {
    models,
    loading,
    pulling,
    pullProgress,
    pullError,
    deleting,
    pullModel,
    deleteModel,
    refresh: fetchModels
  }
}
