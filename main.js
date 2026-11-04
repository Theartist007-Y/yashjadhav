/* Renders the page from content.js — you normally don't need to edit this file. */
(function () {
  const S = window.SITE || SITE;
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => [...document.querySelectorAll(sel)];
  const esc = (v) => String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const src = (p) => esc(encodeURI(p || ""));
  const get = (path) => path.split(".").reduce((o, k) => (o ? o[k] : ""), S);
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------- simple text bindings ---------------- */
  $$("[data-bind]").forEach((el) => { el.textContent = get(el.dataset.bind) || ""; });
  document.title = `${S.name} — ${S.role}`;
  $("#year").textContent = new Date().getFullYear();
  if (!S.availability) $(".hero__status").hidden = true;
  if (S.resumeFile) { const r = $("#resumeBtn"); r.href = S.resumeFile; r.hidden = false; }
  const job = (S.experience || [])[0];
  if (job) $("#expFact").textContent = `${job.title}, ${job.company}${job.current ? " · Present" : ` · ${job.period}`}`;
  else $("#expFact").parentElement.hidden = true;

  /* ---------------- hero background videos (play one after another) ---------------- */
  const heroList = (S.heroVideos || []).filter(Boolean);
  const hv = $("#heroVideo");
  if (heroList.length && !reduceMotion) {
    let h = 0;
    const playHero = () => { hv.src = encodeURI(heroList[h]); hv.play().catch(() => {}); };
    hv.addEventListener("ended", () => { h = (h + 1) % heroList.length; playHero(); });
    hv.addEventListener("error", () => { if (heroList.length > 1) { h = (h + 1) % heroList.length; playHero(); } });
    playHero();
  } else hv.remove();

  /* ---------------- video helpers ---------------- */
  const isFile = (url) => /\.(mp4|webm|mov|m4v)(\?|$)/i.test(url || "");
  function embedUrl(url) {
    if (!url) return "";
    const vm = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
    if (vm) return `https://player.vimeo.com/video/${vm[1]}?autoplay=1&title=0&byline=0&portrait=0`;
    const yt = url.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/);
    if (yt) return `https://www.youtube.com/embed/${yt[1]}?autoplay=1&rel=0`;
    return "";
  }
  function videoHTML(url) {
    if (isFile(url)) return `<video src="${src(url)}" controls autoplay playsinline></video>`;
    const e = embedUrl(url);
    return e ? `<iframe src="${e}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>` : "";
  }

  /* ---------------- about ---------------- */
  const photo = $("#photo"); photo.src = S.photo; photo.alt = S.name;
  $("#aboutText").innerHTML = (S.about || []).map((p) => `<p>${esc(p)}</p>`).join("");
  $("#languages").textContent = (S.languages || []).join(", ");

  /* ---------------- experience ---------------- */
  $("#experienceList").innerHTML = (S.experience || []).map((j) => `
    <article class="job reveal">
      <div class="job__period">${j.current ? `<span class="job__current">Present</span><small>${esc(j.period)}</small>` : esc(j.period)}</div>
      <div>
        <h3 class="job__title">${esc(j.title)}</h3>
        <p class="job__company">${esc(j.company)}${j.location ? ` <span>· ${esc(j.location)}</span>` : ""}</p>
        <ul class="job__points">${(j.points || []).map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
      </div>
    </article>`).join("");

  /* ---------------- skills & education ---------------- */
  const skills = S.skills || [];
  const chips = (s) => (s.details || []).map((d) => `<li>${esc(d)}</li>`).join("");
  $("#skillsList").innerHTML = skills.map((s, i) => `
    <li class="skill" data-skill="${i}" tabindex="0">
      <div class="skill__row">
        <span class="skill__num">${String(i + 1).padStart(2, "0")}</span>
        <strong class="skill__name">${esc(s.name)}</strong>
        <span class="skill__area">${esc(s.area || s.note || "")}</span>
        <span class="skill__arrow" aria-hidden="true"></span>
      </div>
      <div class="skill__more"><div>
        ${s.summary ? `<p>${esc(s.summary)}</p>` : ""}
        <ul class="skill__chips">${chips(s)}</ul>
      </div></div>
    </li>`).join("");

  const panel = $("#skillPanel");
  let curSkill = -1;
  function showSkill(i) {
    if (i === curSkill || !skills[i]) return;
    curSkill = i;
    const s = skills[i];
    $$(".skill").forEach((el) => el.classList.toggle("is-active", +el.dataset.skill === i));
    panel.innerHTML = `
      <div class="skillpanel__inner">
        <span class="skillpanel__num">${String(i + 1).padStart(2, "0")} / ${String(skills.length).padStart(2, "0")}</span>
        <h4 class="skillpanel__name">${esc(s.name)}</h4>
        <span class="skillpanel__area">${esc(s.area || "")}</span>
        ${s.summary ? `<p class="skillpanel__summary">${esc(s.summary)}</p>` : ""}
        <span class="fact__label">What I do</span>
        <ul class="skillpanel__list">${chips(s)}</ul>
      </div>`;
  }
  if (skills.length) showSkill(0);
  const skillList = $("#skillsList");
  skillList.addEventListener("mouseover", (e) => { const li = e.target.closest(".skill"); if (li) showSkill(+li.dataset.skill); });
  skillList.addEventListener("focusin", (e) => { const li = e.target.closest(".skill"); if (li) showSkill(+li.dataset.skill); });
  skillList.addEventListener("click", (e) => {            // mobile: tap to open/close
    const li = e.target.closest(".skill"); if (!li) return;
    const open = li.classList.contains("is-open");
    $$(".skill").forEach((el) => el.classList.remove("is-open"));
    if (!open) li.classList.add("is-open");
    showSkill(+li.dataset.skill);
  });
  $("#eduList").innerHTML = (S.education || []).map((e) => `
    <li>${e.note ? `<span class="edu__note">${esc(e.note)}</span>` : ""}
      <strong>${esc(e.title)}</strong><span class="edu__place">${esc(e.place)}</span></li>`).join("");

  /* ---------------- contact ---------------- */
  const c = S.contact || {};
  const email = $("#email"); email.textContent = c.email; email.href = `mailto:${c.email}`;
  $("#phones").innerHTML = (c.phones || []).map((p) => `<a href="tel:${esc(p.replace(/\s/g, ""))}">${esc(p)}</a>`).join("");

  /* contact form (FormSubmit.co) */
  const form = $("#contactForm"), fileInput = $("#fileInput"), drop = $("#drop"), dropText = $("#dropText");
  const dropDefault = dropText.innerHTML, MAX = 10 * 1024 * 1024;
  const status = (msg, cls = "") => { const el = $("#formStatus"); el.textContent = msg; el.className = "cform__status " + cls; };
  function setFile(f) {
    if (f && f.size > MAX) { status("File is larger than 10 MB — please attach a smaller file.", "is-err"); fileInput.value = ""; f = null; }
    drop.classList.toggle("has-file", !!f);
    $("#fileClear").hidden = !f;
    dropText.innerHTML = f ? `<strong>${esc(f.name)}</strong><small>${f.size < 1048576 ? Math.max(1, Math.round(f.size / 1024)) + " KB" : (f.size / 1048576).toFixed(1) + " MB"}</small>` : dropDefault;
  }
  fileInput.addEventListener("change", () => setFile(fileInput.files[0]));
  $("#fileClear").addEventListener("click", (e) => { e.preventDefault(); e.stopPropagation(); fileInput.value = ""; setFile(null); });
  ["dragenter", "dragover"].forEach((t) => drop.addEventListener(t, (e) => { e.preventDefault(); drop.classList.add("is-over"); }));
  ["dragleave", "drop"].forEach((t) => drop.addEventListener(t, (e) => { e.preventDefault(); drop.classList.remove("is-over"); }));
  drop.addEventListener("drop", (e) => {
    const f = e.dataTransfer.files[0]; if (!f) return;
    const dt = new DataTransfer(); dt.items.add(f); fileInput.files = dt.files; setFile(f);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let ok = true;
    form.querySelectorAll("[required]").forEach((el) => {
      const bad = !el.value.trim() || (el.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value));
      el.closest(".field").classList.toggle("is-invalid", bad); if (bad) ok = false;
    });
    if (!ok) return status("Please fill in your name, a valid email and a message.", "is-err");

    const to = c.formEmail || c.email;
    const subj = form.elements._subject;
    const subject = subj.value.trim() || `New portfolio message from ${form.elements.name.value.trim()}`;

    /* Website file madhun (file://) ughadli asel tar online form chalat nahi —
       tevha visitor cha email app ughadto, message ready asto. */
    if (location.protocol === "file:") {
      const body = `Name: ${form.elements.name.value.trim()}\nEmail: ${form.elements.email.value.trim()}\n\n${form.elements.message.value.trim()}`;
      location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      return status(fileInput.files.length
        ? "Your email app has opened with the message — attach the file there and press Send."
        : "Your email app has opened with the message — just press Send.", "is-ok");
    }

    /* Online: real form POST to FormSubmit (attachments supported) in a hidden frame */
    const btn = $("#sendBtn"); btn.disabled = true; status("Sending…");
    subj.value = subject;
    form.action = `https://formsubmit.co/${to.trim()}`;
    const frame = $("#fsFrame");
    const done = () => {
      clearTimeout(timer); frame.removeEventListener("load", done);
      form.reset(); setFile(null); btn.disabled = false;
      status("Thank you! Your message has been sent — I'll get back to you soon.", "is-ok");
    };
    const timer = setTimeout(() => {
      frame.removeEventListener("load", done); btn.disabled = false;
      status(`Couldn't confirm the message was sent. Please email me directly at ${c.email}.`, "is-err");
    }, 45000);
    frame.addEventListener("load", done);
    form.submit();
  });
  form.addEventListener("input", (e) => { const f = e.target.closest(".field"); if (f) f.classList.remove("is-invalid"); });

  /* ---------------- works ---------------- */
  const works = S.works || [];
  const cats = S.workCategories || [];
  let active = "all";

  function card(w, i) {
    const cover = w.thumbnail || (w.images || [])[0] || "";
    const thumb = cover
      ? `<img src="${src(cover)}" alt="${esc(w.title)}" loading="lazy" />`
      : `<div class="work__placeholder">${esc(w.title)}</div>`;
    let badge = "";
    if (w.video) badge = '<span class="work__play" aria-hidden="true"></span>';
    else if ((w.images || []).length > 1) badge = `<span class="work__count">${w.images.length} renders</span>`;
    const play = w.playLink
      ? `<a class="btn btn--solid btn--small work__playlink" href="${esc(w.playLink)}" target="_blank" rel="noopener">Play Game &nearr;</a>` : "";
    return `
      <article class="work" data-i="${i}" tabindex="0">
        <div class="work__thumb">${thumb}${badge}</div>
        <div class="work__info">
          <h3 class="work__title">${esc(w.title)}</h3>
          ${w.year ? `<span class="work__meta">${esc(w.year)}</span>` : ""}
        </div>
        <p class="work__desc">${esc(w.description)}</p>
        ${play}
      </article>`;
  }

  function renderTabs() {
    const list = [{ id: "all", label: "All Works" }, ...cats];
    $("#tabs").innerHTML = list.map((t) => {
      const n = t.id === "all" ? works.length : works.filter((w) => w.category === t.id).length;
      return `<button class="tab${t.id === active ? " is-active" : ""}" role="tab" data-tab="${esc(t.id)}">${esc(t.label)}<span>${n}</span></button>`;
    }).join("");
  }

  function renderGroups() {
    const shown = active === "all" ? cats : cats.filter((c) => c.id === active);
    $("#workGroups").innerHTML = shown.map((cat) => {
      const items = works.map((w, i) => [w, i]).filter(([w]) => w.category === cat.id);
      const grid = items.length
        ? `<div class="works">${items.map(([w, i]) => card(w, i)).join("")}</div>`
        : `<div class="works__empty">New projects coming soon.</div>`;
      return `
        <div class="group">
          <div class="group__head">
            <h3 class="group__title">${esc(cat.label)}</h3>
            <p class="group__desc">${esc(cat.desc)}</p>
          </div>
          ${grid}
        </div>`;
    }).join("");
  }
  renderTabs(); renderGroups();

  $("#tabs").addEventListener("click", (e) => {
    const b = e.target.closest(".tab"); if (!b) return;
    active = b.dataset.tab; renderTabs(); renderGroups();
  });

  /* ---------------- modal (video / gallery / showreel) ---------------- */
  const modal = $("#modal");
  let gallery = [], gi = 0;

  function showGallery() {
    $("#modalMedia").innerHTML = `
      <img src="${src(gallery[gi])}" alt="" />
      ${gallery.length > 1 ? `
        <button class="gal__nav gal__prev" data-gal="-1" aria-label="Previous">&lsaquo;</button>
        <button class="gal__nav gal__next" data-gal="1" aria-label="Next">&rsaquo;</button>
        <span class="gal__count">${gi + 1} / ${gallery.length}</span>` : ""}`;
    const strip = $("#galStrip");
    if (strip) strip.innerHTML = gallery.map((g, k) => `<button class="${k === gi ? "is-active" : ""}" data-go="${k}"><img src="${src(g)}" alt="" /></button>`).join("");
  }

  function open(mediaHTML, bodyHTML) {
    $("#modalMedia").innerHTML = mediaHTML;
    $("#modalBody").innerHTML = bodyHTML;
    modal.classList.add("is-open"); modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function openWork(i) {
    const w = works[i]; if (!w) return;
    gallery = (w.images || []).filter(Boolean); gi = 0;
    const cat = cats.find((c) => c.id === w.category);
    const body = `
      <h3>${esc(w.title)}</h3>
      <span class="work__meta">${esc([cat && cat.label, w.year].filter(Boolean).join(" · "))}</span>
      ${gallery.length > 1 ? '<div class="gal__strip" id="galStrip"></div>' : ""}
      ${w.description ? `<p>${esc(w.description)}</p>` : ""}
      ${(w.tools || []).length ? `<div class="tags">${w.tools.map((t) => `<span>${esc(t)}</span>`).join("")}</div>` : ""}
      <div class="modal__actions">
        ${w.playLink ? `<a class="btn btn--solid" href="${esc(w.playLink)}" target="_blank" rel="noopener">Play Game &nearr;</a>` : ""}
        ${w.link ? `<a class="modal__link" href="${esc(w.link)}" target="_blank" rel="noopener">View project &nearr;</a>` : ""}
      </div>`;
    let media = "";
    if (w.video) media = videoHTML(w.video);
    else if (!gallery.length && w.thumbnail) gallery = [w.thumbnail];
    open(media, body);
    if (!w.video) gallery.length ? showGallery() : ($("#modalMedia").innerHTML = `<div class="work__placeholder">${esc(w.title)}</div>`);
  }

  function openShowreel() {
    const r = S.showreel || {};
    open(
      r.vimeoId ? `<iframe src="https://player.vimeo.com/video/${esc(r.vimeoId)}?autoplay=1&title=0&byline=0&portrait=0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>` : videoHTML(r.url),
      `<h3>Showreel</h3><span class="work__meta">${esc(S.name)} · ${esc(S.tagline)}</span>
       ${r.url ? `<div class="modal__actions"><a class="modal__link" href="${esc(r.url)}" target="_blank" rel="noopener">Watch on Vimeo &nearr;</a></div>` : ""}`
    );
  }

  function close() {
    modal.classList.remove("is-open"); modal.setAttribute("aria-hidden", "true");
    $("#modalMedia").innerHTML = ""; document.body.style.overflow = ""; gallery = [];
  }

  $("#workGroups").addEventListener("click", (e) => {
    if (e.target.closest(".work__playlink")) return; // let the Play link open directly
    const c = e.target.closest(".work"); if (c) openWork(+c.dataset.i);
  });
  $("#workGroups").addEventListener("keydown", (e) => { const c = e.target.closest(".work"); if (c && e.key === "Enter") openWork(+c.dataset.i); });
  $$("[data-showreel]").forEach((b) => b.addEventListener("click", (e) => { e.preventDefault(); nav.classList.remove("is-open"); openShowreel(); }));

  modal.addEventListener("click", (e) => {
    if (e.target.closest("[data-close]")) return close();
    const nb = e.target.closest("[data-gal]");
    if (nb) { gi = (gi + +nb.dataset.gal + gallery.length) % gallery.length; return showGallery(); }
    const go = e.target.closest("[data-go]");
    if (go) { gi = +go.dataset.go; showGallery(); }
  });
  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("is-open")) return;
    if (e.key === "Escape") close();
    if (gallery.length > 1 && (e.key === "ArrowRight" || e.key === "ArrowLeft")) {
      gi = (gi + (e.key === "ArrowRight" ? 1 : -1) + gallery.length) % gallery.length; showGallery();
    }
  });

  /* ---------------- nav ---------------- */
  const nav = $("#nav");
  const onScroll = () => nav.classList.toggle("is-solid", window.scrollY > 40);
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
  $("#navToggle").addEventListener("click", () => nav.classList.toggle("is-open"));
  $$("#navLinks a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("is-open")));

  const links = $$("#navLinks a");
  const spy = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (en.isIntersecting) links.forEach((l) => l.classList.toggle("is-active", l.getAttribute("href") === `#${en.target.id}`));
  }), { rootMargin: "-45% 0px -50% 0px" });
  $$("main section[id]").forEach((s) => spy.observe(s));

  /* ---------------- reveal on scroll ---------------- */
  $$(".section__head, .about, .contact__info, .cform").forEach((el) => el.classList.add("reveal"));
  const io = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
  }), { threshold: 0.12 });
  $$(".reveal:not(.is-visible)").forEach((el) => io.observe(el));
})();
