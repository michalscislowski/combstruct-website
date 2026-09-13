import http from 'node:http';
import {createReadStream} from 'node:fs';
import {readFile, stat} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const root = fileURLToPath(new URL('../dist/', import.meta.url));
const config = JSON.parse(await readFile(new URL('../vercel.json', import.meta.url)));
const redirects = config.redirects.map(rule => ({...rule,
  pattern: new RegExp('^' + rule.source.replace(/:[a-z]+\(([^)]+)\)/g, '($1)') + '/?$')}));
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8',
  '.js':'text/javascript; charset=utf-8','.vtt':'text/vtt; charset=utf-8','.json':'application/json; charset=utf-8','.png':'image/png','.jpg':'image/jpeg',
  '.svg':'image/svg+xml','.mp4':'video/mp4','.xml':'application/xml','.txt':'text/plain',
  '.ico':'image/x-icon','.webmanifest':'application/manifest+json'};
const server = http.createServer(async(req,res) => {
  try {
    const url = new URL(req.url, 'http://localhost');
    const redirect = redirects.find(rule => rule.pattern.test(url.pathname));
    if (redirect) {const destination=new URL(redirect.destination,'http://localhost');destination.search=url.search;res.writeHead(redirect.permanent?308:307,{Location:destination.pathname+destination.search+destination.hash});res.end();return;}
    const pathname = decodeURIComponent(url.pathname);
    let file = path.resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
    let info = file.startsWith(root) ? await stat(file).catch(() => null) : null;
    if(info?.isDirectory()){file=path.join(file,'index.html');info=await stat(file).catch(()=>null);}
    if (!info?.isFile()) {res.writeHead(404);res.end('Nie znaleziono strony.');return;}
    let start=0,end=info.size-1,status=200;
    const headers={'Content-Type':types[path.extname(file)]||'application/octet-stream','Accept-Ranges':'bytes'};
    if (req.headers.range) {
      const range=/^bytes=(\d+)-(\d*)$/.exec(req.headers.range);
      if (!range) {res.writeHead(416,{'Content-Range':`bytes */${info.size}`});res.end();return;}
      start=Number(range[1]);end=range[2]?Math.min(Number(range[2]),end):end;
      if (start>end) {res.writeHead(416,{'Content-Range':`bytes */${info.size}`});res.end();return;}
      status=206;headers['Content-Range']=`bytes ${start}-${end}/${info.size}`;
    }
    headers['Content-Length']=end-start+1;
    res.writeHead(status,headers);
    if(req.method==='HEAD'){res.end();return;}
    createReadStream(file,{start,end}).pipe(res);
  } catch {res.writeHead(400);res.end('Nieprawidłowy adres.');}
});
server.listen(Number(process.env.PORT||4173),'127.0.0.1',()=>console.log(`Local website: http://127.0.0.1:${server.address().port}`));
