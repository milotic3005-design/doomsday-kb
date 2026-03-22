import { useState, useEffect, useCallback } from 'react'

const API_BASE = 'http://127.0.0.1:3333'

export interface DomainPack {
  id: string
  name: string
  description: string
  icon: string
  priority: number
  documents: { file: string; title: string; tags: string[] }[]
}

export function useDocuments() {
  const [domains, setDomains] = useState<DomainPack[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedDoc, setSelectedDoc] = useState<{ domain: string; file: string; content: string; title: string } | null>(null)
  const [docLoading, setDocLoading] = useState(false)

  const fetchDomains = useCallback(async () => {
    try {
      const res = await fetch(`${API_BASE}/api/documents`)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json()
      setDomains(data.domains)
    } catch (err) {
      console.error('Failed to fetch domains:', err)
    } finally {
      setLoading(false)
    }
  }, [])

  const loadDocument = useCallback(async (domain: string, file: string) => {
    setDocLoading(true)
    try {
      const res = await fetch(`${API_BASE}/api/documents/${domain}/${file}`)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json()
      setSelectedDoc(data)
    } catch (err) {
      console.error('Failed to load document:', err)
    } finally {
      setDocLoading(false)
    }
  }, [])

  const searchDocuments = useCallback(async (query: string, domain?: string) => {
    try {
      const res = await fetch(`${API_BASE}/api/search`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, domain, limit: 10 })
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json()
      return data.results
    } catch (err) {
      console.error('Search failed:', err)
      return []
    }
  }, [])

  useEffect(() => {
    fetchDomains()
  }, [fetchDomains])

  return {
    domains,
    loading,
    selectedDoc,
    docLoading,
    loadDocument,
    searchDocuments,
    refreshDomains: fetchDomains
  }
}
