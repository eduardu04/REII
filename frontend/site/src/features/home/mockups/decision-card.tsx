import { CountUp } from "@/components/motion/count-up";
import { DemoBadge } from "@/components/shared/demo-badge";
import { demo } from "@/content/home";
import { formatEuroMonth, formatPercent } from "@/lib/format";
import { cn } from "@/lib/utils";

/** Cartão-resumo do T2 Coimbra: Vender (terracota) e Arrendar (verde) lado a lado, como na app. */
export function DecisionCard({ className }: { className?: string }) {
  return (
    <div className={cn("w-full rounded-2xl bg-white/95 p-5 shadow-float ring-1 ring-black/5 backdrop-blur-xl sm:p-6", className)}>
      <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-2">
        <div>
          <p className="text-[0.95rem] font-semibold tracking-[-0.01em] text-ink">{demo.property.title}</p>
          <p className="mt-0.5 text-[0.8rem] text-ink-2">{demo.property.details}</p>
        </div>
        <DemoBadge />
      </div>

      <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-line ring-1 ring-line">
        <div className="bg-white p-3.5 sm:p-4">
          <dt className="flex items-center gap-2 text-[0.75rem] font-semibold text-sell">
            <span aria-hidden className="size-2 rounded-full bg-sell" />
            Vender
          </dt>
          <dd className="mt-3 text-[1.3rem] leading-none font-semibold tracking-[-0.035em] text-ink tabular sm:text-[1.55rem]">
            <CountUp value={demo.sell.value} format="euro" delay={0.9} />
          </dd>
          <dd className="mt-2 text-[0.75rem] text-ink-2">
            {demo.sell.horizon} · <span className="text-success">+{formatPercent(demo.sell.change)}</span>
          </dd>
        </div>
        <div className="bg-white p-3.5 sm:p-4">
          <dt className="flex items-center gap-2 text-[0.75rem] font-semibold text-rent">
            <span aria-hidden className="size-2 rounded-full bg-rent" />
            Arrendar
          </dt>
          <dd className="mt-3 text-[1.3rem] leading-none font-semibold tracking-[-0.035em] text-ink tabular sm:text-[1.55rem]">
            <CountUp value={demo.rent.monthly} format="euroMonth" delay={1} />
          </dd>
          <dd className="mt-2 text-[0.75rem] text-ink-2">renda · {formatPercent(demo.rent.occupancy)} ocupação</dd>
        </div>
      </dl>

      <p className="mt-4 flex items-center justify-between gap-3 text-[0.8rem] text-ink-2">
        <span>Ponto de viragem</span>
        <span className="font-semibold text-ink tabular">{formatEuroMonth(demo.turningPoint)}</span>
      </p>
      <div aria-hidden className="mt-2 h-1 overflow-hidden rounded-full bg-surface-2">
        <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-sell to-rent" />
      </div>
    </div>
  );
}
