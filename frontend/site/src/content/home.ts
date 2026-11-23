/**
 * Copy e dados da página Início.
 * Fonte: mockup "REII_Pagina_Inicio_Mockup.pdf" e ecrãs da app "REII_Ecras.pdf".
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
import salaVazia from "@/assets/photos/sala-vazia-2560.jpg";
import t2Fachada from "@/assets/photos/t2-coimbra-fachada.jpg";

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
  /** Valor por ano (milhares de €), cenário central, 0 a 5 anos. */
  series: {
    years: [0, 1, 2, 3, 4, 5],
    sell: [320, 330, 340, 350, 361, 372],
    rent: [320, 343, 366, 389, 412, 435.7],
  },
} as const;

export const hero = {
  title: "Vender ou arrendar? Veja os dois caminhos lado a lado.",
  subtitle:
    "Diga-nos onde fica o imóvel e como é. O REII estima quanto vale hoje, quanto pode render em renda e como fica cada opção daqui a 5 ou 10 anos, com a fonte de cada número.",
  // TODO(equipa): condição de entrada (ex.: primeira análise grátis) ainda por definir.
  notes: ["Cerca de 3 minutos", "Não precisa de saber de finanças", "A decisão é sempre sua"],
};

export const sources = {
  title: "De onde vêm os números",
  lead: "Dados públicos e de mercado, sempre com a data em que foram recolhidos.",
  items: [
    { name: "INE", text: "Estatísticas oficiais da habitação e dos preços por zona" },
    { name: "SIR", text: "Confidencial Imobiliário: vendas e rendas registadas" },
    { name: "Idealista", text: "Anúncios de venda e arrendamento dos últimos 6 meses" },
    { name: "Câmaras Municipais", text: "Obras e projetos previstos perto do imóvel" },
  ],
};

export const problem = {
  title: "Toda a gente tem uma opinião sobre a sua casa.",
  lead: "O difícil é encontrar alguém que compare as duas opções da mesma forma, com os mesmos números, e sem ganhar nada com a sua escolha.",
  voices: [
    {
      who: "O agente imobiliário",
      says: "“Venda agora, o mercado está no pico.”",
      note: "Pode ter razão. Mas a comissão dele depende de a casa ser vendida.",
    },
    {
      who: "A família e os amigos",
      says: "“O meu primo arrendou e está a ganhar bem.”",
      note: "Nenhuma casa é igual a outra. E quase ninguém conta as despesas nem os meses sem inquilino.",
    },
    {
      who: "Os anúncios",
      says: "“Um T2 aqui ao lado está à venda por 390 000 €.”",
      note: "O preço pedido num anúncio não é o preço a que a casa se vende.",
    },
  ],
  answer: "O REII põe vender e arrendar lado a lado, com o mesmo prazo e as mesmas regras.",
  answerMuted: "Não recebemos comissões de ninguém, por isso não ganhamos nada com a sua escolha.",
};

export const audience = {
  title: "Para quem tem esta decisão pela frente.",
  lead: "No primeiro passo escolhe a sua situação. A análise mostra primeiro o que mais lhe interessa.",
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
  title: "Três passos. Cerca de três minutos.",
  lead: "Não precisa de saber o que é uma taxa de desconto. Responde ao que sabe sobre a casa, e o REII trata das contas.",
  items: [
    {
      title: "Descreva o imóvel",
      text: "Tipologia, área, estado e localização. Se não souber algum dado, pode avançar na mesma.",
    },
    {
      title: "O REII estima o mercado",
      text: "Calculamos o valor de venda e a renda provável a partir de casas parecidas na mesma zona.",
    },
    {
      title: "Compare os dois caminhos",
      text: "Vender e arrendar lado a lado, a 3, 5, 10 ou 15 anos, com o resultado de cada opção.",
    },
  ],
};

export const result = {
  title: "Uma resposta clara, num só ecrã.",
  lead: "Os dois caminhos no mesmo gráfico, com os números que interessam ao lado. E a informação que mais ajuda a decidir: a partir de que renda a resposta muda.",
  callouts: ["Os dois caminhos, com as mesmas regras", "Três cenários, não uma única previsão", "O ponto em que vender passa a compensar"],
};

export const assistant = {
  title: "Pergunte o que quiser sobre os números.",
  lead: "O assistente do REII explica cada valor em português simples e diz de onde veio. Pode perguntar as vezes que precisar.",
  points: [
    { ok: true, text: "Explica os cálculos e os termos técnicos" },
    { ok: true, text: "Mostra a fonte e a data de cada valor" },
    { ok: false, text: "Não lhe diz o que fazer. A decisão é sua." },
  ],
  conversation: [
    {
      q: "Como chegaram aos 1 200 € de renda?",
      a: "É a renda mais comum de T2 com 80 a 95 m² arrendados na Sé Nova e em Celas nos últimos 6 meses, que ficou entre 1 150 € e 1 350 €. Ajustámos ao seu imóvel porque tem garagem e certificado energético B.",
      source: "Fontes: Idealista e INE, 6 de maio de 2026",
    },
    {
      q: "E o que quer dizer o ganho de 41 800 €?",
      a: "É quanto vale hoje arrendar durante 5 anos e vender no fim, já descontando o que o dinheiro renderia noutro lado, a 5 % ao ano. Como é positivo, nestes pressupostos arrendar rende mais.",
      source: "",
    },
  ],
  suggestions: ["Porque é que a zona valoriza?", "Comparar com casas parecidas"],
};

export const transparency = {
  title: "Cada número diz de onde vem.",
  lead: "Num valor que vai pesar numa decisão destas, não chega dizer que foi calculado. Mostramos como.",
  principles: [
    { label: "Fonte e data", text: "Em todos os valores que vê." },
    { label: "Nível de confiança", text: "E um aviso claro quando os dados da zona são poucos." },
    { label: "O que fica de fora", text: "Dito por escrito, como impostos pessoais ou mobília." },
  ],
  card: {
    caption: "Renda mensal estimada, T2 na Sé Nova",
    rows: [
      { label: "De onde vem", value: "Rendas de T2 com 80 a 95 m² na Sé Nova e em Celas" },
      { label: "Intervalo", value: "1 150 € a 1 350 € por mês" },
      { label: "Fontes", value: "Idealista (anúncios) e INE" },
      { label: "Data", value: "6 de maio de 2026" },
    ],
    excluded: "Mobília, impostos pessoais",
  },
  link: { label: "Ver como calculamos", href: "/como-funciona" },
};

export const example = {
  title: "Veja uma análise completa antes de começar.",
  lead: "Sem criar conta. É exatamente o que recebe quando analisa o seu imóvel.",
  story: "A Francisca herdou este apartamento e não sabia se o devia vender ou arrendar. Foi isto que o REII lhe mostrou.",
  cta: { label: "Ver a análise completa", href: "/exemplo" },
  zone: [
    { name: "Universidade de Coimbra", detail: "1,2 km, 15 min a pé", status: "Confirmado" },
    { name: "Escola Secundária José Falcão", detail: "850 m, 10 min a pé", status: "Confirmado" },
    { name: "Paragem de autocarro SMTUC", detail: "350 m, 4 min a pé", status: "Confirmado" },
    { name: "Estação Coimbra-A", detail: "2,4 km, 8 min de carro", status: "Confirmado" },
    { name: "Metrobus com ligação à Sé Nova", detail: "Conclusão prevista para 2028. Fonte: Câmara Municipal de Coimbra", status: "A validar" },
  ],
  comparables: [
    { name: "T2 · Rua Alexandre Herculano", detail: "84 m² · vendido em mar. 2026", value: "318 000 €" },
    { name: "T2 · Celas", detail: "91 m² · vendido em jan. 2026", value: "335 000 €" },
    { name: "T2 · Sé Nova", detail: "86 m² · arrendado em abr. 2026", value: "1 180 €/mês" },
    { name: "T2 · Praça da República", detail: "90 m² · arrendado em fev. 2026", value: "1 250 €/mês" },
  ],
  zoneGrowth: 14.8,
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
