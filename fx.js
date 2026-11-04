/* Subtle motion & interaction effects. Delete the <script src="fx.js"> line in index.html to turn them all off. */
(function () {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  if (reduce) return;

  /* ---------- hero entrance: words slide up ---------- */
  const name = document.querySelector(".hero__name");
  if (name) {
    name.innerHTML = name.textContent.trim().split(/\s+/)
      .map((w, i) => `<span class="fx-word"><span style="animation-delay:${0.15 + i * 0.12}s">${w}</span></span>`).join(" ");
  }
  document.body.classList.add("fx-ready");

  /* ---------- cursor follower (desktop only) ---------- */
  if (finePointer) {
    const ring = document.createElement("div");
    ring.className = "fx-cursor";
    document.body.appendChild(ring);
    let x = innerWidth / 2, y = innerHeight / 2, rx = x, ry = y, shown = false;
    addEventListener("pointermove", (e) => {
      x = e.clientX; y = e.clientY;
      if (!shown) { rx = x; ry = y; ring.classList.add("is-on"); shown = true; }
      const hot = e.target.closest("a, button, .work, [data-showreel]");
      ring.classList.toggle("is-hot", !!hot);
    });
    document.addEventListener("pointerleave", () => { ring.classList.remove("is-on"); shown = false; });
    (function loop() {
      rx += (x - rx) * 0.18; ry += (y - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px)`;
      requestAnimationFrame(loop);
    })();

    /* magnetic buttons */
    $$(".btn, .reel-btn").forEach((b) => {
      b.addEventListener("pointermove", (e) => {
        const r = b.getBoundingClientRect();
        b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.15}px, ${(e.clientY - r.top - r.height / 2) * 0.25}px)`;
      });
      b.addEventListener("pointerleave", () => { b.style.transform = ""; });
    });
  }

  /* ---------- staggered card reveal (also after tab change) ---------- */
  const io = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add("fx-in"); io.unobserve(en.target); }
  }), { threshold: 0.15 });
  function prepCards() {
    $$(".work:not(.fx-card), .works__empty:not(.fx-card), .job:not(.fx-card), .skill:not(.fx-card), .edu li:not(.fx-card), .group__head:not(.fx-card)")
      .forEach((el) => {
        const sib = [...el.parentElement.children].indexOf(el);
        el.classList.add("fx-card");
        el.style.transitionDelay = `${Math.min(sib, 5) * 70}ms`;
        io.observe(el);
      });
  }
  prepCards();
  const groups = document.getElementById("workGroups");
  if (groups) new MutationObserver(prepCards).observe(groups, { childList: true });

  /* ---------- subtle tilt on work thumbnails ---------- */
  if (finePointer) {
    document.addEventListener("pointermove", (e) => {
      const t = e.target.closest(".work__thumb");
      $$(".work__thumb.is-tilt").forEach((el) => { if (el !== t) { el.classList.remove("is-tilt"); el.style.transform = ""; } });
      if (!t) return;
      const r = t.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5;
      t.classList.add("is-tilt");
      t.style.transform = `perspective(900px) rotateY(${px * 5}deg) rotateX(${-py * 5}deg)`;
      t.style.setProperty("--mx", `${(px + 0.5) * 100}%`);
      t.style.setProperty("--my", `${(py + 0.5) * 100}%`);
    });
  }
})();
