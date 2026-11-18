/* =====================================================================
   OBIECTIV ZILNIC + PLAN PÂNĂ LA EXAMEN (panoul cu examene)
   - inel de progres: câte întrebări ai parcurs azi din câte ți-ai propus
   - plan: introduci data examenului și vezi câte întrebări pe zi îți trebuie
   Datele se salvează în profil (progress.js -> window.PrepGoal), deci le ai pe orice dispozitiv.
   ===================================================================== */
(() => {
  "use strict";
  const PRESETS = [10, 20, 30, 50];
  const DAY = 864e5;
  const S = { streak: 0, lastCount: null, dlg: null };
  const esc = (t) => String(t ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const plural = (n, one, many) => n === 1 ? `1 ${one}` : (n === 0 || (n % 100 >= 1 && n % 100 <= 19)) ? `${n} ${many}` : `${n} de ${many}`;   // 1 zi, 5 zile, 82 de zile
  const roundUp5 = (n) => Math.max(5, Math.ceil(n / 5) * 5);

  function remaining() {
    const s = window.PrepStats && window.PrepStats.get();
    if (!s) return null;
    return Object.values(s).reduce((a, e) => a + Math.max(0, e.q.total - e.q.answered), 0);
  }
  function plan(examDate, left) {
    if (!examDate) return null;
    const today = new Date(window.PrepGoal.today() + "T00:00:00"), exam = new Date(examDate + "T00:00:00");
    const days = Math.round((exam - today) / DAY);
    return { days, needed: days > 0 && left > 0 ? Math.ceil(left / days) : 0, date: exam };
  }
  const fmtDate = (d) => d.toLocaleDateString("ro-RO", { day: "numeric", month: "long" });

  /* ---------- text pentru plan (folosit și în card, și în fereastră) ---------- */
  function planText(p, left, per) {
    if (!p) return { main: "Adaugă data examenului ca să-ți calculăm ritmul potrivit.", action: null };
    if (p.days < 0) return { main: "Data examenului a trecut. Alege o dată nouă.", action: null };
    if (p.days === 0) return { main: "Examenul este azi. Mult succes!", action: null };
    if (left === 0) return { main: `Examen: ${fmtDate(p.date)}, peste ${plural(p.days, "zi", "zile")}. Ai parcurs deja toate întrebările: folosește timpul pentru teste în regim examen.`, action: null };
    const main = `În ${plural(p.days, "zi", "zile")} ai nevoie de ${plural(p.needed, "întrebare", "întrebări")} pe zi ca să le parcurgi pe toate (mai ai ${left}).`;
    if (per && per >= p.needed) return { main, note: "Ești în grafic cu obiectivul tău.", action: null };
    return { main, note: per ? "Obiectivul tău de acum e sub acest ritm." : "", action: roundUp5(p.needed) };
  }

  /* ---------- indicator în antetul panoului (sub „Bine ai revenit”) ---------- */
  function ensure() {
    const host = document.getElementById("welcome-title")?.parentElement;
    if (!host) return null;
    document.getElementById("goal-card")?.remove();            // versiunea veche, dacă mai există în pagină
    let c = document.getElementById("goal-pill");
    if (!c) {
      c = document.createElement("button");
      c.type = "button"; c.id = "goal-pill"; c.className = "goal-pill"; c.setAttribute("data-goal-open", "");
      host.appendChild(c);
      c.addEventListener("click", openDialog);
    }
    return c;
  }
  const ring = (cnt, per, done) => {
    const r = 15, len = 2 * Math.PI * r, pct = Math.min(1, per ? cnt / per : 0);
    return `<svg class="gp-ring" viewBox="0 0 38 38" aria-hidden="true"><circle cx="19" cy="19" r="${r}" class="gr-bg"/><circle cx="19" cy="19" r="${r}" class="gr-fg" stroke-dasharray="${len.toFixed(1)}" stroke-dashoffset="${(len * (1 - pct)).toFixed(1)}" transform="rotate(-90 19 19)"/>${done ? '<path d="M12.5 19.5l4.5 4.5 8.5-9.5" class="gr-ok"/>' : ""}</svg>`;
  };
  const chev = '<svg class="gp-chev" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  function subLine(p, left, per) {
    if (!p) return { t: "Adaugă data examenului pentru plan", warn: false };
    if (p.days < 0) return { t: "Data examenului a trecut", warn: false };
    if (p.days === 0) return { t: "Examenul este azi", warn: false };
    if (left === 0) return { t: "Ai parcurs toate întrebările", warn: false };
    return { t: `Ritm recomandat: ${p.needed} pe zi · examen în ${plural(p.days, "zi", "zile")}`, warn: per < p.needed };
  }
  function render() {
    const c = ensure(); if (!c) return;
    const info = window.PrepGoal && window.PrepGoal.get(), left = remaining();
    if (!info || left === null || !Object.keys(window.PrepStats.get() || {}).length) { c.hidden = true; return; }
    c.hidden = false;
    const g = info.goal, per = g && g.perDay ? Number(g.perDay) : 0, cnt = info.count;
    if (!per) {
      c.className = "goal-pill is-empty";
      c.setAttribute("aria-label", "Setează un obiectiv zilnic");
      c.innerHTML = `<svg class="gp-ring" viewBox="0 0 38 38" aria-hidden="true"><circle cx="19" cy="19" r="15" class="gr-bg"/><circle cx="19" cy="19" r="9" class="gr-bg"/><circle cx="19" cy="19" r="2.5" class="gr-dot"/></svg><span class="gp-text"><span class="gp-main">Setează un obiectiv zilnic</span><span class="gp-sub">Câte întrebări vrei să parcurgi pe zi</span></span>${chev}`;
      return;
    }
    const done = cnt >= per, p = plan(g.examDate, left), sl = subLine(p, left, per);
    if (S.lastCount !== null && S.lastCount < per && cnt >= per) toast(cnt);
    S.lastCount = cnt;
    c.className = "goal-pill" + (done ? " is-done" : "");
    c.setAttribute("aria-label", `Obiectiv zilnic: ${cnt} din ${per} întrebări azi. ${sl.t}. Modifică`);
    c.innerHTML = `${ring(cnt, per, done)}<span class="gp-text"><span class="gp-main">Obiectiv de azi <b>${cnt} / ${per}</b> întrebări</span><span class="gp-sub${sl.warn ? " warn" : ""}">${esc(sl.t)}</span></span>${chev}`;
  }
  function toast(n) {
    const t = document.createElement("div");
    t.className = "goal-toast"; t.setAttribute("role", "status");
    t.innerHTML = `<b>Obiectiv atins azi</b><span>Ai parcurs ${plural(n, "întrebare", "întrebări")}. Bravo!</span>`;
    document.body.appendChild(t); requestAnimationFrame(() => t.classList.add("in"));
    setTimeout(() => { t.classList.remove("in"); setTimeout(() => t.remove(), 400); }, 5000);
  }

  /* ---------- fereastra de setare ---------- */
  function openDialog() {
    const cur = (window.PrepGoal.get() || {}).goal || {}, per = Number(cur.perDay) || 20, today = window.PrepGoal.today();
    let d = S.dlg; if (!d) { d = S.dlg = document.createElement("dialog"); d.className = "goal-dialog"; document.body.appendChild(d); d.addEventListener("click", (e) => { if (e.target === d) d.close(); }); }
    d.innerHTML = `<form method="dialog" class="goal-form"><button type="button" class="goal-x" aria-label="Închide" data-x>×</button>
      <span class="goal-k">OBIECTIV ȘI PLAN</span><h3>Cât vrei să exersezi?</h3>
      <fieldset><legend>Întrebări pe zi</legend><div class="goal-chips">${PRESETS.map((n) => `<button type="button" class="goal-chip${n === per ? " on" : ""}" data-per="${n}">${n}</button>`).join("")}<label class="goal-custom">Altă valoare<input type="number" name="per" min="1" max="200" value="${per}" inputmode="numeric" required></label></div></fieldset>
      <label class="goal-date">Data examenului (opțional)<input type="date" name="date" min="${today}" value="${cur.examDate || ""}"></label>
      <p class="goal-preview" id="goal-preview" role="status"></p>
      <div class="goal-acts"><button type="submit" class="goal-btn goal-btn-p">Salvează</button><button type="button" class="goal-btn" data-x>Anulează</button>${cur.perDay ? '<button type="button" class="goal-link danger" data-clear>Șterge obiectivul</button>' : ""}</div></form>`;
    const f = d.querySelector("form"), per$ = f.per, date$ = f.date, prev = d.querySelector("#goal-preview");
    const upd = () => {
      const left = remaining() ?? 0, p = plan(date$.value || null, left), pt = planText(p, left, Number(per$.value) || 0);
      d.querySelectorAll(".goal-chip").forEach((b) => b.classList.toggle("on", Number(b.dataset.per) === Number(per$.value)));
      prev.innerHTML = `${esc(pt.main)}${pt.note ? ` <small>${esc(pt.note)}</small>` : ""}${pt.action ? ` <button type="button" class="goal-link" data-use="${pt.action}">Folosește ${pt.action} pe zi</button>` : ""}`;
    };
    f.addEventListener("input", upd);
    f.addEventListener("click", (e) => {
      const chip = e.target.closest("[data-per]"); if (chip) { per$.value = chip.dataset.per; upd(); return; }
      const use = e.target.closest("[data-use]"); if (use) { per$.value = use.dataset.use; upd(); return; }
      if (e.target.closest("[data-x]")) d.close();
      if (e.target.closest("[data-clear]")) { window.PrepGoal.set(null); d.close(); }
    });
    f.addEventListener("submit", (e) => {
      e.preventDefault();
      const n = Math.max(1, Math.min(200, Math.round(Number(per$.value) || 0)));
      window.PrepGoal.set({ perDay: n, examDate: date$.value || null }); d.close();
    });
    upd(); if (!d.open) d.showModal(); per$.focus();
  }

  window.addEventListener("prep-progress", () => requestAnimationFrame(render));
  window.addEventListener("prep-streak", (e) => { S.streak = Number(e.detail && e.detail.days) || 0; render(); });
  setTimeout(render, 1500);
})();
