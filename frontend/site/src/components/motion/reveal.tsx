"use client";

import { m, type HTMLMotionProps } from "motion/react";

import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

type RevealProps = HTMLMotionProps<"div"> & {
  /** Posição na sequência; cada passo atrasa 80 ms. */
  index?: number;
  /** Distância de subida, em px. */
  y?: number;
};

/** Entrada editorial: fade + subir + desfoque leve, uma vez, quando entra no ecrã. */
export function Reveal({ index = 0, y = 24, className, children, ...props }: RevealProps) {
  return (
    <m.div
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.8, ease: EASE, delay: index * 0.08 }}
      className={cn(className)}
      {...props}
    >
      {children}
    </m.div>
  );
}
