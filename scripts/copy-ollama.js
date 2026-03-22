/**
 * Copies Ollama binaries from system install to resources/ollama/
 * for bundling into the Electron app installer.
 */

const fs = require('fs')
const path = require('path')

const OLLAMA_SOURCE = path.join(
  process.env.LOCALAPPDATA || '',
  'Programs',
  'Ollama'
)
const OLLAMA_DEST = path.join(__dirname, '..', 'resources', 'ollama')

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) {
    console.error(`Source not found: ${src}`)
    process.exit(1)
  }

  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true })
  }

  const stat = fs.statSync(src)
  if (stat.isDirectory()) {
    const entries = fs.readdirSync(src)
    for (const entry of entries) {
      // Skip CUDA/ROCm DLLs to reduce installer size (CPU-only target)
      if (entry.includes('cuda') || entry.includes('rocm') || entry.includes('hip')) {
        console.log(`  Skipping: ${entry} (GPU-specific)`)
        continue
      }
      copyRecursive(path.join(src, entry), path.join(dest, entry))
    }
  } else {
    try {
      // Use COPYFILE_EXCL flag workaround: remove dest first if exists, then copy
      if (fs.existsSync(dest)) {
        try { fs.chmodSync(dest, 0o666) } catch {}
        fs.unlinkSync(dest)
      }
      fs.copyFileSync(src, dest)
      console.log(`  Copied: ${path.relative(OLLAMA_SOURCE, src)}`)
    } catch (err) {
      // Some Ollama DLLs are locked by running processes; skip gracefully
      console.warn(`  Warning: Could not copy ${path.relative(OLLAMA_SOURCE, src)} — ${err.code || err.message}`)
    }
  }
}

console.log('Copying Ollama binaries for packaging...')
console.log(`  From: ${OLLAMA_SOURCE}`)
console.log(`  To:   ${OLLAMA_DEST}`)

if (!fs.existsSync(OLLAMA_SOURCE)) {
  console.error('Ollama is not installed. Please install Ollama first from https://ollama.ai')
  process.exit(1)
}

// Copy ollama.exe
const ollamaExe = path.join(OLLAMA_SOURCE, 'ollama.exe')
if (fs.existsSync(ollamaExe)) {
  fs.copyFileSync(ollamaExe, path.join(OLLAMA_DEST, 'ollama.exe'))
  console.log('  Copied: ollama.exe')
}

// Copy lib directory
const libDir = path.join(OLLAMA_SOURCE, 'lib')
if (fs.existsSync(libDir)) {
  copyRecursive(libDir, path.join(OLLAMA_DEST, 'lib'))
}

console.log('Ollama binaries copied successfully!')
