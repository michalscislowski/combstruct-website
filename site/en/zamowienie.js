(() => {
  'use strict';
  const params = new URLSearchParams(location.search);
  const project = window.COMBSTRUCT_OFFERS.find(item => item.id === params.get('project'));
  const variant = project?.variants.find(item => item.material === params.get('material'));
  const mode = params.get('mode');
  if (!project || !variant || !['materials','assembly'].includes(mode)) return;
  const format = new Intl.NumberFormat('en-GB', {maximumFractionDigits:0});
  const price = format.format(variant[mode]);
  const scope = mode === 'assembly' ? 'Materials with assembly' : 'Materials only';
  const back = `${project.page}?mode=${mode}&material=${variant.material}#cena`;
  document.querySelector('#inquiry-empty').hidden = true;
  document.querySelector('#inquiry-content').hidden = false;
  document.querySelector('#inquiry-project').textContent = project.name;
  document.querySelector('#inquiry-material').textContent = variant.label;
  document.querySelector('#inquiry-mode').textContent = scope;
  document.querySelector('#inquiry-price').textContent = price;
  document.querySelector('#inquiry-image').src = project.image;
  document.querySelector('#inquiry-image').alt = `${project.name} — finished house visualisation`;
  document.querySelector('#inquiry-back').href = back;
  document.querySelector('#inquiry-change').href = back;
  document.title = `${project.name} — order enquiry | Combstruct`;
  const form = document.querySelector('#inquiry-form');
  const email = document.querySelector('#inquiry-email');
  function message() {
    const data = new FormData(form);
    const rows = ['Hello,', '', 'I am interested in ordering:',
      `House: ${project.name}`, `Material: ${variant.label}`,
      'Structure with insulation', `Scope: ${scope}`, `Price: ${price} PLN incl. VAT`, ''];
    if (data.get('name').trim()) rows.push(`First name: ${data.get('name').trim()}`);
    if (data.get('location').trim()) rows.push(`Build location: ${data.get('location').trim()}`);
    rows.push(`Preferred timing: ${data.get('timing')}`);
    if (data.get('message').trim()) rows.push('', data.get('message').trim());
    rows.push('', 'Please confirm the scope and the available delivery and assembly dates.');
    return rows.join('\n');
  }
  function update() {
    email.href = `mailto:contact@combstruct.com?subject=${encodeURIComponent(`Order enquiry — ${project.name}`)}&body=${encodeURIComponent(message())}`;
    document.querySelector('#inquiry-copy-status').textContent = '';
  }
  form.addEventListener('input', update);
  form.addEventListener('change', update);
  form.addEventListener('submit', event => {event.preventDefault();update();email.click();});
  document.querySelector('#inquiry-copy').addEventListener('click', async() => {
    try {
      await navigator.clipboard.writeText(message());
      document.querySelector('#inquiry-copy-status').textContent = 'Enquiry copied. Paste it into an email to contact@combstruct.com.';
    } catch {
      const manual = document.querySelector('#inquiry-manual-copy');
      manual.hidden = false;
      const text = manual.querySelector('textarea');
      text.value = message();text.focus();text.select();
      document.querySelector('#inquiry-copy-status').textContent = 'The selected text is ready to copy.';
    }
  });
  update();
})();
