# REII — site público

Landing pages do REII (vender ou arrendar, lado a lado). Fica em `frontend/site/`, separado da app em `frontend/`. A estrutura e o copy seguem o documento
**"REII — Contexto e estrutura do site"**.

## Stack
- **Next.js 16** (App Router, Turbopack, Cache Components) + **React 19** + **TypeScript**
- **Tailwind CSS 4** com os tokens da marca em `src/app/globals.css`
- **shadcn/ui** (base-ui) em `src/components/ui`
- **Motion** (`motion/react`, carregado com `LazyMotion`) para entradas e scroll
- **lucide-react** só nos ecrãs da app desenhados em código (as páginas públicas não usam ícones)

## Começar
```bash
cd frontend/site
npm install
npm run dev     # http://localhost:3000
npm run build   # build de produção
npm run lint
```
Variável opcional: `NEXT_PUBLIC_APP_URL` — endereço da app (onboarding). Sem ela, os botões apontam para `#`.

Para rever o conteúdo sem animações (útil em capturas): abrir `http://localhost:3000/?static`.

## Estrutura
```
src/
  app/                  rotas (/, /como-funciona, /para-quem, /precos)
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
- **Cores:** branco e cinzento (`surface`) alternados por secção; creme (`cream`) só dentro dos ecrãs da app; verde-escuro (`rent`, `rent-deep`) é a cor da marca (botões, rodapé, abertura de Preços).
- **Cores com significado nos dados:** terracota (`sell`) = Vender, verde (`rent`) = Arrendar. Nunca ao contrário.
- **Tipografia:** Manrope em tudo (a do logótipo). Escala em `globals.css`: `type-display`, `type-h2`, `type-h3`, `type-lead`, `type-label`.
- **Logótipo:** `components/brand/logo.tsx` (vetorizado do ficheiro da marca, `public/brand/reii-logo.svg`); usa `currentColor`.
- **Fotografias:** em `src/assets/photos`, sempre com `next/image` (otimização e blur automáticos).
- **Sem ícones decorativos nem linhas retas:** só tipografia e painéis arredondados.
- **Movimento contido:** entradas com fade + 16 px; um cursor animado por página no máximo; no telemóvel as listas não avançam sozinhas; respeitar `prefers-reduced-motion`.
- **Ecrãs da app no telemóvel:** abaixo de 560 px mostram só o cartão marcado com `data-focus`, em tamanho legível.
- **Dentro do `MotionProvider` usar `m.*`**, não `motion.*` (modo `strict`).
- **Números em pt-PT:** `formatEuro` / `formatPercent` de `src/lib/format.ts`.
- **Nada inventado:** sem testemunhos, logótipos de clientes ou estatísticas de utilizadores. Valores de exemplo levam a etiqueta "valores de demonstração".
- **Responsivo primeiro no telemóvel** (margem lateral de 16 px, sem scroll horizontal).

## Páginas
- `/` Início
- `/como-funciona` Como funciona
- `/para-quem` Para quem é
- `/precos` Preços (pagamento por uso; valores propostos em `src/content/pricing.ts`, a confirmar pela equipa)

## Branches
Trabalho novo num branch (`feat/...`, `fix/...`) e Pull Request para `main`, como no resto do repositório.
