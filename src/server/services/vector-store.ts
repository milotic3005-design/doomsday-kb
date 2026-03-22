import * as lancedb from '@lancedb/lancedb'
import type { EmbeddedChunk, SearchResult, ChunkMetadata } from '../types'

const TABLE_NAME = 'knowledge_chunks'

let storeInstance: VectorStore | null = null

export class VectorStore {
  private db!: lancedb.Connection
  private table: lancedb.Table | null = null
  private dbPath: string

  constructor(dbPath: string) {
    this.dbPath = dbPath
  }

  async initialize(): Promise<void> {
    this.db = await lancedb.connect(this.dbPath)

    // Check if table exists
    const tables = await this.db.tableNames()
    if (tables.includes(TABLE_NAME)) {
      this.table = await this.db.openTable(TABLE_NAME)
    }
  }

  async addDocuments(chunks: EmbeddedChunk[]): Promise<void> {
    if (chunks.length === 0) return

    const records = chunks.map((chunk) => ({
      id: chunk.id,
      text: chunk.text,
      vector: chunk.vector,
      domain: chunk.metadata.domain,
      source: chunk.metadata.source,
      title: chunk.metadata.title,
      chunkIndex: chunk.metadata.chunkIndex,
      totalChunks: chunk.metadata.totalChunks
    }))

    if (!this.table) {
      this.table = await this.db.createTable(TABLE_NAME, records)
    } else {
      await this.table.add(records)
    }
  }

  async search(
    queryVector: number[],
    options: { limit?: number; domain?: string }
  ): Promise<SearchResult[]> {
    if (!this.table) return []

    const limit = options.limit || 5

    let query = this.table.search(queryVector).limit(limit)

    if (options.domain) {
      query = query.where(`domain = '${options.domain}'`)
    }

    const results = await query.toArray()

    return results.map((row: any) => ({
      text: row.text,
      metadata: {
        source: row.source,
        domain: row.domain,
        title: row.title,
        chunkIndex: row.chunkIndex,
        totalChunks: row.totalChunks
      } as ChunkMetadata,
      score: row._distance != null ? 1 / (1 + row._distance) : 0
    }))
  }

  async getStats(): Promise<{ totalChunks: number; domains: Record<string, number> }> {
    if (!this.table) return { totalChunks: 0, domains: {} }

    const totalChunks = await this.table.countRows()
    const allRows = await this.table.query().select(['domain']).limit(100000).toArray()
    const domains: Record<string, number> = {}
    for (const row of allRows) {
      const d = (row as any).domain
      domains[d] = (domains[d] || 0) + 1
    }

    return {
      totalChunks,
      domains
    }
  }

  async deleteByDomain(domain: string): Promise<void> {
    if (!this.table) return
    await this.table.delete(`domain = '${domain}'`)
  }

  async deleteAll(): Promise<void> {
    if (!this.table) return
    try {
      await this.db.dropTable(TABLE_NAME)
      this.table = null
    } catch {
      // Table might not exist
    }
  }
}

export async function initializeVectorStore(dbPath: string): Promise<VectorStore> {
  storeInstance = new VectorStore(dbPath)
  await storeInstance.initialize()
  return storeInstance
}

export function getVectorStore(): VectorStore {
  if (!storeInstance) {
    throw new Error('Vector store not initialized. Call initializeVectorStore() first.')
  }
  return storeInstance
}
