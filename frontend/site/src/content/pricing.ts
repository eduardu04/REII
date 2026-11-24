/**
 * Copy e valores da página Preços. Modelo: pagamento por uso, com pacotes de créditos pré-pagos
 * (sem subscrição). 1 crédito ≈ 1 €; os pacotes maiores dão créditos de bónus.
 *
 * TODO(equipa): preços, créditos e prazos são uma PROPOSTA. Estão todos neste ficheiro: mudando aqui,
 * a página inteira (pacotes, tabela, calculadora, FAQ) e a página Para quem é atualizam-se.
 */

/** Créditos por operação. */
export const costs = {
  analysis: 19,
  refresh: 7,
} as const;

/** Validade dos créditos, em meses. */
export const creditValidityMonths = 24;
/** Créditos oferecidos na primeira compra e por cada amigo convidado. */
export const welcomeBonus = 10;
export const referralBonus = 10;

export type PackId = "uma" | "familia" | "investidor";

export type Pack = {
  id: PackId;
  name: string;
  audience: string;
  credits: number;
  price: number;
  /** Cabeçalho da lista (padrão dos planos: "Inclui" ou "Tudo do X, mais"). */
  includesTitle: string;
  /** O que o pacote entrega, a começar pela quantidade. */
  items: string[];
  featured?: boolean;
};

export const packs: Pack[] = [
  {
    id: "uma",
    name: "Uma análise",
    audience: "Para uma casa",
    credits: 19,
    price: 19,
    includesTitle: "Inclui",
    items: [
      "1 análise completa de um imóvel",
      "Valor hoje e daqui a 5 anos, e renda provável",
      "Três cenários e o ponto de viragem",
      "Rentabilidade (TIR), ganho (VAL) e tempo de retorno, explicados",
      "Casas comparáveis e dados da zona",
      "Relatório em PDF para partilhar",
      "Assistente com IA para perguntas sobre a análise",
    ],
  },
  {
    id: "familia",
    name: "Família",
    audience: "Para 2 ou 3 casas",
    credits: 64,
    price: 49,
    featured: true,
    includesTitle: "Tudo da Uma análise, mais",
    items: ["3 análises completas e 1 atualização", "Comparar os imóveis lado a lado", "Todos os imóveis da família num só ecrã"],
  },
  {
    id: "investidor",
    name: "Investidor",
    audience: "Para quem tem vários imóveis",
    credits: 150,
    price: 109,
    includesTitle: "Tudo do Família, mais",
    items: ["7 análises completas e 2 atualizações", "Atualizar quando o mercado mudar", "Potencial de valorização da carteira", "Apoio por email prioritário"],
  },
];

export const packById = (id: PackId) => packs.find((p) => p.id === id)!;

/** Créditos de bónus face a 1 crédito = 1 €, em %. */
export const bonusPercent = (p: Pack) => Math.round((p.credits / p.price - 1) * 100);
/** Para quantas análises completas dá o pacote. */
export const analysesIn = (p: Pack) => Math.floor(p.credits / costs.analysis);

export const pricingHero = {
  title: "Pague só o que usar.",
  lead: "Sem mensalidades nem fidelização. Compra créditos e usa-os quando precisar, numa casa ou em várias.",
};

export const pricingPacks = {
  title: "Escolha um pacote de créditos.",
  lead: "Cada crédito vale cerca de 1 €. Os pacotes maiores dão créditos de bónus, e cada um diz o que entrega.",
  offer: `Na primeira compra, oferecemos ${welcomeBonus} créditos.`,
  note: `Os créditos valem ${creditValidityMonths} meses e servem para qualquer operação, em qualquer imóvel.`,
};

export const pricingTable = {
  title: "Quanto custa cada operação.",
  lead: "Sem surpresas. Antes de confirmar qualquer operação, a app mostra quantos créditos vai gastar e o saldo que fica.",
  rows: [
    {
      id: "quick",
      name: "Estimativa rápida",
      includes: "Valor do imóvel hoje e renda provável, com fonte e data. Sem cenários nem relatório. Uma por conta, sem cartão.",
      credits: 0,
    },
    {
      id: "analysis",
      name: "Análise completa",
      includes: "Valor hoje e daqui a 5 anos, renda provável, três cenários, ponto de viragem, TIR, VAL e tempo de retorno, casas comparáveis, dados da zona e relatório em PDF.",
      credits: costs.analysis,
    },
    { id: "refresh", name: "Atualizar uma análise", includes: "Os mesmos números com os dados de mercado mais recentes, e o que mudou desde a última vez.", credits: costs.refresh },
    {
      id: "questions",
      name: "Assistente com IA",
      includes: "Explica cada número e de onde veio, traduz termos como VAL e TIR e resume a análise para partilhar.",
      credits: 0,
    },
    { id: "compare", name: "Comparar imóveis", includes: "Valor, renda e rentabilidade das suas análises, lado a lado.", credits: 0 },
  ],
};

export const pricingCalculator = {
  title: "Não sabe de quantos créditos precisa?",
  lead: "Diga quantas casas quer analisar. Nós sugerimos o pacote certo e mostramos a conta.",
  refreshLabel: "Atualizar cada uma daqui a uns meses",
};

export const pricingValue = {
  title: "Quanto pode valer uma boa decisão?",
  lead: "No exemplo do T2 na Sé Nova, a diferença entre os dois caminhos ao fim de 5 anos é de dezenas de milhares de euros. Uma análise custa uma pequena parte disso.",
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
      q: "Há alguma coisa grátis?",
      a: "Sim. A primeira estimativa rápida (valor hoje e renda provável) é grátis e não pede cartão. Também pode ver a análise completa do exemplo T2 em Coimbra.",
    },
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
    {
      q: "Ganho créditos se recomendar o REII?",
      a: `Sim. Por cada amigo que faça a primeira compra, os dois recebem ${referralBonus} créditos.`,
    },
    // TODO(equipa): confirmar os meios de pagamento.
    { q: "Que formas de pagamento aceitam?", a: "Cartão de crédito ou débito e MB WAY." },
  ],
};

export const pricingCta = {
  title: "Comece pela sua casa.",
  lead: "A primeira estimativa é grátis. Só escolhe um pacote quando quiser a análise completa.",
};
