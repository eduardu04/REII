"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { demo } from "@/content/home";
import { formatEuro } from "@/lib/format";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const H = 250;
const PAD = { top: 28, right: 18, bottom: 30, left: 64 };
const MIN = 300;
const MAX = 450;
const TICKS = [300, 350, 400, 450];

const { years, sell, rent } = demo.series;

/**
 * "Quanto vale cada caminho ao longo do tempo" (mockup): as duas linhas partem do mesmo valor,
 * a área entre elas é o que separa os dois caminhos. Desenha em píxeis reais (mede o contentor).
 * As linhas desenham-se uma vez com GSAP quando entram no ecrã.
 */
export function ResultsChart() {
  const wrap = useRef<HTMLDivElement>(null);
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
        lines.forEach((l) => {
          const len = l.getTotalLength();
          gsap.set(l, { strokeDasharray: len, strokeDashoffset: len });
        });
        gsap
          .timeline({ scrollTrigger: { trigger: wrap.current, start: "top 80%", once: true } })
          .to(lines, { strokeDashoffset: 0, duration: 1.3, ease: "power2.out", clearProps: "strokeDasharray,strokeDashoffset" })
          .from("[data-fade]", { opacity: 0, duration: 0.6 }, "-=0.5");
      });
      return () => mm.revert();
    },
    { scope: wrap, dependencies: [measured] },
  );

  const W = width ?? 640;
  const x = (i: number) => PAD.left + (i / (years.length - 1)) * (W - PAD.left - PAD.right);
  const y = (v: number) => PAD.top + (1 - (v - MIN) / (MAX - MIN)) * (H - PAD.top - PAD.bottom);
  const line = (vals: readonly number[]) => vals.map((v, i) => `${i ? "L" : "M"}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(" ");
  const area =
    line(rent) +
    " " +
    [...sell]
      .map((v, i) => [x(i), y(v)] as const)
      .reverse()
      .map(([px, py]) => `L${px.toFixed(1)},${py.toFixed(1)}`)
      .join(" ") +
    " Z";
  const last = years.length - 1;
  const narrow = W < 460;

  return (
    <div ref={wrap} className="w-full">
      <svg
        width={W}
        height={H}
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label={`Daqui a 5 anos: arrendar ${formatEuro(rent[last] * 1000)}, vender ${formatEuro(sell[last] * 1000)}.`}
        className="block max-w-full overflow-visible"
        style={{ visibility: measured ? "visible" : "hidden" }}
      >
        {TICKS.map((t) => (
          <g key={t}>
            <line x1={PAD.left} x2={W - PAD.right} y1={y(t)} y2={y(t)} stroke="var(--line)" />
            <text x={PAD.left - 10} y={y(t)} dy="0.32em" textAnchor="end" className="fill-ink-3 text-[11px] tabular">
              {formatEuro(t * 1000)}
            </text>
          </g>
        ))}
        {years.map((yr, i) =>
          narrow && i !== 0 && i !== last ? null : (
            <text key={yr} x={x(i)} y={H - 6} textAnchor={i === 0 ? "start" : i === last ? "end" : "middle"} className="fill-ink-3 text-[11px]">
              {yr === 0 ? "Hoje" : yr === 1 ? "1 ano" : `${yr} anos`}
            </text>
          ),
        )}

        <path data-fade d={area} fill="var(--rent)" opacity={0.07} />
        <path data-line d={line(rent)} fill="none" stroke="var(--rent)" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
        <path data-line d={line(sell)} fill="none" stroke="var(--sell)" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />

        <g data-fade>
          <circle cx={x(last)} cy={y(rent[last])} r={5} fill="#fff" stroke="var(--rent)" strokeWidth={2.5} />
          <circle cx={x(last)} cy={y(sell[last])} r={5} fill="#fff" stroke="var(--sell)" strokeWidth={2.5} />
          <text x={x(last) - 12} y={y(rent[last]) - 12} textAnchor="end" className="fill-rent text-[13px] font-semibold tabular">
            {formatEuro(rent[last] * 1000)}
          </text>
          <text x={x(last) - 12} y={y(sell[last]) - 12} textAnchor="end" className="fill-sell text-[13px] font-semibold tabular">
            {formatEuro(sell[last] * 1000)}
          </text>
        </g>
      </svg>
    </div>
  );
}
