/**
 * Copy e dados da página Início.
 * Fontes: mockup "REII_Pagina_Inicio_Mockup.pdf" e ecrãs da app "REII_Ecras.pdf".
 * Todos os números são VALORES DE DEMONSTRAÇÃO até serem validados.
 */
import casaDeBanho from "@/assets/photos/casa-de-banho.jpg";
import cozinha from "@/assets/photos/cozinha.jpg";
import fachadaAzulejo from "@/assets/photos/fachada-azulejo.jpg";
import fachadaPortaVerde from "@/assets/photos/fachada-porta-verde.jpg";
import lisboaTelhados from "@/assets/photos/lisboa-telhados.jpg";
import portoCasa from "@/assets/photos/porto-casa.jpg";
import salaEstar from "@/assets/photos/sala-estar.jpg";
import salaJantar from "@/assets/photos/sala-jantar.jpg";
import salaVazia from "@/assets/photos/sala-vazia-2560.jpg";
import t2Fachada from "@/assets/photos/t2-coimbra-fachada.jpg";
import t2Sala from "@/assets/photos/t2-coimbra-sala.jpg";
import t3Fachada from "@/assets/photos/t3-lisboa-fachada.jpg";

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
  t2Fachada,
  t2Sala,
  t3Fachada,
};

export const demo = {
  label: "Valores de demonstração",
  property: {
    title: "T2 na Sé Nova, Coimbra",
    short: "T2 · Coimbra",
    details: "88 m², 2 quartos, garagem, certificado energético B",
  },
  valueToday: 320_000,
  sell: { value: 372_000, gain: 52_000, change: 16.3 },
  rent: { monthly: 1_200, fiveYearGross: 72_000, occupancy: 94 },
  turningPoint: 1_050,
  confidence: 85,
  irr: 5.6,
  npv: 41_800,
} as const;

/** Imóveis da conta de demonstração ("Os meus imóveis", na app). */
export const portfolio = [
  {
    name: "T2 · Coimbra",
    place: "Sé Nova, Coimbra",
    specs: "88 m² · 2 quartos",
    date: "Última análise: 06 mai 2026",
    image: t2Fachada,
    sell: 372_000,
    sellGain: "+52 000 € (+16,3 %)",
    rent: 1_200,
    rentTotal: "72 000 €",
  },
  {
    name: "T3 · Lisboa",
    place: "Arroios, Lisboa",
    specs: "120 m² · 3 quartos",
    date: "Última análise: 28 abr 2026",
    image: t3Fachada,
    sell: 735_000,
    sellGain: "+115 000 € (+18,5 %)",
    rent: 2_300,
    rentTotal: "138 000 €",
  },
] as const;

export const hero = {
  title: "Vender ou arrendar? Veja os dois caminhos lado a lado.",
  subtitle:
    "Diga-nos onde fica o imóvel e como é. O REII estima quanto vale hoje, quanto pode render em renda e como fica cada opção daqui a 5 ou 10 anos, com a fonte de cada número.",
  // TODO(equipa): condição de entrada (ex.: primeira análise grátis) ainda por definir.
  notes: ["Sem mensalidades", "Não precisa de saber de finanças", "A decisão é sempre sua"],
};

export const problem = {
  title: "Toda a gente tem uma opinião sobre a sua casa.",
  lead: "Quase ninguém compara as duas opções com os mesmos números. E quase todos ganham alguma coisa com a sua escolha.",
  voices: [
    {
      who: "O agente imobiliário",
      says: "“Venda agora, o mercado está no pico.”",
      note: "Pode ter razão. Mas a comissão depende de a casa ser vendida.",
    },
    {
      who: "A família e os amigos",
      says: "“O meu primo arrendou e está a ganhar bem.”",
      note: "Ninguém conta as despesas, nem os meses sem inquilino.",
    },
    {
      who: "Os anúncios",
      says: "“Um T2 aqui ao lado está à venda por 390 000 €.”",
      note: "O preço pedido não é o preço a que a casa se vende.",
    },
  ],
  answer: "O REII põe vender e arrendar lado a lado, com o mesmo prazo e as mesmas regras.",
  answerMuted: "Cobramos a análise, não a decisão: paga o mesmo, venda ou arrende. Não recebemos comissões de agentes nem de gestores de arrendamento.",
};

export const audience = {
  title: "Cada casa chega a esta decisão por um caminho diferente.",
  items: [
    {
      title: "Herdei uma casa",
      text: "Vender e dividir, ou arrendar e ter um rendimento todos os meses? Fica com uma análise que pode mostrar ao resto da família.",
      image: salaJantar,
      alt: "Sala de jantar de família com mesa de madeira",
    },
    {
      title: "Tenho uma segunda habitação",
      text: "Uma casa que usa pouco. Perceba quanto lhe custa mantê-la e quanto poderia render se a arrendasse.",
      image: portoCasa,
      alt: "Casa com azulejo junto ao rio",
    },
    {
      title: "Tenho um imóvel vazio",
      text: "Uma casa parada também custa dinheiro: IMI, condomínio e manutenção. Veja quanto está a deixar de ganhar.",
      image: fachadaPortaVerde,
      alt: "Fachada de azulejo com porta verde fechada",
    },
    {
      title: "Sou investidor",
      text: "Compare a rentabilidade de cada imóvel com os mesmos critérios e veja por onde começar.",
      image: fachadaAzulejo,
      alt: "Prédio com fachada de azulejo e varandas",
    },
  ],
};

export const steps = {
  title: "Da morada à resposta, em três passos.",
  lead: "Não precisa de saber o que é uma taxa de desconto. Responde ao que sabe sobre a casa; o REII trata das contas.",
  items: [
    {
      title: "Conte-nos a sua situação",
      text: "Herdou, tem uma segunda casa, um imóvel parado ou vários. A análise começa pelo que mais lhe interessa.",
    },
    {
      title: "Descreva a casa",
      text: "Tipologia, área, estado e morada. O que não souber, o REII estima e diz-lhe que estimou.",
    },
    {
      title: "Veja os dois caminhos",
      text: "Vender e arrendar lado a lado, a 3, 5, 10 ou 15 anos, com a fonte e a data de cada número.",
    },
  ],
};

export const product = {
  title: "Uma resposta clara, num só ecrã.",
  lead: "Todos os seus imóveis num sítio, cada um com os dois caminhos lado a lado. Pode rever, comparar e partilhar quando quiser.",
  screens: [
    { label: "Os meus imóveis", text: "Todos os imóveis, cada um com os dois caminhos." },
    { label: "Mercado comparativo", text: "As casas parecidas que sustentam o valor." },
    { label: "Relatório", text: "Para guardar, partilhar com a família ou exportar." },
  ],
};

export const explain = {
  title: "Cada número explica-se.",
  lead: "Escolha um valor e o REII diz como lá chegou, de onde vieram os dados e quando foram recolhidos. Explica; não decide por si.",
  numbers: [
    {
      key: "sell",
      label: "Vender daqui a 5 anos",
      value: "372 000 €",
      tone: "sell",
      question: "Como chegaram aos 372 000 €?",
      answer:
        "Partimos do valor de hoje, 320 000 €, estimado a partir de 6 imóveis comparáveis na Sé Nova e em Celas. Aplicámos uma valorização de 3,1 % ao ano, estimada a partir da evolução da zona.",
      source: "SIR e INE · 6 de maio de 2026",
    },
    {
      key: "rent",
      label: "Renda estimada",
      value: "1 200 €/mês",
      tone: "rent",
      question: "Como chegaram aos 1 200 € de renda?",
      answer:
        "É a renda mais comum de T2 com 80 a 95 m² arrendados na Sé Nova e em Celas nos últimos 6 meses, entre 1 150 € e 1 350 €. Ajustámos porque tem garagem e certificado B.",
      source: "Idealista e INE · 6 de maio de 2026",
    },
    {
      key: "npv",
      label: "Ganho do arrendamento",
      value: "41 800 €",
      tone: "ink",
      question: "O que quer dizer o ganho de 41 800 €?",
      answer:
        "É quanto vale hoje arrendar durante 5 anos e vender no fim, já descontando o que o dinheiro renderia noutro lado, a 5 % ao ano. Positivo quer dizer que, nestes pressupostos, arrendar rende mais.",
      source: "Motor financeiro REII · pressupostos editáveis",
    },
  ],
  guarantees: ["Fonte e data em todos os valores", "Aviso claro quando os dados da zona são poucos", "O que fica de fora, dito por escrito"],
};

export const sources = {
  title: "De onde vêm os números.",
  lead: "Dados públicos e de mercado, sempre com a data em que foram recolhidos.",
  items: [
    { name: "INE", text: "Estatísticas oficiais da habitação e dos preços por zona." },
    { name: "SIR", text: "Confidencial Imobiliário: vendas e rendas efetivamente registadas." },
    { name: "Idealista", text: "Anúncios de venda e arrendamento dos últimos 6 meses." },
    { name: "Câmaras Municipais", text: "Obras e projetos previstos perto do imóvel." },
  ],
};

export const example = {
  title: "A Francisca herdou um T2 em Coimbra. Foi isto que o REII lhe mostrou.",
  lead: "Herdou um T2 com 88 m² na Sé Nova e não sabia se o devia vender ou arrendar. Estes foram os números que viu, com a mesma análise que recebe para a sua casa.",
  cta: { label: "Analisar o meu imóvel", note: "Quer ver estes números para a sua casa?" },
  gallery: [
    { image: salaEstar, alt: "Sala de estar com varanda" },
    { image: cozinha, alt: "Cozinha com janela" },
    { image: casaDeBanho, alt: "Casa de banho com janela" },
  ],
  figures: [
    { label: "Valor hoje", value: "320 000 €" },
    { label: "Vender, daqui a 5 anos", value: "372 000 €" },
    { label: "Arrendar", value: "1 200 €/mês" },
    { label: "A resposta muda abaixo de", value: "1 050 €/mês" },
  ],
};

export const faq = {
  title: "Perguntas frequentes",
  lead: "Não encontra a sua? Escreva-nos para",
  email: "ajuda@reii.pt",
  items: [
    {
      q: "Como funcionam os créditos?",
      a: "Compra um pacote de créditos e usa-os quando precisar, sem mensalidades. Antes de cada análise vê quantos créditos vai gastar.",
    },
    {
      q: "O REII substitui a avaliação de um perito?",
      a: "Não. É uma estimativa para o ajudar a decidir. Para um crédito à habitação, uma partilha ou uma escritura, continua a precisar de uma avaliação certificada.",
    },
    {
      q: "O meu imóvel está numa zona coberta?",
      a: "Para já, cobrimos as zonas com dados de mercado suficientes. Se a sua não estiver incluída, dizemos-lhe logo no primeiro passo.",
    },
    {
      q: "O que acontece aos dados do meu imóvel?",
      a: "Ficam guardados na sua conta para poder rever e partilhar a análise. Nunca os vendemos nem os passamos a agentes ou imobiliárias.",
    },
    {
      q: "O REII diz-me o que devo fazer?",
      a: "Não. Mostra os dois caminhos e explica os números. A decisão é sempre sua.",
    },
  ],
};

export const finalCta = {
  title: "A casa é sua. A decisão também.",
  lead: "Veja os dois caminhos com números claros, e decida com calma.",
  image: salaVazia,
  alt: "Sala vazia com janelas altas, uma cadeira e luz de fim de tarde",
};
