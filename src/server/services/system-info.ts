import os from 'node:os'

export interface SystemProfile {
  totalRAM: number
  freeRAM: number
  cpuCount: number
  cpuModel: string
  recommendedModel: string
  platform: string
}

export function getSystemProfile(): SystemProfile {
  const totalRAM = Math.round((os.totalmem() / (1024 ** 3)) * 10) / 10 // GB, 1 decimal
  const freeRAM = Math.round((os.freemem() / (1024 ** 3)) * 10) / 10
  const cpus = os.cpus()
  const cpuCount = cpus.length
  const cpuModel = cpus[0]?.model || 'Unknown'

  // Model selection logic per spec:
  // < 12 GB RAM → llama3.2:3b (CPU-only safe mode)
  // >= 16 GB RAM → qwen3.5:9b (full reasoning mode)
  // 12-16 GB → user prompt (default to llama3.2:3b for safety)
  let recommendedModel: string
  if (totalRAM < 12) {
    recommendedModel = 'llama3.2:3b'
  } else if (totalRAM >= 16) {
    recommendedModel = 'qwen3.5:9b'
  } else {
    recommendedModel = 'llama3.2:3b' // conservative default
  }

  return {
    totalRAM,
    freeRAM,
    cpuCount,
    cpuModel,
    recommendedModel,
    platform: os.platform()
  }
}

export function supportsThinkingMode(modelName: string): boolean {
  return modelName.startsWith('qwen')
}
