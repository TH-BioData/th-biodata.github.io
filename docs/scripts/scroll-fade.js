// ============================================================
// TH BioData Consulting — scroll-fade.js (defensivo)
// Desvanece el hero al scrollear. Si el drawer está abierto,
// no cambia el estado de desvanecimiento (ni interfiere).
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  const threshold = 80;
  const html = document.documentElement;
  let ticking = false;

  function updateScrollState() {
    // Si el menú lateral está abierto, no tocar estados de scroll
    if (html.getAttribute("data-md-state") === "drawer") {
      ticking = false;
      return;
    }
    if (window.scrollY > threshold) {
      document.body.classList.add("scrolled");
    } else {
      document.body.classList.remove("scrolled");
    }
    ticking = false;
  }

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(updateScrollState);
      ticking = true;
    }
  }, { passive: true });

  // Botón del drawer: el selector puede variar según tema/versión.
  // Probamos varias opciones y chequeamos nulls.
  const possibleSelectors = [
    '.md-header__button.md-icon[for="__drawer"]',
    'label[for="__drawer"]',
    '.md-header__button[for="__drawer"]'
  ];

  let drawerBtn = null;
  for (const sel of possibleSelectors) {
    const el = document.querySelector(sel);
    if (el) { drawerBtn = el; break; }
  }

  if (drawerBtn) {
    drawerBtn.addEventListener('click', () => {
      // Tras el toggle del drawer, re-evaluá estado de scroll
      setTimeout(updateScrollState, 120);
    });
  }

  // Ejecuta una vez al cargar
  updateScrollState();
});

