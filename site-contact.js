/* One shared contact footer, outside the individual application screens. */
(() => {
  if (document.getElementById('prep-site-contact')) return;
  const footer = document.createElement('footer');
  footer.id = 'prep-site-contact';
  footer.className = 'prep-site-contact';
  footer.setAttribute('aria-label', 'Contact Prep');
  footer.innerHTML = `<div><a class="prep-footer-brand" href="https://prep-certificat.vercel.app/" aria-label="Prep — pagina principală">Prep<span>.</span></a><a class="prep-telegram-contact" href="https://t.me/prepadm" target="_blank" rel="noopener noreferrer"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m21 3-4 18-6-6-4 4 1-7L21 3ZM8 12 3 10l18-7" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"/></svg><span>Contact · Telegram <strong>@prepadm</strong></span><span aria-hidden="true">↗</span></a></div>`;
  document.body.append(footer);
})();
