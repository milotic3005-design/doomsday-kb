import React, { useRef, useEffect } from 'react'
import { useChat } from '../hooks/useChat'
import { useSystemStatus } from '../hooks/useSystemStatus'
import ChatMessage from '../components/ChatMessage'
import ChatInput from '../components/ChatInput'

export default function ChatPage() {
  const {
    messages,
    isStreaming,
    model,
    setModel,
    thinkingMode,
    setThinkingMode,
    sendMessage,
    stopStreaming,
    clearChat
  } = useChat()

  const { status } = useSystemStatus(10000)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const availableModels = status?.ollama?.models ?? []

  // Auto-select first available non-embed model if current model isn't installed
  useEffect(() => {
    if (availableModels.length === 0) return
    const chatModels = availableModels.filter(m => !m.includes('embed') && !m.includes('nomic'))
    if (chatModels.length === 0) return
    if (!chatModels.includes(model)) {
      // Prefer recommended model, otherwise first chat model
      const recommended = status?.system?.recommendedModel
      const best = recommended && chatModels.includes(recommended) ? recommended : chatModels[0]
      setModel(best)
    }
  }, [availableModels.join(',')])

  const supportsThinking = model.startsWith('qwen')

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-gray-800 bg-gray-900/30">
        <div className="flex items-center gap-3">
          <h2 className="text-sm font-semibold text-gray-300">AI Chat</h2>
          {status?.ollama?.running ? (
            <span className="flex items-center gap-1.5 text-xs text-green-400">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
              Ollama Online
            </span>
          ) : (
            <span className="flex items-center gap-1.5 text-xs text-red-400">
              <span className="w-1.5 h-1.5 bg-red-400 rounded-full" />
              Ollama Offline
            </span>
          )}
        </div>
        <div className="flex items-center gap-3">
          {status?.vectorStore && (
            <span className="text-xs text-gray-500">
              {status.vectorStore.totalChunks} indexed chunks
            </span>
          )}
          <button
            onClick={clearChat}
            className="text-xs text-gray-500 hover:text-gray-300 px-2 py-1 rounded hover:bg-gray-800 transition-colors"
          >
            Clear Chat
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-4">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="text-4xl mb-4">🔥</div>
            <h3 className="text-xl font-semibold text-gray-300 mb-2">
              Doomsday Knowledge Base
            </h3>
            <p className="text-gray-500 max-w-md text-sm">
              Ask any survival question. Your AI assistant will search the
              knowledge base and provide grounded, cited answers — fully offline.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 justify-center">
              {[
                'How do I purify water in the field?',
                'What are the signs of wound infection?',
                'How to build a basic radio antenna?',
                'IV drug reconstitution basics'
              ].map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  className="text-xs bg-gray-800 border border-gray-700 rounded-full px-3 py-1.5 text-gray-400 hover:text-amber-400 hover:border-amber-600/40 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg, i) => (
          <ChatMessage key={i} message={msg} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <ChatInput
        onSend={sendMessage}
        isStreaming={isStreaming}
        onStop={stopStreaming}
        model={model}
        onModelChange={setModel}
        thinkingMode={thinkingMode}
        onThinkingModeChange={setThinkingMode}
        supportsThinking={supportsThinking}
        availableModels={availableModels}
      />
    </div>
  )
}
