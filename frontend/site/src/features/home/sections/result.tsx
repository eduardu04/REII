"use client";

import { AnimatePresence, m } from "motion/react";

import { ProgressFill } from "@/components/motion/progress-line";
import { Reveal } from "@/components/motion/reveal";
import { useAutoAdvance } from "@/components/motion/use-auto-advance";
import { SectionIntro } from "@/components/shared/section-heading";
import { product } from "@/content/home";
import { cn } from "@/lib/utils";

import { ScaledScreen } from "../mockups/scaled-screen";
import { ComparablesScreen, MyPropertiesScreen, ReportScreen } from "../mockups/screens";

const SCREENS = [MyPropertiesScreen, ComparablesScreen, ReportScreen];
const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * 5 · O produto. Secção verde com a app real a trocar de ecrã sozinha
 * (Os meus imóveis → Mercado comparativo → Relatório), com separadores e progresso.
 */
export function Result() {
  const { active, setActive, running, reduce, bind, duration } = useAutoAdvance(SCREENS.length, 11000);
  const Screen = SCREENS[active];

  return (
    <section className="bg-rent-deep py-24 text-white sm:py-32">
      <div className="shell">
        <SectionIntro title={product.title} lead={product.lead} tone="light" />

        <div {...bind} className="mt-14 lg:mt-20">
          <div role="tablist" aria-label="Ecrãs da app" className="grid gap-2 sm:grid-cols-3">
            {product.screens.map((s, i) => {
              const on = i === active;
              return (
                <button key={s.label} type="button" role="tab" aria-selected={on} onClick={() => setActive(i)} className={cn("relative overflow-hidden rounded-[1.25rem] px-5 py-4 text-left transition-colors duration-500", on ? "bg-white/10" : "hover:bg-white/5")}>
                  <ProgressFill active={on} running={running} duration={duration} reduce={reduce} light resetKey={`${active}-${running}`} />
                  <span className={cn("relative block text-[1.05rem] font-semibold transition-colors duration-500", on ? "text-white" : "text-white/40")}>
                    {s.label}
                  </span>
                  <span className={cn("relative mt-1 hidden text-[0.88rem] transition-colors duration-500 sm:block", on ? "text-white/65" : "text-white/30")}>
                    {s.text}
                  </span>
                </button>
              );
            })}
          </div>

          <Reveal className="mt-6">
            <div className="relative overflow-hidden rounded-[1.5rem] bg-white/5 p-2 ring-1 ring-white/10 sm:p-3">
              <div className="overflow-hidden rounded-[1rem]">
              <AnimatePresence mode="wait" initial={false}>
                <m.div
                  key={active}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.25 } }}
                  transition={{ duration: 0.5, ease: EASE }}
                >
                  <ScaledScreen viewport={860} cursor>
                    <Screen />
                  </ScaledScreen>
                </m.div>
              </AnimatePresence>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
