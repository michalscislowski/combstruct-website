import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {manualScene,bimScene,disposeScene} from './geometry.js';
import {manufacturingScene,flowSteps,productionParts} from './manufacturing.js';
import {roboticsScene,roboticsProcesses} from './robotics.js';
import {initialSelection,mountCatalogue,revealPart} from '../parts/catalogue.js';
import {topics,variants} from './content.js';
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const viewport=$('#technology-viewport'),loading=$('.viewport-loading');
let technology='combstruct',topic=topics.find(t=>t.id==='podloga-strop'),variant=variants[0],bimView='house',flowStage=0;
let productionSelection=initialSelection(productionParts);
let battenMode='outside';
let roofOptions={pitch:35,eave:true,knee:true,ridgeHouse:'principle'};
let renderer,camera,controls,scene,current,raf=0,raycaster;
let roboticsProcess='factory',roboticsProgress=0,roboticsPlaying=!matchMedia('(prefers-reduced-motion: reduce)').matches,roboticsVisible=true,roboticsStamp=0,roboticsStep=-1;
let roboticsDetail=true,roboticsCameraFrame=null;
const V=(...a)=>new THREE.Vector3(...a);
function invalidate(){if(!raf&&renderer)raf=requestAnimationFrame(now=>{
 raf=0;
 if(technology==='robotics'&&roboticsPlaying&&roboticsVisible&&!document.hidden){
  const dt=roboticsStamp?Math.min(.1,(now-roboticsStamp)/1000):0;
  roboticsProgress=Math.min(1,roboticsProgress+dt/roboticsProcesses[roboticsProcess].duration);roboticsStamp=now;
  if(roboticsProgress>=1)roboticsPlaying=false;
  updateRobotics({dt});
 }else roboticsStamp=0;
 controls.update();renderer.render(scene,camera);
 if(technology==='robotics'&&roboticsPlaying&&roboticsVisible&&!document.hidden)invalidate();
});}
function fittedFrame(box){
 const center=box.getCenter(V()),direction=(current.direction||V(1.5,1.4,2)).clone().normalize();
 const right=V(0,1,0).cross(direction).normalize(),up=direction.clone().cross(right).normalize(),tv=Math.tan(THREE.MathUtils.degToRad(camera.fov/2)),th=tv*camera.aspect;let distance=0;
 for(const x of [box.min.x,box.max.x])for(const y of [box.min.y,box.max.y])for(const z of [box.min.z,box.max.z]){const p=V(x,y,z).sub(center);distance=Math.max(distance,Math.abs(p.dot(right))/th+p.dot(direction),Math.abs(p.dot(up))/tv+p.dot(direction));}
 return{center,direction,distance:Math.max(.8,distance*1.14*(current.distanceScale||1))};
}
function followsFactory(){return technology==='robotics'&&roboticsDetail&&!!current?.getDetailFocus;}
function fit(){
 if(!current||!renderer||!viewport.clientWidth||!viewport.clientHeight)return;
 const box=current.focus||new THREE.Box3().setFromObject(current.root),frame=fittedFrame(box),{center,direction,distance}=frame;
 const damping=controls.enableDamping;controls.enableDamping=false;controls.update();controls.target.copy(center);camera.position.copy(center).addScaledVector(direction,distance);controls.update();
 roboticsCameraFrame=followsFactory()?frame:null;
 // Fit the visible drawing, not the empty corners of its world-aligned box.
 // Detail views deliberately keep their fixed close-up bounds.
 if(!current.focus)for(let iteration=0;iteration<2;iteration++){
  const tv=Math.tan(THREE.MathUtils.degToRad(camera.fov/2));
  current.root.updateMatrixWorld(true);camera.updateMatrixWorld();let xmin=Infinity,xmax=-Infinity,ymin=Infinity,ymax=-Infinity;const p=V();
  current.root.traverseVisible(m=>{if(!m.geometry?.attributes.position)return;const positions=m.geometry.attributes.position;for(let i=0;i<positions.count;i++){p.fromBufferAttribute(positions,i).applyMatrix4(m.matrixWorld).project(camera);xmin=Math.min(xmin,p.x);xmax=Math.max(xmax,p.x);ymin=Math.min(ymin,p.y);ymax=Math.max(ymax,p.y);}});
  const dist=camera.position.distanceTo(controls.target),right=V().setFromMatrixColumn(camera.matrixWorld,0),up=V().setFromMatrixColumn(camera.matrixWorld,1);
  const shift=right.multiplyScalar((xmin+xmax)/2*dist*tv*camera.aspect).add(up.multiplyScalar((ymin+ymax)/2*dist*tv));
  controls.target.add(shift);camera.position.add(shift);const factor=Math.max((xmax-xmin)/1.72,(ymax-ymin)/1.62);if(Number.isFinite(factor)&&factor>0)camera.position.sub(controls.target).multiplyScalar(factor).add(controls.target);controls.update();
 }
 controls.enableDamping=damping;invalidate();
}
function followFactoryCamera(dt,snap){
 if(!followsFactory())return;
 current.focus=current.getDetailFocus();current.direction=current.detailDirection||current.direction;
 if(!roboticsCameraFrame||!viewport.clientWidth||!viewport.clientHeight)return;
 const next=fittedFrame(current.focus),previous=roboticsCameraFrame,blend=snap?1:1-Math.exp(-6*dt);
 next.center.copy(previous.center).lerp(current.focus.getCenter(V()),blend);
 next.distance=THREE.MathUtils.lerp(previous.distance,next.distance,blend);
 // Translate the camera and orbit target together. Relative orbit, pan and
 // user-selected zoom survive tracking; only the gentle framing change scales it.
 const offset=camera.position.clone().sub(controls.target).multiplyScalar(next.distance/previous.distance);
 controls.target.add(next.center.clone().sub(previous.center));camera.position.copy(controls.target).add(offset);
 roboticsCameraFrame=next;
}
function resize(){if(!renderer)return;const w=viewport.clientWidth,h=viewport.clientHeight;if(!w||!h)return;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();fit();}
function selectInfo(info){$('#element-id').textContent=info.id;$('#element-type').textContent=info.type;$('#element-surface').textContent=info.surface;$('#element-length').textContent=info.length;$('#element-metric-label').textContent=info.metricLabel||'Długość w modelu';$('#element-detail-label').textContent=info.detailLabel||'Grubość płyty';$('#element-thickness').textContent=info.detail||'18 mm';}
function buildScene(){
 if(!renderer)return;
 try{
  roboticsCameraFrame=null;
  if(current){scene.remove(current.root);disposeScene(current.root);current.dispose?.();}
  current=technology==='combstruct'?manualScene(topic,variant,roofOptions,battenMode):technology==='bim'?bimScene(bimView,selectInfo):technology==='robotics'?roboticsScene(roboticsProcess):manufacturingScene(flowStage,productionSelection);
  scene.background.set(current.background||'#f2f5f1');viewport.dataset.robotics=technology==='robotics'?roboticsProcess:'';
  scene.add(current.root);current.root.updateMatrixWorld(true);$('#scene-annotation').textContent=current.annotation||'';
  if(current.arrows)current.arrows.visible=$('#arrows').checked;
  if(technology==='combstruct'&&topic.crossing)current.crossing?.($('#crossing').checked);
  if(technology==='combstruct'&&['roof-wall','ridge'].includes(topic.scene)){current.spread?.(Number($('#spread').value));current.insert?.(Number($('#roof-joint-insert').value));}
  if(technology==='combstruct'&&topic.scene==='battens')current.spread?.(Number($('#spread').value));
  if(technology==='bim'&&current.finish)updateFinish();
  if(technology==='flow'&&flowStage===3)updateAssembly();
  if(technology==='robotics'){updateRobotics();if(roboticsDetail&&current.getDetailFocus){current.focus=current.getDetailFocus();current.direction=current.detailDirection||current.direction;}}
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
 $('#roof-joint-controls').hidden=!['roof-wall','ridge'].includes(topic.scene);$('#roof-joint-variant-control').hidden=topic.scene==='ridge';$('#ridge-house-control').hidden=topic.scene!=='ridge';$('#roof-joint-insert').value=0;$('#roof-joint-insert-value').textContent='0 mm';
 $('#batten-controls').hidden=topic.scene!=='battens';
 $('#spread').value=0;$('#crossing').checked=!!topic.crossing&&topic.scene!=='ridge';$('#previous-topic').disabled=index===0;$('#next-topic').disabled=index===topics.length-1;
 $('#variant-description').textContent=variant.description;
}
function showTechnology(next,{hash=true}={}){
 technology=next;roboticsStamp=0;$('.technology-cta').hidden=['flow','robotics'].includes(next);
 $$('[data-technology]').forEach(b=>{const active=b.dataset.technology===next;b.setAttribute('aria-selected',String(active));b.tabIndex=active?0:-1;$('#'+b.getAttribute('aria-controls')).hidden=!active;});
 const mount=next==='combstruct'?'manual':next==='bim'?'bim':next==='robotics'?'robotics':'flow';$(`#${mount}-mount`).append(viewport);
 if(hash)history.pushState(null,'',`#${next==='combstruct'?topic.id:next==='bim'&&bimView==='wall'?'bim-sciana':next==='robotics'&&roboticsProcess==='site'?'robotics-montaz':next}`);
 if(next==='combstruct')updateTopic();if(next==='flow')updateFlow();if(next==='robotics')setupRobotics();buildScene();
}
function showTopic(id,{hash=true}={}){const next=topics.find(t=>t.id===id)||topic;if(next!==topic&&['ridge','roof-wall'].includes(next.scene)){roofOptions.pitch=next.scene==='ridge'?(roofOptions.ridgeHouse==='30'?35:45):35;$('#roof-joint-pitch').value=roofOptions.pitch;$('#roof-joint-pitch-value').textContent=roofOptions.pitch+'°';}topic=next;showTechnology('combstruct',{hash});}
function fromLocation(){const id=location.hash.slice(1);if(id==='bim'||id==='bim-sciana'){bimView=id==='bim-sciana'?'wall':'house';syncBimControls();showTechnology('bim',{hash:false});}else if(id==='robotics'||id==='robotics-montaz'){roboticsProcess=id==='robotics-montaz'?'site':'factory';showTechnology('robotics',{hash:false});}else if(['flow','manufacturing','mycelium'].includes(id)){if(id!=='flow')history.replaceState(null,'','#flow');showTechnology('flow',{hash:false});}else showTopic(id,{hash:false});}
for(const group of [...new Set(topics.map(t=>t.group))]){
 const section=document.createElement('section');section.className='topic-group';const heading=document.createElement('h3');heading.textContent=group;section.append(heading);
 const optgroup=document.createElement('optgroup');optgroup.label=group;
 for(const t of topics.filter(t=>t.group===group)){const b=document.createElement('button');b.type='button';b.dataset.topic=t.id;b.textContent=t.title;b.addEventListener('click',()=>showTopic(t.id));section.append(b);const o=new Option(t.title,t.id);optgroup.append(o);}
 $('#topic-buttons').append(section);$('#topic-select').append(optgroup);
}
for(const v of variants)$('#variant-select').append(new Option(v.name,v.id));
$$('[data-batten-view]').forEach(button=>button.addEventListener('click',()=>{battenMode=button.dataset.battenView;$$('[data-batten-view]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));buildScene();}));
$('#topic-select').addEventListener('change',e=>showTopic(e.target.value));
$('#variant-select').addEventListener('change',e=>{variant=variants.find(v=>v.id===e.target.value);$('#variant-description').textContent=variant.description;buildScene();});
$('#roof-joint-variant').addEventListener('change',e=>{const [eave,knee]=e.target.value.split('-').map(Number);roofOptions={...roofOptions,eave:!!eave,knee:!!knee};buildScene();});
$('#ridge-house').addEventListener('change',e=>{roofOptions.ridgeHouse=e.target.value;roofOptions.pitch=e.target.value==='30'?35:45;$('#roof-joint-pitch').value=roofOptions.pitch;$('#roof-joint-pitch-value').textContent=roofOptions.pitch+'°';buildScene();});
$('#roof-joint-pitch').addEventListener('input',e=>{roofOptions.pitch=Number(e.target.value);$('#roof-joint-pitch-value').textContent=roofOptions.pitch+'°';buildScene();});
$('#roof-joint-insert').addEventListener('input',e=>{const value=Number(e.target.value);$('#roof-joint-insert-value').textContent=value+' mm';$('#spread').value=0;current?.spread?.(0);$('#crossing').checked=true;current?.crossing?.(true);current?.insert?.(value);invalidate();});
$$('[data-technology]').forEach(b=>b.addEventListener('click',()=>showTechnology(b.dataset.technology)));
$('.technology-tabs').addEventListener('keydown',e=>{const tabs=$$('[data-technology]'),at=tabs.indexOf(document.activeElement);if(at<0)return;let n;if(e.key==='ArrowRight')n=(at+1)%tabs.length;if(e.key==='ArrowLeft')n=(at+tabs.length-1)%tabs.length;if(e.key==='Home')n=0;if(e.key==='End')n=tabs.length-1;if(n!==undefined){e.preventDefault();tabs[n].click();tabs[n].focus();}});
$('#previous-topic').addEventListener('click',()=>showTopic(topics[topics.indexOf(topic)-1]?.id));$('#next-topic').addEventListener('click',()=>showTopic(topics[topics.indexOf(topic)+1]?.id));
$('#spread').addEventListener('input',e=>{current?.spread?.(Number(e.target.value));$('#crossing').checked=false;current?.crossing?.(false);invalidate();});
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
function updateFlow(){
 const step=flowSteps[flowStage];$('#flow-title').textContent=step.title;$('#flow-text').textContent=step.text;$('#flow-output-label').textContent=step.label;
 $('#flow-outputs').replaceChildren(...step.items.map(text=>{const li=document.createElement('li');li.textContent=text;return li;}));
 $$('[data-flow-stage]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.flowStage)===flowStage)));
 $('#assembly-control').hidden=flowStage!==3;$('#flow-next').textContent=['Zobacz model Combstruct →','Przejdź do produkcji →','Zobacz montaż →','Wróć do rzutów ↺'][flowStage];
 $('.flow-layout').dataset.stage=flowStage;$('#production-catalog').hidden=flowStage!==2;
}
function updateAssembly(){const value=Number($('#assembly').value);current?.assembly?.(value);$('#assembly-progress').textContent=`${Math.round(value*100)}%`;invalidate();}
function showFlowStage(stage){flowStage=stage;updateFlow();buildScene();}
$$('[data-flow-stage]').forEach(b=>b.addEventListener('click',()=>showFlowStage(Number(b.dataset.flowStage))));
$('#flow-next').addEventListener('click',()=>showFlowStage((flowStage+1)%flowSteps.length));$('#assembly').addEventListener('input',updateAssembly);
mountCatalogue($('#production-catalog'),productionParts,(selection,interactive)=>{
 productionSelection=selection;
 if(technology==='flow'&&flowStage===2)buildScene();
 if(interactive)revealPart($('#flow-mount'));
});
const menuButton=$('.menu-toggle'),menu=$('#mobile-menu');
function setupRobotics(){
 roboticsStep=-1;
 $('#robotics-detail').hidden=roboticsProcess!=='factory';$('#robotics-detail').setAttribute('aria-pressed',String(roboticsDetail));$('#robotics-detail').textContent=roboticsDetail?'Widok całej linii':'Zbliżenie operacji';
 $$('[data-robotics-process]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.roboticsProcess===roboticsProcess)));
 const steps=$('#robotics-steps');steps.dataset.process=roboticsProcess;steps.replaceChildren(...roboticsProcesses[roboticsProcess].steps.map((s,i)=>{const b=document.createElement('button');b.type='button';b.textContent=s.label;b.dataset.roboticsStep=i;b.setAttribute('aria-pressed','false');b.onclick=()=>seekRobotics(s.at+.001);return b;}));
 $('#robotics-note').textContent=roboticsProcess==='factory'?'Animacja koncepcyjna linii produkcyjnej.':'Wybrane operacje z modelu Combstruct 30. Przejścia między etapami pomijają część powtarzalnych cykli. Koncepcja ruchu robota, nie zweryfikowany program montażowy.';
}
function updateRobotics({dt=0,snapCamera=false}={}){
 current?.update?.(roboticsProgress);const def=roboticsProcesses[roboticsProcess];
 const i=def.steps.findLastIndex(s=>roboticsProgress>=s.at);
 if(i!==roboticsStep){roboticsStep=i;$('#robotics-title').textContent=def.steps[i].title;$('#robotics-text').textContent=def.steps[i].text;$$('[data-robotics-step]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.roboticsStep)===i)));}
 followFactoryCamera(dt,snapCamera);
 $('#robotics-seek').value=roboticsProgress;const seconds=Math.floor(roboticsProgress*def.duration);$('#robotics-time').textContent=`${Math.floor(seconds/60)}:${String(seconds%60).padStart(2,'0')}`;
 $('#robotics-play').textContent=roboticsPlaying?'Pauza':roboticsProgress===1?'Powtórz':'Odtwórz';$('#robotics-play').setAttribute('aria-pressed',String(roboticsPlaying));
}
function seekRobotics(p){roboticsProgress=Math.min(1,Math.max(0,p));roboticsPlaying=false;roboticsStamp=0;updateRobotics({snapCamera:true});invalidate();}
$$('[data-robotics-process]').forEach(b=>b.addEventListener('click',()=>{roboticsProcess=b.dataset.roboticsProcess;roboticsProgress=0;roboticsPlaying=!matchMedia('(prefers-reduced-motion: reduce)').matches;showTechnology('robotics');}));
$('#robotics-play').addEventListener('click',()=>{const restart=roboticsProgress===1;if(restart)roboticsProgress=0;roboticsPlaying=!roboticsPlaying;roboticsStamp=0;updateRobotics({snapCamera:restart});invalidate();});
$('#robotics-replay').addEventListener('click',()=>{roboticsProgress=0;roboticsPlaying=!matchMedia('(prefers-reduced-motion: reduce)').matches;roboticsStamp=0;updateRobotics({snapCamera:true});invalidate();});
$('#robotics-seek').addEventListener('input',e=>seekRobotics(Number(e.target.value)));
$('#robotics-detail').addEventListener('click',()=>{roboticsDetail=!roboticsDetail;$('#robotics-detail').setAttribute('aria-pressed',String(roboticsDetail));$('#robotics-detail').textContent=roboticsDetail?'Widok całej linii':'Zbliżenie operacji';current.focus=roboticsDetail?current.getDetailFocus():current.overview;current.direction=roboticsDetail?current.detailDirection:current.overviewDirection;fit();});
new IntersectionObserver(entries=>{roboticsVisible=entries[0].isIntersecting;roboticsStamp=0;invalidate();},{threshold:.05}).observe($('#robotics-mount'));
document.addEventListener('visibilitychange',()=>{roboticsStamp=0;invalidate();});
matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change',e=>{if(e.matches){roboticsPlaying=false;roboticsStamp=0;if(technology==='robotics')updateRobotics();}});
function closeMenu(){menu.hidden=true;menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Otwórz menu');}
menuButton.addEventListener('click',()=>{const open=menu.hidden;menu.hidden=!open;menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Zamknij menu':'Otwórz menu');});
$$('#mobile-menu a').forEach(a=>a.addEventListener('click',closeMenu));document.addEventListener('click',e=>{if(!e.target.closest('.site-header'))closeMenu();});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!menu.hidden){closeMenu();menuButton.focus();}});
addEventListener('popstate',fromLocation);addEventListener('hashchange',()=>{const hash=location.hash.slice(1);if(hash!==technology&&hash!==topic.id)fromLocation();});
window.combstructTechnology={getState:()=>({ready:!!renderer,technology,topic:topic.id,variant:variant.id,bimView,flowStage,roofJoint:technology==='combstruct'&&topic.scene==='roof-wall'?{...roofOptions,slabBeveled:false,boards:current?.roofJoint?.boards.length}:null,ridgeJoint:technology==='combstruct'&&topic.scene==='ridge'?{pitch:roofOptions.pitch,house:roofOptions.ridgeHouse,boards:current?.ridgeJoint?.boards.length}:null,robotics:technology==='robotics'?{...current?.getRoboticsState?.(),playing:roboticsPlaying,camera:{following:followsFactory(),position:camera?.position.toArray(),target:controls?.target.toArray()}}:null,manufacturing:current?.getManufacturingState?.(),selected:current?.getSelected?.(),wall:current?.getWallState?.(),battens:current?.getBattenState?.(),meshCount:current?.root.children.length,drawCalls:renderer?.info.render.calls}),topics:topics.map(t=>t.id),showTopic,showTechnology,seekRobotics,reset:fit};
fromLocation();startRenderer();
