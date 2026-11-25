"use client";

import { useState } from "react";

import { analyse, type AnalysisInput } from "@/lib/api";

// Valores iniciais só para preencher o formulário; o resultado vem sempre da API.
const INICIAL: AnalysisInput = {
  sale_price: 200000,
  sale_costs: 10000,
  monthly_rent: 900,
  annual_costs: 1500,
  years: 10,
  discount_rate: 0.04,
  final_value: 220000,
};

const ROTULOS: Record<keyof AnalysisInput, string> = {
  sale_price: "Preço de venda hoje (€)",
  sale_costs: "Custos da venda (€)",
  monthly_rent: "Renda mensal (€)",
  annual_costs: "Custos anuais do arrendamento (€)",
  years: "Horizonte (anos)",
  discount_rate: "Taxa de desconto (ex.: 0,04)",
  final_value: "Valor do imóvel no fim do horizonte (€)",
};

export function SimulacaoForm() {
  const [form, setForm] = useState<AnalysisInput>(INICIAL);
  const [resultado, setResultado] = useState<Record<string, unknown> | null>(null);
  const [erro, setErro] = useState<string | null>(null);
  const [aCarregar, setACarregar] = useState(false);

  async function submeter(e: React.FormEvent) {
    e.preventDefault();
    setErro(null);
    setACarregar(true);
    try {
      setResultado(await analyse(form));
    } catch (err) {
      setErro(err instanceof Error ? err.message : "Não foi possível falar com a API.");
    } finally {
      setACarregar(false);
    }
  }

  return (
    <>
      <form onSubmit={submeter} className="mt-8 space-y-4">
        {(Object.keys(ROTULOS) as (keyof AnalysisInput)[]).map((campo) => (
          <label key={campo} className="block">
            <span className="text-sm text-ink-2">{ROTULOS[campo]}</span>
            <input
              type="number"
              step="any"
              value={form[campo]}
              onChange={(e) => setForm({ ...form, [campo]: Number(e.target.value) })}
              className="mt-1 w-full rounded-lg border border-line px-3 py-2 outline-none focus:border-ink"
            />
          </label>
        ))}
        <button
          type="submit"
          disabled={aCarregar}
          className="rounded-lg bg-ink px-5 py-2.5 font-medium text-white disabled:opacity-60"
        >
          {aCarregar ? "A analisar…" : "Analisar"}
        </button>
      </form>

      {erro && <p className="mt-6 text-sell">{erro}</p>}
      {resultado && (
        <pre className="mt-6 overflow-x-auto rounded-lg bg-surface p-4 text-sm">
          {JSON.stringify(resultado, null, 2)}
        </pre>
      )}
    </>
  );
}
