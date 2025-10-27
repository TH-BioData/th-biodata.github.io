# 🔬 TadpoleNet

![TadpoleNet example](../assets/tadpolenet_figure.png){ width="800" }

*Example of semantic segmentation and area quantification on an embryo using TadpoleNet.*

## 🇬🇧 English
**TadpoleNet** is a Deep Learning model (UNet + EfficientNet-B0) for **automated semantic segmentation of embryos** in microscopy images.
It allows researchers to automatically **isolate the embryo's surface** and **quantify its area** (e.g., in $cm^2$), replacing time-consuming manual analysis workflows.

### Main features
- **High-precision semantic segmentation** using a UNet architecture with a pre-trained EfficientNet-B0 encoder.
- **Automated area calculation** of the segmented mask, with conversion from pixels to real-world units (e.g., $cm^2$) based on a provided scale.
- **Batch processing** for analyzing entire folders of new images, generating mask files and visual overlays for each.
- **Results export** as binary PNG masks, JPG overlays, and (optionally) a CSV file summarizing the area calculations for each image.
- Built on PyTorch and trained for a specific binary task (embryo vs. background).

TadpoleNet provides a fast, objective, and reproducible method for quantifying key morphometric parameters in embryology studies.

### 🧩 Tech stack
`Python`, `PyTorch`, `segmentation-models-pytorch`, `Albumentations`, `OpenCV`, `NumPy`, `Pandas`, `Matplotlib`

### 📂 Repository
🔗 [Your-GitHub-User/TadpoleNet](https://github.com/Your-GitHub-User/TadpoleNet)  
📘 Documentation: (Add link to documentation if available)

---

## 🇪🇸 Español
**TadpoleNet** es un modelo de Deep Learning (UNet + EfficientNet-B0) para la **segmentación semántica automática de embriones** en imágenes de microscopía.
Permite a los investigadores **aislar automáticamente la superficie del embrión** y **cuantificar su área** (ej. en $cm^2$), reemplazando los flujos de trabajo de análisis manual.

### Principales características
- **Segmentación semántica de alta precisión** usando una arquitectura UNet con un *encoder* EfficientNet-B0 pre-entrenado.
- **Cálculo automático de área** de la máscara segmentada, con conversión de píxeles a unidades reales (ej. $cm^2$) basada en una escala proporcionada.
- **Procesamiento por lotes** para analizar carpetas completas de imágenes nuevas, generando archivos de máscara y *overlays* visuales para cada una.
- **Exportación de resultados** como máscaras PNG binarias, *overlays* JPG y (opcionalmente) un archivo CSV que resume los cálculos de área por imagen.
- Construido sobre PyTorch y entrenado para una tarea binaria específica (embrión vs. fondo).

TadpoleNet proporciona un método rápido, objetivo y reproducible para cuantificar parámetros morfométricos clave en estudios de embriología.

---

> “Transforming biological complexity into clear, data-driven insight.”

---
