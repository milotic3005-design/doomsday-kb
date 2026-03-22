import { spawn, ChildProcess } from 'child_process'
import { app } from 'electron'
import path from 'path'
import fs from 'fs'

let ollamaProcess: ChildProcess | null = null
let isReady = false

function getOllamaBinaryPath(): string {
  const isWin = process.platform === 'win32'
  const binaryName = isWin ? 'ollama.exe' : 'ollama'

  if (app.isPackaged) {
    const bundled = path.join(process.resourcesPath, 'ollama', binaryName)
    if (fs.existsSync(bundled)) return bundled
    // Fall back to system Ollama if bundled binary not present
    return 'ollama'
  }

  // Dev mode: check known Windows install path first, then fall back to PATH
  if (isWin) {
    const systemPath = path.join(
      process.env.LOCALAPPDATA || '',
      'Programs',
      'Ollama',
      'ollama.exe'
    )
    if (fs.existsSync(systemPath)) return systemPath
  }
  return 'ollama' // fallback to PATH
}

function getModelsPath(): string {
  if (app.isPackaged) {
    return path.join(app.getPath('userData'), 'models')
  }
  // Dev mode: use default Ollama models location
  const home = process.env.HOME || process.env.USERPROFILE || ''
  return path.join(home, '.ollama', 'models')
}

export async function startOllama(): Promise<boolean> {
  if (ollamaProcess) return true

  const binaryPath = getOllamaBinaryPath()
  const modelsPath = getModelsPath()

  // Ensure models directory exists
  if (!fs.existsSync(modelsPath)) {
    fs.mkdirSync(modelsPath, { recursive: true })
  }

  console.log(`[Ollama] Starting: ${binaryPath}`)
  console.log(`[Ollama] Models path: ${modelsPath}`)

  try {
    ollamaProcess = spawn(binaryPath, ['serve'], {
      env: {
        ...process.env,
        OLLAMA_HOST: '127.0.0.1:11434',
        OLLAMA_MODELS: modelsPath
      },
      stdio: ['ignore', 'pipe', 'pipe'],
      detached: false
    })

    ollamaProcess.stdout?.on('data', (data: Buffer) => {
      console.log(`[Ollama] ${data.toString().trim()}`)
    })

    ollamaProcess.stderr?.on('data', (data: Buffer) => {
      console.log(`[Ollama] ${data.toString().trim()}`)
    })

    ollamaProcess.on('exit', (code) => {
      console.log(`[Ollama] Process exited with code ${code}`)
      ollamaProcess = null
      isReady = false
    })

    ollamaProcess.on('error', (err) => {
      console.error(`[Ollama] Failed to start: ${err.message}`)
      ollamaProcess = null
      isReady = false
    })

    // Wait for Ollama to be ready
    isReady = await waitForOllama(30000)
    return isReady
  } catch (err) {
    console.error('[Ollama] Start error:', err)
    return false
  }
}

async function waitForOllama(timeoutMs: number): Promise<boolean> {
  const start = Date.now()
  while (Date.now() - start < timeoutMs) {
    try {
      const response = await fetch('http://127.0.0.1:11434/')
      if (response.ok) {
        console.log('[Ollama] Ready!')
        return true
      }
    } catch {
      // Not ready yet
    }
    await new Promise((resolve) => setTimeout(resolve, 500))
  }
  console.error('[Ollama] Timed out waiting for server')
  return false
}

export function stopOllama(): void {
  if (ollamaProcess) {
    console.log('[Ollama] Stopping...')
    try {
      ollamaProcess.kill('SIGTERM')
    } catch {
      try {
        process.kill(ollamaProcess.pid!, 'SIGTERM')
      } catch {
        // Process already gone
      }
    }
    ollamaProcess = null
    isReady = false
  }
}

export function isOllamaReady(): boolean {
  return isReady
}

// Clean up on process exit
process.on('exit', stopOllama)
process.on('SIGTERM', stopOllama)
process.on('SIGINT', stopOllama)
