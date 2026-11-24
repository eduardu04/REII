import { Check } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { pricingFaq, pricingInvestors } from "@/content/pricing";
import { ScaledScreen } from "@/features/home/mockups/scaled-screen";
import { ComparablesScreen } from "@/features/home/mockups/screens";

/** 5 · Para investidores: faixa verde com o ecrã das casas comparáveis a sair pela direita. */
export function PricingInvestors() {
  return (
    <section id="investidores" className="scroll-mt-24 bg-white py-24 sm:py-32">
      <div className="shell">
        <div className="grid overflow-hidden rounded-[2rem] bg-rent-deep text-white lg:grid-cols-12">
          <div className="p-8 sm:p-14 lg:col-span-5 lg:py-20">
            <Reveal>
              <h2 className="type-h2 max-w-[12ch] text-white">{pricingInvestors.title}</h2>
            </Reveal>
            <Reveal index={1}>
              <p className="mt-6 text-[1.05rem] leading-relaxed text-white/70">{pricingInvestors.lead}</p>
            </Reveal>
            <Reveal index={2}>
              <ul className="mt-8 space-y-3">
                {pricingInvestors.points.map((p) => (
                  <li key={p} className="flex gap-3 text-[1rem] text-white/90">
                    <Check aria-hidden className="mt-0.5 size-5 shrink-0 text-mint" strokeWidth={2.5} /> {p}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal index={3}>
              <a
                href={`mailto:${pricingFaq.email}?subject=REII%20para%20investidores`}
                className="mt-10 inline-flex h-12 items-center rounded-full bg-cream px-6 text-[0.95rem] font-semibold text-rent-deep transition-colors hover:bg-white"
              >
                {pricingInvestors.cta}
              </a>
            </Reveal>
          </div>

          <Reveal y={0} className="relative min-h-[18rem] lg:col-span-7">
            <div className="h-full pt-2 pl-8 sm:pl-14 lg:absolute lg:inset-0 lg:pt-14 lg:pl-0">
              <div className="w-[160%] overflow-hidden rounded-tl-[1rem] shadow-[0_40px_80px_-30px_rgb(0_0_0/0.6)] sm:w-[130%] lg:w-[140%]">
                <ScaledScreen viewport={900} cursor>
                  <ComparablesScreen />
                </ScaledScreen>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
