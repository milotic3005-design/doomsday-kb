import { app, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { startOllama, stopOllama } from './ollama-manager'
import { startServer } from '../server/index'
import { initializeVectorStore } from '../server/services/vector-store'

const SERVER_PORT = 3333
let mainWindow: BrowserWindow | null = null
let server: any = null

async function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 1024,
    minHeight: 700,
    webPreferences: {
      preload: join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      webSecurity: true
    },
    title: 'Doomsday Knowledge Base',
    backgroundColor: '#030712',
    show: false
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow?.show()
  })

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  // Load the app
  if (process.env.ELECTRON_RENDERER_URL) {
    // Development: Vite dev server
    mainWindow.loadURL(process.env.ELECTRON_RENDERER_URL)
  } else {
    // Production: built files
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

async function bootstrap() {
  console.log('[App] Bootstrapping Doomsday Knowledge Base...')

  // 1. Initialize vector store
  const dbPath = app.isPackaged
    ? join(app.getPath('userData'), 'lancedb')
    : join(process.cwd(), 'data', 'lancedb')

  console.log(`[App] Vector store path: ${dbPath}`)
  await initializeVectorStore(dbPath)

  // 2. Start Ollama
  console.log('[App] Starting Ollama...')
  const ollamaReady = await startOllama()
  if (ollamaReady) {
    console.log('[App] Ollama is ready')
  } else {
    console.warn('[App] Ollama failed to start — chat will not work until resolved')
  }

  // 3. Start Express API server
  console.log(`[App] Starting API server on port ${SERVER_PORT}...`)
  server = await startServer(SERVER_PORT)

  // 4. Create the window
  await createWindow()
}

// IPC handlers
ipcMain.handle('get-server-port', () => SERVER_PORT)
ipcMain.handle('get-app-version', () => app.getVersion())

// App lifecycle
app.whenReady().then(bootstrap)

app.on('window-all-closed', () => {
  stopOllama()
  if (server) {
    server.close()
  }
  app.quit()
})

app.on('before-quit', () => {
  stopOllama()
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// Ensure clean shutdown
process.on('uncaughtException', (err) => {
  console.error('[App] Uncaught exception:', err)
  stopOllama()
})
