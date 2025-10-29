<script>
/* ============================================================
   TH BioData — Toggle global EN/ES 
============================================================ */
(function () {
  const root = document.documentElement;

  // 1) Preferencia guardada o EN por defecto
  let lang = localStorage.getItem("th-lang");
  if (!lang) { lang = "en"; localStorage.setItem("th-lang", lang); }
  root.setAttribute("data-lang", lang);

  // 2) Helper
  function setLang(newLang){
    root.setAttribute("data-lang", newLang);
    localStorage.setItem("th-lang", newLang);
  }

  // 3) Botón flotante
  document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector(".th-lang-switch")) return;
    const btn = document.createElement("button");
    btn.className = "th-lang-switch";
    btn.textContent = lang === "en" ? "ES" : "EN";
    btn.title = "Switch language";
    btn.addEventListener("click", () => {
      const current = root.getAttribute("data-lang") || "en";
      const next = current === "en" ? "es" : "en";
      setLang(next);
      btn.textContent = next === "en" ? "ES" : "EN";
    });
    document.body.appendChild(btn);
  });
})();
</script>
