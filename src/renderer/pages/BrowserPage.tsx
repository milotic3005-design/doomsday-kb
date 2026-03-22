import React, { useState } from 'react'
import { marked } from 'marked'
import { useDocuments } from '../hooks/useDocuments'

const DOMAIN_ICONS: Record<string, string> = {
  medical: '🏥',
  agriculture: '🌾',
  engineering: '🔧',
  communications: '📡',
  security: '🛡️',
  pharmacy: '💊'
}

export default function BrowserPage() {
  const { domains, loading, selectedDoc, docLoading, loadDocument, searchDocuments } = useDocuments()
  const [expandedDomain, setExpandedDomain] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      setSearchResults([])
      return
    }
    setIsSearching(true)
    const results = await searchDocuments(searchQuery)
    setSearchResults(results)
    setIsSearching(false)
  }

  const handleSearchKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSearch()
  }

  const docHtml = selectedDoc
    ? (marked.parse(selectedDoc.content, { async: false }) as string)
    : ''

  return (
    <div className="flex h-full">
      {/* Left panel: domain tree */}
      <div className="w-72 bg-gray-900/50 border-r border-gray-800 flex flex-col">
        {/* Search */}
        <div className="p-3 border-b border-gray-800">
          <div className="flex gap-1">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearchKeyDown}
              placeholder="Semantic search..."
              className="flex-1 bg-gray-800 border border-gray-700 rounded px-3 py-1.5 text-xs text-gray-200 focus:outline-none focus:border-amber-600 placeholder-gray-600"
            />
            <button
              onClick={handleSearch}
              disabled={isSearching}
              className="px-2 bg-amber-600 hover:bg-amber-500 text-white rounded text-xs"
            >
              {isSearching ? '...' : '🔍'}
            </button>
          </div>
        </div>

        {/* Search results */}
        {searchResults.length > 0 && (
          <div className="border-b border-gray-800 max-h-60 overflow-y-auto">
            <div className="px-3 py-2 text-xs text-gray-500">
              {searchResults.length} results
            </div>
            {searchResults.map((r: any, i: number) => (
              <button
                key={i}
                onClick={() => loadDocument(r.metadata.domain, r.metadata.source)}
                className="w-full text-left px-3 py-2 hover:bg-gray-800 border-b border-gray-800/50"
              >
                <div className="text-xs text-amber-400">{r.metadata.title}</div>
                <div className="text-[10px] text-gray-500">
                  {r.metadata.domain}/{r.metadata.source} — {Math.round(r.score * 100)}%
                </div>
                <div className="text-[11px] text-gray-400 mt-1 line-clamp-2">
                  {r.text.slice(0, 120)}...
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Domain tree */}
        <div className="flex-1 overflow-y-auto py-2">
          {loading ? (
            <div className="px-3 py-4 text-xs text-gray-500">Loading domains...</div>
          ) : domains.length === 0 ? (
            <div className="px-3 py-4 text-xs text-gray-500">
              No knowledge packs found. Add documents to the knowledge-base/ directory.
            </div>
          ) : (
            domains.map((domain) => (
              <div key={domain.id}>
                <button
                  onClick={() =>
                    setExpandedDomain(expandedDomain === domain.id ? null : domain.id)
                  }
                  className="w-full text-left px-3 py-2 flex items-center gap-2 hover:bg-gray-800 text-gray-300"
                >
                  <span>{expandedDomain === domain.id ? '▼' : '▶'}</span>
                  <span>{DOMAIN_ICONS[domain.id] || '📁'}</span>
                  <span className="text-sm">{domain.name}</span>
                  <span className="ml-auto text-xs text-gray-600">
                    {domain.documents.length}
                  </span>
                </button>

                {expandedDomain === domain.id && (
                  <div className="ml-6">
                    {domain.documents.map((doc) => (
                      <button
                        key={doc.file}
                        onClick={() => loadDocument(domain.id, doc.file)}
                        className={`w-full text-left px-3 py-1.5 text-xs hover:bg-gray-800 transition-colors ${
                          selectedDoc?.file === doc.file
                            ? 'text-amber-400 bg-gray-800/50'
                            : 'text-gray-400'
                        }`}
                      >
                        {doc.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      {/* Right panel: document viewer */}
      <div className="flex-1 overflow-y-auto">
        {docLoading ? (
          <div className="flex items-center justify-center h-full text-gray-500">
            Loading document...
          </div>
        ) : selectedDoc ? (
          <div className="max-w-3xl mx-auto p-8">
            <div className="mb-4 flex items-center gap-2">
              <span className="text-xs bg-amber-600/20 text-amber-400 px-2 py-0.5 rounded">
                {selectedDoc.domain}
              </span>
              <span className="text-xs text-gray-500">{selectedDoc.file}</span>
            </div>
            <div
              className="prose-invert"
              dangerouslySetInnerHTML={{ __html: docHtml }}
            />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
            <div className="text-4xl mb-4">📖</div>
            <p className="text-sm">Select a document from the left panel to read it.</p>
            <p className="text-xs text-gray-600 mt-2">
              Or use semantic search to find specific information.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
