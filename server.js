import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Dynamic import with file:// URL
const serverPath = pathToFileURL(join(__dirname, 'server/server.mjs')).href;
const { app: createApp } = await import(serverPath);

const port = process.env.PORT || 5000; // بدل 4000 إلى 5000
const server = createApp();

server.listen(port, () => {
  console.log(`SSR running on http://localhost:${port}`);
});
