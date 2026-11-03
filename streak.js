/* Seria este calculată de server; nu folosește ceasul clientului. */
(() => {
 let running=false;
 window.prepUpdateStreak=async()=>{
  const el=document.getElementById('daily-streak');
  if(!el)return;
  if(typeof currentUserId==='undefined'||!currentUserId||!Array.isArray(allowedExams)||!allowedExams.length){el.hidden=true;return}
  if(running)return;running=true;const userId=currentUserId;
  try{
   const {data,error}=await sb.rpc('prep_record_daily_streak');
   if(error||!data||!Number.isInteger(data.days)||data.days<1||currentUserId!==userId||!allowedExams.length){el.hidden=true;return}
   el.querySelector('.streak-value').textContent=data.days;
   el.querySelector('small').textContent=data.days===1?'zi la rând':'zile la rând';
   el.setAttribute('aria-label',`${data.days} ${data.days===1?'zi consecutivă':'zile consecutive'} de acces, ora Chișinăului`);
   el.hidden=false;
   if(data.new_day){el.classList.remove('streak-new');void el.offsetWidth;el.classList.add('streak-new')}
  }catch(_){el.hidden=true}finally{running=false}
 };
 document.addEventListener('visibilitychange',()=>{if(!document.hidden)window.prepUpdateStreak()});
 setInterval(()=>{if(!document.hidden)window.prepUpdateStreak()},300000);
 setTimeout(()=>window.prepUpdateStreak(),600);
})();
