// scripts/drawer-fix.js
(function () {
  // Espera a que el DOM esté listo
  const onReady = (fn) =>
    document.readyState !== "loading" ? fn() : document.addEventListener("DOMContentLoaded", fn);

  onReady(() => {
    // 1) Asegura que el checkbox del drawer exista; si no, lo crea
    let drawer = document.getElementById("__drawer");
    if (!drawer) {
      drawer = document.createElement("input");
      drawer.type = "checkbox";
      drawer.id = "__drawer";
      drawer.className = "md-toggle";
      drawer.setAttribute("data-md-toggle", "drawer");
      // Insertar al comienzo del body (como hace Material)
      document.body.insertBefore(drawer, document.body.firstChild);
    }

    // 2) Encuentra cualquier botón/label que dispare el drawer
    const triggers = Array.from(document.querySelectorAll('.md-header__button[for="__drawer"], label[for="__drawer"]'));

    // 3) Enlaza manualmente el click → toggle del checkbox
    const toggleDrawer = (ev) => {
      try {
        // Evita que otros listeners cancelen el click
        ev.stopPropagation();
        ev.preventDefault();
      } catch (e) {}
      drawer.checked = !drawer.checked;

      // Agrega/quita clase en <html> como hace Material (para estilos del overlay)
      const html = document.documentElement;
      if (drawer.checked) html.classList.add("md-locked");
      else html.classList.remove("md-locked");

      // Dispara un evento por si algún estilo/script escucha cambios
      drawer.dispatchEvent(new Event("change", { bubbles: true }));
      return false;
    };

    // Limpia listeners previos y engancha el nuestro
    triggers.forEach((el) => {
      el.onclick = toggleDrawer;
      el.addEventListener("click", toggleDrawer, true); // fase de captura por si otro script hace preventDefault en burbujeo
      el.style.pointerEvents = "auto";
    });

    // 4) Cierra el drawer al hacer click en el overlay o en un link del menú
    const closeDrawer = () => {
      if (!drawer.checked) return;
      drawer.checked = false;
      document.documentElement.classList.remove("md-locked");
      drawer.dispatchEvent(new Event("change", { bubbles: true }));
    };

    // overlay de Material
    const overlay = document.querySelector(".md-overlay");
    if (overlay) {
      overlay.style.pointerEvents = "auto";
      overlay.addEventListener("click", closeDrawer, true);
      overlay.addEventListener("touchstart", closeDrawer, { passive: true, capture: true });
    }

    // cierra al navegar dentro del menú
    document.addEventListener("click", (e) => {
      const a = e.target.closest(".md-nav a");
      if (a) closeDrawer();
    }, true);
  });
})();
