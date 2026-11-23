import { ArrowUpRight, Repeat2 } from "lucide-react";

import { CountUp } from "@/components/motion/count-up";
import { Reveal } from "@/components/motion/reveal";
import { DemoBadge } from "@/components/shared/demo-badge";
import { demo } from "@/content/home";
import { formatEuroMonth, formatPercent } from "@/lib/format";

/** Hero: os cartões Vender (terracota) e Arrendar (verde) do T2 Coimbra, como no dashboard. */
export function DecisionCards() {
  return (
    <div className="relative">
      <Reveal y={32} className="rounded-2xl bg-card p-4 shadow-lift ring-1 ring-line sm:p-5">
        <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-2">
          <div>
            <p className="text-sm font-medium text-ink">{demo.property.title}</p>
            <p className="text-xs text-ink-soft">{demo.property.details}</p>
          </div>
          <DemoBadge />
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <Reveal index={2} className="rounded-xl bg-sell-soft p-4 ring-1 ring-sell/15">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold tracking-[0.12em] text-sell uppercase">Vender</p>
              <span className="inline-flex items-center gap-0.5 rounded-full bg-white/70 px-2 py-0.5 text-[0.7rem] font-medium whitespace-nowrap text-success tabular">
                <ArrowUpRight aria-hidden className="size-3" />+{formatPercent(demo.sell.change)}
              </span>
            </div>
            <p className="mt-3 text-[1.75rem] leading-none font-semibold tracking-tight text-ink tabular lg:text-[2rem]">
              <CountUp value={demo.sell.value} format="euro" delay={0.4} />
            </p>
            <p className="mt-2 text-xs text-ink-soft">Valor estimado {demo.sell.horizon}</p>
          </Reveal>

          <Reveal index={3} className="rounded-xl bg-rent p-4 text-white">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold tracking-[0.12em] text-white/80 uppercase">Arrendar</p>
              <span className="rounded-full bg-white/12 px-2 py-0.5 text-[0.7rem] font-medium whitespace-nowrap text-white/85 tabular">
                {formatPercent(demo.rent.occupancy)} ocupação
              </span>
            </div>
            <p className="mt-3 text-[1.75rem] leading-none font-semibold tracking-tight tabular lg:text-[2rem]">
              <CountUp value={demo.rent.monthly} format="euroMonth" delay={0.5} />
            </p>
            <p className="mt-2 text-xs text-white/70">Renda mensal estimada</p>
          </Reveal>
        </div>

        <Reveal index={4} className="mt-3 flex items-center gap-3 rounded-xl bg-cream px-4 py-3 ring-1 ring-line">
          <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-white text-ink ring-1 ring-line">
            <Repeat2 aria-hidden className="size-4" />
          </span>
          <p className="text-xs leading-snug text-ink-soft sm:text-sm">
            <span className="font-medium text-ink">Ponto de viragem:</span> abaixo de{" "}
            <span className="font-medium text-ink tabular">{formatEuroMonth(demo.turningPoint)}</span>, vender
            passa a compensar mais.
          </p>
        </Reveal>
      </Reveal>
    </div>
  );
}
