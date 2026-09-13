import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,readdir} from 'node:fs/promises';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {Script,runInNewContext} from 'node:vm';
import {pageNames} from './build-locales.mjs';

const root=fileURLToPath(new URL('../',import.meta.url));
const read=file=>readFile(path.join(root,file),'utf8');
const json=async file=>JSON.parse(await read(file));
async function files(dir){const list=[];for(const f of await readdir(dir,{withFileTypes:true})){const p=path.join(dir,f.name);list.push(...f.isDirectory()?await files(p):[p]);}return list;}
const nonCopyKeys=new Set(['name','label','description','title']);
function withoutCopy(x){return Array.isArray(x)?x.map(withoutCopy):x&&typeof x==='object'?Object.fromEntries(Object.entries(x).filter(([k])=>!nonCopyKeys.has(k)).map(([k,v])=>[k,withoutCopy(v)])):x;}

test('English pages have reciprocal metadata and do not replace Polish content',async()=>{
  for(const [pl,en] of Object.entries(pageNames)) {
    const original=await read('site/'+pl),translated=await read('site/en/'+en);
    assert.match(original,/<html lang="pl"/);assert.match(translated,/<html lang="en"/);
    assert(translated.includes(`rel="canonical" href="https://www.combstruct.com/en/${en}"`));
    for(const html of [original,translated]) {
      assert.equal((html.match(/rel="canonical"/g)||[]).length,1);
      for(const lang of ['pl','en','x-default'])assert.equal((html.match(new RegExp(`hreflang="${lang}" href=`, 'g'))||[]).length,1);
      if(html.includes('class="site-header"'))assert.equal((html.match(/class="language-switch"/g)||[]).length,1);
    }
    assert.match(translated,/property="og:locale" content="en_GB"/);
  }
  assert.match(await read('site/index.html'),/Dom składany/);
  assert.match(await read('site/en/index.html'),/A home that fits/);
  assert.match(await read('site/en/enquiry.html'),/noindex,follow/);
  const manifest=await json('site/en/site.webmanifest');
  assert.equal(manifest.lang,'en');assert.equal(manifest.start_url,'/en/index.html');
  assert.match(await read('site/en/index.html'),/rel="manifest" href="site.webmanifest"/);
});

test('translation preserves every kit quantity, board coordinate and ID',async()=>{
  for(const id of ['30','90','125']) {
    const pl=await json(`site/assets/parts/${id}.json`),en=await json(`site/en/assets/parts/${id}.json`);
    assert.deepEqual(withoutCopy(en),withoutCopy(pl));
    assert(en.families.every(f=>!/[ąćęłńóśźż]/i.test(f.name)));
  }
});

test('prices stay in PLN, including VAT, with English thousands separators',async()=>{
  const get=async prefix=>{const context={window:{}};runInNewContext(await read(`site/${prefix}assets/project-offers.js`),context);return JSON.parse(JSON.stringify(context.window.COMBSTRUCT_OFFERS));};
  const pl=await get(''),en=await get('en/');
  assert.deepEqual(en.map(p=>p.variants.map(v=>[v.material,v.materials,v.assembly])),pl.map(p=>p.variants.map(v=>[v.material,v.materials,v.assembly])));
  const catalogue=await read('site/en/projects.html');
  for(const project of en){const amount=project.variants[0].materials.toLocaleString('en-GB');assert(catalogue.includes(`${amount} PLN incl. VAT`));}
  assert.match(await read('site/en/zamowienie.js'),/Intl.NumberFormat\('en-GB'/);
});

test('legacy English routes stay English and the homepage resolves relative assets',async()=>{
  const {redirects}=await json('vercel.json');
  const match=url=>redirects.find(rule=>new RegExp('^'+rule.source.replace(/:[a-z]+\(([^)]+)\)/g,'($1)')+'/?$').test(url));
  for(const url of ['/en','/en/contact','/en/projects','/en/faq','/en/products'])assert(match(url)?.destination.startsWith('/en/'));
  assert.equal(match('/en').destination,'/en/index.html');
  assert.equal(match('/pl').destination,'/');
  assert.equal(match('/de/contact').destination,'/kontakt.html');
  assert.equal(match('/en/combstruct-90.html'),undefined);
});

test('English plans and model labels contain no untranslated Polish text; scripts parse',async()=>{
  for(const f of await files(path.join(root,'site/en'))) {
    let text=await readFile(f,'utf8');
    if(f.endsWith('.js')) {
      new Script(text,{filename:f});
      text=text.replace(/\\u([\da-f]{4})|\\x([\da-f]{2})/gi,(_,u,x)=>String.fromCodePoint(parseInt(u||x,16)));
    } else if(f.endsWith('.html')||f.endsWith('.svg')) {
      text=text.replace(/<!--[^]*?-->|<(script|style|metadata)\b[^>]*>[^]*?<\/\1>|<[^>]+>/g,'');
    } else continue;
    assert(!/[ąćęłńóśźż]/i.test(text),path.relative(root,f));
  }
  assert.match(await read('site/en/index.html'),/<track kind="subtitles"[^>]+srclang="en"/);
  assert.match(await read('site/assets/spot-en.vtt'),/^WEBVTT/);
});

test('rebuilding keeps generated content stable',async()=>{
  const snapshot=async()=>Object.fromEntries(await Promise.all((await files(path.join(root,'site'))).filter(p=>/\.(html|js|svg|json|xml)$/.test(p)).map(async p=>[path.relative(root,p),createHash('sha256').update(await readFile(p)).digest('hex')])));
  const before=await snapshot();execFileSync(process.execPath,['scripts/build-site.mjs'],{cwd:root,stdio:'pipe'});assert.deepEqual(await snapshot(),before);
});
