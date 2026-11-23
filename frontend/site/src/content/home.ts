/**
 * Copy e dados da página Início.
 * Fonte: documento "REII — Contexto e estrutura do site" (secção Página 1 — Início).
 * Todos os números são VALORES DE DEMONSTRAÇÃO do exemplo T2 Coimbra, até serem validados.
 */

export const demo = {
  label: "Valores de demonstração",
  property: {
    title: "T2 · Sé Nova, Coimbra",
    details: "88 m² · 2 quartos",
    question: "Herdei este apartamento. Vendo ou arrendo?",
  },
  valueToday: 320_000,
  sell: { value: 372_000, horizon: "daqui a 5 anos", change: 16.3 },
  rent: { monthly: 1_200, occupancy: 94, fiveYearIncome: 67_680 },
  turningPoint: 1_050,
  confidence: 85,
  /** Património acumulado (milhares de €) por ano, cenário central. */
  series: {
    years: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    sell: [320, 330, 339, 350, 360, 372, 382, 394, 405, 418, 430],
    rent: [304, 321, 338, 356, 374, 392, 411, 430, 449, 469, 489],
  },
} as const;

export const hero = {
  eyebrow: "Para proprietários em Portugal",
  titleStart: "ou",
  titleEnd: "? Veja os dois caminhos lado a lado.",
  subtitle:
    "O REII estima quanto vale o seu imóvel hoje, quanto pode render em renda e o que acontece em cada caso daqui a 5 ou 10 anos. Com fontes, datas e explicações simples.",
  // TODO(equipa): condição de entrada (ex.: primeira análise grátis) ainda por definir.
  reassurance: ["Sem compromisso", "Demora cerca de 3 minutos"],
};

export const problem = {
  eyebrow: "O problema",
  title: "Cada pessoa diz-lhe uma coisa diferente.",
  cards: [
    {
      who: "O agente imobiliário",
      says: "“Venda agora, o mercado está no pico.”",
      catch: "Ganha comissão se vender.",
    },
    {
      who: "O vizinho",
      says: "“Vendi a minha por muito mais.”",
      catch: "A casa dele não é a sua, nem o ano.",
    },
    {
      who: "O anúncio",
      says: "“T2 na mesma rua, 1 400 €/mês.”",
      catch: "É o preço pedido, não o preço feito.",
    },
  ],
  answer:
    "O REII não ganha com nenhuma das opções. Põe as duas lado a lado, com o mesmo critério.",
};

export const audience = {
  eyebrow: "Para quem é",
  title: "Encontre a sua situação.",
  items: [
    { key: "heir", title: "Herdei uma casa", question: "Vendemos já ou arrendamos e dividimos a renda?" },
    { key: "second", title: "Tenho uma segunda habitação", question: "Vale a pena manter a casa de férias?" },
    { key: "empty", title: "Tenho um imóvel vazio", question: "Quanto estou a perder por não fazer nada?" },
    { key: "investor", title: "Sou pequeno investidor", question: "Qual é a rentabilidade real de cada imóvel?" },
  ],
} as const;

export const steps = {
  eyebrow: "Como funciona",
  title: "Três passos. Cerca de 3 minutos.",
  items: [
    {
      title: "Descreva o imóvel",
      text: "Morada, tipologia, área e estado. Só o que sabe de cabeça.",
    },
    {
      title: "O REII estima o mercado",
      text: "Cruza vendas, rendas e projetos da zona para estimar o valor de hoje e a renda provável.",
    },
    {
      title: "Compare os dois caminhos",
      text: "Vender e arrendar lado a lado, a 3, 5, 10 ou 15 anos, em três cenários.",
    },
  ],
};

export const result = {
  eyebrow: "O resultado",
  title: "Os dois caminhos no mesmo ecrã.",
  lead: "É isto que recebe para a sua casa: um relatório claro, que pode rever, partilhar com a família ou exportar em PDF.",
  notes: [
    {
      title: "Lado a lado",
      text: "Vender e arrendar no mesmo gráfico, com o mesmo horizonte e os mesmos pressupostos.",
    },
    {
      title: "Três cenários",
      text: "Conservador, central e otimista. Não vendemos uma única “verdade”.",
    },
    {
      title: "O ponto de viragem",
      text: "A renda abaixo da qual vender passa a compensar mais. Sabe exatamente quando a resposta mudaria.",
    },
  ],
};

export const ai = {
  eyebrow: "IA que explica",
  title: "Pergunte de onde vem cada número.",
  lead: "O agente REII explica os cálculos em linguagem simples e mostra sempre a fonte. Não decide por si nem empurra para nenhum lado.",
  points: ["Responde com fonte e data", "Explica termos como VAL ou TIR", "Nunca recomenda um caminho"],
  question: "Como chegaram a 1 200 €/mês?",
  answer:
    "Comparámos 14 T2 arrendados num raio de 800 m e ajustámos pelo índice de rendas do INE. A mediana é 13,6 €/m². Com 88 m², dá cerca de 1 200 €/mês.",
  sources: ["Idealista · out. 2026", "INE · 3.º trim. 2026"],
  followUp: "Quer ver como muda o resultado com uma renda de 1 000 €?",
};

export const transparency = {
  eyebrow: "Transparência",
  title: "Um número, desmontado.",
  lead: "Num relatório do REII, cada valor diz de onde vem, de quando é e quanta confiança merece. Nada de caixas negras.",
  value: "1 200 €/mês",
  valueLabel: "Renda estimada",
  parts: [
    { label: "Fonte", value: "Anúncios Idealista + índice de rendas INE" },
    { label: "Data", value: "Outubro de 2026" },
    { label: "Amostra", value: "14 imóveis comparáveis, raio de 800 m" },
  ],
  link: { label: "Ver como calculamos", href: "/como-funciona" },
};

export const example = {
  eyebrow: "Exemplo real",
  title: "Veja uma análise completa, sem criar conta.",
  cta: { label: "Ver a análise completa", href: "/exemplo" },
};

export const faq = {
  eyebrow: "Perguntas frequentes",
  title: "Antes de começar.",
  items: [
    {
      q: "Como funcionam os créditos?",
      a: "Compra um pacote de créditos e gasta-os nas análises que fizer. Não há mensalidade. Os pacotes e o custo de cada operação estão na página Preços.",
    },
    {
      q: "O REII substitui um avaliador certificado?",
      a: "Não. O REII dá estimativas com fonte e data para o ajudar a decidir. Para um crédito à habitação ou uma partilha oficial, continua a precisar de uma avaliação certificada.",
    },
    {
      q: "Que zonas cobre?",
      a: "Nesta fase, a análise só está disponível em zonas-piloto com dados suficientes. Preferimos não mostrar números onde não os conseguimos sustentar.",
    },
    {
      q: "Os meus dados ficam guardados?",
      a: "Guardamos os dados do imóvel para poder rever e partilhar a análise. Nunca vendemos dados a agentes ou imobiliárias.",
    },
    {
      q: "Quem decide, afinal?",
      a: "Você. O REII mostra os dois caminhos e explica os números. A IA não recomenda nenhum deles.",
    },
  ],
};

export const finalCta = {
  title: "A casa é sua. A decisão também.",
  lead: "Comece pela morada. Em cerca de 3 minutos vê os dois caminhos lado a lado.",
};
