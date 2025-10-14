// scripts/drawer-fix.js
(function () {
  const ready = (fn) =>
    document.readyState !== "loading" ? fn() : document.addEventListener("DOMContentLoaded", fn);

  ready(() => {
    // --- 1) Asegura el checkbox del drawer
    let drawer = document.getElementById("__drawer");
    if (!drawer) {
      drawer = document.createElement("input");
      drawer.type = "checkbox";
      drawer.id = "__drawer";
      drawer.className = "md-toggle";
      drawer.setAttribute("data-md-toggle", "drawer");
      document.body.insertBefore(drawer, document.body.firstChild);
    }

    // --- 2) Overlay (créalo si falta)
    let overlay = document.querySelector(".md-overlay");
    if (!overlay) {
      overlay = document.createElement("label");
      overlay.className = "md-overlay";
      overlay.setAttribute("data-md-component", "overlay");
      overlay.setAttribute("for", "__drawer");
      document.body.appendChild(overlay);
    }
    overlay.style.pointerEvents = "auto";

    // --- 3) Localiza el botón hamburguesa aunque no tenga `for="__drawer"`
    const triggers = new Set([
      ...document.querySelectorAll('.md-header__button[for="__drawer"]'),
      ...document.querySelectorAll('.md-header__button[aria-label*="navigation" i]'),
      ...document.querySelectorAll('.md-header__button[aria-label*="menu" i]'),
      ...document.querySelectorAll('.md-header__button')
    ]);

    const html = document.documentElement;

    const openDrawer = () => {
      drawer.checked = true;
      html.classList.add("md-locked");
      drawer.dispatchEvent(new Event("change", { bubbles: true }));
    };
    const closeDrawer = () => {
      drawer.checked = false;
      html.classList.remove("md-locked");
      drawer.dispatchEvent(new Event("change", { bubbles: true }));
    };
    const toggleDrawer = (ev) => {
      // forzamos que **siempre** funcione aunque otro JS haga preventDefault
      try { ev.stopPropagation(); ev.preventDefault(); } catch (e) {}
      drawer.checked ? closeDrawer() : openDrawer();
      return false;
    };

    // Enlaza el click en fase de captura (se ejecuta antes que otros handlers)
    triggers.forEach((el) => {
      el.style.pointerEvents = "auto";
      el.addEventListener("click", toggleDrawer, { capture: true });
    });

    // Cierra al tocar overlay o un enlace del menú
    overlay.addEventListener("click", () => closeDrawer(), { capture: true });
    document.addEventListener("click", (e) => {
      const a = e.target.closest(".md-nav a");
      if (a) closeDrawer();
    }, { capture: true });

    // Seguridad: si un SPA reemplaza el DOM, vuelve a enganchar
    const mo = new MutationObserver(() => {
      if (!document.contains(drawer)) {
        // reinyecta si fue removido
        document.body.insertBefore(drawer, document.body.firstChild);
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });
  });
})();
