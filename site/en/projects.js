(() => {
  'use strict';
  const localFile = location.protocol === 'file:' || location.origin === 'null';
  const frameOrigin = localFile ? '*' : location.origin;
  function openLegacyProject() {
    const legacyProject = /^#combstruct-(30|90|125)$/.exec(location.hash);
    if (document.body.classList.contains('project-catalogue') && legacyProject) {
      location.replace(`combstruct-${legacyProject[1]}.html`);
      return true;
    }
    return false;
  }
  if (openLegacyProject()) return;
  addEventListener('hashchange', openLegacyProject);
  document.querySelector('[data-project-switch]')?.addEventListener('change', event => {
    location.assign(event.target.value);
  });

  function connectTabs(tabList, onChange = () => {}) {
    const tabs = [...tabList.querySelectorAll('[role="tab"]')];
    const panels = tabs.map(tab => document.getElementById(tab.getAttribute('aria-controls')));
    let activeIndex = Math.max(0, tabs.findIndex(tab => tab.getAttribute('aria-selected') === 'true'));

    function showView(index, moveFocus = false) {
      activeIndex = index;
      tabs.forEach((tab, i) => {
        const selected = i === index;
        tab.setAttribute('aria-selected', String(selected));
        tab.tabIndex = selected ? 0 : -1;
        panels[i].hidden = !selected;
      });
      onChange(tabs[index]);
      if (moveFocus) tabs[index].focus({ preventScroll: true });
      tabs[index].scrollIntoView({block:'nearest', inline:'nearest', behavior:'instant'});
    }

    tabs.forEach((tab, index) => tab.addEventListener('click', () => showView(index)));
    tabList.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowLeft') next = (activeIndex + tabs.length - 1) % tabs.length;
      if (event.key === 'ArrowRight') next = (activeIndex + 1) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next === undefined) return;
      event.preventDefault();
      showView(next, true);
    });
    return {show: showView, tabs};
  }

  function connectParts(panel) {
    let started=false;
    return () => {
      if(started)return;
      started=true;
      const script=document.createElement('script');
      script.src='assets/parts-viewer.js?v=d07ac363';
      script.onerror=()=>{
        started=false;
        const message=panel.querySelector('.parts-loading');
        message.textContent='Parts could not load. Return to this tab to try again.';
      };
      document.head.append(script);
    };
  }

  document.querySelectorAll('.house-project').forEach(project => {
    const heading = project.querySelector('.project-heading');
    new ResizeObserver(() => {
      document.documentElement.style.setProperty('--project-nav-height', `${Math.ceil(heading.getBoundingClientRect().height)}px`);
    }).observe(heading);
    const modelStage = project.querySelector('.project-model-stage');
    const loading = modelStage.querySelector('.project-model-loading');
    let modelFrame = null;
    let modelVisible = false;
    const showParts = connectParts(project.querySelector('.project-parts'));
    const priceMode = project.querySelector('.project-price-mode');
    const requestedMode = new URLSearchParams(location.search).get('mode');
    if (requestedMode === 'materials' || requestedMode === 'assembly') {
      priceMode.querySelector(`input[value="${requestedMode}"]`).checked = true;
    }
    const updatePrices = () => {
      const mode = priceMode.querySelector('input:checked').value;
      const format = new Intl.NumberFormat('en-GB', { maximumFractionDigits: 0 });
      project.querySelectorAll('[data-price-amount]').forEach(amount => {
        amount.textContent = format.format(Number(amount.dataset[mode]));
      });
      project.querySelectorAll('[data-order-material]').forEach(link => {
        const url = new URL(link.getAttribute('href'), location.href);
        url.searchParams.set('mode', mode);
        link.href = url.href;
        link.setAttribute('aria-label', `Enquire about ${project.querySelector('h1').textContent}, ${link.dataset.orderMaterial === 'osb3' ? 'OSB3' : 'plywood'}, ${mode === 'assembly' ? 'with assembly' : 'materials only'}`);
      });
    };
    priceMode?.addEventListener('change', updatePrices);
    updatePrices();

    function informModel() {
      modelFrame?.contentWindow?.postMessage({
        type: 'combstruct:visibility',
        visible: modelVisible && !document.hidden,
      }, frameOrigin);
    }

    function loadModel() {
      if (modelFrame) return;
      modelFrame = document.createElement('iframe');
      modelFrame.title = modelStage.dataset.modelTitle;
      modelFrame.allowFullscreen = true;
      modelFrame.addEventListener('load', () => {
        loading.hidden = true;
        informModel();
      });
      modelFrame.src = modelStage.dataset.modelSrc;
      modelStage.append(modelFrame);
    }

    const projectTabs = connectTabs(project.querySelector('.project-tabs'), tab => {
      modelVisible = tab.dataset.projectView === 'model';
      if (modelVisible) loadModel();
      if (tab.dataset.projectView === 'parts') showParts();
      informModel();
      if (project.getBoundingClientRect().top < -24) {
        project.scrollIntoView({block:'start', behavior:'instant'});
      }
    });
    const viewHashes = {wizualizacja:'visual', rzut:'plan', konstrukcja:'model', materialy:'parts'};
    const requestedView = viewHashes[location.hash.slice(1)];
    if (requestedView) {
      const index = projectTabs.tabs.findIndex(tab => tab.dataset.projectView === requestedView);
      if (index >= 0) projectTabs.show(index);
    }
    project.querySelectorAll('.project-plan-tabs').forEach(tabList => connectTabs(tabList));
    document.addEventListener('visibilitychange', informModel);
  });

  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#mobile-menu');
  function closeMenu() {
    menu.hidden = true;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open menu');
  }
  menuButton.addEventListener('click', () => {
    const opening = menu.hidden;
    menu.hidden = !opening;
    menuButton.setAttribute('aria-expanded', String(opening));
    menuButton.setAttribute('aria-label', opening ? 'Close menu' : 'Open menu');
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('click', event => {
    if (!event.target.closest('.site-header')) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !menu.hidden) {
      closeMenu();
      menuButton.focus();
    }
  });
  matchMedia('(max-width:760px)').addEventListener('change', closeMenu);
  const copyrightYear = document.querySelector('#copyright-year');
  if (copyrightYear) copyrightYear.textContent = new Date().getFullYear();
})();
