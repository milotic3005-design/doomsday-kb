import { useState, useCallback, useRef } from 'react'

const API_BASE = 'http://127.0.0.1:3333'

export interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
  thinking?: string
  sources?: Citation[]
  timestamp: number
}

export interface Citation {
  title: string
  source: string
  domain: string
  snippet: string
  score: number
  chunkIndex: number
}

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [isStreaming, setIsStreaming] = useState(false)
  const [model, setModel] = useState('llama3.2:3b')
  const [thinkingMode, setThinkingMode] = useState(false)
  const abortRef = useRef<AbortController | null>(null)

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim() || isStreaming) return

    // Add user message
    const userMsg: ChatMessage = { role: 'user', content, timestamp: Date.now() }
    setMessages((prev) => [...prev, userMsg])

    // Prepare assistant message placeholder
    const assistantMsg: ChatMessage = {
      role: 'assistant',
      content: '',
      thinking: '',
      sources: [],
      timestamp: Date.now()
    }
    setMessages((prev) => [...prev, assistantMsg])
    setIsStreaming(true)

    const controller = new AbortController()
    abortRef.current = controller

    try {
      const response = await fetch(`${API_BASE}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: content,
          model,
          thinkingMode,
          conversationHistory: messages.map((m) => ({
            role: m.role,
            content: m.content
          }))
        }),
        signal: controller.signal
      })

      const reader = response.body?.getReader()
      if (!reader) throw new Error('No response body')

      const decoder = new TextDecoder()
      let buffer = ''
      let fullContent = ''
      let thinkingContent = ''
      let sources: Citation[] = []
      let inThinking = false

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        buffer += decoder.decode(value, { stream: true })
        const lines = buffer.split('\n')
        buffer = lines.pop() || '' // keep incomplete line in buffer

        for (const line of lines) {
          if (!line.startsWith('data: ')) continue
          const data = line.slice(6).trim()
          if (!data) continue

          try {
            const parsed = JSON.parse(data)

            if (parsed.type === 'sources') {
              sources = parsed.sources
            } else if (parsed.type === 'token') {
              fullContent += parsed.token

              // Parse thinking tags
              if (fullContent.includes('<think>') && !fullContent.includes('</think>')) {
                inThinking = true
              }
              if (fullContent.includes('</think>')) {
                inThinking = false
                // Extract thinking content
                const thinkMatch = fullContent.match(/<think>([\s\S]*?)<\/think>/)
                if (thinkMatch) {
                  thinkingContent = thinkMatch[1].trim()
                }
              }

              // Update assistant message
              let displayContent = fullContent
              // Remove thinking tags from displayed content
              displayContent = displayContent.replace(/<think>[\s\S]*?<\/think>\s*/g, '')
              // If still inside thinking block, show content after <think>
              if (inThinking) {
                const thinkStart = fullContent.indexOf('<think>')
                thinkingContent = fullContent.slice(thinkStart + 7)
                displayContent = ''
              }

              setMessages((prev) => {
                const updated = [...prev]
                updated[updated.length - 1] = {
                  ...updated[updated.length - 1],
                  content: displayContent,
                  thinking: thinkingContent,
                  sources
                }
                return updated
              })
            } else if (parsed.type === 'error') {
              setMessages((prev) => {
                const updated = [...prev]
                updated[updated.length - 1] = {
                  ...updated[updated.length - 1],
                  content: `Error: ${parsed.error}`
                }
                return updated
              })
            }
          } catch {
            // Ignore parse errors
          }
        }
      }
    } catch (err: any) {
      if (err.name !== 'AbortError') {
        setMessages((prev) => {
          const updated = [...prev]
          if (updated.length > 0) {
            updated[updated.length - 1] = {
              ...updated[updated.length - 1],
              content: `Connection error: ${err.message}. Is Ollama running?`
            }
          }
          return updated
        })
      }
    } finally {
      setIsStreaming(false)
      abortRef.current = null
    }
  }, [messages, model, thinkingMode, isStreaming])

  const stopStreaming = useCallback(() => {
    abortRef.current?.abort()
    setIsStreaming(false)
  }, [])

  const clearChat = useCallback(() => {
    setMessages([])
  }, [])

  return {
    messages,
    isStreaming,
    model,
    setModel,
    thinkingMode,
    setThinkingMode,
    sendMessage,
    stopStreaming,
    clearChat
  }
}
