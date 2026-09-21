(() => {
  'use strict';
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
  const frame = $('#system-frame');
  const localFile = location.protocol === 'file:' || location.origin === 'null';
  const frameOrigin = localFile ? '*' : location.origin;
  let stage = 0;
  let modelReady = false;
  const stages = [
    ['Deska wycięta z płyty', 'Podstawowy element wycinamy z płyty drewnopochodnej. Nacięcia, czyli wpusty, sięgają do połowy wysokości deski. W tych miejscach połączymy ją z kolejnymi elementami.', 'Zobacz połączenie'],
    ['Jak przedłużamy belkę', 'Belkę składamy z dwóch warstw desek. Przesuwamy jedną warstwę wzdłuż drugiej: koniec deski wypada wtedy obok pełnego odcinka sąsiedniej. Dokładając kolejne deski, przedłużamy belkę.', 'Połącz belki na krzyż'],
    ['Belki łączą się na krzyż', 'Wsuwamy belki w siebie pod kątem 90°. Wpusty sięgają do połowy wysokości belek, więc skrzyżowanie zachowuje wysokość jednej belki. Powstaje plaster — siatka żeber i otwartych komór.', 'Zobacz konstrukcję domu'],
    ['Ta sama siatka tworzy dom', 'Plastry układamy poziomo jako podłogę i strop oraz pionowo jako ściany. Z tej samej siatki powstaje dach. Sąsiednie plastry łączymy wpustami i stopniowanymi zakończeniami desek.', 'Wypełnij komory izolacją'],
    ['Izolacja trafia między deski', 'Do komór podłogi, ścian zewnętrznych i dachu wkładamy dopasowane kostki izolacji. Kolejny krok to stelażowanie ścian: zamknięcie żeber łatami z tej samej płyty.', 'Zamknij żebra łatami'],
    ['Łaty spinają ściany', 'Po wypełnieniu izolacją przykręcamy łaty 60 × 18 mm: na zewnątrz pionowo, od środka poziomo. Leżą płasko na krawędziach par desek i tworzą z żebrami przekrój T. Odcinki 2500 mm docinamy do potrzebnej długości.', 'Wróć do pojedynczej deski'],
  ];

  function showStage(next, focus = false) {
    stage = Math.max(0, Math.min(stages.length - 1, next));
    $$('.stage-tab').forEach((tab, index) => {
      tab.classList.toggle('is-active', index === stage);
      tab.setAttribute('aria-selected', String(index === stage));
      tab.tabIndex = index === stage ? 0 : -1;
    });
    $('#batten-detail-link').hidden = stage !== 5;
    $('#stage-title').textContent = stages[stage][0];
    $('#stage-description').textContent = stages[stage][1];
    $('#next-stage').firstChild.textContent = `${stages[stage][2]} `;
    $('#stage-panel').setAttribute('aria-labelledby', `stage-${stage}`);
    if (modelReady) frame.contentWindow.postMessage({ type: 'combstruct:stage', stage }, frameOrigin);
    if (focus) $(`#stage-${stage}`).focus({ preventScroll: true });
    if (matchMedia('(max-width: 760px)').matches) {
      const selected = $(`#stage-${stage}`);
      $('.stage-tabs').scrollLeft = Math.max(0, selected.offsetLeft - $('.stage-tabs').offsetLeft - 12);
    }
  }
  $$('.stage-tab').forEach(tab => tab.addEventListener('click', () => showStage(Number(tab.dataset.stage))));
  $('#next-stage').addEventListener('click', () => showStage((stage + 1) % stages.length));
  $('.stage-tabs').addEventListener('keydown', event => {
    const horizontal = matchMedia('(max-width:760px)').matches;
    const previousKey = horizontal ? 'ArrowLeft' : 'ArrowUp';
    const nextKey = horizontal ? 'ArrowRight' : 'ArrowDown';
    let next;
    if (event.key === previousKey) next = (stage + stages.length - 1) % stages.length;
    if (event.key === nextKey) next = (stage + 1) % stages.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = stages.length - 1;
    if (next !== undefined) { event.preventDefault(); showStage(next, true); }
  });
  function updateOrientation() {
    $('.stage-tabs').setAttribute('aria-orientation', matchMedia('(max-width:760px)').matches ? 'horizontal' : 'vertical');
  }
  updateOrientation();
  addEventListener('resize', updateOrientation);
  addEventListener('message', event => {
    if (event.source !== frame.contentWindow || (!localFile && event.origin !== location.origin)) return;
    if (event.data?.type === 'combstruct:ready') {
      modelReady = true;
      window.__combstructReady = true;
      $('#model-loading').classList.add('is-ready');
      frame.contentWindow.postMessage({ type: 'combstruct:stage', stage }, frameOrigin);
    }
    if (event.data?.type === 'combstruct:error') {
      $('#model-loading').classList.add('is-ready');
      $('#reset-view').disabled = true;
    }
  });
  $('#reset-view').addEventListener('click', () => {
    if (modelReady) frame.contentWindow.postMessage({ type: 'combstruct:reset' }, frameOrigin);
  });
  frame.addEventListener('load', () => {
    setTimeout(() => {
      if (modelReady) return;
      $('#model-loading').textContent = 'Podgląd 3D wymaga obsługi WebGL. Odśwież stronę lub spróbuj w innej przeglądarce.';
    }, 20000);
  });

  const menuButton = $('.menu-toggle');
  const menu = $('#mobile-menu');
  function closeMenu() { menu.hidden = true; menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', 'Otwórz menu'); }
  menuButton.addEventListener('click', () => {
    const opening = menu.hidden;
    menu.hidden = !opening;
    menuButton.setAttribute('aria-expanded', String(opening));
    menuButton.setAttribute('aria-label', opening ? 'Zamknij menu' : 'Otwórz menu');
  });
  $$('a', menu).forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && !menu.hidden) { closeMenu(); menuButton.focus(); } });
  document.addEventListener('click', event => { if (!event.target.closest('.site-header')) closeMenu(); });

  const dialogs = $$('dialog');
  const openers = new WeakMap();
  function openDialog(dialog, opener) {
    openers.set(dialog, opener || document.activeElement);
    dialog.showModal();
    document.body.classList.add('modal-open');
  }
  dialogs.forEach(dialog => {
    $('[data-close-dialog]', dialog).addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
    });
    dialog.addEventListener('close', () => {
      if (!dialogs.some(item => item.open)) document.body.classList.remove('modal-open');
      if (dialog === $('#film-dialog')) $('#brand-film').pause();
      openers.get(dialog)?.focus({ preventScroll: true });
    });
  });
  $$('[data-open-film]').forEach(button => button.addEventListener('click', () => {
    openDialog($('#film-dialog'), button);
    $('#brand-film').play().catch(() => { /* Native playback controls stay available. */ });
  }));

})();
