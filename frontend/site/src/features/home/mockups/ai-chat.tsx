"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, m, useInView, useReducedMotion } from "motion/react";
import { FileText, Sparkles } from "lucide-react";

import { ai, demo } from "@/content/home";

/** 0 nada · 1 pergunta · 2 a escrever · 3 resposta · 4 sugestão */
type Stage = 0 | 1 | 2 | 3 | 4;

const enter = {
  initial: { opacity: 0, y: 12, filter: "blur(4px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

/** Conversa com o agente REII: pergunta, "a escrever…" e resposta com fontes, quando entra no ecrã. */
export function AiChat() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });
  const reduce = useReducedMotion();
  const [stage, setStage] = useState<Stage>(0);
  const shown: Stage = reduce ? 4 : stage;

  useEffect(() => {
    if (!inView || reduce) return;
    const timers = [
      setTimeout(() => setStage(1), 150),
      setTimeout(() => setStage(2), 900),
      setTimeout(() => setStage(3), 2300),
      setTimeout(() => setStage(4), 3300),
    ];
    return () => timers.forEach(clearTimeout);
  }, [inView, reduce]);

  return (
    <div ref={ref} className="rounded-2xl bg-card p-4 shadow-lift ring-1 ring-line sm:p-6">
      <div className="flex items-center gap-2 border-b border-line pb-3">
        <span className="grid size-7 place-items-center rounded-lg bg-rent text-white">
          <Sparkles aria-hidden className="size-3.5" />
        </span>
        <p className="text-sm font-medium text-ink">Agente REII</p>
        <span className="ml-auto truncate text-xs text-ink-soft">{demo.property.title}</span>
      </div>

      <div className="flex min-h-[20rem] flex-col gap-3 pt-4" aria-live="polite">
        {shown >= 1 && (
          <m.div
            {...enter}
            className="max-w-[85%] self-end rounded-2xl rounded-br-md bg-ink px-4 py-2.5 text-sm text-white"
          >
            {ai.question}
          </m.div>
        )}

        <AnimatePresence mode="wait">
          {shown === 2 && (
            <m.div
              key="typing"
              {...enter}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              className="flex w-16 items-center justify-center gap-1 self-start rounded-2xl rounded-bl-md bg-cream px-4 py-3.5"
              role="status"
              aria-label="O agente está a escrever"
            >
              {[0, 1, 2].map((i) => (
                <m.span
                  key={i}
                  className="size-1.5 rounded-full bg-ink-soft"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                />
              ))}
            </m.div>
          )}
          {shown >= 3 && (
            <m.div
              key="answer"
              {...enter}
              className="max-w-[92%] self-start rounded-2xl rounded-bl-md bg-cream px-4 py-3 ring-1 ring-line"
            >
              <p className="text-sm leading-relaxed text-ink">{ai.answer}</p>
              <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Fontes">
                {ai.sources.map((s) => (
                  <li
                    key={s}
                    className="inline-flex items-center gap-1 rounded-md bg-white px-2 py-1 text-[0.7rem] text-ink-soft ring-1 ring-line"
                  >
                    <FileText aria-hidden className="size-3" />
                    {s}
                  </li>
                ))}
              </ul>
            </m.div>
          )}
        </AnimatePresence>

        {shown >= 4 && (
          <m.p
            {...enter}
            className="self-start rounded-full bg-white px-3 py-1.5 text-xs text-rent ring-1 ring-rent/25"
          >
            {ai.followUp}
          </m.p>
        )}
      </div>
    </div>
  );
}
