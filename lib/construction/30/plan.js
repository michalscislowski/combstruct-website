const ESC = {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'};
const esc = (value) => String(value ?? '').replace(/[&<>"']/g, c => ESC[c]);
const n = value => Number(value).toFixed(4).replace(/\.?0+$/, '') || '0';
const metres = value => Number(value).toLocaleString('pl-PL', {minimumFractionDigits:2,maximumFractionDigits:2});
const rect = (x,z,w,h,attrs='') => `<rect x="${n(x)}" y="${n(z)}" width="${n(Math.max(w,0))}" height="${n(Math.max(h,0))}" ${attrs}/>`;
const line = (x1,z1,x2,z2,attrs='') => `<line x1="${n(x1)}" y1="${n(z1)}" x2="${n(x2)}" y2="${n(z2)}" ${attrs}/>`;
const text = (x,z,value,attrs='') => `<text x="${n(x)}" y="${n(z)}" ${attrs}>${esc(value)}</text>`;

function panelBounds(panel, wallDepth) {
  if (panel.bounds) return panel.bounds;
  if (['x0','x1','z0','z1'].every(k => Number.isFinite(panel[k]))) return panel;
  const depth=panel.depth ?? wallDepth;
  return panel.axis===0
    ? {x0:panel.start,x1:panel.end,z0:panel.fixed-depth/2,z1:panel.fixed+depth/2}
    : {x0:panel.fixed-depth/2,x1:panel.fixed+depth/2,z0:panel.start,z1:panel.end};
}

function furniture(rooms, dimensions, openings) {
  const shapes=[];
  const bed=rooms.find(r => /bed|syp|pokój|pokoj/i.test(`${r.id} ${r.name}`));
  if (bed && bed.x1-bed.x0>=1.48 && bed.z1-bed.z0>=2.45) {
    const x=bed.x0+.05,z=bed.z0+.06;
    shapes.push(`<g class="plan-furniture"><title>Łóżko 140 × 200 cm</title>`,rect(x,z,1.4,2,'rx=".045" fill="#fff"'),rect(x+.025,z+.40,1.35,1.56,'rx=".03" fill="#e9ece6"'),rect(x+.1,z+.08,.55,.27,'rx=".07"'),rect(x+.75,z+.08,.55,.27,'rx=".07"'),line(x+.03,z+.55,x+1.37,z+.55),'</g>');
  }
  const bath=rooms.find(r => /bath|łaz|laz/i.test(`${r.id} ${r.name}`));
  if (bath && bath.x1-bath.x0>=1.4 && bath.z1-bath.z0>=2.2) {
    const x=bath.x0+.04,z=bath.z0+.04;
    shapes.push(`<g class="plan-furniture"><title>Prysznic 80 × 80 cm, umywalka i WC</title>`,rect(x,z,.8,.8,'rx=".035" fill="#e4eef0"'),line(x+.06,z+.06,x+.74,z+.74,'opacity=".45"'),line(x+.74,z+.06,x+.06,z+.74,'opacity=".45"'),rect(bath.x1-.56,z,.50,.42,'rx=".04" fill="#fff"'),`<ellipse cx="${n(bath.x1-.31)}" cy="${n(z+.2)}" rx=".17" ry=".115"/>`,rect(x+.07,bath.z1-.93,.38,.19,'rx=".04" fill="#fff"'),`<path d="M${n(x+.09)},${n(bath.z1-.74)}v.23a.17,.21 0 0 0 .34,0v-.23Z" fill="#fff"/>`,'</g>');
  }
  const living=rooms.find(r=>/living|salon/i.test(`${r.id} ${r.name}`));
  if (living) {
    const right=living.x1;
    const rear=living.z0;
    const front=living.z1;
    // All furnishing stays clear of the entrance and of the partition doors.
    const entrance=openings.front.find(h=>h.id==='entrance');
    const kitchenWidth=Math.min(1.72,right-(entrance.world.x1+.12));
    if (kitchenWidth>1.2) {
      const kx=right-kitchenWidth;
      shapes.push(`<g class="plan-furniture"><title>Aneks kuchenny</title>`,rect(kx,front-.60,kitchenWidth,.60,'fill="#ebe7df"'),rect(right-.60,front-1.70,.60,1.10,'fill="#ebe7df"'),rect(kx+.13,front-.47,.50,.33,'rx=".04" fill="#fff"'),rect(right-.50,front-1.50,.39,.48,'fill="#fff"'),`<circle cx="${n(right-.4)}" cy="${n(front-1.37)}" r=".055"/><circle cx="${n(right-.23)}" cy="${n(front-1.37)}" r=".055"/><circle cx="${n(right-.4)}" cy="${n(front-1.17)}" r=".055"/><circle cx="${n(right-.23)}" cy="${n(front-1.17)}" r=".055"/>`,'</g>');
    }
    if (right>1.9) {
      const sx=right-.82,sz=rear+.22;
      shapes.push(`<g class="plan-furniture"><title>Sofa w salonie</title>`,rect(sx,sz,.80,1.7,'rx=".09" fill="#e4e8df"'),rect(sx+.05,sz+.13,.58,.69,'rx=".045" fill="#f6f7f2"'),rect(sx+.05,sz+.88,.58,.69,'rx=".045" fill="#f6f7f2"'),'</g>');
      const tx=right-1.36,tz=.07;
      shapes.push(`<g class="plan-furniture"><title>Stół 110 × 70 cm</title>`,rect(tx,tz,1.1,.70,'rx=".05" fill="#f1e7d7"'),rect(tx+.13,tz-.27,.30,.23,'rx=".05"'),rect(tx+.67,tz-.27,.30,.23,'rx=".05"'),rect(tx+.13,tz+.74,.30,.23,'rx=".05"'),rect(tx+.67,tz+.74,.30,.23,'rx=".05"'),'</g>');
    }
  }
  return shapes.join('');
}

function roomPath(room) {
  const points=room.polygon ?? room.points;
  if (points?.length) return `<polygon points="${points.map(p => `${n(p.x ?? p[0])},${n(p.z ?? p[1])}`).join(' ')}"/>`;
  return rect(room.x0,room.z0,room.x1-room.x0,room.z1-room.z0);
}

function openingMarkup(hole, panel, depth) {
  const w=hole.world;
  if (!w) return '';
  const axis=hole.axis ?? panel.axis;
  const fixed=panel.fixed ?? (axis===0?(w.z0+w.z1)/2:(w.x0+w.x1)/2);
  const a=axis===0?w.x0:w.z0,b=axis===0?w.x1:w.z1;
  const openingDepth=(panel.depth ?? depth)+.026;
  const kind=hole.kind ?? 'window';
  const isDoor=/door|drzwi|entrance/i.test(kind);
  const isPatio=/patio|taras|slid/i.test(`${hole.id} ${kind}`) || (isDoor && b-a>1.3);
  let result=`<g class="plan-opening"><title>${esc(isPatio?'Wyjście na taras':isDoor?'Drzwi':'Okno')} · ${metres(b-a)} m</title>`;
  result+=axis===0?rect(a,fixed-openingDepth/2,b-a,openingDepth,'fill="#fff" stroke="none"'):rect(fixed-openingDepth/2,a,openingDepth,b-a,'fill="#fff" stroke="none"');
  if (!isDoor || isPatio) {
    for (const offset of [-.038,.038]) result+=axis===0?line(a,fixed+offset,b,fixed+offset,'stroke="#608596" stroke-width=".021"'):line(fixed+offset,a,fixed+offset,b,'stroke="#608596" stroke-width=".021"');
    if (isPatio) result+=axis===0?line((a+b)/2,fixed-.05,(a+b)/2,fixed+.05,'stroke="#608596" stroke-width=".022"'):line(fixed-.05,(a+b)/2,fixed+.05,(a+b)/2,'stroke="#608596" stroke-width=".022"');
  } else {
    const leaf=b-a;
    if (axis===0) {
      const direction=fixed>0?-1:1;
      result+=line(a,fixed,a,fixed+direction*leaf,'stroke="#61766b" stroke-width=".025"');
      result+=`<path d="M${n(a+leaf)},${n(fixed)}A${n(leaf)},${n(leaf)} 0 0 ${direction>0?1:0} ${n(a)},${n(fixed+direction*leaf)}" fill="none" stroke="#93a397" stroke-width=".016" stroke-dasharray=".045 .032"/>`;
    } else {
      const direction=fixed<0?-1:1;
      result+=line(fixed,b,fixed+direction*leaf,b,'stroke="#61766b" stroke-width=".025"');
      result+=`<path d="M${n(fixed)},${n(b-leaf)}A${n(leaf)},${n(leaf)} 0 0 ${direction>0?1:0} ${n(fixed+direction*leaf)},${n(b)}" fill="none" stroke="#93a397" stroke-width=".016" stroke-dasharray=".045 .032"/>`;
    }
  }
  return result+'</g>';
}

function dimHorizontal(x0,x1,z,label) {
  return `<g class="plan-dimension">${line(x0,z,x1,z)}${line(x0,z-.09,x0,z+.09)}${line(x1,z-.09,x1,z+.09)}${text((x0+x1)/2,z-.13,label,'text-anchor="middle"')}</g>`;
}
function dimVertical(x,z0,z1,label) {
  return `<g class="plan-dimension">${line(x,z0,x,z1)}${line(x-.09,z0,x+.09,z0)}${line(x-.09,z1,x+.09,z1)}${text(x+.15,(z0+z1)/2,label,`text-anchor="middle" transform="rotate(90 ${n(x+.15)} ${n((z0+z1)/2)})"`)}</g>`;
}

export function planToSVG(model, options={}) {
  const d=model.dimensions;
  if (!d || !Number.isFinite(d.width) || !Number.isFinite(d.depth)) throw new Error('Rzut wymaga wymiarów modelu.');
  const rooms=model.rooms ?? [];
  const wallDepth=d.wallDepth ?? .24;
  const front=d.depth/2,rear=-front,left=-d.width/2,right=-left;
  const terraceRear=rear-(d.terraceDepth ?? 0);
  const panels=model.wallPanels ?? [];
  const xMin=left-.60,zMin=terraceRear-.45,viewWidth=d.width+1.43,viewHeight=d.depth+(d.terraceDepth ?? 0)+1.57+(options.areaNote ? .66 : 0);
  const content=[];
  content.push(`<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="krokusy-plan-title krokusy-plan-desc" viewBox="${n(xMin)} ${n(zMin)} ${n(viewWidth)} ${n(viewHeight)}" class="combstruct-plan" style="display:block;width:100%;height:auto;max-height:100%;font-family:Avenir Next,Avenir,Arial,sans-serif;background:#fff" data-plan-version="1"><title id="krokusy-plan-title">Rzut parteru — koncepcja Combstruct</title><desc id="krokusy-plan-desc">Dom ${metres(d.width)} na ${metres(d.depth)} metra. Wejście na dole, taras na górze. Łazienka z przodu po lewej, sypialnia z tyłu po lewej, salon z kuchnią po prawej. Rysunek pobiera wymiary i otwory z modelu 3D.</desc><style>.plan-dimension{fill:#52645b;stroke:#a7b4ad;stroke-width:.014}.plan-dimension text{stroke:none;font-size:.21px;font-weight:500}.plan-furniture{fill:#fff;stroke:#a5afa5;stroke-width:.015}.plan-room{stroke:none}.plan-room>rect,.plan-room>polygon{fill:#f7f7f2;transition:fill .18s}.plan-room:hover>rect,.plan-room:hover>polygon,.plan-room:focus>rect,.plan-room:focus>polygon{fill:#e5ebde}.plan-room:focus{outline:none}.plan-label{fill:#263b2f;font-size:.20px;font-weight:600;text-anchor:middle;paint-order:stroke;stroke:#fff;stroke-width:.055;stroke-linejoin:round;pointer-events:none}.plan-area{font-size:.18px;font-weight:400;fill:#66736a}.plan-openings{fill:none}</style>`);
  if (d.terraceDepth) {
    content.push(rect(left,terraceRear,d.width,d.terraceDepth,'fill="#f3ede2" stroke="#c8bfae" stroke-width=".022"'));
    for(let zz=terraceRear+.27;zz<rear;zz+=.27) content.push(line(left,zz,right,zz,'stroke="#ddd5c6" stroke-width=".012"'));
    content.push(`<g fill="#82765e" opacity=".8">${(d.pergolaPosts ?? []).map(p=>rect(p.x-p.width/2,p.z-p.depth/2,p.width,p.depth)).join('')}</g>`);
    content.push(text(0,terraceRear+d.terraceDepth*.46,'Taras','text-anchor="middle" fill="#70654f" font-size=".22" font-weight="600"'),text(0,terraceRear+d.terraceDepth*.46+.30,`${metres(d.width*d.terraceDepth)} m²`,'text-anchor="middle" fill="#817863" font-size=".19"'));
  }
  content.push(rect(left,rear,d.width,d.depth,'fill="#fff" stroke="#c3cbbf" stroke-width=".023"'));
  rooms.forEach(room=>content.push(`<g class="plan-room" tabindex="0" data-room-id="${esc(room.id)}"><title>${esc(room.name)} — ${metres(room.area)} m²</title>${roomPath(room)}</g>`));
  content.push(furniture(rooms,{...d,wallDepth},model.openings));
  panels.forEach(panel=>{
    const b=panelBounds(panel,wallDepth);
    if (![b.x0,b.x1,b.z0,b.z1].every(Number.isFinite)) return;
    content.push(rect(b.x0,b.z0,b.x1-b.x0,b.z1-b.z0,'fill="#294235"'));
  });
  // Use the same panel holes as the 3D model; no second hand-drawn opening layout.
  panels.forEach(panel=>{
    let holes=panel.holes;
    if (!holes) holes=Object.values(model.openings ?? {}).flat().filter(h=>h.wallId===panel.id);
    (holes ?? []).forEach(hole=>content.push(openingMarkup(hole,panel,wallDepth)));
  });
  rooms.forEach(room=>{
    const bedroom=/bed|syp|pokój|pokoj/i.test(`${room.id} ${room.name}`),bath=/bath|łaz|laz/i.test(`${room.id} ${room.name}`);
    const x=(room.x0+room.x1)/2;
    const z=bedroom?room.z1-.43:bath?(room.z0+room.z1)/2-.10:-.68;
    const label=bedroom?'Sypialnia':bath?'Łazienka':'Salon + kuchnia';
    const lx=bedroom?x-.10:bath?x-.20:Math.max(.78,x);
    content.push(`<g class="plan-label">${text(lx,z,label)}${text(lx,z+.27,`${metres(room.area)} m²`,'class="plan-area"')}</g>`);
  });
  content.push(dimHorizontal(left,right,front+.47,`${metres(d.width)} m`),dimVertical(right+.48,rear,front,`${metres(d.depth)} m`));
  const frontDoor=(model.openings?.front ?? []).find(h=>/door|entrance|drzwi/i.test(h.kind));
  const entryX=frontDoor?.world?(frontDoor.world.x0+frontDoor.world.x1)/2:0;
  content.push(`<path d="M${n(entryX)},${n(front+.08)}v-.23m-.055,.075l.055,-.075 .055,.075" fill="none" stroke="#5c7865" stroke-width=".022"/>`,text(entryX,front+.91,'Wejście','text-anchor="middle" fill="#5c7060" font-size=".20"'));
  if(options.areaNote) content.push(`<g fill="#637269" font-size=".18" text-anchor="middle">${text(0,front+1.32,'Powierzchnie w świetle konstrukcji.')}${text(0,front+1.57,'Bez warstw wykończenia.')}</g>`);
  content.push('</svg>');
  return content.join('');
}

export function renderPlan(container,model) {
  if (!container) throw new Error('Brak miejsca na rzut.');
  container.innerHTML=planToSVG(model);
  const svg=container.querySelector('svg');
  const onRoom=event=>{
    const roomNode=event.target.closest('[data-room-id]');
    if (!roomNode) return;
    container.dispatchEvent(new CustomEvent('combstruct-room-select',{bubbles:true,detail:{id:roomNode.dataset.roomId}}));
  };
  svg.addEventListener('click',onRoom);
  svg.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();onRoom(event);}});
  return {svg,downloadSvg:()=>planToSVG(model)};
}
