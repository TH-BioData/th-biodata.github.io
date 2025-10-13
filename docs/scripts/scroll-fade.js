// ============================================================
// TH BioData Consulting — scroll-fade.js (FIXED)
// Activa/desactiva el efecto de desvanecimiento del hero.
// IGNORA el scroll si el menú lateral (drawer) está abierto.
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
    const threshold = 80; // píxeles de scroll para empezar a desvanecer
    let ticking = false;
    const html = document.documentElement; // Referencia al <html>

    const updateScrollState = () => {
        // *** REGLA CRÍTICA: Ignorar la actualización si el drawer está abierto ***
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
    };

    // Usa requestAnimationFrame para evitar sobrecarga en scroll
    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(updateScrollState);
            ticking = true;
        }
    });

    // MkDocs maneja los estados del drawer, podemos escuchar los clics del botón
    document.querySelector('.md-header__button.md-icon[for="__drawer"]').addEventListener('click', () => {
        // Forzamos una actualización inmediatamente después de que el drawer se abre/cierra,
        // ya que el estado puede haber cambiado.
        setTimeout(updateScrollState, 100);
    });

    // Ejecuta una vez al cargar (por si inicia scrolleado)
    updateScrollState();
});
