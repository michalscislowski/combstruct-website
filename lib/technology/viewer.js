import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {manualScene,bimScene,materialScene,disposeScene} from './geometry.js';
import {topics,variants} from './content.js';
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const viewport=$('#technology-viewport'),loading=$('.viewport-loading');
let technology='combstruct',topic=topics.find(t=>t.id==='podloga-strop'),variant=variants[0],bimView='house',materialStage=2;
let renderer,camera,controls,scene,current,raf=0,raycaster;
const V=(...a)=>new THREE.Vector3(...a);
function invalidate(){if(!raf&&renderer)raf=requestAnimationFrame(()=>{raf=0;controls.update();renderer.render(scene,camera);});}
function fit(){
 if(!current||!renderer||!viewport.clientWidth||!viewport.clientHeight)return;
 const box=current.focus||new THREE.Box3().setFromObject(current.root),center=box.getCenter(V()),direction=(current.direction||V(1.5,1.4,2)).clone().normalize();
 const right=V(0,1,0).cross(direction).normalize(),up=direction.clone().cross(right).normalize(),tv=Math.tan(THREE.MathUtils.degToRad(camera.fov/2)),th=tv*camera.aspect;let distance=0;
 for(const x of [box.min.x,box.max.x])for(const y of [box.min.y,box.max.y])for(const z of [box.min.z,box.max.z]){const p=V(x,y,z).sub(center);distance=Math.max(distance,Math.abs(p.dot(right))/th+p.dot(direction),Math.abs(p.dot(up))/tv+p.dot(direction));}
 const damping=controls.enableDamping;controls.enableDamping=false;controls.update();controls.target.copy(center);camera.position.copy(center).addScaledVector(direction,Math.max(.8,distance*1.14));controls.update();
 // Fit the visible drawing, not the empty corners of its world-aligned box.
 // Detail views deliberately keep their fixed close-up bounds.
 if(!current.focus)for(let iteration=0;iteration<2;iteration++){
  current.root.updateMatrixWorld(true);camera.updateMatrixWorld();let xmin=Infinity,xmax=-Infinity,ymin=Infinity,ymax=-Infinity;const p=V();
  current.root.traverseVisible(m=>{if(!m.geometry?.attributes.position)return;const positions=m.geometry.attributes.position;for(let i=0;i<positions.count;i++){p.fromBufferAttribute(positions,i).applyMatrix4(m.matrixWorld).project(camera);xmin=Math.min(xmin,p.x);xmax=Math.max(xmax,p.x);ymin=Math.min(ymin,p.y);ymax=Math.max(ymax,p.y);}});
  const dist=camera.position.distanceTo(controls.target),right=V().setFromMatrixColumn(camera.matrixWorld,0),up=V().setFromMatrixColumn(camera.matrixWorld,1);
  const shift=right.multiplyScalar((xmin+xmax)/2*dist*tv*camera.aspect).add(up.multiplyScalar((ymin+ymax)/2*dist*tv));
  controls.target.add(shift);camera.position.add(shift);const factor=Math.max((xmax-xmin)/1.72,(ymax-ymin)/1.62);if(Number.isFinite(factor)&&factor>0)camera.position.sub(controls.target).multiplyScalar(factor).add(controls.target);controls.update();
 }
 controls.enableDamping=damping;invalidate();
}
function resize(){if(!renderer)return;const w=viewport.clientWidth,h=viewport.clientHeight;if(!w||!h)return;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();fit();}
function selectInfo(info){$('#element-id').textContent=info.id;$('#element-type').textContent=info.type;$('#element-surface').textContent=info.surface;$('#element-length').textContent=info.length;$('#element-metric-label').textContent=info.metricLabel||'Długość w modelu';$('#element-detail-label').textContent=info.detailLabel||'Grubość płyty';$('#element-thickness').textContent=info.detail||'18 mm';}
function buildScene(){
 if(!renderer)return;
 try{
  if(current){scene.remove(current.root);disposeScene(current.root);}
  current=technology==='combstruct'?manualScene(topic,variant):technology==='bim'?bimScene(bimView,selectInfo):materialScene(materialStage);
  scene.add(current.root);current.root.updateMatrixWorld(true);$('#scene-annotation').textContent=current.annotation||'';
  if(current.arrows)current.arrows.visible=$('#arrows').checked;
  if(technology==='bim'&&current.finish)updateFinish();
  loading.hidden=true;resize();invalidate();
 }catch(e){console.error(e);loading.hidden=false;loading.textContent='Nie udało się przygotować tego widoku. Odśwież stronę, aby spróbować ponownie.';loading.setAttribute('role','alert');}
}
function startRenderer(){
 try{
  scene=new THREE.Scene();scene.background=new THREE.Color('#f2f5f1');camera=new THREE.PerspectiveCamera(36,1,.005,160);
  renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'low-power'});renderer.localClippingEnabled=true;renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.6));renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.07;
  viewport.prepend(renderer.domElement);renderer.domElement.tabIndex=0;renderer.domElement.setAttribute('aria-label','Model 3D. Przeciągnij, aby obrócić; przewiń, aby przybliżyć. Klawisz Home przywraca widok. W sekcji BIM kliknij widoczny element, aby go wybrać.');
  controls=new OrbitControls(camera,renderer.domElement);controls.enableDamping=!matchMedia('(prefers-reduced-motion: reduce)').matches;controls.dampingFactor=.12;controls.minDistance=.3;controls.maxDistance=50;controls.maxPolarAngle=Math.PI*.94;controls.addEventListener('change',invalidate);controls.listenToKeyEvents(renderer.domElement);
  matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change',e=>{controls.enableDamping=!e.matches;invalidate();});
  scene.add(new THREE.HemisphereLight('#ffffff','#b2b8aa',2.5));const key=new THREE.DirectionalLight('#fff3df',2.6);key.position.set(3,7,5);scene.add(key);const fill=new THREE.DirectionalLight('#d3e8ee',1.5);fill.position.set(-4,3,-4);scene.add(fill);
  raycaster=new THREE.Raycaster();let start;
  renderer.domElement.addEventListener('pointerdown',e=>{start=[e.clientX,e.clientY]});
  renderer.domElement.addEventListener('pointerup',e=>{if(!start||Math.hypot(e.clientX-start[0],e.clientY-start[1])>5||!current.selectAt)return;const r=renderer.domElement.getBoundingClientRect();raycaster.setFromCamera(new THREE.Vector2((e.clientX-r.left)/r.width*2-1,1-(e.clientY-r.top)/r.height*2),camera);current.selectAt(raycaster);invalidate();});
  renderer.domElement.addEventListener('keydown',e=>{if(e.key==='Home'){e.preventDefault();fit();}});
  renderer.domElement.addEventListener('webglcontextlost',e=>{e.preventDefault();loading.hidden=false;loading.textContent='Podgląd 3D został przerwany. Odśwież stronę, aby do niego wrócić.'});
  new ResizeObserver(resize).observe(viewport);buildScene();
 }catch(e){console.error(e);loading.textContent='Podgląd 3D wymaga obsługi WebGL. Zasady systemu możesz przeczytać poniżej modelu.';loading.setAttribute('role','alert');}
}
function updateTopic(){
 $('#topic-title').textContent=topic.title;$('#topic-lead').textContent=topic.lead;$('#topic-text').textContent=topic.text;$('#topic-rule').textContent=topic.rule;
 const index=topics.indexOf(topic);$('#topic-counter').textContent=`${index+1} / ${topics.length}`;$('#topic-select').value=topic.id;
 $$('[data-topic]').forEach(b=>b.setAttribute('aria-current',String(b.dataset.topic===topic.id)));
 $('#spread-control').hidden=!topic.spread;$('#crossing-control').hidden=!topic.crossing;$('#arrows-control').hidden=!topic.arrows;$('#variant-control').hidden=!topic.variants;
 $('#spread').value=0;$('#crossing').checked=false;$('#previous-topic').disabled=index===0;$('#next-topic').disabled=index===topics.length-1;
 $('#variant-description').textContent=variant.description;
}
function showTechnology(next,{hash=true}={}){
 technology=next;
 $$('[data-technology]').forEach(b=>{const active=b.dataset.technology===next;b.setAttribute('aria-selected',String(active));b.tabIndex=active?0:-1;$('#'+b.getAttribute('aria-controls')).hidden=!active;});
 const mount=next==='combstruct'?'manual':next==='bim'?'bim':'mycelium';$(`#${mount}-mount`).append(viewport);
 if(hash)history.pushState(null,'',`#${next==='combstruct'?topic.id:next==='bim'&&bimView==='wall'?'bim-sciana':next}`);
 if(next==='combstruct')updateTopic();buildScene();
}
function showTopic(id,{hash=true}={}){topic=topics.find(t=>t.id===id)||topic;showTechnology('combstruct',{hash});}
function fromLocation(){const id=location.hash.slice(1);if(id==='bim'||id==='bim-sciana'){bimView=id==='bim-sciana'?'wall':'house';syncBimControls();showTechnology('bim',{hash:false});}else if(id==='mycelium')showTechnology(id,{hash:false});else showTopic(id,{hash:false});}
for(const group of [...new Set(topics.map(t=>t.group))]){
 const section=document.createElement('section');section.className='topic-group';const heading=document.createElement('h3');heading.textContent=group;section.append(heading);
 const optgroup=document.createElement('optgroup');optgroup.label=group;
 for(const t of topics.filter(t=>t.group===group)){const b=document.createElement('button');b.type='button';b.dataset.topic=t.id;b.textContent=t.title;b.addEventListener('click',()=>showTopic(t.id));section.append(b);const o=new Option(t.title,t.id);optgroup.append(o);}
 $('#topic-buttons').append(section);$('#topic-select').append(optgroup);
}
for(const v of variants)$('#variant-select').append(new Option(v.name,v.id));
$('#topic-select').addEventListener('change',e=>showTopic(e.target.value));
$('#variant-select').addEventListener('change',e=>{variant=variants.find(v=>v.id===e.target.value);$('#variant-description').textContent=variant.description;buildScene();});
$$('[data-technology]').forEach(b=>b.addEventListener('click',()=>showTechnology(b.dataset.technology)));
$('.technology-tabs').addEventListener('keydown',e=>{const tabs=$$('[data-technology]'),at=tabs.indexOf(document.activeElement);if(at<0)return;let n;if(e.key==='ArrowRight')n=(at+1)%tabs.length;if(e.key==='ArrowLeft')n=(at+tabs.length-1)%tabs.length;if(e.key==='Home')n=0;if(e.key==='End')n=tabs.length-1;if(n!==undefined){e.preventDefault();tabs[n].click();tabs[n].focus();}});
$('#previous-topic').addEventListener('click',()=>showTopic(topics[topics.indexOf(topic)-1]?.id));$('#next-topic').addEventListener('click',()=>showTopic(topics[topics.indexOf(topic)+1]?.id));
$('#spread').addEventListener('input',e=>{current?.spread?.(Number(e.target.value));$('#crossing').checked=false;invalidate();});
$('#crossing').addEventListener('change',e=>{if(e.target.checked){$('#spread').value=0;current?.spread?.(0);}current?.crossing?.(e.target.checked);invalidate();});
$('#arrows').addEventListener('change',e=>{if(current?.arrows)current.arrows.visible=e.target.checked;invalidate();});
$$('[data-reset-view]').forEach(b=>b.addEventListener('click',fit));
function syncBimControls(){
 $$('[data-bim-view]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.bimView===bimView)));
 $('#finish-control').hidden=bimView!=='wall';$('#wall-guide').hidden=bimView!=='wall';
 $('.selection-hint').textContent=bimView==='wall'?'Odsłoń ścianę i wybierz widoczny element':'Wybierz deskę w modelu';
 $('#passport-title').innerHTML=bimView==='wall'?'Sprawdź, co kryje<br>Twoja ściana.':'Każda część<br>ma swoje miejsce.';
}
function updateFinish(){
 const input=$('#finish'),value=Number(input.value);current?.finish?.(value);
 input.setAttribute('aria-valuetext',value<.01?'Ściana wykończona':`Odsłonięte ${Math.round(value*100)}% ściany`);
 $('#scene-annotation').textContent=value>.01?'Kliknij żebro, kostkę, rurę lub przewód':'Odsłoń ścianę suwakiem';invalidate();
}
$$('[data-bim-view]').forEach(b=>b.addEventListener('click',()=>{bimView=b.dataset.bimView;syncBimControls();history.pushState(null,'',bimView==='wall'?'#bim-sciana':'#bim');buildScene();}));
$('#finish').addEventListener('input',updateFinish);$('#next-element').addEventListener('click',()=>{current?.next?.();invalidate();});
const materialCopy=['Wyselekcjonowane odpady tekstylne są rozdrabniane i przygotowywane jako składnik substratu.','Grzybnia przerasta przygotowany substrat i wiąże jego składniki w jeden kompozyt.','Wysuszony kompozyt przyjmuje kształt kostki, którą można dopasować do komory konstrukcji.'];
$$('[data-material-stage]').forEach(b=>b.addEventListener('click',()=>{materialStage=Number(b.dataset.materialStage);$$('[data-material-stage]').forEach(t=>t.setAttribute('aria-pressed',String(t===b)));$('#material-stage-copy').textContent=materialCopy[materialStage];buildScene();}));
const menuButton=$('.menu-toggle'),menu=$('#mobile-menu');
function closeMenu(){menu.hidden=true;menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Otwórz menu');}
menuButton.addEventListener('click',()=>{const open=menu.hidden;menu.hidden=!open;menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Zamknij menu':'Otwórz menu');});
$$('#mobile-menu a').forEach(a=>a.addEventListener('click',closeMenu));document.addEventListener('click',e=>{if(!e.target.closest('.site-header'))closeMenu();});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!menu.hidden){closeMenu();menuButton.focus();}});
addEventListener('popstate',fromLocation);addEventListener('hashchange',()=>{const hash=location.hash.slice(1);if(hash!==technology&&hash!==topic.id)fromLocation();});
window.combstructTechnology={getState:()=>({ready:!!renderer,technology,topic:topic.id,variant:variant.id,bimView,materialStage,selected:current?.getSelected?.(),wall:current?.getWallState?.(),meshCount:current?.root.children.length,drawCalls:renderer?.info.render.calls}),topics:topics.map(t=>t.id),showTopic,showTechnology,reset:fit};
fromLocation();startRenderer();
