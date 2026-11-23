"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, m, useInView, useReducedMotion } from "motion/react";
import { Pause, Play } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { demo, steps } from "@/content/home";
import { formatEuro, formatEuroMonth, formatPercent } from "@/lib/format";
import { cn } from "@/lib/utils";

const DURATION = 6000;

/**
 * Como funciona em 3 passos: lista que avança sozinha com linha de progresso.
 * Começa só quando entra no ecrã; pausa com o rato por cima, com foco ou com o botão (WCAG 2.2.2).
 */
export function Steps() {
  const root = useRef<HTMLDivElement>(null);
  const inView = useInView(root, { margin: "-20% 0px -20% 0px" });
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovering, setHovering] = useState(false);
  const running = inView && !paused && !hovering && !reduce;

  const next = useCallback(() => setActive((i) => (i + 1) % steps.items.length), []);

  useEffect(() => {
    if (!running) return;
    const t = setTimeout(next, DURATION);
    return () => clearTimeout(t);
  }, [running, active, next]);

  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading eyebrow={steps.eyebrow} title={steps.title} />

        <div
          ref={root}
          className="mt-12 grid items-center gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          onFocusCapture={() => setHovering(true)}
          onBlurCapture={() => setHovering(false)}
        >
          <ol className="flex flex-col gap-2">
            {steps.items.map((step, i) => {
              const isActive = i === active;
              return (
                <li key={step.title}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-current={isActive ? "step" : undefined}
                    className={cn(
                      "w-full rounded-xl px-4 py-4 text-left transition-colors duration-200 sm:px-5",
                      isActive ? "bg-card shadow-card ring-1 ring-line" : "hover:bg-card/60",
                    )}
                  >
                    <div className="flex items-baseline gap-4">
                      <span
                        className={cn(
                          "font-heading text-2xl tabular transition-colors",
                          isActive ? "text-rent" : "text-ink-soft/50",
                        )}
                      >
                        {i + 1}
                      </span>
                      <div className="flex-1">
                        <p className={cn("text-base font-medium", isActive ? "text-ink" : "text-ink-soft")}>
                          {step.title}
                        </p>
                        <div
                          className={cn(
                            "grid transition-[grid-template-rows,opacity] duration-500 ease-editorial",
                            isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                          )}
                        >
                          <p className="overflow-hidden pt-1 text-sm leading-relaxed text-ink-soft">{step.text}</p>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden className="mt-4 h-0.5 overflow-hidden rounded bg-line">
                      {isActive && (
                        <div
                          key={`${active}-${running}`}
                          className="h-full origin-left bg-rent"
                          style={{
                            animation: reduce ? "none" : `reii-fill ${DURATION}ms linear forwards`,
                            animationPlayState: running ? "running" : "paused",
                            transform: reduce ? "scaleX(1)" : undefined,
                          }}
                        />
                      )}
                    </div>
                  </button>
                </li>
              );
            })}
            {!reduce && (
              <li className="pt-2">
                <button
                  type="button"
                  onClick={() => setPaused((p) => !p)}
                  className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-ink-soft hover:text-ink"
                >
                  {paused ? <Play aria-hidden className="size-3.5" /> : <Pause aria-hidden className="size-3.5" />}
                  {paused ? "Continuar" : "Pausar"}
                </button>
              </li>
            )}
          </ol>

          <div className="relative min-h-[19rem] rounded-2xl bg-cream-deep p-4 sm:p-8">
            <AnimatePresence mode="wait">
              <m.div
                key={active}
                initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -8, transition: { duration: 0.2 } }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <StepScreen index={active} />
              </m.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      <style>{`@keyframes reii-fill{from{transform:scaleX(0)}to{transform:scaleX(1)}}`}</style>
    </section>
  );
}

/** Mini-ecrãs da app, um por passo. */
function StepScreen({ index }: { index: number }) {
  if (index === 0) {
    const fields = [
      ["Localização", "Sé Nova, Coimbra"],
      ["Tipologia", "T2"],
      ["Área útil", "88 m²"],
      ["Estado", "Bom, sem obras"],
    ];
    return (
      <Screen title="Caracterização do imóvel" step="Passo 1 de 4">
        <dl className="grid grid-cols-2 gap-2.5">
          {fields.map(([label, value]) => (
            <div key={label} className="rounded-lg bg-cream px-3 py-2.5 ring-1 ring-line">
              <dt className="text-[0.7rem] text-ink-soft">{label}</dt>
              <dd className="text-sm font-medium text-ink">{value}</dd>
            </div>
          ))}
        </dl>
      </Screen>
    );
  }

  if (index === 1) {
    return (
      <Screen title="Estimativa de mercado" step="Passo 3 de 4">
        <div className="grid gap-2.5 sm:grid-cols-2">
          <div className="rounded-lg bg-sell-soft px-3 py-3 ring-1 ring-sell/15">
            <p className="text-[0.7rem] text-sell">Valor de mercado hoje</p>
            <p className="mt-1 text-xl font-semibold text-ink tabular">{formatEuro(demo.valueToday)}</p>
          </div>
          <div className="rounded-lg bg-rent-soft px-3 py-3 ring-1 ring-rent/15">
            <p className="text-[0.7rem] text-rent">Renda provável</p>
            <p className="mt-1 text-xl font-semibold text-ink tabular">{formatEuroMonth(demo.rent.monthly)}</p>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex justify-between text-xs text-ink-soft">
            <span>Nível de confiança</span>
            <span className="font-medium text-ink tabular">{formatPercent(demo.confidence)}</span>
          </div>
          <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-line">
            <div className="h-full rounded-full bg-success" style={{ width: `${demo.confidence}%` }} />
          </div>
          <p className="mt-2 text-[0.7rem] text-ink-soft">INE · SIR · Idealista · Câmara Municipal de Coimbra</p>
        </div>
      </Screen>
    );
  }

  return (
    <Screen title="Resultados a 5 anos" step="Passo 4 de 4">
      <div className="space-y-3">
        {[
          { label: "Vender", value: demo.series.sell[5] * 1000, color: "bg-sell", text: "text-sell" },
          { label: "Arrendar", value: demo.series.rent[5] * 1000, color: "bg-rent", text: "text-rent" },
        ].map((row) => (
          <div key={row.label}>
            <div className="flex justify-between text-xs">
              <span className={cn("font-semibold tracking-[0.1em] uppercase", row.text)}>{row.label}</span>
              <span className="font-medium text-ink tabular">{formatEuro(row.value)}</span>
            </div>
            <div className="mt-1.5 h-2.5 overflow-hidden rounded-full bg-cream">
              <m.div
                className={cn("h-full origin-left rounded-full", row.color)}
                style={{ width: `${(row.value / 420_000) * 100}%` }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              />
            </div>
          </div>
        ))}
        <p className="rounded-lg bg-cream px-3 py-2 text-xs text-ink-soft ring-1 ring-line">
          Abaixo de <span className="font-medium text-ink tabular">{formatEuroMonth(demo.turningPoint)}</span>, vender
          passa a compensar mais.
        </p>
      </div>
    </Screen>
  );
}

function Screen({ title, step, children }: { title: string; step: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl bg-card p-4 shadow-card ring-1 ring-line sm:p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="text-sm font-medium text-ink">{title}</p>
        <span className="text-[0.7rem] text-ink-soft">{step}</span>
      </div>
      {children}
    </div>
  );
}
