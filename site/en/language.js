(() => {
  'use strict';
  // Language follows the URL. Keep the selected house, kit and open tab when
  // switching; no forced redirects, cookies or personal data in local storage.
  const links=[...document.querySelectorAll('[data-language]')];
  function update() {
    let hash=location.hash;
    const tab=document.querySelector('[data-project-view][aria-selected="true"]');
    if(tab)hash='#'+({visual:'wizualizacja',plan:'rzut',model:'konstrukcja',parts:'materialy'}[tab.dataset.projectView]);
    const params=new URLSearchParams(location.search);
    const mode=document.querySelector('.project-price-mode input:checked');
    if(mode)params.set('mode',mode.value);
    for(const a of links) {
      const url=new URL(a.href,location.href);url.search=params.toString();url.hash=hash;a.href=url.href;
    }
  }
  update();addEventListener('hashchange',update);addEventListener('popstate',update);
  document.addEventListener('change',update);
  document.addEventListener('click',e=>{if(e.target.closest('[role="tab"],[data-language]'))update();},true);
  document.addEventListener('click',e=>{if(e.target.closest('[role="tab"]'))update();});
})();
