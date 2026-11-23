"use client";

import { m, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEW = { once: true, margin: "0px 0px -12% 0px" } as const;

/**
 * Título que sobe por trás de uma máscara (padrão Harvey/Libra).
 * Anima o bloco inteiro, não palavra a palavra: fica calmo e lê-se bem.
 */
export function MaskReveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "h2" | "h3" | "p";
}) {
  const reduce = useReducedMotion();
  if (reduce) return <Tag className={className}>{children}</Tag>;
  // O contentor (sempre visível) deteta a entrada no ecrã; o texto, escondido sob a máscara,
  // segue por variantes. Se fosse o texto a detetar, nunca contaria como visível.
  const MTag = m[Tag];
  return (
    <MTag className={cn("overflow-hidden pb-[0.08em]", className)} initial="hidden" whileInView="show" viewport={VIEW}>
      <m.span
        className="block"
        variants={{ hidden: { y: "105%" }, show: { y: "0%" } }}
        transition={{ duration: 1, ease: EASE, delay }}
      >
        {children}
      </m.span>
    </MTag>
  );
}

/** Linha fina que se desenha da esquerda para a direita. */
export function DrawLine({ className, delay = 0, light = false }: { className?: string; delay?: number; light?: boolean }) {
  return (
    <m.span
      aria-hidden
      className={cn("block h-px origin-left", light ? "bg-white/20" : "bg-line", className)}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={VIEW}
      transition={{ duration: 1.2, ease: EASE, delay }}
    />
  );
}

/** Imagem que se revela de baixo para cima, a assentar (clip + escala). */
export function ImageReveal({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={cn("relative overflow-hidden", className)}>{children}</div>;
  return (
    <m.div
      className={cn("relative overflow-hidden", className)}
      initial="hidden"
      whileInView="show"
      viewport={VIEW}
      variants={{ hidden: { clipPath: "inset(100% 0% 0% 0%)" }, show: { clipPath: "inset(0% 0% 0% 0%)" } }}
      transition={{ duration: 1.2, ease: EASE, delay }}
    >
      <m.div
        className="absolute inset-0"
        variants={{ hidden: { scale: 1.15 }, show: { scale: 1 } }}
        transition={{ duration: 1.6, ease: EASE, delay }}
      >
        {children}
      </m.div>
    </m.div>
  );
}
