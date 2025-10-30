---
title: CorkyScab
hide:
  - toc
---

<!-- ====================== LAYOUT: ÍNDICE + CONTENIDO ====================== -->
<section class="th-section th-about-layout th-servicepage">

  <!-- ========== ÍNDICE LATERAL (bilingüe) ========== -->
  <nav class="th-sideindex" aria-label="CorkyScab index">
    <div class="th-sideindex__label lang lang-en">CorkyScab</div>
    <div class="th-sideindex__label lang lang-es">CorkyScab</div>

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
    <h1 class="th-page-title">CorkyScab</h1>

    <!-- Imagen + caption -->
    <figure style="margin:0 0 1rem;">
      <img src="../../assets/corkyscab_figure.png" alt="CorkyScab example" width="800" style="border-radius:12px;box-shadow:0 2px 12px rgba(0,0,0,.08);max-width:100%;">
      <figcaption class="lang lang-en" style="font-size:.92rem;color:#54606c;margin-top:.4rem;">Example of lesion segmentation and quantification using CorkyScab.</figcaption>
      <figcaption class="lang lang-es" style="font-size:.92rem;color:#54606c;margin-top:.4rem;">Ejemplo de segmentación y cuantificación de lesiones con CorkyScab.</figcaption>
    </figure>

    <hr/>

    <!-- Overview -->
    <h2 id="overview" class="lang lang-en">Overview</h2>
    <h2 id="overview" class="lang lang-es">Descripción General</h2>

    <p class="th-paragraph lang lang-en">
      <strong>CorkyScab</strong> is a Python-based tool for <strong>automated segmentation and quantification of tuber lesions</strong> caused by <em>Streptomyces spp.</em>  
      It enables the evaluation of <strong>lesion extent and severity</strong> through reproducible image analysis workflows for plant pathology.
    </p>
    <p class="th-paragraph lang lang-es">
      <strong>CorkyScab</strong> es una herramienta desarrollada en Python para la <strong>segmentación y cuantificación automática de lesiones en tubérculos</strong> causadas por <em>Streptomyces spp.</em>  
      Permite evaluar la <strong>superficie afectada y la severidad</strong> mediante flujos de análisis de imagen reproducibles para patología vegetal.
    </p>

    <hr/>

    <!-- Features -->
    <h2 id="features" class="lang lang-en">Main Features</h2>
    <h2 id="features" class="lang lang-es">Principales Características</h2>

    <div class="th-cards th-cards--services">
      <div class="th-card">
        <h3 class="lang lang-en"><span class="th-icon" data-lucide="image"></span> Lesion Segmentation</h3>
        <h3 class="lang lang-es"><span class="th-icon" data-lucide="image"></span> Segmentación de Lesiones</h3>
        <p class="lang lang-en">Automatic lesion segmentation using pixel-level thresholds and morphological filters.</p>
        <p class="lang lang-es">Segmentación automática mediante umbrales de color y filtros morfológicos.</p>
      </div>

      <div class="th-card">
        <h3 class="lang lang-en"><span class="th-icon" data-lucide="ruler"></span> Surface Quantification</h3>
        <h3 class="lang lang-es"><span class="th-icon" data-lucide="ruler"></span> Cuantificación de Superficie</h3>
        <p class="lang lang-en">Estimates lesion surface relative to total tuber area for severity assessment.</p>
        <p class="lang lang-es">Cuantifica el área lesionada en relación al área total del tubérculo para estimar la severidad.</p>
      </div>

      <div class="th-card">
        <h3 class="lang lang-en"><span class="th-icon" data-lucide="file-spreadsheet"></span> Data Export</h3>
        <h3 class="lang lang-es"><span class="th-icon" data-lucide="file-spreadsheet"></span> Exportación de Datos</h3>
        <p class="lang lang-en">Structured tables and processed image files ready for reporting and analysis.</p>
        <p class="lang lang-es">Tablas estructuradas e imágenes procesadas listas para reportes y análisis.</p>
      </div>

      <div class="th-card">
        <h3 class="lang lang-en"><span class="th-icon" data-lucide="layers"></span> Batch Processing</h3>
        <h3 class="lang lang-es"><span class="th-icon" data-lucide="layers"></span> Procesamiento por Lotes</h3>
        <p class="lang lang-en">Automated analysis of multiple samples with consistent outputs for large datasets.</p>
        <p class="lang lang-es">Procesamiento automatizado de múltiples muestras con resultados consistentes en grandes datasets.</p>
      </div>
    </div>

    <hr/>

    <!-- Tech -->
    <h2 id="tech" class="lang lang-en">Tech Stack</h2>
    <h2 id="tech" class="lang lang-es">Tecnologías</h2>
    <p class="th-paragraph"><code>Python</code>, <code>OpenCV</code>, <code>NumPy</code>, <code>Pandas</code>, <code>Matplotlib</code></p>

    <hr/>

    <!-- Repo -->
    <h2 id="repo" class="lang lang-en">Repository</h2>
    <h2 id="repo" class="lang lang-es">Repositorio</h2>
    <p class="th-paragraph">
      🔗 <a href="https://github.com/TH-BioData/CorkyScab" target="_blank">TH BioData – CorkyScab</a>
    </p>

    <div align="center" style="margin-top:1.2rem;">
      <em class="lang lang-en">Transforming biological complexity into clear, data-driven insight.</em>
      <em class="lang lang-es">Transformando la complejidad biológica en conocimiento claro y basado en datos.</em>
    </div>

  </div>
</section>
