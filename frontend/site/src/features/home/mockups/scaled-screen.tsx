"use client";

import { useEffect, useRef, useState } from "react";
import { m, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

/** Largura a que os ecrãs da app são desenhados (igual ao ficheiro da dashboard). */
export const DESIGN_W = 1440;

/**
 * Mostra um ecrã da app à largura do desenho original e reduz tudo em proporção ao espaço
 * disponível. Assim os cartões ficam alinhados exatamente como na dashboard, em qualquer ecrã.
 *
 * Com `viewport` (altura visível, em px do desenho), ecrãs compridos deslizam devagar de cima
 * a baixo enquanto estão ativos (`play`), como uma captura a percorrer a página.
 */
export function ScaledScreen({
  children,
  viewport,
  play = false,
  duration = 8,
  className,
}: {
  children: React.ReactNode;
  viewport?: number;
  play?: boolean;
  duration?: number;
  className?: string;
}) {
  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [scale, setScale] = useState(0);
  const [contentH, setContentH] = useState(0);

  useEffect(() => {
    const o = outer.current;
    const i = inner.current;
    if (!o || !i) return;
    const ro = new ResizeObserver(() => {
      setScale(o.clientWidth / DESIGN_W);
      setContentH(i.scrollHeight);
    });
    ro.observe(o);
    ro.observe(i);
    return () => ro.disconnect();
  }, []);

  const visibleH = viewport ? Math.min(viewport, contentH || viewport) : contentH;
  const travel = Math.max(0, contentH - visibleH);
  const shouldScroll = !!viewport && play && !reduce && travel > 0;

  return (
    <div
      ref={outer}
      className={cn("relative w-full overflow-hidden", className)}
      style={{ height: scale ? visibleH * scale : undefined, aspectRatio: scale ? undefined : `${DESIGN_W} / ${viewport ?? 900}` }}
    >
      <div className="absolute top-0 left-0 origin-top-left" style={{ width: DESIGN_W, transform: `scale(${scale || 0.0001})` }}>
        <m.div
          ref={inner}
          initial={{ y: 0 }}
          animate={{ y: shouldScroll ? -travel : 0 }}
          transition={shouldScroll ? { duration, delay: 1.4, ease: [0.45, 0, 0.55, 1] } : { duration: 0.6 }}
        >
          {children}
        </m.div>
      </div>
    </div>
  );
}
