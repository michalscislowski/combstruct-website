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
    ['A board cut from a sheet', 'We cut the basic component from a wood-based sheet. Slots extend halfway through the height of the board. This is where it joins the next components.', 'See the joint'],
    ['Extending a beam', 'A beam is made from two layers of boards. One layer is offset along the other, so the end of one board sits beside an unbroken section of its neighbour. Add more boards to extend the beam.', 'Cross the beams'],
    ['Beams interlock at right angles', 'Slide the beams together at 90°. Each slot reaches halfway through the beam height, so the joint stays within the height of one beam. This creates a grid panel of ribs and open cells.', 'See the house structure'],
    ['The same grid forms the house', 'Grid panels form floors and ceilings when laid horizontally, and walls when placed vertically. The roof uses the same grid. Adjacent panels connect through slots and stepped board ends.', 'Fill the cells with insulation'],
    ['Insulation fits between the boards', 'Fitted insulation blocks fill the cells in the floor, external walls and roof. Next, strips cut from the same panel material cap the wall and roof ribs.', 'Cap the ribs with battens'],
    ['Battens tie the walls and roof together', 'After fitting the insulation, we screw 60 × 18 mm battens across the open-slot edges. On the walls they run vertically outside and horizontally inside. On the roof slab they cap the ribs from above and below, in two perpendicular directions. Each batten forms a T-section with a board pair. The 2500 mm stock is cut at joints and obstructions.', 'Back to a single board'],
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
      $('#model-loading').textContent = 'The 3D preview requires WebGL. Refresh the page or try another browser.';
    }, 20000);
  });

  const menuButton = $('.menu-toggle');
  const menu = $('#mobile-menu');
  function closeMenu() { menu.hidden = true; menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', 'Open menu'); }
  menuButton.addEventListener('click', () => {
    const opening = menu.hidden;
    menu.hidden = !opening;
    menuButton.setAttribute('aria-expanded', String(opening));
    menuButton.setAttribute('aria-label', opening ? 'Close menu' : 'Open menu');
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
