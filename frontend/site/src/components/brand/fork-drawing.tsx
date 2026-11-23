"use client";

import { m, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

const EASE = [0.65, 0, 0.35, 1] as const;

/**
 * A bifurcação Vender / Arrendar em grande, a desenhar-se quando entra no ecrã:
 * primeiro o caminho comum, depois os dois ramos e as etiquetas.
 */
export function ForkDrawing({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const draw = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { pathLength: 0 },
          whileInView: { pathLength: 1 },
          viewport: { once: true, margin: "0px 0px -15% 0px" },
          transition: { duration: 1.1, ease: EASE, delay },
        };
  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: true, margin: "0px 0px -15% 0px" },
          transition: { duration: 0.6, delay },
        };

  return (
    <svg viewBox="0 0 460 260" fill="none" aria-hidden className={cn("w-full", className)}>
      <m.path d="M0 130H190" stroke="#f6f3ec" strokeWidth="3" strokeLinecap="round" {...draw(0)} />
      <m.path d="M190 130C260 130 290 40 448 40" stroke="#e39a73" strokeWidth="3" strokeLinecap="round" {...draw(0.9)} />
      <m.path d="M190 130C260 130 290 220 448 220" stroke="#8fc7b8" strokeWidth="3" strokeLinecap="round" {...draw(0.9)} />
      <m.circle cx="190" cy="130" r="9" fill="#0a3632" stroke="#f6f3ec" strokeWidth="3" {...fade(0.8)} />
      <m.text x="448" y="22" textAnchor="end" className="fill-[#e39a73] text-[18px] font-semibold" {...fade(1.6)}>
        Vender
      </m.text>
      <m.text x="448" y="252" textAnchor="end" className="fill-[#8fc7b8] text-[18px] font-semibold" {...fade(1.6)}>
        Arrendar
      </m.text>
    </svg>
  );
}
