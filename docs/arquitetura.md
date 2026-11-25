# Arquitetura e stack do MVP · REII

Responsável: Eduardo Carvalho (Backend e IA) · REII-6 (3.2) · Rascunho de 25/11/2026 para validação do grupo

Segue a arquitetura técnica da Entrega 1 (Figura 6, secção 2.2.1), que descreve a plataforma completa: frontend React/Next.js na Vercel, backend Python/FastAPI no Render, PostgreSQL no Supabase e a API da Anthropic (Claude) para os agentes, sempre por HTTPS e com os dados pessoais tratados segundo o RGPD. Os diagramas de contexto e tecnológico estão no Confluence (T2_3).

## Estrutura do repositório

```
frontend/site/   Website corporativo (Next.js 16) · projeto Vercel próprio
frontend/app/    MVP (Next.js 16) · projeto Vercel próprio
backend/         API FastAPI: motores de estimativa e financeiro + coordenação dos agentes · Render
supabase/        Migrações da base de dados
docs/            Arquitetura, fontes e pressupostos
```

O website não é o MVP nem está dentro dele (indicação dos docentes): são dois projetos separados que partilham a marca. O website leva ao MVP.

## Componentes

| Camada | Tecnologia | Responsabilidade |
|---|---|---|
| Website | Next.js 16, Tailwind 4, shadcn | Cartão de visita do produto; leva ao MVP |
| MVP | Next.js 16 (App Router), Tailwind 4, shadcn | Chatbot onde o utilizador descreve o imóvel, contributo colaborativo, resultados, cenários e explicação |
| API | FastAPI (Python 3.12) | Valida os dados, corre os motores, coordena os agentes e fala com a BD |
| Motor de estimativa | Python | Intervalo de valor de venda e de renda e n.º de comparáveis; com menos de 5 comparáveis responde «dados insuficientes» |
| Motor financeiro | Python (`backend/app/finance.py`), determinístico e testável | Vender vs arrendar: todos os indicadores financeiros |
| Base de dados | Supabase (PostgreSQL), região UE | Zonas, INE, BPstat, parâmetros fiscais, imóveis, contributos, análises |
| IA | API da Anthropic (Claude) | Agentes Recolha, Mercado e Explicação |
| Pagamentos | Stripe em modo de teste | Pacotes de créditos |

## Agentes (E1, Fig. 6)

Os agentes são coordenados pelo backend e **não calculam valores**: os números vêm sempre dos motores de estimativa e financeiro.

1. **Recolha:** conversa com o proprietário e transforma as respostas em dados do imóvel.
2. **Mercado:** normaliza os registos colaborativos (e os anúncios, quando houver acesso), escolhe os comparáveis e assinala registos suspeitos.
3. **Explicação:** interpreta os resultados do motor e escreve-os em linguagem simples, com os pressupostos. Explica, **não escolhe** a estratégia.

## Indicadores do motor financeiro

Rendimento líquido, cash flow, ROI, IRS, mais-valias, IMI, VAL, TIR e payback (E1). Também Cash-on-Cash e DSCR (decisão do grupo, ainda por entregar). Os indicadores que não se aplicam a um caso aparecem identificados e justificados.

## Fluxo de uma análise (CU01 Venda · CU02 Arrendamento, zona-piloto)

1. O utilizador descreve o imóvel no chatbot. Não há conta: o MVP guarda um `sessao_id` no navegador.
2. O MVP envia o imóvel para `POST /api/imoveis` e, se o utilizador quiser, um valor real para `POST /api/contributos`. O registo do imóvel e o contributo colaborativo são separados.
3. O MVP pede `POST /api/analises`. A API:
   1. junta os dados da zona (INE, BPstat, contributos) e os parâmetros fiscais;
   2. o agente Mercado escolhe os comparáveis; o motor de estimativa estima a venda e a renda; o motor financeiro calcula os indicadores;
   3. o agente de Explicação escreve a explicação;
   4. guarda tudo em `analises` e devolve o resultado.
4. O MVP mostra a comparação e os cenários e desconta os créditos da sessão.

## Créditos e pagamentos

- Produto: pacotes de créditos pagos por Stripe, sem subscrição, com um diagnóstico gratuito limitado.
- Demo de 10/12: sem contas. O saldo fica guardado no navegador e o checkout do Stripe em modo de teste carrega créditos nessa sessão.

## Dados e regras do Moodle

- **Colaborativo:** os dados principais vêm dos utilizadores (registo e contributos).
- **Terceiros:** APIs públicas do INE e do BPstat, Anthropic e Stripe. As APIs da Idealista e da CASAFARI estão previstas na arquitetura, com acesso sujeito a aprovação ou licença e fora do orçamento.
- Nada depende de uma base de dados pré-existente e nenhum número dos ecrãs é fixo: tudo vem da BD e do motor.

## Plataforma final, MVP deste semestre e exclusões

| | Plataforma final | MVP (demo de 10/12) |
|---|---|---|
| Análise e estimativa da zona (dados colaborativos) | ✓ | ✓ zona-piloto |
| Análise financeira e comparação venda vs arrendamento | ✓ | ✓ |
| Simulação de cenários com explicação por IA | ✓ | ✓ |
| Créditos e Stripe | ✓ | ✓ modo de teste, sem conta |
| Painel de administração (moderação, parâmetros fiscais, preços e pacotes) | ✓ | parâmetros fiscais na BD, sem painel |
| Contas de utilizador e histórico | ✓ | ✗ |
| Relatório PDF automático | ✓ | ✗ |
| Alojamento Local | fase posterior | ✗ |

Fora do âmbito: avaliação imobiliária certificada, aconselhamento jurídico ou fiscal e treino de modelos de IA próprios.

## Segurança

- RLS ligado em todas as tabelas. O público (chave publicável) só lê os dados de referência: zonas, INE, BPstat e parâmetros fiscais.
- Imóveis, contributos e análises só são lidos e escritos pela API, com a chave secreta guardada no Render.
- Nenhuma chave vai para o repositório: só `.env.example` sem valores.

## Variáveis de ambiente

| Onde | Variável |
|---|---|
| backend (Render) | `SUPABASE_URL`, `SUPABASE_SECRET_KEY`, `ANTHROPIC_API_KEY`, `STRIPE_SECRET_KEY` (teste), `FRONTEND_ORIGIN` |
| frontend/app (Vercel) | `NEXT_PUBLIC_API_URL`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` (teste) |
