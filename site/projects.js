(() => {
  'use strict';
  const localFile = location.protocol === 'file:' || location.origin === 'null';
  const frameOrigin = localFile ? '*' : location.origin;

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
  }

  function connectParts(panel) {
    const cards = [...panel.querySelectorAll('.part-card')];
    const filters = [...panel.querySelectorAll('[data-parts-filter]')];
    let category = 'all';

    function render() {
      cards.forEach(card => {
        card.hidden = category !== 'all' && card.dataset.partCategory !== category;
        if (!card.hidden) {
          const img = card.querySelector('img');
          if (!img.hasAttribute('src')) img.src = img.dataset.src;
        }
      });
    }

    filters.forEach(filter => filter.addEventListener('click', () => {
      category = filter.dataset.partsFilter;
      filters.forEach(button => button.setAttribute('aria-pressed', String(button === filter)));
      render();
    }));
    return render;
  }

  document.querySelectorAll('.house-project').forEach(project => {
    const modelStage = project.querySelector('.project-model-stage');
    const loading = modelStage.querySelector('.project-model-loading');
    let modelFrame = null;
    let modelVisible = false;
    const showParts = connectParts(project.querySelector('.project-parts'));
    const priceMode = project.querySelector('.project-price-mode');
    priceMode?.addEventListener('change', () => {
      const mode = priceMode.querySelector('input:checked').value;
      const format = new Intl.NumberFormat('pl-PL', { maximumFractionDigits: 0 });
      project.querySelectorAll('[data-price-amount]').forEach(amount => {
        amount.textContent = format.format(Number(amount.dataset[mode]));
      });
    });

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

    connectTabs(project.querySelector('.project-tabs'), tab => {
      modelVisible = tab.dataset.projectView === 'model';
      if (modelVisible) loadModel();
      if (tab.dataset.projectView === 'parts') showParts();
      informModel();
    });
    project.querySelectorAll('.project-plan-tabs').forEach(tabList => connectTabs(tabList));
    document.addEventListener('visibilitychange', informModel);
  });

  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#mobile-menu');
  function closeMenu() {
    menu.hidden = true;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Otwórz menu');
  }
  menuButton.addEventListener('click', () => {
    const opening = menu.hidden;
    menu.hidden = !opening;
    menuButton.setAttribute('aria-expanded', String(opening));
    menuButton.setAttribute('aria-label', opening ? 'Zamknij menu' : 'Otwórz menu');
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
  document.querySelector('#copyright-year').textContent = new Date().getFullYear();
})();
