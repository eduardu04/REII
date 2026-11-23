/** Formatação de números em português de Portugal (372 000 €, 1 200 €/mês, 16,3 %). */
const eur = new Intl.NumberFormat("pt-PT", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
  useGrouping: "always",
});

const num = new Intl.NumberFormat("pt-PT", { maximumFractionDigits: 1, useGrouping: "always" });

/** Espaços sem quebra, para "372 000 €" nunca partir em duas linhas. */
const nbsp = (s: string) => s.replace(/ |\s/g, " ");

export const formatEuro = (value: number) => nbsp(eur.format(value));
export const formatEuroMonth = (value: number) => `${formatEuro(value)}/mês`;
export const formatNumber = (value: number) => nbsp(num.format(value));
export const formatPercent = (value: number) => `${formatNumber(value)} %`;

export const formatters = {
  euro: formatEuro,
  euroMonth: formatEuroMonth,
  number: formatNumber,
  percent: formatPercent,
} as const;

export type FormatKind = keyof typeof formatters;
