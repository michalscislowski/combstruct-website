(() => {
  'use strict';
  const form = document.querySelector('#contact-form');
  if (!form) return;
  const status = document.querySelector('#contact-status');
  const manual = document.querySelector('#contact-manual');
  const compose = document.querySelector('#contact-compose');
  function message() {
    const data = new FormData(form);
    const value = key => String(data.get(key) || '').trim();
    const rows = ['Temat zapytania: ' + value('topic'), 'Imię: ' + value('name')];
    if (value('location')) rows.push('Miejsce budowy: ' + value('location'));
    rows.push('', value('message'));
    return rows.join('\n');
  }
  function validate() {
    for (const name of ['name','message']) {
      const field = form.elements.namedItem(name);
      if (!field.value.trim()) field.value = '';
    }
    return form.reportValidity();
  }
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!validate()) return;
    compose.href = 'mailto:daniel@combstruct.com?subject=' + encodeURIComponent('Zapytanie do Combstruct') + '&body=' + encodeURIComponent(message());
    compose.click();
    status.textContent = 'Dokończ wysyłkę w swojej poczcie. Jeśli poczta się nie otworzyła, skopiuj wiadomość i wyślij ją na daniel@combstruct.com.';
  });
  document.querySelector('#contact-copy').addEventListener('click', async () => {
    if (!validate()) return;
    try {
      await navigator.clipboard.writeText(message());
      manual.hidden = true;
      status.textContent = 'Wiadomość skopiowana. Wklej ją do e-maila na daniel@combstruct.com.';
    } catch {
      manual.hidden = false;
      const textarea = manual.querySelector('textarea');
      textarea.value = message();
      textarea.focus();
      textarea.select();
      status.textContent = 'Zaznaczona wiadomość jest gotowa do ręcznego skopiowania.';
    }
  });
  form.addEventListener('input', () => { status.textContent = ''; manual.hidden = true; });
  form.hidden = false;
})();
