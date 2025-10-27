// assets/js/hero-fade.js
(function () {
  const hero = document.getElementById('th-hero');
  if (!hero) return; // sólo corre en Home

  // Opcional: considerar la altura del header de MkDocs
  const header = document.querySelector('.md-header');
  const headerH = header ? header.offsetHeight : 0;

  // Qué tanto scrollear para que el hero desaparezca del todo
  // (elige el menor entre 65% del alto del hero y 600px)
  function getFadeDistance() {
    const h = hero.offsetHeight || window.innerHeight;
    return Math.min(h * 0.65, 600);
  }

  let fadeDist = 0;

  function onScroll() {
    if (!fadeDist) fadeDist = getFadeDistance();

    // Cuánto se ha scrolleado desde el borde superior del hero
    const y = window.scrollY || window.pageYOffset || 0;

    // Progreso normalizado de 0 → 1
    const p = Math.min(Math.max((y - headerH) / fadeDist, 0), 1);

    // Aplica fade y un leve translate para sensación de retiro
    hero.style.opacity = String(1 - p);
    hero.style.transform = `translateY(${p * 18}px)`;
    // (Opcional) evitar que capte clics cuando ya está invisible
    hero.style.pointerEvents = p >= 0.98 ? 'none' : 'auto';
  }

  // Recalcular si cambia el layout (rotación, resize, etc.)
  const ro = new ResizeObserver(() => { fadeDist = 0; onScroll(); });
  ro.observe(hero);

  // Inicializa
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('load', onScroll);
  document.addEventListener('DOMContentLoaded', onScroll);
})();
