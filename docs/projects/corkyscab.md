# CorkyScab

**EN** — Automated tuber lesion detection & surface quantification.  
**ES** — Detección y cuantificación automática de lesiones en tubérculos.

- Repo: https://github.com/TH-BioData/CorkyScab  
- Docs del paquete: https://tiagoalejoh.github.io/CorkyScab

## Quickstart
```python
from corkyscab import analyze_corky_scab
df = analyze_corky_scab("data/images/", save_tables=True, save_figures=True)
