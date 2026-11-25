import { cp, mkdir, rm } from 'node:fs/promises';

await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
await cp('index.html', 'dist/index.html');
await cp('static', 'dist/static', { recursive: true, filter: (source) => !source.includes('/ts/') && !source.endsWith('/ts') });
