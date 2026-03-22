import * as ollamaClient from './ollama-client'
import { getVectorStore } from './vector-store'
import { supportsThinkingMode } from './system-info'
import type { ChatMessage, Citation } from '../types'

interface QueryOptions {
  model: string
  thinkingMode: boolean
  history: ChatMessage[]
  domain?: string
}

const SYSTEM_PROMPT_TEMPLATE = `You are the Doomsday Knowledge Base AI — a survival knowledge assistant operating fully offline. Your purpose is to provide accurate, actionable answers grounded in the documents stored in your knowledge base.

RULES:
1. Answer ONLY based on the provided context documents. If the context doesn't contain relevant information, clearly state: "I don't have information on this topic in my knowledge base."
2. Cite your sources using [Source N] notation corresponding to the numbered context blocks below.
3. Be precise, practical, and actionable. Lives may depend on your answers.
4. When providing medical or safety information, always include relevant warnings and caveats.
5. If multiple sources provide conflicting information, note the conflict and present both perspectives.

CONTEXT DOCUMENTS:
{context}`

export class RAGPipeline {
  async query(
    userQuery: string,
    options: QueryOptions
  ): Promise<{
    stream: AsyncIterable<any>
    sources: Citation[]
  }> {
    const { model, thinkingMode, history, domain } = options

    // 1. Embed the user query
    let queryVector: number[]
    try {
      queryVector = await ollamaClient.generateEmbedding(userQuery)
    } catch (err) {
      // If embedding fails (model not loaded), return direct chat without RAG
      console.warn('[RAG] Embedding failed, falling back to direct chat:', err)
      const stream = await ollamaClient.generateChat(model, [
        { role: 'system', content: 'You are a helpful offline AI assistant.' },
        ...history.map((m) => ({ role: m.role, content: m.content })),
        { role: 'user', content: userQuery }
      ])
      return { stream, sources: [] }
    }

    // 2. Search vector store for top 5 relevant chunks
    let results: any[] = []
    try {
      const store = getVectorStore()
      results = await store.search(queryVector, { limit: 5, domain })
    } catch (err) {
      console.warn('[RAG] Vector search failed:', err)
    }

    // 3. Build augmented system prompt
    let contextBlock = ''
    const sources: Citation[] = []

    if (results.length > 0) {
      contextBlock = results
        .map((r, i) => {
          sources.push({
            title: r.metadata.title,
            source: r.metadata.source,
            domain: r.metadata.domain,
            snippet: r.text.slice(0, 200),
            score: r.score,
            chunkIndex: r.metadata.chunkIndex
          })
          return `[Source ${i + 1}: ${r.metadata.title} — ${r.metadata.source} (${r.metadata.domain})]
${r.text}`
        })
        .join('\n\n---\n\n')
    } else {
      contextBlock = 'No relevant documents found in the knowledge base for this query.'
    }

    const systemPrompt = SYSTEM_PROMPT_TEMPLATE.replace('{context}', contextBlock)

    // 4. Build messages with thinking mode
    const messages: { role: string; content: string }[] = [
      { role: 'system', content: systemPrompt }
    ]

    // Add conversation history (last 10 messages max)
    const recentHistory = history.slice(-10)
    for (const msg of recentHistory) {
      messages.push({ role: msg.role, content: msg.content })
    }

    // Add the current query, optionally with thinking directive
    let queryContent = userQuery
    if (thinkingMode && supportsThinkingMode(model)) {
      queryContent = '/think ' + userQuery
    }
    messages.push({ role: 'user', content: queryContent })

    // 5. Stream response from LLM
    const stream = await ollamaClient.generateChat(model, messages, {
      temperature: thinkingMode ? 0.7 : 0.5
    })

    return { stream, sources }
  }
}
