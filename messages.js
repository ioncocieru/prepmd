/* =====================================================================
   MESAJE: clopoțel în antet + panou. Două tipuri de mesaje:
   1) automate, când utilizatorul atinge un prag (primul video, 5 zile la rând etc.)
   2) trimise de administrator din panoul de administrare.
   Se încarcă după progress.js, portal.js și streak.js. SQL: prep_messages.sql
   ===================================================================== */
(() => {
  "use strict";
  const READY_POINTS = 800;               // punctaj la test (din 1000) de la care apare „Ești gata de examen”
  const STREAKS = [3, 5, 10, 20, 30];     // pragurile pentru zilele la rând
  const TEST_COUNTS = [5, 10, 25];

  const S = { uid: null, rows: [], keys: new Set(), loaded: false, busy: false, streak: 0, timer: null, panel: null, opener: null };
  const esc = (t) => String(t ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const uid = () => (typeof currentUserId !== "undefined" && currentUserId) || null;
  const rpc = async (name, args = {}) => { const { data, error } = await sb.rpc(name, args); if (error) throw error; return data; };
  const unread = () => S.rows.filter((m) => !m.read_at).length;

  /* ---------- catalog de mesaje automate ---------- */
  function catalog(stats, streak) {
    const out = [];
    const add = (key, title, body) => out.push({ key, title, body });
    const exams = Object.entries(stats || {});
    let tests = 0, any = false;
    exams.forEach(([k, e]) => {
      tests += e.tests || 0;
      if (e.c.watched > 0 || e.q.answered > 0 || e.tests > 0) any = true;
      const n = e.name;
      if (e.c.watched >= 1) add(`first_video:${k}`, "Aici este începutul", `Ai început cursul ${n}. Continuă tot așa: câte un video pe zi te duce departe.`);
      if (e.c.total && e.c.watched / e.c.total >= 0.5) add(`course_half:${k}`, "Jumătate din curs", `Ai parcurs jumătate din cursul ${n}. Mai ai puțin până la final.`);
      if (e.c.done) add(`course_done:${k}`, "Felicitări, ai terminat cursul!", `Ai terminat cursul ${n}. Diploma ta este în cont, în Profil.`);
      if (e.q.total && e.q.answered / e.q.total >= 0.5) add(`q_half:${k}`, "Jumătate din întrebări", `Ai parcurs jumătate din întrebările ${n}. Ești pe drumul bun.`);
      if (e.q.done) add(`q_done:${k}`, "Ai parcurs toate întrebările", `Certificatul pentru întrebările ${n} este în Profil. Încearcă acum un test în regim examen.`);
      if (e.q.done && (!e.c.total || e.c.done) && e.bestPoints >= READY_POINTS)
        add(`ready:${k}`, "Ești gata de examen", `Ai terminat cursul și întrebările la ${n}, iar cel mai bun scor la test este ${e.bestPoints} / 1000. Poți programa examenul oficial Certiport la un centru autorizat.`);
    });
    if (tests >= 1) add("first_test", "Primul test terminat", "Ai terminat primul test. Uită-te la întrebările greșite și revino la ele, așa înveți cel mai repede.");
    TEST_COUNTS.forEach((n) => { if (tests >= n) add(`tests:${n}`, `${n} teste terminate`, `Ai terminat ${n} teste. Exersarea regulată face diferența la examen.`); });
    STREAKS.forEach((n) => { if (streak >= n) add(`streak:${n}`, `${n} zile la rând`, `Felicitări pentru ${n} zile pe platforma noastră. Continuă tot așa!`); });
    return { list: out, any };
  }

  async function evaluate() {
    if (S.busy || !S.loaded || !S.uid || uid() !== S.uid) return;
    const stats = window.PrepStats && window.PrepStats.get();
    if (!stats) return;
    S.busy = true;
    try {
      const { list, any } = catalog(stats, S.streak);
      const flag = "prep_msgs_init_" + S.uid;
      let first = false;
      try { first = !localStorage.getItem(flag) && !S.rows.some((m) => m.kind === "auto"); } catch (_) {}
      if (!S.keys.has("welcome") && !any) list.unshift({ key: "welcome", title: "Bine ai venit pe Prep.", body: "Începe cu primul video din curs, apoi exersează întrebările. Revino în fiecare zi: chiar și 15 minute contează." });
      for (const m of list) {
        if (S.keys.has(m.key)) continue;
        // utilizatorii existenți nu primesc dintr-odată toate felicitările vechi: le păstrăm, dar citite
        const silent = first && any;
        S.keys.add(m.key);
        try {
          const row = await rpc("prep_claim_message", { p_key: m.key, p_title: m.title, p_body: m.body, p_silent: silent });
          if (row) { S.rows.unshift(row); if (!silent) notify(row); }
        } catch (e) { S.keys.delete(m.key); console.warn("Mesaj automat indisponibil:", e.message || e); break; }
      }
      try { localStorage.setItem(flag, "1"); } catch (_) {}
      paintBadges(); if (S.panel && !S.panel.hidden) paintPanel();
    } finally { S.busy = false; }
  }

  /* ---------- încărcare ---------- */
  async function load() {
    const id = uid(); if (!id) return;
    if (S.uid !== id) { S.uid = id; S.rows = []; S.keys = new Set(); S.loaded = false; }
    try {
      const d = await rpc("prep_my_messages", { p_limit: 60 });
      if (uid() !== id) return;
      const fresh = (d.rows || []).filter((r) => S.loaded && !S.rows.some((x) => x.id === r.id) && !r.read_at && r.kind === "admin");
      S.rows = d.rows || []; S.keys = new Set(S.rows.map((r) => r.msg_key).filter(Boolean)); S.loaded = true;
      paintBadges(); if (S.panel && !S.panel.hidden) paintPanel();
      fresh.slice(0, 2).forEach(notify);
      evaluate();
    } catch (e) { console.warn("Mesajele nu sunt disponibile (rulează prep_messages.sql):", e.message || e); }
  }
  function start() {
    if (!uid()) { S.uid = null; S.rows = []; S.loaded = false; paintBadges(); return; }
    load();
    if (!S.timer) S.timer = setInterval(() => { if (!document.hidden) load(); }, 120000);
  }

  /* ---------- afișare ---------- */
  const bell = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9a6 6 0 1 1 12 0c0 5 2 6.5 2 6.5H4S6 14 6 9z"/><path d="M10 19a2 2 0 0 0 4 0"/></svg>';
  const iconFor = (m) => m.kind === "admin"
    ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 11v2a1 1 0 0 0 1 1h2l5 4V6L7 10H5a1 1 0 0 0-1 1z"/><path d="M16 9a4 4 0 0 1 0 6"/></svg>'
    : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 4h8v5a4 4 0 0 1-8 0z"/><path d="M8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M9 20h6"/></svg>';
  function ago(t) {
    const s = Math.max(0, (Date.now() - new Date(t).getTime()) / 1000);
    if (s < 60) return "acum";
    if (s < 3600) return `acum ${Math.floor(s / 60)} min`;
    if (s < 86400) { const h = Math.floor(s / 3600); return `acum ${h} ${h === 1 ? "oră" : "ore"}`; }
    if (s < 604800) { const d = Math.floor(s / 86400); return `acum ${d} ${d === 1 ? "zi" : "zile"}`; }
    return new Date(t).toLocaleDateString("ro-RO", { day: "numeric", month: "short", year: "numeric" });
  }
  function paintBadges() {
    const n = unread();
    document.querySelectorAll("[data-msg-btn]").forEach((b) => {
      if (!b.querySelector("svg")) b.insertAdjacentHTML("afterbegin", bell);
      let badge = b.querySelector("[data-msg-badge]");
      if (!badge) { badge = document.createElement("span"); badge.className = "msg-badge"; badge.setAttribute("data-msg-badge", ""); b.appendChild(badge); }
      badge.hidden = !n; badge.textContent = n > 9 ? "9+" : String(n);
      b.setAttribute("aria-label", n ? `Mesaje, ${n} necitite` : "Mesaje");
      b.title = n ? `Mesaje (${n} necitite)` : "Mesaje";
    });
  }
  function ensurePanel() {
    if (S.panel) return S.panel;
    const p = document.createElement("div");
    p.id = "msg-panel"; p.className = "msg-panel"; p.hidden = true; p.setAttribute("role", "dialog"); p.setAttribute("aria-label", "Mesaje");
    p.innerHTML = '<div class="msg-head"><strong>Mesaje</strong><button type="button" class="msg-readall">Marchează toate ca citite</button><button type="button" class="msg-x" aria-label="Închide">×</button></div><div class="msg-list"></div>';
    document.body.appendChild(p);
    p.querySelector(".msg-x").onclick = closePanel;
    p.querySelector(".msg-readall").onclick = () => markRead(null);
    p.querySelector(".msg-list").addEventListener("click", (e) => { const it = e.target.closest("[data-mid]"); if (it) markRead([it.dataset.mid]); });
    S.panel = p; return p;
  }
  function paintPanel() {
    const p = ensurePanel(), list = p.querySelector(".msg-list");
    p.querySelector(".msg-readall").hidden = !unread();
    if (!S.rows.length) { list.innerHTML = '<div class="msg-empty"><span>' + bell + '</span><p>Nu ai mesaje încă.</p><small>Aici vei primi încurajări, felicitări pentru progres și vești de la echipa Prep.</small></div>'; return; }
    list.innerHTML = S.rows.map((m) => `<button type="button" class="msg-item${m.read_at ? "" : " is-new"}" data-mid="${esc(m.id)}"><span class="msg-ico ${m.kind}">${iconFor(m)}</span><span class="msg-txt"><span class="msg-top"><b>${esc(m.title)}</b>${m.kind === "admin" ? '<em>Echipa Prep.</em>' : ""}</span><span class="msg-body">${esc(m.body)}</span><time>${ago(m.created_at)}</time></span></button>`).join("");
  }
  function openPanel(opener) {
    const p = ensurePanel(); S.opener = opener; paintPanel(); p.hidden = false;
    const r = opener.getBoundingClientRect();
    if (innerWidth > 640) { p.style.top = Math.round(r.bottom + 10) + "px"; p.style.right = Math.max(12, Math.round(innerWidth - r.right - 10)) + "px"; p.style.left = "auto"; }
    else { p.style.top = ""; p.style.right = ""; p.style.left = ""; }
    p.classList.add("is-open"); opener.setAttribute("aria-expanded", "true");
    document.documentElement.classList.toggle("msg-sheet-open", innerWidth <= 640);
  }
  function closePanel() {
    if (!S.panel || S.panel.hidden) return;
    S.panel.hidden = true; S.panel.classList.remove("is-open"); document.documentElement.classList.remove("msg-sheet-open");
    if (S.opener) { S.opener.setAttribute("aria-expanded", "false"); S.opener.focus?.(); }
    if (unread()) markRead(null);
  }
  async function markRead(ids) {
    const now = new Date().toISOString();
    S.rows.forEach((m) => { if (!m.read_at && (!ids || ids.includes(m.id))) m.read_at = now; });
    paintBadges(); if (S.panel && !S.panel.hidden) paintPanel();
    try { await rpc("prep_mark_messages_read", { p_ids: ids }); } catch (_) {}
  }
  function notify(row) {
    const t = document.createElement("button");
    t.type = "button"; t.className = "msg-toast"; t.innerHTML = `<span class="msg-ico ${row.kind}">${iconFor(row)}</span><span><b>${esc(row.title)}</b><small>${esc(row.body)}</small></span>`;
    t.onclick = () => { t.remove(); const b = document.querySelector("[data-msg-btn]"); if (b) openPanel(b); };
    document.body.appendChild(t); requestAnimationFrame(() => t.classList.add("in"));
    setTimeout(() => { t.classList.remove("in"); setTimeout(() => t.remove(), 400); }, 7000);
  }

  /* ---------- evenimente ---------- */
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-msg-btn]");
    if (b) { e.preventDefault(); (S.panel && !S.panel.hidden) ? closePanel() : openPanel(b); return; }
    if (S.panel && !S.panel.hidden && !e.target.closest("#msg-panel")) closePanel();
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closePanel(); });
  let deb = null;
  window.addEventListener("prep-progress", () => { clearTimeout(deb); deb = setTimeout(() => { if (!S.loaded) start(); else evaluate(); }, 900); });
  window.addEventListener("prep-streak", (e) => { S.streak = Number(e.detail && e.detail.days) || 0; if (S.loaded) evaluate(); else start(); });
  document.addEventListener("visibilitychange", () => { if (!document.hidden) start(); });
  new MutationObserver(() => { if (document.querySelector("[data-msg-btn]:not(:has([data-msg-badge]))")) paintBadges(); }).observe(document.body, { childList: true, subtree: true });
  document.getElementById("logout-btn")?.addEventListener("click", () => { closePanel(); S.uid = null; S.rows = []; S.keys = new Set(); S.loaded = false; paintBadges(); });
  setTimeout(() => { paintBadges(); start(); }, 1200);
  window.PrepMessages = { reload: load, open: () => { const b = document.querySelector("[data-msg-btn]"); if (b) openPanel(b); } };
})();
