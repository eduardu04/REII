"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

import { formatters, type FormatKind } from "@/lib/format";

type CountUpProps = {
  value: number;
  format?: FormatKind;
  /** Casas decimais durante a contagem (ex.: 1 para 16,3 %). */
  decimals?: number;
  duration?: number;
  delay?: number;
  className?: string;
};

/**
 * Número que conta até ao valor final quando entra no ecrã.
 * Escreve diretamente no DOM (sem re-renders). O HTML do servidor já traz o valor final,
 * para que motores de busca e quem tem o movimento reduzido leiam sempre o número certo.
 */
export function CountUp({
  value,
  format = "number",
  decimals = 0,
  duration = 1.4,
  delay = 0,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();
  const fmt = formatters[format];
  const finalText = fmt(value);

  useEffect(() => {
    const node = ref.current;
    if (!node || reduce) return;
    if (!inView) {
      node.textContent = fmt(0);
      return;
    }
    const factor = 10 ** decimals;
    const controls = animate(0, value, {
      duration,
      delay,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        node.textContent = fmt(Math.round(v * factor) / factor);
      },
    });
    return () => controls.stop();
  }, [inView, reduce, value, decimals, duration, delay, fmt]);

  return (
    <span className={className}>
      <span ref={ref} aria-hidden>
        {finalText}
      </span>
      <span className="sr-only">{finalText}</span>
    </span>
  );
}
