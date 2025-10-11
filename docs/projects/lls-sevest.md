# LLS-SevEst

**EN** — Peanut leaf lesion severity estimator (K-Means + defoliation).  
**ES** — Estimador de severidad de viruela del maní.

- Repo: https://github.com/TH-BioData/LLS-SevEst  
- Docs del paquete: https://tiagoalejoh.github.io/LLS-SevEst

## Quickstart
```python
import lls_sev_est as lls
res = lls.lls_sev_est("path/to/image.png", nodes=5, results_df=None, show_results=True)
