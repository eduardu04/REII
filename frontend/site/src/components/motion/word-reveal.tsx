"use client";

import { useRef } from "react";
import { m, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";

import { cn } from "@/lib/utils";

/**
 * Frase que "acende" palavra a palavra à medida que se rola (sem prender o scroll).
 * Palavras entre *asteriscos* ficam destacadas a preto quando acesas.
 */
export function WordReveal({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.9", "end 0.45"] });
  const words = text.split(/\s+/);

  if (reduce) return <p className={className}>{text}</p>;

  return (
    <p ref={ref} className={cn(className)} aria-label={text}>
      {words.map((word, i) => (
        <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
          {word}
        </Word>
      ))}
    </p>
  );
}

function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <m.span aria-hidden style={{ opacity }} className="inline">
      {children}{" "}
    </m.span>
  );
}
