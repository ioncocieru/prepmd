/* PREP. — pagina de prezentare: apariție la derulare + secțiunea „Cum înveți” */
(function () {
  var root = document.getElementById("screen-landing");
  if (!root) return;
  var still = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $$ = function (s, c) { return Array.prototype.slice.call((c || root).querySelectorAll(s)); };

  var rev = $$(".lx-r");
  if (still || !("IntersectionObserver" in window)) rev.forEach(function (el) { el.classList.add("in"); });
  else {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.1 });
    rev.forEach(function (el) { io.observe(el); });
  }

  var caps = ["Cursul video", "Modul exercițiu", "Modul examen", "Rezultatul simulării", "Ziua examenului"];
  var steps = $$(".lx-jstep"), stage = root.querySelector(".lx-jstage");
  var screens = stage ? $$(".lx-scr", stage) : [];
  var cap = document.getElementById("lx-cap"), fill = document.getElementById("lx-rail-fill"), rail = root.querySelector(".lx-rail");

  /* pe telefon fiecare pas își primește ecranul sub text */
  steps.forEach(function (s, i) {
    if (!screens[i]) return;
    var box = document.createElement("div");
    box.className = "lx-jvis"; box.setAttribute("aria-hidden", "true");
    var f = document.createElement("div"); f.className = "lx-frame";
    var c = screens[i].cloneNode(true); c.classList.add("active");
    f.appendChild(c); box.appendChild(f); s.appendChild(box);
  });

  var cur = -1;
  function setStep(n) {
    if (n === cur) return; cur = n;
    steps.forEach(function (s, i) { s.classList.toggle("on", i === n); s.classList.toggle("past", i < n); });
    screens.forEach(function (s, i) { s.classList.toggle("active", i === n); });
    if (cap) cap.textContent = caps[n] || "";
  }
  setStep(0);

  var ticking = false;
  function update() {
    ticking = false;
    if (!root.classList.contains("active") || !steps.length) return;
    var mid = window.innerHeight / 2, best = 0, bd = Infinity;
    steps.forEach(function (s, i) {
      var r = s.getBoundingClientRect(), d = (r.top < mid && r.bottom > mid) ? 0 : Math.abs((r.top + r.bottom) / 2 - mid);
      if (d < bd) { bd = d; best = i; }
    });
    setStep(best);
    if (fill && rail) {
      var rr = rail.getBoundingClientRect();
      fill.style.height = Math.max(0, Math.min(rr.height, mid - rr.top)) + "px";
    }
  }
  function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  update();
})();
