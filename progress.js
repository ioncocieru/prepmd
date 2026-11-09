/* =====================================================================
   PROGRES • REIA SESIUNEA • PROFIL • CERTIFICATE • REVIZUIRE ÎNAINTE DE FINALIZARE
   Se încarcă după app.js. Salvează local (localStorage) și în Supabase
   (tabelul user_progress, dacă există) — vezi SQL-ul din SETUP.md.
   ===================================================================== */
(function () {
  "use strict";
  const PASS = 700;
  const CODES = { python: "PY", databases: "DB", deviceConfig: "DC", networking: "NW", html5: "WEB" };
  const blankProfile = () => ({ first: "", last: "", avatar: "", updated: 0 });
  const P = { uid: null, email: "", exams: {}, profile: blankProfile(), ready: false, courseKey: null };
  let syncTimer = null;
  const dirty = new Set();

  const lsKey = () => "prep_progress_v1_" + P.uid;
  const blank = () => ({ questions: {}, tests: 0, seconds: 0, best: 0, watched: {}, session: null, lastVideo: 0, certs: {}, updated: 0 });
  const ex = (k) => (P.exams[k] = P.exams[k] || blank());

  /* ---------- salvare ---------- */
  function saveLocal() {
    try { localStorage.setItem(lsKey(), JSON.stringify({ exams: P.exams, profile: P.profile })); } catch (e) {}
  }
  function touch(k) {
    dirty.add(k);
    clearTimeout(syncTimer);
    syncTimer = setTimeout(flush, 2500);
  }
  function persist(k) { ex(k).updated = Date.now(); saveLocal(); touch(k); window.dispatchEvent(new Event("prep-progress")); }
  async function flush() {
    if (!P.uid) return;
    const keys = Array.from(dirty); dirty.clear();
    for (const k of keys) {
      try {
        await sb.from("user_progress").upsert(
          { user_id: P.uid, exam_key: k, data: k === "_profile" ? P.profile : P.exams[k], updated_at: new Date().toISOString() },
          { onConflict: "user_id,exam_key" });
      } catch (e) {}
    }
  }
  function merge(local, remote) {
    if (!remote) return local;
    if (!local) return remote;
    const newer = (remote.updated || 0) > (local.updated || 0) ? remote : local;
    const older = newer === remote ? local : remote;
    return Object.assign({}, older, newer, {
      questions: Object.assign({}, older.questions, newer.questions),
      watched: Object.assign({}, older.watched, newer.watched),
      certs: Object.assign({}, older.certs, newer.certs),
      tests: Math.max(local.tests || 0, remote.tests || 0),
      seconds: Math.max(local.seconds || 0, remote.seconds || 0),
      best: Math.max(local.best || 0, remote.best || 0)
    });
  }
  async function init() {
    const { data } = await sb.auth.getSession();
    const u = data.session && data.session.user;
    if (!u) return;
    P.uid = u.id; P.email = u.email || "";
    let local = {};
    try { local = JSON.parse(localStorage.getItem(lsKey()) || "{}"); } catch (e) {}
    P.exams = local.exams || {};
    P.profile = Object.assign(blankProfile(), local.profile || {});
    try {
      const res = await sb.from("user_progress").select("exam_key,data").eq("user_id", P.uid);
      (res.data || []).forEach(r => {
        if (r.exam_key === "_profile") {
          if ((r.data.updated || 0) > (P.profile.updated || 0)) P.profile = Object.assign(blankProfile(), r.data);
        } else P.exams[r.exam_key] = merge(P.exams[r.exam_key], r.data);
      });
    } catch (e) {}
    if (hasConfirmedName(u)) { P.profile.first = u.user_metadata.first_name; P.profile.last = u.user_metadata.last_name; saveLocal(); }
    P.ready = true;
  }

  /* ---------- profil: nume, avatar ---------- */
  function defaultName() {
    const n = (P.email || "").split("@")[0];
    return n ? n.charAt(0).toUpperCase() + n.slice(1) : "Cursant";
  }
  const fullName = () => ((P.profile.last || "") + " " + (P.profile.first || "")).trim() || defaultName();
  function paintAvatar(el) {
    if (!el) return;
    const a = P.profile.avatar;
    el.style.backgroundImage = a ? "url(" + a + ")" : "";   // fără poză proprie: imaginea implicită din CSS
    el.textContent = "";
  }
  function updateHeader() {
    $("#profile-btn-email").textContent = currentUserName || fullName();
    $("#welcome-title").textContent = "Bine ai revenit, " + fullName();
    ["#profile-btn-avatar", "#hello-avatar", "#profile-avatar"].forEach(s => paintAvatar($(s)));
  }
  function resizeImage(file) {
    return new Promise((resolve, reject) => {
      const r = new FileReader();
      r.onload = () => {
        const img = new Image();
        img.onload = () => {
          const S = 256, c = document.createElement("canvas");
          c.width = c.height = S;
          const m = Math.min(img.width, img.height);
          c.getContext("2d").drawImage(img, (img.width - m) / 2, (img.height - m) / 2, m, m, 0, 0, S, S);
          resolve(c.toDataURL("image/jpeg", 0.85));
        };
        img.onerror = reject; img.src = r.result;
      };
      r.onerror = reject; r.readAsDataURL(file);
    });
  }
  async function saveProfile() {
    const first=normalizeProfileName($("#profile-first").value), last=normalizeProfileName($("#profile-last").value);
    if (!validProfileName(first) || !validProfileName(last)) throw new Error("Completează numele și prenumele (maximum 40 de caractere fiecare).");
    const {data,error}=await sb.auth.updateUser({data:accountNameData(first,last)});
    if(error) throw error;
    P.profile.first=first; P.profile.last=last; P.profile.updated=Date.now();
    saveLocal(); touch("_profile"); paintAccountName(data.user); updateHeader();
  }
  window.addEventListener("prep-profile-updated", e=>{
    const u=e.detail?.user;
    if (!u || u.id!==P.uid || !hasConfirmedName(u)) return;
    P.profile.first=u.user_metadata.first_name; P.profile.last=u.user_metadata.last_name; P.profile.updated=Date.now();
    saveLocal(); touch("_profile"); updateHeader();
    $("#profile-first").value=P.profile.first; $("#profile-last").value=P.profile.last;
  });
  $("#profile-save-btn").addEventListener("click", async () => {
    const b=$("#profile-save-btn"), m=$("#profile-saved"); b.disabled=true;
    try { await saveProfile(); m.textContent="Profilul a fost salvat."; m.hidden=false; }
    catch(e) { m.textContent=e.message || "Profilul nu a putut fi salvat. Încearcă din nou."; m.hidden=false; }
    finally { b.disabled=false; }
  });
  $("#avatar-pick-btn").addEventListener("click", () => $("#avatar-input").click());
  $("#avatar-input").addEventListener("change", async (e) => {
    const f = e.target.files && e.target.files[0]; if (!f) return;
    try { P.profile.avatar = await resizeImage(f); await saveProfile(); } catch (er) { alert("Nu am putut citi imaginea."); }
    e.target.value = "";
  });
  $("#avatar-remove-btn").addEventListener("click", async () => { P.profile.avatar = ""; try { await saveProfile(); } catch(e) { alert(e.message); } });

  /* ---------- statistici ---------- */
  function qStats(k) {
    const exam = getExam(k), p = ex(k), byCh = {};
    let answered = 0, correct = 0;
    exam.QUESTIONS.forEach(q => {
      const ch = byCh[q.chapter] = byCh[q.chapter] ||
        { name: (exam.CHAPTERS.find(c => c.id === q.chapter) || {}).name || q.chapter, total: 0, correct: 0 };
      ch.total++;
      const r = p.questions[q.id];
      if (r !== undefined) { answered++; if (r === 1) { correct++; ch.correct++; } }
    });
    const total = exam.QUESTIONS.length;
    const realAnswered = answered;
    answered = Math.min(total, Math.max(answered, Number(window.PrepPortal?.adjustments?.[k]?.questions) || 0));
    return { total, realAnswered, answered, correct, pct: total ? Math.round(correct / total * 100) : 0, done: total > 0 && answered === total, byCh };
  }
  const courseCfg = (k) => (window.COURSE_DATA || {})[k] || {};
  function courseList(k) {
    const out = [];
    (courseCfg(k).chapters || []).forEach(ch => {
      const vids = ch.videos || ((ch.youtube || ch.file) ? [ch] : []);
      vids.forEach(v => out.push({ key: ch.title + "|" + v.title, ch: ch.title, title: v.title }));
    });
    return out;
  }
  function cStats(k) {
    const l = courseList(k), p = ex(k), w = l.filter(v => p.watched[v.key]).length;
    const completed = Math.min(l.length, Math.max(w, Number(window.PrepPortal?.adjustments?.[k]?.courses) || 0));
    return { total: l.length, realWatched: w, watched: completed, done: l.length > 0 && completed === l.length,
             chapters: (courseCfg(k).chapters || []).length, resources: (courseCfg(k).resources || []).length };
  }

  /* ---------- certificate ---------- */
  function issue(k, type) {
    const p = ex(k);
    if (p.certs[type]) return false;
    p.certs[type] = { date: Date.now() };
    persist(k);
    return true;
  }
  function checkCerts(k) {
    const added = [];
    if (qStats(k).done && issue(k, "questions")) added.push("questions");
    if (cStats(k).done && issue(k, "course")) added.push("course");
    return added;
  }
  function certId(k, type, date) {
    let h = 5381; const s = P.uid + "|" + k + "|" + type;
    for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) >>> 0;
    const d = new Date(date), pad = (n) => String(n).padStart(2, "0");
    return "PREP-" + (CODES[k] || "EX") + "-" + (type === "questions" ? "Q" : "C") + "-" + d.getFullYear() + pad(d.getMonth() + 1) + pad(d.getDate()) + "-" + h.toString(16).toUpperCase().padStart(8, "0").slice(0, 6);
  }
  const fmtDate = (t) => new Date(t).toLocaleDateString("ro-RO", { day: "numeric", month: "long", year: "numeric" });
  const fmtDur = (s) => { const h = Math.floor(s / 3600), m = Math.round((s % 3600) / 60); return h ? h + " h " + m + " min" : m + " min"; };

  function openCert(k, type) {
    const exam = getExam(k), p = ex(k), cert = p.certs[type];
    if (!cert) return;
    const stat = (v, l) => `<div class="cert-stat"><strong>${v}</strong><span>${l}</span></div>`;
    let title, lead, stats, extra = "";
    if (type === "questions") {
      const s = qStats(k), passed = s.pct * 10 >= PASS;
      title = "Întrebări";
      lead = `a parcurs integral întrebările <b>${escapeHtml(exam.name)}</b> (${s.total} întrebări) pe platforma Prep.`;
      stats = stat(`${s.correct} / ${s.total}`, "răspunsuri corecte") + stat(`${s.pct * 10} / 1000`, "punctaj orientativ pe bancă") +
        stat(passed ? "Promovat" : "Parcurs", passed ? `peste pragul de ${PASS} / 1000` : `sub pragul de ${PASS} / 1000`) +
        stat(`${s.answered} / ${s.total}`, "întrebări parcurse") + stat(p.tests, "teste susținute") +
        stat(`${p.bestPoints ?? p.best * 10} / 1000`, "cel mai bun scor la un test") + stat(fmtDur(p.seconds), "timp total de studiu");
      extra = `<table class="cert-table"><tr><th>Capitol</th><th>Puncte</th><th>Scor</th></tr>${
        Object.values(s.byCh).map(c => `<tr><td>${escapeHtml(c.name)}</td><td>${c.correct} / ${c.total}</td><td>${c.total ? Math.round(c.correct / c.total * 1000) : 0} / 1000</td></tr>`).join("")}</table>`;
    } else {
      const s = cStats(k);
      title = "Cursul video";
      lead = `a urmărit integral cursul video <b>${escapeHtml(exam.name)}</b> pe platforma Prep.`;
      stats = stat(`${s.watched} / ${s.total}`, "video-uri vizionate") + stat(s.chapters, "capitole parcurse") +
        stat("100%", "progres curs") + stat(s.resources, "resurse puse la dispoziție");
      const byCh = {};
      courseList(k).forEach(v => { byCh[v.ch] = byCh[v.ch] || { t: 0, w: 0 }; byCh[v.ch].t++; if (p.watched[v.key]) byCh[v.ch].w++; });
      extra = `<table class="cert-table"><tr><th>Capitol</th><th>Video-uri vizionate</th></tr>${
        Object.keys(byCh).map(n => `<tr><td>${escapeHtml(n)}</td><td>${byCh[n].w} / ${byCh[n].t}</td></tr>`).join("")}</table>`;
    }
    // Completion credit can issue a platform completion certificate, never a fabricated score.
    if (type === "questions") {
      const s = qStats(k);
      if (s.realAnswered < s.total) {
        lead = `a finalizat secțiunea de pregătire cu întrebări pentru <b>${escapeHtml(exam.name)}</b> pe platforma Prep.`;
        stats = stat(`${s.answered} / ${s.total}`, "întrebări parcurse") + stat("100%", "progres de parcurgere") +
          stat(p.tests, "teste susținute") + stat(fmtDur(p.seconds), "timp înregistrat de studiu");
        extra = "";
      }
    } else if (cStats(k).realWatched < cStats(k).total) {
      const s = cStats(k);
      lead = `a finalizat secțiunea de curs pentru <b>${escapeHtml(exam.name)}</b> pe platforma Prep.`;
      stats = stat(`${s.watched} / ${s.total}`, "unități de curs finalizate") + stat("100%", "progres curs") + stat(s.resources, "resurse disponibile");
      extra = "";
    }
    $("#cert-paper").innerHTML = `
      <div class="cert-band"><img src="assets/logo.png" alt="Prep." class="cert-logo"><span>Platformă de pregătire IT Specialist</span></div>
      <div class="cert-body">
        <div class="cert-kicker">Certificat de parcurgere</div>
        <div class="cert-sub">${title} · ${escapeHtml(exam.name)}</div>
        <div class="cert-lead">Se acordă</div>
        <div class="cert-name">${escapeHtml(fullName())}</div>
        <p class="cert-text">care ${lead}</p>
        <div class="cert-stats">${stats}</div>
        ${extra}
        <div class="cert-foot">
          <div><span>Data finalizării</span><strong>${fmtDate(cert.date)}</strong></div>
          <div><span>Cod certificat</span><strong>${certId(k, type, cert.date)}</strong></div>
        </div>
        <div class="cert-note">Document intern al platformei Prep., care atestă parcurgerea materialelor de pregătire. Nu este o certificare oficială Certiport.</div>
      </div>`;
    showScreen("screen-cert");
  }
  $("#cert-print-btn").addEventListener("click", () => window.print());
  $("#cert-edit-profile").addEventListener("click", openProfile);

  function toast(msg) {
    const t = document.createElement("div");
    t.className = "toast"; t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 5500);
  }

  /* ---------- pagina de profil ---------- */
  function openProfile() {
    refreshProfileContact();
    $("#profile-first").value = P.profile.first || "";
    $("#profile-last").value = P.profile.last || "";
    $("#profile-email").textContent = P.email;
    paintAvatar($("#profile-avatar"));
    $("#avatar-remove-btn").hidden = !P.profile.avatar;
    renderProfileCerts();
    showScreen("screen-profile");
  }
  function renderProfileCerts() {
    const box = $("#profile-certs"); box.innerHTML = "";
    const row = (k, type, label, p, prog, extraInfo) => {
      const c = p.certs[type];
      const el = document.createElement("div");
      el.className = "pcert" + (c ? " earned" : "");
      el.innerHTML = `
        <div class="pcert-badge">${ICON.award}</div>
        <div class="pcert-info">
          <div class="pcert-title"><strong>${escapeHtml(getExam(k).name)} — ${label}</strong>
            <span class="pill-status">${c ? "Obținut" : "În progres"}</span></div>
          <span>${c ? "Obținut pe " + fmtDate(c.date) + extraInfo : prog.text}</span>
          ${c ? "" : `<div class="cp-bar"><i style="width:${prog.pct}%"></i></div>`}
        </div>
        ${c ? `<div class="pcert-actions">
          <button class="btn btn-secondary" data-pk="${k}" data-pc="${type}" data-act="view">Vezi</button>
          <button class="btn btn-primary" data-pk="${k}" data-pc="${type}" data-act="dl">${ICON.download} Descarcă PDF</button></div>` : ""}`;
      box.appendChild(el);
    };
    allowedExams.filter(k => getExam(k)).forEach(k => {
      checkCerts(k);
      const q = qStats(k), c = cStats(k), p = ex(k);
      row(k, "questions", "Întrebări", p,
        { text: `Progres: ${q.answered} / ${q.total} întrebări parcurse`, pct: q.total ? Math.round(q.answered / q.total * 100) : 0 },
        ` · ${q.realAnswered < q.total ? "Parcurgere completă" : `${q.correct}/${q.total} corecte · ${q.pct * 10}/1000`}`);
      if (c.total) row(k, "course", "Curs video", p,
        { text: `Progres: ${c.watched} / ${c.total} video-uri vizionate`, pct: Math.round(c.watched / c.total * 100) },
        ` · ${c.total} video-uri`);
    });
    if (!box.children.length) box.innerHTML = '<p class="muted">Nu ai încă examene disponibile.</p>';
  }
  $("#profile-certs").addEventListener("click", (e) => {
    const b = e.target.closest("[data-act]"); if (!b) return;
    openCert(b.dataset.pk, b.dataset.pc);
    if (b.dataset.act === "dl") setTimeout(() => window.print(), 500);
  });
  $("#profile-btn").addEventListener("click", openProfile);
  $("#hello-avatar").addEventListener("click", openProfile);

  /* ---------- sesiune (reia testul) ---------- */
  function saveSession() {
    if (window.prepGuideActive) return;
    const scr = $("#screen-quiz");
    if (!P.uid || !scr || !scr.classList.contains("active") || !state.quizQuestions.length || !state.currentExamKey) return;
    const k = state.currentExamKey;
    ex(k).session = {
      mode: state.quizMode, ids: state.quizQuestions.map(q => q.id), index: state.currentIndex,
      labCode: state.labCode || {}, labResults: state.labResults || {}, answers: state.userAnswers, locked: state.lockedQuestions, flagged: state.flagged, dnd: state.dndState,
      attemptId: state.attemptId, elapsed: state.elapsedSeconds, savedAt: Date.now(),
      questionReviewVersion: window.PREP_QUESTION_REVIEW?.version || null
    };
    persist(k);
  }
  window.saveSession = saveSession;

  function resume(k) {
    const s = ex(k).session;
    if (!s) return;
    const byId = {};
    getExam(k).QUESTIONS.forEach(q => { byId[q.id] = q; });
    const qs = s.ids.map(id => byId[id]).filter(Boolean);
    if (!qs.length) { ex(k).session = null; persist(k); return; }
    state.currentExamKey = k; state.quizMode = s.mode; state.quizQuestions = qs;
    state.attemptId = s.attemptId || crypto.randomUUID(); state.completedAttemptId = null;
    state.currentIndex = Math.min(s.index || 0, qs.length - 1);
    state.labCode = s.labCode || {}; state.labResults = s.labResults || {};
    state.userAnswers = s.answers || {}; state.lockedQuestions = s.locked || {};
    state.flagged = s.flagged || {}; state.dndState = s.dnd || {};
    // Only reopen answers whose exercise changed; keep completed history and progress intact.
    const review = window.PREP_QUESTION_REVIEW;
    if (review && s.questionReviewVersion !== review.version) {
      const changed = new Set(review.changedIds);
      qs.forEach(q => {
        if (!changed.has(q.id)) return;
        delete state.userAnswers[q.id];
        delete state.lockedQuestions[q.id];
        delete state.dndState[q.id];
      });
    }
    state.elapsedSeconds = s.elapsed || 0;
    state.startTime = Date.now() - state.elapsedSeconds * 1000;
    if (state.timerInterval) clearInterval(state.timerInterval);
    state.timerInterval = setInterval(() => {
      state.elapsedSeconds = Math.floor((Date.now() - state.startTime) / 1000);
      $("#quiz-timer").textContent = formatTime(state.elapsedSeconds);
    }, 1000);
    showScreen("screen-quiz");
    renderQuizQuestion();
  }

  /* ---------- dashboard: progres + reia sesiunea ---------- */
  function decorateDashboard() {
    const grid = $("#exam-grid");
    if (!grid || !P.uid) return;
    updateHeader();
    let banner = $("#resume-banner");
    const sess = allowedExams.filter(k => getExam(k) && ex(k).session)
      .sort((a, b) => ex(b).session.savedAt - ex(a).session.savedAt);
    if (sess.length) {
      const k = sess[0], s = ex(k).session;
      if (!banner) { banner = document.createElement("div"); banner.id = "resume-banner"; banner.className = "resume-banner"; grid.before(banner); }
      banner.innerHTML = `<div class="resume-inner">
          <div class="resume-text"><strong>Ai un test început</strong>
            <span>${escapeHtml(getExam(k).name)} · întrebarea ${s.index + 1} din ${s.ids.length} · ${formatTime(s.elapsed || 0)}</span></div>
          <div class="resume-actions"><button class="btn btn-primary" data-resume="${k}">${ICON.play} Reia sesiunea</button>
            <button class="link-btn" data-discard="${k}">Șterge</button></div></div>`;
    } else if (banner) banner.remove();

    $all("#exam-grid .exam-card").forEach(card => {
      const btn = card.querySelector("[data-exam]"); if (!btn) return;
      const k = btn.dataset.exam;
      checkCerts(k);
      const p = ex(k), q = qStats(k), c = cStats(k);
      const bar = (lab, a, b) => `<div class="cp-row"><span>${lab}</span><span>${a}/${b}</span></div><div class="cp-bar"><i style="width:${b ? Math.round(a / b * 100) : 0}%"></i></div>`;
      const chips = p.session ? `<div class="card-chips"><button class="chip chip-resume" data-resume="${k}">${ICON.play} Reia sesiunea (${p.session.index + 1}/${p.session.ids.length})</button></div>` : "";
      const old = card.querySelector(".card-progress"); if (old) old.remove();
      const box = document.createElement("div");
      box.className = "card-progress";
      const floor = window.PrepPortal?.adjustments?.[k] || {};
      const qa = Math.min(q.total, Math.max(q.answered, floor.questions || 0));
      const ca = Math.min(c.total, Math.max(c.watched, floor.courses || 0));
      box.innerHTML = bar("Întrebări parcurse", qa, q.total) + (c.total ? bar("Curs vizionat", ca, c.total) : "") + chips;
      const actions = card.querySelector(".exam-card-actions");
      actions ? actions.before(box) : card.appendChild(box);
    });
  }
  $("#screen-dashboard").addEventListener("click", (e) => {
    const r = e.target.closest("[data-resume]"), d = e.target.closest("[data-discard]");
    if (r) resume(r.dataset.resume);
    else if (d) askConfirm({ title: "Ștergi sesiunea salvată?", text: "Testul început va fi șters și nu va mai putea fi reluat.", ok: "Șterge", cancel: "Păstrează", danger: true })
      .then((ok) => { if (ok) { ex(d.dataset.discard).session = null; persist(d.dataset.discard); decorateDashboard(); } });
  });

  /* ---------- curs: video vizionate ---------- */
  const activeIdx = () => $all("#course-list .course-item").findIndex(b => b.classList.contains("active"));
  function markWatched(toggle) {
    const k = P.courseKey, l = courseList(k), i = activeIdx();
    if (!k || i < 0 || !l[i]) return;
    const p = ex(k);
    p.watched[l[i].key] = toggle ? !p.watched[l[i].key] : true;
    if (!p.watched[l[i].key]) delete p.watched[l[i].key];
    persist(k);
    if (checkCerts(k).includes("course")) toast("Ai terminat cursul! Certificatul tău te așteaptă în Profil.");
    decorateCourse();
  }
  function decorateCourse() {
    const k = P.courseKey; if (!k) return;
    const l = courseList(k), p = ex(k), s = cStats(k), i = activeIdx();
    $all("#course-list .course-item").forEach((b, n) => b.classList.toggle("watched", !!(l[n] && p.watched[l[n].key])));
    $("#course-count").textContent = s.total ? s.watched + "/" + s.total + " vizionate" : "";
    const w = $("#course-watched-btn"), on = l[i] && p.watched[l[i].key];
    w.innerHTML = on ? ICON.check + " Vizionat" : "Marchează vizionat";
    w.classList.toggle("is-on", !!on);
    if (i >= 0) p.lastVideo = i;
  }
  $("#course-watched-btn").addEventListener("click", () => markWatched(true));
  $("#course-next-btn").addEventListener("click", () => { markWatched(false); }, true);
  $("#course-video").addEventListener("ended", () => markWatched(false));
  $("#screen-course").addEventListener("click", () => setTimeout(() => { decorateCourse(); if (P.courseKey) persist(P.courseKey); }, 60));

  const _openCourse = openCourse;
  openCourse = function (key) {
    _openCourse(key);
    if (!allowedExams.includes(key)) return;
    P.courseKey = key;
    const i = ex(key).lastVideo || 0, items = $all("#course-list .course-item");
    if (i > 0 && items[i]) items[i].click();
    decorateCourse();
  };

  /* ---------- test: salvare automată + revizuire înainte de finalizare ---------- */
  const _render = renderQuizQuestion;
  renderQuizQuestion = function () { _render(); saveSession(); };
  const _start = startQuiz;
  startQuiz = function () { _start(); saveSession(); };
  const _restart = restartQuizWith;
  restartQuizWith = function (qs) { _restart(qs); saveSession(); };
  $("#quiz-card").addEventListener("click", () => setTimeout(saveSession, 80));
  $("#quiz-card").addEventListener("drop", () => setTimeout(saveSession, 80));
  // Native selects can change using only the keyboard: persist on change, not only click.
  $("#quiz-card").addEventListener("change", saveSession);
  $(".quiz-nav").addEventListener("click", () => setTimeout(saveSession, 80));
  document.addEventListener("visibilitychange", () => { if (document.hidden) saveSession(); });
  window.addEventListener("pagehide", saveSession);

  function closeReview() { const m = $("#review-modal"); if (m) m.remove(); }
  function showReviewModal(flagged, blankList) {
    closeReview();
    const chips = (list) => list.map(i => `<button class="goto-chip" data-goto="${i}">${i + 1}</button>`).join("");
    const m = document.createElement("div");
    m.id = "review-modal"; m.className = "modal-overlay";
    m.innerHTML = `<div class="modal-panel">
      <h3>Înainte să finalizezi testul</h3>
      ${flagged.length ? `<div class="rv-block"><strong>${ICON.flag} Marcate pentru revizuire (${flagged.length})</strong><div class="rv-chips">${chips(flagged)}</div></div>` : ""}
      ${blankList.length ? `<div class="rv-block"><strong>${ICON.alert} Fără răspuns (${blankList.length})</strong><div class="rv-chips">${chips(blankList)}</div></div>` : ""}
      <p class="muted small">Apasă pe un număr ca să mergi direct la acea întrebare.</p>
      <div class="modal-actions">
        <button class="btn btn-primary" id="rv-back">Revin la întrebări</button>
        <button class="btn btn-secondary" id="rv-finish">Finalizează oricum</button>
      </div></div>`;
    document.body.appendChild(m);
    m.addEventListener("click", (e) => {
      const g = e.target.closest("[data-goto]");
      if (g) { closeReview(); state.currentIndex = parseInt(g.dataset.goto, 10); renderQuizQuestion(); }
      else if (e.target.id === "rv-back" || e.target === m) closeReview();
      else if (e.target.id === "rv-finish") { closeReview(); finishQuiz(); }
    });
  }
  $("#quiz-finish-btn").addEventListener("click", (e) => {
    const flagged = [], blankList = [];
    state.quizQuestions.forEach((q, i) => { if (state.flagged[q.id]) flagged.push(i); if (!isAnswered(q)) blankList.push(i); });
    if (!flagged.length && !blankList.length) return;
    e.stopImmediatePropagation();
    showReviewModal(flagged, blankList);
  }, true);

  const _finish = finishQuiz;
  finishQuiz = async function () {
    if (window.prepGuideActive || !state.quizQuestions.length || state.completedAttemptId === state.attemptId) return;
    state.attemptId = state.attemptId || crypto.randomUUID();
    const k = state.currentExamKey, qs = state.quizQuestions.slice();
    if (await _finish() !== true) return;
    state.completedAttemptId = state.attemptId;
    const p = ex(k);
    let ok = 0;
    qs.forEach(q => {
      const right = isAnswerCorrect(q);
      if (isAnswered(q)) p.questions[q.id] = right ? 1 : 0;
      if (right) ok++;
    });
    window.PrepPortal?.recordTest({p_id: state.attemptId, p_exam_key: k, p_mode: state.quizMode, p_total: qs.length, p_correct: ok, p_seconds: state.elapsedSeconds, p_completed_at: new Date().toISOString(), p_points: state.attemptScore.points, p_components: state.attemptScore.components});
    p.tests++; p.seconds += state.elapsedSeconds;
    p.bestPoints = Math.max(p.bestPoints || (p.best || 0)*10, state.attemptScore.points);
    p.best = Math.max(p.best, qs.length ? Math.round(ok / qs.length * 100) : 0);
    p.session = null;
    const added = checkCerts(k);
    persist(k);
    if (added.includes("questions")) toast("Felicitări! Ai obținut un certificat nou. Îl găsești în Profil.");
  };

  /* statistici pentru mesajele automate (messages.js) */
  window.PrepStats = { get() {
    if (!P.ready) return null;
    const out = {};
    allowedExams.filter(k => getExam(k)).forEach(k => {
      const q = qStats(k), c = cStats(k), p = ex(k);
      out[k] = { name: getExam(k).name, q: { total: q.total, answered: q.answered, done: q.done },
                 c: { total: c.total, watched: c.watched, done: c.done }, tests: p.tests || 0,
                 bestPoints: p.bestPoints ?? ((p.best || 0) * 10) };
    });
    return out;
  } };

  window.prepRefreshProgress = () => {
    if (!P.ready) return;
    decorateDashboard();
    if ($("#screen-profile")?.classList.contains("active")) renderProfileCerts();
    if ($("#screen-course")?.classList.contains("active")) decorateCourse();
  };

  /* ---------- pornire / ieșire cont ---------- */
  const _dash = renderDashboard;
  renderDashboard = function () {
    _dash();
    if (P.ready) { decorateDashboard(); window.dispatchEvent(new Event("prep-progress")); }
    else init().then(() => { decorateDashboard(); window.dispatchEvent(new Event("prep-progress")); });
  };
  $("#logout-btn").addEventListener("click", () => {
    flush();
    P.uid = null; P.ready = false; P.exams = {}; P.profile = blankProfile();
    const b = $("#resume-banner"); if (b) b.remove();
  });
  // A cached Supabase session may render the dashboard before this script loads.
  // Initialize progress in that case as well, so native select changes persist per user.
  if ($("#screen-dashboard")?.classList.contains("active")) init().then(() => { decorateDashboard(); window.dispatchEvent(new Event("prep-progress")); });
})();
