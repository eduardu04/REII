"use client";

import { m, type HTMLMotionProps } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

type RevealProps = HTMLMotionProps<"div"> & {
  /** Posição na sequência; cada passo atrasa 60 ms. */
  index?: number;
  /** Distância de subida, em px. */
  y?: number;
  /** Atraso base, em segundos. */
  delay?: number;
  /** `true` anima logo ao abrir a página (para o que já está à vista, como o herói). */
  immediate?: boolean;
};

/** Entrada discreta: fade + subir 16 px, uma vez, quando entra no ecrã (ou ao abrir, com `immediate`). */
export function Reveal({ index = 0, y = 16, delay = 0, immediate = false, children, ...props }: RevealProps) {
  const trigger = immediate
    ? { animate: { opacity: 1, y: 0 } }
    : { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "0px 0px -10% 0px" } };

  return (
    <m.div
      initial={{ opacity: 0, y }}
      {...trigger}
      transition={{ duration: 0.7, ease: EASE, delay: delay + index * 0.06 }}
      {...props}
    >
      {children}
    </m.div>
  );
}
