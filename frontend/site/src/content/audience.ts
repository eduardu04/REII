import type { PackId } from "@/content/pricing";
import herdei from "@/assets/photos/situacao-herdei.jpg";
import vazio from "@/assets/photos/situacao-imovel-vazio.jpg";
import investidor from "@/assets/photos/situacao-investidor.jpg";
import segundaCasa from "@/assets/photos/situacao-segunda-casa.jpg";

/**
 * Copy da página Para quem é: as quatro situações do Início, cada uma com as perguntas que a pessoa faz,
 * o que o REII lhe mostra e o que continua a precisar de um profissional.
 */

export const audienceHero = {
  title: "Uma casa, uma decisão, quatro pontos de partida.",
  lead: "O REII serve a quem tem um imóvel e precisa de decidir entre vender e arrendar. Encontre a sua situação e veja o que a análise lhe mostra.",
};

export type Situation = {
  id: string;
  label: string;
  title: string;
  lead: string;
  image: typeof herdei;
  alt: string;
  questions: string[];
  shows: { title: string; text: string }[];
  limit: string;
  packId: PackId;
};

export const situations: Situation[] = [
  {
    id: "herdei",
    label: "Herdei uma casa",
    title: "Herdou uma casa e a família tem de decidir.",
    lead: "Cada pessoa tem uma opinião. Uma análise com números e fontes ajuda a pôr toda a gente a olhar para a mesma coisa.",
    image: herdei,
    alt: "Sala de jantar de família com caixas por arrumar e chaves em cima da mesa",
    questions: ["Vendemos e dividimos, ou arrendamos?", "Quanto vale a casa hoje?", "Quanto renderia por mês?"],
    shows: [
      { title: "Os dois caminhos lado a lado", text: "Quanto fica a vender daqui a 5 anos e quanto rende a arrendar, no mesmo ecrã." },
      { title: "Um relatório para partilhar", text: "Em PDF, para mostrar ao resto da família ou a um consultor." },
      { title: "O ponto de viragem", text: "A partir de que renda vender passa a compensar mais." },
    ],
    limit: "Partilhas, escrituras e impostos da herança continuam a precisar de um advogado ou de um solicitador.",
    packId: "familia",
  },
  {
    id: "segunda-casa",
    label: "Segunda habitação",
    title: "Tem uma segunda casa que usa pouco.",
    lead: "Manter uma casa tem custos todos os anos. Perceba o que ganha e o que perde em cada caminho.",
    image: segundaCasa,
    alt: "Casa de férias caiada, com portadas azuis fechadas e um limoeiro",
    questions: ["Compensa mantê-la?", "Quanto renderia se a arrendasse?", "E se a vender agora?"],
    shows: [
      { title: "Renda provável na zona", text: "Com base em casas parecidas, com fonte, data e nível de confiança." },
      { title: "Custos que contam", text: "Manutenção e meses sem inquilino entram nas contas do arrendamento." },
      { title: "Três cenários", text: "Prudente, central e otimista, para ver o que muda se o mercado mudar." },
    ],
    limit: "O arrendamento de curta duração (alojamento local) tem regras próprias e não entra nesta análise.",
    packId: "uma",
  },
  {
    id: "imovel-vazio",
    label: "Imóvel vazio",
    title: "Tem um imóvel parado.",
    lead: "Uma casa vazia também custa dinheiro: IMI, condomínio e manutenção. Veja quanto está a deixar de ganhar.",
    image: vazio,
    alt: "Apartamento vazio com chaves e cartas por abrir no parapeito",
    questions: ["Quanto vale como está?", "Quanto renderia arrendado?", "Vale a pena esperar para vender?"],
    shows: [
      { title: "Valor hoje e daqui a 5 anos", text: "Pela evolução da zona e pelas obras previstas por perto." },
      { title: "Rendimento em dinheiro de hoje", text: "O ganho de arrendar já descontado, explicado em português simples." },
      { title: "O estado da casa conta", text: "Pode indicar o estado de conservação; as fotos ajudam a confirmá-lo." },
    ],
    limit: "Se a casa precisa de obras grandes, a análise não as orça: conte com um empreiteiro para isso.",
    packId: "uma",
  },
  {
    id: "investidor",
    label: "Sou investidor",
    title: "Tem vários imóveis e quer compará-los.",
    lead: "Os mesmos critérios em todos os imóveis, para ver por onde começar e onde está o dinheiro parado.",
    image: investidor,
    alt: "Três prédios vizinhos com fachadas diferentes numa rua inclinada",
    questions: ["Qual rende mais?", "Qual devo vender primeiro?", "Como evolui cada zona?"],
    shows: [
      { title: "Todos os imóveis num ecrã", text: "Valor, renda e rendimento de cada um, lado a lado." },
      { title: "Indicadores de analista", text: "Rentabilidade anual (TIR), ganho em dinheiro de hoje (VAL) e tempo de retorno." },
      { title: "Casas comparáveis", text: "Os imóveis parecidos que serviram de base a cada estimativa." },
    ],
    limit: "O REII não faz planeamento fiscal nem gere carteiras: para isso, fale com o seu contabilista ou gestor.",
    packId: "investidor",
  },
];

export const audienceNotFor = {
  title: "Quando o REII não é a resposta.",
  lead: "Preferimos dizer já do que deixá-lo descobrir depois de pagar.",
  items: [
    {
      title: "Precisa de uma avaliação certificada",
      text: "Para um crédito à habitação, uma partilha em tribunal ou uma escritura, é preciso um perito avaliador.",
    },
    { title: "Quer que alguém decida por si", text: "O REII mostra os dois caminhos e explica os números. A decisão é sempre sua." },
    { title: "A sua zona ainda não tem dados suficientes", text: "Dizemos-lhe logo no primeiro passo, antes de gastar qualquer crédito." },
  ],
};

export const audienceCta = {
  title: "Encontrou a sua situação? Veja os números da sua casa.",
  lead: "Comece pela morada. Os mesmos 4 passos, seja qual for o seu caso.",
};
