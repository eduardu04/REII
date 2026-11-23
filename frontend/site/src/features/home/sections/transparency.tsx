import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { DemoBadge } from "@/components/shared/demo-badge";
import { SectionHeading } from "@/components/shared/section-heading";
import { demo, transparency } from "@/content/home";
import { formatPercent } from "@/lib/format";

/** 8 · Transparência: um número desmontado em valor, fonte, data e confiança. */
export function Transparency() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow={transparency.eyebrow} title={transparency.title} lead={transparency.lead} />
          <Reveal index={3} className="mt-8">
            <Link
              href={transparency.link.href}
              className="group inline-flex items-center gap-1.5 text-base font-medium text-rent underline-offset-4 hover:underline"
            >
              {transparency.link.label}
              <ArrowRight aria-hidden className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>

        <Reveal y={40} className="rounded-2xl bg-card p-5 shadow-lift ring-1 ring-line sm:p-8">
          <div className="flex items-start justify-between gap-3">
            <p className="text-sm text-ink-soft">{transparency.valueLabel}</p>
            <DemoBadge />
          </div>
          <p className="mt-2 text-[2.6rem] leading-none font-semibold tracking-tight text-rent tabular sm:text-[3.4rem]">
            {transparency.value}
          </p>

          <dl className="mt-8 divide-y divide-line border-y border-line">
            {transparency.parts.map((part, i) => (
              <Reveal key={part.label} index={i + 1} y={12} className="grid gap-1 py-4 sm:grid-cols-[8rem_1fr] sm:gap-4">
                  <dt className="text-xs font-medium tracking-[0.12em] text-ink-soft uppercase sm:pt-0.5">{part.label}</dt>
                  <dd className="text-sm text-ink sm:text-base">{part.value}</dd>
              </Reveal>
            ))}
            <Reveal index={4} y={12} className="grid gap-2 py-4 sm:grid-cols-[8rem_1fr] sm:items-center sm:gap-4">
                <dt className="text-xs font-medium tracking-[0.12em] text-ink-soft uppercase">Confiança</dt>
                <dd className="flex items-center gap-3">
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-line">
                    <div className="h-full rounded-full bg-success" style={{ width: `${demo.confidence}%` }} />
                  </div>
                  <span className="text-sm font-medium text-ink tabular">{formatPercent(demo.confidence)}</span>
                </dd>
            </Reveal>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
