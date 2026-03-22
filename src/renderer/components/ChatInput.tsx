import React, { useState, useRef, useEffect } from 'react'

interface Props {
  onSend: (message: string) => void
  isStreaming: boolean
  onStop: () => void
  model: string
  onModelChange: (model: string) => void
  thinkingMode: boolean
  onThinkingModeChange: (enabled: boolean) => void
  supportsThinking: boolean
  availableModels: string[]
}

export default function ChatInput({
  onSend,
  isStreaming,
  onStop,
  model,
  onModelChange,
  thinkingMode,
  onThinkingModeChange,
  supportsThinking,
  availableModels
}: Props) {
  const [input, setInput] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (!isStreaming) {
      textareaRef.current?.focus()
    }
  }, [isStreaming])

  const handleSubmit = () => {
    if (input.trim() && !isStreaming) {
      onSend(input.trim())
      setInput('')
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  // Filter out embedding models from the chat selector
  const chatModels = availableModels.filter(
    (m) => !m.includes('embed') && !m.includes('nomic')
  )

  return (
    <div className="border-t border-gray-800 bg-gray-900/50 p-4">
      {/* Controls bar */}
      <div className="flex items-center gap-4 mb-3">
        {/* Model selector */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">Model:</span>
          {chatModels.length === 0 ? (
            <span className="text-xs text-gray-600 italic">No models installed — add one in System tab</span>
          ) : (
            <select
              value={chatModels.includes(model) ? model : chatModels[0]}
              onChange={(e) => onModelChange(e.target.value)}
              className="bg-gray-800 border border-gray-700 rounded px-2 py-1 text-xs text-gray-300 focus:outline-none focus:border-amber-600 max-w-[220px]"
            >
              {chatModels.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          )}
        </div>

        {/* Thinking mode toggle */}
        <label
          className={`flex items-center gap-2 text-xs cursor-pointer ${
            supportsThinking ? 'text-gray-400' : 'text-gray-600 cursor-not-allowed'
          }`}
        >
          <input
            type="checkbox"
            checked={thinkingMode && supportsThinking}
            onChange={(e) => onThinkingModeChange(e.target.checked)}
            disabled={!supportsThinking}
            className="accent-amber-500"
          />
          <span>Thinking Mode</span>
          {!supportsThinking && (
            <span className="text-gray-600 text-[10px]">(Qwen only)</span>
          )}
        </label>
      </div>

      {/* Input area */}
      <div className="flex gap-2">
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask a survival question..."
          rows={2}
          className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-sm text-gray-100 resize-none focus:outline-none focus:border-amber-600 placeholder-gray-600"
          disabled={isStreaming}
        />
        {isStreaming ? (
          <button
            onClick={onStop}
            className="px-4 bg-red-600/80 hover:bg-red-600 text-white rounded-lg text-sm font-medium transition-colors self-end"
          >
            Stop
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={!input.trim() || chatModels.length === 0}
            className="px-4 bg-amber-600 hover:bg-amber-500 disabled:bg-gray-700 disabled:text-gray-500 text-white rounded-lg text-sm font-medium transition-colors self-end"
          >
            Send
          </button>
        )}
      </div>
    </div>
  )
}
