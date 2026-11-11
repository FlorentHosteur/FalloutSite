/* Fallout — site script. No dependencies. */
(() => {
  "use strict";

  /* ───────────── Content you will edit most often ───────────── */

  // Add a show: { date: "YYYY-MM-DD", name, venue (optional), city, country: {fr, en}, url, poster (optional) }
  // Future dates appear under "upcoming" automatically; past ones move to the archive list.
  const SHOWS = [
    { date: "2024-02-10", name: "Le Jas Rod", city: "Les Pennes-Mirabeau", country: { fr: "France", en: "France" }, url: "https://www.facebook.com/people/JasRod/100057636302207/", poster: "media/posters/jasrod.webp" },
    { date: "2024-01-27", name: "Extreme Core Fest", venue: "Garaje Beat Club", city: { fr: "Murcie", en: "Murcia" }, country: { fr: "Espagne", en: "Spain" }, url: "https://www.notikumi.com/2024/1/27/extreme-core-fest", poster: "media/posters/extremecore.webp" },
    { date: "2023-12-01", name: "Le KJBI", city: "Le Crès", country: { fr: "France", en: "France" }, url: "https://www.facebook.com/LeKJBI/", poster: "media/posters/kjbi.webp" },
    { date: "2023-11-04", name: "Metal Party of the Apocalypse", venue: "La Maison Hantée", city: { fr: "Marseille", en: "Marseille" }, country: { fr: "France", en: "France" }, url: "https://www.facebook.com/laMHmarseille/", poster: "media/posters/maisonhantee.webp" },
    { date: "2023-10-27", name: "Le Klub", city: "Paris", country: { fr: "France", en: "France" }, url: "https://www.facebook.com/leklubparis", poster: "media/posters/klub.webp" },
    { date: "2018-04-21", name: "L'Électrode", city: "Miramas", country: { fr: "France", en: "France" }, url: "https://www.youtube.com/watch?v=MqdN85xUTTU" },
  ];

  // Gallery: [file, width, height]
  const PHOTOS = [
    ["g01", 1024, 768], ["g02", 1467, 1100], ["g03", 1650, 1100], ["g04", 1973, 1100], ["g05", 825, 1100], ["g06", 1650, 1100],
    ["g07", 1024, 617], ["g08", 1650, 1100], ["g09", 786, 1100], ["g10", 1650, 1100], ["g11", 1650, 1100], ["g12", 944, 1100],
    ["g13", 1870, 1100], ["g14", 995, 1100], ["g15", 847, 1100], ["g16", 1468, 1100], ["g17", 619, 1100], ["g18", 1536, 865],
  ];

  /* ───────────── English copy (French lives in index.html) ───────────── */
  const EN = {
    "skip": "Skip to content", "menu": "Menu",
    "nav.band": "The band", "nav.music": "Music", "nav.videos": "Videos", "nav.live": "Shows", "nav.photos": "Photos", "nav.contact": "Contact",
    "hero.place": "Aix-en-Provence, France", "hero.listen": "Listen to the EP", "hero.book": "Book Fallout",
    "hero.after": "Welcome to the aftermath.", "hero.cue": "Mask on, head down",
    "band.title": "The band",
    "band.lead": "Fallout has been playing post nuclear death metal since 2012: a raw sound fed by Carcass, Samael and Six Feet Under, with the odd dose of Ministry.",
    "band.photoAlt": "Fallout, band portrait in black and white",
    "band.p1": "With songs like “Dead Planet” or “One Second Holocaust”, we drag the listener into a post-apocalyptic world that leaves little room for hope. The dark humour is always there too, and fully owned, as in “Inside Trump” or “A Prophet to Tell the Truth”.",
    "band.p2": "Our stage design is carefully built to make every show an immersive experience for eyes and ears. We play for the stage, to share something intense with the crowd, whether there are 5 or 150 people in the room.",
    "band.lineup": "On stage", "band.history": "Timeline",
    "role.vocals": "vocals", "role.guitar": "guitar", "role.bass": "bass",
    "tl.2012": "Four childhood friends start Fallout in Aix-en-Provence. No drummer: a drum machine.",
    "tl.2014": "Gaëtan takes the drum stool and gives the sound a new dimension.",
    "tl.2016": "The Post Nuclear Gods EP is recorded at THD Studio over the summer.",
    "tl.2020": "Gaëtan leaves the band. Back to the drum machine, and writing a new five-track EP.",
    "tl.2023": "The band is back on stage: Paris, Marseille, Le Crès.",
    "tl.2024": "First show abroad, at Extreme Core Fest in Murcia, then Le Jas Rod.",
    "music.coverAlt": "Cover of the Post Nuclear Gods EP: a scene seen through the lenses of a gas mask",
    "music.note": "Our first EP: seven tracks recorded in the summer of 2016 at THD Studio. Cover art drawn by Augustin.",
    "music.deezer": "Listen on Deezer", "music.youtube": "Listen on YouTube",
    "music.now": "Now playing:", "music.hint": "Pick a track to play it here, via YouTube.",
    "music.next": "A new five-track EP is being written.",
    "videos.title": "Videos", "videos.play": "Play video",
    "v.png": "Remastered version, 2016", "v.ep": "From the EP",
    "v.electrodeT": "Live at L'Électrode", "v.electrode": "Miramas, 21 April 2018",
    "v.danT": "Live at Dan Racing", "v.dan": "Filmed show",
    "v.cover": "Cover version", "v.itwT": "Live interview", "v.itw": "About Post Nuclear Gods, 31 minutes",
    "videos.more": "All videos on the Fallout Band YouTube channel",
    "live.title": "Shows", "live.past": "Past dates", "live.next": "Next dates",
    "live.emptyT": "No dates announced yet.",
    "live.emptyP": "A venue, a festival, a cellar? Write to us, we bring the gas masks.",
    "live.emptyB": "Offer us a date", "live.poster": "See the poster for", "live.subject": "Booking Fallout",
    "photos.title": "Photos", "photos.prev": "Previous photos", "photos.next": "Next photos", "photos.label": "Photo gallery",
    "photos.credit": "Live photos: all rights reserved by their authors.", "photos.alt": "Fallout live, photo",
    "contact.title": "Contact", "contact.lead": "Booking, press, or just saying hello: we answer everyone.",
    "foot.rights": "All rights reserved.",
    "dose.label": "Dosimeter", "dose.on": "Turn on the Geiger counter", "dose.off": "Turn off the Geiger counter",
    "lb.label": "Enlarged view", "lb.close": "Close", "lb.prev": "Previous", "lb.next": "Next",
  };
  // French strings that are not in the HTML (rendered by this script)
  const FR = {
    "live.next": "Prochaines dates", "live.emptyT": "Aucune date annoncée pour l'instant.",
    "live.emptyP": "Une salle, un festival, une cave ? Écrivez-nous, on apporte les masques à gaz.",
    "live.emptyB": "Proposer une date", "live.poster": "Voir l'affiche de", "live.subject": "Booking Fallout",
    "photos.alt": "Fallout sur scène, photo", "dose.off": "Couper le compteur Geiger",
  };

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));

  /* ───────────── Language ───────────── */
  // Capture the French source text once so switching back needs no second dictionary.
  $$("[data-i18n]").forEach(el => { FR[el.dataset.i18n] ??= el.textContent; });
  $$("[data-i18n-attr]").forEach(el => el.dataset.i18nAttr.split(",").forEach(pair => {
    const [attr, key] = pair.split(":"); FR[key] ??= el.getAttribute(attr);
  }));

  let lang = "fr";
  const t = key => (lang === "en" ? EN[key] : FR[key]) ?? FR[key] ?? key;
  const loc = v => (v && typeof v === "object" ? v[lang] : v);

  function setLang(next, save) {
    lang = next === "en" ? "en" : "fr";
    document.documentElement.lang = lang;
    $$("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
    $$("[data-i18n-attr]").forEach(el => el.dataset.i18nAttr.split(",").forEach(pair => {
      const [attr, key] = pair.split(":"); el.setAttribute(attr, t(key));
    }));
    $$(".lang button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    document.title = lang === "en" ? "Fallout, post nuclear death metal (Aix-en-Provence, France)" : "Fallout, post nuclear death metal (Aix-en-Provence)";
    renderShows(); renderGalleryAlts(); syncSoundLabel();
    if (save) { try { localStorage.setItem("fallout-lang", lang); } catch { /* private mode */ } }
  }
  $$(".lang button").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang, true)));

  /* ───────────── Shows ───────────── */
  function renderShows() {
    const today = new Date().toISOString().slice(0, 10);
    const next = SHOWS.filter(s => s.date >= today).sort((a, b) => a.date.localeCompare(b.date));
    const past = SHOWS.filter(s => s.date < today).sort((a, b) => b.date.localeCompare(a.date));
    const dFmt = new Intl.DateTimeFormat(lang, { day: "numeric", month: "short", timeZone: "UTC" });
    const yFmt = new Intl.DateTimeFormat(lang, { year: "numeric", timeZone: "UTC" });
    const row = s => {
      const d = new Date(s.date + "T00:00:00Z");
      const place = [s.venue, loc(s.city), loc(s.country)].filter(Boolean).join(", ");
      const li = document.createElement("li");
      li.innerHTML = `<p class="shows__date"><b></b><span></span></p>
        <p class="shows__what"><a target="_blank" rel="noopener"><b></b></a><span></span></p>`;
      $(".shows__date b", li).textContent = dFmt.format(d).replace(".", "");
      $(".shows__date span", li).textContent = yFmt.format(d);
      const a = $("a", li); a.href = s.url; $("b", a).textContent = s.name;
      $(".shows__what span", li).textContent = place;
      if (s.poster) {
        const b = document.createElement("button");
        b.type = "button"; b.className = "shows__poster"; b.setAttribute("aria-label", `${t("live.poster")} ${s.name}`);
        b.innerHTML = `<img loading="lazy" alt="" width="84" height="84">`; $("img", b).src = s.poster;
        b.addEventListener("click", () => openLightbox([{ src: s.poster, alt: s.name }], 0, b));
        li.append(b);
      } else li.insertAdjacentHTML("beforeend", `<span class="shows__noposter"></span>`);
      return li;
    };
    const up = $("#upcoming"); up.replaceChildren();
    if (next.length) {
      const h = document.createElement("h3"); h.className = "sub"; h.style.marginTop = "0"; h.textContent = t("live.next");
      const ul = document.createElement("ul"); ul.className = "shows shows--next"; ul.append(...next.map(row));
      up.append(h, ul);
    } else {
      const box = document.createElement("div"); box.className = "empty";
      box.innerHTML = `<h3></h3><p></p><a class="btn btn--rad"></a>`;
      $("h3", box).textContent = t("live.emptyT"); $("p", box).textContent = t("live.emptyP");
      const a = $("a", box); a.textContent = t("live.emptyB");
      a.href = `mailto:falloutmetalband@gmail.com?subject=${encodeURIComponent(t("live.subject"))}`;
      up.append(box);
    }
    $("#pastShows").replaceChildren(...past.map(row));
  }

  /* ───────────── Gallery ───────────── */
  const strip = $("#strip");
  const galleryItems = PHOTOS.map(([n], i) => ({ src: `media/gallery/${n}.webp`, alt: "" , i }));
  PHOTOS.forEach(([n, w, h], i) => {
    const b = document.createElement("button"); b.type = "button";
    b.style.aspectRatio = `${w} / ${h}`;
    b.innerHTML = `<img loading="lazy" width="${w}" height="${h}" src="media/gallery/${n}.webp" alt="" draggable="false">`;
    b.addEventListener("click", () => { if (!dragMoved) openLightbox(galleryItems, i, b); });
    strip.append(b);
  });
  function renderGalleryAlts() {
    $$("img", strip).forEach((img, i) => { img.alt = `${t("photos.alt")} ${i + 1}`; galleryItems[i].alt = img.alt; });
  }
  const step = dir => strip.scrollBy({ left: dir * strip.clientWidth * 0.8, behavior: reduced ? "auto" : "smooth" });
  $("#galPrev").addEventListener("click", () => step(-1));
  $("#galNext").addEventListener("click", () => step(1));
  // drag to scroll with a mouse
  let dragX = null, dragStart = 0, dragMoved = false;
  strip.addEventListener("pointerdown", e => { if (e.pointerType !== "mouse") return; dragX = e.clientX; dragStart = strip.scrollLeft; dragMoved = false; });
  addEventListener("pointermove", e => {
    if (dragX === null) return;
    const dx = e.clientX - dragX;
    if (Math.abs(dx) > 6) { dragMoved = true; strip.classList.add("is-drag"); }
    if (dragMoved) strip.scrollLeft = dragStart - dx;
  });
  addEventListener("pointerup", () => { if (dragX === null) return; dragX = null; strip.classList.remove("is-drag"); setTimeout(() => { dragMoved = false; }, 0); });

  /* ───────────── Lightbox ───────────── */
  const lb = $("#lb"), lbBody = $("#lbBody");
  let lbItems = [], lbIndex = 0, lbReturn = null;
  function showLb() {
    const it = lbItems[lbIndex];
    const img = new Image(); img.src = it.src; img.alt = it.alt || "";
    lbBody.replaceChildren(img);
  }
  function openLightbox(items, index, opener) {
    lbItems = items; lbIndex = index; lbReturn = opener;
    lb.classList.toggle("is-single", items.length < 2);
    lb.hidden = false; document.body.style.overflow = "hidden";
    showLb(); $("#lbClose").focus();
  }
  function closeLb() { lb.hidden = true; document.body.style.overflow = ""; lbBody.replaceChildren(); lbReturn?.focus(); }
  const lbStep = d => { lbIndex = (lbIndex + d + lbItems.length) % lbItems.length; showLb(); };
  $("#lbClose").addEventListener("click", closeLb);
  $("#lbPrev").addEventListener("click", () => lbStep(-1));
  $("#lbNext").addEventListener("click", () => lbStep(1));
  lb.addEventListener("click", e => { if (e.target === lb || e.target === lbBody) closeLb(); });
  let swipeX = null, swipeY = 0; // swipe left/right to change photo, down to close
  lb.addEventListener("touchstart", e => { swipeX = e.touches[0].clientX; swipeY = e.touches[0].clientY; }, { passive: true });
  lb.addEventListener("touchend", e => {
    if (swipeX === null) return;
    const dx = e.changedTouches[0].clientX - swipeX, dy = e.changedTouches[0].clientY - swipeY; swipeX = null;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5 && lbItems.length > 1) lbStep(dx < 0 ? 1 : -1);
    else if (dy > 90 && Math.abs(dy) > Math.abs(dx) * 1.5) closeLb();
  }, { passive: true });
  addEventListener("keydown", e => {
    if (lb.hidden) return;
    if (e.key === "Escape") closeLb();
    else if (e.key === "ArrowLeft" && lbItems.length > 1) lbStep(-1);
    else if (e.key === "ArrowRight" && lbItems.length > 1) lbStep(1);
    else if (e.key === "Tab") { // keep focus inside the dialog
      const f = $$("button", lb).filter(b => b.offsetParent !== null && getComputedStyle(b).visibility !== "hidden");
      const i = f.indexOf(document.activeElement);
      e.preventDefault(); f[(i + (e.shiftKey ? -1 : 1) + f.length) % f.length].focus();
    }
  });

  /* ───────────── YouTube: nothing loads from Google until a visitor presses play ───────────── */
  const ytFrame = (id, title) => {
    const f = document.createElement("iframe");
    f.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;
    f.title = title; f.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen"; f.allowFullscreen = true;
    return f;
  };
  $$(".vid__play").forEach(b => b.addEventListener("click", () => {
    const title = b.parentElement.querySelector("h3").textContent;
    stopTrack();
    const holder = document.createElement("div"); holder.className = "vid__play";
    holder.append(ytFrame(b.dataset.yt, title)); b.replaceWith(holder);
  }));
  const player = $("#player"), playerFrame = $("#playerFrame");
  function stopTrack() {
    playerFrame.replaceChildren(); player.hidden = true; $("#musicHint").hidden = false;
    $$("#tracks button").forEach(b => b.removeAttribute("aria-current"));
  }
  $$("#tracks button").forEach(b => b.addEventListener("click", () => {
    if (b.getAttribute("aria-current") === "true") return stopTrack();
    const title = $(".tracks__t", b).textContent;
    $$("#tracks button").forEach(x => x.removeAttribute("aria-current"));
    b.setAttribute("aria-current", "true");
    playerFrame.replaceChildren(ytFrame(b.dataset.yt, title));
    $("#playerTitle").textContent = title; player.hidden = false; $("#musicHint").hidden = true;
  }));

  // cover tilts toward the pointer
  const cover = $("#cover");
  if (!reduced && matchMedia("(hover: hover)").matches) {
    cover.addEventListener("pointermove", e => {
      const r = cover.getBoundingClientRect();
      cover.style.setProperty("--ry", `${((e.clientX - r.left) / r.width - 0.5) * 16}deg`);
      cover.style.setProperty("--rx", `${-((e.clientY - r.top) / r.height - 0.5) * 16}deg`);
    });
    cover.addEventListener("pointerleave", () => { cover.style.setProperty("--ry", "0deg"); cover.style.setProperty("--rx", "0deg"); });
  }

  /* ───────────── Nav ───────────── */
  const nav = $("#nav"), navLinks = $("#navLinks"), navToggle = $("#navToggle");
  const closeMenu = () => { navLinks.classList.remove("is-open"); nav.classList.remove("is-menu"); navToggle.setAttribute("aria-expanded", "false"); };
  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("is-open");
    nav.classList.toggle("is-menu", open); navToggle.setAttribute("aria-expanded", String(open));
  });
  navLinks.addEventListener("click", e => { if (e.target.closest("a")) closeMenu(); });
  addEventListener("keydown", e => { if (e.key === "Escape") closeMenu(); });

  /* ───────────── Scroll: mask zoom, section tracking, dosimeter ───────────── */
  const hero = $("#top"), stage = $(".hero__stage"), masks = $$(".hero__mask");
  const sections = $$("section[data-dose]");
  const doseVal = $("#doseVal");
  let doseTarget = 0.08, doseShown = 0.08, lastLevel = "";
  const ease = x => x * x * (3 - 2 * x);

  function onScroll() {
    const vh = innerHeight, y = scrollY;
    const span = hero.offsetHeight - vh;
    const p = reduced || span <= 0 ? 0 : clamp(y / span);
    if (y < hero.offsetHeight) {
      stage.style.setProperty("--p", p.toFixed(4));
      const z = 1 + Math.pow(p, 2.1) * 9;
      for (const m of masks) { // zoom toward the lens centre by narrowing the viewBox
        const [w, h] = m.dataset.size.split(" ").map(Number), [ox, oy] = m.dataset.origin.split(" ").map(Number);
        m.setAttribute("viewBox", `${(ox * (1 - 1 / z)).toFixed(2)} ${(oy * (1 - 1 / z)).toFixed(2)} ${(w / z).toFixed(2)} ${(h / z).toFixed(2)}`);
      }
      stage.style.setProperty("--tint", (0.85 * (1 - ease(clamp(p * 1.5)))).toFixed(3));
      stage.style.setProperty("--brand-o", (1 - clamp(p * 3.2)).toFixed(3));
      stage.style.setProperty("--mask-o", (1 - ease(clamp((p - 0.62) / 0.2))).toFixed(3));
      stage.style.setProperty("--after-o", ease(clamp((p - 0.6) / 0.22)).toFixed(3));
      stage.style.setProperty("--photo-scale", (1.08 - 0.08 * p).toFixed(4));
      stage.style.setProperty("--grime-s", (1 + p * 1.4).toFixed(4));
      stage.style.setProperty("--grime-o", (0.85 * (1 - ease(clamp((p - 0.2) / 0.45)))).toFixed(3));
      stage.style.setProperty("--shift", (1 - ease(clamp(p / 0.5))).toFixed(4)); // portrait only: slides the photo up as the lens opens
      $(".hero__brand").style.pointerEvents = p > 0.3 ? "none" : "";
    }
    nav.classList.toggle("is-solid", y > hero.offsetHeight - vh * 0.9);

    let current = null;
    for (const s of sections) if (s.getBoundingClientRect().top < vh * 0.55) current = s;
    doseTarget = current ? parseFloat(current.dataset.dose) : 0.08 + p * 0.2;
    $$("a", navLinks).forEach(a => a.classList.toggle("is-here", !!current && a.getAttribute("href") === `#${current.id}`));
  }
  let ticking = false;
  addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(() => { ticking = false; onScroll(); }); } }, { passive: true });
  addEventListener("resize", onScroll);

  // The reading drifts toward its target with a little instrument noise.
  const level = () => clamp(Math.log10(doseShown / 0.08) / Math.log10(666 / 0.08));
  setInterval(() => {
    doseShown += (doseTarget - doseShown) * 0.22;
    const noisy = doseShown * (1 + (Math.random() - 0.5) * 0.06);
    doseVal.textContent = noisy >= 100 ? noisy.toFixed(0) : noisy >= 10 ? noisy.toFixed(1) : noisy.toFixed(2);
    const lv = level().toFixed(2);
    if (lv !== lastLevel) { lastLevel = lv; document.documentElement.style.setProperty("--level", lv); }
  }, 260);

  /* Geiger clicks (Web Audio, off until asked for) */
  const snd = $("#doseSnd");
  let ctx = null, clickTimer = null;
  function click() {
    const n = ctx.sampleRate * 0.012, buf = ctx.createBuffer(1, n, ctx.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, 6);
    const src = ctx.createBufferSource(), hp = ctx.createBiquadFilter(), g = ctx.createGain();
    hp.type = "highpass"; hp.frequency.value = 1800; g.gain.value = 0.22;
    src.buffer = buf; src.connect(hp).connect(g).connect(ctx.destination); src.start();
  }
  function schedule() {
    const rate = 0.8 + level() * 26; // clicks per second
    clickTimer = setTimeout(() => { if (!document.hidden) click(); schedule(); }, -Math.log(1 - Math.random()) / rate * 1000);
  }
  function syncSoundLabel() {
    const on = snd.getAttribute("aria-pressed") === "true";
    $("span", snd).textContent = t(on ? "dose.off" : "dose.on");
    snd.setAttribute("aria-label", t(on ? "dose.off" : "dose.on"));
  }
  snd.addEventListener("click", () => {
    const on = snd.getAttribute("aria-pressed") !== "true";
    snd.setAttribute("aria-pressed", String(on));
    if (on) { ctx ??= new (window.AudioContext || window.webkitAudioContext)(); ctx.resume(); schedule(); }
    else clearTimeout(clickTimer);
    syncSoundLabel();
  });

  /* ───────────── Section titles: one stencil-wipe each ───────────── */
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -12% 0px" });
  $$(".title").forEach(el => io.observe(el));

  /* ───────────── Ash ───────────── */
  const cv = $("#ash");
  if (!reduced && cv.getContext) {
    const c = cv.getContext("2d");
    let W = 0, H = 0, flakes = [], lastY = scrollY, wind = 0, raf = 0;
    const size = () => {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      const sameWidth = innerWidth === W;
      W = innerWidth; H = innerHeight; cv.width = W * dpr; cv.height = H * dpr; c.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (sameWidth && flakes.length) return; // phone address bar showing or hiding: keep the flakes
      const n = Math.round(clamp(W * H / 16000, 24, 110));
      flakes = Array.from({ length: n }, () => ({ x: Math.random() * W, y: Math.random() * H, r: 0.5 + Math.random() * 1.7, v: 0.15 + Math.random() * 0.55, s: Math.random() * 6.28, hot: Math.random() < 0.16 }));
    };
    const frame = () => {
      const dy = scrollY - lastY; lastY = scrollY; wind += (clamp(dy, -60, 60) * 0.05 - wind) * 0.08;
      c.clearRect(0, 0, W, H);
      for (const f of flakes) {
        f.s += 0.012; f.y += f.v - wind * f.r * 0.6; f.x += Math.sin(f.s) * 0.35 + 0.12;
        if (f.y > H + 4) { f.y = -4; f.x = Math.random() * W; } else if (f.y < -6) f.y = H + 4;
        if (f.x > W + 4) f.x = -4;
        c.globalAlpha = f.hot ? 0.75 : 0.32;
        c.fillStyle = f.hot ? "#b6e23e" : "#cfd4c4";
        c.beginPath(); c.arc(f.x, f.y, f.r, 0, 6.283); c.fill();
      }
      raf = requestAnimationFrame(frame);
    };
    size(); addEventListener("resize", size);
    document.addEventListener("visibilitychange", () => { cancelAnimationFrame(raf); if (!document.hidden) raf = requestAnimationFrame(frame); });
    raf = requestAnimationFrame(frame);
  }

  /* ───────────── Start ───────────── */
  $("#year").textContent = new Date().getFullYear();
  let initial = "fr";
  try {
    const q = new URLSearchParams(location.search).get("lang");
    initial = q || localStorage.getItem("fallout-lang") || ((navigator.language || "fr").toLowerCase().startsWith("fr") ? "fr" : "en");
  } catch { /* keep French */ }
  setLang(initial, false);
  onScroll();
})();
