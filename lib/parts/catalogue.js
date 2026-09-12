export const quantity = n => `${n.toLocaleString('pl-PL')} szt.`;
export const length = n => `${n.toLocaleString('pl-PL', {minimumFractionDigits:2, maximumFractionDigits:3})} m`;
export function initialSelection(data) {
  const family=data.families[0];
  return {family:family.id,variant:family.variants[0].id};
}
export function selectedPart(data,selection) {
  const family=data.families.find(f=>f.id===selection.family) || data.families[0];
  const variant=family.variants.find(v=>v.id===selection.variant);
  return {family,variant:variant||family.variants[0]};
}
export function revealPart(viewport) {
  const rect=viewport.getBoundingClientRect();
  const header=document.querySelector('.project-heading')?.getBoundingClientRect().height || 0;
  if(rect.top<header+12 || rect.bottom>innerHeight-12) {
    window.scrollTo({top:scrollY+rect.top-header-20,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
  }
}
const node=(tag,className,text)=>{
  const el=document.createElement(tag);if(className)el.className=className;
  if(text!==undefined)el.textContent=text;return el;
};

// Shared controls: project pages and Flow show boards delivered before cutting.
export function mountCatalogue(root,data,onChange) {
  let selection=initialSelection(data);
  root.classList.add('parts-catalogue');
  const heading=node('div','parts-catalogue-heading');
  heading.append(node('h4',null,'Rodzaje desek'),node('span','parts-catalogue-total',quantity(data.totalBoards)));
  const lead=node('p','parts-catalogue-lead','Deski w Twoim zestawie. Wybierz rodzaj i długość.');
  const families=node('div','parts-family-list');families.setAttribute('role','group');families.setAttribute('aria-label','Rodzaje desek');
  const variants=node('div','parts-variant-list');variants.setAttribute('role','group');variants.setAttribute('aria-label','Długości i ilości');
  const variantHeading=node('div','parts-variant-heading');
  const variantTitle=node('h5'),variantTotal=node('span');variantHeading.append(variantTitle,variantTotal);
  root.replaceChildren(variantHeading,variants,heading,lead,families);

  function select(variant,interactive=true) {
    selection.variant=variant;
    for(const b of variants.children)b.setAttribute('aria-pressed',String(b.dataset.partsVariant===variant));
    onChange({...selection},interactive);
  }
  function showFamily(id,interactive=true) {
    selection.family=id;
    const family=data.families.find(f=>f.id===id);
    for(const b of families.children)b.setAttribute('aria-pressed',String(b.dataset.partsFamily===id));
    variantTitle.textContent=family.name;
    variantTotal.textContent=`${quantity(family.count)} łącznie`;
    const buttons=family.variants.map(v=>{
      const b=node('button','parts-variant');b.type='button';b.dataset.partsVariant=v.id;
      b.append(node('span',null,length(v.lengthM)),node('strong',null,quantity(v.count)));
      b.addEventListener('click',()=>select(v.id));return b;
    });
    variants.replaceChildren(...buttons);
    select(family.variants[0].id,interactive);
  }
  for(const family of data.families) {
    const button=node('button','parts-family');button.type='button';button.dataset.partsFamily=family.id;
    const count=node('span','parts-family-count');count.append(node('strong',null,quantity(family.count)),node('small',null,'łącznie'));
    button.append(node('span','parts-family-name',family.name),count);
    button.addEventListener('click',()=>showFamily(family.id));families.append(button);
  }
  showFamily(selection.family,false);
  return {getSelection:()=>({...selection})};
}
