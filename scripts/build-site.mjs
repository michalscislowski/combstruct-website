import {cp, mkdir, readFile, readdir, rm, stat} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const source = path.join(root, 'site');
const output = path.join(root, 'dist');
// Vercel can auto-discover root middleware even with the framework set to Other.
// Locale redirects are handled by vercel.json in this static deployment.
for (const name of ['middleware.ts', 'middleware.js', 'proxy.ts', 'proxy.js', 'src/middleware.ts', 'src/middleware.js']) {
  if (await stat(path.join(root, name)).catch(() => null)) {
    throw new Error(`Remove legacy request middleware before publishing the static site: ${name}`);
  }
}
async function walk(dir) {
  const result = [];
  for (const entry of await readdir(dir, {withFileTypes: true})) {
    const file = path.join(dir, entry.name);
    result.push(...(entry.isDirectory() ? await walk(file) : [file]));
  }
  return result;
}
const files = await walk(source);
for (const file of files) {
  if (!/\.(html|css)$/.test(file)) continue;
  const content = await readFile(file, 'utf8');
  const refs = [...content.matchAll(/(?:src|href|poster|data-src|data-model-src)="([^"]+)"|url\(['"]?([^)'"\s]+)/g)];
  for (const match of refs) {
    const ref = match[1] || match[2];
    if (/^(?:[a-z]+:|\/\/|#)/i.test(ref)) continue;
    const location = decodeURIComponent(ref.split(/[?#]/)[0]);
    if (!location) continue;
    const target = path.resolve(location.startsWith('/') ? source : path.dirname(file), location.replace(/^\//, ''));
    if (!target.startsWith(source + path.sep) || !(await stat(target).catch(() => null))?.isFile()) {
      throw new Error(`Missing local asset: ${path.relative(source, file)} -> ${ref}`);
    }
  }
}
await rm(output, {recursive:true, force:true});
await mkdir(output, {recursive:true});
await cp(source, output, {recursive:true});
console.log(`Built ${files.length} public files; all local links and assets verified.`);
