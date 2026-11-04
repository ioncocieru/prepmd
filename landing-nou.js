/* Mișcare scurtă și discretă, numai când utilizatorul permite animațiile. */
(() => {
 if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
 const observer=new IntersectionObserver((entries,obs)=>{for(const entry of entries){if(!entry.isIntersecting)continue;if(entry.target.animate)entry.target.animate([{transform:'translateY(6px)'},{transform:'translateY(0)'}],{duration:620,easing:'cubic-bezier(.2,.7,.2,1)'});obs.unobserve(entry.target)}},{threshold:.13});
 document.querySelectorAll('.exam-domain,.exam-next-link,.simple-annex,.story-shell,.cert-frame,.home-review-layout').forEach(el=>observer.observe(el));
})();
