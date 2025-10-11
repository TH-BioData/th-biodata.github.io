# GeoBio

**EN** — Tools for geospatial analysis and CHELSA climatic extraction.  
**ES** — Herramientas para análisis geoespacial y extracción CHELSA.

- Repo: https://github.com/TH-BioData/GeoBio  
- Docs del paquete: https://tiagoalejoh.github.io/GeoBio

## Quickstart
```python
import geobio as gb
df = gb.load_occurrences("data.csv")
env = gb.extract_chelsa(df, variables=["tmean","precip"])
