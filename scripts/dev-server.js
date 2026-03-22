// Wrapper script to ensure correct CWD for electron-vite dev
process.chdir(__dirname + '/..')
require('../node_modules/electron-vite/bin/electron-vite.js')
