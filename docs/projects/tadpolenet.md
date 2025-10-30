---
title: TadpoleNet
hide:
  - toc
---

<!-- ====================== LAYOUT: ÍNDICE + CONTENIDO ====================== -->
<section class="th-section th-about-layout th-servicepage">

  <!-- ========== ÍNDICE LATERAL (bilingüe) ========== -->
  <nav class="th-sideindex" aria-label="TadpoleNet index">
    <div class="th-sideindex__label lang lang-en">TadpoleNet</div>
    <div class="th-sideindex__label lang lang-es">TadpoleNet</div>

    <ul>
      <li><a href="#overview">
        <span class="lang lang-en">Overview</span>
        <span class="lang lang-es">Descripción General</span>
      </a></li>
      <li><a href="#features">
        <span class="lang lang-en">Main Features</span>
        <span class="lang lang-es">Principales Características</span>
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
    <h1 class="th-page-title">TadpoleNet</h1>

    <!-- Imagen + caption -->
    <figure style="margin:0 0 1rem;">
      <img src="../../assets/tadpolenet_figure.png" alt="TadpoleNet example" width="800" style="border-radius:12px;box-shadow:0 2px 12px rgba(0,0,0,.08);max-width:100%;">
      <figcaption class="lang lang-en" style="font-size:.92rem;color:#54606c;margin-top:.4rem;">Example of semantic segmentation and area quantification on an embryo using TadpoleNet.</figcaption>
      <figcaption class="lang lang-es" style="font-size:.92rem;color:#54606c;margin-top:.4rem;">Ejemplo de segmentación semántica y cuantificación de área en un embrión usando TadpoleNet.</figcaption>
    </figure>

    <hr/>

    <!-- Overview -->
    <h2 id="overview" class="lang lang-en">Overview</h2>
    <h2 id="overview" class="lang lang-es">Descripción General</h2>

    <p class="th-paragraph lang lang-en">
      <strong>TadpoleNet</strong> is a Deep Learning model (UNet + EfficientNet-B0) for <strong>automated semantic segmentation of embryos</strong>.  
      It allows researchers to automatically <strong>isolate the embryo’s surface</strong> and <strong>quantify its area</strong> (e.g., in cm²), replacing manual workflows with an objective, reproducible method.
    </p>
    <p class="th-paragraph lang lang-es">
      <strong>TadpoleNet</strong> es un modelo de Deep Learning (UNet + EfficientNet-B0) para la <strong>segmentación semántica automática de embriones</strong>.  
      Permite <strong>aislar automáticamente la superficie del embrión</strong> y <strong>cuantificar su área</strong> (ej. en cm²), reemplazando los flujos de trabajo manuales por un método objetivo y reproducible.
    </p>

    <hr/>

    <!-- Features -->
    <h2 id="features" class="lang lang-en">Main Features</h2>
    <h2 id="features" class="lang lang-es">Principales Características</h2>

    <div class="th-cards th-cards--services">
      <div class="th-card">
        <h3 class="lang lang-en"><span class="th-icon" data-lucide="brain"></span> Semantic Segmentation</h3>
        <h3 class="lang lang-es"><span class="th-icon" data-lucide="brain"></span> Segmentación Semántica</h3>
        <p class="lang lang-en">UNet architecture with EfficientNet-B0 encoder for precise pixel-level segmentation.</p>
        <p class="lang lang-es">Arquitectura UNet con *encoder* EfficientNet-B0 para segmentación precisa a nivel de píxel.</p>
      </div>

      <div class="th-card">
        <h3 class="lang lang-en"><span class="th-icon" data-lucide="ruler"></span> Area Quantification</h3>
        <h3 class="lang lang-es"><span class="th-icon" data-lucide="ruler"></span> Cuantificación de Área</h3>
        <p class="lang lang-en">Automatic conversion from pixels to real-world units based on calibration scale.</p>
        <p class="lang lang-es">Conversión automática de píxeles a unidades reales según una escala de calibración.</p>
      </div>

      <div class="th-card">
        <h3 class="lang lang-en"><span class="th-icon" data-lucide="layers"></span> Batch Processing</h3>
        <h3 class="lang lang-es"><span class="th-icon" data-lucide="layers"></span> Procesamiento por Lotes</h3>
        <p class="lang lang-en">Processes entire image folders, generating binary masks and overlay files.</p>
        <p class="lang lang-es">Analiza carpetas completas de imágenes, generando máscaras binarias y *overlays* visuales.</p>
      </div>

      <div class="th-card">
        <h3 class="lang lang-en"><span class="th-icon" data-lucide="file-spreadsheet"></span> Results Export</h3>
        <h3 class="lang lang-es"><span class="th-icon" data-lucide="file-spreadsheet"></span> Exportación de Resultados</h3>
        <p class="lang lang-en">Exports masks, overlays, and CSV summary tables with calculated areas.</p>
        <p class="lang lang-es">Exporta máscaras, *overlays* y archivos CSV con los valores de área calculados.</p>
      </div>
    </div>

    <hr/>

    <!-- Tech -->
    <h2 id="tech" class="lang lang-en">Tech Stack</h2>
    <h2 id="tech" class="lang lang-es">Tecnologías</h2>
    <p class="th-paragraph"><code>Python</code>, <code>PyTorch</code>, <code>segmentation-models-pytorch</code>, <code>Albumentations</code>, <code>OpenCV</code>, <code>NumPy</code>, <code>Pandas</code>, <code>Matplotlib</code></p>

    <hr/>

    <!-- Repo -->
    <h2 id="repo" class="lang lang-en">Repository</h2>
    <h2 id="repo" class="lang lang-es">Repositorio</h2>
    <p class="th-paragraph">
      🔗 <a href="https://github.com/TH-BioData/TadpoleNet" target="_blank">TH BioData – TadpoleNet</a>
    </p>

    <div align="center" style="margin-top:1.2rem;">
      <em class="lang lang-en">Transforming biological complexity into clear, data-driven insight.</em>
      <em class="lang lang-es">Transformando la complejidad biológica en conocimiento claro y basado en datos.</em>
    </div>

  </div>
</section>
