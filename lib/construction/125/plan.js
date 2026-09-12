import layout, {facts} from './plan-source.js';
const n=v=>Number(v).toFixed(4).replace(/\.?0+$/,'')||'0';
const pl=v=>v.toLocaleString('pl-PL',{minimumFractionDigits:1,maximumFractionDigits:1});
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));
const rect=(x,z,w,h,a='')=>`<rect x="${n(x)}" y="${n(z)}" width="${n(w)}" height="${n(h)}" ${a}/>`;
const line=(x,z,xx,zz,a='')=>`<line x1="${n(x)}" y1="${n(z)}" x2="${n(xx)}" y2="${n(zz)}" ${a}/>`;
const text=(x,z,s,a='')=>`<text x="${n(x)}" y="${n(z)}" ${a}>${esc(s)}</text>`;
const circle=(x,z,r,a='')=>`<circle cx="${n(x)}" cy="${n(z)}" r="${n(r)}" ${a}/>`;

function furniture(){
  const out=[];
  for(const [name,x,z,w,h,kind]of layout.furnishings){
    out.push(`<g><title>${esc(name)}</title>`);
    const fill=/bed|sofa|seat/.test(kind)?'#e6eadd':/counter|island|storage|fridge/.test(kind)?'#ede8dd':'#fff';
    out.push(rect(x-w/2,z-h/2,w,h,`rx="${kind==='bed'?.05:/sofa|seat|table/.test(kind)?.09:.025}" fill="${fill}"`));
    if(kind==='bed'){
      if(h>w){out.push(rect(x-w/2+.08,z-h/2+.10,w-.16,.36,'rx=".06" fill="#fff"'),line(x-w/2+.04,z-h/2+.54,x+w/2-.04,z-h/2+.54));}
      else out.push(rect(x-w/2+.10,z-h/2+.08,.36,h-.16,'rx=".06" fill="#fff"'),line(x-w/2+.54,z-h/2+.04,x-w/2+.54,z+h/2-.04));
    }
    if(kind==='counter')out.push(rect(x-.22,z-.95,.44,.55,'rx=".035" fill="#fff"'),rect(x-.16,z-.89,.32,.42,'rx=".055" fill="#eaf0ec"'),line(x-.2,z+.2,x+.2,z+.2));
    if(kind==='island'){out.push(rect(x-.29,z-.7,.58,.60,'rx=".025" fill="#fff"'));for(const a of[-.14,.14])for(const b of[-.14,.14])out.push(circle(x+a,z-.4+b,.075));}
    if(kind==='storage')out.push(line(x-w/2+.02,z-h/2+.02,x+w/2-.02,z+h/2-.02),line(x+w/2-.02,z-h/2+.02,x-w/2+.02,z+h/2-.02));
    if(kind==='shower')out.push(line(x-w/2+.03,z-h/2+.03,x+w/2-.03,z+h/2-.03),line(x+w/2-.03,z-h/2+.03,x-w/2+.03,z+h/2-.03),circle(x,z,.03));
    if(/wc|washer|basin/.test(kind))out.push(`<ellipse cx="${n(x)}" cy="${n(z)}" rx="${n(w*.31)}" ry="${n(h*.30)}" fill="#f5f8f5"/>`);
    if(kind==='table'&&w>.8)for(const side of[-1,1])for(const zz of[-.48,.48])out.push(rect(x+side*(w/2+.23)-.18,z+zz-.18,.36,.36,'rx=".065" fill="#fff"'));
    if(kind==='sofa')for(let j=0;j<3;j++)out.push(rect(x-w/2+.09,z-h/2+.12+j*(h-.20)/3,w-.24,(h-.30)/3,'rx=".06" fill="#f6f7f2"'));
    out.push('</g>');
  }
  return `<g class="furniture">${out.join('')}</g>`;
}

function partitionMarkup(p){
  const {axis,fixed,start,end,holes,uOrigin}=p,out=[];
  out.push(axis===0?rect(start,fixed-.12,end-start,.24,'fill="#294235"'):rect(fixed-.12,start,.24,end-start,'fill="#294235"'));
  for(const hole of holes){
    const a=uOrigin+hole.u0,b=uOrigin+hole.u1,leaf=.9;
    out.push(axis===0?rect(a,fixed-.132,b-a,.264,'fill="#fff"'):rect(fixed-.132,a,.264,b-a,'fill="#fff"'));
    if(axis===0)out.push(line(a,fixed,a,fixed-leaf,'class="door"'),`<path d="M${n(a+leaf)},${n(fixed)}A${n(leaf)},${n(leaf)} 0 0 0 ${n(a)},${n(fixed-leaf)}" class="swing"/>`);
    else {const sign=fixed>2?1:-1;out.push(line(fixed,a,fixed+sign*leaf,a,'class="door"'),`<path d="M${n(fixed)},${n(a+leaf)}A${n(leaf)},${n(leaf)} 0 0 ${sign>0?1:0} ${n(fixed+sign*leaf)},${n(a)}" class="swing"/>`);}
  }
  return out.join('');
}

function exteriorMarkup(){
  const out=[rect(-6.25,-5,12.5,.24,'fill="#294235"'),rect(-6.25,4.76,12.5,.24,'fill="#294235"'),rect(-6.25,-5,.24,10,'fill="#294235"'),rect(6.01,-5,.24,10,'fill="#294235"')];
  for(let side=0;side<4;side++)for(let oi=0;oi<layout.wallOpenings[side].length;oi++){
    const o=layout.wallOpenings[side][oi],horizontal=side%2===0,origin=(horizontal?-6.25:-5);
    const a=origin+o.u0,b=origin+o.u1,fixed=side===0?-4.88:side===1?-6.13:side===2?4.88:6.13;
    out.push(horizontal?rect(a,fixed-.135,b-a,.27,'fill="#fff"'):rect(fixed-.135,a,.27,b-a,'fill="#fff"'));
    if(side===2&&oi===1){
      out.push(line(b,fixed,b,fixed-.9,'class="door"'),`<path d="M${n(b-.9)},${n(fixed)}A.9,.9 0 0 1 ${n(b)},${n(fixed-.9)}" class="swing"/>`);
    }else{
      for(const off of[-.04,.04])out.push(horizontal?line(a,fixed+off,b,fixed+off,'class="glass"'):line(fixed+off,a,fixed+off,b,'class="glass"'));
      const c=(a+b)/2;out.push(horizontal?line(c,fixed-.065,c,fixed+.065,'class="glass"'):line(fixed-.065,c,fixed+.065,c,'class="glass"'));
    }
  }
  return out.join('');
}

export function planToSVG(){
  const out=[`<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="plan-title plan-desc" viewBox="-6.9 -6.06 14.38 14.26" style="display:block;width:100%;height:auto;background:#fff;font-family:Arial,Helvetica,sans-serif"><title id="plan-title">Combstruct 125 — parter</title><desc id="plan-desc">Dom parterowy z filmu Combstruct: trzy pokoje sypialne, salon z jadalnią i kuchnią, łazienka, osobne WC i pralnia. Obrys 12,5 na 10 metrów. Taras 18,8 metra kwadratowego.</desc><metadata>${esc(JSON.stringify({source:layout.source,facts}))}</metadata><style>.furniture{stroke:#aeb6a7;stroke-width:.018;fill:none}.glass{stroke:#7594a0;stroke-width:.025}.door{stroke:#71846b;stroke-width:.025}.swing{fill:none;stroke:#a4b39c;stroke-width:.017;stroke-dasharray:.065 .04}.label{fill:#294235;font-size:.255px;font-weight:600;text-anchor:middle;paint-order:stroke;stroke:#fff;stroke-width:.09;stroke-linejoin:round}.area{fill:#71816a;font-size:.218px;font-weight:400}.dim{stroke:#acb6a6;stroke-width:.016;fill:#68795f}.dim text{stroke:none;font-size:.24px}</style>`];
  out.push(text(-6.25,-5.52,'Parter','fill="#294235" font-size=".37" font-weight="600"'),text(6.25,-5.52,'125 m² w obrysie','fill="#7b886f" font-size=".28" text-anchor="end"'));
  const t=layout.terrace;out.push(rect(t.x0,t.z0,t.x1-t.x0,t.z1-t.z0,'fill="#f0eadf" stroke="#cdc3ae" stroke-width=".02"'));
  for(let x=t.x0+.25;x<t.x1;x+=.25)out.push(line(x,t.z0,x,t.z1,'stroke="#ded5c4" stroke-width=".014"'));
  out.push(rect(-6.25,-5,12.5,10,'fill="#f9f9f3"'));
  for(const r of layout.rooms)out.push(rect(r.x0,r.z0,r.x1-r.x0,r.z1-r.z0,`fill="${/Łazienka|WC|Pralnia/.test(r.name)?'#eef4f2':/Sypialnia|Pokój/.test(r.name)?'#f6f3eb':'#f9f9f3'}"`));
  out.push(furniture(),exteriorMarkup());for(const p of layout.planWalls)out.push(partitionMarkup(p));
  const positions=[
    ['Sypialnia 1',4.45,1.1,['Sypialnia 1']],
    ['Sypialnia 2',4.45,-1.68,['Sypialnia 2']],
    ['Pokój 3 / gabinet',.52,-2.73,['Sypialnia / gabinet']],
    ['Łazienka',-.49,.27,['Łazienka']],
    ['WC',-.50,1.67,['WC']],
    ['Wiatrołap',.33,3.57,['Wiatrołap']],
    ['Hol nocny',1.49,.23,['Hol']],
    ['Pralnia',-4.79,-3.72,['Pralnia']]
  ];
  for(const [name,x,z,lines]of positions){const r=layout.rooms.find(r=>r.name===name);out.push(`<g class="label">${lines.map((s,i)=>text(x,z+i*.29,s)).join('')}${text(x,z+lines.length*.29,`${pl(r.area)} m²`,'class="area"')}</g>`);}
  out.push(`<g class="label">${text(-4.05,1.98,'Salon + jadalnia')}${text(-3.48,-.52,'Kuchnia')}${text(-4.05,2.28,`${pl(layout.living.area)} m² łącznie`,'class="area"')}</g>`);
  // Exterior furnishing is illustrative; the terrace outline remains that of the film.
  out.push(`<g class="furniture">${rect(-5.72,5.53,.66,1.30,'rx=".07" fill="#fff"')}${rect(-4.70,5.53,.66,1.30,'rx=".07" fill="#fff"')}${circle(-3.48,6.17,.32,'fill="#e8dfcf"')}</g>`);
  out.push(text(-1.5,6.08,'Taras','fill="#7f745a" font-size=".29" text-anchor="middle" font-weight="600"'),text(-1.5,6.45,`${pl(facts.terraceArea)} m²`,'fill="#8a7e62" font-size=".26" text-anchor="middle"'));
  out.push(`<g class="dim">${line(-6.25,7.94,6.25,7.94)}${line(-6.25,7.82,-6.25,8.06)}${line(6.25,7.82,6.25,8.06)}${text(0,7.82,'12,50 m','text-anchor="middle"')}${line(6.80,-5,6.80,5)}${line(6.68,-5,6.92,-5)}${line(6.68,5,6.92,5)}${text(6.65,0,'10,00 m','text-anchor="middle" transform="rotate(-90 6.65 0)"')}</g>`);
  out.push(`<path d="M1.05,5.74V5.18m-.08,.12 .08,-.12 .08,.12" fill="none" stroke="#74866d" stroke-width=".025"/>`,text(1.05,6.06,'Wejście','fill="#74866d" font-size=".22" text-anchor="middle"'));
  out.push('</svg>');return out.join('');
}
