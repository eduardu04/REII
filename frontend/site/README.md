# REII — site público

Landing pages do REII (vender ou arrendar, lado a lado). A estrutura e o copy seguem o documento
**"REII — Contexto e estrutura do site"**.

## Stack
- **Next.js 16** (App Router, Turbopack, Cache Components) + **React 19** + **TypeScript**
- **Tailwind CSS 4** com os tokens da marca em `src/app/globals.css`
- **shadcn/ui** (base-ui) em `src/components/ui`
- **Motion** (`motion/react`, carregado com `LazyMotion`) para entradas e scroll
- **GSAP** (só onde há desenho de gráficos, carregado no cliente)
- **lucide-react** para ícones

## Começar
```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de produção
npm run lint
```
Variável opcional: `NEXT_PUBLIC_APP_URL` — endereço da app (onboarding). Sem ela, os botões apontam para `#`.

## Estrutura
```
src/
  app/                  rotas (/, /como-funciona, /exemplo, /precos)
  components/
    ui/                 componentes shadcn (não editar à mão sem motivo)
    layout/             cabeçalho e rodapé
    brand/              logótipo
    motion/             primitivas de animação (Reveal, WordReveal, CountUp)
    shared/             peças usadas em várias páginas (formulário de morada, títulos de secção)
  features/<pagina>/
    sections/           uma secção = um ficheiro, pela ordem da página
    mockups/            ecrãs da app desenhados em código
  content/              copy e dados de demonstração (separados do layout)
  config/site.ts        nome, navegação, fontes, URL da app
  lib/                  utilitários (cn, formatação pt-PT)
```

## Regras
- **Cores com significado:** terracota (`sell`) = Vender, verde-escuro (`rent`) = Arrendar. Nunca ao contrário.
- **Títulos** em Fraunces (`font-heading`); **números** sempre em Inter com `tabular`.
- **Números em pt-PT:** usar `formatEuro` / `formatPercent` de `src/lib/format.ts` (372 000 €, 16,3 %).
- **Movimento editorial:** só `transform`, `opacity`, `filter`; curva `cubic-bezier(.22,1,.36,1)`; respeitar `prefers-reduced-motion`.
- **Dentro do `MotionProvider` usar `m.*`**, não `motion.*` (modo `strict`).
- **Nada inventado:** sem testemunhos, logótipos de clientes ou estatísticas de utilizadores. Valores de exemplo levam a etiqueta "valores de demonstração".
- **Responsivo primeiro no telemóvel** (margem lateral de 16 px, sem scroll horizontal).

## Branches
Uma branch por página, a partir de `main`:
- `chore/estrutura-site` — esqueleto, sistema visual, cabeçalho e rodapé
- `feat/pagina-inicio` — Início (`/`)
- `feat/pagina-como-funciona` — Como funciona
- `feat/pagina-exemplo` — Exemplo real (T2 Coimbra)
- `feat/pagina-precos` — Preços
