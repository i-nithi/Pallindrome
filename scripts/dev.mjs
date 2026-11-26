import http from 'node:http';
import fs from 'node:fs';
import { stat } from 'node:fs/promises';
import path from 'node:path';
import { context } from 'esbuild';

const ROOT = process.cwd();
const HOST = process.env.HOST || '127.0.0.1';
const PORT = Number(process.env.PORT || 3000);

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
};

/** Resolve a URL pathname safely inside the workspace root. */
function resolveRequestPath(urlPath) {
  let pathname = '/';
  try {
    pathname = decodeURIComponent((urlPath || '/').split('?')[0]);
  } catch {
    return null;
  }

  const relative = pathname === '/' ? 'index.html' : pathname.replace(/^\/+/, '');
  const resolved = path.resolve(ROOT, relative);
  if (resolved !== ROOT && !resolved.startsWith(ROOT + path.sep)) {
    return null;
  }
  return resolved;
}

/** Stream a static file with HTTP Range support for video playback. */
async function serveFile(req, res, filePath) {
  let info = await stat(filePath);
  if (info.isDirectory()) {
    filePath = path.join(filePath, 'index.html');
    info = await stat(filePath);
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';
  const total = info.size;
  const range = req.headers.range;

  res.setHeader('Content-Type', contentType);
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Accept-Ranges', 'bytes');

  if (range && range.startsWith('bytes=')) {
    const [startStr, endStr] = range.slice(6).split('-');
    const start = startStr ? Number.parseInt(startStr, 10) : 0;
    const end = endStr ? Math.min(Number.parseInt(endStr, 10), total - 1) : total - 1;

    if (Number.isNaN(start) || Number.isNaN(end) || start < 0 || start > end || start >= total) {
      res.writeHead(416, { 'Content-Range': `bytes */${total}` });
      res.end();
      return;
    }

    res.writeHead(206, {
      'Content-Range': `bytes ${start}-${end}/${total}`,
      'Content-Length': end - start + 1,
    });
    fs.createReadStream(filePath, { start, end }).pipe(res);
    return;
  }

  res.writeHead(200, { 'Content-Length': total });
  if (req.method === 'HEAD') {
    res.end();
    return;
  }
  fs.createReadStream(filePath).pipe(res);
}

let buildCount = 0;
const esbuildCtx = await context({
  entryPoints: ['static/ts/main.ts'],
  bundle: true,
  sourcemap: 'inline',
  format: 'iife',
  target: 'es2022',
  outfile: 'static/js/main.js',
  plugins: [
    {
      name: 'dev-logger',
      setup(build) {
        build.onEnd((result) => {
          buildCount += 1;
          if (result.errors.length === 0 && buildCount > 1) {
            console.log('[dev] Rebuilt static/js/main.js');
          }
        });
      },
    },
  ],
});

await esbuildCtx.watch();

const server = http.createServer(async (req, res) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Method Not Allowed');
    return;
  }

  const filePath = resolveRequestPath(req.url);
  if (!filePath) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Forbidden');
    return;
  }

  try {
    await serveFile(req, res, filePath);
  } catch (err) {
    if (err && (err.code === 'ENOENT' || err.code === 'ENOTDIR')) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Not Found');
      return;
    }
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Internal Server Error');
  }
});

let shuttingDown = false;
async function shutdown() {
  if (shuttingDown) return;
  shuttingDown = true;
  await esbuildCtx.dispose();
  server.close(() => process.exit(0));
  setTimeout(() => process.exit(0), 1000).unref();
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

server.listen(PORT, HOST, () => {
  console.log(`[dev] Watching TypeScript and serving Pallindrome at http://${HOST}:${PORT}`);
});
