"use client";

import { useRef } from "react";
import { m, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";

import { cn } from "@/lib/utils";

type WordRevealProps = {
  text: string;
  as?: "h2" | "p";
  className?: string;
};

/** Título que "acende" palavra a palavra à medida que se rola. Não sequestra o scroll. */
export function WordReveal({ text, as = "h2", className }: WordRevealProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "start 0.35"] });
  const words = text.split(/\s+/);
  const Tag = as;

  if (reduce) return <Tag className={className}>{text}</Tag>;

  return (
    <Tag ref={ref} className={cn(className)} aria-label={text}>
      {words.map((word, i) => (
        <Word key={`${word}-${i}`} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
          {word}
        </Word>
      ))}
    </Tag>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return (
    <m.span aria-hidden style={{ opacity }} className="inline-block whitespace-pre">
      {children}{" "}
    </m.span>
  );
}
