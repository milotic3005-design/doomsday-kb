import React, { useState } from 'react'
import { marked } from 'marked'
import type { ChatMessage as ChatMessageType, Citation } from '../hooks/useChat'
import CitationCard from './CitationCard'

interface Props {
  message: ChatMessageType
}

export default function ChatMessage({ message }: Props) {
  const [showThinking, setShowThinking] = useState(false)
  const isUser = message.role === 'user'

  // Parse markdown to HTML
  const htmlContent = marked.parse(message.content || '', { async: false }) as string

  // Replace [Source N] with clickable spans
  const processedHtml = htmlContent.replace(
    /\[Source (\d+)\]/g,
    '<span class="source-ref cursor-pointer text-amber-400 hover:text-amber-300 underline" data-source="$1">[Source $1]</span>'
  )

  return (
    <div className={`flex gap-3 mb-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] rounded-lg px-4 py-3 ${
          isUser
            ? 'bg-amber-600/20 border border-amber-700/30 text-gray-100'
            : 'bg-gray-800/80 border border-gray-700/30 text-gray-200'
        }`}
      >
        {/* Thinking block (collapsible) */}
        {message.thinking && (
          <div className="mb-2">
            <button
              onClick={() => setShowThinking(!showThinking)}
              className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1 mb-1"
            >
              <span>{showThinking ? '▼' : '▶'}</span>
              <span>Reasoning ({message.thinking.length} chars)</span>
            </button>
            {showThinking && (
              <div className="thinking-block text-sm">
                {message.thinking}
              </div>
            )}
          </div>
        )}

        {/* Message content */}
        {message.content ? (
          <div
            className="prose-invert text-sm leading-relaxed"
            dangerouslySetInnerHTML={{ __html: processedHtml }}
          />
        ) : (
          !message.thinking && (
            <div className="flex items-center gap-2 text-gray-400">
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse-amber" />
              <span className="text-sm">Thinking...</span>
            </div>
          )
        )}

        {/* Source citations */}
        {message.sources && message.sources.length > 0 && message.content && (
          <div className="mt-3 pt-3 border-t border-gray-700/50">
            <p className="text-xs text-gray-500 mb-2">Sources:</p>
            <div className="flex flex-col gap-1">
              {message.sources.map((source, i) => (
                <CitationCard key={i} citation={source} index={i + 1} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
