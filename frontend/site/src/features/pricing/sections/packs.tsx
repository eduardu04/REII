import { Check } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { SectionIntro } from "@/components/shared/section-heading";
import { siteConfig } from "@/config/site";
import { analysisWithReport, packs, pricingPacks, savingVsFirst } from "@/content/pricing";
import { formatEuro } from "@/lib/format";
import { cn } from "@/lib/utils";

/** 2 · Três pacotes, o do meio em destaque. Cada um diz para quantas análises dá. */
export function PricingPacks() {
  return (
    <section id="pacotes" className="scroll-mt-24 bg-surface py-24 sm:py-32">
      <div className="shell">
        <SectionIntro title={pricingPacks.title} lead={pricingPacks.lead} />

        <ul className="mt-14 grid gap-3 lg:mt-20 lg:grid-cols-3 lg:items-center">
          {packs.map((p, i) => {
            const dark = !!p.featured;
            const saving = savingVsFirst(p);
            const analyses = Math.floor(p.credits / analysisWithReport);
            return (
              <li key={p.id}>
                <Reveal
                  index={i}
                  y={dark ? 28 : 16}
                  className={cn(
                    "flex h-full flex-col rounded-[1.75rem] p-7 transition-shadow duration-200 sm:p-8",
                    dark
                      ? "bg-rent-deep text-white shadow-[0_40px_80px_-40px_rgb(10_54_50/0.7)] lg:py-11"
                      : "bg-white hover:shadow-[0_30px_60px_-40px_rgb(15_26_24/0.35)]",
                  )}
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className={cn("text-[0.88rem] font-medium", dark ? "text-mint" : "text-rent")}>{p.audience}</p>
                    {dark && <span className="rounded-full bg-[#e8a27c] px-3 py-1 text-[0.75rem] font-semibold text-ink">O mais escolhido</span>}
                  </div>
                  <p className="mt-3 text-[1.6rem] font-semibold tracking-[-0.03em]">{p.name}</p>
                  <p className={cn("text-[0.95rem]", dark ? "text-white/70" : "text-ink-2")}>{p.credits} créditos</p>

                  <p className="mt-8 text-[3.25rem] leading-none font-semibold tracking-[-0.05em] tabular">{formatEuro(p.price)}</p>
                  <p className={cn("mt-2 text-[0.85rem]", dark ? "text-white/65" : "text-ink-2")}>
                    Pagamento único{saving > 0 && `, ${saving} % mais barato por crédito`}
                  </p>

                  <div className={cn("mt-6 rounded-[1.1rem] p-4", dark ? "bg-white/10" : "bg-surface")}>
                    <p className={cn("text-[0.78rem]", dark ? "text-white/60" : "text-ink-3")}>Dá para</p>
                    <p className="mt-0.5 text-[0.98rem]">
                      cerca de <b className="font-semibold">{analyses}</b> {analyses === 1 ? "análise completa" : "análises completas"} com relatório
                    </p>
                  </div>

                  <ul className="mt-6 flex-1 space-y-2.5">
                    {p.features.map((f) => (
                      <li key={f} className={cn("flex gap-2.5 text-[0.95rem]", dark ? "text-white/85" : "text-ink-2")}>
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
                    Escolher {p.name}
                  </a>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
