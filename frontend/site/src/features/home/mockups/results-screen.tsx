"use client";

import { useState } from "react";

import { DemoBadge } from "@/components/shared/demo-badge";
import { demo } from "@/content/home";
import { formatEuro, formatEuroMonth, formatPercent } from "@/lib/format";
import { cn } from "@/lib/utils";

import { ResultsChart } from "./results-chart";

const HORIZONS = [3, 5, 10] as const;
const SCENARIOS = ["Conservador", "Central", "Otimista"] as const;

/** Mockup do ecrã de Resultados da app. O horizonte é interativo; o resto é ilustrativo. */
export function ResultsScreen() {
  const [horizon, setHorizon] = useState<(typeof HORIZONS)[number]>(5);
  const sell = demo.series.sell[horizon] * 1000;
  const rent = demo.series.rent[horizon] * 1000;

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-float ring-1 ring-black/5">
      {/* Barra da janela */}
      <div className="flex items-center gap-3 border-b border-line px-4 py-3">
        <div aria-hidden className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-line" />
          <span className="size-2.5 rounded-full bg-line" />
          <span className="size-2.5 rounded-full bg-line" />
        </div>
        <p className="truncate text-xs text-ink-2">Resultados · {demo.property.title}</p>
        <DemoBadge className="ml-auto hidden sm:inline-flex" />
      </div>

      <div className="p-4 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div
            role="group"
            aria-label="Horizonte da projeção"
            className="inline-flex rounded-lg bg-surface p-1 ring-1 ring-line"
          >
            {HORIZONS.map((h) => (
              <button
                key={h}
                type="button"
                aria-pressed={horizon === h}
                onClick={() => setHorizon(h)}
                className={cn(
                  "rounded-md px-3 py-1.5 text-xs font-medium tabular transition-colors duration-200",
                  horizon === h ? "bg-white text-ink shadow-soft" : "text-ink-2 hover:text-ink",
                )}
              >
                {h} anos
              </button>
            ))}
          </div>
          <ul aria-label="Cenários" className="flex gap-1.5">
            {SCENARIOS.map((s) => (
              <li
                key={s}
                className={cn(
                  "rounded-full px-2.5 py-1 text-[0.7rem] font-medium",
                  s === "Central" ? "bg-ink text-white" : "bg-surface text-ink-2 ring-1 ring-line",
                )}
              >
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3" aria-live="polite">
          <div className="rounded-xl bg-sell-soft p-3 ring-1 ring-sell/15 sm:p-4">
            <p className="text-[0.7rem] font-semibold tracking-[0.12em] text-sell uppercase">Vender</p>
            <p className="mt-1.5 text-lg font-semibold text-ink tabular sm:text-2xl">{formatEuro(sell)}</p>
            <p className="mt-1 text-[0.7rem] text-ink-2 sm:text-xs">daqui a {horizon} anos</p>
          </div>
          <div className="rounded-xl bg-rent-soft p-3 ring-1 ring-rent/15 sm:p-4">
            <p className="text-[0.7rem] font-semibold tracking-[0.12em] text-rent uppercase">Arrendar</p>
            <p className="mt-1.5 text-lg font-semibold text-ink tabular sm:text-2xl">{formatEuro(rent)}</p>
            <p className="mt-1 text-[0.7rem] text-ink-2 sm:text-xs">imóvel + rendas líquidas</p>
          </div>
        </div>

        <div className="mt-5">
          <ResultsChart horizon={horizon} />
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink-2">
            <span className="inline-flex items-center gap-1.5">
              <span aria-hidden className="h-0.5 w-4 rounded bg-sell" /> Vender hoje e aplicar o valor
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span aria-hidden className="h-0.5 w-4 rounded bg-rent" /> Manter e arrendar
            </span>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
          <Stat label="Ponto de viragem" value={formatEuroMonth(demo.turningPoint)} />
          <Stat label="TIR do arrendamento" value={formatPercent(5.8)} />
          <Stat label="Confiança" value={formatPercent(demo.confidence)} />
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-surface p-2.5 ring-1 ring-line sm:p-3">
      <p className="text-[0.65rem] leading-tight text-ink-2 sm:text-[0.7rem]">{label}</p>
      <p className="mt-1 text-xs font-semibold text-ink tabular sm:text-sm">{value}</p>
    </div>
  );
}
