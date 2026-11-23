"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, m, useInView, useReducedMotion } from "motion/react";

/**
 * Cursor animado dentro de um ecrã da app (padrão Libra): vai de elemento em elemento
 * (os marcados com `data-cursor="1"`, `"2"`, …), pára, "clica" e realça o elemento.
 * Pára e desaparece quando a pessoa usa o próprio rato (`paused`) ou com movimento reduzido.
 */
export function FakeCursor({ container, paused }: { container: React.RefObject<HTMLDivElement | null>; paused: boolean }) {
  const reduce = useReducedMotion();
  const inView = useInView(container, { margin: "-15% 0px -15% 0px" });
  const [targets, setTargets] = useState<{ x: number; y: number; el: HTMLElement }[]>([]);
  const [step, setStep] = useState(0);
  const [click, setClick] = useState(0);
  const running = inView && !paused && !reduce && targets.length > 0;

  // Lê as posições dos alvos em px do desenho (antes da escala).
  useEffect(() => {
    const c = container.current;
    if (!c) return;
    const read = () => {
      const els = [...c.querySelectorAll<HTMLElement>("[data-cursor]")].sort(
        (a, b) => Number(a.dataset.cursor) - Number(b.dataset.cursor),
      );
      setTargets(
        els.map((el) => {
          let x = el.offsetWidth * 0.55;
          let y = el.offsetHeight * 0.55;
          let node: HTMLElement | null = el;
          while (node && node !== c) {
            x += node.offsetLeft;
            y += node.offsetTop;
            node = node.offsetParent as HTMLElement | null;
          }
          return { x, y, el };
        }),
      );
    };
    read();
    const t = setTimeout(read, 600);
    return () => clearTimeout(t);
  }, [container]);

  useEffect(() => {
    if (!running) return;
    const clickT = setTimeout(() => setClick((n) => n + 1), 1200);
    const nextT = setTimeout(() => setStep((s) => (s + 1) % targets.length), 2600);
    return () => {
      clearTimeout(clickT);
      clearTimeout(nextT);
    };
  }, [running, step, targets.length]);

  // Realça o elemento em que o cursor está.
  useEffect(() => {
    if (!running) return;
    const el = targets[step]?.el;
    if (!el) return;
    const t = setTimeout(() => el.setAttribute("data-hover", ""), 900);
    return () => {
      clearTimeout(t);
      el.removeAttribute("data-hover");
    };
  }, [running, step, targets]);

  const p = targets[step];
  if (!p) return null;

  return (
    <AnimatePresence>
      {running && (
        <m.div
          aria-hidden
          className="pointer-events-none absolute top-0 left-0 z-20"
          initial={{ opacity: 0, x: p.x + 60, y: p.y + 60 }}
          animate={{ opacity: 1, x: p.x, y: p.y }}
          exit={{ opacity: 0 }}
          transition={{ x: { duration: 0.9, ease: [0.65, 0, 0.35, 1] }, y: { duration: 0.9, ease: [0.65, 0, 0.35, 1] }, opacity: { duration: 0.3 } }}
        >
          <m.span
            key={click}
            className="absolute -top-5 -left-5 block size-10 rounded-full bg-rent/25"
            initial={{ scale: 0.2, opacity: click ? 1 : 0 }}
            animate={{ scale: 1.4, opacity: 0 }}
            transition={{ duration: 0.6 }}
          />
          <svg width="28" height="28" viewBox="0 0 24 24" className="drop-shadow-[0_3px_6px_rgb(0_0_0/0.35)]">
            <path d="M5 3l14 7.5-6.2 1.6L10 18.5z" fill="#0b0b0b" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" />
          </svg>
        </m.div>
      )}
    </AnimatePresence>
  );
}
