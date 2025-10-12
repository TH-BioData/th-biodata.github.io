// ============================================================
// TH BioData Consulting — scroll-fade.js
// Activa/desactiva el efecto de desvanecimiento del hero
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  const threshold = 80; // píxeles de scroll para empezar a desvanecer
  let ticking = false;

  const updateScrollState = () => {
    if (window.scrollY > threshold) {
      document.body.classList.add("scrolled");
    } else {
      document.body.classList.remove("scrolled");
    }
    ticking = false;
  };

  // Usa requestAnimationFrame para evitar sobrecarga en scroll
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(updateScrollState);
      ticking = true;
    }
  });

  // Ejecuta una vez al cargar (por si inicia scrolleado)
  updateScrollState();
});
