/* =====================================================================
   ITS PREP — app.js
   Aplicație de pregătire pentru examenele Certiport IT Specialist.
   Interfața testului rulează în browser; autentificarea și accesul folosesc Supabase.

   MODIFICĂRI FAȚĂ DE VERSIUNEA ANTERIOARĂ:
   - Întrebările pot avea câmpul  image: "assets/device1.png"  (afișat sub textul
     întrebării; click pe imagine = mărire). Apare și în recapitularea rezultatelor.
   - La drag & drop, un element care este răspuns corect pentru MAI MULTE casete
     (ex. "str" folosit de 2 ori) poate fi tras de mai multe ori.
   - Indentarea din elementele de cod (drag & drop / opțiuni) se păstrează.
   Stilurile necesare sunt injectate din JS, nu trebuie modificat style.css.
   ===================================================================== */

/* ---------------------------------------------------------------------
   1) SUPABASE (autentificare + acces pe examene)
   Cheile se setează în config.js
   --------------------------------------------------------------------- */
const recoveryInUrl = /(^|[#&?])type=recovery/.test(location.hash + location.search); // deschis din emailul „Resetare parolă”
const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
let recoveryMode = recoveryInUrl;
let allowedExams = []; // examenele la care are acces utilizatorul curent

/* Ordinea în care apar examenele pe dashboard */
const EXAM_ORDER = ["python", "pythonNextGen", "databases", "deviceConfig", "networking", "html5"];

/* ---------------------------------------------------------------------
   2) STARE GLOBALĂ
   --------------------------------------------------------------------- */
const state = {
  currentExamKey: null,
  selectedChapters: new Set(),
  quizMode: "practice",     // "practice" | "exam"
  quizQuestions: [],        // întrebările efectiv folosite în testul curent
  currentIndex: 0,
  userAnswers: {},          // id-întrebare -> răspunsul dat
  lockedQuestions: {},      // id-întrebare -> true dacă a fost verificată
  flagged: {},              // id-întrebare -> true dacă e marcată pentru revizuire
  dndPicked: null,          // id-ul elementului drag&drop selectat momentan (fallback pe click)
  dndState: {},             // id-întrebare -> { zoneId: itemId }
  timerInterval: null,
  startTime: null,
  elapsedSeconds: 0
};

/* ---------------------------------------------------------------------
   UTILITARE
   --------------------------------------------------------------------- */
function $(sel, root = document) { return root.querySelector(sel); }
function $all(sel, root = document) { return Array.from(root.querySelectorAll(sel)); }

function showScreen(id) {
  const contactDialog = document.getElementById("screen-phone");
  if (contactDialog?.open && id !== "screen-phone") { contactDialog.close(); contactDialog.classList.remove("active"); }
  $all(".screen").forEach(s => s.classList.remove("active"));
  $(`#${id}`).classList.add("active");
  if (id !== "screen-course") {
    const vid = $("#course-video"); if (vid) vid.pause();
    const fr = $("#course-frame"); if (fr) fr.src = "about:blank";
  }
  updateQuizSummary();
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function sample(arr, n) {
  return shuffle(arr).slice(0, Math.min(n, arr.length));
}

function formatTime(totalSeconds) {
  const m = Math.floor(totalSeconds / 60).toString().padStart(2, "0");
  const s = Math.floor(totalSeconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

function getExam(key) { return window.EXAM_DATA[key]; }

function typeLabel(type) {
  return {
    true_false: "Adevărat / Fals",
    single: "1 răspuns corect",
    multiple: "Răspunsuri multiple",
    drag_drop: "Drag & drop",
    dropdown: "Choose One",
    numeric: "Răspuns numeric",
    cloze: "Completează codul",
    lab: "Python Lab"
  }[type] || type;
}


/* ---------------------------------------------------------------------
   TEMĂ (luminoasă / întunecată) — se salvează în contul utilizatorului
   (user_metadata.theme în Supabase) și local, pentru încărcare rapidă.
   --------------------------------------------------------------------- */
const THEME_KEY = "prep-theme";
let currentUserEmail = "";
let currentUserId = "";
let currentUserName = "";

function getLocalTheme() { try { return localStorage.getItem(THEME_KEY); } catch (e) { return null; } }
function currentTheme() { return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light"; }

function applyTheme(t) {
  t = t === "dark" ? "dark" : "light";
  if (t === "dark") document.documentElement.setAttribute("data-theme", "dark");
  else document.documentElement.removeAttribute("data-theme");
  try { localStorage.setItem(THEME_KEY, t); } catch (e) {}
  const btn = document.getElementById("theme-toggle");
  if (btn) {
    btn.title = t === "dark" ? "Treci la tema luminoasă" : "Treci la tema întunecată";
    btn.setAttribute("aria-pressed", t === "dark" ? "true" : "false");
  }
  document.querySelectorAll("[data-theme-set]").forEach(b => b.classList.toggle("active", b.dataset.themeSet === t));
}

async function setTheme(t) {
  applyTheme(t);
  try { await sb.auth.updateUser({ data: { theme: t } }); }   // salvat în profilul contului
  catch (e) { console.warn("Nu am putut salva tema în cont:", e); }
}

/* ---------------------------------------------------------------------
   GHID de utilizare (apare o singură dată, la primul acces la examene
   pentru conturile create prin „Creare cont”; se poate redeschide din „Ghid”)
   --------------------------------------------------------------------- */
/* Ghid interactiv: evidențiază butoanele reale și le arată cu o săgeată. */
function tourSteps() {
  const key = EXAM_ORDER.find(k => k !== "pythonNextGen" && allowedExams.includes(k));
  const st = [];
  st.push({
    title: "Cum folosești Prep.",
    html: `<p>Un tur scurt: vei vedea pe rând butoanele pe care le folosești.</p>
      <p>Alege examenul tău, exersează cu explicații și urmărește-ți rezultatele. Pentru Python Next Generation ai și laburi practice.</p>`
  });
  if (key) {
    st.push({ screen: "dash", target: ".exam-card-cta-alt", title: "1. Începe cu cursul",
      html: `<p>Apasă <strong>Curs</strong> pe cardul examenului. Videoclipurile sunt grupate pe capitole și se redau în ordine.</p>
             <p>Marchează fiecare video ca vizionat; după ce le-ai parcurs pe toate, primești certificatul de curs.</p>` });
    st.push({ screen: "dash", target: ".exam-card-cta[data-exam]", title: "2. După curs, întrebările",
      html: `<p>Apasă <strong>Întrebări</strong> ca să pornești un test.</p>
             <p>Nu începe cu ele: se înțeleg mult mai ușor după ce ai văzut cursul.</p>` });
  }
  st.push({ screen: "dash", target: "#theme-toggle", title: "Tema",
    html: `<p>Cu acest buton treci între tema luminoasă și cea întunecată. Alegerea se salvează în contul tău.</p>` });
  st.push({ screen: "dash", target: "#profile-btn", title: "Profilul tău",
    html: `<p>Aici îți setezi numele (apare pe certificate) și poza, și îți vezi progresul și certificatele.</p>` });
  if (key) {
    st.push({ screen: "setup", target: "#chapter-list .chapter-item", title: "Alege capitolele",
      html: `<p>Bifează capitolele pe care vrei să le exersezi: pe toate sau doar pe cele la care ești mai slab.</p>` });
    st.push({ screen: "setup", target: "#question-count-range", title: "Câte întrebări",
      html: `<p>Mută cursorul ca să alegi câte întrebări are testul.</p>` });
    st.push({ screen: "setup", target: ".mode-toggle", title: "Modul de studiu",
      html: `<ul><li><strong>Exercițiu</strong>: vezi imediat dacă ai răspuns corect, cu explicație.</li>
             <li><strong>Examen</strong>: simulare Prep., fără răspunsuri până la final și cu cronometru.</li></ul>` });
    st.push({ screen: "setup", target: "#start-quiz-btn", title: "Pornești testul",
      html: `<p>Apasă <strong>Începe testul</strong>. Poți marca o întrebare pentru revizuire și te poți întoarce la ea înainte de final.</p>` });
  }
  st.push({
    title: "Tipuri de întrebări",
    html: `<ul><li><strong>Un răspuns</strong> sau <strong>Adevărat / Fals</strong>: alegi varianta corectă.</li>
      <li><strong>Răspunsuri multiple</strong>: bifezi exact câte variante cere întrebarea.</li>
      <li><strong>Drag &amp; drop</strong>: trage elementul în casetă, sau atinge elementul și apoi caseta. Click pe un element plasat îl scoate.</li>
      <li><strong>Imagini</strong>: apasă pe imagine ca să o mărești.</li></ul>`
  });
  if (allowedExams.includes("pythonNextGen") && window.nextGenTourSteps) st.push(...window.nextGenTourSteps());
  st.push({
    title: "După test",
    html: `<ul><li>Vezi scorul total, scorul pe capitole și explicația fiecărui răspuns.</li>
      <li><strong>Reia doar greșelile</strong> îți dă un test nou doar cu întrebările greșite.</li>
      <li>Sub 700 de puncte din 1000? Reia videoclipurile capitolelor slabe și repetă testul.</li>
      <li>Certificatul de întrebări îl primești după ce ai răspuns cel puțin o dată la fiecare întrebare din examen.</li></ul>
      <p>Succes la pregătire!</p>`
  });
  return st;
}

function startTour(firstTime) {
  if (document.querySelector(".tour-pop")) return;
  window.saveSession?.();
  const snapshot = { ...state, selectedChapters: new Set(state.selectedChapters) };
  const previousScreen = document.querySelector(".screen.active")?.id || "screen-dashboard";
  clearInterval(state.timerInterval); state.timerInterval = null;
  window.prepGuideActive = true;
  const steps = tourSteps();
  const key = EXAM_ORDER.find(k => k !== "pythonNextGen" && allowedExams.includes(k));
  let i = 0, dir = 1;

  const shade = document.createElement("div"); shade.className = "tour-shade dim";
  const spot = document.createElement("div"); spot.className = "tour-spot"; spot.style.display = "none";
  const arrow = document.createElement("div"); arrow.className = "tour-arrow"; arrow.style.display = "none";
  arrow.innerHTML = '<svg viewBox="0 0 40 50" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 47C17 36 23 24 20 8"/><path d="M9 20C13 15 17 10 20 6C23 11 28 15 32 19"/></svg>';
  const pop = document.createElement("div"); pop.className = "tour-pop"; pop.setAttribute("role", "dialog"); pop.setAttribute("aria-modal", "true");
  document.body.append(shade, spot, arrow, pop);

  let current = null;
  function place() {
    if (!current) return;
    const { st, el } = current;
    if (!el) {                                       // pas fără țintă: card centrat
      spot.style.display = "none"; arrow.style.display = "none";
      shade.classList.add("dim"); pop.classList.add("mid");
      pop.style.left = pop.style.top = pop.style.width = "";
      return;
    }
    shade.classList.remove("dim"); pop.classList.remove("mid");
    const r = el.getBoundingClientRect(), pad = 6, vw = innerWidth, vh = innerHeight;
    Object.assign(spot.style, { display: "block", left: (r.left - pad) + "px", top: (r.top - pad) + "px",
      width: (r.width + pad * 2) + "px", height: (r.height + pad * 2) + "px" });
    const pw = Math.min(340, vw - 24);
    pop.style.width = pw + "px";
    const ph = pop.offsetHeight, gap = 58;
    const below = vh - r.bottom - pad, above = r.top - pad;
    const placeBelow = below >= ph + gap + 10 || below >= above;
    let top = placeBelow ? r.bottom + pad + gap : r.top - pad - gap - ph;
    top = Math.max(12, Math.min(top, vh - ph - 12));
    const left = Math.max(12, Math.min(r.left + r.width / 2 - pw / 2, vw - pw - 12));
    pop.style.left = left + "px"; pop.style.top = top + "px";
    arrow.className = "tour-arrow " + (placeBelow ? "up" : "down");
    arrow.style.display = "block";
    arrow.style.left = Math.max(8, Math.min(r.left + r.width / 2 - 20, vw - 48)) + "px";
    arrow.style.top = (placeBelow ? r.bottom + pad + 4 : r.top - pad - 4 - 50) + "px";
  }

  function draw() {
    if (i < 0) i = 0;
    if (i >= steps.length) { finish(); return; }
    const st = steps[i];
    if (st.prepare) st.prepare();
    else if (st.screen === "setup") { if (!$("#screen-setup").classList.contains("active") || state.currentExamKey!==key) openSetup(key); }
    else if (st.screen === "dash") { if (!$("#screen-dashboard").classList.contains("active")) showScreen("screen-dashboard"); }
    const el = st.target ? document.querySelector(st.target) : null;
    if (st.target && (!el || !el.getClientRects().length)) { i += dir; draw(); return; }          // ținta nu există: sare peste pas
    current = { st, el };
    const last = i === steps.length - 1;
    pop.innerHTML = `
      <div class="tour-count">${i + 1} / ${steps.length}</div>
      <h3>${st.title}</h3>${st.html}
      <div class="tour-foot">
        <button type="button" class="link-btn tour-skip" data-skip>${last ? "" : "Sari peste"}</button>
        ${i > 0 ? '<button type="button" class="btn btn-secondary" data-prev>Înapoi</button>' : ""}
        <button type="button" class="btn btn-primary" data-next>${last ? "Gata" : "Înainte"}</button>
      </div>`;
    if (el) el.scrollIntoView({ block: "center" });
    requestAnimationFrame(place);
  }

  function finish() {
    window.removeEventListener("resize", place);
    window.removeEventListener("scroll", place, true);
    document.removeEventListener("keydown", onKey);
    shade.remove(); spot.remove(); arrow.remove(); pop.remove();
    Object.assign(state, snapshot);
    state.guideLabPreview = snapshot.guideLabPreview || false;
    state.timerInterval = null;
    window.prepGuideActive = false;
    if (previousScreen === "screen-quiz" && state.quizQuestions.length) {
      state.startTime = Date.now() - state.elapsedSeconds * 1000;
      state.timerInterval = setInterval(()=>{ state.elapsedSeconds=Math.floor((Date.now()-state.startTime)/1000); $("#quiz-timer").textContent=formatTime(state.elapsedSeconds); },1000);
      showScreen("screen-quiz"); renderQuizQuestion();
    } else { renderDashboard(); showScreen("screen-dashboard"); }
    if (firstTime) markGuideSeen();
  }
  const next = () => { dir = 1; i++; draw(); };
  const prev = () => { dir = -1; i--; draw(); };
  const onKey = (e) => {
    if (e.key === "Escape") finish();
    else if (e.key === "ArrowRight") next();
    else if (e.key === "ArrowLeft" && i > 0) prev();
  };
  pop.addEventListener("click", (e) => {
    if (e.target.closest("[data-next]")) next();
    else if (e.target.closest("[data-prev]")) prev();
    else if (e.target.closest("[data-skip]")) finish();
  });
  window.addEventListener("resize", place);
  window.addEventListener("scroll", place, true);
  document.addEventListener("keydown", onKey);
  draw();
}

function showGuide(firstTime) { startTour(firstTime); }

function guideLocalKey() { return "prep-guide-seen:" + (currentUserId || "anon"); }
function guideSeenLocally() { try { return localStorage.getItem(guideLocalKey()) === "1"; } catch (e) { return false; } }
async function markGuideSeen() {
  try { localStorage.setItem(guideLocalKey(), "1"); } catch (e) {}
  try { await sb.auth.updateUser({ data: { guide_seen: true } }); } catch (e) { console.warn(e); }
}

/* ---------------------------------------------------------------------
   STILURI SUPLIMENTARE (imagini în întrebări + păstrarea indentării)
   --------------------------------------------------------------------- */
(function injectExtraStyles() {
  const st = document.createElement("style");
  st.textContent = `
    .q-image-wrap { margin: 14px 0; }
    .q-image { display: block; max-width: 100%; max-height: 260px; height: auto; margin: 0 auto;
      border-radius: 10px; border: 1px solid rgba(128,128,128,.35); background: #fff; cursor: zoom-in; }
    .q-image-wrap.small .q-image { max-height: 120px; margin: 8px 0; }
    .q-image-zoom { position: fixed; inset: 0; z-index: 9999; display: flex; align-items: center;
      justify-content: center; background: rgba(0,0,0,.82); cursor: zoom-out; padding: 16px; }
    .q-image-zoom img { max-width: 94vw; max-height: 92vh; border-radius: 10px; background: #fff; }
    .q-image-missing { font-size: 13px; opacity: .7; padding: 10px; text-align: center; }
    .opt-code, .dnd-chip code, .dnd-chip .opt-code, .dnd-target-label .opt-code { white-space: pre-wrap; }
    .opt-code-block { white-space: pre; overflow-x: auto; }
  `;
  document.head.appendChild(st);
})();

function escapeAttr(str) {
  return String(str ?? "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/* HTML pentru imaginea unei întrebări (dacă are câmpul "image") */
function imageHtml(q, small = false) {
  const list = Array.isArray(q.images) && q.images.length ? q.images : (q.image ? [q.image] : []);
  if (!list.length) return "";
  return list.map(p => {
    const src = escapeAttr(p);
    return `<div class="q-image-wrap ${small ? "small" : ""}">
    <img class="q-image" src="${src}" alt="${escapeAttr(q.imageAlt || "Imagine pentru întrebare")}" loading="lazy">
  </div>`;
  }).join("");
}

/* click pe imagine = mărire pe tot ecranul */
function attachImageZoom(root) {
  $all(".q-image", root).forEach(img => {
    img.addEventListener("error", () => { const msg = document.createElement("div"); msg.className = "q-image-missing"; msg.textContent = "Imaginea nu a putut fi încărcată: " + img.getAttribute("src"); img.replaceWith(msg); });
    img.addEventListener("click", () => {
      const ov = document.createElement("div");
      ov.className = "q-image-zoom";
      ov.innerHTML = `<img src="${escapeAttr(img.src)}" alt="">`;
      const close = () => { document.removeEventListener("keydown", onKey); ov.remove(); };
      const onKey = (e) => { if (e.key === "Escape") close(); };
      ov.addEventListener("click", close);
      document.addEventListener("keydown", onKey);
      document.body.appendChild(ov);
    });
  });
}

/* =====================================================================
   3) LOGIN
   ===================================================================== */
$("#login-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const btn = $("#login-btn");
  const err = $("#login-error");
  let login = $("#login-input").value.trim();
  if (!login.includes("@")) login += "@" + LOGIN_DOMAIN; // "ion" -> ion@prep.md
  btn.disabled = true;
  err.hidden = true;
  const { error } = await sb.auth.signInWithPassword({ email: login, password: $("#password-input").value });
  btn.disabled = false;
  $("#login-resend").hidden = true;
  if (error) {
    if ((error.message || "").toLowerCase().includes("not confirmed")) {
      err.textContent = "Emailul nu a fost confirmat încă. Deschide linkul din mesajul primit (verifică și Spam) sau cere un email nou.";
      pendingConfirmEmail = login;
      $("#login-resend").hidden = false;
    } else {
      err.textContent = "Login sau parolă incorectă.";
    }
    err.hidden = false;
    return;
  }
  $("#password-input").value = "";
  await enterApp();
});


/* ---------- Creare cont (autentificare / înregistrare) ---------- */
function switchAuth(mode) {
  $all(".auth-tab").forEach(t => t.classList.toggle("active", t.dataset.auth === mode));
  ["login", "register", "forgot", "recover"].forEach(m => { $("#auth-" + m + "-pane").hidden = m !== mode; });
  $("#auth-tabs").hidden = mode === "forgot" || mode === "recover";   // tab-urile se ascund la resetarea parolei
  ["#login-error", "#register-error", "#register-info", "#forgot-error", "#forgot-info", "#recover-error"].forEach(s => { $(s).hidden = true; });
  $("#login-resend").hidden = true; $("#register-resend").hidden = true;
}
$("#forgot-link").addEventListener("click", () => {
  const typed = $("#login-input").value.trim();
  switchAuth("forgot");
  if (typed.includes("@")) $("#forgot-email").value = typed;
});
$all("[data-auth-go]").forEach(b => b.addEventListener("click", () => switchAuth(b.dataset.authGo)));

/* ---------- Resetare parolă ---------- */
$("#forgot-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const err = $("#forgot-error"), info = $("#forgot-info"), btn = $("#forgot-btn");
  err.hidden = true; info.hidden = true;
  const email = $("#forgot-email").value.trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) { err.textContent = "Introdu o adresă de email validă."; err.hidden = false; return; }
  if (email.endsWith("@" + LOGIN_DOMAIN)) {
    err.textContent = "Acest cont nu are o adresă de email reală. Contactează administratorul pe Telegram (@prepadm) pentru a-ți reseta parola.";
    err.hidden = false; return;
  }
  btn.disabled = true;
  const { error } = await sb.auth.resetPasswordForEmail(email, { redirectTo: location.origin + location.pathname });
  setTimeout(() => { btn.disabled = false; }, 30000);   // evită trimiterea în serie
  if (error) {
    const m = (error.message || "").toLowerCase();
    err.textContent = (m.includes("rate") || m.includes("seconds") || m.includes("too many"))
      ? "Prea multe încercări. Încearcă din nou peste câteva minute."
      : "Nu am putut trimite emailul acum. Încearcă din nou mai târziu.";
    err.hidden = false; btn.disabled = false; return;
  }
  info.textContent = "Dacă există un cont cu această adresă, ți-am trimis un link de resetare. Verifică inboxul (și Spam).";
  info.hidden = false;
});

function showRecoverForm() {
  showScreen("screen-login");
  switchAuth("recover");
}
$("#recover-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const err = $("#recover-error"), btn = $("#recover-btn");
  const fail = (m) => { err.textContent = m; err.hidden = false; };
  err.hidden = true;
  const p1 = $("#recover-password").value, p2 = $("#recover-password2").value;
  if (p1.length < 6) return fail("Parola trebuie să aibă cel puțin 6 caractere.");
  if (p1 !== p2) return fail("Parolele nu coincid.");
  btn.disabled = true;
  const { error } = await sb.auth.updateUser({ password: p1 });
  btn.disabled = false;
  if (error) {
    const m = (error.message || "").toLowerCase();
    if (m.includes("same")) return fail("Parola nouă trebuie să fie diferită de cea veche.");
    return fail("Nu am putut salva parola: " + error.message + " Cere un link nou de resetare.");
  }
  $("#recover-password").value = ""; $("#recover-password2").value = "";
  recoveryMode = false;
  try { history.replaceState(null, "", location.pathname); } catch (x) {}
  switchAuth("login");
  await enterApp();       // utilizatorul este deja autentificat prin linkul din email
});
$all(".auth-tab").forEach(t => t.addEventListener("click", () => switchAuth(t.dataset.auth)));

let pendingConfirmEmail = "";

async function resendConfirmation(btn, infoEl) {
  if (!pendingConfirmEmail) return;
  btn.disabled = true;
  const { error } = await sb.auth.resend({
    type: "signup", email: pendingConfirmEmail,
    options: { emailRedirectTo: location.origin + location.pathname }
  });
  setTimeout(() => { btn.disabled = false; }, 30000);   // evită retrimiterea în serie
  if (infoEl) {
    infoEl.textContent = error
      ? "Nu am putut retrimite emailul acum. Încearcă din nou peste câteva minute."
      : "Am retrimis emailul de confirmare la " + pendingConfirmEmail + ".";
    infoEl.hidden = false;
  }
}
$("#register-resend").addEventListener("click", () => resendConfirmation($("#register-resend"), $("#register-info")));
$("#login-resend").addEventListener("click", () => {
  resendConfirmation($("#login-resend"), null);
  const err = $("#login-error"); err.textContent = "Am retrimis emailul de confirmare. Verifică inboxul (și Spam)."; err.hidden = false;
});

// Store contact details in authenticated user metadata, not the SMS login field.
function normalizeContactPhone(raw) {
  const n = String(raw || "").trim().replace(/[\s().-]/g, "");
  return /^\+?\d{7,15}$/.test(n) && /[1-9]/.test(n) ? n : "";
}
function normalizeProfileName(raw) { return String(raw || "").trim().replace(/\s+/g, " "); }
function validProfileName(raw) { const n = normalizeProfileName(raw); return n.length >= 1 && n.length <= 40 && /^[\p{L}\p{M}][\p{L}\p{M} .’'\-]*$/u.test(n); }
function hasConfirmedName(user) { const m = user?.user_metadata || {}; return m.name_details_version === 1 && validProfileName(m.first_name) && validProfileName(m.last_name); }
function accountNameData(first, last) { return {first_name:first, last_name:last, full_name:last + " " + first, name_details_version:1}; }
function paintAccountName(user) {
  const m=user?.user_metadata || {};
  currentUserName = hasConfirmedName(user) ? m.last_name + " " + m.first_name : "";
  const name=currentUserName || (user?.email || "").split("@")[0];
  $("#welcome-title").textContent=name ? "Bine ai revenit, " + name : "Bine ai revenit!";
  $("#profile-btn-email").textContent=currentUserName || user?.email || "Contul meu";
  document.querySelectorAll('.pp-account-name').forEach(el=>el.textContent=currentUserName || user?.email || "Contul meu");
}
function hasContactPhone(user) { return !!normalizeContactPhone(user?.user_metadata?.contact_phone); }
function openContactPrompt(user, editing = false) {
  const dialog = $("#screen-phone");
  dialog.dataset.mode = editing ? "edit" : "required";
  $("#phone-title").textContent = editing ? "Actualizează profilul" : "Confirmă datele tale";
  const m=user.user_metadata || {};
  // Google trimite numele în alt format: îl pre-completăm, utilizatorul îl confirmă
  const pn = normalizeProfileName(m.full_name || m.name || "").split(" ");
  $("#contact-first").value = m.first_name || m.given_name || (pn.length > 1 ? pn[0] : "");
  $("#contact-last").value = m.last_name || m.family_name || (pn.length > 1 ? pn.slice(1).join(" ") : (pn[0] || ""));
  $("#phone-cancel").hidden = !editing;
  $("#phone-signout").hidden = editing;
  $("#contact-phone").value = user.user_metadata?.contact_phone || "";
  $("#phone-error").hidden = true;
  dialog.classList.add("active");
  if (!dialog.open) dialog.showModal();
  $(editing ? "#contact-phone" : "#contact-last").focus({preventScroll: true});
}
function closeContactEditor() {
  const dialog = $("#screen-phone");
  dialog.close(); dialog.classList.remove("active");
  $("#profile-contact-change")?.focus({preventScroll: true});
}
$("#screen-phone").addEventListener("cancel", e => {
  e.preventDefault();
  if ($("#screen-phone").dataset.mode === "edit" && !$("#phone-save").disabled) closeContactEditor();
});
$("#phone-cancel").addEventListener("click", closeContactEditor);
async function refreshProfileContact() {
  const value = $("#profile-contact-phone"), status = $("#profile-contact-status");
  if (!value) return;
  value.textContent = "Se încarcă…"; status.hidden = true;
  try {
    const {data, error} = await sb.auth.getUser();
    if (error || !data?.user) throw error || new Error("Sesiunea a expirat.");
    value.textContent = normalizeContactPhone(data.user.user_metadata?.contact_phone) || "Neadăugat";
  } catch (error) {
    value.textContent = "Indisponibil momentan";
    status.textContent = "Numărul nu a putut fi încărcat. Încearcă din nou.";
    status.hidden = false;
  }
}
$("#profile-contact-change").addEventListener("click", async () => {
  const button = $("#profile-contact-change"), status = $("#profile-contact-status");
  button.disabled = true; status.hidden = true;
  try {
    const {data, error} = await sb.auth.getUser();
    if (error || !data?.user) throw error || new Error("Sesiunea a expirat.");
    openContactPrompt(data.user, true);
  } catch (error) { status.textContent = "Formularul nu a putut fi deschis. Reautentifică-te și încearcă din nou."; status.hidden = false; }
  finally { button.disabled = false; }
});
$("#phone-form").addEventListener("submit", async e => {
  e.preventDefault();
  const btn = $("#phone-save"), err = $("#phone-error");
  const phone = normalizeContactPhone($("#contact-phone").value);
  const first = normalizeProfileName($("#contact-first").value), last = normalizeProfileName($("#contact-last").value);
  err.hidden = true;
  if (!validProfileName(last) || !validProfileName(first)) { err.textContent = "Introdu numele și prenumele folosind litere (maximum 40 de caractere fiecare)."; err.hidden = false; return; }
  if (!phone) { err.textContent = "Introdu un număr de telefon valid, de exemplu 069 123 456."; err.hidden = false; return; }
  btn.disabled = true; $("#phone-cancel").disabled = true;
  try {
    const extra = {};
    if ($("#screen-phone").dataset.mode !== "edit") {   // prima completare după Google
      const cu = (await sb.auth.getUser()).data?.user, prov = cu?.app_metadata?.provider;
      if (prov && prov !== "email" && cu.user_metadata?.self_registered === undefined) extra.self_registered = true;
    }
    const {data, error} = await sb.auth.updateUser({data: {contact_phone: phone, ...accountNameData(first, last), ...extra}});
    if (error) throw error;
    paintAccountName(data.user);
    window.dispatchEvent(new CustomEvent("prep-profile-updated", {detail:{user:data.user}}));
    if ($("#screen-phone").dataset.mode === "edit") {
      closeContactEditor();
      await refreshProfileContact();
      const status = $("#profile-contact-status");
      if (status.hidden) { status.textContent = "Datele profilului au fost actualizate."; status.hidden = false; }
    } else {
      await enterApp();
    }
  } catch (error) { err.textContent = "Datele nu au putut fi salvate. Încearcă din nou. " + (error.message || ""); err.hidden = false; }
  finally { btn.disabled = false; $("#phone-cancel").disabled = false; }
});
$("#phone-signout").addEventListener("click", async () => { await sb.auth.signOut(); allowedExams = []; showScreen("screen-login"); });

$("#register-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const err = $("#register-error"), info = $("#register-info"), btn = $("#register-btn");
  const fail = (m) => { err.textContent = m; err.hidden = false; };
  err.hidden = true; info.hidden = true; $("#register-resend").hidden = true;

  const first = normalizeProfileName($("#reg-first").value), last = normalizeProfileName($("#reg-last").value);
  if (!validProfileName(last) || !validProfileName(first)) return fail("Introdu numele și prenumele folosind litere (maximum 40 de caractere fiecare).");
  const email = $("#reg-login").value.trim().toLowerCase();
  const phone = normalizeContactPhone($("#reg-phone").value);
  const p1 = $("#reg-password").value, p2 = $("#reg-password2").value;
  if (!phone) return fail("Introdu un număr de telefon valid, de exemplu 069 123 456.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return fail("Introdu o adresă de email validă. Pe ea primești mesajul de confirmare.");
  if (p1.length < 6) return fail("Parola trebuie să aibă cel puțin 6 caractere.");
  if (p1 !== p2) return fail("Parolele nu coincid.");

  btn.disabled = true;
  const { data, error } = await sb.auth.signUp({
    email,
    password: p1,
    options: { data: { self_registered: true, contact_phone: phone, ...accountNameData(first, last) }, emailRedirectTo: location.origin + location.pathname }
  });
  btn.disabled = false;

  if (error) {
    console.error("signUp error:", error.status, error.code, error.message);   // pentru depanare: vezi în consola browserului (F12)
    const m = (error.message || "").toLowerCase();
    if (m.includes("already")) return fail("Acest email este deja înregistrat. Autentifică-te.");
    if (m.includes("rate") || m.includes("too many") || m.includes("seconds")) return fail("Prea multe încercări. Încearcă din nou peste câteva minute.");
    if (m.includes("not allowed") || m.includes("disabled")) return fail("Crearea de conturi este dezactivată momentan.");
    if (m.includes("password")) return fail("Parola nu este acceptată. Alege una mai lungă.");
    if (m.includes("email") && (m.includes("send") || m.includes("sending"))) return fail("Nu am putut trimite emailul de confirmare. Încearcă mai târziu sau contactează administratorul.");
    return fail("Nu am putut crea contul: " + error.message);
  }
  // email deja existent și confirmat: Supabase nu dă eroare, ci întoarce un utilizator fără identități
  if (data.user && Array.isArray(data.user.identities) && data.user.identities.length === 0) {
    return fail("Acest email este deja înregistrat. Autentifică-te.");
  }
  if (!data.session) {   // confirmarea prin email este activă: utilizatorul trebuie să apese linkul din mesaj
    pendingConfirmEmail = email;
    info.textContent = "Ți-am trimis un email de confirmare la " + email + ". Apasă linkul din mesaj (verifică și Spam), apoi autentifică-te.";
    info.hidden = false;
    $("#register-resend").hidden = false;
    $("#reg-password").value = ""; $("#reg-password2").value = "";
    return;
  }
  $("#reg-password").value = ""; $("#reg-password2").value = "";
  await enterApp();       // dacă confirmarea e dezactivată în Supabase, intră direct
});

async function enterApp() {
  const contactSession = await sb.auth.getSession();
  const contactUser = contactSession.data?.session?.user;
  if (!contactUser) { showScreen("screen-login"); return; }
  const needsContactPhone = !hasContactPhone(contactUser) || !hasConfirmedName(contactUser);
  const { data, error } = await sb.from("user_exams").select("exam_key");
  if (error) {
    alert("Nu am putut încărca accesul: " + error.message);
    return;
  }
  allowedExams = data.map(r => r.exam_key);

  // "Bine ai venit, Ion!" — numele = partea dinainte de @
  const { data: sess } = await sb.auth.getSession();
  const email = sess.session?.user?.email || "";
  const meta = sess.session?.user?.user_metadata || {};
  currentUserEmail = email;
  currentUserId = sess.session?.user?.id || "";
  if (meta.theme) applyTheme(meta.theme);     // tema salvată în profil
  paintAccountName(sess.session?.user);

  renderDashboard();
  showScreen("screen-dashboard");
  window.prepUpdateStreak?.();
  if (needsContactPhone) { openContactPrompt(contactUser); return; }

  // ghid de utilizare: doar la prima intrare cu examene, pentru conturi create prin „Creare cont”
  if (allowedExams.length && meta.self_registered && !meta.guide_seen && !guideSeenLocally()) {
    setTimeout(() => showGuide(true), 350);
  }
}

/* Autentificare cu Google (Supabase OAuth). Numele și telefonul se cer apoi în „Confirmă datele tale”. */
document.querySelectorAll("[data-oauth]").forEach(btn => btn.addEventListener("click", async () => {
  const box = btn.closest(".auth-pane") || document, err = box.querySelector(".auth-social-error");
  if (err) err.hidden = true;
  btn.disabled = true;
  const { error } = await sb.auth.signInWithOAuth({ provider: btn.dataset.oauth, options: { redirectTo: location.origin + location.pathname } });
  if (error) { btn.disabled = false; if (err) { err.textContent = "Nu am putut începe autentificarea: " + error.message; err.hidden = false; } }
}));

$("#logout-btn").addEventListener("click", async () => {
  await sb.auth.signOut();
  allowedExams = [];
  showScreen("screen-login");
});

// păstrează sesiunea la reîncărcarea paginii
sb.auth.onAuthStateChange((event) => {
  if (event === "PASSWORD_RECOVERY") { recoveryMode = true; showRecoverForm(); }
});
sb.auth.getSession().then(({ data }) => {
  if (recoveryMode) { showRecoverForm(); return; }
  if (data.session) enterApp();
  else if (location.hash === "#login") { showScreen("screen-login"); switchAuth("login"); }
});

/* păreri (reviews.js) + apariție la derulare */
(function initLanding() {
  const R = window.PREP_REVIEWS || {};
  const vids = Array.isArray(R.videos) ? R.videos : [];
  const quotes = Array.isArray(R.quotes) ? R.quotes : [];
  const sec = document.getElementById("lp-reviews");
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));
  if (sec && (vids.length || quotes.length)) {
    sec.hidden = false;
    const nav = document.getElementById("lp-nav-reviews"); if (nav) nav.hidden = false;
    const vbox = document.getElementById("lp-vids");
    vbox.innerHTML = vids.map(v => `
      <div class="home-review-video">
        <video src="${esc(v.src)}" controls playsinline preload="metadata" aria-label="Videoclip: ${esc(v.name)}"></video>
        <div><b>${esc(v.name)}</b><span>${esc(v.note || "")}</span></div>
      </div>`).join("");
    document.getElementById("lp-quotes").innerHTML = quotes.map(q => `
      <blockquote class="home-review-quote"><p>“${esc(q.text)}”</p><cite><b>${esc(q.name)}</b>${q.note ? " · " + esc(q.note) : ""}</cite></blockquote>`).join("");
  }
  const items = document.querySelectorAll("#screen-landing .lp-h2, #screen-landing .lp-panel, #screen-landing .lp-step, #screen-landing .lp-arr, #screen-landing .lp-price-box, #screen-landing .lp-faq, #screen-landing .lp-vid, #screen-landing .lp-quote, #screen-landing .lp-duo, #screen-landing .lp-duo-copy");
  if (!("IntersectionObserver" in window)) return;
  const io = new IntersectionObserver((es) => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12 });
  items.forEach(el => { el.classList.add("rv"); io.observe(el); });
})();


/* =====================================================================
   4) DASHBOARD — alegerea examenului
   ===================================================================== */
/* Iconițe desenate pentru fiecare examen (nu litere/monograme) */
const EXAM_ICONS = {
  html5: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 3h16l-1.5 16L12 21l-6.5-2L4 3Z"/>
    <path d="M16 7H8l.4 4h7.2l-.5 5-3.1 1-3.1-1-.2-2"/>
  </svg>`,
  python: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="8 4 3 12 8 20"/><polyline points="16 4 21 12 16 20"/><line x1="13" y1="3.5" x2="11" y2="20.5"/>
  </svg>`,
  databases: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>
  </svg>`,
  deviceConfig: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2.5" y="4" width="13" height="9.5" rx="1.4"/><line x1="6.5" y1="17.5" x2="11.5" y2="17.5"/><line x1="9" y1="13.5" x2="9" y2="17.5"/>
    <circle cx="18.5" cy="15.5" r="2.6"/><line x1="18.5" y1="11.7" x2="18.5" y2="10.6"/><line x1="18.5" y1="19.3" x2="18.5" y2="20.4"/>
    <line x1="21.3" y1="13.7" x2="22.2" y2="13.1"/><line x1="14.8" y1="17.9" x2="13.9" y2="18.5"/>
    <line x1="14.8" y1="13.1" x2="13.9" y2="12.5"/><line x1="21.3" y1="17.3" x2="22.2" y2="17.9"/>
  </svg>`,
  networking: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="5" r="2.2"/><circle cx="5" cy="17" r="2.2"/><circle cx="19" cy="17" r="2.2"/>
    <line x1="12" y1="7.2" x2="6.4" y2="15.2"/><line x1="12" y1="7.2" x2="17.6" y2="15.2"/><line x1="7.2" y1="17" x2="16.8" y2="17"/>
  </svg>`
};
const ARROW_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="12" x2="18" y2="12"/><polyline points="12 6 18 12 12 18"/></svg>`;

const PLAY_ICON = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`;


const TG_ICON = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.5 3.5 2.7 10.9c-1.2.5-1.2 1.2-.2 1.5l4.8 1.5 1.9 5.8c.2.6.4.8.9.8.4 0 .6-.2.9-.5l2.2-2.1 4.6 3.4c.8.5 1.4.2 1.6-.7l3-14.1c.3-1.2-.4-1.7-1.2-1.2Zm-12 11.4-1.6-.5 9.5-6-7.9 6.5Zm1 1.1 1.2 3.7.9-2.7c1.9-1.6 3.4-2.9 4.5-3.9l-6.6 2.9Z"/></svg>`;
const LOCK_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4.5" y="10.5" width="15" height="10" rx="2.5"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/><path d="M12 14.5v2.5"/></svg>`;

/* Pagina afișată când contul nu are încă niciun examen */
function renderNoAccess(grid) {
  grid.innerHTML = `
    <section class="noaccess">
      <div class="noaccess-icon">${LOCK_ICON}</div>
      <span class="noaccess-badge">Cont creat cu succes</span>
      <h2>Mai ai un singur pas</h2>
      <p class="noaccess-lead">Alege modulele dorite și trimite selecția pe Telegram. După confirmarea achitării, activăm accesul.</p>
      <div id="noaccess-shop"></div>
      <div class="noaccess-actions">
        <button class="btn btn-primary" id="recheck-access-btn" type="button">Verifică accesul</button>
      </div>
      <p class="noaccess-hint" id="recheck-hint" hidden>Încă nu ai primit acces. Dacă ai scris deja administratorului, mai așteaptă puțin.</p>
    </section>`;
  const b = $("#recheck-access-btn");
  b.addEventListener("click", async () => {
    b.disabled = true; b.textContent = "Se verifică…";
    await enterApp();                       // re-randează dashboard-ul (cu examene, dacă au fost adăugate)
    const h = $("#recheck-hint"); if (h) h.hidden = false;
  });
}

function roCount(n, one, many) {   // 1 întrebare · 5 întrebări · 24 de întrebări
  if (n === 1) return `1 ${one}`;
  const m = n % 100;
  return (n !== 0 && (m === 0 || m >= 20)) ? `${n} de ${many}` : `${n} ${many}`;
}

function renderDashboard() {
  const grid = $("#exam-grid");
  grid.innerHTML = "";

  const visible = EXAM_ORDER.filter(k => allowedExams.includes(k));
  const heroP = $(".dash-hero-copy p");
  if (heroP) heroP.textContent = visible.length
    ? "Alege examenul la care vrei să te pregătești astăzi."
    : "Contul tău este creat, dar nu are încă acces la niciun examen.";
  if (visible.length === 0) {
    renderNoAccess(grid);
    return;
  }

  visible.forEach(key => {
    const exam = getExam(key);
    if (!exam) return;
    const total = exam.QUESTIONS.length;
    const chapterCount = exam.CHAPTERS.length;

    const card = document.createElement("div");
    card.className = "exam-card";
    card.style.setProperty("--accent", exam.accent);
    card.innerHTML = `
      <div class="exam-card-head">
        <div class="exam-card-icon${key === "pythonNextGen" ? " ng-icon-next" : ""}">${EXAM_ICONS[key] || ""}${key === "pythonNextGen" ? `<span class="ng-spark" aria-label="Next Generation"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 1.5c.8 6 3.5 8.7 9.5 9.5-6 .8-8.7 3.5-9.5 9.5-.8-6-3.5-8.7-9.5-9.5 6-.8 8.7-3.5 9.5-9.5Z"/></svg></span>` : ""}</div>
      </div>
      <h3>${exam.name} </h3>
      <p>${exam.description}</p>
      <div class="exam-card-meta">
        <span>${roCount(chapterCount, "capitol", "capitole")}</span>
        <span>${exam.hasLabs ? `${exam.QUESTIONS.filter(q=>q.type!=="lab").length} întrebări · ${exam.QUESTIONS.filter(q=>q.type==="lab").length} laburi` : roCount(total, "întrebare", "întrebări")}</span>
      </div>
      <div class="exam-card-actions">
        <button class="exam-card-cta" data-exam="${key}">${exam.hasLabs ? "Întrebări și laburi" : "Întrebări"} ${ARROW_ICON}</button>
        ${exam.hasLabs ? "" : `<button class="exam-card-cta exam-card-cta-alt" data-course="${key}">Curs ${PLAY_ICON}</button>`}
      </div>
    `;
    card.querySelector("[data-exam]").addEventListener("click", () => openSetup(key));
    card.querySelector("[data-course]")?.addEventListener("click", () => openCourse(key));
    grid.appendChild(card);
  });
}


/* =====================================================================
   CURS — capitole + video-uri + resurse (configurate în data/courses.js)
   ===================================================================== */
function openCourse(key) {
  if (!allowedExams.includes(key)) return;
  const exam = getExam(key);
  if (!window.COURSE_DATA) console.error("data/courses.js nu s-a încărcat sau are o eroare de sintaxă.");
  const cfg = (window.COURSE_DATA || {})[key] || {};
  const chapters = cfg.chapters || [];
  const resources = cfg.resources || [];
  const video = $("#course-video"), frame = $("#course-frame");
  const side = $("#course-list");
  const flat = [];
  let current = 0;

  $("#course-title").textContent = `Curs — ${exam.name}`;
  $("#course-desc").textContent = exam.description;
  $("#course-chapter-label").textContent = "";
  $("#course-video-title").textContent = "Alege un video din listă";
  video.removeAttribute("src"); video.hidden = false; frame.hidden = true; frame.src = "about:blank";
  side.innerHTML = "";

  chapters.forEach((ch, ci) => {
    const det = document.createElement("details");
    det.className = "course-chapter";
    det.open = ci === 0;
    const sum = document.createElement("summary");
    const name = document.createElement("span"); name.textContent = ch.title;
    const cnt = document.createElement("span"); cnt.className = "course-chapter-count";
    const vids = ch.videos || ((ch.youtube || ch.file) ? [ch] : []); // tolerează un video pus direct ca "capitol"
    cnt.textContent = `${vids.length} video`;
    sum.append(name, cnt);
    det.appendChild(sum);
    if (!vids.length) {
      const p = document.createElement("p"); p.className = "course-empty"; p.textContent = "În curând";
      det.appendChild(p);
    }
    vids.forEach((v, vi) => {
      const btn = document.createElement("button");
      btn.className = "course-item";
      const num = document.createElement("span"); num.className = "course-num"; num.textContent = String(vi + 1).padStart(2, "0");
      const t = document.createElement("span"); t.textContent = v.title;
      btn.append(num, t);
      const idx = flat.length;
      btn.addEventListener("click", () => play(idx));
      det.appendChild(btn);
      flat.push({ v, btn, ch, det });
    });
    side.appendChild(det);
  });

  $("#course-count").textContent = flat.length ? `${flat.length} video-uri` : "";
  if (!chapters.length) side.innerHTML = window.COURSE_DATA
    ? '<p class="course-empty">Video-urile vor fi adăugate în curând.</p>'
    : '<p class="course-empty">Eroare: fișierul data/courses.js nu s-a încărcat (lipsește sau are o greșeală de scriere). Apasă F12 → Console.</p>';

  function play(i) {
    current = i;
    const { v, btn, ch, det } = flat[i];
    $all(".course-item").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    det.open = true;
    btn.scrollIntoView({ block: "nearest" });
    $("#course-chapter-label").textContent = ch.title;
    $("#course-video-title").textContent = v.title;
    if (v.embed) {
      // orice platformă video (Viddler, Vimeo, Dailymotion etc.): link de embed sau tot codul <iframe ...>
      const m = v.embed.match(/src\s*=\s*["']([^"']+)["']/i);
      let src = (m ? m[1] : v.embed).trim();
      if (src.startsWith("//")) src = "https:" + src;
      video.pause(); video.removeAttribute("src"); video.hidden = true;
      if (/^https:\/\//i.test(src)) { frame.src = src; frame.hidden = false; }
      else { frame.src = "about:blank"; frame.hidden = true; $("#course-video-title").textContent = v.title + " — link de embed invalid (trebuie să înceapă cu https://)"; }
    } else if (v.drive) {
      // Google Drive: acceptă linkul de share sau doar ID-ul fișierului
      const m = v.drive.match(/\/d\/([\w-]+)|[?&]id=([\w-]+)/);
      const id = m ? (m[1] || m[2]) : v.drive.trim();
      video.pause(); video.removeAttribute("src"); video.hidden = true;
      frame.src = `https://drive.google.com/file/d/${id}/preview`;
      frame.hidden = false;
    } else if (v.youtube) {
      // acceptă ID-ul sau linkul întreg de YouTube
      const m = v.youtube.match(/(?:v=|youtu\.be\/|embed\/|shorts\/|live\/)([\w-]{11})/);
      video.pause(); video.removeAttribute("src"); video.hidden = true;
      const origin = location.protocol.startsWith("http") ? `&origin=${encodeURIComponent(location.origin)}` : "";
      frame.src = `https://www.youtube.com/embed/${m ? m[1] : v.youtube}?rel=0&playsinline=1${v.start ? `&start=${parseInt(v.start, 10)}` : ""}${origin}`;
      frame.hidden = false;
    } else {
      frame.src = "about:blank"; frame.hidden = true;
      video.hidden = false; video.src = v.file; video.load();
    }
    $("#course-prev-btn").disabled = i === 0;
    $("#course-next-btn").disabled = i === flat.length - 1;
  }

  $("#course-prev-btn").onclick = () => current > 0 && play(current - 1);
  $("#course-next-btn").onclick = () => current < flat.length - 1 && play(current + 1);
  video.onended = () => { if (current < flat.length - 1) play(current + 1); };
  $("#course-prev-btn").disabled = $("#course-next-btn").disabled = true;

  // resurse de descărcat
  const rw = $("#course-resources"), rl = $("#course-resource-list");
  rl.innerHTML = "";
  rw.hidden = !resources.length;
  resources.forEach(r => {
    const link = document.createElement("a");
    link.className = "resource-item"; link.href = r.file;
    if (/^https?:\/\//i.test(r.file)) { link.target = "_blank"; link.rel = "noopener"; } // link extern (Drive, MEGA, GitHub Releases...)
    else link.setAttribute("download", "");
    const badge = document.createElement("span"); badge.className = "resource-badge";
    const ext = (r.file.match(/\.([a-z0-9]{2,5})$/i) || [])[1];
    const inTitle = (r.title.match(/\((PDF|ZIP|RAR|DOCX?|WORD|XLSX?|EXCEL|PPTX?|TXT)\)/i) || [])[1];
    badge.textContent = (r.type || (/^https?:\/\//i.test(r.file) ? (inTitle || "DRIVE") : ext) || "FILE").toUpperCase();
    const t = document.createElement("span"); t.className = "resource-name"; t.textContent = r.title;
    const dl = document.createElement("span"); dl.className = "resource-dl"; dl.textContent = "Descarcă ↓";
    link.append(badge, t, dl);
    rl.appendChild(link);
  });

  showScreen("screen-course");
  if (flat.length) play(0);
}

/* =====================================================================
   5) SETUP TEST — capitole, nr. întrebări, mod
   ===================================================================== */
function openSetup(examKey) {
  if (!allowedExams.includes(examKey)) return;
  state.currentExamKey = examKey;
  const exam = getExam(examKey);

  $("#setup-exam-title").textContent = exam.name;
  $("#setup-exam-desc").textContent = exam.description;
  $("#setup-question-total").textContent = roCount(exam.QUESTIONS.length, "întrebare", "întrebări");

  // implicit: toate capitolele selectate
  state.selectedChapters = new Set(exam.CHAPTERS.map(c => c.id));
  renderChapterList();
  updateCountRangeBounds();
  configureNextGenSetup();
  showScreen("screen-setup");
}

function questionsForChapters(exam, chapterIds) {
  return exam.QUESTIONS.filter(q => chapterIds.has(q.chapter));
}

function renderChapterList() {
  const exam = getExam(state.currentExamKey);
  const list = $("#chapter-list");
  list.innerHTML = "";

  exam.CHAPTERS.forEach((ch, i) => {
    const count = exam.QUESTIONS.filter(q => q.chapter === ch.id).length;
    const row = document.createElement("label");
    row.className = "chapter-item" + (count === 0 ? " disabled" : "");
    const checked = state.selectedChapters.has(ch.id);
    row.classList.toggle("checked", checked);
    row.innerHTML = `
      <input type="checkbox" ${checked ? "checked" : ""} ${count === 0 ? "disabled" : ""} data-chapter="${ch.id}">
      <span class="chapter-num">${String(i + 1).padStart(2, "0")}</span>
      <span class="chapter-info">
        <strong>${ch.name}</strong>
        <span>${count} întreb${count === 1 ? "are" : "ări"} disponibile</span>
      </span>
      <span class="chapter-count">${count}</span>
    `;
    const input = row.querySelector("input");
    input.addEventListener("change", () => {
      if (input.checked) state.selectedChapters.add(ch.id);
      else state.selectedChapters.delete(ch.id);
      row.classList.toggle("checked", input.checked);
      updateCountRangeBounds();
    });
    list.appendChild(row);
  });
}

$("#chapters-select-all").addEventListener("click", () => {
  const exam = getExam(state.currentExamKey);
  state.selectedChapters = new Set(exam.CHAPTERS.map(c => c.id));
  renderChapterList();
  updateCountRangeBounds();
});
$("#chapters-select-none").addEventListener("click", () => {
  state.selectedChapters = new Set();
  renderChapterList();
  updateCountRangeBounds();
});

function updateCountRangeBounds() {
  const exam = getExam(state.currentExamKey);
  const available = questionsForChapters(exam, state.selectedChapters).length;
  const range = $("#question-count-range");
  const max = Math.max(available, 1);
  range.max = max;
  if (Number(range.value) > max) range.value = max;
  if (available === 0) range.value = 0;
  $("#question-count-value").textContent = range.value;
  $("#count-hint").textContent = available > 0
    ? `Sunt disponibile ${available} întrebări în capitolele selectate.`
    : "Nu există întrebări în capitolele selectate — alege alt capitol.";
  $("#start-quiz-btn").disabled = available === 0;
  $("#setup-warning").hidden = available !== 0;
}

$("#question-count-range").addEventListener("input", (e) => {
  $("#question-count-value").textContent = e.target.value;
});

$all('input[name="quiz-mode"]').forEach(radio => {
  radio.addEventListener("change", (e) => { state.quizMode = e.target.value; });
});

$all(".back-btn").forEach(btn => {
  btn.addEventListener("click", () => showScreen(btn.dataset.target));
});

$("#start-quiz-btn").addEventListener("click", () => startQuiz());

/* =====================================================================
   6) QUIZ ENGINE
   ===================================================================== */
function startQuiz() {
  if(state.currentExamKey==='pythonNextGen' && state.ngCountDirty){
    if(document.getElementById('ng-random-pick')?.onclick() === false)return;
  }
  const exam = getExam(state.currentExamKey);
  const pool = questionsForChapters(exam, state.selectedChapters);
  const count = Number($("#question-count-range").value);

  if (state.currentExamKey === "pythonNextGen") {
    const chosen=nextGenChosen();
    const valid=state.nextGenKind === "combined" ? chosen.some(q=>q.type!=="lab") && chosen.some(q=>q.type==="lab") : chosen.length>0;
    if(!valid){updateNextGenSelection();return;}
    state.quizQuestions=chosen;
  } else state.quizQuestions=sample(pool,count);
  state.currentIndex = 0;
  state.userAnswers = {};
  state.labCode = {}; state.labResults = {};
  state.lockedQuestions = {};
  state.flagged = {};
  state.dndState = {};
  state.elapsedSeconds = 0;
  state.startTime = Date.now();
  state.attemptId = crypto.randomUUID();
  state.completedAttemptId = null;

  if (state.timerInterval) clearInterval(state.timerInterval);
  state.timerInterval = setInterval(() => {
    state.elapsedSeconds = Math.floor((Date.now() - state.startTime) / 1000);
    $("#quiz-timer").textContent = formatTime(state.elapsedSeconds);
  }, 1000);

  showScreen("screen-quiz");
  renderQuizQuestion();
}

$("#quiz-exit-btn").addEventListener("click", () => {
  askConfirm({
    title: "Ieși din test?",
    text: "Sesiunea se păstrează și o poți continua cu butonul «Reia sesiunea».",
    ok: "Ieși din test", cancel: "Rămân în test"
  }).then((ok) => {
    if (!ok) return;
    if (window.saveSession) window.saveSession();
    clearInterval(state.timerInterval);
    renderDashboard();
    showScreen("screen-dashboard");
  });
});

function currentQuestion() {
  return state.quizQuestions[state.currentIndex];
}

function renderQuizQuestion() {
  $("#quiz-timer").textContent = window.prepGuideActive && state.guideLabPreview ? "DEMO" : formatTime(state.elapsedSeconds);
  const q = currentQuestion();
  const total = state.quizQuestions.length;
  const exam = getExam(state.currentExamKey);
  const chapterName = exam.CHAPTERS.find(c => c.id === q.chapter)?.name || "";

  // progres
  $("#quiz-progress-fill").style.width = `${((state.currentIndex) / total) * 100}%`;
  $("#quiz-progress-label").textContent = `Întrebarea ${state.currentIndex + 1} din ${total}`;

  // nav butoane
  $("#quiz-prev-btn").disabled = state.currentIndex === 0;
  const isLast = state.currentIndex === total - 1;
  $("#quiz-next-btn").hidden = isLast;
  $("#quiz-finish-btn").hidden = !isLast;

  $("#quiz-flag-btn").classList.toggle("btn-flagged", !!state.flagged[q.id]);
  $("#quiz-flag-btn").innerHTML = ICON.flag + (state.flagged[q.id] ? " Marcată pentru revizuire" : " Marchează pentru revizuire");

  const card = $("#quiz-card");
  card.classList.toggle("ng-lab-card", q.type === "lab");
  if(q.type === "lab") { renderPythonLab(q); updateQuizSummary(); return; }
  const locked = !!state.lockedQuestions[q.id];

  let html = `
    <div class="q-kicker">
      <span class="q-type-badge">${typeLabel(q.type)}</span>
      <span class="q-chapter-badge">${chapterName}</span>
    </div>
    <div class="q-text">${fmt(q.question)}</div>
  `;
  html += imageHtml(q);                                   // imaginea întrebării (dacă există)
  if (q.code) html += `<pre class="q-code"><code>${highlightCode(q.code)}</code></pre>`;

  if (q.type === "cloze") {
    const answers=state.userAnswers[q.id]||[];
    html += `<div class="ng-cloze"><p class="q-hint">Completează câmpurile numerotate. Spațiile din jurul operatorilor și ghilimelele simple sau duble sunt acceptate.</p>${q.answers.map((_,i)=>`<label>Câmpul ${i+1}<input type="text" data-cloze="${i}" value="${escapeHtml(answers[i]||'')}" autocomplete="off" spellcheck="false" ${locked?'disabled':''}></label>`).join('')}</div>`;
  } else if (q.type === "numeric") {
    const value = String(state.userAnswers[q.id] ?? "");
    html += `<div class="q-numeric"><label for="q-numeric-answer">Răspunsul tău</label><input id="q-numeric-answer" type="text" inputmode="numeric" pattern="[0-9]+" maxlength="9" autocomplete="off" placeholder="Introdu un număr întreg" value="${escapeHtml(value)}" ${locked ? 'disabled' : ''}><p class="q-hint">Scrie un număr întreg, fără alte caractere.</p></div>`;
  } else if (q.type === "true_false") {
    html += renderTrueFalse(q, locked);
  } else if (q.type === "single") {
    html += renderSingle(q, locked);
  } else if (q.type === "multiple") {
    html += `<p class="q-hint">Selectează exact ${q.correct.length} răspunsuri corecte.</p>` + renderMultiple(q, locked);
  } else if (q.type === "dropdown") {
    html += renderDropdown(q, locked);
  } else if (q.type === "drag_drop") {
    html += `<p class="q-hint">Atinge / trage fiecare element din lista de sus în caseta corectă.</p>` + renderDragDrop(q, locked);
  }

  if (state.quizMode === "practice") {
    if (!locked) {
      html += `<button class="btn btn-primary mt" id="check-answer-btn">Verifică răspunsul</button>`;
    } else {
      html += renderFeedback(q);
    }
  }

  card.innerHTML = html;
  attachImageZoom(card);
  attachQuestionHandlers(q, locked);
  updateQuizSummary();
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

/* ---------- Iconițe (SVG) și fereastră de confirmare ---------- */
const svgIc = (p, cls = "") => `<svg class="ic ${cls}" viewBox="0 0 24 24" aria-hidden="true">${p}</svg>`;
const ICON = {
  flag: svgIc('<path d="M5 21V4m0 0h11l-2 4 2 4H5"/>'),
  check: svgIc('<path d="M5 12.5l4.5 4.5L19 7.5"/>'),
  x: svgIc('<path d="M6 6l12 12M18 6L6 18"/>'),
  play: svgIc('<path d="M8 5.5v13l11-6.5z"/>', "ic-fill"),
  download: svgIc('<path d="M12 4v11m0 0l-4-4m4 4l4-4M5 20h14"/>'),
  award: svgIc('<circle cx="12" cy="9" r="5.5"/><path d="M8.5 13.5L7 21l5-3 5 3-1.5-7.5"/>'),
  pencil: svgIc('<path d="M4 20h4L19 9l-4-4L4 16v4zM13.5 6.5l4 4"/>'),
  alert: svgIc('<circle cx="12" cy="12" r="9"/><path d="M12 7.5v5M12 16.2v.1"/>'),
  info: svgIc('<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 7.8v.1"/>')
};

function askConfirm({ title, text, ok = "Confirmă", cancel = "Anulează", danger = false }) {
  return new Promise((resolve) => {
    const m = document.createElement("div");
    m.className = "modal-overlay";
    m.innerHTML = `<div class="modal-panel modal-confirm" role="dialog" aria-modal="true">
        <div class="modal-icon ${danger ? "danger" : ""}">${ICON.info}</div>
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(text)}</p>
        <div class="modal-actions">
          <button class="btn btn-primary" data-ok>${escapeHtml(ok)}</button>
          <button class="btn btn-secondary" data-cancel>${escapeHtml(cancel)}</button>
        </div></div>`;
    const done = (v) => { document.removeEventListener("keydown", onKey); m.remove(); resolve(v); };
    const onKey = (e) => { if (e.key === "Escape") done(false); };
    m.addEventListener("click", (e) => {
      if (e.target.closest("[data-ok]")) done(true);
      else if (e.target.closest("[data-cancel]") || e.target === m) done(false);
    });
    document.addEventListener("keydown", onKey);
    document.body.appendChild(m);
    m.querySelector("[data-ok]").focus();
  });
}

/* ---------- Formatare text / cod (escape + blocuri de cod + culori) ---------- */
function fmt(str) {
  return escapeHtml(String(str ?? ""))
    .replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>')
    .replace(/\n/g, "<br>");
}

function isCodeLike(s) {
  s = String(s).trim();
  if (!s || s.includes("`")) return false;
  if (s.includes("\n") && /[:=()\[\]]/.test(s)) return true;
  return /[A-Za-z_]\w*\s*\(/.test(s) ||
    /\w\[[^\]]*\]/.test(s) ||
    /[A-Za-z_\]\)]\s*(\*\*|\/\/|[+\-*\/%])?=(?!=)\s*\S/.test(s) ||
    /[=!<>]=/.test(s) ||
    /\d\s*(\*\*|\/\/|[%*\/+\-])\s*\d/.test(s) ||
    /^(import|from|for|while|if|elif|else|def|return|print|with|assert|raise|try|except|global|pass|break|continue)\b/.test(s) ||
    /^\s*[\[\{\(]['"\d].*[\]\}\)]$/.test(s) ||
    /^["'].*["']$/.test(s);
}

function optionsAreCode(q) {
  if (q.optionsCode === true) return true;
  if (q.optionsCode === false || !q.options || q.options.length < 2) return false;
  const n = q.options.filter(isCodeLike).length;
  return n / q.options.length >= 0.75;
}

function renderCodeText(text) {
  const t = String(text);
  return t.includes("\n")
    ? `<pre class="opt-code-block">${highlightCode(t)}</pre>`
    : `<code class="opt-code">${highlightCode(t)}</code>`;
}

function renderOpt(q, opt) {
  return optionsAreCode(q) ? renderCodeText(opt) : fmt(opt);
}

function renderChip(text) {
  return isCodeLike(text) ? renderCodeText(text) : fmt(text);
}

function highlightCode(code) {
  const esc = escapeHtml(String(code));
  if (!state.currentExamKey || state.currentExamKey !== "python") return esc;
  return esc.replace(
    /(#.*$)|("(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*')|\b(def|return|if|elif|else|for|while|in|not|and|or|is|import|from|as|try|except|finally|with|break|continue|pass|class|lambda|raise|assert|global|None|True|False)\b|\b(\d+(?:\.\d+)?)\b|\b(print|input|int|str|float|bool|len|range|list|dict|set|tuple|open|sum|type|round|eval)\b(?=\()/gm,
    (m, com, str, kw, num, bi) =>
      com ? `<span class="tok-c">${com}</span>` :
      str ? `<span class="tok-s">${str}</span>` :
      kw  ? `<span class="tok-k">${kw}</span>` :
      num ? `<span class="tok-n">${num}</span>` :
            `<span class="tok-b">${bi}</span>`
  );
}

/* ---------- Render: True / False ---------- */
function renderTrueFalse(q, locked) {
  const ans = state.userAnswers[q.id];
  let html = `<div class="tf-row">`;
  q.options.forEach((opt, idx) => {
    let cls = "tf-btn";
    if (ans === idx) cls += " selected";
    if (locked) {
      cls += " locked";
      if (idx === q.correct) cls += " correct";
      else if (ans === idx) cls += " incorrect";
    }
    html += `<button type="button" class="${cls}" data-idx="${idx}" ${locked ? "disabled" : ""}>${fmt(opt)}</button>`;
  });
  html += `</div>`;
  return html;
}

/* ---------- Render: Single choice ---------- */
function renderSingle(q, locked) {
  const ans = state.userAnswers[q.id];
  let html = `<div class="option-list">`;
  q.options.forEach((opt, idx) => {
    let cls = "option-item";
    if (ans === idx) cls += " selected";
    if (locked) {
      cls += " locked";
      if (idx === q.correct) cls += " correct";
      else if (ans === idx) cls += " incorrect";
    }
    html += `
      <div class="${cls}" data-idx="${idx}">
        <span class="opt-mark">${String.fromCharCode(65 + idx)}</span>
        <span class="opt-text">${renderOpt(q, opt)}</span>
      </div>`;
  });
  html += `</div>`;
  return html;
}

/* ---------- Render: Multiple choice (2 correct) ---------- */
function renderMultiple(q, locked) {
  const ans = Array.isArray(state.userAnswers[q.id]) ? state.userAnswers[q.id] : [];
  let html = `<div class="option-list multi">`;
  q.options.forEach((opt, idx) => {
    const selected = ans.includes(idx);
    let cls = "option-item";
    if (selected) cls += " selected";
    if (locked) {
      cls += " locked";
      if (q.correct.includes(idx)) cls += " correct";
      else if (selected) cls += " incorrect";
    }
    html += `
      <div class="${cls}" data-idx="${idx}">
        <span class="opt-mark">${selected ? ICON.check : ""}</span>
        <span class="opt-text">${renderOpt(q, opt)}</span>
      </div>`;
  });
  html += `</div>`;
  return html;
}

/* ---------- Drag & drop ---------- */
/* Un element este "reutilizabil" dacă este răspunsul corect pentru mai multe casete
   (ex. același tip de date folosit de 2 ori). Atunci poate fi plasat în mai multe casete. */
function isReusableItem(q, itemId) {
  return q.dropZones.filter(z => z.correctItemId === itemId).length > 1;
}

function renderDragDrop(q, locked) {
  if (!state.dndState[q.id]) {
    const zones = {};
    q.dropZones.forEach(z => zones[z.id] = null);
    state.dndState[q.id] = zones;
  }
  const zoneState = state.dndState[q.id];
  const usedItemIds = Object.values(zoneState).filter(Boolean);

  let html = `<div class="dnd-wrap">`;
  html += `<div class="dnd-pool" id="dnd-pool">`;
  q.dragItems.forEach(item => {
    const used = usedItemIds.includes(item.id) && !isReusableItem(q, item.id);
    html += `<div class="dnd-chip ${used ? "used" : ""}" draggable="${!locked && !used}" data-item="${item.id}">${renderChip(item.text)}</div>`;
  });
  html += `</div>`;

  html += `<div class="dnd-targets">`;
  q.dropZones.forEach(zone => {
    const placedId = zoneState[zone.id];
    const placedItem = placedId ? q.dragItems.find(i => i.id === placedId) : null;
    let zoneCls = "dnd-target";
    if (locked) {
      zoneCls += (placedId === zone.correctItemId) ? " correct" : " incorrect";
    }
    html += `
      <div class="${zoneCls}" data-zone="${zone.id}">
        <span class="dnd-target-label">${renderChip(zone.label)}</span>
        <span class="dnd-target-slot">
          ${placedItem
            ? `<span class="dnd-chip" data-placed="${placedItem.id}">${renderChip(placedItem.text)}</span>`
            : `<span class="dnd-empty-slot">Așază aici</span>`}
        </span>
      </div>`;
  });
  html += `</div></div>`;
  return html;
}

/* ---------- Feedback (practice mode) ---------- */
function renderFeedback(q) {
  const correct = isAnswerCorrect(q);
  const label = correct ? "Corect!" : "Incorect";
  const explanation = q.explanation ? q.explanation : "";
  return `
    <div class="q-feedback ${correct ? "ok" : "bad"}">
      <div>
        <strong>${label}</strong>
        ${fmt(explanation)}
        ${q.type === "dropdown" ? `<p><strong>Răspunsuri corecte:</strong> ${escapeHtml(describeCorrectAnswer(q))}</p>` : ""}
      </div>
    </div>`;
}

/* =====================================================================
   7) INTERACȚIUNE CU ÎNTREBĂRILE
   ===================================================================== */
function renderDropdown(q, locked) {
  const answers = state.dndState[q.id] || {};
  return `<div class="q-dropdowns"><p class="q-hint">Alege câte o opțiune pentru fiecare câmp.</p>${q.dropZones.map((zone, i) => {
    const items = zone.optionIds ? q.dragItems.filter(item => zone.optionIds.includes(item.id)) : q.dragItems;
    const value = answers[zone.id];
    const feedback = locked ? (value === zone.correctItemId ? ' dropdown-correct' : ' dropdown-incorrect') : '';
    return `<div class="q-dropdown-row${feedback}"><label for="q-dropdown-${i}">${fmt(zone.label)}</label><select id="q-dropdown-${i}" class="q-dropdown-select" data-zone-id="${escapeHtml(zone.id)}" ${locked ? 'disabled' : ''}><option value="">Choose One</option>${items.map(item => `<option value="${escapeHtml(item.id)}" ${value === item.id ? 'selected' : ''}>${escapeHtml(item.text)}</option>`).join('')}</select></div>`;
  }).join('')}</div>`;
}

function normalizeCloze(s) {
 const tokens=String(s).match(/"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|[A-Za-z_]\w*|\d+(?:\.\d+)?|\*\*=?|\/\/=?|==|!=|>=|<=|[+*\/%<>-]=?|[^\s]/g)||[];
 return tokens.map(t=>/^["']/.test(t)?JSON.stringify(t.slice(1,-1)):t).join('\u0001');
}

function attachQuestionHandlers(q, locked) {
  if(q.type === 'cloze' && !locked){
    $all('#quiz-card [data-cloze]').forEach(el=>el.addEventListener('input',()=>{const a=state.userAnswers[q.id]||[];a[Number(el.dataset.cloze)]=el.value;state.userAnswers[q.id]=a;updateQuizSummary();}));
  }
  if(q.type === "numeric" && !locked) {
    const input = document.getElementById('q-numeric-answer');
    input.addEventListener('input', () => {
      const value = input.value.trim();
      if(value) state.userAnswers[q.id] = value; else delete state.userAnswers[q.id];
      input.setCustomValidity(value && !/^\d+$/.test(value) ? 'Introdu un număr întreg pozitiv sau zero.' : '');
      updateQuizSummary();
    });
    input.addEventListener('keydown', e => {if(e.key === 'Enter' && input.reportValidity()) document.getElementById('check-answer-btn')?.click();});
  }
  if (q.type === "dropdown" && !locked) {
    $all("#quiz-card .q-dropdown-select").forEach(select => {
      select.addEventListener("change", () => {
        const zone = q.dropZones.find(z => z.id === select.dataset.zoneId);
        if (!zone) return;
        state.dndState[q.id] ||= {};
        const valid = q.dragItems.some(item => item.id === select.value) && (!zone.optionIds || zone.optionIds.includes(select.value));
        if (valid) state.dndState[q.id][zone.id] = select.value;
        else delete state.dndState[q.id][zone.id];
        updateQuizSummary();
      });
    });
  }
  if (locked) {
    attachDndDragHandlers(q, true); // doar pentru consistență vizuală, fără acțiuni
    return;
  }

  if (q.type === "true_false" || q.type === "single") {
    $all(`.${q.type === "true_false" ? "tf-btn" : "option-item"}`).forEach(el => {
      el.addEventListener("click", () => {
        state.userAnswers[q.id] = Number(el.dataset.idx);
        if (state.quizMode === "exam") {
          renderQuizQuestion(); // doar re-render pentru starea de selecție, fără feedback
        } else {
          renderQuizQuestion();
        }
      });
    });
  }

  if (q.type === "multiple") {
    $all(".option-item").forEach(el => {
      el.addEventListener("click", () => {
        const idx = Number(el.dataset.idx);
        let ans = Array.isArray(state.userAnswers[q.id]) ? state.userAnswers[q.id].slice() : [];
        const requiredCount = q.correct.length; // de regulă 2
        if (ans.includes(idx)) {
          ans = ans.filter(i => i !== idx);
        } else if (ans.length < requiredCount) {
          ans.push(idx);
        }
        state.userAnswers[q.id] = ans;
        renderQuizQuestion();
      });
    });
  }

  if (q.type === "drag_drop") {
    attachDndDragHandlers(q, false);
  }

  const checkBtn = $("#check-answer-btn");
  if (checkBtn) {
    checkBtn.addEventListener("click", () => {
      if(q.type === 'numeric') {
        const field=document.getElementById('q-numeric-answer');
        if(!field.value.trim() || !field.reportValidity()){field.focus();return;}
      }
      state.lockedQuestions[q.id] = true;
      renderQuizQuestion();
    });
  }
}

function attachDndDragHandlers(q, locked) {
  if (locked) return;

  const chips = $all("#dnd-pool .dnd-chip");
  const targets = $all(".dnd-target");

  // click-to-place fallback (funcționează și pe mobil)
  chips.forEach(chip => {
    if (chip.classList.contains("used")) return;
    chip.addEventListener("click", () => {
      $all(".dnd-chip").forEach(c => c.classList.remove("picked"));
      if (state.dndPicked === chip.dataset.item) {
        state.dndPicked = null;
      } else {
        state.dndPicked = chip.dataset.item;
        chip.classList.add("picked");
      }
    });

    chip.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", chip.dataset.item);
    });
  });

  // scoate elementul plasat înapoi în pool, la click pe el
  $all(".dnd-target-slot .dnd-chip").forEach(chip => {
    chip.addEventListener("click", (e) => {
      e.stopPropagation();
      const zoneEl = chip.closest(".dnd-target");
      const zoneId = zoneEl.dataset.zone;
      state.dndState[q.id][zoneId] = null;
      renderQuizQuestion();
    });
  });

  targets.forEach(target => {
    target.addEventListener("dragover", (e) => {
      e.preventDefault();
      target.classList.add("dragover");
    });
    target.addEventListener("dragleave", () => target.classList.remove("dragover"));
    target.addEventListener("drop", (e) => {
      e.preventDefault();
      target.classList.remove("dragover");
      const itemId = e.dataTransfer.getData("text/plain");
      placeDndItem(q, itemId, target.dataset.zone);
    });
    target.addEventListener("click", () => {
      if (state.dndPicked) {
        placeDndItem(q, state.dndPicked, target.dataset.zone);
        state.dndPicked = null;
      }
    });
  });
}

function placeDndItem(q, itemId, zoneId) {
  if (state.lockedQuestions[q.id] || !q.dragItems.some(i => i.id === itemId) || !q.dropZones.some(z => z.id === zoneId)) return;
  const zones = state.dndState[q.id] || (state.dndState[q.id] = {});
  state.dndPicked = null;
  // un element obișnuit poate sta într-o singură casetă; unul reutilizabil poate sta în mai multe
  if (!isReusableItem(q, itemId)) {
    Object.keys(zones).forEach(z => { if (zones[z] === itemId) zones[z] = null; });
  }
  zones[zoneId] = itemId;
  renderQuizQuestion();
}

/* =====================================================================
   8) EVALUARE RĂSPUNS
   ===================================================================== */
function isAnswerCorrect(q) {
  if(q.type === "lab") return labRatio(q) === 1;
  const ans = state.userAnswers[q.id];
  if(q.type === "cloze") return Array.isArray(ans) && q.answers.every((accepted,i)=>accepted.some(a=>normalizeCloze(a)===normalizeCloze(ans[i]||'')));
  if(q.type === "numeric") return /^\d+$/.test(String(ans ?? '')) && Number(ans) === q.correct;
  if (q.type === "true_false" || q.type === "single") {
    return ans === q.correct;
  }
  if (q.type === "multiple") {
    if (!Array.isArray(ans) || ans.length !== q.correct.length) return false;
    const a = ans.slice().sort();
    const c = q.correct.slice().sort();
    return a.every((v, i) => v === c[i]);
  }
  if ((q.type === "drag_drop" || q.type === "dropdown")) {
    const zones = state.dndState[q.id];
    if (!zones) return false;
    return q.dropZones.every(z => zones[z.id] === z.correctItemId);
  }
  return false;
}

function isAnswered(q) {
  if(q.type === "cloze") return (state.userAnswers[q.id]||[]).some(v=>v?.trim());
  if(q.type === "lab") return !!state.labCode?.[q.id] && state.labCode[q.id].trim() !== q.starter.trim();
  if ((q.type === "drag_drop" || q.type === "dropdown")) {
    const zones = state.dndState[q.id];
    return zones && Object.values(zones).some(v => v !== null);
  }
  const ans = state.userAnswers[q.id];
  if (q.type === "multiple") return Array.isArray(ans) && ans.length > 0;
  return ans !== undefined;
}

/* =====================================================================
   9) NAVIGARE ÎN QUIZ
   ===================================================================== */
$("#quiz-next-btn").addEventListener("click", () => {
  if (state.currentIndex < state.quizQuestions.length - 1) {
    state.dndPicked = null;
    state.currentIndex++;
    renderQuizQuestion();
  }
});
$("#quiz-prev-btn").addEventListener("click", () => {
  if (state.currentIndex > 0) {
    state.dndPicked = null;
    state.currentIndex--;
    renderQuizQuestion();
  }
});
$("#quiz-flag-btn").addEventListener("click", () => {
  const q = currentQuestion();
  state.flagged[q.id] = !state.flagged[q.id];
  renderQuizQuestion();
});
$("#quiz-finish-btn").addEventListener("click", () => finishQuiz());

/* =====================================================================
   10) REZULTATE
   ===================================================================== */
async function finishQuiz() {
  if(state.finishing) return false;
  state.finishing = true;
  clearInterval(state.timerInterval);
  try { await gradeAttemptLabs(); } catch(e) { alert("Laboratoarele nu au putut fi evaluate. Sesiunea nu a fost încheiată. " + e.message); state.finishing=false; state.startTime=Date.now()-state.elapsedSeconds*1000; state.timerInterval=setInterval(()=>{state.elapsedSeconds=Math.floor((Date.now()-state.startTime)/1000); $("#quiz-timer").textContent=formatTime(state.elapsedSeconds);},1000); return false; }
  state.finishing=false;
  clearInterval(state.timerInterval);
  const exam = getExam(state.currentExamKey);
  const questions = state.quizQuestions;

  let correctCount = 0;
  const byChapter = {}; // chapterId -> { correct, total, name }
  const reviewData = [];

  questions.forEach(q => {
    const chName = exam.CHAPTERS.find(c => c.id === q.chapter)?.name || q.chapter;
    if (!byChapter[q.chapter]) byChapter[q.chapter] = { correct: 0, total: 0, name: chName };
    byChapter[q.chapter].total++;

    const correct = isAnswerCorrect(q);
    if (correct) { correctCount++; byChapter[q.chapter].correct++; }

    reviewData.push({ q, correct, userAnswerText: describeUserAnswer(q), correctAnswerText: describeCorrectAnswer(q) });
  });

  const total = questions.length;
  const score = calculateAttemptScore(questions);
  state.attemptScore = score;
  const pct = score.points / 10;
  const passed = score.points >= 700;

  $("#results-title").textContent = `${exam.name} — rezultat test`;
  $("#results-sub").textContent = `Mod: ${state.quizMode === "practice" ? "Exercițiu" : "Examen"} · ${total} ${questions.some(q=>q.type==="lab")?"sarcini · întrebări / laburi":"întrebări"}`;
  $("#stat-correct").textContent = correctCount;
  $("#stat-incorrect").textContent = total - correctCount;
  $("#stat-time").textContent = formatTime(state.elapsedSeconds);
  $("#score-percent").textContent = `${score.points}`;
  $("#score-pass-label").textContent = passed ? "Admis" : "Sub 700";
  $("#score-pass-label").style.color = passed ? "var(--green)" : "var(--red)";

  const ring = $("#score-ring-fill");
  const circumference = 389.6;
  ring.style.stroke = passed ? "var(--green)" : "var(--amber)";
  ring.style.strokeDashoffset = circumference - (circumference * pct) / 100;

  // breakdown pe capitole
  const breakdownEl = $("#chapter-breakdown");
  breakdownEl.innerHTML = "";
  Object.values(byChapter).forEach(c => {
    const p = Math.round((c.correct / c.total) * 100);
    const row = document.createElement("div");
    row.className = "cb-row";
    row.innerHTML = `
      <span class="cb-name">${c.name}</span>
      <span class="cb-bar"><span class="cb-bar-fill" style="width:${p}%"></span></span>
      <span class="cb-score">${c.correct}/${c.total}</span>
    `;
    breakdownEl.appendChild(row);
  });

  // listă recapitulare
  const reviewEl = $("#review-list");
  reviewEl.innerHTML = "";
  reviewData.forEach(({ q, correct, userAnswerText, correctAnswerText }, i) => {
    const item = document.createElement("div");
    item.className = "review-item " + (correct ? "right" : "wrong");
    item.innerHTML = `
      <div class="review-item-head ${correct ? "right" : "wrong"}">${correct ? ICON.check + " Corect" : ICON.x + " Greșit"} · Întrebarea ${i + 1}</div>
      <div class="review-q">${fmt(q.question)}</div>
      ${imageHtml(q, true)}
      <div class="review-answer">
        Răspunsul tău: ${userAnswerText ? fmt(userAnswerText) : "<em>fără răspuns</em>"}
        ${!correct ? `<br>Răspuns corect: ${fmt(correctAnswerText)}` : ""}
      </div>
      ${q.type === "lab" ? `<div class="ng-review-checks"><strong>${state.labResults[q.id]?.passed || 0} / ${state.labResults[q.id]?.total || 1} verificări trecute</strong>${(state.labResults[q.id]?.cases || []).map(c => `<p>${c.passed ? "✓" : "✕"} ${escapeHtml(c.name)}${c.detail ? " — " + escapeHtml(c.detail) : ""}</p>`).join("")}</div>` : ""}
      ${q.explanation ? `<div class="review-explain">${fmt(q.explanation)}</div>` : ""}
    `;
    reviewEl.appendChild(item);
  });
  attachImageZoom(reviewEl);

  state.lastResults = { reviewData };
  renderPointsDetails(score);
  showScreen("screen-results");
  return true;
}

function describeUserAnswer(q) {
  if(q.type === "cloze") return (state.userAnswers[q.id]||[]).map((v,i)=>`${i+1}: ${v||"—"}`).join("; ");
  if(q.type === "numeric") return String(state.userAnswers[q.id] ?? '');
  if(q.type === "lab") return state.labCode?.[q.id] || "";
  if (q.type === "true_false" || q.type === "single") {
    const idx = state.userAnswers[q.id];
    return idx === undefined ? "" : q.options[idx];
  }
  if (q.type === "multiple") {
    const idxs = Array.isArray(state.userAnswers[q.id]) ? state.userAnswers[q.id] : [];
    return idxs.map(i => q.options[i]).join(", ");
  }
  if ((q.type === "drag_drop" || q.type === "dropdown")) {
    const zones = state.dndState[q.id] || {};
    return q.dropZones.map(z => {
      const item = q.dragItems.find(i => i.id === zones[z.id]);
      return `${z.label}: ${item ? item.text : "—"}`;
    }).join("; ");
  }
  return "";
}

function describeCorrectAnswer(q) {
  if(q.type === "cloze") return q.answers.map((a,i)=>`${i+1}: ${a[0]}`).join("; ");
  if(q.type === "numeric") return String(q.correct);
  if(q.type === "lab") return q.solution;
  if (q.type === "true_false" || q.type === "single") {
    return q.options[q.correct];
  }
  if (q.type === "multiple") {
    return q.correct.map(i => q.options[i]).join(", ");
  }
  if ((q.type === "drag_drop" || q.type === "dropdown")) {
    return q.dropZones.map(z => {
      const item = q.dragItems.find(i => i.id === z.correctItemId);
      return `${z.label}: ${item ? item.text : "—"}`;
    }).join("; ");
  }
  return "";
}

/* =====================================================================
   11) ACȚIUNI PE PAGINA DE REZULTATE
   ===================================================================== */
$("#new-exam-btn").addEventListener("click", () => {
  renderDashboard();
  showScreen("screen-dashboard");
});

$("#retry-same-btn").addEventListener("click", () => {
  const questions = state.quizQuestions;
  restartQuizWith(questions);
});

$("#retry-incorrect-btn").addEventListener("click", () => {
  const wrongQuestions = state.quizQuestions.filter(q => !isAnswerCorrect(q));
  if (wrongQuestions.length === 0) {
    alert("Nu ai nicio întrebare greșită — felicitări!");
    return;
  }
  restartQuizWith(wrongQuestions);
});

function restartQuizWith(questions) {
  state.quizQuestions = questions;
  state.currentIndex = 0;
  state.userAnswers = {};
  state.labCode = {}; state.labResults = {};
  state.lockedQuestions = {};
  state.flagged = {};
  state.dndState = {};
  state.elapsedSeconds = 0;
  state.startTime = Date.now();
  state.attemptId = crypto.randomUUID();
  state.completedAttemptId = null;

  if (state.timerInterval) clearInterval(state.timerInterval);
  state.timerInterval = setInterval(() => {
    state.elapsedSeconds = Math.floor((Date.now() - state.startTime) / 1000);
    $("#quiz-timer").textContent = formatTime(state.elapsedSeconds);
  }, 1000);

  showScreen("screen-quiz");
  renderQuizQuestion();
}


/* =====================================================================
   12) TEMĂ + GHID — butoane din meniu / profil
   ===================================================================== */
applyTheme(getLocalTheme() || "light");
$("#theme-toggle").addEventListener("click", () => setTheme(currentTheme() === "dark" ? "light" : "dark"));
$all("[data-theme-set]").forEach(b => b.addEventListener("click", () => setTheme(b.dataset.themeSet)));
$("#guide-btn").addEventListener("click", () => showGuide(false));

/* demo din telefonul de pe prima pagină: degetul apasă exact pe răspunsuri */
(function initDemo() {
  const scr = document.getElementById("lp-demo");
  if (!scr) return;
  const finger = document.getElementById("d-finger"), next = document.getElementById("d-next"), prog = document.getElementById("d-prog-i");
  const panes = Array.from(scr.querySelectorAll(".d-pane"));
  const still = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const wait = (ms) => new Promise(r => setTimeout(r, ms));
  const visible = () => document.getElementById("screen-landing").classList.contains("active") && !document.hidden;
  const rel = (el) => { let x = 0, y = 0, n = el; while (n && n !== scr) { x += n.offsetLeft; y += n.offsetTop; n = n.offsetParent; } return { x, y, w: el.offsetWidth, h: el.offsetHeight }; };
  const moveTo = async (el, ms = 800, fx = .72, fy = .55) => {
    const p = rel(el);
    finger.style.transition = `transform ${ms}ms cubic-bezier(.4,.1,.2,1), opacity .3s`;
    finger.style.transform = `translate(${p.x + p.w * fx - 17}px, ${p.y + p.h * fy - 17}px)`;
    await wait(ms + 80);
  };
  const press = async () => { finger.classList.add("press"); await wait(260); finger.classList.remove("press"); };
  const set = (p) => { panes.forEach((el, i) => { el.style.transition = "none"; el.style.transform = `translateX(${i === p ? 0 : 110}%)`; el.classList.remove("done"); el.querySelectorAll(".d-opt").forEach(o => o.classList.remove("ok", "bad")); }); next.classList.remove("show"); };
  const slide = async (from, to) => { panes[from].style.transition = panes[to].style.transition = "transform .55s cubic-bezier(.4,.1,.2,1)"; panes[from].style.transform = "translateX(-110%)"; panes[to].style.transform = "translateX(0)"; await wait(650); };
  const answer = async (pane, wrongFirst) => {
    const opts = Array.from(pane.querySelectorAll(".d-opt")), good = opts.find(o => o.dataset.ans === "yes"), bad = opts.find(o => o.dataset.ans === "no");
    if (wrongFirst) { await moveTo(bad); await press(); bad.classList.add("bad"); await wait(700); bad.classList.remove("bad"); }
    await moveTo(good, wrongFirst ? 600 : 900); await press(); good.classList.add("ok"); pane.classList.add("done");
  };
  if (still) { panes[0].style.transform = "none"; panes[1].style.transform = "translateX(110%)"; panes[0].classList.add("done"); panes[0].querySelectorAll(".d-opt")[1].classList.add("ok"); finger.style.display = "none"; return; }
  (async function loop() {
    for (;;) {
      if (!visible()) { await wait(500); continue; }
      set(0); prog.style.width = "20%"; finger.style.opacity = "0";
      finger.style.transition = "none"; finger.style.transform = `translate(${scr.offsetWidth - 70}px, ${scr.offsetHeight - 40}px)`;
      await wait(900); finger.style.opacity = "1";
      await answer(panes[0], false); prog.style.width = "50%"; await wait(1000);
      next.classList.add("show"); await wait(250); await moveTo(next, 700, .5, .5); await press();
      await slide(0, 1); next.classList.remove("show"); await wait(400);
      await answer(panes[1], true); prog.style.width = "80%"; await wait(1300);
      next.classList.add("show"); await wait(250); await moveTo(next, 700, .5, .5); await press();
      finger.style.opacity = "0"; prog.style.width = "100%"; await wait(900);
    }
  })();
})();
/* Compact question navigator: no additional HTML/CSS files required. */
function quizAnswerStatus(q) {
  if(q.type==='lab') return isAnswered(q)?'complete':'empty';
  if(q.type==='numeric') return /^\d+$/.test(String(state.userAnswers[q.id]??''))?'complete':'empty';
  if(q.type === 'cloze'){ const a=state.userAnswers[q.id]||[];const filled=q.answers.filter((_,i)=>a[i]?.trim()).length;return filled===q.answers.length?'complete':filled?'partial':'empty';}
  if ((q.type === 'drag_drop' || q.type === 'dropdown')) {
    const zones = state.dndState[q.id] || {};
    const filled = q.dropZones.filter(z => q.dragItems.some(i => i.id === zones[z.id])).length;
    return filled === q.dropZones.length ? 'complete' : filled ? 'partial' : 'empty';
  }
  const ans = state.userAnswers[q.id];
  if (q.type === 'multiple') return Array.isArray(ans) && ans.length ? (ans.length === q.correct.length ? 'complete' : 'partial') : 'empty';
  return Number.isInteger(ans) && ans >= 0 && ans < q.options.length ? 'complete' : 'empty';
}
function setQuizSummaryOpen(open, returnFocus = false) {
  const panel = document.getElementById('quiz-summary-panel');
  const btn = document.getElementById('quiz-summary-toggle');
  if (!panel || !btn) return;
  panel.hidden = !open;
  btn.setAttribute('aria-expanded', String(open));
  if (open) {
    updateQuizSummary();
    panel.querySelector('[aria-current="step"]')?.focus();
  } else if (returnFocus) btn.focus();
}
function updateQuizSummary() {
  const dock = document.getElementById('quiz-summary-dock');
  if (!dock) return;
  const nav = document.querySelector('#screen-quiz .quiz-nav');
  if (nav && dock.parentElement !== nav) nav.prepend(dock);
  const active = document.getElementById('screen-quiz')?.classList.contains('active') && state.quizQuestions.length > 0;
  dock.hidden = !active;
  if (!active) { setQuizSummaryOpen(false); return; }
  const total = state.quizQuestions.length;
  document.getElementById('quiz-summary-toggle').textContent = `Summary · ${state.currentIndex + 1}/${total}`;
  const panel = document.getElementById('quiz-summary-panel');
  if (panel.hidden) return;
  const grid = document.getElementById('quiz-summary-grid');
  const focusedIndex = grid.contains(document.activeElement) ? document.activeElement.dataset.questionIndex : null;
  const counts = {complete:0, partial:0, empty:0};
  const labels = {complete:'Completată', partial:'Parțială', empty:'Necompletată'};
  grid.innerHTML = state.quizQuestions.map((q,i) => {
    const status = quizAnswerStatus(q); counts[status]++;
    const current = i === state.currentIndex, flag = !!state.flagged[q.id];
    return `<button type="button" class="qs-number qs-${status}${flag ? ' qs-flagged' : ''}" data-question-index="${i}"${current ? ' aria-current="step"' : ''} aria-label="Întrebarea ${i+1}: ${labels[status]}${flag ? ', marcată pentru revizuire' : ''}${current ? ', curentă' : ''}"><span>${i+1}</span><small>${flag ? 'R ' : ''}${status === 'complete' ? '✓' : status === 'partial' ? '◐' : '—'}</small></button>`;
  }).join('');
  document.getElementById('quiz-summary-position').textContent = `Întrebarea ${state.currentIndex+1} din ${total}`;
  document.getElementById('quiz-summary-stats').textContent = `${counts.complete} completate · ${counts.partial} parțiale · ${counts.empty} necompletate`;
  if (focusedIndex != null) grid.querySelector(`[data-question-index="${focusedIndex}"]`)?.focus();
}
(function initQuizSummary() {
  const style = document.createElement('style');
  style.textContent = `
    #quiz-summary-dock { position:fixed; right:20px; bottom:20px; z-index:900; font:16px/1.5 system-ui,sans-serif; color:#2c2c2b; }
    #quiz-summary-dock[hidden], #quiz-summary-panel[hidden] { display:none!important; }
    #quiz-summary-dock button { font:inherit; cursor:pointer; min-height:44px; }
    #quiz-summary-dock button:focus-visible { outline:3px solid #2783de; outline-offset:3px; }
    #quiz-summary-toggle { padding:10px 16px; border:1px solid #2466ad; border-radius:10px; background:#2466ad; color:white; box-shadow:0 4px 12px #0002; }
    #quiz-summary-panel { position:absolute; right:0; bottom:60px; width:min(360px,calc(100vw - 32px)); max-height:calc(100dvh - 112px); overflow:auto; box-sizing:border-box; padding:16px; background:#fff; border:1px solid #7d7a75; border-radius:12px; box-shadow:0 4px 12px #0002; }
    .qs-head { display:flex; align-items:center; justify-content:space-between; gap:12px; }
    #quiz-summary-close { background:transparent; border:1px solid #7d7a75; border-radius:8px; width:44px; flex-shrink:0; color:inherit; }
    #quiz-summary-stats,.qs-legend { margin:12px 0; font-size:14px; color:#555; }
    #quiz-summary-grid { display:grid; grid-template-columns:repeat(5,minmax(0,1fr)); gap:8px; max-height:min(320px,42dvh); overflow-y:auto; padding:4px; }
    .qs-number { display:flex; flex-direction:column; align-items:center; justify-content:center; border:1px solid #7d7a75; border-radius:8px; background:#f9f8f7; color:#2c2c2b; padding:4px; }
    .qs-number small { font-size:14px; line-height:1.2; }
    .qs-complete { background:#e8f1ec; border-color:#397b55; }
    .qs-partial { background:#fbebde; border-color:#976033; }
    .qs-number[aria-current] { border:3px solid #2466ad; font-weight:700; }
    .qs-legend { margin-bottom:0; }
    [data-theme="dark"] #quiz-summary-dock { color:#fff; }
    [data-theme="dark"] #quiz-summary-panel { background:#202020; border-color:#888; }
    [data-theme="dark"] .qs-number { background:#303030; color:#fff; border-color:#999; }
    [data-theme="dark"] .qs-complete { background:#264634; border-color:#72bc8f; }
    [data-theme="dark"] .qs-partial { background:#4f3627; border-color:#de9255; }
    [data-theme="dark"] .qs-number[aria-current] { border-color:#5e9fe8; }
    [data-theme="dark"] #quiz-summary-stats,[data-theme="dark"] .qs-legend { color:#ddd; }
    #screen-quiz { padding-bottom:88px; }
    @media(max-width:480px) { #quiz-summary-dock { right:16px; bottom:16px; } }
  `;
  document.head.appendChild(style);
  const dock = document.createElement('aside'); dock.id = 'quiz-summary-dock'; dock.hidden = true;
  dock.setAttribute('aria-label','Navigare între întrebări');
  dock.innerHTML = `<section id="quiz-summary-panel" aria-label="Summary — întrebările testului" hidden><div class="qs-head"><strong id="quiz-summary-position"></strong><button type="button" id="quiz-summary-close" aria-label="Închide Summary">×</button></div><p id="quiz-summary-stats"></p><nav id="quiz-summary-grid" aria-label="Alege întrebarea"></nav><p class="qs-legend">✓ Completată · ◐ Parțială · — Necompletată<br>R = Marcată · contur albastru = curentă</p></section><button type="button" id="quiz-summary-toggle" aria-controls="quiz-summary-panel" aria-expanded="false">Summary</button>`;
  document.body.appendChild(dock);
  document.getElementById('quiz-summary-toggle').addEventListener('click', () => setQuizSummaryOpen(document.getElementById('quiz-summary-panel').hidden));
  document.getElementById('quiz-summary-close').addEventListener('click', () => setQuizSummaryOpen(false,true));
  document.getElementById('quiz-summary-grid').addEventListener('click', e => {
    const btn = e.target.closest('[data-question-index]'); if (!btn) return;
    const index = Number(btn.dataset.questionIndex);
    if (!Number.isInteger(index) || index < 0 || index >= state.quizQuestions.length) return;
    state.currentIndex = index; state.dndPicked = null;
    renderQuizQuestion();
    if (window.saveSession) window.saveSession();
    setQuizSummaryOpen(false,true);
  });
  document.addEventListener('keydown', e => { if(e.key === 'Escape' && !document.getElementById('quiz-summary-panel').hidden) setQuizSummaryOpen(false,true); });
  document.addEventListener('click', e => { if(!dock.contains(e.target)) setQuizSummaryOpen(false); });
  updateQuizSummary();
})();
