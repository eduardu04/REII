# REII · Real Estate Investment Intelligence

Plataforma web que ajuda a decidir o que fazer com um imóvel: **vender** ou **arrendar** (longa duração), com os indicadores financeiros, as fontes e os pressupostos à vista. Decisões informadas e independentes, sem comissões de imobiliárias.

É para proprietários particulares (sobretudo herdeiros e donos de segunda habitação) e para profissionais que gerem vários imóveis (pequenos investidores, gestoras de arrendamento, contabilistas, advogados de heranças).

Projeto de grupo de **CVPBT (Grupo 11)** e **GPTSI (Grupo 9)**, Iscte, 2026/27.

## Arquitetura

```
website (Next.js, Vercel) ──▶ MVP (Next.js, Vercel) ──HTTPS──▶ API REST (FastAPI, Render) ──▶ PostgreSQL (Supabase)
                                                                   │
                                                                   ├─ motor de cálculo (Python: calcula todos os valores)
                                                                   ├─ agentes Recolha, Mercado e Explicação (API da Anthropic; não calculam valores)
                                                                   ├─ INE e BPstat (APIs públicas)
                                                                   └─ Stripe em modo de teste (pacotes de créditos)
```

Detalhe em [`docs/arquitetura.md`](docs/arquitetura.md).

## Estrutura

| Pasta | O quê |
|---|---|
| `frontend/site/` | Website corporativo (Next.js) |
| `frontend/app/` | MVP (Next.js) |
| `backend/` | API FastAPI + motor de cálculo |
| `supabase/` | Migrações da base de dados |
| `docs/` | Arquitetura e MVP |

## Correr localmente

```bash
# backend
cd backend
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
uvicorn app.main:app --reload       # http://localhost:8000/docs

# MVP
cd frontend/app
npm install
cp .env.example .env.local
npm run dev                          # http://localhost:3000
```

## Regras do repositório

- `main` é sempre o que está entregável. Trabalho novo num branch (`feat/...`, `fix/...`) e Pull Request.
- Nunca fazer commit de chaves (`.env` está no `.gitignore`).
- O uso de IA é permitido, mas tem de ser revisto pelo grupo e registado no anexo de prompts do relatório.

## Equipa

Eduardo Carvalho (Backend e IA) · Miguel Quinta (Análise de Dados e Financeira) · Fredson Munguambe (Frontend e Experiência do Utilizador) · Vicente Viela (Product Owner) · Manuel Vidal (Gestor de documentação) · Francisco Cabral (Project Manager) · Mauro Fortes (Marketing e Comunicação)
