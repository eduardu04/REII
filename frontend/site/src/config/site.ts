/**
 * Configuração global do site público do REII.
 * `appUrl` aponta para a app (onboarding). Trocar quando houver domínio.
 */
export const siteConfig = {
  name: "REII",
  tagline: "Real Estate Investment Intelligence",
  description:
    "Vender ou arrendar? O REII põe os dois caminhos lado a lado, com fontes, datas e explicações simples. A decisão é sempre sua.",
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? "#",
  nav: [
    { label: "Como funciona", href: "/como-funciona" },
    { label: "Preços", href: "/precos" },
  ],
  sources: ["INE", "SIR · Confidencial Imobiliário", "Idealista", "Câmaras Municipais"],
} as const;

export const ctaLabel = "Analisar o meu imóvel";
