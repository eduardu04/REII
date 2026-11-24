/**
 * Copy e valores da página Preços (mockup "REII_Pagina_Precos_Mockup.pdf").
 *
 * TODO(equipa): os preços, créditos e prazos abaixo são uma PROPOSTA para a página não ficar com "XX".
 * Estão todos neste ficheiro: mudando aqui, a página inteira (pacotes, tabela, calculadora e FAQ) atualiza-se.
 */

/** Créditos por operação. */
export const costs = {
  analysis: 10,
  scenarios: 2,
  details: 3,
  pdf: 2,
  refresh: 4,
} as const;

/** Perguntas ao assistente incluídas em cada análise. */
export const includedQuestions = 20;

/** Validade dos créditos, em meses. */
export const creditValidityMonths = 24;

export type Pack = {
  id: string;
  name: string;
  audience: string;
  credits: number;
  price: number;
  features: string[];
  featured?: boolean;
};

export const packs: Pack[] = [
  {
    id: "casa",
    name: "Uma casa",
    audience: "Para uma casa",
    credits: 20,
    price: 29,
    features: ["Todos os separadores da análise", "Assistente REII", "Relatório em PDF"],
  },
  {
    id: "familia",
    name: "Família",
    audience: "Para 2 ou 3 casas",
    credits: 60,
    price: 69,
    featured: true,
    features: ["Tudo o do pacote anterior", "Três cenários em cada análise", "Atualizar análises quando o mercado mudar"],
  },
  {
    id: "patrimonio",
    name: "Património",
    audience: "Para quem tem vários imóveis",
    credits: 150,
    price: 149,
    features: ["Tudo o do pacote anterior", "Comparar imóveis entre si", "Apoio por email prioritário"],
  },
];

/** Uma análise completa com relatório: o que cada pacote "dá para". */
export const analysisWithReport = costs.analysis + costs.pdf;

const perCredit = (p: Pack) => p.price / p.credits;
/** Quanto mais barato fica cada crédito face ao primeiro pacote, em %. */
export const savingVsFirst = (p: Pack) => Math.round((1 - perCredit(p) / perCredit(packs[0])) * 100);

export const pricingHero = {
  title: "Pague só o que usar.",
  lead: "Sem mensalidades nem fidelização. Compra créditos e usa-os quando precisar, numa casa ou em várias.",
  points: ["Vê o custo antes de cada análise", "Fatura com NIF"],
};

export const pricingPacks = {
  title: "Escolha um pacote de créditos.",
  lead: "Quanto maior o pacote, mais barato fica cada crédito. Em cada pacote dizemos o que dá para fazer, em análises reais.",
};

export const pricingTable = {
  title: "Quanto custa cada operação.",
  lead: "Sem surpresas. Antes de confirmar qualquer operação, a app mostra quantos créditos vai gastar e o saldo que fica.",
  rows: [
    { id: "analysis", name: "Análise completa", includes: "Estimativa de mercado e resultados no cenário central", credits: costs.analysis },
    { id: "scenarios", name: "Cenários prudente e otimista", includes: "Por análise", credits: costs.scenarios },
    { id: "details", name: "Detalhes completos", includes: "Cálculos, zona e casas comparáveis", credits: costs.details },
    { id: "pdf", name: "Relatório em PDF", includes: "Para partilhar com a família ou um consultor", credits: costs.pdf },
    { id: "refresh", name: "Atualizar uma análise", includes: "Com os dados de mercado mais recentes", credits: costs.refresh },
    { id: "questions", name: "Perguntas ao assistente", includes: `Incluídas, até ${includedQuestions} por análise`, credits: 0 },
  ],
};

export const pricingCalculator = {
  title: "Não sabe de quantos créditos precisa?",
  lead: "Diga quantas casas quer analisar e o que quer receber. Nós sugerimos o pacote certo.",
  options: [
    { id: "pdf", label: "Relatório em PDF de cada uma", cost: costs.pdf, default: true },
    { id: "scenarios", label: "Três cenários", cost: costs.scenarios, default: true },
    { id: "refresh", label: "Atualizar daqui a uns meses", cost: costs.refresh, default: false },
  ],
};

export const pricingInvestors = {
  title: "Analisa imóveis todos os meses?",
  lead: "Para investidores, consultores e gestores de património, há uma opção com créditos mensais.",
  points: ["Créditos todos os meses, a preço mais baixo", "Vários utilizadores na mesma conta", "Relatórios com a marca da sua empresa"],
  cta: "Falar connosco",
};

export const pricingValue = {
  title: "Quanto pode valer uma boa decisão?",
  lead: "No exemplo do T2 na Sé Nova, a diferença entre os dois caminhos ao fim de 5 anos é de dezenas de milhares de euros. Um pacote de créditos custa uma pequena parte disso.",
  rent: 435_700,
  sell: 372_000,
  note: "Valores de demonstração, cenário central, antes de impostos pessoais.",
};

export const pricingFaq = {
  title: "Perguntas sobre créditos e pagamento",
  lead: "Outra dúvida? Escreva-nos para",
  // TODO(equipa): confirmar o endereço de apoio.
  email: "ajuda@reii.pt",
  items: [
    {
      q: "Os créditos expiram?",
      a: `Os créditos são válidos durante ${creditValidityMonths} meses. Sabemos que uma decisão destas pode demorar.`,
    },
    {
      // TODO(equipa): política de reembolso a confirmar.
      q: "Posso pedir o reembolso de créditos que não usei?",
      a: "Sim, nos 14 dias a seguir à compra, se ainda não tiver usado nenhum crédito do pacote.",
    },
    { q: "Emitem fatura com NIF?", a: "Sim. Indica o NIF no pagamento e a fatura chega ao seu email." },
    {
      q: "Posso usar os créditos nas casas da família?",
      a: "Sim. Os créditos são da sua conta e pode usá-los em qualquer imóvel, seu ou da família.",
    },
    // TODO(equipa): confirmar os meios de pagamento.
    { q: "Que formas de pagamento aceitam?", a: "Cartão de crédito ou débito e MB WAY." },
  ],
};

export const pricingCta = {
  title: "Comece pela sua casa.",
  lead: "Basta a morada para começar. Só escolhe um pacote quando confirmar a análise.",
};
