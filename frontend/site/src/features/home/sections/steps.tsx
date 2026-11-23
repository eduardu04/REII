"use client";

import Image from "next/image";
import { AnimatePresence, m } from "motion/react";
import { Pause, Play } from "lucide-react";

import { ProgressLine } from "@/components/motion/progress-line";
import { Reveal } from "@/components/motion/reveal";
import { useAutoAdvance } from "@/components/motion/use-auto-advance";
import { SectionIntro } from "@/components/shared/section-heading";
import { photos, steps } from "@/content/home";
import { cn } from "@/lib/utils";

import { CharacterizationScreen, OnboardingScreen, TwoPathsScreen } from "../mockups/screens";

const SCREENS = [OnboardingScreen, CharacterizationScreen, TwoPathsScreen];
const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * 4 · Três passos (padrão Libra): a lista avança sozinha com uma linha de progresso e,
 * ao lado, o ecrã real da app correspondente sobe para um palco fotográfico.
 */
export function Steps() {
  const { active, setActive, running, paused, setPaused, reduce, bind, duration } = useAutoAdvance(steps.items.length, 6500);
  const Screen = SCREENS[active];

  return (
    <section className="bg-surface py-24 sm:py-32">
      <div className="shell">
        <SectionIntro title={steps.title} lead={steps.lead} />

        <div {...bind} className="mt-14 grid gap-8 lg:mt-20 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col lg:col-span-4">
            <ol className="space-y-1" role="tablist" aria-label="Passos">
              {steps.items.map((s, i) => {
                const on = i === active;
                return (
                  <li key={s.title}>
                    <button type="button" role="tab" aria-selected={on} onClick={() => setActive(i)} className="w-full py-5 text-left">
                      <span className="flex items-baseline gap-4">
                        <span className={cn("text-[0.85rem] font-semibold tabular transition-colors duration-500", on ? "text-rent" : "text-ink-3")}>
                          0{i + 1}
                        </span>
                        <span
                          className={cn(
                            "text-[1.35rem] font-semibold tracking-[-0.025em] transition-colors duration-500 sm:text-[1.5rem]",
                            on ? "text-ink" : "text-ink/30 hover:text-ink/55",
                          )}
                        >
                          {s.title}
                        </span>
                      </span>
                      <span
                        className={cn(
                          "grid pl-9 transition-[grid-template-rows,opacity] duration-700 ease-out-soft",
                          on ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                        )}
                      >
                        <span className="overflow-hidden">
                          <span className="block pt-2 pb-4 text-[0.98rem] leading-relaxed text-ink-2">{s.text}</span>
                        </span>
                      </span>
                      <ProgressLine active={on} running={running} duration={duration} reduce={reduce} resetKey={`${active}-${running}`} />
                    </button>
                  </li>
                );
              })}
            </ol>
            {!reduce && (
              <button
                type="button"
                onClick={() => setPaused((p) => !p)}
                className="mt-4 inline-flex items-center gap-1.5 self-start text-[0.8rem] text-ink-3 hover:text-ink"
              >
                {paused ? <Play aria-hidden className="size-3.5" /> : <Pause aria-hidden className="size-3.5" />}
                {paused ? "Continuar" : "Pausar"}
              </button>
            )}
          </div>

          <Reveal y={32} className="lg:col-span-8">
            <div className="relative overflow-hidden rounded-[1.75rem] bg-rent-deep">
              <Image src={photos.fachadaAzulejo} alt="" fill placeholder="blur" sizes="66vw" className="object-cover opacity-70" />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-rent-deep/70 via-rent-deep/25 to-transparent" />
              <div className="relative grid min-h-[30rem] place-items-center p-4 sm:min-h-[34rem] sm:p-10">
                <AnimatePresence mode="wait">
                  <m.div
                    key={active}
                    className="w-full max-w-[46rem] shadow-[0_40px_80px_-30px_rgb(0_0_0/0.55)]"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16, transition: { duration: 0.3 } }}
                    transition={{ duration: 0.8, ease: EASE }}
                  >
                    <Screen />
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
