(() => {
  'use strict';
  const video = document.querySelector('#construction-film');
  const play = document.querySelector('#construction-play');
  const chapters = [...document.querySelectorAll('[data-construction-time]')];
  if (video && play) {
    let requestedTime = null;
    const screen = video.closest('.assembly-screen');
    const showChapter = time => {
      const active = time >= Number(chapters[1]?.dataset.constructionTime) ? 1 : 0;
      chapters.forEach((button, index) => button.setAttribute('aria-pressed', String(index === active)));
    };
    const revealControls = () => {
      play.hidden = true;
      video.controls = true;
      screen.classList.add('is-playing');
    };
    const start = time => {
      if (Number.isFinite(time)) {
        requestedTime = time;
        showChapter(time);
      }
      revealControls();
      if (requestedTime !== null && video.readyState >= 1) {
        video.currentTime = requestedTime;
        requestedTime = null;
      }
      video.play().catch(() => { video.controls = true; });
    };
    video.addEventListener('loadedmetadata', () => {
      if (requestedTime !== null) {
        video.currentTime = Math.min(requestedTime, video.duration);
        requestedTime = null;
      }
    });
    video.addEventListener('play', revealControls);
    video.addEventListener('timeupdate', () => showChapter(requestedTime ?? video.currentTime));
    video.addEventListener('ended', () => { play.hidden = false; });
    video.addEventListener('error', () => { play.hidden = true; video.controls = true; });
    play.addEventListener('click', () => {
      const atEnd = video.ended || (Number.isFinite(video.duration) && video.currentTime >= video.duration - 0.1);
      start(atEnd ? 0 : undefined);
      video.focus({preventScroll:true});
    });
    video.tabIndex = 0;
    chapters.forEach(button => button.addEventListener('click', () => start(Number(button.dataset.constructionTime))));
    play.hidden = false;
    video.controls = false;
    document.querySelector('#construction-chapters').hidden = false;
    video.closest('figure').classList.add('has-chapters');
    document.addEventListener('visibilitychange', () => { if (document.hidden) video.pause(); });
  }

  const modePicker = document.querySelector('#benefit-build-mode');
  const project = window.COMBSTRUCT_OFFERS?.find(item => item.id === '30');
  const variant = project?.variants.find(item => item.material === 'osb3');
  if (modePicker && variant) {
    const format = new Intl.NumberFormat(document.documentElement.lang === 'en' ? 'en-GB' : 'en-GB', {maximumFractionDigits:0});
    const update = () => {
      const mode = modePicker.querySelector('input:checked').value;
      document.querySelector('#benefit-price').textContent = format.format(variant[mode]);
      document.querySelector('#benefit-price-scope').textContent = mode === 'assembly'
        ? 'Combstruct 30 · OSB3 · structure with assembly'
        : 'Combstruct 30 · OSB3 · materials without assembly';
      document.querySelector('#benefit-price-link').href = `${project.page}?mode=${mode}`;
    };
    modePicker.addEventListener('change', update);
    modePicker.hidden = false;
    update();
  }
})();
