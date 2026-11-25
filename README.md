# REII — Real Estate Investment Intelligence

Plataforma web que ajuda proprietários particulares (herdeiros, donos de segundas habitações, pequenos investidores) a decidir o que fazer com um imóvel: **vender** ou **arrendar**, com indicadores financeiros (cash flow, VAL, TIR), fontes e pressupostos visíveis.

Projeto de grupo de **CVPBT / GPTSI** — Iscte, 2026/27 (Grupo 9).

## Arquitetura

```
browser (React, Vercel) ──HTTPS──▶ API REST (FastAPI, Render) ──▶ PostgreSQL (Supabase)
                                         │
                                         ├─ motor financeiro (Python, determinístico e testável)
                                         ├─ API de IA (explica resultados — a IA interpreta, não calcula)
                                         ├─ BPstat / Banco de Portugal (taxas de juro)
                                         └─ Stripe (créditos) — fora do MVP
```

## Estrutura

| Pasta | O quê |
|---|---|
| `frontend/` | App React + Vite (ecrãs: caracterização do imóvel → pressupostos → resultados) |
| `frontend/site/` | Site público em Next.js: Início, Como funciona, Para quem é, Preços (ver `frontend/site/README.md`) |
| `backend/` | API FastAPI + motor financeiro |
| `docs/` | Decisões, requisitos do MVP (30%), notas técnicas |

## Correr localmente

```bash
# backend
cd backend
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
uvicorn app.main:app --reload       # http://localhost:8000/docs

# frontend
cd frontend
npm install
cp .env.example .env
npm run dev                          # http://localhost:5173

# site público
cd frontend/site
npm install
npm run dev                          # http://localhost:3000
```

## Regras do repositório

- `main` é sempre o que está entregável. Trabalho novo num branch (`feat/...`, `fix/...`) e Pull Request.
- Nunca fazer commit de chaves (`.env` está no `.gitignore`).
- Uso de IA é permitido mas tem de ser revisto pelo grupo e registado no anexo de prompts do relatório.

## Equipa

Eduardo Carvalho · Miguel Quinta · Manuel Vidal · Fredson Munguambe · Francisco Cabral · Vicente · Mauro
