"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { FakeCursor } from "./fake-cursor";

/** Largura a que os ecrãs da app são desenhados (igual ao ficheiro da dashboard). */
export const DESIGN_W = 1440;

/** Abaixo desta largura (px reais), o ecrã inteiro ficaria ilegível: mostra-se só o cartão marcado com `data-focus`. */
const FOCUS_BELOW = 560;

type Focus = { x: number; y: number; w: number; h: number };

/** Posição de um elemento dentro do ecrã, em px do desenho (soma dos offsets até ao contentor). */
function offsetWithin(el: HTMLElement, container: HTMLElement): Focus {
  let x = 0;
  let y = 0;
  let node: HTMLElement | null = el;
  while (node && node !== container) {
    x += node.offsetLeft;
    y += node.offsetTop;
    node = node.offsetParent as HTMLElement | null;
  }
  return { x, y, w: el.offsetWidth, h: el.offsetHeight };
}

/**
 * Mostra um ecrã da app à largura do desenho original e reduz tudo em proporção ao espaço
 * disponível, para os cartões ficarem alinhados exatamente como na dashboard.
 *
 * - `viewport`: altura visível (px do desenho); o ecrã fica cortado e desvanece na base, sem scroll interno.
 * - `cursor`: um cursor animado (padrão Libra) passa pelos elementos com `data-cursor`.
 * - No telemóvel, o ecrã inteiro ficaria com texto de ~3 px. Em vez disso, mostra-se ampliado
 *   só o cartão marcado com `data-focus` (padrão Stripe/Apple: um recorte legível, não a captura toda).
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
  const [width, setWidth] = useState(0);
  const [contentH, setContentH] = useState(0);
  const [focus, setFocus] = useState<Focus | null>(null);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const o = outer.current;
    const i = inner.current;
    if (!o || !i) return;
    const measure = () => {
      setWidth(o.clientWidth);
      setContentH(i.offsetHeight);
      const target = i.querySelector<HTMLElement>("[data-focus]");
      // Só recorta quando já há medidas reais (antes do primeiro layout, tudo mede 0 e daria NaN).
      const narrow = o.clientWidth > 0 && o.clientWidth < FOCUS_BELOW;
      setFocus(target && narrow && target.offsetWidth > 0 ? offsetWithin(target, i) : null);
    };
    const ro = new ResizeObserver(measure);
    ro.observe(o);
    ro.observe(i);
    return () => ro.disconnect();
  }, []);

  let height: number | undefined;
  let transform: string;
  let fade: string | undefined;

  if (focus && width > 0 && focus.w > 0) {
    // Recorte: o cartão ocupa a largura toda (pode ampliar até 1,4×, para não espreitar o cartão ao lado).
    const scale = Math.min(1.4, width / focus.w);
    height = focus.h * scale;
    transform = `scale(${scale}) translate(${-focus.x}px, ${-focus.y}px)`;
  } else {
    const scale = width / DESIGN_W;
    const visibleH = viewport ? Math.min(viewport, contentH || viewport) : contentH;
    height = width ? visibleH * scale : undefined;
    transform = `scale(${scale || 0.0001})`;
    // Ecrã mais alto do que o enquadramento: corta e desvanece na base, como uma captura.
    if (viewport && contentH > viewport) fade = "linear-gradient(to bottom, #000 78%, transparent 100%)";
  }

  return (
    <div
      ref={outer}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={cn("relative w-full overflow-hidden", focus && "bg-cream", className)}
      style={{
        height,
        aspectRatio: width ? undefined : `${DESIGN_W} / ${viewport ?? 900}`,
        maskImage: fade,
        WebkitMaskImage: fade,
      }}
    >
      <div className="absolute top-0 left-0 origin-top-left" style={{ width: DESIGN_W, transform }}>
        <div ref={inner} className="relative">
          {children}
          {cursor && !focus && width > 0 && <FakeCursor container={inner} paused={hover} />}
        </div>
      </div>
    </div>
  );
}
