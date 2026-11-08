/* Pagina de prezentare: pași animați, ghid în telefon, apariție la derulare */
(() => {
 const root=document.querySelector('.pl'); if(!root) return;
 const still=matchMedia('(prefers-reduced-motion: reduce)').matches;
 root.classList.add('pl-js');
 /* apariție la derulare */
 const rv=[...root.querySelectorAll('.pl-rv')];
 if(still||!('IntersectionObserver' in window)) rv.forEach(e=>e.classList.add('in'));
 else{const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});rv.forEach(e=>io.observe(e))}
 /* cei patru pași: automat, dar poți apăsa oricând */
 const path=root.querySelector('#pl-path');
 if(path){
  const nodes=[...path.querySelectorAll('.pl-node')], scenes=[...path.querySelectorAll('.pl-scene')];
  let cur=0,timer=null,seen=false;
  const set=i=>{cur=i;nodes.forEach((n,k)=>{n.classList.toggle('on',k===i);n.classList.toggle('done',k<i);n.parentElement.classList.toggle('done',k<i)});scenes.forEach((s,k)=>s.classList.toggle('on',k===i))};
  const stop=()=>{clearInterval(timer);timer=null};
  const play=()=>{if(still||timer||!seen)return;timer=setInterval(()=>set((cur+1)%nodes.length),5200)};
  nodes.forEach((n,i)=>n.addEventListener('click',()=>{set(i);stop();play()}));
  path.addEventListener('pointerenter',stop);path.addEventListener('pointerleave',play);
  if('IntersectionObserver' in window)new IntersectionObserver(es=>es.forEach(e=>{seen=e.isIntersecting;seen?play():stop()}),{threshold:.35}).observe(path);
 }
 /* ghidul din telefon */
 const tabs=[...root.querySelectorAll('.pl-tab')], screens=[...root.querySelectorAll('.pl-phone .pl-screen')];
 const pick=i=>{tabs.forEach((t,k)=>k===i?t.setAttribute('aria-current','true'):t.removeAttribute('aria-current'));screens.forEach((s,k)=>s.classList.toggle('on',k===i))};
 tabs.forEach((t,i)=>t.querySelector('.pl-th').addEventListener('click',()=>pick(i)));
})();
