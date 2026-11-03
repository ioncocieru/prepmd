/* Mișcare discretă la derulare, fără a ascunde conținutul. */
(() => {
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const observer = new IntersectionObserver((entries, obs) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      if (typeof entry.target.animate === 'function') {
        entry.target.animate([{transform: 'translateY(8px)'}, {transform: 'translateY(0)'}], {duration: 450, easing: 'ease-out'});
      }
      obs.unobserve(entry.target);
    }
  }, {threshold: 0.15});
  document.querySelectorAll('.screen-landing .exam-tile, .screen-landing .order-page, .screen-landing .offer-card, .screen-landing .steps-list article').forEach(el => observer.observe(el));
})();
