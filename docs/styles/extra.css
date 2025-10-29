/* ============================================================
TH BioData Consulting — Hero full-bleed + contenido con márgenes (v13)
Hero sin franja blanca + texto blanco opaco + tarjetas 4 por fila (desktop) / 2x2 (móvil)
============================================================ */

/* ---------- Paleta ---------- */
:root{
  --th-color-corporate-blue:#0F3D73;
  --th-color-corporate-light-blue:#7CC6FF;
  --th-content-max:1600px;
  --th-gap:24px;
}

/* ---------- Tokens del tema ---------- */
[data-md-color-scheme="default"]{
  --md-primary-fg-color:var(--th-color-corporate-blue);
  --md-accent-fg-color:var(--th-color-corporate-light-blue);
}
[data-md-color-scheme="slate"]{
  --md-primary-fg-color:var(--th-color-corporate-blue);
  --md-accent-fg-color:var(--th-color-corporate-light-blue);
}

/* ---------- Header ---------- */
.md-header,
.md-tabs{ background:#0F3D73!important; color:#fff!important; }
body:has(#th-hero) .md-header{ backdrop-filter:none!important; }

/* Ocultar sidebars SOLO en Home */
body:has(#th-hero) .md-sidebar--primary,
body:has(#th-hero) .md-sidebar--secondary{
  display:none!important; visibility:hidden!important; width:0!important;
}

/* Evitar scroll horizontal */
body:has(#th-hero){ overflow-x:hidden; }

/* ============================================================
HERO full-bleed (sin franja blanca)
============================================================ */
#th-hero{
  position:relative;
  width:100vw;
  left:50%; right:50%;
  margin-left:-50vw; margin-right:-50vw;
  margin-top:0!important; padding:0!important;
  min-height:100vh;
  overflow:hidden;
  z-index:0;
  background-color:#0F3D73; /* fallback sólido bajo imagen */
}

/* Fondo hero */
#th-hero .hero__bg{
  position:absolute; inset:0; z-index:0;
  background:url('../assets/home_hero_v2.jpg') center/cover no-repeat;
  transition:transform 15s linear, filter 2s ease;
}
#th-hero .hero__bg:hover{ transform:scale(1.05); filter:brightness(1.06); }

/* Overlay degradado */
#th-hero::before{
  content:""; position:absolute; inset:0; z-index:1;
  background:linear-gradient(to bottom,
    rgba(10,35,80,.2) 0%,
    rgba(10,35,80,.45) 40%,
    rgba(10,35,80,.75) 100%);
}

/* Contenido centrado */
#th-hero .hero__content{
  position:absolute; top:50%; left:50%; transform:translate(-50%,-50%);
  z-index:2; display:flex; flex-direction:column; align-items:center;
  text-align:center; color:#fff;
  padding:0 5%; width:min(1100px,92vw);
}

/* Título blanco sólido */
#th-hero .hero__title{
  color:#ffffff!important;
  font-size:clamp(40px,7vw,72px);
  font-weight:800; line-height:1.1;
  margin:0 0 20px;
  letter-spacing:.4px;
  text-shadow:0 6px 18px rgba(0,0,0,.75);
  opacity:1;
}

/* Subtítulo */
#th-hero .hero__tag{
  color:#ffffff!important;
  font-size:clamp(18px,2vw,26px);
  font-weight:400;
  line-height:1.6;
  margin:0 0 38px;
  text-shadow:0 4px 14px rgba(0,0,0,.65);
  opacity:.98;
}

/* Botón CTA */
#th-hero .hero__cta{
  display:inline-block; padding:16px 36px;
  font-size:clamp(16px,1.8vw,20px);
  font-weight:700;
  border-radius:10px;
  color:#fff!important;
  background:var(--th-color-corporate-blue);
  text-decoration:none;
  box-shadow:0 5px 14px rgba(0,0,0,.35);
  transition:transform .25s, background .25s, box-shadow .25s;
}
#th-hero .hero__cta:hover{
  background:#004B8E;
  transform:translateY(-4px);
  box-shadow:0 10px 22px rgba(0,0,0,.45);
}

/* ============================================================
Contenido bajo hero
============================================================ */
body:has(#th-hero) #th-hero ~ *{
  max-width:var(--th-content-max);
  margin:0 auto;
  padding:2rem 1rem;
  box-sizing:border-box;
}

body:has(#th-hero) #th-hero ~ * h2{
  color:var(--md-primary-fg-color);
  font-weight:800;
  margin-top:1.6rem;
  margin-bottom:.6rem;
  border-bottom:3px solid var(--th-color-corporate-light-blue);
  display:inline-block;
  padding-bottom:.4rem;
}

/* ============================================================
Tarjetas — Grid: 4 columnas desktop / 2 columnas móvil (2x2)
============================================================ */
.md-content .th-cards,
.md-typeset .th-cards{
  display: grid !important;
  grid-template-columns: repeat(4, minmax(0, 1fr)); /* Desktop: 4 fijas */
  gap: var(--th-gap, 24px);
  align-items: stretch;
  max-width: var(--th-content-max, 1600px);
  margin: 2.5rem auto 3rem;
  padding: 0 1rem;
  overflow: visible; /* sin scroll horizontal */
}

/* Tarjeta base */
.md-content .th-card,
.md-typeset .th-card{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #f9fbfd;
  border: 1px solid rgba(0,0,0,.06);
  border-radius: 14px;
  box-shadow: 0 2px 6px rgba(0,0,0,.05);
  transition: transform .25s, box-shadow .25s;
  padding: 1.25rem;
}

/* Hover */
.th-card:hover{
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,.08);
}

/* Alturas por proporción (elige UNO por tarjeta en tu HTML) */
.th-card--tall{        /* Rectángulo alto ≈ 3:4 */
  aspect-ratio: 3 / 4;
  min-height: 360px;   /* respaldo */
}
.th-card--square{      /* Cuadrada 1:1 */
  aspect-ratio: 1 / 1;
  min-height: 300px;
}

/* Contenido interno crece y respeta padding */
.th-card__body{ flex: 1; }

/* Títulos y textos */
.th-card h3{
  color: var(--th-color-corporate-blue, #0F3D73);
  font-size: 1.15rem;
  font-weight: 800;
  margin: 0 0 .6rem;
}
.th-card p{
  color: #2a2f35;
  font-size: .96rem;
  line-height: 1.55;
}

/* ---------- Responsive: 2x2 en móvil/tablet ---------- */
@media (max-width: 1024px){
  .md-content .th-cards,
  .md-typeset .th-cards{
    grid-template-columns: repeat(2, minmax(0, 1fr)); /* 2 columnas */
    gap: 20px;
    padding: 0 .75rem;
  }
  .th-card--tall{ min-height: 320px; }
  .th-card--square{ min-height: 260px; }
}

@media (max-width: 640px){
  .md-content .th-cards,
  .md-typeset .th-cards{
    grid-template-columns: repeat(2, minmax(0, 1fr)); /* 2 columnas (2x2) */
    gap: 16px;
    padding: 0 .5rem;
  }
  .th-card--tall{ min-height: 300px; }
  .th-card--square{ min-height: 240px; }
}

/* ============================================================
Modo oscuro
============================================================ */
[data-md-color-scheme="slate"] .th-card{
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.15);
  box-shadow: 0 2px 10px rgba(0,0,0,.25);
}
[data-md-color-scheme="slate"] .th-card:hover{
  background: rgba(255,255,255,.10);
  box-shadow: 0 6px 18px rgba(0,0,0,.35);
}
[data-md-color-scheme="slate"] .th-card h3{ color: var(--th-color-corporate-light-blue)!important; }
[data-md-color-scheme="slate"] .th-card p{ color:#f2f4f8!important; }

/* ============================================================
Accesibilidad
============================================================ */
@media (prefers-reduced-motion: reduce){
  *{ transition:none !important; }
}

/* ============================================================
FIX FINAL — eliminar franja blanca entre barra y hero
============================================================ */

/* Quita el margen/padding del primer contenedor debajo del header */
body:has(#th-hero) .md-main,
body:has(#th-hero) .md-main__inner,
body:has(#th-hero) .md-container {
  margin-top: 0 !important;
  padding-top: 0 !important;
}

/* Elimina cualquier espacio residual del tema en el primer hijo tras el header */
.md-header + .md-container {
  margin-top: 0 !important;
  padding-top: 0 !important;
}

/* Asegura que el hero toque exactamente el borde inferior del header */
body:has(#th-hero) #th-hero {
  margin-top: -1px !important;  /* corrige 1px de borde invisible */
}
