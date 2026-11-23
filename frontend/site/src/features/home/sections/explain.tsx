"use client";

import Image from "next/image";
import { AnimatePresence, m } from "motion/react";
import { Check } from "lucide-react";

import { Logo } from "@/components/brand/logo";
import { ProgressFill } from "@/components/motion/progress-line";
import { Reveal } from "@/components/motion/reveal";
import { useAutoAdvance } from "@/components/motion/use-auto-advance";
import { SectionIntro } from "@/components/shared/section-heading";
import { demo, explain, photos } from "@/content/home";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;
const TONE = { sell: "text-sell", rent: "text-rent", ink: "text-ink" } as const;

/**
 * 6 · Cada número explica-se (assistente + transparência numa só secção).
 * À esquerda, os números da análise; à direita, o assistente explica o número ativo,
 * com a fonte e a data. Avança sozinho; carregar num número fixa-o.
 */
export function Explain() {
  const { active, setActive, running, reduce, bind, duration } = useAutoAdvance(explain.numbers.length, 7000);
  const n = explain.numbers[active];

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="shell">
        <SectionIntro title={explain.title} lead={explain.lead} />

        <div {...bind} className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <div className="flex items-center gap-3 pb-6">
              <span className="relative h-11 w-14 overflow-hidden rounded-lg">
                <Image src={photos.t2Fachada} alt="" fill sizes="56px" className="object-cover" />
              </span>
              <div>
                <p className="text-[0.95rem] font-semibold text-ink">{demo.property.title}</p>
                <p className="text-[0.8rem] text-ink-3">Análise a 5 anos · cenário central</p>
              </div>
            </div>

            <ul role="tablist" aria-label="Números da análise" className="space-y-2">
              {explain.numbers.map((num, i) => {
                const on = i === active;
                return (
                  <li key={num.key}>
                    <button type="button" role="tab" aria-selected={on} onClick={() => setActive(i)} className={cn("group relative w-full overflow-hidden rounded-[1.25rem] px-5 text-left transition-colors duration-500", on ? "bg-surface" : "hover:bg-surface/60")}>
                      <ProgressFill active={on} running={running} duration={duration} reduce={reduce} resetKey={`${active}-${running}`} />
                      <span className="relative flex items-baseline justify-between gap-4 py-5">
                        <span className={cn("text-[0.9rem] transition-colors duration-500", on ? "text-ink" : "text-ink-3")}>{num.label}</span>
                        <span
                          className={cn(
                            "text-[1.9rem] font-semibold tracking-[-0.04em] tabular transition-opacity duration-500 sm:text-[2.4rem]",
                            TONE[num.tone as keyof typeof TONE],
                            on ? "opacity-100" : "opacity-30 group-hover:opacity-60",
                          )}
                        >
                          {num.value}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
            <ul className="mt-8 space-y-2.5 px-5">
              {explain.guarantees.map((g) => (
                <li key={g} className="flex items-center gap-2.5 text-[0.9rem] text-ink-2">
                  <Check aria-hidden className="size-4 text-rent" strokeWidth={2.5} />
                  {g}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal index={1} className="lg:col-span-7">
            <div role="tabpanel" className="relative flex h-full min-h-[24rem] flex-col overflow-hidden rounded-[1.75rem] bg-rent-deep p-7 text-white sm:p-10">
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-lg bg-white/10 ring-1 ring-white/15">
                  <Logo className="h-[0.5rem] text-white" />
                </span>
                <p className="text-[0.85rem] font-semibold">Assistente REII</p>
                <span className="ml-auto text-[0.75rem] text-white/45">Explica. Não decide por si.</span>
              </div>

              <AnimatePresence mode="wait">
                <m.div
                  key={n.key}
                  className="mt-auto pt-14"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.5, ease: EASE }}
                >
                  <p className="text-[0.85rem] text-mint/80">{n.question}</p>
                  <p className="mt-4 max-w-2xl text-[1.35rem] leading-[1.4] font-medium tracking-[-0.02em] text-white sm:text-[1.6rem]">
                    {n.answer}
                  </p>
                  <p className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/8 px-3.5 py-1.5 text-[0.8rem] text-white/70">
                    <span aria-hidden className="size-1.5 rounded-full bg-mint" />
                    {n.source}
                  </p>
                </m.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
