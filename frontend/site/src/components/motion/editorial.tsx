"use client";

import { m } from "motion/react";

import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEW = { once: true, margin: "0px 0px -10% 0px" } as const;

/** Imagem que aparece com um fade suave quando entra no ecrã. */
export function ImageReveal({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <m.div
      className={cn("relative overflow-hidden", className)}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={VIEW}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </m.div>
  );
}
