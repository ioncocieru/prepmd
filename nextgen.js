/* Prep training scores are linear practice scores, not official scaled exam results. */
EXAM_ICONS.pythonNextGen = EXAM_ICONS.python;
function labRatio(q) {
 const r=state.labResults?.[q.id];
 return r && r.source === (state.labCode?.[q.id] ?? q.starter) ? Math.max(0,Math.min(1,Number(r.ratio)||0)) : 0;
}
function calculateAttemptScore(qs) {
 const questions=qs.filter(q=>q.type!=='lab'),labs=qs.filter(q=>q.type==='lab');
 const correct=questions.filter(isAnswerCorrect).length;
 const kind=questions.length&&labs.length?'combined':labs.length?'labs':'questions';
 const qMax=questions.length?(labs.length?700:1000):0, lMax=labs.length?(questions.length?300:1000):0;
 const qPoints=questions.length?Math.round(correct/questions.length*qMax):0;
 const lPoints=labs.length?Math.round(labs.reduce((n,q)=>n+labRatio(q),0)/labs.length*lMax):0;
 return {points:qPoints+lPoints,qPoints,lPoints,qMax,lMax,components:{kind,questions:{total:questions.length,correct},labs:labs.map(q=>({id:q.id,ratio:labRatio(q)}))}};
}
function nextGenEligible(){return getExam('pythonNextGen').QUESTIONS.filter(q=>state.nextGenKind==='labs'?q.type==='lab':state.nextGenKind==='questions'?q.type!=='lab':true);}
function nextGenChosen(){return nextGenEligible().filter(q=>state.nextGenSelection?.has(q.id));}
function configureNextGenSetup(){
 const isNG=state.currentExamKey==='pythonNextGen',screen=document.getElementById('screen-setup');
 screen.classList.toggle('ng-setup',isNG);
 document.getElementById('chapter-list').closest('.setup-panel').hidden=isNG;
 let picker=document.getElementById('ng-kind'),selection=document.getElementById('ng-selection');
 if(!picker){
  picker=document.createElement('section');picker.id='ng-kind';picker.className='ng-mode-picker';
  const modes=[['combined','layers','Întrebări + laburi','Exersează teoria și codul.','700 + 300 puncte'],['questions','questions','Doar întrebări','Exersează conceptele.','1000 de puncte'],['labs','code','Doar laburi','Scrie și testează cod.','1000 de puncte']];
  const icons={layers:'<rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/>',questions:'<path d="M8 3h10a2 2 0 0 1 2 2v16H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2V3Z"/><path d="M9 9h7M9 13h7M9 17h4"/>',code:'<path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18"/>'};
  picker.innerHTML='<div class="ng-section-heading"><span class="ng-step-number">01</span><div><h2>Tipul testului</h2><p>Alege întrebări, laburi sau ambele.</p></div></div><div class="ng-mode-grid">'+modes.map(([value,ico,title,desc,score])=>`<label><input type="radio" name="ng-kind" value="${value}" ${value==='combined'?'checked':''}><span class="ng-kind-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">${icons[ico]}</svg></span><span class="ng-kind-check" aria-hidden="true">✓</span><strong>${title}</strong><span class="ng-kind-desc">${desc}</span><span class="ng-kind-footer">${score}</span></label>`).join('')+'</div>';
  document.querySelector('.setup-layout').prepend(picker);
  selection=document.createElement('section');selection.id='ng-selection';selection.className='ng-selection-panel';picker.after(selection);
  picker.addEventListener('change',e=>{if(e.target.name==='ng-kind'){state.nextGenKind=e.target.value;renderNextGenSelection();}});
 }
 picker.hidden=!isNG;selection.hidden=!isNG;
 if(!isNG)return;
 state.ngExcludedChapters=new Set();
 state.nextGenSelection=new Set(getExam('pythonNextGen').QUESTIONS.map(q=>q.id));
 state.nextGenKind=picker.querySelector('input:checked').value;
 const exam=getExam('pythonNextGen');document.getElementById('setup-question-total').textContent=`${exam.QUESTIONS.filter(q=>q.type!=='lab').length} întrebări · ${exam.QUESTIONS.filter(q=>q.type==='lab').length} laburi`;
 renderNextGenSelection();
}
function renderNextGenSelection(){
 const panel=document.getElementById('ng-selection'),exam=getExam('pythonNextGen'),pool=nextGenEligible();
 const chapters=exam.CHAPTERS.filter(ch=>pool.some(q=>q.chapter===ch.id));
 panel.innerHTML=`<div class="ng-section-heading"><span class="ng-step-number">02</span><div><h2>Conținutul testului</h2><p>Alege capitolele și câte exerciții vrei.</p></div></div>
 <details class="ng-chapter-details"><summary>Alege capitolele</summary><div class="ng-chapter-filters">${chapters.map(ch=>`<label class="ng-chapter-chip"><input type="checkbox" data-ng-chapter="${escapeHtml(ch.id)}"><span>${escapeHtml(ch.name)}</span><small>${pool.filter(q=>q.chapter===ch.id).length}</small></label>`).join('')}</div></details>
 <div class="ng-quick-pick"><div><strong>Numărul de exerciții</strong><span>Alege câte exerciții vrei, apoi apasă „Aplică”.</span></div><div class="ng-quick-controls">${state.nextGenKind!=='labs'?`<label>Câte întrebări?<input id="ng-theory-count" type="number" min="1" max="${pool.filter(q=>q.type!=='lab').length}" value="${pool.filter(q=>q.type!=='lab'&&state.nextGenSelection.has(q.id)).length}" inputmode="numeric"></label>`:''}${state.nextGenKind!=='questions'?`<label>Câte laburi?<input id="ng-lab-count" type="number" min="1" max="${pool.filter(q=>q.type==='lab').length}" value="${pool.filter(q=>q.type==='lab'&&state.nextGenSelection.has(q.id)).length}" inputmode="numeric"></label>`:''}<button class="btn btn-secondary" id="ng-random-pick" type="button">Aplică</button></div></div>
 <details class="ng-manual-picker"><summary><span>Alege individual întrebările și laburile</span><span class="ng-selected-pill" id="ng-picked-total"></span></summary><div class="ng-list-tools"><label class="ng-search-wrap"><span class="sr-only">Caută un exercițiu</span><input id="ng-question-search" type="search" placeholder="Caută după text, capitol sau număr…"></label><div><button class="link-btn" type="button" id="ng-pick-all">Selectează tot</button><button class="link-btn" type="button" id="ng-pick-none">Deselectează tot</button></div></div><div class="ng-question-picker" id="ng-question-picker"></div><p class="muted small" id="ng-search-empty" hidden>Nu am găsit exerciții pentru această căutare.</p></details>
 <div class="ng-session-preview" aria-live="polite"><div><span>SELECTATE</span><strong id="ng-session-count"></strong><p id="ng-session-points"></p></div><div class="ng-pass-chip"><b>700</b><span>prag de trecere<br>din 1000 de puncte</span></div></div>
 <p class="ng-selection-error" id="ng-selection-error" role="status" hidden></p>`;
 const list=panel.querySelector('#ng-question-picker');
 pool.forEach(q=>{const pos=exam.QUESTIONS.filter(x=>(x.type==='lab')===(q.type==='lab')).indexOf(q)+1;const ch=exam.CHAPTERS.find(c=>c.id===q.chapter);const row=document.createElement('label');row.className='ng-question-choice';row.dataset.search=(q.id+' '+pos+' '+(q.title||'')+' '+q.question+' '+ch?.name).toLocaleLowerCase();row.innerHTML=`<input type="checkbox" data-ng-question="${escapeHtml(q.id)}"><span class="ng-question-number">${q.type==='lab'?'&lt;/&gt;':String(pos).padStart(2,'0')}</span><span><strong>${escapeHtml(q.type==='lab'?(q.title||q.question):q.question)}</strong><small>${q.type==='lab'?'Lab Python':typeLabel(q.type)} · ${escapeHtml(ch?.name||'')}</small></span>`;list.append(row);});
 panel.onchange=handleNextGenSelectionChange;
 panel.querySelector('#ng-pick-all').onclick=()=>{state.ngExcludedChapters.clear();pool.forEach(q=>state.nextGenSelection.add(q.id));updateNextGenSelection();};
 panel.querySelector('#ng-pick-none').onclick=()=>{pool.forEach(q=>state.nextGenSelection.delete(q.id));updateNextGenSelection();};
 panel.querySelector('#ng-question-search').oninput=e=>{const term=e.target.value.trim().toLocaleLowerCase();let found=0;list.querySelectorAll('.ng-question-choice').forEach(row=>{row.hidden=!row.dataset.search.includes(term);if(!row.hidden)found++;});panel.querySelector('#ng-search-empty').hidden=found>0;};
 panel.querySelector('#ng-random-pick').onclick=()=>{
  const chapterPool=pool.filter(q=>!state.ngExcludedChapters.has(q.chapter)); const groups=[['ng-theory-count',chapterPool.filter(q=>q.type!=='lab')],['ng-lab-count',chapterPool.filter(q=>q.type==='lab')]];
  const sizes=groups.map(([id,items])=>{const field=panel.querySelector('#'+id);if(!field)return 0;const n=Number(field.value);if(!Number.isInteger(n)||n<1||n>items.length){field.setCustomValidity(`Alege un număr întreg între 1 și ${items.length}.`);field.reportValidity();return null;}field.setCustomValidity('');return n;});
  if(sizes.includes(null))return false;
  state.ngCountDirty=false;
  pool.forEach(q=>state.nextGenSelection.delete(q.id));groups.forEach(([,items],i)=>sample(items,sizes[i]).forEach(q=>state.nextGenSelection.add(q.id)));updateNextGenSelection();return true;
 };
 panel.querySelectorAll('input[type="number"]').forEach(f=>f.oninput=()=>{f.setCustomValidity('');state.ngCountDirty=true;});
 state.ngCountDirty=false;
 updateNextGenSelection();
}
function handleNextGenSelectionChange(e){
 const el=e.target,pool=nextGenEligible();
 if(el.type==='number')return;
 if(el.dataset.ngQuestion){if(el.checked){state.nextGenSelection.add(el.dataset.ngQuestion);const q=pool.find(q=>q.id===el.dataset.ngQuestion);if(q)state.ngExcludedChapters.delete(q.chapter);}else state.nextGenSelection.delete(el.dataset.ngQuestion);}
 if(el.dataset.ngChapter){el.checked?state.ngExcludedChapters.delete(el.dataset.ngChapter):state.ngExcludedChapters.add(el.dataset.ngChapter);pool.filter(q=>q.chapter===el.dataset.ngChapter).forEach(q=>el.checked?state.nextGenSelection.add(q.id):state.nextGenSelection.delete(q.id));}
 updateNextGenSelection();
}
function updateNextGenSelection(){
 const panel=document.getElementById('ng-selection');if(!panel||state.currentExamKey!=='pythonNextGen')return;
 const pool=nextGenEligible(),chosen=nextGenChosen(),qc=chosen.filter(q=>q.type!=='lab').length,lc=chosen.length-qc;
 panel.querySelectorAll('[data-ng-question]').forEach(el=>{el.checked=state.nextGenSelection.has(el.dataset.ngQuestion);el.closest('label').classList.toggle('selected',el.checked);});
 panel.querySelectorAll('[data-ng-chapter]').forEach(el=>{const items=pool.filter(q=>q.chapter===el.dataset.ngChapter),n=items.filter(q=>state.nextGenSelection.has(q.id)).length;el.checked=n===items.length;el.indeterminate=n>0&&n<items.length;el.closest('label').classList.toggle('selected',n>0);});
 if(!state.ngCountDirty){const qInput=panel.querySelector('#ng-theory-count'),lInput=panel.querySelector('#ng-lab-count');if(qInput)qInput.value=qc;if(lInput)lInput.value=lc;}
 const count=[qc?`${qc} întrebări`:'',lc?`${lc} laburi`:''].filter(Boolean).join(' + ')||'Niciun exercițiu selectat';
 panel.querySelector('#ng-session-count').textContent=count;panel.querySelector('#ng-picked-total').textContent=`${chosen.length} / ${pool.length}`;
 panel.querySelector('#ng-session-points').textContent=state.nextGenKind==='combined'?'Până la 700 de puncte din întrebări + 300 din laburi.':'Sesiunea aleasă este normalizată la 1000 de puncte.';
 const valid=state.nextGenKind==='combined'?qc>0&&lc>0:chosen.length>0;
 const error=panel.querySelector('#ng-selection-error');error.hidden=valid;error.textContent=state.nextGenKind==='combined'?'Pentru o sesiune combinată, selectează cel puțin o întrebare și un lab. Sau alege unul dintre modurile separate.':'Selectează cel puțin un exercițiu pentru a începe.';
 document.getElementById('start-quiz-btn').disabled=!valid;document.getElementById('setup-warning').hidden=true;
}

function runPythonLab(q,source,action='check') {
 return new Promise((resolve,reject)=>{
  if(location.protocol==='file:'){reject(Error('Python necesită găzduire HTTP(S). Deschide site-ul publicat, nu fișierul local.'));return;}
  const worker=new Worker(new URL('assets/python-nextgen/worker.js?v=prep-nextgen-v5',location.href));
  let ready=false,done=false;
  const finish=(error,result)=>{if(done)return;done=true;clearTimeout(timer);worker.terminate();if(error)reject(error);else resolve({...result,source});};
  let timer=setTimeout(()=>finish(Error('Motorul Python nu s-a încărcat. Verifică fișierele assets/vendor/pyodide și conexiunea.')),90000);
  worker.onmessage=({data:d})=>{
   if(d.type==='ready'){ready=true;clearTimeout(timer);timer=setTimeout(()=>finish(null,{ratio:0,passed:0,total:1,cases:[{name:'Limită de timp',passed:false,detail:'Codul nu s-a oprit în 4 secunde.'}],stdout:'Execuția a fost oprită.'}),4000);}
   if(d.type==='result')finish(null,d.result);
   if(d.type==='error'){if(d.infrastructure||!ready)finish(Error(d.error));else finish(null,{ratio:0,cases:[{name:'Execuție Python',passed:false,detail:d.error}],stdout:d.error});}
  };
  worker.onerror=e=>finish(Error(e.message||'Motorul Python nu poate fi pornit.'));
  worker.postMessage({code:source,labId:q.id,action});
 });
}
function renderPythonLab(q){
 state.labCode ||= {};state.labResults ||= {};
 const source=state.labCode[q.id]??q.starter,card=document.getElementById('quiz-card');
 const labs=state.quizQuestions.filter(x=>x.type==='lab'),number=labs.findIndex(x=>x.id===q.id)+1;
 const ico={play:'<path d="m9 5 11 7-11 7Z"/>',code:'<path d="m8 5-6 7 6 7m8-14 6 7-6 7M14 3l-4 18"/>',reset:'<path d="M3 11a9 9 0 1 1 2 7M3 4v7h7"/>',expand:'<path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"/>',check:'<path d="m4 12 5 5L20 6"/>',help:'<circle cx="12" cy="12" r="9"/><path d="M9.5 8a2.5 2.5 0 1 1 4 2c-1.5 1-1.5 1-1.5 3m0 3v.1"/>'};
 const icon=k=>`<svg viewBox="0 0 24 24" class="ng-svg" aria-hidden="true">${ico[k]}</svg>`;
 card.innerHTML=`<div class="ng-lab-top"><div class="ng-lab-heading"><span class="ng-lab-emblem">${icon('code')}</span><div><span class="ng-eyebrow">PYTHON WORKSPACE · ${number} / ${labs.length}</span><h2>${escapeHtml(q.title)}</h2></div></div><span class="ng-save-state" id="ng-save-status">Modificările se păstrează în sesiune</span></div>
 <div class="ng-workspace"><aside class="ng-task"><div class="ng-task-heading"><span class="ng-task-dot"></span><h3>Ce ai de făcut</h3></div><p class="ng-task-description">${escapeHtml(q.question)}</p><div class="ng-task-tip"><strong>Un pas pe rând</strong><span>Citește cerința, scrie soluția, apoi testeaz-o. Poți modifica și rula codul de câte ori ai nevoie.</span></div><details id="ng-help"><summary>${icon('help')} Cum lucrezi în editor</summary><p>Păstrează numele funcției sau variabilele cerute în enunț. Tab indentează cu 4 spații; Shift + Tab retrage indentarea. Enter continuă indentarea. Ctrl + Z anulează o modificare. Ctrl + Space deschide completările; Ctrl + F caută în cod.</p><p>Folosește print() și «Rulează codul» pentru depanare. Dacă doar definești o funcție, adaugă și un apel de probă, de exemplu print(filter_even([1, 2, 3, 4])). În modul examen verificările de punctaj apar la final. Fișierele temp.txt și list.txt, precum și directorul Sample Files, sunt virtuale și disponibile numai în labul corespunzător. La fiecare rulare se pornește un spațiu curat.</p></details><details open><summary>Laburile din sesiune <span>${labs.length}</span></summary><div id="ng-task-list"></div></details><p class="ng-lab-disclaimer">Spațiu de practică Prep. · Nu este un examen oficial.</p></aside>
 <div class="ng-editor-pane"><div class="ng-editor-tabbar"><span>${icon('code')} ${escapeHtml(q.id)}.py</span><span>Python 3</span></div><div class="ng-editor-bar"><div class="ng-editor-tools"><button class="ng-tool" id="ng-reset" title="Revino la codul inițial" aria-label="Resetează codul">${icon('reset')}</button><button class="ng-tool" id="ng-expand" title="Mărește editorul" aria-label="Mărește editorul">${icon('expand')}</button><button class="ng-tool" id="ng-help-btn" title="Ajutor pentru editor" aria-label="Ajutor pentru editor">${icon('help')}</button><select id="ng-font" aria-label="Mărimea textului din editor"><option value="13">13 px</option><option value="15" selected>15 px</option><option value="17">17 px</option><option value="19">19 px</option></select></div><button class="btn btn-primary" id="ng-run">${icon('play')} Rulează codul</button></div>
 <label class="sr-only" for="ng-code">Cod Python</label><div class="ng-code-wrap"><pre id="ng-line-numbers" aria-hidden="true"></pre><textarea maxlength="30000" id="ng-code" spellcheck="false" autocapitalize="off" autocomplete="off" aria-label="Cod Python"></textarea></div><div class="ng-editor-statusbar"><span id="ng-cursor">Ln 1, Col 1</span><span>Spaces: 4 · UTF-8 · Python</span></div><div class="ng-console-head"><div><span class="ng-eyebrow">REZULTATUL EXECUȚIEI</span><strong>Terminal & verificări</strong></div>${state.quizMode==='practice'?`<button class="btn btn-secondary" id="ng-check">${icon('check')} Verifică soluția</button>`:'<span class="ng-exam-note">Punctajul se calculează la final</span>'}</div><pre id="ng-output" role="status">Pregătit pentru ideile tale. Scrie codul, apoi apasă «Rulează codul».</pre><div class="ng-editor-footnote">Ctrl + Enter pentru rulare · Motorul Python pornește la prima execuție.</div></div></div>`;
 const editor=document.getElementById('ng-code');editor.value=source;editor.disabled=!!state.finishing;
 const lines=document.getElementById('ng-line-numbers');let cm=null;
 const saved=()=>{state.labCode[q.id]=editor.value;delete state.labResults[q.id];document.getElementById('ng-save-status').textContent=window.prepGuideActive?'Demonstrație · progresul real nu se modifică':'Păstrat în sesiune';window.saveSession?.();};
 const syncLines=()=>{lines.textContent=Array.from({length:editor.value.split('\n').length},(_,i)=>i+1).join('\n');lines.scrollTop=editor.scrollTop;};syncLines();editor.addEventListener('scroll',syncLines);editor.oninput=()=>{syncLines();saved();};
 const expand=()=>{card.querySelector('.ng-editor-pane').classList.toggle('ng-expanded');document.getElementById('ng-expand').setAttribute('aria-pressed',String(card.querySelector('.ng-editor-pane').classList.contains('ng-expanded')));cm?.refresh();};
 if(window.CodeMirror){
  const hints=['def','return','if','elif','else','for','while','in','not','and','or','True','False','None','print','range','len','enumerate','sum','int','float','str','list','dict','try','except','finally','import','from','break','continue','pass','with','open','unittest','random'];
  cm=CodeMirror.fromTextArea(editor,{mode:{name:'python',version:3},lineNumbers:true,indentUnit:4,tabSize:4,indentWithTabs:false,smartIndent:true,matchBrackets:true,autoCloseBrackets:true,readOnly:!!state.finishing,extraKeys:{'Tab':c=>c.somethingSelected()?c.indentSelection('add'):c.replaceSelection('    ','end','+input'),'Shift-Tab':c=>c.indentSelection('subtract'),'Ctrl-Enter':()=>document.getElementById('ng-run').click(),'Cmd-Enter':()=>document.getElementById('ng-run').click(),'Ctrl-/':'toggleComment','Cmd-/':'toggleComment','Ctrl-F':'findPersistent','Cmd-F':'findPersistent','F11':expand,'Esc':()=>{if(card.querySelector('.ng-expanded'))expand();},'Ctrl-Space':c=>c.showHint({hint:c=>{const cur=c.getCursor(),token=c.getTokenAt(cur),start=/^\w+$/.test(token.string)?token.start:cur.ch,prefix=c.getRange({line:cur.line,ch:start},cur);return{list:hints.filter(x=>x.startsWith(prefix)),from:CodeMirror.Pos(cur.line,start),to:cur};},completeSingle:false})}});
  editor.parentElement.classList.add('ng-has-codemirror');cm.getWrapperElement().setAttribute('aria-label','Editor de cod Python');cm.getInputField().setAttribute('aria-label','Scrie cod Python');
  cm.on('change',()=>{cm.save();saved();});cm.on('cursorActivity',()=>{const c=cm.getCursor();document.getElementById('ng-cursor').textContent=`Ln ${c.line+1}, Col ${c.ch+1}`;});requestAnimationFrame(()=>cm.refresh());
 }else{editor.onkeydown=e=>{if(e.key==='Tab'){e.preventDefault();editor.setRangeText('    ',editor.selectionStart,editor.selectionEnd,'end');editor.dispatchEvent(new Event('input'));}if((e.ctrlKey||e.metaKey)&&e.key==='Enter'){e.preventDefault();document.getElementById('ng-run').click();}};}
 const setCode=value=>{if(cm)cm.setValue(value);else{editor.value=value;editor.dispatchEvent(new Event('input'));}};
 document.getElementById('ng-reset').onclick=async()=>{if(card.querySelector('.ng-expanded'))expand();if(await askConfirm({title:'Revii la codul inițial?',text:'Modificările tale pentru acest lab vor fi înlocuite. Celelalte laburi nu se schimbă.',ok:'Resetează codul'}))setCode(q.starter);};
 document.getElementById('ng-expand').onclick=expand;document.getElementById('ng-help-btn').onclick=()=>{const d=document.getElementById('ng-help');d.open=!d.open;if(d.open)d.scrollIntoView({block:'center',behavior:'smooth'});};
 document.getElementById('ng-font').onchange=e=>{const size=e.target.value+'px';if(cm){cm.getWrapperElement().style.fontSize=size;cm.refresh();}else editor.style.fontSize=size;};
 const taskList=document.getElementById('ng-task-list');labs.forEach((x,i)=>{const b=document.createElement('button');b.className='ng-task-link'+(x.id===q.id?' is-active':'');b.setAttribute('aria-current',x.id===q.id?'step':'false');const done=labRatio(x)===1;b.innerHTML=`<span class="ng-task-number">${done?'✓':i+1}</span><span>${escapeHtml(x.title)}<small>${x.id===q.id?'Lucrezi aici':state.labCode[x.id]?'Cod început':'De început'}</small></span>`;b.onclick=()=>{state.currentIndex=state.quizQuestions.findIndex(q=>q.id===x.id);renderQuizQuestion();window.saveSession?.();};taskList.append(b);});
 const execute=async action=>{if(state.finishing||state.labBusy)return;state.labBusy=true;const out=document.getElementById('ng-output'),buttons=card.querySelectorAll('button,select');buttons.forEach(b=>b.disabled=true);const run=document.getElementById('ng-run'),initial=run.innerHTML;run.textContent='Se execută…';out.classList.remove('ng-output-error');out.textContent='Se pornește motorul Python și se execută codul…';if(cm)cm.save();const submitted=editor.value;
 try{const r=await runPythonLab(q,submitted,action);if(action==='check'){state.labResults[q.id]=r;window.saveSession?.();}out.textContent=(r.stdout||'')+(r.error?'\n'+r.error:'')+(action==='check'?'\n'+(r.cases||[]).map(c=>(c.passed?'✓ ':'✕ ')+c.name+(c.detail?' — '+c.detail:'')).join('\n')+'\nPunctaj de practică: '+Math.round((r.ratio||0)*1000)+' / 1000':'');if(r.error)out.classList.add('ng-output-error');}catch(e){out.textContent='Nu s-a putut executa: '+e.message;out.classList.add('ng-output-error');}finally{state.labBusy=false;buttons.forEach(b=>b.disabled=false);run.innerHTML=initial;}};
 document.getElementById('ng-run').onclick=()=>execute('run');document.getElementById('ng-check')?.addEventListener('click',()=>execute('check'));
 const previous=state.labResults[q.id];if(previous&&previous.source===source)document.getElementById('ng-output').textContent=(previous.stdout||'')+'\nUltima verificare: '+Math.round((previous.ratio||0)*1000)+' / 1000';
}
async function gradeAttemptLabs(){
 if(state.labBusy)throw Error('Așteaptă să se termine execuția curentă.');
 const labs=state.quizQuestions.filter(q=>q.type==='lab');if(!labs.length)return;
 state.labCode ||= {};state.labResults ||= {};
 const veil=document.createElement('div');veil.className='ng-grading';veil.setAttribute('role','status');veil.innerHTML='<div><span class="ng-spinner"></span><h2>Evaluăm soluțiile tale</h2><p>Codul rulează în motorul Python. Nu închide pagina.</p><strong id="ng-grade-status"></strong></div>';document.body.append(veil);
 try{for(let i=0;i<labs.length;i++){const q=labs[i],source=state.labCode[q.id]??q.starter;document.getElementById('ng-grade-status').textContent=`Lab ${i+1} din ${labs.length} · ${q.title}`;
 // Every submitted lab is re-evaluated; do not trust persisted practice grades.
 state.labResults[q.id]=source.trim()===q.starter.trim()?{ratio:0,source,cases:[{name:'Fără soluție',passed:false}],stdout:''}:await runPythonLab(q,source,'check');
 }}finally{veil.remove();window.saveSession?.();}
}
function renderPointsDetails(s){
 const el=document.getElementById('points-details');el.innerHTML=`<div><span>REZULTATUL TĂU</span><h2>${s.points>=700?'Ai atins pragul. Bravo!':'Continuă. Fiecare încercare contează.'}</h2><p>Prag de trecere <strong>700 / 1000</strong> · ${s.points>=700?'Admis':'Sub prag'} · Punctaj de practică Prep.</p></div><div class="ng-component-scores">${s.qMax?`<div><strong>${s.qPoints}<small> / ${s.qMax}</small></strong><span>Întrebări</span></div>`:''}${s.lMax?`<div><strong>${s.lPoints}<small> / ${s.lMax}</small></strong><span>Laburi · credit parțial pe teste</span></div>`:''}</div>`;
}
/* The guided preview uses temporary state. startTour restores the user's attempt. */
window.nextGenTourSteps=function(){
 const dash=()=>{renderDashboard();showScreen('screen-dashboard');};
 const setup=()=>{if(!document.querySelector('#screen-setup.active')||state.currentExamKey!=='pythonNextGen')openSetup('pythonNextGen');};
 const lab=()=>{
  if(document.querySelector('#screen-quiz.active')&&state.guideLabPreview)return;
  state.currentExamKey='pythonNextGen';state.quizQuestions=getExam('pythonNextGen').QUESTIONS.filter(q=>q.type==='lab');state.currentIndex=0;state.quizMode='practice';state.userAnswers={};state.dndState={};state.lockedQuestions={};state.flagged={};state.labCode={};state.labResults={};state.attemptId=null;state.completedAttemptId=null;state.elapsedSeconds=0;state.guideLabPreview=true;
  showScreen('screen-quiz');renderQuizQuestion();document.getElementById('quiz-timer').textContent='DEMO';
 };
 return [
 {prepare:dash,target:'[data-exam="pythonNextGen"]',title:'Python Next Generation',html:'<p>Ai acces la acest examen. De aici deschizi <strong>întrebări și laburi Python</strong>. Poți învăța teoria separat sau poți scrie cod.</p>'},
 {prepare:setup,target:'#ng-kind label:has([value="combined"])',title:'Simularea completă',html:'<p>Alege <strong>Întrebări + laburi</strong> pentru ambele secțiuni. Întrebările valorează până la 700 de puncte, laburile până la 300. Ai nevoie de minimum 700 din 1000.</p>'},
 {prepare:setup,target:'#ng-kind label:has([value="questions"])',title:'Doar întrebări',html:'<p>Aici exersezi întrebările fără editorul de cod. Secțiunea este normalizată la <strong>1000 de puncte</strong>.</p>'},
 {prepare:setup,target:'#ng-kind label:has([value="labs"])',title:'Doar laburi',html:'<p>Alege această variantă când vrei să scrii și să testezi Python. Laburile însumează <strong>1000 de puncte</strong> în acest mod.</p>'},
 {prepare:()=>{setup();document.querySelector('.ng-chapter-details').open=true;},target:'.ng-chapter-filters',title:'Alege capitolele tale',html:'<p>Bifează sau debifează capitolele. Selecția se aplică doar întrebărilor și laburilor din modul ales. Un capitol bifat parțial păstrează exercițiile alese individual.</p>'},
 {prepare:setup,target:'.ng-quick-pick',title:'O sesiune mai scurtă',html:'<p>Introdu câte întrebări și câte laburi vrei, apoi apasă <strong>Aplică</strong>. Aceasta înlocuiește selecția curentă cu exerciții din capitolele selectate în modul ales.</p>'},
 {prepare:()=>{setup();document.querySelector('.ng-manual-picker').open=true;},target:'.ng-manual-picker',title:'Alege exact ce vrei să rezolvi',html:'<p>Deschide lista, caută după text sau număr și bifează exercițiile dorite. Rezumatul arată câte ai ales. Pentru modul combinat ai nevoie de cel puțin o întrebare și un lab.</p>'},
 {prepare:setup,target:'.mode-toggle',title:'Exersezi sau te testezi?',html:'<p>În <strong>Mod exercițiu</strong> poți verifica soluția imediat. În <strong>Mod examen</strong> poți rula codul pentru depanare, dar verificările de punctaj apar doar la final.</p>'},
 {prepare:setup,target:'#start-quiz-btn',title:'De aici pornești',html:'<p>După alegerea modului, apasă <strong>Începe testul</strong>. Urmează acum o demonstrație a editorului: <strong>nu pornește un test real și nu modifică progresul</strong>.</p>'},
 {prepare:lab,target:'.ng-task-description',title:'1. Citește cerința',html:'<p>În stânga găsești taskul. Respectă numele funcției, tipul rezultatului și toate condițiile. În lista de mai jos poți reveni la oricare lab din sesiune.</p>'},
 {prepare:lab,target:'.ng-editor-pane .CodeMirror',title:'2. Scrie codul aici',html:'<p>Editorul colorează Python, numerotează liniile și păstrează indentarea. <strong>Tab</strong> adaugă 4 spații; <strong>Shift + Tab</strong> retrage indentarea; <strong>Ctrl + Z</strong> anulează modificarea. <strong>Ctrl + Space</strong> arată completări.</p>'},
 {prepare:lab,target:'.ng-editor-tools',title:'Editorul, pe gustul tău',html:'<p>Poți mări textul, extinde editorul pe ecran, deschide ajutorul sau reveni la codul inițial. Resetarea cere confirmare și afectează doar labul curent.</p>'},
 {prepare:lab,target:'#ng-run',title:'3. Rulează și experimentează',html:'<p>Apasă <strong>Rulează codul</strong> sau <strong>Ctrl + Enter</strong>. Pentru a vedea ce întoarce o funcție, adaugă un apel de probă în print(...). Erorile și ieșirea apar în terminal.</p>'},
 {prepare:lab,target:'#ng-output',title:'Terminalul tău',html:'<p>Aici vezi mesajele print() și erorile Python. O funcție doar definită nu afișează automat rezultatul: trebuie și apelată. Poți corecta soluția și rula din nou.</p>'},
 {prepare:lab,target:'#ng-check',title:'4. Verifică soluția',html:'<p>În practică, acest buton rulează verificările automate pe mai multe exemple. Vezi ce a trecut, ce trebuie reparat și punctajul orientativ al labului. Codul este <strong>rulat efectiv</strong>, nu comparat doar ca text.</p>'},
 {prepare:lab,target:'.quiz-nav',title:'Treci mai departe când ești gata',html:'<p>Folosește <strong>Următoarea</strong>, lista laburilor sau Summary. La final, soluțiile sunt verificate din nou și primești rezultatul. Într-o sesiune reală poți ieși și relua codul salvat.</p><p>Aceasta a fost doar demonstrația. Progresul și istoricul tău au rămas neschimbate.</p>'}
 ];
};
