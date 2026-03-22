import React, { useState } from 'react'
import type { Citation } from '../hooks/useChat'

interface Props {
  citation: Citation
  index: number
}

export default function CitationCard({ citation, index }: Props) {
  const [expanded, setExpanded] = useState(false)

  const scorePercent = Math.round(citation.score * 100)

  return (
    <div
      className="text-xs bg-gray-900/50 rounded border border-gray-700/40 cursor-pointer hover:border-amber-600/40 transition-colors"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex items-center justify-between px-2 py-1.5">
        <div className="flex items-center gap-2">
          <span className="text-amber-500 font-mono font-bold">[{index}]</span>
          <span className="text-gray-300">{citation.title}</span>
          <span className="text-gray-600">— {citation.domain}/{citation.source}</span>
        </div>
        <span className="text-gray-500">{scorePercent}% match</span>
      </div>

      {expanded && (
        <div className="px-2 py-2 border-t border-gray-700/30 text-gray-400">
          {citation.snippet}...
        </div>
      )}
    </div>
  )
}
