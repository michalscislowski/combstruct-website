import {readFile, writeFile, stat} from 'node:fs/promises';
import path from 'node:path';

const origin = 'https://www.combstruct.com';
const pages = {
  'index.html': '125',
  'projekty.html': '125',
  'technologie.html': '30',
  'combstruct-30.html': '30',
  'combstruct-90.html': '90',
  'combstruct-125.html': '125',
  'kontakt.html': '125',
  'zamowienie.html': '125',
  'system-viewer.html': '125',
  'project-model.html': '30',
  'project-model-90.html': '90',
  'project-model-125.html': '125',
};

// Read dimensions from the actual JPEG, including progressive encodings.
function jpegSize(data) {
  if (data.readUInt16BE(0) !== 0xffd8) throw new Error('Share image must be a JPEG');
  for (let offset = 2; offset + 9 < data.length;) {
    if (data[offset] !== 0xff) break;
    const marker = data[offset + 1];
    if ([0xc0, 0xc1, 0xc2].includes(marker)) {
      return {width: data.readUInt16BE(offset + 7), height: data.readUInt16BE(offset + 5)};
    }
    offset += 2 + data.readUInt16BE(offset + 2);
  }
  throw new Error('Cannot read share image dimensions');
}

export async function updateShareMetadata(source) {
  const images = {};
  for (const id of ['30', '90', '125']) {
    const file = `assets/share/combstruct-${id}.jpg`;
    const data = await readFile(path.join(source, file));
    if (data.length > 300_000) throw new Error(`Share image is too large: ${file}`);
    images[id] = {url: `${origin}/${file}`, ...jpegSize(data)};
  }
  for (const file of ['favicon.ico', 'favicon-32x32.png', 'apple-touch-icon.png',
    'icon-192x192.png', 'icon-512x512.png', 'site.webmanifest']) {
    await stat(path.join(source, file));
  }
  for (const [file, id] of Object.entries(pages)) {
    const target = path.join(source, file);
    const html = await readFile(target, 'utf8');
    const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
    if (!title) throw new Error(`Missing title: ${file}`);
    const description = html.match(/<meta name="description" content="([^"]*)"/)?.[1]
      || (file === 'zamowienie.html'
        ? 'Sprawdź podsumowanie wybranego wariantu i zapytaj o termin realizacji domu Combstruct.'
        : `Poznaj system Combstruct i zobacz interaktywny model konstrukcji domu.`);
    const url = origin + (file === 'index.html' ? '/' : `/${file}`);
    const img = images[id];
    const alt = `Combstruct ${id} — wizualizacja wykończenia domu`;
    const tags = `<!-- Share metadata: generated from the page title and description. -->
<link rel="canonical" href="${url}">
<link rel="icon" type="image/x-icon" href="favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
<link rel="icon" type="image/png" sizes="192x192" href="icon-192x192.png">
<link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
<link rel="manifest" href="site.webmanifest">
<meta property="og:site_name" content="Combstruct">
<meta property="og:locale" content="pl_PL">
<meta property="og:type" content="website">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${img.url}">
<meta property="og:image:secure_url" content="${img.url}">
<meta property="og:image:type" content="image/jpeg">
<meta property="og:image:width" content="${img.width}">
<meta property="og:image:height" content="${img.height}">
<meta property="og:image:alt" content="${alt}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="${description}">
<meta name="twitter:image" content="${img.url}">
<meta name="twitter:image:alt" content="${alt}">
<!-- End share metadata -->`;
    const updated = html.replace(/(<head[^>]*>)([\s\S]*?)(<\/head>)/, (_, open, head, close) => {
      const clean = head
        .replace(/<!-- Share metadata:[\s\S]*?<!-- End share metadata -->\s*/g, '')
        .replace(/\s*<meta\b[^>]*(?:property|name)="(?:og:|twitter:)[^"]*"[^>]*>/g, '')
        .replace(/\s*<link\b[^>]*rel="(?:canonical|icon|shortcut icon|apple-touch-icon|manifest)"[^>]*>/g, '')
        .trim();
      return `${open}\n${clean}\n${tags}\n${close}`;
    });
    await writeFile(target, updated);
  }
}
