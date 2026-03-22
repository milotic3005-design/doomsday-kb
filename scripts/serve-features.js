const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 5174;
const file = path.join(__dirname, '..', 'src', 'renderer', 'features-section.html');

const server = http.createServer((req, res) => {
  const html = fs.readFileSync(file, 'utf-8');
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(html);
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Features preview at http://127.0.0.1:${PORT}`);
});
