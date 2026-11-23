"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { FakeCursor } from "./fake-cursor";

/** Largura a que os ecrãs da app são desenhados (igual ao ficheiro da dashboard). */
export const DESIGN_W = 1440;

/**
 * Mostra um ecrã da app à largura do desenho original e reduz tudo em proporção ao espaço
 * disponível, para os cartões ficarem alinhados exatamente como na dashboard.
 *
 * Com `viewport` (altura visível, em px do desenho) o ecrã fica cortado nessa altura e desvanece
 * na base, como uma captura (sem scroll interno). Com `cursor`, um cursor animado (padrão Libra)
 * passa pelos elementos marcados com `data-cursor`; some quando a pessoa põe o rato em cima.
 */
export function ScaledScreen({
  children,
  viewport,
  cursor = false,
  className,
}: {
  children: React.ReactNode;
  viewport?: number;
  cursor?: boolean;
  className?: string;
}) {
  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);
  const [contentH, setContentH] = useState(0);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const o = outer.current;
    const i = inner.current;
    if (!o || !i) return;
    const ro = new ResizeObserver(() => {
      setScale(o.clientWidth / DESIGN_W);
      setContentH(i.offsetHeight);
    });
    ro.observe(o);
    ro.observe(i);
    return () => ro.disconnect();
  }, []);

  const visibleH = viewport ? Math.min(viewport, contentH || viewport) : contentH;
  // Ecrã mais alto do que o enquadramento: corta e desvanece na base (como uma captura), sem scroll interno.
  const cropped = !!viewport && contentH > viewport;
  const fade = cropped ? "linear-gradient(to bottom, #000 78%, transparent 100%)" : undefined;

  return (
    <div
      ref={outer}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={cn("relative w-full overflow-hidden", className)}
      style={{
        height: scale ? visibleH * scale : undefined,
        aspectRatio: scale ? undefined : `${DESIGN_W} / ${viewport ?? 900}`,
        maskImage: fade,
        WebkitMaskImage: fade,
      }}
    >
      <div className="absolute top-0 left-0 origin-top-left" style={{ width: DESIGN_W, transform: `scale(${scale || 0.0001})` }}>
        <div ref={inner} className="relative">
          {children}
          {cursor && scale > 0 && <FakeCursor container={inner} paused={hover} />}
        </div>
      </div>
    </div>
  );
}
