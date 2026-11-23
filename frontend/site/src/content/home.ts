/**
 * Copy e dados da página Início.
 * Fonte: documento "REII — Contexto e estrutura do site" (secção Página 1 — Início).
 * Todos os números são VALORES DE DEMONSTRAÇÃO do exemplo T2 Coimbra, até serem validados.
 */
import casaDeBanho from "@/assets/photos/casa-de-banho.jpg";
import cozinha from "@/assets/photos/cozinha.jpg";
import fachadaAzulejo from "@/assets/photos/fachada-azulejo.jpg";
import fachadaPortaVerde from "@/assets/photos/fachada-porta-verde.jpg";
import lisboaTelhados from "@/assets/photos/lisboa-telhados.jpg";
import portoCasa from "@/assets/photos/porto-casa.jpg";
import salaEstar from "@/assets/photos/sala-estar.jpg";
import salaJantar from "@/assets/photos/sala-jantar.jpg";
import salaVazia from "@/assets/photos/sala-vazia.jpg";

export const photos = {
  lisboaTelhados,
  fachadaAzulejo,
  portoCasa,
  salaVazia,
  fachadaPortaVerde,
  salaJantar,
  casaDeBanho,
  salaEstar,
  cozinha,
};

export const demo = {
  label: "Valores de demonstração",
  property: {
    title: "T2 · Sé Nova, Coimbra",
    details: "88 m² · 2 quartos · 1979",
    question: "Herdei este apartamento. Vendo ou arrendo?",
  },
  valueToday: 320_000,
  sell: { value: 372_000, horizon: "daqui a 5 anos", change: 16.3 },
  rent: { monthly: 1_200, occupancy: 94, fiveYearIncome: 67_680 },
  turningPoint: 1_050,
  confidence: 85,
  irr: 5.8,
  /** Património acumulado (milhares de €) por ano, cenário central. */
  series: {
    years: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    sell: [320, 330, 339, 350, 360, 372, 382, 394, 405, 418, 430],
    rent: [304, 321, 338, 356, 374, 392, 411, 430, 449, 469, 489],
  },
} as const;

export const hero = {
  titleLines: ["Vender ou arrendar?", "Veja os dois caminhos", "lado a lado."],
  subtitle:
    "O REII estima quanto vale o seu imóvel hoje, quanto pode render em renda e o que acontece em cada caso daqui a 5 ou 10 anos. Com fontes, datas e explicações simples.",
  // TODO(equipa): condição de entrada (ex.: primeira análise grátis) ainda por definir.
  reassurance: "Sem compromisso · Cerca de 3 minutos",
};

export const statement = {
  label: "O problema",
  text: "O agente ganha com a venda. O gestor ganha com o arrendamento. O vizinho fala da casa dele. O REII não ganha com nenhum dos dois caminhos.",
  voices: [
    { who: "O agente imobiliário", says: "“Venda agora, o mercado está no pico.”", catch: "Ganha comissão se vender." },
    { who: "O vizinho", says: "“Vendi a minha por muito mais.”", catch: "A casa dele não é a sua, nem o ano." },
    { who: "O anúncio", says: "“T2 na mesma rua, 1 400 €/mês.”", catch: "É o preço pedido, não o preço feito." },
  ],
};

export const audience = {
  label: "Para quem é",
  title: "Cada casa tem uma história. Comece pela sua.",
  items: [
    {
      key: "heir",
      title: "Herdei uma casa",
      question: "Vendemos já ou arrendamos e dividimos a renda entre irmãos?",
      image: salaJantar,
      alt: "Sala de jantar de família com mesa de madeira ao fim da tarde",
      chip: "Partilha entre 3 herdeiros",
    },
    {
      key: "second",
      title: "Tenho uma segunda habitação",
      question: "A casa de família quase não é usada. Vale a pena mantê-la?",
      image: lisboaTelhados,
      alt: "Telhados de Lisboa ao pôr do sol, com o Tejo ao fundo",
      chip: "Usada 3 semanas por ano",
    },
    {
      key: "empty",
      title: "Tenho um imóvel vazio",
      question: "Está parado e só dá despesa. Quanto estou a perder por não decidir?",
      image: fachadaPortaVerde,
      alt: "Fachada de azulejo com porta verde e varanda de ferro",
      chip: "Vazio há 14 meses",
    },
    {
      key: "investor",
      title: "Sou pequeno investidor",
      question: "Tenho 1 a 5 imóveis. Qual é a rentabilidade real de cada um?",
      image: fachadaAzulejo,
      alt: "Prédio com fachada de azulejo azul e varandas, ao sol",
      chip: "4 imóveis em carteira",
    },
  ],
} as const;

export const steps = {
  label: "Como funciona",
  title: "Três passos. Cerca de três minutos.",
  items: [
    {
      title: "Descreva o imóvel",
      text: "Morada, tipologia, área e estado. Só o que já sabe de cabeça, sem documentos.",
    },
    {
      title: "O REII estima o mercado",
      text: "Cruza vendas, rendas e projetos da zona para estimar o valor de hoje e a renda provável, com um nível de confiança.",
    },
    {
      title: "Compare os dois caminhos",
      text: "Vender e arrendar lado a lado, a 3, 5 ou 10 anos, em três cenários. E o ponto em que a resposta mudaria.",
    },
  ],
};

export const result = {
  label: "O resultado",
  title: "Os dois caminhos, no mesmo ecrã.",
  lead: "Um relatório claro, que pode rever, partilhar com a família ou exportar em PDF.",
  notes: [
    { title: "Lado a lado", text: "Mesmo horizonte, mesmos pressupostos, o mesmo gráfico." },
    { title: "Três cenários", text: "Conservador, central e otimista. Nunca uma só “verdade”." },
    { title: "Ponto de viragem", text: "A renda abaixo da qual vender passa a compensar mais." },
  ],
};

export const ai = {
  label: "IA que explica",
  title: "Pergunte de onde vem cada número.",
  lead: "O agente REII explica os cálculos em linguagem simples e mostra sempre a fonte. Não decide por si nem empurra para nenhum lado.",
  points: ["Responde com fonte e data", "Explica VAL, TIR e payback sem jargão", "Nunca recomenda um caminho"],
  question: "Como chegaram a 1 200 €/mês?",
  answer:
    "Comparámos 14 T2 arrendados num raio de 800 m e ajustámos pelo índice de rendas do INE. A mediana é 13,6 €/m². Com 88 m², dá cerca de 1 200 €/mês.",
  sources: ["Idealista · out. 2026", "INE · 3.º trim. 2026"],
  followUp: "E se a renda for 1 000 €?",
};

export const transparency = {
  label: "Transparência",
  title: "Cada número diz de onde vem.",
  lead: "Valor, fonte, data e confiança. Nada de caixas negras.",
  value: 1_200,
  valueLabel: "Renda estimada",
  parts: [
    { label: "Fonte", value: "Anúncios Idealista e índice de rendas do INE" },
    { label: "Data", value: "Outubro de 2026" },
    { label: "Amostra", value: "14 imóveis comparáveis, raio de 800 m" },
  ],
  link: { label: "Como calculamos", href: "/como-funciona" },
};

export const example = {
  label: "Exemplo real",
  title: "Veja uma análise completa antes de dar qualquer dado seu.",
  cta: { label: "Abrir a análise completa", href: "/exemplo" },
  gallery: [
    { image: salaEstar, alt: "Sala de estar com sofá e varanda", caption: "Sala · 24 m²" },
    { image: cozinha, alt: "Cozinha equipada com janela", caption: "Cozinha · remodelada em 2019" },
    { image: casaDeBanho, alt: "Casa de banho com banheira e janela", caption: "Casa de banho" },
  ],
};

export const faq = {
  label: "Perguntas frequentes",
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
  lead: "Comece pela morada. Em cerca de três minutos vê os dois caminhos lado a lado.",
  image: salaVazia,
  alt: "Sala vazia com janelas altas, uma cadeira e luz de fim de tarde",
};
