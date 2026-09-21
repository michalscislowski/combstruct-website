import {cp, mkdir, readFile, readdir, rm, stat, writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import {updateShareMetadata} from './share-metadata.mjs';
import {buildLocales} from './build-locales.mjs';

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
await updateShareMetadata(source);
// Inquiry prices come from the same offers shown on each project page.
const offers = [];
const quantityAudit = JSON.parse(await readFile(path.join(root, 'lib/construction/qa/quantities.json'), 'utf8')).projects;
for (const id of ['30','90','125']) {
  const html = await readFile(path.join(source, `combstruct-${id}.html`), 'utf8');
  const parts = JSON.parse(await readFile(path.join(source, `assets/parts/${id}.json`), 'utf8'));
  if (parts.project !== id || parts.basis !== 'delivery-before-cutting' || parts.geometrySha256 !== quantityAudit[id].geometrySha256 || parts.installedPieces !== quantityAudit[id].physicalBoards) {
    throw new Error(`Parts catalogue does not match the quantity audit for Combstruct ${id}`);
  }
  for (const family of parts.families) {
    const quantities = family.variants.map(v => v.count);
    if (quantities.some(n => !Number.isInteger(n) || n < 0) || quantities.reduce((sum,n) => sum+n,0) !== family.count) {
      throw new Error(`Invalid physical quantities in Combstruct ${id}: ${family.id}`);
    }
  }
  if (parts.families.reduce((sum,f) => sum+f.count,0) !== parts.totalBoards) {
    throw new Error(`Incomplete parts catalogue for Combstruct ${id}`);
  }
  if(parts.totalBoards!==quantityAudit[id].deliveryBoards || (parts.material.totalSheets??parts.material.sheets)!==quantityAudit[id].sheets) {
    throw new Error(`Regenerate kit quantities and offers for Combstruct ${id}`);
  }
  if(parts.battens && (parts.battens.sheets!==Math.ceil(parts.battens.stockStrips/20) || parts.material.totalSheets!==parts.material.sheets+parts.battens.sheets || parts.additionalFamilies?.[0]?.count!==parts.battens.stockStrips))throw new Error(`Invalid batten bill for ${id}`);
  const variants = [...html.matchAll(/data-price-material="([^"]+)"><dt>([^<]+)<\/dt><dd><strong data-price-amount data-materials="(\d+)" data-assembly="(\d+)"/g)]
    .map(([,material,label,materials,assembly]) => ({material,label,materials:Number(materials),assembly:Number(assembly)}));
  if (variants.length !== 2) throw new Error(`Missing price variants in Combstruct ${id}`);
  offers.push({id,name:`Combstruct ${id}`,page:`combstruct-${id}.html`,
    image:html.match(/<img class="project-visual" src="([^"]+)"/)[1],variants});
}
await writeFile(path.join(source, 'assets/project-offers.js'), `window.COMBSTRUCT_OFFERS = ${JSON.stringify(offers,null,2)};\n`);
await buildLocales(source);
const files = await walk(source);
for (const file of files) {
  if (!/\.(html|css)$/.test(file)) continue;
  const content = await readFile(file, 'utf8');
  const refs = [...content.matchAll(/(?:src|href|poster|data-src|data-model-src|data-parts-source)="([^"]+)"|url\(['"]?([^)'"\s]+)/g)];
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
