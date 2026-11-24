"use client";

import { AnimatePresence, m } from "motion/react";

import { ProgressFill } from "@/components/motion/progress-line";
import { Reveal } from "@/components/motion/reveal";
import { useAutoAdvance } from "@/components/motion/use-auto-advance";
import { SectionIntro } from "@/components/shared/section-heading";
import { howSteps } from "@/content/how";
import { ScaledScreen } from "@/features/home/mockups/scaled-screen";
import { CharacterizationScreen, ResultsScreen } from "@/features/home/mockups/screens";
import { AssumptionsScreen, EstimateScreen } from "@/features/home/mockups/step-screens";
import { cn } from "@/lib/utils";

const SCREENS = [CharacterizationScreen, AssumptionsScreen, EstimateScreen, ResultsScreen];
const EASE = [0.22, 1, 0.36, 1] as const;

/** 2 · Os 4 passos: a lista avança sozinha e, ao lado, o ecrã real de cada passo. */
export function HowSteps() {
  const { active, setActive, running, paused, setPaused, reduce, bind, duration } = useAutoAdvance(howSteps.items.length, 9000);
  const Screen = SCREENS[active];

  return (
    <section id="passos" className="scroll-mt-24 bg-white py-24 sm:py-32">
      <div className="shell">
        <SectionIntro title={howSteps.title} lead={howSteps.lead} />

        <div {...bind} className="mt-14 grid gap-8 lg:mt-20 lg:grid-cols-12">
          <div className="flex flex-col lg:col-span-4">
            <ol className="space-y-1" role="tablist" aria-label="Passos da análise">
              {howSteps.items.map((s, i) => {
                const on = i === active;
                return (
                  <li key={s.title}>
                    <button
                      type="button"
                      role="tab"
                      aria-selected={on}
                      onClick={() => setActive(i)}
                      className={cn(
                        "relative w-full overflow-hidden rounded-[1.25rem] px-5 py-5 text-left transition-colors duration-500",
                        on ? "bg-surface" : "hover:bg-surface/60",
                      )}
                    >
                      <ProgressFill active={on} running={running} duration={duration} reduce={reduce} resetKey={`${active}-${running}`} />
                      <span className="relative flex items-baseline gap-4">
                        <span className={cn("text-[0.85rem] font-semibold tabular transition-colors duration-500", on ? "text-rent" : "text-ink-3")}>
                          0{i + 1}
                        </span>
                        <span
                          className={cn(
                            "text-[1.35rem] font-semibold tracking-[-0.025em] transition-colors duration-500 sm:text-[1.5rem]",
                            on ? "text-ink" : "text-ink/30",
                          )}
                        >
                          {s.title}
                        </span>
                      </span>
                      <span
                        className={cn(
                          "relative grid pl-9 transition-[grid-template-rows,opacity] duration-500 ease-out-soft",
                          on ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                        )}
                      >
                        <span className="overflow-hidden">
                          <span className="block pt-2 text-[0.98rem] leading-relaxed text-ink-2">{s.text}</span>
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
            {!reduce && (
              <button
                type="button"
                onClick={() => setPaused((p) => !p)}
                className="mt-4 ml-5 inline-flex items-center gap-1.5 self-start text-[0.8rem] text-ink-3 hover:text-ink"
              >
                {paused ? "Continuar" : "Pausar"}
              </button>
            )}
          </div>

          <Reveal className="lg:col-span-8">
            <div className="rounded-[1.75rem] bg-surface p-3 sm:p-6">
              <AnimatePresence mode="wait">
                <m.div
                  key={active}
                  className="overflow-hidden rounded-[1rem] shadow-[0_30px_60px_-30px_rgb(15_26_24/0.35)] ring-1 ring-black/5"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, transition: { duration: 0.25 } }}
                  transition={{ duration: 0.6, ease: EASE }}
                >
                  <ScaledScreen viewport={900}>
                    <Screen />
                  </ScaledScreen>
                </m.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
