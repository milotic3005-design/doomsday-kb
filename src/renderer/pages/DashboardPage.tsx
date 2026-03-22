import React, { useState } from 'react'
import { useSystemStatus } from '../hooks/useSystemStatus'
import { useModels } from '../hooks/useModels'
import StatusCard from '../components/StatusCard'

const API_BASE = 'http://127.0.0.1:3333'

const SUGGESTED_MODELS = [
  { name: 'llama3.2:3b', label: 'Llama 3.2 3B', desc: 'Fast, low RAM (4 GB)', tag: 'light' },
  { name: 'llama3.2:1b', label: 'Llama 3.2 1B', desc: 'Ultra-light (2 GB RAM)', tag: 'light' },
  { name: 'llama3.1:8b', label: 'Llama 3.1 8B', desc: 'Balanced (8 GB RAM)', tag: 'mid' },
  { name: 'mistral:7b', label: 'Mistral 7B', desc: 'Strong reasoning (8 GB)', tag: 'mid' },
  { name: 'qwen2.5:7b', label: 'Qwen 2.5 7B', desc: 'Excellent for structured answers (8 GB)', tag: 'mid' },
  { name: 'qwen2.5:14b', label: 'Qwen 2.5 14B', desc: 'High quality (16 GB)', tag: 'full' },
  { name: 'phi4:14b', label: 'Phi-4 14B', desc: 'Microsoft, strong reasoning (16 GB)', tag: 'full' },
  { name: 'gemma3:12b', label: 'Gemma 3 12B', desc: 'Google, excellent (16 GB)', tag: 'full' },
  { name: 'nomic-embed-text', label: 'Nomic Embed Text', desc: 'Required for RAG search', tag: 'embed' },
]

const TAG_COLORS: Record<string, string> = {
  light: 'bg-green-900/40 text-green-400 border-green-800/40',
  mid: 'bg-amber-900/40 text-amber-400 border-amber-800/40',
  full: 'bg-purple-900/40 text-purple-400 border-purple-800/40',
  embed: 'bg-blue-900/40 text-blue-400 border-blue-800/40',
}

function formatBytes(bytes: number): string {
  if (bytes >= 1e9) return (bytes / 1e9).toFixed(1) + ' GB'
  if (bytes >= 1e6) return (bytes / 1e6).toFixed(0) + ' MB'
  return bytes + ' B'
}

export default function DashboardPage() {
  const { status, error, loading, refresh } = useSystemStatus(3000)
  const { models, pulling, pullProgress, pullError, deleting, pullModel, deleteModel } = useModels()
  const [ingesting, setIngesting] = useState(false)
  const [ingestLog, setIngestLog] = useState<string[]>([])
  const [customModel, setCustomModel] = useState('')

  const handleReindex = async () => {
    setIngesting(true)
    setIngestLog(['Starting knowledge base ingestion...'])

    try {
      const response = await fetch(`${API_BASE}/api/documents/ingest`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({})
      })

      const reader = response.body?.getReader()
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
            if (data.status === 'complete') {
              setIngestLog((prev) => [...prev, 'Ingestion complete!'])
            } else if (data.status === 'error') {
              setIngestLog((prev) => [...prev, `Error: ${data.error}`])
            } else {
              setIngestLog((prev) => [
                ...prev,
                `[${data.domain}] ${data.file}: ${data.status} (${data.chunksProcessed} chunks)`
              ])
            }
          } catch {
            // Ignore parse errors
          }
        }
      }
    } catch (err: any) {
      setIngestLog((prev) => [...prev, `Error: ${err.message}`])
    } finally {
      setIngesting(false)
      refresh()
    }
  }

  if (loading && !status) {
    return (
      <div className="flex items-center justify-center h-full text-gray-500">
        Loading system status...
      </div>
    )
  }

  if (error && !status) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <div className="text-red-400 mb-2">Failed to connect to API server</div>
        <div className="text-xs text-gray-500">{error}</div>
        <button
          onClick={refresh}
          className="mt-4 px-4 py-2 bg-amber-600 text-white rounded text-sm hover:bg-amber-500"
        >
          Retry
        </button>
      </div>
    )
  }

  const ramPercent = status
    ? Math.round(((status.system.totalRAM - status.system.freeRAM) / status.system.totalRAM) * 100)
    : 0

  return (
    <div className="p-6 overflow-y-auto h-full">
      <h2 className="text-lg font-semibold text-gray-200 mb-6">System Status Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {/* Ollama Status */}
        <StatusCard title="Ollama Engine" icon="🤖">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Status</span>
              <span className={status?.ollama.running ? 'text-green-400' : 'text-red-400'}>
                {status?.ollama.running ? 'Running' : 'Offline'}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Active Model</span>
              <span className="text-gray-200 font-mono text-xs">
                {status?.ollama.activeModel || 'None'}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Installed Models</span>
              <span className="text-gray-200">{status?.ollama.models.length || 0}</span>
            </div>
            {status?.ollama.models && status.ollama.models.length > 0 && (
              <div className="mt-2 pt-2 border-t border-gray-700/50">
                {status.ollama.models.map((m) => (
                  <div key={m} className="text-xs text-gray-400 font-mono py-0.5">
                    {m}
                  </div>
                ))}
              </div>
            )}
          </div>
        </StatusCard>

        {/* System Resources */}
        <StatusCard title="System Resources" icon="💻">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Total RAM</span>
              <span className="text-gray-200">{status?.system.totalRAM} GB</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Free RAM</span>
              <span className="text-gray-200">{status?.system.freeRAM} GB</span>
            </div>
            {/* RAM bar */}
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${ramPercent > 90 ? 'bg-red-500' : ramPercent > 70 ? 'bg-amber-500' : 'bg-green-500'}`}
                style={{ width: `${ramPercent}%` }}
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">CPU Cores</span>
              <span className="text-gray-200">{status?.system.cpuCount}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Recommended Model</span>
              <span className="text-amber-400 font-mono text-xs">
                {status?.system.recommendedModel}
              </span>
            </div>
          </div>
        </StatusCard>

        {/* Vector Store */}
        <StatusCard title="Knowledge Index" icon="🗄️">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Total Chunks</span>
              <span className="text-gray-200 font-mono">
                {status?.vectorStore.totalChunks || 0}
              </span>
            </div>
            {status?.vectorStore.domains &&
              Object.entries(status.vectorStore.domains).map(([domain, count]) => (
                <div key={domain} className="flex items-center justify-between">
                  <span className="text-gray-400 capitalize">{domain}</span>
                  <span className="text-gray-300 font-mono text-xs">{count} chunks</span>
                </div>
              ))}
          </div>
        </StatusCard>
      </div>

      {/* Re-index section */}
      <div className="bg-gray-800/60 border border-gray-700/50 rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="text-sm font-semibold text-gray-300">Knowledge Base Indexing</h3>
            <p className="text-xs text-gray-500 mt-1">
              Re-index all domain packs to update the vector store for RAG queries.
            </p>
          </div>
          <button
            onClick={handleReindex}
            disabled={ingesting}
            className="px-4 py-2 bg-amber-600 hover:bg-amber-500 disabled:bg-gray-700 disabled:text-gray-500 text-white rounded text-sm font-medium transition-colors"
          >
            {ingesting ? 'Indexing...' : 'Re-index Knowledge Base'}
          </button>
        </div>

        {/* Ingestion log */}
        {ingestLog.length > 0 && (
          <div className="bg-gray-900/50 rounded p-3 max-h-48 overflow-y-auto font-mono text-xs">
            {ingestLog.map((line, i) => (
              <div key={i} className="text-gray-400 py-0.5">
                {line}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ── Model Manager ── */}
      <div className="bg-gray-800/60 border border-gray-700/50 rounded-lg p-4 mt-4">
        <h3 className="text-sm font-semibold text-gray-300 mb-1">Model Manager</h3>
        <p className="text-xs text-gray-500 mb-4">
          Download models via Ollama. The chat model selector updates automatically.
          <span className="text-blue-400 ml-1">nomic-embed-text</span> is required for RAG search.
        </p>

        {/* Custom model pull */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={customModel}
            onChange={(e) => setCustomModel(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && customModel.trim() && !pulling) {
                pullModel(customModel.trim())
                setCustomModel('')
              }
            }}
            placeholder="e.g. llama3.2:3b or any ollama model name"
            className="flex-1 bg-gray-900 border border-gray-700 rounded px-3 py-2 text-xs text-gray-200 focus:outline-none focus:border-amber-600 placeholder-gray-600"
            disabled={!!pulling}
          />
          <button
            onClick={() => { if (customModel.trim()) { pullModel(customModel.trim()); setCustomModel('') } }}
            disabled={!customModel.trim() || !!pulling}
            className="px-3 py-2 bg-amber-600 hover:bg-amber-500 disabled:bg-gray-700 disabled:text-gray-500 text-white rounded text-xs font-medium transition-colors whitespace-nowrap"
          >
            Download
          </button>
        </div>

        {/* Pull progress */}
        {pulling && pullProgress && (
          <div className="mb-4 bg-gray-900/60 border border-gray-700/40 rounded p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-amber-400 font-mono">{pulling}</span>
              <span className="text-xs text-gray-400">{pullProgress.percent != null ? `${pullProgress.percent}%` : ''}</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-1.5 mb-1">
              <div
                className="h-1.5 rounded-full bg-amber-500 transition-all duration-300"
                style={{ width: `${pullProgress.percent ?? 0}%` }}
              />
            </div>
            <p className="text-[10px] text-gray-500 font-mono truncate">{pullProgress.status}</p>
          </div>
        )}

        {/* Pull error */}
        {pullError && (
          <div className="mb-4 bg-red-900/20 border border-red-800/40 rounded p-2 text-xs text-red-400">
            {pullError}
          </div>
        )}

        {/* Installed models */}
        {models.length > 0 && (
          <div className="mb-4">
            <p className="text-xs text-gray-500 mb-2">Installed ({models.length})</p>
            <div className="space-y-1">
              {models.map((m) => (
                <div key={m.name} className="flex items-center justify-between bg-gray-900/40 rounded px-3 py-2">
                  <div>
                    <span className="text-xs text-gray-200 font-mono">{m.name}</span>
                    <span className="text-[10px] text-gray-500 ml-2">{formatBytes(m.size)}</span>
                  </div>
                  <button
                    onClick={() => deleteModel(m.name)}
                    disabled={deleting === m.name || !!pulling}
                    className="text-[10px] text-red-500 hover:text-red-400 disabled:text-gray-600 transition-colors px-2 py-1 rounded hover:bg-red-900/20"
                  >
                    {deleting === m.name ? 'Removing...' : 'Remove'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Suggested models */}
        <div>
          <p className="text-xs text-gray-500 mb-2">Suggested Models</p>
          <div className="grid grid-cols-1 gap-1.5">
            {SUGGESTED_MODELS.map((s) => {
              const installed = models.some((m) => m.name === s.name)
              return (
                <div
                  key={s.name}
                  className="flex items-center justify-between bg-gray-900/30 border border-gray-700/30 rounded px-3 py-2"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span className={`text-[10px] px-1.5 py-0.5 rounded border font-medium shrink-0 ${TAG_COLORS[s.tag]}`}>
                      {s.tag}
                    </span>
                    <div className="min-w-0">
                      <span className="text-xs text-gray-200 font-mono">{s.name}</span>
                      <span className="text-[10px] text-gray-500 ml-2">{s.desc}</span>
                    </div>
                  </div>
                  {installed ? (
                    <span className="text-[10px] text-green-500 shrink-0 ml-2">Installed</span>
                  ) : (
                    <button
                      onClick={() => pullModel(s.name)}
                      disabled={!!pulling}
                      className="text-[10px] text-amber-400 hover:text-amber-300 disabled:text-gray-600 transition-colors px-2 py-1 rounded hover:bg-amber-900/20 shrink-0 ml-2 whitespace-nowrap"
                    >
                      {pulling === s.name ? 'Downloading...' : '+ Install'}
                    </button>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
