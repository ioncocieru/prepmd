(() => {
 const track=document.querySelector('.story-track'); if (!track) return;
 const slides=[...track.querySelectorAll('.story-slide')], dots=[...document.querySelectorAll('.story-dots button')], next=document.querySelector('.story-next');
 let current=0, timer;
 function update(){const x=track.scrollLeft;current=slides.reduce((best,s,i)=>Math.abs(s.offsetLeft-track.offsetLeft-x)<Math.abs(slides[best].offsetLeft-track.offsetLeft-x)?i:best,0);dots.forEach((d,i)=>i===current?d.setAttribute('aria-current','true'):d.removeAttribute('aria-current'));next.textContent=current===slides.length-1?'Primul pas':'Următorul pas';}
 function go(i){track.scrollTo({left:i*track.clientWidth,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'})}
 dots.forEach((d,i)=>d.addEventListener('click',()=>go(i)));next.addEventListener('click',()=>go((current+1)%slides.length));track.addEventListener('scroll',()=>{clearTimeout(timer);timer=setTimeout(update,50)},{passive:true});track.addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();go(Math.max(0,Math.min(slides.length-1,current+(e.key==='ArrowRight'?1:-1))))}});update();
})();
