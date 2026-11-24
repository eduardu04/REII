import { Check, Gift } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { SectionIntro } from "@/components/shared/section-heading";
import { siteConfig } from "@/config/site";
import { bonusPercent, packs, pricingPacks } from "@/content/pricing";
import { formatEuro } from "@/lib/format";
import { cn } from "@/lib/utils";

/**
 * 2 · Quatro pacotes pré-pagos, o Família em destaque. Como nos planos do ChatGPT ou do Claude,
 * cada cartão diz o que entrega: o primeiro lista tudo, os seguintes "Tudo do anterior, mais".
 */
export function PricingPacks() {
  return (
    <section id="pacotes" className="scroll-mt-24 bg-surface py-24 sm:py-32">
      <div className="shell">
        <SectionIntro title={pricingPacks.title} lead={pricingPacks.lead} />

        <ul className="mt-14 grid gap-3 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {packs.map((p, i) => {
            const dark = !!p.featured;
            const bonus = bonusPercent(p);
            return (
              <li key={p.id} className="h-full">
                <Reveal
                  index={i}
                  className={cn(
                    "flex h-full flex-col rounded-[1.75rem] p-7 transition-shadow duration-200",
                    dark
                      ? "bg-rent-deep text-white shadow-[0_40px_80px_-40px_rgb(10_54_50/0.7)]"
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
                    {p.credits} créditos, pagamento único
                    {bonus > 0 && (
                      <span className={cn("rounded-full px-2.5 py-0.5 text-[0.78rem] font-semibold", dark ? "bg-mint text-rent-deep" : "bg-rent-soft text-rent")}>
                        +{bonus} % de bónus
                      </span>
                    )}
                  </p>

                  <a
                    href={siteConfig.appUrl}
                    className={cn(
                      "mt-7 flex h-12 items-center justify-center rounded-full text-[0.95rem] font-semibold transition-colors",
                      dark ? "bg-white text-rent-deep hover:bg-cream" : "text-rent ring-1 ring-rent/40 hover:bg-rent hover:text-white",
                    )}
                  >
                    Escolher {p.name}
                  </a>

                  <div className={cn("mt-7 flex-1 rounded-[1.25rem] p-5", dark ? "bg-white/[0.07]" : "bg-surface")}>
                    <p className={cn("text-[0.85rem] font-semibold", dark ? "text-white" : "text-ink")}>{p.includesTitle}:</p>
                    <ul className="mt-3 space-y-2.5">
                      {p.items.map((f, j) => (
                        <li key={f} className={cn("flex gap-2.5 text-[0.9rem] leading-snug", dark ? "text-white/85" : "text-ink-2")}>
                          <Check aria-hidden className={cn("mt-0.5 size-4 shrink-0", dark ? "text-mint" : "text-rent")} strokeWidth={2.5} />
                          {j === 0 ? <b className={cn("font-semibold", dark ? "text-white" : "text-ink")}>{f}</b> : f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>

        <Reveal className="mt-6 flex flex-col items-center justify-center gap-1.5 text-center text-[0.95rem] text-ink-2">
          <p className="flex items-center gap-2.5">
            <Gift aria-hidden className="size-5 shrink-0 text-rent" />
            {pricingPacks.offer}
          </p>
          <p className="text-[0.85rem] text-ink-3">{pricingPacks.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
