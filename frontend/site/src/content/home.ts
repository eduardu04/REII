/**
 * Copy e dados da página Início.
 * Fontes: mockup "REII_Pagina_Inicio_Mockup.pdf" e ecrãs da app "REII_Ecras.pdf".
 * Todos os números são valores de demonstração do exemplo T2 Coimbra, até serem validados.
 * Imagens geradas a partir de site/docs/prompts-imagens.md.
 */
import capa from "@/assets/photos/capa-lisboa.jpg";
import t2Cozinha from "@/assets/photos/exemplo-t2-cozinha.jpg";
import t2Fachada from "@/assets/photos/exemplo-t2-fachada.jpg";
import t2Sala from "@/assets/photos/exemplo-t2-sala.jpg";
import fecho from "@/assets/photos/fecho-sala.jpg";
import palco from "@/assets/photos/palco-passos.jpg";
import herdei from "@/assets/photos/situacao-herdei.jpg";
import vazio from "@/assets/photos/situacao-imovel-vazio.jpg";
import investidor from "@/assets/photos/situacao-investidor.jpg";
import segundaCasa from "@/assets/photos/situacao-segunda-casa.jpg";
import t3Fachada from "@/assets/photos/t3-lisboa-fachada.jpg";

export const photos = {
  capa,
  palco,
  fecho,
  t2Fachada,
  t2Sala,
  t2Cozinha,
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

export const hero = {
  title: "Vender ou arrendar? Veja os dois caminhos lado a lado.",
  subtitle:
    "Diga-nos onde fica o imóvel e como é. O REII estima quanto vale hoje, quanto pode render em renda e como fica cada opção daqui a 5 ou 10 anos, com a fonte de cada número.",
  // TODO(equipa): condição de entrada (ex.: primeira análise grátis) ainda por definir.
  notes: ["Primeira estimativa grátis", "Sem mensalidades", "A decisão é sempre sua"],
};

export const problem = {
  title: "Toda a gente tem uma opinião sobre a sua casa.",
  lead: "Quase ninguém compara as duas opções com os mesmos números. E muitos ganham alguma coisa com a sua escolha.",
  voices: [
    {
      who: "O agente imobiliário",
      says: "“Venda agora, o mercado está no pico.”",
      note: "Pode ter razão. Mas a comissão depende de a casa ser vendida.",
    },
    {
      who: "A família e os amigos",
      says: "“O meu primo arrendou e está a ganhar bem.”",
      note: "Quase nunca se contam as despesas nem os meses sem inquilino.",
    },
    {
      who: "Os anúncios",
      says: "“Um T2 aqui ao lado está à venda por 390 000 €.”",
      note: "O preço pedido não é o preço a que a casa se vende.",
    },
  ],
  answer: "O REII põe vender e arrendar lado a lado, com o mesmo prazo e as mesmas regras.",
  answerMuted:
    "Cobramos a análise, não a decisão: paga o mesmo, venda ou arrende. Não recebemos comissões de agentes nem de gestores de arrendamento.",
};

export const audience = {
  title: "Cada casa chega a esta decisão por um caminho diferente.",
  items: [
    {
      title: "Herdei uma casa",
      text: "Vender e dividir, ou arrendar e ter um rendimento todos os meses? Fica com uma análise que pode mostrar ao resto da família.",
      image: herdei,
      alt: "Sala de jantar de família com caixas por arrumar e chaves em cima da mesa",
    },
    {
      title: "Tenho uma segunda habitação",
      text: "Uma casa que usa pouco. Perceba quanto lhe custa mantê-la e quanto poderia render se a arrendasse.",
      image: segundaCasa,
      alt: "Casa de férias caiada, com portadas azuis fechadas e um limoeiro",
    },
    {
      title: "Tenho um imóvel vazio",
      text: "Uma casa parada também custa dinheiro: IMI, condomínio e manutenção. Veja quanto está a deixar de ganhar.",
      image: vazio,
      alt: "Apartamento vazio com chaves e cartas por abrir no parapeito",
    },
    {
      title: "Sou investidor",
      text: "Compare a rentabilidade de cada imóvel com os mesmos critérios e veja por onde começar.",
      image: investidor,
      alt: "Três prédios vizinhos com fachadas diferentes numa rua inclinada",
    },
  ],
};

export const steps = {
  title: "Da morada à resposta, em 4 passos.",
  lead: "Não precisa de saber o que é uma taxa de desconto. Basta responder ao que sabe sobre a casa; o REII faz as contas.",
  items: [
    {
      title: "Caracterização",
      text: "Duas perguntas sobre a sua situação e, depois, a casa: tipologia, área, estado e morada.",
    },
    {
      title: "Pressupostos",
      text: "Escolha o prazo: 3, 5, 10 ou 15 anos. As taxas técnicas ficam por nossa conta.",
    },
    {
      title: "Estimativa de mercado",
      text: "Valor hoje e renda provável, com a fonte, a data e o nível de confiança.",
    },
    {
      title: "Resultados",
      text: "Vender e arrendar lado a lado, em três cenários, com o ponto de viragem.",
    },
  ],
};

export const product = {
  title: "Uma resposta clara, num só ecrã.",
  lead: "Todos os seus imóveis num só sítio, cada um com os dois caminhos lado a lado. Pode rever, comparar e partilhar quando quiser.",
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
        "Partimos do valor de hoje, 320 000 €, estimado a partir de 6 imóveis comparáveis num raio de 1,2 km. Aplicámos uma valorização de 3,1 % ao ano, estimada a partir da evolução da zona.",
      source: "SIR e INE · 6 de maio de 2026",
    },
    {
      key: "rent",
      label: "Renda estimada",
      value: "1 200 €/mês",
      tone: "rent",
      question: "Como chegaram aos 1 200 € de renda?",
      answer:
        "É a renda mais comum de T2 com 80 a 95 m² arrendados na Sé Nova e em Celas nos últimos 6 meses, entre 1 150 € e 1 350 €. Ajustámos ao seu imóvel porque tem garagem e certificado energético B.",
      source: "Idealista e INE · 6 de maio de 2026",
    },
    {
      key: "npv",
      label: "Ganho do arrendamento",
      value: "41 800 €",
      tone: "ink",
      question: "O que quer dizer o ganho de 41 800 €?",
      answer:
        "É quanto vale hoje arrendar durante 5 anos e vender no fim, já descontando o que o dinheiro renderia noutra aplicação, a 5 % ao ano. Como é positivo, nestes pressupostos arrendar rende mais.",
      source: "Motor financeiro REII · pressupostos que pode alterar",
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
  lead: "Um apartamento de 88 m² na Sé Nova, num prédio de 2008. Não sabia se o devia vender ou arrendar. Estes foram os números que viu, com a mesma análise que recebe para a sua casa.",
  cta: { label: "Analisar o meu imóvel", note: "Quer ver estes números para a sua casa?" },
  gallery: [
    { image: t2Sala, alt: "Sala do T2 com varanda e vista para a torre da Universidade de Coimbra" },
    { image: t2Cozinha, alt: "Cozinha do T2 com janela sobre os telhados" },
    { image: t2Fachada, alt: "Fachada do prédio do T2, com varandas e garagem" },
  ],
  figures: [
    { label: "Valor hoje", value: "320 000 €" },
    { label: "Vender, daqui a 5 anos", value: "372 000 €" },
    { label: "Arrendar", value: "1 200 €/mês" },
    { label: "A resposta muda abaixo de", value: "1 050 €/mês" },
  ],
};

export const faq = {
  title: "Perguntas frequentes",
  lead: "Não encontra a sua? Escreva-nos para",
  // TODO(equipa): confirmar o endereço de apoio.
  email: "ajuda@reii.pt",
  items: [
    {
      q: "Como funcionam os créditos?",
      a: "A primeira estimativa é grátis. Para a análise completa, compra um pacote de créditos e usa-os quando precisar, sem mensalidades. O custo de cada operação está na página Preços.",
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
      a: "Ficam guardados na sua conta, para poder rever e partilhar a análise. Nunca os vendemos nem os passamos a agentes ou imobiliárias.",
    },
    {
      q: "O REII diz-me o que devo fazer?",
      a: "Não. Mostra os dois caminhos e explica os números. A decisão é sempre sua.",
    },
  ],
};

export const finalCta = {
  title: "A casa é sua. A decisão também.",
  lead: "Veja os dois caminhos com números claros e decida com calma.",
  image: fecho,
  alt: "Sala vazia com janelas altas, uma cadeira e a sombra das árvores no chão",
};
