import {readFile, writeFile, mkdir, readdir, rm} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {Script} from 'node:vm';

export const pageNames = {
  'index.html':'index.html', 'projekty.html':'projects.html',
  'technologie.html':'technology.html', 'kontakt.html':'contact.html',
  'zamowienie.html':'enquiry.html',
  'combstruct-30.html':'combstruct-30.html', 'combstruct-90.html':'combstruct-90.html',
  'combstruct-125.html':'combstruct-125.html', 'system-viewer.html':'system-viewer.html',
  'project-model.html':'project-model.html', 'project-model-90.html':'project-model-90.html',
  'project-model-125.html':'project-model-125.html',
};
const root=fileURLToPath(new URL('../',import.meta.url));
const dictionary=JSON.parse(await readFile(path.join(root,'locales/en.json'),'utf8'));
const escapeRE=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
const ascii=s=>[...s].map(c=>c.charCodeAt(0)>127?'\\u'+c.charCodeAt(0).toString(16).toUpperCase().padStart(4,'0'):c).join('');
const compactAscii=s=>[...s].map(c=>c.charCodeAt(0)>127?(c.charCodeAt(0)<256?'\\x'+c.charCodeAt(0).toString(16).toUpperCase().padStart(2,'0'):'\\u'+c.charCodeAt(0).toString(16).toUpperCase().padStart(4,'0')):c).join('');
// Static English assets are built from the same Polish source. No browser-side
// machine translation, DOM replacement observer or second set of quantities.
const replacements=new Map();
for(const [pl,en] of Object.entries(dictionary)) {
  if(/["'`\\$]/.test(en)) throw Error('Use typographic quotes in English copy: '+en);
  for(const key of [pl,ascii(pl),compactAscii(pl),ascii(pl).replace(/\\u[\dA-F]{4}/g,m=>m.toLowerCase()),compactAscii(pl).replace(/\\[ux][\dA-F]+/g,m=>m.toLowerCase())]) replacements.set(key,en);
}
const phrases=[...replacements.keys()].sort((a,b)=>b.length-a.length).map(s=>
  (/[\p{L}\d]/u.test(s[0])?'(?<![\\p{L}\\d_$])':'')+escapeRE(s)+
  (/[\p{L}\d]/u.test(s.at(-1))?'(?![\\p{L}\\d_$])':''));
const phraseRE=new RegExp(phrases.join('|'),'gu');
const translate=s=>s.replace(phraseRE,key=>replacements.get(key));
const decode=s=>s.replace(/&#x([\da-f]+);|&#(\d+);|&(amp|lt|gt|quot|apos|nbsp);/gi,(_,hex,num,named)=>hex?String.fromCodePoint(parseInt(hex,16)):num?String.fromCodePoint(Number(num)):({amp:'&',lt:'<',gt:'>',quot:'"',apos:"'",nbsp:'\u00a0'}[named]));
const escapeText=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const escapeAttr=s=>escapeText(s).replace(/"/g,'&quot;');
function words(value) {
  const s=decode(value),key=s.trim();
  // Convert Polish decimal separators before translation, never English
  // thousands separators in approved copy (e.g. 50,000 PLN).
  const en=(dictionary[key]??translate(key.replace(/(\d),(\d)/g,'$1.$2'))).replace(/\b\d{1,3}(?:[ \u00a0\u202f]\d{3})+\b/g,n=>Number(n.replace(/\s/g,'')).toLocaleString('en-GB'));
  return s.slice(0,s.indexOf(key))+en+s.slice(s.indexOf(key)+key.length);
}
async function walk(dir) {
  const files=[];
  for(const e of await readdir(dir,{withFileTypes:true}))if(e.name!=='en') {
    const p=path.join(dir,e.name);files.push(...e.isDirectory()?await walk(p):[p]);
  }
  return files;
}
const origin='https://www.combstruct.com';
function languageTags(file,english) {
  const pl=origin+(file==='index.html'?'/':'/'+file);
  const en=origin+'/en/'+pageNames[file];
  return `<!-- Language alternatives -->\n<link rel="alternate" hreflang="pl" href="${pl}">\n<link rel="alternate" hreflang="en" href="${en}">\n<link rel="alternate" hreflang="x-default" href="${pl}">\n<meta property="og:locale:alternate" content="${english?'pl_PL':'en_GB'}">\n<!-- End language alternatives -->`;
}
function addLanguageUI(html,file,english) {
  html=html.replace(/<!-- Language alternatives -->[\s\S]*?<!-- End language alternatives -->\s*/g,'')
    .replace(/<!-- Language switch -->[\s\S]*?<!-- End language switch -->\s*/g,'')
    .replace(/<script defer src="(?:\.\.\/)?language\.js"><\/script>\s*/g,'');
  html=html.replace('</head>',languageTags(file,english)+'\n</head>');
  if(!html.includes('class="site-header"'))return html;
  const pl=english?'../'+file:file;
  const en=english?pageNames[file]:'en/'+pageNames[file];
  const nav=`<!-- Language switch --><nav class="language-switch" aria-label="${english?'Language':'Język'}"><a href="${pl}" lang="pl" hreflang="pl" data-language="pl"${english?'':' aria-current="page"'} aria-label="Polski">PL</a><a href="${en}" lang="en" hreflang="en" data-language="en"${english?' aria-current="page"':''} aria-label="English">EN</a></nav><!-- End language switch -->`;
  html=html.includes('<button class="menu-toggle')?html.replace('<button class="menu-toggle',nav+'\n<button class="menu-toggle'):html.replace('</header>',nav+'</header>');
  return html.replace('</head>',`<script defer src="${english?'../':''}language.js"></script>\n</head>`).replace(/[ \t]+\n/g,'\n').replace(/\n{3,}/g,'\n\n');
}

export async function buildLocales(source) {
  const dest=path.join(source,'en');await rm(dest,{recursive:true,force:true});await mkdir(dest,{recursive:true});
  const files=await walk(source);
  const localized=new Set(files.filter(f=>/\.(js|svg|json)$/.test(f)).map(f=>path.relative(source,f)));
  const pageURL=ref=>{
    if(!ref||ref[0]==='#'||/^(?:[a-z]+:|\/\/)/i.test(ref))return ref;
    const [file,suffix='']=ref.split(/(?=[?#])/s,2);
    if(pageNames[file])return pageNames[file]+suffix;
    if(localized.has(file)||file==='site.webmanifest')return file+suffix;
    return '../'+ref;
  };
  function markup(html) {
    return html.replace(/<!--[^]*?-->|<(script|style|metadata)\b[^>]*>[^]*?<\/\1>|<[^>]+>|[^<]+/g,token=>{
      if(token.startsWith('<!--'))return token;
      if(/^<(script|style|metadata)\b/.test(token))return token.replace(/\bsrc="([^"]+)"/,(_,url)=>`src="${pageURL(url)}"`);
      if(token.startsWith('<'))return token.replace(/\b([\w-]+)="([^"]*)"/g,(all,key,value)=>{
        if(['href','src','poster','data-model-src','data-parts-source','data-src'].includes(key)||key==='value'&&pageNames[value])return `${key}="${pageURL(value)}"`;
        if(['alt','title','aria-label','data-model-title','placeholder','content'].includes(key)&&!/^https?:/.test(value))return `${key}="${escapeAttr(words(value))}"`;
        return all;
      });
      return escapeText(words(token));
    });
  }
  for(const f of files) {
    const rel=path.relative(source,f);if(!localized.has(rel))continue;
    let text=await readFile(f,'utf8');
    if(rel.endsWith('.svg'))text=markup(text);
    else if(rel.endsWith('.json')) {
      const visit=x=>typeof x==='string'?translate(x):Array.isArray(x)?x.map(visit):x&&typeof x==='object'?Object.fromEntries(Object.entries(x).map(([k,v])=>[k,visit(v)])):x;
      text=JSON.stringify(visit(JSON.parse(text)));
    } else {
      text=translate(text);
      // All behaviour and identifiers are shared; only page destinations and
      // image paths differ. Numbers are kept in PLN and formatted in English.
      for(const [pl,en] of Object.entries(pageNames))text=text.replaceAll(pl,en);
      text=text.replace(/(["'`])assets\/([^"'`]+\.(?:png|jpg|mp4))/g,'$1../assets/$2')
        .replace(/\.replace\((['"])\.\1,(['"]),\2\)/g,'.replace(".",".")');
      new Script(text,{filename:'en/'+rel});
    }
    const target=path.join(dest,rel);await mkdir(path.dirname(target),{recursive:true});await writeFile(target,text);
  }
  for(const [file,enFile] of Object.entries(pageNames)) {
    let pl=await readFile(path.join(source,file),'utf8');
    pl=addLanguageUI(pl,file,false);await writeFile(path.join(source,file),pl);
    let en=markup(pl).replace('<html lang="pl"','<html lang="en"');
    const url=origin+'/en/'+enFile;
    en=en.replace(/(<link rel="canonical" href=")[^"]+/,`$1${url}`).replace(/(<meta property="og:url" content=")[^"]+/,`$1${url}`);
    en=en.replace(/Zapytanie%20o%20dom%20Combstruct/g,'Combstruct%20home%20enquiry');
    en=addLanguageUI(en,file,true);
    if(file==='index.html')en=en.replace(/(<source src="\.\.\/assets\/combstruct-spot-web.mp4" type="video\/mp4">)/,'$1<track kind="subtitles" src="../assets/spot-en.vtt" srclang="en" label="English" default>');
    await writeFile(path.join(dest,enFile),en);
  }
  const manifest=JSON.parse(await readFile(path.join(source,'site.webmanifest'),'utf8'));
  Object.assign(manifest,{lang:'en',description:'A home that fits together like a puzzle. DIY and assembled house kits.',start_url:'/en/index.html',scope:'/en/'});
  manifest.icons=manifest.icons.map(icon=>({...icon,src:'../'+icon.src}));
  await writeFile(path.join(dest,'site.webmanifest'),JSON.stringify(manifest,null,2)+'\n');
  const publicPages=Object.keys(pageNames).filter(f=>!/(?:viewer|model|zamowienie)/.test(f));
  const urls=publicPages.flatMap(file=>[origin+(file==='index.html'?'/':'/'+file),origin+'/en/'+pageNames[file]]);
  await writeFile(path.join(source,'sitemap.xml'),'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+urls.map(url=>`  <url><loc>${url}</loc></url>`).join('\n')+'\n</urlset>\n');
  console.log(`English: ${Object.keys(pageNames).length} pages and ${localized.size} translated assets generated.`);
}
