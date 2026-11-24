"use client";

import Image from "next/image";
import { AnimatePresence, m } from "motion/react";
import { ArrowRight, Calendar, FileText, TrendingUp } from "lucide-react";

import { Logo } from "@/components/brand/logo";
import { ProgressFill } from "@/components/motion/progress-line";
import { Reveal } from "@/components/motion/reveal";
import { useAutoAdvance } from "@/components/motion/use-auto-advance";
import { SectionIntro } from "@/components/shared/section-heading";
import { demo, explain, photos } from "@/content/home";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * 6 · O assistente, como na app (painel do assistente da dashboard).
 * À esquerda, um excerto do relatório; à direita, o assistente explica o valor destacado,
 * com a fonte. As outras perguntas ficam como botões, tal como no produto.
 */
export function Explain() {
  const { active, setActive, running, reduce, bind, duration } = useAutoAdvance(explain.numbers.length, 8000);
  const n = explain.numbers[active];
  const isOn = (key: string) => n.key === key;

  return (
    <section className="bg-surface py-24 sm:py-32">
      <div className="shell">
        <SectionIntro title={explain.title} lead={explain.lead} />

        <Reveal className="mt-14 lg:mt-20">
          <div {...bind} className="grid gap-3 rounded-[2rem] bg-white p-3 sm:p-4 lg:grid-cols-12">
            {/* Excerto do relatório */}
            <div className="rounded-[1.5rem] bg-cream p-5 sm:p-8 lg:col-span-7">
              <div className="flex items-center gap-4">
                <span className="relative h-14 w-20 shrink-0 overflow-hidden rounded-xl">
                  <Image src={photos.t2Fachada} alt="" fill sizes="80px" className="object-cover" />
                </span>
                <div>
                  <p className="text-[1.05rem] font-semibold text-ink">{demo.property.title}</p>
                  <p className="text-[0.85rem] text-ink-2">Relatório de análise · cenário central</p>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <Figure on={isOn("sell")} onClick={() => setActive(0)} className="bg-sell-soft" ring="ring-sell">
                  <p className="flex items-center gap-2 text-[0.95rem] font-semibold text-sell">
                    <span className="size-3 rounded-[3px] bg-sell" /> Vender
                  </p>
                  <p className="mt-2 text-[0.85rem] text-ink-2">Daqui a 5 anos</p>
                  <p className="mt-1 text-[2rem] font-semibold tracking-[-0.03em] text-ink tabular">372&nbsp;000&nbsp;€</p>
                  <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-[#e3f1e7] px-2.5 py-1 text-[0.8rem] font-semibold text-success">
                    <TrendingUp className="size-3.5" /> +52&nbsp;000&nbsp;€ (+16,3&nbsp;%)
                  </span>
                </Figure>
                <Figure on={isOn("rent")} onClick={() => setActive(1)} className="bg-rent-soft" ring="ring-rent">
                  <p className="flex items-center gap-2 text-[0.95rem] font-semibold text-rent">
                    <span className="size-3 rounded-[3px] bg-rent" /> Arrendar
                  </p>
                  <p className="mt-2 text-[0.85rem] text-ink-2">Renda estimada</p>
                  <p className="mt-1 text-[2rem] font-semibold tracking-[-0.03em] text-ink tabular">1&nbsp;200&nbsp;€/mês</p>
                  <p className="mt-2 flex items-center gap-1.5 text-[0.82rem] text-ink-2">
                    <Calendar className="size-3.5" /> Total em 5 anos: <b className="text-ink">72&nbsp;000&nbsp;€</b>
                  </p>
                </Figure>
              </div>

              <Figure on={isOn("npv")} onClick={() => setActive(2)} className="mt-3 bg-white" ring="ring-ink">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-[0.85rem] text-ink-2">Ganho do arrendamento, em dinheiro de hoje (VAL)</p>
                    <p className="mt-1 text-[1.75rem] font-semibold tracking-[-0.03em] text-ink tabular">41&nbsp;800&nbsp;€</p>
                  </div>
                  <div className="flex gap-6 text-[0.85rem]">
                    <p>
                      <span className="block text-ink-2">TIR</span>
                      <b className="text-[1.05rem] text-ink">5,6&nbsp;%</b>
                    </p>
                    <p>
                      <span className="block text-ink-2">Horizonte</span>
                      <b className="text-[1.05rem] text-ink">5 anos</b>
                    </p>
                  </div>
                </div>
              </Figure>

              <ul className="mt-6 flex flex-wrap gap-2">
                {explain.guarantees.map((g) => (
                  <li key={g} className="rounded-full bg-white px-3.5 py-1.5 text-[0.8rem] text-ink-2">
                    {g}
                  </li>
                ))}
              </ul>
            </div>

            {/* Painel do assistente (como na app) */}
            <div className="flex flex-col rounded-[1.5rem] bg-white p-5 ring-1 ring-line sm:p-8 lg:col-span-5">
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-xl bg-rent text-white">
                  <Logo className="h-[0.55rem]" />
                </span>
                <div>
                  <p className="text-[1.05rem] font-semibold text-ink">Assistente REII</p>
                  <p className="text-[0.82rem] text-ink-2">Explica a análise. Não decide por si.</p>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <m.div
                  key={n.key}
                  className="mt-7"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.5, ease: EASE }}
                >
                  <p className="rounded-2xl bg-rent-soft px-5 py-4 text-[0.98rem] font-medium text-ink">{n.question}</p>
                  <div className="mt-3 rounded-2xl bg-cream px-5 py-4">
                    <p className="text-[0.98rem] leading-relaxed text-ink">{n.answer}</p>
                    <p className="mt-3 flex items-center gap-2 text-[0.8rem] text-ink-2">
                      <FileText className="size-3.5" /> {n.source}
                    </p>
                  </div>
                </m.div>
              </AnimatePresence>

              <div className="mt-auto space-y-2 pt-7">
                {explain.numbers.map((q, i) =>
                  i === active ? null : (
                    <button
                      key={q.key}
                      type="button"
                      onClick={() => setActive(i)}
                      className="group relative flex w-full items-center justify-between gap-3 overflow-hidden rounded-xl px-4 py-3 text-left text-[0.9rem] font-medium text-rent ring-1 ring-line transition-colors hover:bg-surface"
                    >
                      {q.question}
                      <ArrowRight className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  ),
                )}
                <p className="relative overflow-hidden rounded-xl bg-surface px-4 py-3 text-[0.9rem] text-ink-3">
                  <ProgressFill active running={running} duration={duration} reduce={reduce} resetKey={`${active}-${running}`} />
                  <span className="relative">Pergunte sobre esta análise…</span>
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Figure({
  on,
  onClick,
  className,
  ring,
  children,
}: {
  on: boolean;
  onClick: () => void;
  className?: string;
  ring: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={on}
      onClick={onClick}
      className={cn(
        "block w-full rounded-[1.25rem] p-5 text-left transition-[box-shadow,opacity] duration-500 sm:p-6",
        className,
        on ? `ring-2 ${ring} shadow-[0_16px_40px_-20px_rgb(0_0_0/0.25)]` : "opacity-70 ring-0 hover:opacity-100",
      )}
    >
      {children}
    </button>
  );
}
