"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, m, useInView, useReducedMotion } from "motion/react";
import { Pause, Play } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { siteConfig } from "@/config/site";
import { audience } from "@/content/home";
import { cn } from "@/lib/utils";

const DURATION = 6000;
const EASE_IN_OUT = [0.7, 0, 0.3, 1] as const;

/**
 * 4 · Para quem é. Quatro situações que avançam sozinhas com uma linha de progresso;
 * a fotografia troca com um fade lento. Pausa com o rato, com foco ou com o botão (WCAG 2.2.2).
 */
export function Audience() {
  const root = useRef<HTMLDivElement>(null);
  const inView = useInView(root, { margin: "-25% 0px -25% 0px" });
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hover, setHover] = useState(false);
  const running = inView && !paused && !hover && !reduce;
  const item = audience.items[active];

  const next = useCallback(() => setActive((i) => (i + 1) % audience.items.length), []);
  useEffect(() => {
    if (!running) return;
    const t = setTimeout(next, DURATION);
    return () => clearTimeout(t);
  }, [running, active, next]);

  return (
    <section className="bg-surface py-24 sm:py-32">
      <div className="shell">
        <SectionHeading index="02" label={audience.label} title={audience.title} />

        <div
          ref={root}
          className="mt-14 grid gap-8 lg:mt-20 lg:grid-cols-12 lg:gap-8"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onFocusCapture={() => setHover(true)}
          onBlurCapture={() => setHover(false)}
        >
          <div className="flex flex-col lg:col-span-4">
            <ul className="border-t border-line" role="tablist" aria-label="Situações">
              {audience.items.map((it, i) => {
                const on = i === active;
                return (
                  <li key={it.key} className="relative border-b border-line">
                    <button
                      type="button"
                      role="tab"
                      aria-selected={on}
                      aria-controls="audiencia-painel"
                      onClick={() => setActive(i)}
                      className="w-full py-6 text-left"
                    >
                      <span className="flex items-baseline gap-4">
                        <span className={cn("text-[0.8rem] font-semibold tabular transition-colors duration-500", on ? "text-rent" : "text-ink-3")}>
                          0{i + 1}
                        </span>
                        <span
                          className={cn(
                            "text-[1.2rem] font-medium tracking-[-0.025em] transition-colors duration-500 sm:text-[1.35rem]",
                            on ? "text-ink" : "text-ink-3 hover:text-ink-2",
                          )}
                        >
                          {it.title}
                        </span>
                      </span>
                      <span
                        className={cn(
                          "grid pl-8 transition-[grid-template-rows,opacity] duration-500 ease-in-out-soft",
                          on ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                        )}
                      >
                        <span className="overflow-hidden">
                          <span className="block pt-3 text-[0.95rem] leading-relaxed text-ink-2">{it.question}</span>
                        </span>
                      </span>
                    </button>
                    {on && (
                      <span
                        key={`${active}-${running}`}
                        aria-hidden
                        className="absolute -bottom-px left-0 h-0.5 w-full origin-left bg-rent"
                        style={{
                          animation: reduce ? "none" : `reii-fill ${DURATION}ms linear forwards`,
                          animationPlayState: running ? "running" : "paused",
                        }}
                      />
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 flex items-center gap-4">
              <a
                href={siteConfig.appUrl}
                className="text-[0.95rem] font-medium text-ink underline decoration-line underline-offset-[6px] transition-colors hover:decoration-ink"
              >
                Começar com a minha situação
              </a>
              {!reduce && (
                <button
                  type="button"
                  onClick={() => setPaused((p) => !p)}
                  className="ml-auto inline-flex items-center gap-1.5 text-[0.8rem] text-ink-3 hover:text-ink"
                >
                  {paused ? <Play aria-hidden className="size-3.5" /> : <Pause aria-hidden className="size-3.5" />}
                  {paused ? "Continuar" : "Pausar"}
                </button>
              )}
            </div>
          </div>

          <div
            id="audiencia-painel"
            role="tabpanel"
            className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface-2 sm:aspect-[16/11] lg:col-span-8 lg:aspect-auto lg:min-h-[38rem]"
          >
            <AnimatePresence initial={false}>
              <m.div
                key={item.key}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: EASE_IN_OUT }}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 66vw, 100vw"
                  className="object-cover"
                />
              </m.div>
            </AnimatePresence>
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-transparent" />

            <AnimatePresence mode="wait">
              <m.div
                key={item.key}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                className="absolute bottom-5 left-5 right-5 sm:right-auto sm:bottom-8 sm:left-8 sm:max-w-sm"
              >
                <div className="rounded-xl bg-white/95 p-4 shadow-float backdrop-blur-xl">
                  <p className="text-[0.75rem] font-medium text-ink-3">{item.chip}</p>
                  <p className="mt-1.5 text-[0.95rem] leading-snug font-medium tracking-[-0.01em] text-ink">
                    “{item.question}”
                  </p>
                </div>
              </m.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
