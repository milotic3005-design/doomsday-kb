import { useState, useEffect, useCallback } from 'react'

const API_BASE = 'http://127.0.0.1:3333'

export interface SystemStatus {
  ollama: {
    running: boolean
    models: string[]
    activeModel: string | null
    supportsThinking: boolean
  }
  vectorStore: {
    totalChunks: number
    domains: Record<string, number>
  }
  system: {
    totalRAM: number
    freeRAM: number
    cpuCount: number
    cpuModel: string
    recommendedModel: string
  }
}

export function useSystemStatus(pollInterval = 5000) {
  const [status, setStatus] = useState<SystemStatus | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  const fetchStatus = useCallback(async () => {
    try {
      const res = await fetch(`${API_BASE}/api/status`)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json()
      setStatus(data)
      setError(null)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchStatus()
    const interval = setInterval(fetchStatus, pollInterval)
    return () => clearInterval(interval)
  }, [fetchStatus, pollInterval])

  return { status, error, loading, refresh: fetchStatus }
}
