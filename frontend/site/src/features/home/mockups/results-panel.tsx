"use client";

import { useState } from "react";

import { demo } from "@/content/home";
import { formatEuro, formatEuroMonth, formatPercent } from "@/lib/format";
import { cn } from "@/lib/utils";

import { ResultsChart } from "./results-chart";

const SCENARIOS = ["Prudente", "Central", "Otimista"] as const;

/** Ecrã de Resultados da app (conteúdo), fiel aos ecrãs da dashboard e ao mockup da página. */
export function ResultsPanel() {
  const [scenario, setScenario] = useState<(typeof SCENARIOS)[number]>("Central");

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_17.5rem]">
      <div className="min-w-0 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-sell-soft p-5">
            <p className="text-[0.85rem] font-semibold text-sell">Vender</p>
            <p className="mt-2 text-[0.75rem] text-ink-2">Valor daqui a 5 anos</p>
            <p className="mt-1 text-[1.75rem] font-semibold tracking-[-0.035em] text-ink tabular">{formatEuro(demo.sell.value)}</p>
            <p className="mt-1.5 text-[0.75rem] font-semibold text-success tabular">
              +{formatEuro(demo.sell.gain)} (+{formatPercent(demo.sell.change)})
            </p>
          </div>
          <div className="rounded-xl bg-rent-soft p-5">
            <p className="text-[0.85rem] font-semibold text-rent">Arrendar</p>
            <p className="mt-2 text-[0.75rem] text-ink-2">Renda estimada</p>
            <p className="mt-1 text-[1.75rem] font-semibold tracking-[-0.035em] text-ink tabular">{formatEuroMonth(demo.rent.monthly)}</p>
            <p className="mt-1.5 text-[0.75rem] font-semibold text-rent tabular">
              {formatEuro(demo.rent.fiveYearGross)} em rendas brutas em 5 anos
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-white p-5 ring-1 ring-line">
          <p className="text-[0.95rem] font-semibold tracking-[-0.01em] text-ink">Quanto vale cada caminho ao longo do tempo</p>
          <div className="mt-2 mb-3 flex flex-wrap gap-x-5 gap-y-1 text-[0.72rem] text-ink-2">
            <span className="flex items-center gap-1.5">
              <span aria-hidden className="h-0.5 w-3 rounded bg-sell" /> Vender: valor do imóvel
            </span>
            <span className="flex items-center gap-1.5">
              <span aria-hidden className="h-0.5 w-3 rounded bg-rent" /> Arrendar: valor do imóvel + rendas líquidas
            </span>
          </div>
          <ResultsChart />
          <p className="mt-3 text-[0.7rem] text-ink-3">Fonte: cálculos REII com dados do INE e do SIR. Atualizado a 6 de maio de 2026.</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="rounded-xl bg-white p-5 ring-1 ring-line">
          <p className="text-[0.95rem] font-semibold text-ink">Cenário</p>
          <div role="group" aria-label="Cenário" className="mt-3 grid grid-cols-3 rounded-lg bg-surface p-1">
            {SCENARIOS.map((s) => (
              <button
                key={s}
                type="button"
                aria-pressed={scenario === s}
                onClick={() => setScenario(s)}
                className={cn(
                  "rounded-md py-1.5 text-[0.75rem] font-medium transition-colors",
                  scenario === s ? "bg-white text-ink shadow-[0_1px_2px_rgb(0_0_0/0.08)]" : "text-ink-2 hover:text-ink",
                )}
              >
                {s}
              </button>
            ))}
          </div>
          <p className="mt-3 text-[0.72rem] leading-relaxed text-ink-2">
            O cenário prudente e o otimista mudam a valorização e os meses com inquilino.
          </p>
        </div>

        <div className="rounded-xl bg-white p-5 ring-1 ring-line">
          <dl className="divide-y divide-line text-[0.8rem]">
            {[
              ["Valor hoje", formatEuro(demo.valueToday)],
              ["Rentabilidade anual do arrendamento", formatPercent(demo.irr)],
              ["Ganho do arrendamento, em dinheiro de hoje", formatEuro(demo.npv)],
              ["Prazo da análise", "5 anos"],
            ].map(([k, v]) => (
              <div key={k} className="flex items-start justify-between gap-4 py-2.5 first:pt-0">
                <dt className="text-ink-2">{k}</dt>
                <dd className="font-semibold text-ink tabular">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-3 rounded-lg bg-sell-soft p-3.5">
            <p className="text-[0.75rem] font-semibold text-sell">Quando é que a resposta muda?</p>
            <p className="mt-1.5 text-[0.75rem] leading-relaxed text-ink">
              Se a renda descer abaixo de {formatEuroMonth(demo.turningPoint)}, vender passa a compensar mais do que arrendar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
