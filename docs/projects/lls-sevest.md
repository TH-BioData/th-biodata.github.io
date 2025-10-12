# 🍃 LLS-SevEst


![LLS-SevEst example](../assets/lls-sevest_figure.png){ width="800" }

*Example of lesion segmentation and defoliation-adjusted severity estimation.*

## 🇬🇧 English
**LLS-SevEst (Late Leaf Spot Severity Estimator)** is a Python package developed to **quantify the severity of leaf lesions** caused by *Nothopassalora personata* in peanut (*Arachis hypogaea*).  
It combines **K-Means image segmentation** with a **defoliation-adjustment algorithm** to calculate both lesion coverage and effective severity on each leaf sample.

### Core features
- Segmentation of leaf lesions using **unsupervised clustering (K-Means)**.  
- Estimation of **percentage of affected area** per leaflet or image.  
- Correction of severity according to **leaf defoliation index**.  
- Export of **tabulated results (Excel/CSV)** and **segmented images**.  
- Optional **visualization interface** for quality control and interpretation.  

LLS-SevEst automates what traditionally requires manual assessment, providing **objective, reproducible, and scalable severity estimation** for plant pathology research and crop evaluation.

### 🧩 Tech stack
`Python`, `OpenCV`, `Scikit-learn`, `NumPy`, `Pandas`, `Matplotlib`

### 📂 Repository
🔗 [TH BioData – LLS-SevEst](https://github.com/TH-BioData/LLS-SevEst)  
📘 Documentation: https://tiagoalejoh.github.io/LLS-SevEst

---

## 🇪🇸 Español
**LLS-SevEst (Late Leaf Spot Severity Estimator)** es un paquete de Python desarrollado para **cuantificar la severidad de lesiones foliares** causadas por *Nothopassalora personata* en hojas de maní (*Arachis hypogaea*).  
Combina **segmentación de imágenes por K-Means** con un **ajuste por defoliación** que permite estimar con precisión el impacto real de la enfermedad en cada muestra.

### Funcionalidades principales
- **Segmentación no supervisada** de lesiones mediante K-Means.  
- Cálculo del **porcentaje de superficie afectada** por hoja o imagen.  
- Ajuste de severidad considerando la **defoliación** total observada.  
- **Exportación automática** de resultados en Excel y de imágenes procesadas.  
- **Visualización interactiva** para control de calidad.  

LLS-SevEst reemplaza la evaluación manual con una metodología **objetiva, reproducible y adaptable**, optimizando el análisis de severidad en estudios fitopatológicos y programas de mejoramiento.

---

> “Transforming biological complexity into clear, data-driven insight.”

---

