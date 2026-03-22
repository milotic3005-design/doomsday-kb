export interface ChatMessage {
  role: 'system' | 'user' | 'assistant'
  content: string
  thinking?: string
  sources?: Citation[]
  timestamp?: number
}

export interface Citation {
  title: string
  source: string
  domain: string
  snippet: string
  score: number
  chunkIndex: number
}

export interface DocumentChunk {
  id: string
  text: string
  tokenCount: number
  metadata: ChunkMetadata
}

export interface ChunkMetadata {
  source: string
  domain: string
  title: string
  chunkIndex: number
  totalChunks: number
}

export interface EmbeddedChunk extends DocumentChunk {
  vector: number[]
}

export interface SearchResult {
  text: string
  metadata: ChunkMetadata
  score: number
}

export interface DomainPack {
  id: string
  name: string
  description: string
  icon: string
  priority: number
  documents: DomainDocument[]
}

export interface DomainDocument {
  file: string
  title: string
  tags: string[]
}

export interface SystemStatus {
  ollama: {
    running: boolean
    models: string[]
    activeModel: string | null
  }
  vectorStore: {
    totalChunks: number
    domains: Record<string, number>
  }
  system: {
    totalRAM: number
    freeRAM: number
    cpuCount: number
    recommendedModel: string
  }
}

export interface ModelInfo {
  name: string
  size: number
  modified: string
}
