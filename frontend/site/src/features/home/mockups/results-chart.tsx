"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { demo } from "@/content/home";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const H = 240;
const PAD = { top: 16, right: 12, bottom: 28, left: 46 };
const MIN = 290;
const MAX = 500;
const TICKS = [300, 350, 400, 450, 500];

const { years, sell, rent } = demo.series;

/**
 * Gráfico vender vs. arrendar (património acumulado, cenário central).
 * Desenha em píxeis reais (mede a largura do contentor), para o texto ter sempre o mesmo tamanho
 * no telemóvel e no computador. As linhas desenham-se com GSAP quando entram no ecrã.
 */
export function ResultsChart({ horizon = 5 }: { horizon?: number }) {
  const wrap = useRef<HTMLDivElement>(null);
  const svg = useRef<SVGSVGElement>(null);
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setWidth(Math.round(entry.contentRect.width)));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const measured = width !== null;

  useGSAP(
    () => {
      if (!measured) return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const lines = gsap.utils.toArray<SVGPathElement>("[data-line]");
        lines.forEach((line) => {
          const len = line.getTotalLength();
          gsap.set(line, { strokeDasharray: len, strokeDashoffset: len });
        });
        gsap
          .timeline({
            scrollTrigger: { trigger: svg.current, start: "top 80%", once: true },
            defaults: { ease: "power3.out" },
          })
          .to(lines, {
            strokeDashoffset: 0,
            duration: 1.4,
            stagger: 0.25,
            clearProps: "strokeDasharray,strokeDashoffset",
          })
          .from("[data-area]", { opacity: 0, duration: 0.8 }, "<0.3")
          .from(
            "[data-marker]",
            { opacity: 0, scale: 0.6, transformOrigin: "center", duration: 0.5, stagger: 0.1 },
            "-=0.4",
          );
      });
      return () => mm.revert();
    },
    { scope: wrap, dependencies: [measured] },
  );

  const W = width ?? 560;
  const narrow = W < 420;
  const x = (i: number) => PAD.left + (i / (years.length - 1)) * (W - PAD.left - PAD.right);
  const y = (v: number) => PAD.top + (1 - (v - MIN) / (MAX - MIN)) * (H - PAD.top - PAD.bottom);
  const path = (values: readonly number[]) =>
    values.map((v, i) => `${i === 0 ? "M" : "L"}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(" ");
  const hx = x(horizon);

  return (
    <div ref={wrap} className="w-full">
      <svg
        ref={svg}
        width={W}
        height={H}
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label={`Património acumulado em milhares de euros, cenário central. Daqui a ${horizon} anos: vender ${sell[horizon]} mil euros, arrendar ${rent[horizon]} mil euros.`}
        className="block h-auto max-w-full overflow-visible"
        style={{ visibility: measured ? "visible" : "hidden" }}
      >
        {TICKS.map((t) => (
          <g key={t}>
            <line x1={PAD.left} x2={W - PAD.right} y1={y(t)} y2={y(t)} stroke="var(--line)" strokeDasharray="2 4" />
            <text x={PAD.left - 8} y={y(t)} dy="0.32em" textAnchor="end" className="fill-ink-3 text-[11px] tabular">
              {t} k€
            </text>
          </g>
        ))}
        {years.map((yr, i) => {
          const show = i === horizon || (narrow ? i === 0 || i === 10 : i % 2 === 0);
          return show ? (
            <text
              key={yr}
              x={x(i)}
              y={H - 8}
              textAnchor={i === 0 ? "start" : i === years.length - 1 ? "end" : "middle"} className="fill-ink-3 text-[11px] tabular">
              {yr === 0 ? "Hoje" : `${yr} anos`}
            </text>
          ) : null;
        })}

        <rect
          data-area
          x={hx - 14}
          y={PAD.top}
          width={28}
          height={H - PAD.top - PAD.bottom}
          rx={6}
          fill="var(--surface-2)"
          opacity={0.7}
        />

        <path data-line d={path(sell)} fill="none" stroke="var(--sell)" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
        <path data-line d={path(rent)} fill="none" stroke="var(--rent)" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />

        <circle data-marker cx={hx} cy={y(sell[horizon])} r={5} fill="#fff" stroke="var(--sell)" strokeWidth={2.5} />
        <circle data-marker cx={hx} cy={y(rent[horizon])} r={5} fill="#fff" stroke="var(--rent)" strokeWidth={2.5} />
      </svg>
    </div>
  );
}
