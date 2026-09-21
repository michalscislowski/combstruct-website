import fs from 'node:fs';
import {createHash} from 'node:crypto';
const path='lib/construction/qa/quantities.json';
const audit=JSON.parse(fs.readFileSync(path)),rates=audit.rates;
const fmt=n=>n.toLocaleString('pl-PL').replace(/\s/g,'\u202f');
const round=n=>Math.ceil(n/rates.roundPriceUpTo)*rates.roundPriceUpTo;
let catalogue=fs.readFileSync('site/projekty.html','utf8');
for(const [id,q] of Object.entries(audit.projects)){
 const parts=JSON.parse(fs.readFileSync(`site/assets/parts/${id}.json`));
 if(parts.basis!=='delivery-before-cutting')throw new Error('Offers require the delivered kit');
 const oldPrice=q.variants[0].materials;
 q.materialBasis=parts.basis;q.deliveryBoards=parts.totalBoards;q.deliveryLengthM=parts.material.lengthM;
 q.structureSheets=parts.material.sheets;q.battenSheets=parts.battens?.sheets||0;
 q.sheets=parts.material.totalSheets??parts.material.sheets;q.displayFullBoards=parts.material.fullBoards;
 const file=`site/combstruct-${id}.html`;let html=fs.readFileSync(file,'utf8');
 for(const variant of q.variants){
  const raw=q.sheets*rates[variant.material==='osb3'?'osb3Sheet':'plywoodSheet']+q.insulationBlocks*rates.insulationBlock;
  variant.materials=round(raw);variant.assembly=round(raw+q.sheets*rates.assemblyPerSheet);
  const regex=new RegExp(`(data-price-material="${variant.material}"><dt>[^<]+</dt><dd><strong data-price-amount )data-materials="\\d+" data-assembly="\\d+">[^<]+`);
  if(!regex.test(html))throw new Error(`Missing ${id} ${variant.material} offer`);
  html=html.replace(regex,`$1data-materials="${variant.materials}" data-assembly="${variant.assembly}">${fmt(variant.materials)}`);
 }
 html=html.replace(/<dt>(?:Elementy do montażu|Deski w zestawie)<\/dt><dd>[^<]+/,`<dt>Deski w zestawie</dt><dd>${fmt(parts.totalBoards)} `)
  .replace(/<dt>Płyty 2500 × 1250 × 18 mm<\/dt><dd>[^<]+/,`<dt>Płyty 2500 × 1250 × 18 mm</dt><dd>${fmt(q.sheets)} `)
  .replace(/<dt>Kostki izolacji<\/dt><dd>[^<]+/,`<dt>Kostki izolacji</dt><dd>${fmt(q.insulationBlocks)} `)
  .replace(/(data-parts-source="assets\/parts\/\d+\.json)\?v=[^"]+/,`$1?v=${createHash('sha256').update(JSON.stringify(parts)).digest('hex').slice(0,8)}`);
 if(parts.battens){
  const b=parts.battens;
  const extra=`<div><dt>Łaty w modelu</dt><dd>${b.lengthM.toLocaleString('pl-PL',{maximumFractionDigits:1,minimumFractionDigits:1})} <span>mb</span></dd></div><div><dt>Łaty 2500 × 60 × 18 mm</dt><dd>${fmt(b.stockStrips)} <span>szt.</span></dd></div><div><dt>Płyty na łaty</dt><dd>${fmt(b.sheets)} <span>szt.</span></dd></div>`;
  html=html.replace(/(<dl class="parts-totals">)([\s\S]*?)(<\/dl>)/,(_,open,content,close)=>open+content.replace(/<div><dt>(?:Łaty w modelu|Łaty 2500 × 60 × 18 mm|Płyty na łaty)<\/dt>[\s\S]*?<\/div>/g,'')+extra+close);
  const note=`<p class="batten-material-note">Płyty łącznie: ${fmt(q.structureSheets)} na deski + ${fmt(b.sheets)} na łaty. Łaty z tej samej płyty: 20 odcinków po 2,5 m, bez rzazu. Krótsze odcinki wykorzystujemy ponownie według rozkroju; liczba pełnych łat uwzględnia pozostałe ścinki.</p>`;
  html=html.replace(/\s*<p class="batten-material-note">[\s\S]*?<\/p>/g,'').replace(/(<dl class="parts-totals">[\s\S]*?<\/dl>)/,`$1\n            ${note}`);
 }
 fs.writeFileSync(file,html);
 const card=new RegExp(`(href="combstruct-${id}\\.html"[\\s\\S]*?Materiały od )[^<]+`);
 if(!card.test(catalogue))throw new Error(`Missing catalogue card ${id}`);
 catalogue=catalogue.replace(card,`$1${fmt(q.variants[0].materials)} zł brutto`);
 console.log(JSON.stringify({project:id,stockBoards:q.deliveryBoards,sheets:q.sheets,previousStartingPrice:oldPrice,variants:q.variants}));
}
fs.writeFileSync('site/projekty.html',catalogue);
fs.writeFileSync(path,JSON.stringify(audit,null,2)+'\n');
