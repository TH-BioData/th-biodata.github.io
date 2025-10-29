/* ============================================================
   TH BioData — Toggle global EN/ES 
   ============================================================ */
(function () {
  const root = document.documentElement;

  // --- 1. Leer preferencia guardada o usar inglés por defecto ---
  let lang = localStorage.getItem("th-lang");
  if (!lang) {
    lang = "en"; // idioma inicial si no existe en localStorage
    localStorage.setItem("th-lang", lang);
  }
  root.setAttribute("data-lang", lang);

  // --- 2. Función para actualizar idioma ---
  function setLang(newLang) {
    root.setAttribute("data-lang", newLang);
    localStorage.setItem("th-lang", newLang);
  }

  // --- 3. Crear el botón si no existe ---
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

  // --- 4. Log no intrusivo (puede eliminarse) ---
  console.log("[TH BioData] Language set to:", lang);
})();
