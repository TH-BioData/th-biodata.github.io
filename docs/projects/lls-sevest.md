---
title: LLS-SevEst
hide:
  - toc
---

<!-- ====================== LAYOUT: ÍNDICE + CONTENIDO ====================== -->
<section class="th-section th-about-layout th-servicepage">

  <!-- ========== ÍNDICE LATERAL (bilingüe) ========== -->
  <nav class="th-sideindex" aria-label="LLS-SevEst index">
    <div class="th-sideindex__label lang lang-en">LLS-SevEst</div>
    <div class="th-sideindex__label lang lang-es">LLS-SevEst</div>

    <ul>
      <li><a href="#overview">
        <span class="lang lang-en">Overview</span>
        <span class="lang lang-es">Descripción General</span>
      </a></li>
      <li><a href="#features">
        <span class="lang lang-en">Core Features</span>
        <span class="lang lang-es">Funcionalidades</span>
      </a></li>
      <li><a href="#pubs">
        <span class="lang lang-en">Publications</span>
        <span class="lang lang-es">Publicaciones</span>
      </a></li>
      <li><a href="#tech">
        <span class="lang lang-en">Tech Stack</span>
        <span class="lang lang-es">Tecnologías</span>
      </a></li>
      <li><a href="#repo">
        <span class="lang lang-en">Repository</span>
        <span class="lang lang-es">Repositorio</span>
      </a></li>
    </ul>
  </nav>

  <!-- ========== CONTENIDO PRINCIPAL ========== -->
  <div class="th-about-content">

    <!-- Título -->
    <h1 class="th-page-title">LLS-SevEst</h1>

    <!-- Imagen + caption -->
    <figure style="margin:0 0 1rem;">
      <img src="../../assets/lls-sevest_figure.png" alt="LLS-SevEst example" width="800" style="border-radius:12px;box-shadow:0 2px 12px rgba(0,0,0,.08);max-width:100%;">
      <figcaption class="lang lang-en" style="font-size:.92rem;color:#54606c;margin-top:.4rem;">Example of lesion segmentation and defoliation-adjusted severity estimation.</figcaption>
      <figcaption class="lang lang-es" style="font-size:.92rem;color:#54606c;margin-top:.4rem;">Ejemplo de segmentación de lesiones y estimación de severidad ajustada por defoliación.</figcaption>
    </figure>

    <hr/>

    <!-- Overview -->
    <h2 id="overview" class="lang lang-en">Overview</h2>
    <h2 id="overview" class="lang lang-es">Descripción General</h2>

    <p class="th-paragraph lang lang-en">
      <strong>LLS-SevEst (Late Leaf Spot Severity Estimator)</strong> is a Python package to <strong>quantify the severity of leaf lesions</strong> caused by
      <em>Nothopassalora personata</em> in peanut (<em>Arachis hypogaea</em>). It combines <strong>K-Means image segmentation</strong> with a
      <strong>defoliation-adjustment algorithm</strong> to compute both lesion coverage and effective severity for each sample.
    </p>
    <p class="th-paragraph lang lang-es">
      <strong>LLS-SevEst (Late Leaf Spot Severity Estimator)</strong> es un paquete de Python para <strong>cuantificar la severidad de lesiones foliares</strong>
      causadas por <em>Nothopassalora personata</em> en maní (<em>Arachis hypogaea</em>). Combina <strong>segmentación por K-Means</strong> con un
      <strong>ajuste por defoliación</strong> para estimar la cobertura de lesiones y la severidad efectiva de cada muestra.
    </p>

    <hr/>

    <!-- Core features (tarjetas 2x2) -->
    <h2 id="features" class="lang lang-en">Core Features</h2>
    <h2 id="features" class="lang lang-es">Funcionalidades</h2>

    <div class="th-cards th-cards--services">
      <div class="th-card">
        <h3 class="lang lang-en"><span class="th-icon" data-lucide="image"></span> K-Means Segmentation</h3>
        <h3 class="lang lang-es"><span class="th-icon" data-lucide="image"></span> Segmentación K-Means</h3>
        <p class="lang lang-en">Unsupervised clustering for pixel-level lesion detection and mask generation.</p>
        <p class="lang lang-es">Clustering no supervisado para detectar lesiones a nivel de píxel y generar máscaras.</p>
      </div>

      <div class="th-card">
        <h3 class="lang lang-en"><span class="th-icon" data-lucide="percent"></span> Affected Area (%)</h3>
        <h3 class="lang lang-es"><span class="th-icon" data-lucide="percent"></span> Superficie Afectada (%)</h3>
        <p class="lang lang-en">Per-leaflet or per-image computation of lesion coverage.</p>
        <p class="lang lang-es">Cálculo por foliolo o por imagen del porcentaje de superficie lesionada.</p>
      </div>

      <div class="th-card">
        <h3 class="lang lang-en"><span class="th-icon" data-lucide="activity"></span> Defoliation Adjustment</h3>
        <h3 class="lang lang-es"><span class="th-icon" data-lucide="activity"></span> Ajuste por Defoliación</h3>
        <p class="lang lang-en">Algorithm that corrects severity according to defoliation index.</p>
        <p class="lang lang-es">Algoritmo que corrige la severidad en función del índice de defoliación.</p>
      </div>

      <div class="th-card">
        <h3 class="lang lang-en"><span class="th-icon" data-lucide="file-spreadsheet"></span> Export & QC</h3>
        <h3 class="lang lang-es"><span class="th-icon" data-lucide="file-spreadsheet"></span> Exportación & QC</h3>
        <p class="lang lang-en">Excel/CSV tables and processed images; optional visualization for quality control.</p>
        <p class="lang lang-es">Tablas Excel/CSV e imágenes procesadas; interfaz opcional de visualización para control de calidad.</p>
      </div>
    </div>

    <hr/>

    <!-- Publications -->
    <h2 id="pubs" class="lang lang-en">Publications</h2>
    <h2 id="pubs" class="lang lang-es">Publicaciones</h2>

    <ul>
      <li class="lang lang-en">
        Herrador, T. A. &amp; al., 2025. <a href="https://ciacabrera.com.ar/revista40/?fbclid=PAZXh0bgNhZW0CMTEAAaeFsd9JidXcBtdBx9KLZbz8Dt_7WLDQuZrMWu5EbOHVb7fdcGIOgqg-1OK3pg_aem_zTjLnvjpmCPYUP4E_Oibgg#page/46" target="_blank">LLS-SevEst 2.0: Toward more precise severity estimation of peanut leaf spot.</a>
      </li>
      <li class="lang lang-en">
        Herrador, T. A. &amp; al., 2024. <a href="https://ria.inta.gob.ar/lls-sevest-late-leaf-spot-severity-estimator-a-machine-learning-approach-to-assessing-nothopassalora-personata-in-peanut" target="_blank">LLS-SevEst — A machine-learning approach to assessing <em>N. personata</em> in peanut.</a>
      </li>

      <li class="lang lang-es">
        Herrador, T. A. &amp; col., 2025. <a href="https://ciacabrera.com.ar/revista40/?fbclid=PAZXh0bgNhZW0CMTEAAaeFsd9JidXcBtdBx9KLZbz8Dt_7WLDQuZrMWu5EbOHVb7fdcGIOgqg-1OK3pg_aem_zTjLnvjpmCPYUP4E_Oibgg#page/46" target="_blank">LLS-SevEst 2.0: Camino hacia una estimación más precisa de la severidad de la viruela del maní.</a>
      </li>
      <li class="lang lang-es">
        Herrador, T. A. &amp; col., 2024. <a href="https://ria.inta.gob.ar/lls-sevest-late-leaf-spot-severity-estimator-a-machine-learning-approach-to-assessing-nothopassalora-personata-in-peanut" target="_blank">LLS-SevEst — Enfoque de ML para evaluar <em>N. personata</em> en maní.</a>
      </li>
    </ul>

    <hr/>

    <!-- Tech -->
    <h2 id="tech" class="lang lang-en">Tech Stack</h2>
    <h2 id="tech" class="lang lang-es">Tecnologías</h2>
    <p class="th-paragraph"><code>Python</code>, <code>OpenCV</code>, <code>Scikit-learn</code>, <code>NumPy</code>, <code>Pandas</code>, <code>Matplotlib</code></p>

    <hr/>

    <!-- Repo -->
    <h2 id="repo" class="lang lang-en">Repository</h2>
    <h2 id="repo" class="lang lang-es">Repositorio</h2>
    <p class="th-paragraph">
      🔗 <a href="https://github.com/TH-BioData/lls_sev_est" target="_blank">TH BioData – LLS-SevEst</a>
    </p>

    <div align="center" style="margin-top:1.2rem;">
      <em class="lang lang-en">Transforming biological complexity into clear, data-driven insight.</em>
      <em class="lang lang-es">Transformando la complejidad biológica en conocimiento claro y basado en datos.</em>
    </div>

  </div>
</section>
