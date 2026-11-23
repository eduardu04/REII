import { Check } from "lucide-react";

import { demo } from "@/content/home";
import { formatEuro, formatEuroMonth, formatPercent } from "@/lib/format";
import { cn } from "@/lib/utils";

/** Mini-ecrãs da app, um por passo de "Como funciona". */
export function StepScreen({ index, className }: { index: number; className?: string }) {
  return <div className={cn("w-full", className)}>{[<Describe key={0} />, <Estimate key={1} />, <Compare key={2} />][index]}</div>;
}

function Frame({ title, step, children }: { title: string; step: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-float ring-1 ring-black/5 sm:p-6">
      <div className="mb-5 flex items-center justify-between gap-3">
        <p className="text-[0.95rem] font-semibold tracking-[-0.01em] text-ink">{title}</p>
        <span className="text-[0.75rem] text-ink-3 tabular">{step}</span>
      </div>
      {children}
    </div>
  );
}

function Describe() {
  const fields = [
    ["Localização", "Sé Nova, Coimbra"],
    ["Tipologia", "T2"],
    ["Área útil", "88 m²"],
    ["Estado", "Bom, sem obras"],
  ];
  return (
    <Frame title="Caracterização do imóvel" step="1 / 4">
      <dl className="grid grid-cols-2 gap-2.5">
        {fields.map(([label, value]) => (
          <div key={label} className="rounded-lg bg-surface px-3.5 py-3">
            <dt className="text-[0.7rem] text-ink-3">{label}</dt>
            <dd className="mt-0.5 text-[0.9rem] font-medium text-ink">{value}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-4 flex items-center gap-2 text-[0.8rem] text-ink-2">
        <span className="grid size-4 place-items-center rounded-full bg-rent text-white">
          <Check aria-hidden className="size-2.5" />
        </span>
        Zona-piloto com dados suficientes
      </div>
    </Frame>
  );
}

function Estimate() {
  return (
    <Frame title="Estimativa de mercado" step="3 / 4">
      <div className="grid grid-cols-2 gap-2.5">
        <div className="rounded-lg bg-sell-soft px-3.5 py-3">
          <p className="text-[0.7rem] font-semibold text-sell">Valor hoje</p>
          <p className="mt-1 text-[1.3rem] font-semibold tracking-[-0.03em] text-ink tabular">{formatEuro(demo.valueToday)}</p>
        </div>
        <div className="rounded-lg bg-rent-soft px-3.5 py-3">
          <p className="text-[0.7rem] font-semibold text-rent">Renda provável</p>
          <p className="mt-1 text-[1.3rem] font-semibold tracking-[-0.03em] text-ink tabular">{formatEuroMonth(demo.rent.monthly)}</p>
        </div>
      </div>
      <div className="mt-5">
        <div className="flex justify-between text-[0.8rem] text-ink-2">
          <span>Nível de confiança</span>
          <span className="font-semibold text-ink tabular">{formatPercent(demo.confidence)}</span>
        </div>
        <div className="mt-2 h-1 overflow-hidden rounded-full bg-surface-2">
          <div className="h-full rounded-full bg-rent" style={{ width: `${demo.confidence}%` }} />
        </div>
        <p className="mt-3 text-[0.75rem] text-ink-3">INE · SIR · Idealista · Câmara Municipal de Coimbra</p>
      </div>
    </Frame>
  );
}

function Compare() {
  const rows = [
    { label: "Vender", value: demo.series.sell[5] * 1000, bar: "bg-sell", text: "text-sell" },
    { label: "Arrendar", value: demo.series.rent[5] * 1000, bar: "bg-rent", text: "text-rent" },
  ];
  return (
    <Frame title="Resultados a 5 anos" step="4 / 4">
      <div className="space-y-4">
        {rows.map((row) => (
          <div key={row.label}>
            <div className="flex justify-between text-[0.8rem]">
              <span className={cn("font-semibold", row.text)}>{row.label}</span>
              <span className="font-semibold text-ink tabular">{formatEuro(row.value)}</span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-surface-2">
              <div className={cn("h-full rounded-full", row.bar)} style={{ width: `${(row.value / 420_000) * 100}%` }} />
            </div>
          </div>
        ))}
        <p className="rounded-lg bg-surface px-3.5 py-3 text-[0.8rem] text-ink-2">
          Abaixo de <span className="font-semibold text-ink tabular">{formatEuroMonth(demo.turningPoint)}</span>, vender passa a
          compensar mais.
        </p>
      </div>
    </Frame>
  );
}
