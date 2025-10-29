/* ============================================================
TH BioData — Toggle global EN/ES (v1)
Guarda la preferencia en localStorage y actualiza el HTML root
============================================================ */
(function () {
  const root = document.documentElement;
  const saved = localStorage.getItem("th-lang") || "en";
  root.setAttribute("data-lang", saved);

  function setLang(lang) {
    root.setAttribute("data-lang", lang);
    localStorage.setItem("th-lang", lang);
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector(".th-lang-switch")) return;
    const btn = document.createElement("button");
    btn.className = "th-lang-switch";
    btn.textContent = saved === "en" ? "ES" : "EN";
    btn.title = "Switch language";
    btn.onclick = () => {
      const next = root.getAttribute("data-lang") === "en" ? "es" : "en";
      setLang(next);
      btn.textContent = next === "en" ? "ES" : "EN";
    };
    document.body.appendChild(btn);
  });
})();
