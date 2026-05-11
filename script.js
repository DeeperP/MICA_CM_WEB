/**
 *  1. LÓGICA DE CARRUCEL DE VIDEOS 
 * ================================================================
 * DATOS — Completá src con tus URLs de video (.mp4) o embed TikTok
 * type: "video" | "tiktok"
 * ================================================================
*/

const videos = [
  {
    id: 1,
    category: "marca",
    title: "Lanzamiento nueva colección",
    desc: "Presentación de producto con storytelling visual y transiciones suaves.",
    views: "124K",
    likes: "8.2K",
    duration: "0:22",
    type: "video",
    src: "assets/videos/video3.mp4",
    thumb: "assets/frames/fotograma-3.png",
    bg: "linear-gradient(160deg,#1a0f0a,#090605)",
  },
  {
    id: 2,
    category: "lifestyle",
    title: "Día en la vida de una CM",
    desc: "Contenido auténtico mostrando el proceso detrás de cámara.",
    views: "89K",
    likes: "6.1K",
    duration: "0:35",
    type: "video",
    src: "assets/videos/video2.mp4",
    thumb: "",
    bg: "linear-gradient(160deg,#0a0f1a,#050608)",
  },
  {
    id: 3,
    category: "promo",
    title: "Oferta especial 3×2",
    desc: "Pieza de conversión con urgencia visual y llamada a la acción clara.",
    views: "210K",
    likes: "15K",
    duration: "0:18",
    type: "video",
    src: "assets/videos/video3.mp4",
    thumb: "",
    bg: "linear-gradient(160deg,#0f1a0a,#070a06)",
  },
  {
    id: 4,
    category: "tutorial",
    title: "Cómo armar tu feed en 5 pasos",
    desc: "Serie educativa que posiciona a la marca como referente del nicho.",
    views: "67K",
    likes: "4.8K",
    duration: "0:58",
    type: "video",
    src: "assets/videos/video4.mp4",
    thumb: "",
    bg: "linear-gradient(160deg,#1a170a,#090806)",
  },
  {
    id: 5,
    category: "lifestyle",
    title: "Behind the scenes del shooting",
    desc: "Backstage que humaniza la marca y genera confianza en la audiencia.",
    views: "53K",
    likes: "3.9K",
    duration: "0:29",
    type: "video",
    src: "assets/videos/video5.mp4",
    thumb: "",
    bg: "linear-gradient(160deg,#0a1518,#050809)",
  },
  {
    id: 6,
    category: "marca",
    title: "Presentación de producto héroe",
    desc: "Video de producto con énfasis en texturas, uso y diferenciadores.",
    views: "178K",
    likes: "12K",
    duration: "0:24",
    type: "video",
    src: "path/to/video6.mp4",
    thumb: "",
    bg: "linear-gradient(160deg,#18090e,#090407)",
  },
  {
    id: 7,
    category: "tutorial",
    title: "Tutorial de edición rápida",
    desc: "Tips de edición en formato reel: dinámico, rápido y lleno de valor.",
    views: "45K",
    likes: "3.1K",
    duration: "1:02",
    type: "video",
    src: "path/to/video7.mp4",
    thumb: "",
    bg: "linear-gradient(160deg,#0e0a1a,#060508)",
  },
  {
    id: 8,
    category: "promo",
    title: "Promo temporada verano",
    desc: "Campaña estacional con paleta cálida y alto ritmo de cortes.",
    views: "302K",
    likes: "22K",
    duration: "0:15",
    type: "video",
    src: "path/to/video8.mp4",
    thumb: "",
    bg: "linear-gradient(160deg,#1a130a,#090705)",
  },
];

const playSvg = `<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;
const eyeSvg = `<svg viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>`;
const heartSvg = `<svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;
const clockSvg = `<svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>`;

let currentFilter = "all",
  currentIdx = 0;

function buildCard(v, i) {
  const media = v.src
    ? `<video src="${v.src}" preload="none" ${v.thumb ? `poster="${v.thumb}"` : ""}
         playsinline muted loop></video>`
    : `<div class="v-placeholder" style="background:${v.bg}">
         <div class="v-play-ring">${playSvg}</div>
         <span>${v.category}</span>
       </div>`;
  return `
    <div class="col-6 col-sm-4 col-xl-3 v-col" style="animation-delay:${i * 60}ms" data-id="${v.id}">
      <div class="v-card" onclick="openModal(${v.id})">
        <div class="v-ratio">
          ${media}
          <div class="v-hover-overlay">
            <div class="v-hover-title">${v.title}</div>
            <div class="v-hover-tag">${v.category} · ${v.duration}</div>
          </div>
        </div>
        <div class="v-meta">
          <div class="v-cat">${v.category}</div>
          <div class="v-title">${v.title}</div>
          <div class="v-stats">
            <span>${eyeSvg}${v.views}</span>
            <span>${heartSvg}${v.likes}</span>
            <span>${clockSvg}${v.duration}</span>
          </div>
        </div>
      </div>
    </div>`;
}

function renderGrid(f) {
  const list = f === "all" ? videos : videos.filter((v) => v.category === f);
  document.getElementById("videoGrid").innerHTML = list
    .map((v, i) => buildCard(v, i))
    .join("");
}
renderGrid("all");

document.getElementById("filterBar").addEventListener("click", (e) => {
  const btn = e.target.closest(".f-btn");
  if (!btn) return;
  document
    .querySelectorAll(".f-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  currentFilter = btn.dataset.filter;
  renderGrid(currentFilter);
});

/* Modal */
const modal = document.getElementById("modal");
const mVid = document.getElementById("mVid");

function openModal(id) {
  currentIdx = videos.findIndex((v) => v.id === id);
  loadModal(currentIdx);
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeModal() {
  modal.classList.remove("open");
  mVid.innerHTML = "";
  document.body.style.overflow = "";
}
function loadModal(idx) {
  const v = videos[idx];
  if (v.type === "tiktok" && v.src) {
    mVid.innerHTML = `<iframe src="${v.src}" allowfullscreen allow="autoplay"></iframe>`;
  } else if (v.src) {
    mVid.innerHTML = `<video src="${v.src}" controls autoplay playsinline
      ${v.thumb ? `poster="${v.thumb}"` : ""}
      style="object-fit:contain;background:#000;"></video>`;
  } else {
    mVid.innerHTML = `<div class="v-placeholder" style="background:${v.bg}">
      <div class="v-play-ring">${playSvg}</div>
      <span style="font-size:.68rem;letter-spacing:.1em;text-transform:uppercase;color:var(--muted)">Agregá tu video en <code style="color:var(--accent)">src</code></span>
    </div>`;
  }
  document.getElementById("mCat").textContent = v.category.toUpperCase();
  document.getElementById("mTitle").textContent = v.title;
  document.getElementById("mDesc").textContent = v.desc || "";
  document.getElementById("mStats").innerHTML = `
    <div class="m-stat"><span class="m-stat-label">${eyeSvg} Reproducciones</span><strong>${v.views}</strong></div>
    <div class="m-stat"><span class="m-stat-label">${heartSvg} Me gusta</span><strong>${v.likes}</strong></div>
    <div class="m-stat"><span class="m-stat-label">${clockSvg} Duración</span><strong>${v.duration}</strong></div>
  `.replace(/<svg/g, '<svg style="width:11px;fill:var(--muted)"');
}

document.getElementById("mClose").addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
document.getElementById("mPrev").addEventListener("click", () => {
  currentIdx = (currentIdx - 1 + videos.length) % videos.length;
  loadModal(currentIdx);
});
document.getElementById("mNext").addEventListener("click", () => {
  currentIdx = (currentIdx + 1) % videos.length;
  loadModal(currentIdx);
});
document.addEventListener("keydown", (e) => {
  if (!modal.classList.contains("open")) return;
  if (e.key === "Escape") closeModal();
  if (e.key === "ArrowLeft") document.getElementById("mPrev").click();
  if (e.key === "ArrowRight") document.getElementById("mNext").click();
});

//===============================================================
/**
 * 2. LÓGICA DE PANELES Y DOTS
 */
function openPanel(index) {
  document
    .querySelectorAll(".panel")
    .forEach((p, i) => p.classList.toggle("open", i === index));
  document
    .querySelectorAll(".dot")
    .forEach((d, i) => d.classList.toggle("active", i === index));
}

//===============================================================
/**
 * 3. STACK DE PLANES (MÓVIL / SWIPE)
 */
const stack = document.getElementById("planesStack");
let touchStartX = 0;
let touchEndX = 0;

if (stack) {
  stack.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
    },
    { passive: true },
  );

  stack.addEventListener(
    "touchend",
    (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    },
    { passive: true },
  );
}

function handleSwipe() {
  const swipeThreshold = 50;
  const wrappers = document.querySelectorAll(".plan-card-wrapper");
  let currentIndex = Array.from(wrappers).findIndex((w) =>
    w.classList.contains("active"),
  );

  if (touchStartX - touchEndX > swipeThreshold) {
    // Swipe Izquierda -> Siguiente
    let nextIndex = (currentIndex + 1) % wrappers.length;
    selectCard(wrappers[nextIndex]);
  } else if (touchEndX - touchStartX > swipeThreshold) {
    // Swipe Derecha -> Anterior
    let prevIndex = (currentIndex - 1 + wrappers.length) % wrappers.length;
    selectCard(wrappers[prevIndex]);
  }
}

// Función única selectCard para el stack de planes
function selectCard(element) {
  if (window.innerWidth < 992) {
    const wrappers = document.querySelectorAll(".plan-card-wrapper");

    if (element.classList.contains("active")) return;

    wrappers.forEach((card) => card.classList.remove("active"));
    element.classList.add("active");

    if (window.navigator.vibrate) window.navigator.vibrate(20);
  }
}
//===============================================================