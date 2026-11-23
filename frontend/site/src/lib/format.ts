/** Formatação de números em português de Portugal (372 000 €, 16,3 %). */
const eur = new Intl.NumberFormat("pt-PT", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
  useGrouping: "always",
});

const num = new Intl.NumberFormat("pt-PT", { maximumFractionDigits: 1, useGrouping: "always" });

/** pt-PT usa espaço fino como separador de milhares; garantimos espaço sem quebra. */
const nbsp = (s: string) => s.replace(/ |\s/g, " ");

export const formatEuro = (value: number) => nbsp(eur.format(value));
export const formatNumber = (value: number) => nbsp(num.format(value));
export const formatPercent = (value: number) => `${formatNumber(value)} %`;
