import layout from './layout.js';
const num=v=>Number(v).toFixed(4).replace(/\.?0+$/,'')||'0';
const pl=v=>Number(v).toLocaleString('pl-PL',{minimumFractionDigits:1,maximumFractionDigits:1});
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));
const rect=(x,z,w,h,a='')=>`<rect x="${num(x)}" y="${num(z)}" width="${num(w)}" height="${num(h)}" ${a}/>`;
const line=(x,z,xx,zz,a='')=>`<line x1="${num(x)}" y1="${num(z)}" x2="${num(xx)}" y2="${num(zz)}" ${a}/>`;
const text=(x,z,s,a='')=>`<text x="${num(x)}" y="${num(z)}" ${a}>${esc(s)}</text>`;
const circle=(x,z,r,a='')=>`<circle cx="${num(x)}" cy="${num(z)}" r="${num(r)}" ${a}/>`;
function bed(x,z,w,h){return rect(x,z,w,h,'rx=".045" fill="#fff"')+rect(x+.035,z+.04,w-.07,h-.08,'rx=".03" fill="#ecede4"')+rect(x+.09,z+.11,w-.18,.32,'rx=".065" fill="#fff"')+line(x+.04,z+.51,x+w-.04,z+.51);}
function horizontalBed(x,z,w,h){return rect(x,z,w,h,'rx=".045" fill="#fff"')+rect(x+.035,z+.04,w-.07,h-.08,'rx=".03" fill="#ecede4"')+rect(x+.10,z+.09,.32,h-.18,'rx=".065" fill="#fff"')+line(x+.51,z+.04,x+.51,z+h-.04);}
function shower(x,z,w=.90,h=.90){return rect(x,z,w,h,'rx=".035" fill="#e8f0f0"')+line(x+.08,z+.08,x+w-.08,z+h-.08)+line(x+w-.08,z+.08,x+.08,z+h-.08)+circle(x+w/2,z+h/2,.027);}
function wc(x,z){return rect(x,z,.38,.17,'rx=".025" fill="#fff"')+`<path d="M${num(x+.025)},${num(z+.17)}v.25a.165,.20 0 0 0 .33,0v-.25Z" fill="#fff"/>`;}
function basin(x,z,w=.52,h=.40){return rect(x,z,w,h,'rx=".035" fill="#fff"')+`<ellipse cx="${num(x+w/2)}" cy="${num(z+h/2)}" rx="${num(w*.34)}" ry="${num(h*.31)}"/>`;}
function wardrobe(x,z,w,h){return rect(x,z,w,h,'fill="#eeeae1"')+line(x,z,x+w,z+h)+line(x+w,z,x,z+h);}
function furnishings(level){
  const c=[];
  if(level==='ground'){
    c.push(horizontalBed(-4.49,-3.00,2,.90),rect(-2.40,-2.96,1.01,.55,'fill="#eeeae1"'),rect(-2.20,-2.38,.48,.45,'rx=".06"'));
    c.push(shower(-4.51,-.425),wc(-3.40,-.41),basin(-4.43,.89));
    c.push(rect(-4.50,2.40,.60,.60,'fill="#fff"'),circle(-4.20,2.70,.19),wardrobe(-4.50,1.67,.60,.65),wardrobe(-1.76,1.68,.37,.65));
    c.push(rect(-1.035,-3.015,.60,2.39,'fill="#ede8dc"'),basin(-.96,-2.94,.42,.54));
    c.push(rect(.74,-2.56,.70,1.46,'rx=".025" fill="#e7dfcf"'));
    for(const [x,z]of[[-.92,-2.20],[-.70,-2.20],[-.92,-1.97],[-.70,-1.97]])c.push(circle(x,z,.066));
    c.push(rect(2.45,-2.72,.90,1.72,'rx=".07" fill="#e5dece"'));
    for(const z of[-2.57,-1.89,-1.21]){c.push(rect(2.08,z,.30,.40,'rx=".07"'),rect(3.43,z,.30,.40,'rx=".07"'));}
    c.push(rect(3.69,.21,.79,2.73,'rx=".10" fill="#e1e7dc"'),rect(2.33,2.23,1.51,.72,'rx=".08" fill="#e1e7dc"'));
    for(const z of[.38,1.08,1.78])c.push(rect(3.74,z,.57,.63,'rx=".06" fill="#f6f7f3"'));
    c.push(circle(3.05,1.48,.41,'fill="#eee6d9"'),rect(1.45,1.28,.06,1.04,'fill="#4d5a4f"'));
  }else{
    c.push(horizontalBed(-4.49,-3.00,2,.89),horizontalBed(-4.49,-2.03,2,.89),wardrobe(-4.49,-.64,1.64,.61));
    c.push(horizontalBed(-4.49,.66,2,1.60),wardrobe(-4.49,2.46,2.09,.55));
    c.push(rect(-1.03,-3.01,1.66,.74,'rx=".08" fill="#e8f0f0"'),rect(-.95,-2.94,1.50,.60,'rx=".25" fill="#fff"'),wc(.72,-3.00),basin(.52,-1.64,.59,.43));
    c.push(shower(1.45,-2.075,.90,.90),wc(1.58,-3.00),basin(2.24,-2.96,.54,.42));
    c.push(wardrobe(3.90,-3.01,.60,1.30),wardrobe(3.15,-3.01,.66,.56));
    c.push(bed(1.83,1.02,1.60,2),rect(1.48,2.55,.28,.38,'fill="#eeeae1"'),rect(3.50,2.55,.34,.38,'fill="#eeeae1"'),rect(3.54,-.71,.83,.43,'fill="#eeeae1"'));
  }
  return `<g class="furniture">${c.join('')}</g>`;
}
function wallMarkup(w){const dx=w.b[0]-w.a[0],dz=w.b[1]-w.a[1],h=w.depth/2;return Math.abs(dx)>Math.abs(dz)?rect(w.a[0],w.a[1]-h,dx,w.depth,'fill="#294235"'):rect(w.a[0]-h,w.a[1],w.depth,dz,'fill="#294235"');}
function openingsMarkup(w){
  const axis=Math.abs(w.b[0]-w.a[0])>Math.abs(w.b[1]-w.a[1])?0:1,out=[];
  for(const h of w.holes){const start=w.a[axis]+h.at,fixed=w.a[1-axis],end=start+h.width,depth=w.depth+.03,isPatio=/patio/.test(h.kind),isDoor=/door/.test(h.kind)&&!isPatio;
    out.push(axis===0?rect(start,fixed-depth/2,h.width,depth,'fill="#fff"'):rect(fixed-depth/2,start,depth,h.width,'fill="#fff"'));
    if(h.kind==='sliding-door'){
      const off=.16;
      out.push(axis===0?line(start-h.width*.86,fixed+off,start+h.width*.14,fixed+off,'class="door"'):line(fixed+off,start-h.width*.86,fixed+off,start+h.width*.14,'class="door"'));
      out.push(axis===0?line(start,fixed-.07,start,fixed+.07,'class="door"'):line(fixed-.07,start,fixed+.07,start,'class="door"'));
    }
    else if(!isDoor){for(const off of[-.038,.038])out.push(axis===0?line(start,fixed+off,end,fixed+off,'class="glass"'):line(fixed+off,start,fixed+off,end,'class="glass"'));if(isPatio)out.push(axis===0?line((start+end)/2,fixed-.065,(start+end)/2,fixed+.065,'class="glass"'):line(fixed-.065,(start+end)/2,fixed+.065,(start+end)/2,'class="glass"'));}
    else{
      // Leaves are shown into rooms, with the hall kept visibly clear.
      let dir=1;if(axis===0&&(/entrance|vestibule|family-bath|rear-bedroom/.test(h.id)))dir=-1;if(axis===1&&/bath-door|utility-door/.test(h.id))dir=-1;
      dir=h.swing??dir;
      const d=h.width;
      if(axis===0)out.push(line(start,fixed,start,fixed+dir*d,'class="door"'),`<path d="M${num(end)},${num(fixed)}A${num(d)},${num(d)} 0 0 ${dir>0?1:0} ${num(start)},${num(fixed+dir*d)}" class="swing"/>`);
      else if(h.id==='bath-door')out.push(line(fixed,end,fixed+dir*d,end,'class="door"'),`<path d="M${num(fixed)},${num(start)}A${num(d)},${num(d)} 0 0 ${dir>0?1:0} ${num(fixed+dir*d)},${num(end)}" class="swing"/>`);
      else out.push(line(fixed,start,fixed+dir*d,start,'class="door"'),`<path d="M${num(fixed)},${num(end)}A${num(d)},${num(d)} 0 0 ${dir>0?0:1} ${num(fixed+dir*d)},${num(start)}" class="swing"/>`);
    }
  }
  return out.join('');
}
function stairMarkup(level){const s=layout.stair,out=[rect(s.x0,s.z0,s.x1-s.x0,s.z1-s.z0,'fill="#f1f1ea" stroke="#aeb8aa" stroke-width=".018"')];
  for(let j=0;j<=7;j++){const z=s.z0+j*s.tread;out.push(line(s.x0,z,s.x0+s.flightWidth,z),line(s.x1-s.flightWidth,z,s.x1,z));}
  const mid=s.z1-s.landingDepth;out.push(line(s.x0,mid,s.x1,mid),rect(s.x0+s.flightWidth,s.z0,s.x1-s.x0-2*s.flightWidth,mid-s.z0,'fill="#fff"'));
  const a=s.x0+s.flightWidth/2,b=s.x1-s.flightWidth/2,zz=s.z1-s.landingDepth/2;
  out.push(`<path d="M${num(a)},${num(s.z0+.18)}V${num(zz)}H${num(b)}V${num(s.z0+.20)}m-.075,.12 .075,-.12 .075,.12" fill="none" stroke="#68816b" stroke-width=".023"/>`);
  return `<g class="furniture">${out.join('')}</g>`;
}
export function planToSVG(level='ground'){
  const {envelope:e,terraces,rooms,facts}=layout,upper=level==='upper',terrace=upper?terraces.balcony:terraces.ground;
  const xmin=e.x0-.67,zmin=e.z0-.86,width=(terrace.x1-xmin)+.79,height=e.depth+1.99;
  const title=upper?'Poddasze':'Parter';const out=[`<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="plan-title plan-desc" viewBox="${num(xmin)} ${num(zmin)} ${num(width)} ${num(height)}" style="display:block;width:100%;height:auto;background:#fff;font-family:Arial,Helvetica,sans-serif"><title id="plan-title">Combstruct 90 — ${title}</title><desc id="plan-desc">${upper?'Trzy sypialnie, dwie łazienki, garderoba i balkon.':'Salon z kuchnią, gabinet, łazienka, pomieszczenie gospodarcze i taras.'} Układ o wymiarach 9,58 na 6,67 m.</desc><style>.furniture{fill:#fff;stroke:#aeb6a7;stroke-width:.017}.glass{stroke:#6a8d98;stroke-width:.022}.door{stroke:#6e826c;stroke-width:.025}.swing{stroke:#a0ae99;stroke-width:.015;fill:none;stroke-dasharray:.055 .036}.label{fill:#294235;font-size:.196px;font-weight:600;paint-order:stroke;stroke:#fff;stroke-width:.072;stroke-linejoin:round;text-anchor:middle}.area{fill:#6e7b68;font-size:.181px;font-weight:400}.dim{stroke:#aeb8a9;stroke-width:.014;fill:#6a7864}.dim text{stroke:none;font-size:.21px}.knee{stroke:#bac5b3;stroke-width:.017;stroke-dasharray:.11 .075;fill:none}</style>`];
  out.push(text(e.x0,e.z0-.45,title,'fill="#294235" font-size=".34" font-weight="600"'),text(e.x1,e.z0-.45,`${pl(upper?facts.upperArea:facts.groundArea)} m²`,'fill="#7b886f" font-size=".27" text-anchor="end"'));
  out.push(rect(terrace.x0,terrace.z0,terrace.x1-terrace.x0,terrace.z1-terrace.z0,'fill="#f0eadf" stroke="#c9c0ae" stroke-width=".022"'));
  for(let x=terrace.x0+.24;x<terrace.x1;x+=.24)out.push(line(x,terrace.z0,x,terrace.z1,'stroke="#ded5c4" stroke-width=".012"'));
  const tx=(terrace.x0+terrace.x1)/2;out.push(text(tx,-.30,upper?'Balkon':'Taras','fill="#807355" font-size=".24" text-anchor="middle" font-weight="600"'),text(tx,.02,`${pl(upper?facts.balconyArea:facts.terraceArea)} m²`,'fill="#8b7e63" font-size=".21" text-anchor="middle"'));
  if(!upper){for(const z of[1.01,2.08])out.push(rect(terrace.x0+.78,z,.69,.86,'fill="#fff" stroke="#c8c0b0" stroke-width=".02" rx=".08"'));out.push(circle(terrace.x0+1.67,1.85,.28,'fill="#e7e0d2" stroke="#c8c0b0" stroke-width=".02"'));}
  out.push(rect(e.x0,e.z0,e.width,e.depth,'fill="#fff"'));
  for(const r of rooms.filter(r=>r.level===level))out.push(`<polygon points="${r.polygon.map(p=>`${num(p[0])},${num(p[1])}`).join(' ')}" fill="${/bath/.test(r.id)?'#eef4f3':/bed|master|office/.test(r.id)?'#f6f3eb':'#f8f8f2'}"/>`);
  out.push(furnishings(level),stairMarkup(level));
  const walls=[...layout.exteriorWalls,...layout.partitions].filter(w=>w.level===level);for(const w of walls)out.push(wallMarkup(w));for(const w of walls)out.push(openingsMarkup(w));
  if(upper){const zh=e.depth/2+e.kneeHeight-2.2;out.push(line(layout.inner.left,-zh,layout.inner.right,-zh,'class="knee"'),line(layout.inner.left,zh,layout.inner.right,zh,'class="knee"'),text(e.x0+.35,-zh-.08,'h = 2,20 m','fill="#8b987f" font-size=".15"'),text(e.x0+.35,zh-.08,'h = 2,20 m','fill="#8b987f" font-size=".15"'));}
  for(const r of rooms.filter(r=>r.level===level)){const [x,z]=r.label;let lines=[r.name];if(r.id==='living')lines=['Salon + jadalnia','+ kuchnia'];if(r.id==='utility')lines=['Pomieszczenie','gospodarcze'];if(r.id==='office')lines=['Gabinet /','pokój gościnny'];if(r.id==='bath-suite')lines=['Łazienka'];
    out.push(`<g class="label">${lines.map((s,i)=>text(x,z+i*.24,s)).join('')}${text(x,z+lines.length*.24,`${pl(r.usableArea)} m²`,'class="area"')}${upper?text(x,z+(lines.length+1)*.24,`(${pl(r.area)} m²)`,'class="area" style="font-size:.15px"'):''}</g>`);
  }
  out.push(`<g class="dim">${line(e.x0,e.z1+.55,e.x1,e.z1+.55)}${line(e.x0,e.z1+.43,e.x0,e.z1+.67)}${line(e.x1,e.z1+.43,e.x1,e.z1+.67)}${text((e.x0+e.x1)/2,e.z1+.46,'9,58 m','text-anchor="middle"')}${line(terrace.x1+.42,e.z0,terrace.x1+.42,e.z1)}${line(terrace.x1+.31,e.z0,terrace.x1+.53,e.z0)}${line(terrace.x1+.31,e.z1,terrace.x1+.53,e.z1)}${text(terrace.x1+.32,0,'6,67 m',`text-anchor="middle" transform="rotate(-90 ${num(terrace.x1+.32)} 0)"`)}</g>`);
  if(!upper)out.push(`<path d="M-2.16,${num(e.z1+.27)}v-.22m-.06,.08 .06,-.08 .06,.08" fill="none" stroke="#6c846b" stroke-width=".023"/>`,text(-2.16,e.z1+.98,'Wejście','fill="#6a8067" font-size=".19" text-anchor="middle"'));
  else out.push(text(e.x0,e.z1+1.00,'W nawiasach: powierzchnia po podłodze.','fill="#85907d" font-size=".175"'));
  out.push('</svg>');return out.join('');
}
