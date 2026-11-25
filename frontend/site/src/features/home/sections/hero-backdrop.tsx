"use client";

import { m } from "motion/react";

/**
 * Fundo do herói: a fotografia assenta devagar ao abrir a página (escala 1,06 → 1, 2,4 s).
 * É o único movimento da capa. Com movimento reduzido, fica parada.
 */
export function HeroBackdrop({ children }: { children: React.ReactNode }) {
  return (
    <m.div
      aria-hidden
      className="absolute inset-0 -z-20"
      initial={{ scale: 1.06 }}
      animate={{ scale: 1 }}
      transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </m.div>
  );
}
