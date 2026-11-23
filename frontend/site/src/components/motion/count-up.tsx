"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

type CountUpProps = {
  value: number;
  format: (n: number) => string;
  duration?: number;
  delay?: number;
  className?: string;
};

/**
 * Número que conta até ao valor final quando entra no ecrã.
 * Escreve diretamente no DOM (sem re-renders). O HTML do servidor já traz o valor final,
 * para que motores de busca e quem tem o movimento reduzido leiam sempre o número certo.
 */
export function CountUp({ value, format, duration = 1.4, delay = 0, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();

  // Depois de hidratar, parte do zero (só se houver animação).
  useEffect(() => {
    if (!reduce && ref.current) ref.current.textContent = format(0);
  }, [reduce, format]);

  useEffect(() => {
    const node = ref.current;
    if (!node || !inView || reduce) return;
    const controls = animate(0, value, {
      duration,
      delay,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        node.textContent = format(Math.round(v));
      },
    });
    return () => controls.stop();
  }, [inView, reduce, value, duration, delay, format]);

  return (
    <span ref={ref} className={className} aria-label={format(value)}>
      {format(value)}
    </span>
  );
}
