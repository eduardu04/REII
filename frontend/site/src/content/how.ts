/**
 * Copy da página Como funciona.
 * Fontes: mockup "REII_Pagina_Como_Funciona_Mockup.pdf", documento "REII — Contexto e estrutura do site"
 * e ecrãs da app "REII_Ecras.pdf". Números do exemplo T2 Coimbra, valores de demonstração.
 */

export const howHero = {
  title: "Cada número tem uma origem. Mostramos todas.",
  lead: "De onde vêm os dados, como fazemos as contas e onde estão os limites. Sem letras pequenas.",
  anchors: [
    { label: "Os 4 passos", href: "#passos" },
    { label: "As fontes", href: "#fontes" },
    { label: "As contas", href: "#contas" },
    { label: "Os limites", href: "#limites" },
    { label: "Privacidade", href: "#privacidade" },
  ],
};

export const howSteps = {
  title: "Os 4 passos de uma análise.",
  lead: "O mesmo percurso que vai fazer na app, passo a passo.",
  items: [
    {
      title: "Caracterização",
      text: "Tipo de imóvel, área, estado e localização. As fotos são opcionais.",
    },
    {
      title: "Pressupostos",
      text: "Objetivo e prazo: 3, 5, 10 ou 15 anos. As taxas técnicas são estimadas por nós.",
    },
    {
      title: "Estimativa de mercado",
      text: "Valor hoje e renda provável, com fontes, data e nível de confiança.",
    },
    {
      title: "Resultados",
      text: "Vender e arrendar lado a lado, em três cenários, com o ponto de viragem.",
    },
  ],
};

export const howSources = {
  title: "De onde vêm os dados.",
  lead: "Fontes públicas e de mercado. Cada valor diz qual foi usada e em que data.",
  items: [
    {
      name: "INE",
      text: "Preços medianos da habitação por freguesia e a sua evolução.",
    },
    {
      name: "SIR – Confidencial Imobiliário",
      text: "Valores de venda e de renda registados: a que preço as casas mudam mesmo de mãos.",
    },
    {
      name: "Idealista",
      text: "Casas parecidas na mesma zona, nos últimos 6 meses.",
    },
    {
      name: "Câmaras Municipais",
      text: "Obras previstas perto do imóvel, como transportes ou escolas.",
    },
  ],
  callout: {
    strong: "Preço pedido não é preço de venda.",
    text: "Por isso cruzamos sempre os anúncios com valores registados.",
  },
  caption: "Assim aparecem as fontes em cada análise",
};

export const howMath = {
  title: "As contas, em português simples.",
  lead: "Os indicadores de um analista, explicados. O nome técnico fica entre parênteses.",
  items: [
    {
      value: "+16,3 %",
      label: "Valorização",
      text: "Quanto o imóvel pode valer a mais daqui a 5 anos, pela evolução da zona.",
    },
    {
      value: "5,6 %",
      unit: "ao ano",
      label: "Rentabilidade anual",
      tech: "(TIR)",
      text: "Quanto rende por ano arrendar e vender no fim. Comparável à taxa de um depósito.",
    },
    {
      value: "41 800 €",
      label: "Ganho em dinheiro de hoje",
      tech: "(VAL)",
      text: "Quanto vale hoje arrendar e vender no fim, já descontando o que o dinheiro renderia a 5 % ao ano.",
    },
    {
      value: "≈ 5 anos",
      label: "Tempo de retorno",
      tech: "(payback)",
      text: "Quanto tempo até as rendas e o valor do imóvel compensarem o investimento.",
    },
  ],
  note: "Valores do exemplo T2 na Sé Nova, Coimbra. Todos os cálculos são antes de impostos pessoais.",
};

export const howScenarios = {
  title: "Três cenários, não uma única previsão.",
  lead: "Ninguém sabe ao certo como o mercado vai estar daqui a 5 anos. Por isso mostramos três hipóteses, e pode ver cada uma.",
  items: [
    {
      name: "Prudente",
      text: "Valorização 1 ponto abaixo do esperado e menos meses com inquilino.",
      value: 355_000,
      color: "#8b938f",
    },
    {
      name: "Central",
      text: "O que os dados da zona indicam como mais provável.",
      value: 372_000,
      color: "#0f4c45",
    },
    {
      name: "Otimista",
      text: "Valorização 1 ponto acima do esperado e mais meses com inquilino.",
      value: 391_000,
      color: "#b4532a",
    },
  ],
  chartTitle: "Valor do imóvel daqui a 5 anos, por cenário",
  chartNote: "Valor do T2 na Sé Nova daqui a 5 anos, em cada cenário. Hoje vale 320 000 €.",
};

export const howTurning = {
  title: "Três cenários e o ponto em que a resposta muda.",
  lead: "Três hipóteses para o mercado e a renda a partir da qual vender passa a compensar mais.",
  context: "No exemplo do T2 na Sé Nova, com os pressupostos do cenário central:",
  min: 800,
  max: 1400,
  turning: 1050,
  rent: 1200,
  notes: [
    {
      strong: "Margem de 150 € por mês.",
      text: "A renda pode descer cerca de 12 % antes de a resposta mudar.",
    },
    {
      strong: "Se não tiver a certeza da renda,",
      text: "é este o número a confirmar primeiro, por exemplo junto de uma agência da zona.",
    },
  ],
};

export const howAssistant = {
  title: "O que o assistente faz, e o que não faz.",
  lead: "Usa inteligência artificial para explicar a análise. Dizemos onde ajuda e onde não deve ser usado.",
  does: [
    "Explica cada número e de onde veio",
    "Traduz termos como VAL e TIR",
    "Resume a análise para partilhar",
    "Confirma o estado do imóvel pelas fotos",
  ],
  doesNot: [
    "Não decide nem recomenda por si",
    "Não inventa dados que não tem",
    "Não substitui um avaliador ou um contabilista",
    "Não garante resultados",
  ],
  caption: "O assistente, ao lado de cada análise",
};

export const howConfidence = {
  title: "Quando a confiança é baixa, dizemos.",
  lead: "Cada estimativa tem um nível de confiança. Depende de três coisas.",
  factors: [
    {
      title: "Quantas casas parecidas encontrámos",
      text: "Mais casas comparáveis na zona dão uma estimativa mais firme.",
    },
    {
      title: "Quão parecidas são",
      text: "Área, tipologia, estado e distância ao seu imóvel.",
    },
    {
      title: "Quão recentes são os dados",
      text: "Dados dos últimos meses pesam mais do que dados antigos.",
    },
  ],
  levels: [
    { label: "Alta", filled: 5 },
    { label: "Média", filled: 3 },
    { label: "Baixa, com aviso", filled: 1 },
  ],
  excluded: {
    title: "O que fica fora da análise",
    lead: "Estas coisas não entram nas contas. Se pesam no seu caso, fale com um especialista.",
    items: [
      {
        title: "Impostos pessoais",
        text: "IRS sobre as rendas e mais-valias na venda dependem da sua situação.",
      },
      { title: "Mobília", text: "A renda estimada é para casa sem mobília." },
      {
        title: "Obras grandes",
        text: "Contamos a manutenção anual, mas não remodelações.",
      },
      {
        title: "Zonas sem dados suficientes",
        text: "Para já, a análise só está disponível em zonas com dados de mercado suficientes. Dizemos-lhe logo no primeiro passo.",
      },
    ],
  },
};

export const howPrivacy = {
  title: "Os dados do seu imóvel são seus.",
  lead: "Pedimos só o que é preciso para a análise, e dizemos para que serve.",
  items: [
    {
      title: "O que guardamos",
      text: "Os dados do imóvel que introduz e as análises que faz, na sua conta.",
    },
    {
      title: "Para quê",
      text: "Para poder rever, comparar e partilhar as suas análises quando quiser.",
    },
    {
      title: "O que nunca fazemos",
      text: "Nunca vendemos nem passamos os seus dados a agentes ou imobiliárias.",
    },
  ],
};

export const howCta = {
  title: "Agora que sabe como funciona, veja com a sua casa.",
  lead: "Os mesmos 4 passos, com os dados do seu imóvel.",
};
