import { Check, Gift } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { SectionIntro } from "@/components/shared/section-heading";
import { siteConfig } from "@/config/site";
import { analysesIn, bonusPercent, costs, packs, pricingPacks } from "@/content/pricing";
import { formatEuro } from "@/lib/format";
import { cn } from "@/lib/utils";

/** 2 · Quatro pacotes pré-pagos, o Família em destaque, com o bónus e para quantas análises dá cada um. */
export function PricingPacks() {
  return (
    <section id="pacotes" className="scroll-mt-24 bg-surface py-24 sm:py-32">
      <div className="shell">
        <SectionIntro title={pricingPacks.title} lead={pricingPacks.lead} />

        <ul className="mt-14 grid gap-3 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:items-center">
          {packs.map((p, i) => {
            const dark = !!p.featured;
            const bonus = bonusPercent(p);
            const analyses = analysesIn(p);
            const left = p.credits - analyses * costs.analysis;
            return (
              <li key={p.id} className="h-full">
                <Reveal
                  index={i}
                  y={dark ? 28 : 16}
                  className={cn(
                    "flex h-full flex-col rounded-[1.75rem] p-7 transition-shadow duration-200",
                    dark
                      ? "bg-rent-deep text-white shadow-[0_40px_80px_-40px_rgb(10_54_50/0.7)] lg:py-10"
                      : "bg-white hover:shadow-[0_30px_60px_-40px_rgb(15_26_24/0.35)]",
                  )}
                >
                  <div className="flex min-h-7 items-center justify-between gap-2">
                    <p className={cn("text-[0.85rem] font-medium", dark ? "text-mint" : "text-rent")}>{p.audience}</p>
                    {dark && (
                      <span className="rounded-full bg-[#e8a27c] px-2.5 py-1 text-[0.72rem] font-semibold whitespace-nowrap text-ink">
                        O mais escolhido
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-[1.5rem] font-semibold tracking-[-0.03em]">{p.name}</p>

                  <p className="mt-6 text-[3rem] leading-none font-semibold tracking-[-0.05em] tabular">{formatEuro(p.price)}</p>
                  <p className={cn("mt-3 flex flex-wrap items-center gap-2 text-[0.9rem]", dark ? "text-white/75" : "text-ink-2")}>
                    {p.credits} créditos
                    {bonus > 0 && (
                      <span
                        className={cn(
                          "rounded-full px-2.5 py-0.5 text-[0.78rem] font-semibold",
                          dark ? "bg-mint text-rent-deep" : "bg-rent-soft text-rent",
                        )}
                      >
                        +{bonus} % de bónus
                      </span>
                    )}
                  </p>

                  <div className={cn("mt-6 rounded-[1.1rem] p-4", dark ? "bg-white/10" : "bg-surface")}>
                    <p className={cn("text-[0.78rem]", dark ? "text-white/60" : "text-ink-3")}>Dá para</p>
                    <p className="mt-0.5 text-[0.95rem] leading-snug">
                      <b className="font-semibold">{analyses}</b> {analyses === 1 ? "análise completa" : "análises completas"}
                      {left >= costs.refresh && <span className={dark ? "text-white/70" : "text-ink-2"}>, e sobram {left} créditos</span>}
                    </p>
                  </div>

                  <ul className="mt-6 flex-1 space-y-2.5">
                    {p.features.map((f) => (
                      <li key={f} className={cn("flex gap-2.5 text-[0.92rem]", dark ? "text-white/85" : "text-ink-2")}>
                        <Check aria-hidden className={cn("mt-0.5 size-4 shrink-0", dark ? "text-mint" : "text-rent")} strokeWidth={2.5} /> {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={siteConfig.appUrl}
                    className={cn(
                      "mt-8 flex h-12 items-center justify-center rounded-full text-[0.95rem] font-semibold transition-colors",
                      dark ? "bg-white text-rent-deep hover:bg-cream" : "text-rent ring-1 ring-rent/40 hover:bg-rent hover:text-white",
                    )}
                  >
                    Escolher
                  </a>
                </Reveal>
              </li>
            );
          })}
        </ul>

        <Reveal className="mt-6 flex items-center justify-center gap-2.5 text-center text-[0.95rem] text-ink-2">
          <Gift aria-hidden className="size-5 shrink-0 text-rent" />
          {pricingPacks.offer}
        </Reveal>
      </div>
    </section>
  );
}
