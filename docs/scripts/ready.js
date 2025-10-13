<script>
(function () {
  function markReady() {
    // Aplícalo en el siguiente frame para asegurar que los estilos iniciales se apliquen primero
    requestAnimationFrame(() => {
      document.body.classList.add("ready");
      // Fuerza reflow para “fijar” la transición antes de cualquier .scrolled
      void document.body.offsetHeight;
      // Re-evaluá el estado de scroll por si ya se cargó scrolleado
      const ev = new Event("scroll");
      window.dispatchEvent(ev);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", markReady, { once: true });
  } else {
    markReady();
  }
})();
</script>
