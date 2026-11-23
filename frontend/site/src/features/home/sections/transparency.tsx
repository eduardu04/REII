"use client";

import Link from "next/link";
import { m } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import { CountUp } from "@/components/motion/count-up";
import { Reveal } from "@/components/motion/reveal";
import { DemoBadge } from "@/components/shared/demo-badge";
import { SectionHeading } from "@/components/shared/section-heading";
import { demo, transparency } from "@/content/home";
import { formatPercent } from "@/lib/format";

/** 8 · Transparência: um número desmontado em fonte, data, amostra e confiança. */
export function Transparency() {
  return (
    <section className="py-24 sm:py-32">
      <div className="shell">
        <SectionHeading index="06" label={transparency.label} title={transparency.title} lead={transparency.lead} />

        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-6 lg:col-start-4">
            <div className="flex items-center justify-between gap-3">
              <p className="text-[0.9rem] text-ink-2">{transparency.valueLabel} · {demo.property.title}</p>
              <DemoBadge />
            </div>
            <p className="mt-4 text-[3.5rem] leading-none font-medium tracking-[-0.055em] text-ink tabular sm:text-[5.5rem] lg:text-[6.5rem]">
              <CountUp value={transparency.value} format="euroMonth" />
            </p>
          </Reveal>

          <dl className="border-t border-line lg:col-span-9 lg:col-start-4">
            {transparency.parts.map((part, i) => (
              <Reveal key={part.label} index={i} y={12} className="grid gap-1 border-b border-line py-5 sm:grid-cols-[10rem_1fr] sm:gap-8">
                <dt className="type-label pt-1 text-ink-3">{part.label}</dt>
                <dd className="text-[1.05rem] font-medium tracking-[-0.01em] text-ink">{part.value}</dd>
              </Reveal>
            ))}
            <Reveal index={3} y={12} className="grid gap-3 border-b border-line py-5 sm:grid-cols-[10rem_1fr] sm:items-center sm:gap-8">
              <dt className="type-label text-ink-3">Confiança</dt>
              <dd className="flex items-center gap-4">
                <div className="h-1 flex-1 overflow-hidden rounded-full bg-surface-2">
                  <m.div
                    className="h-full origin-left rounded-full bg-rent"
                    style={{ width: `${demo.confidence}%` }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                  />
                </div>
                <span className="text-[1.05rem] font-semibold text-ink tabular">{formatPercent(demo.confidence)}</span>
              </dd>
            </Reveal>
          </dl>

          <Reveal className="lg:col-span-9 lg:col-start-4">
            <Link
              href={transparency.link.href}
              className="group inline-flex items-center gap-1.5 text-[1rem] font-medium text-ink underline decoration-line underline-offset-[6px] transition-colors hover:decoration-ink"
            >
              {transparency.link.label}
              <ArrowUpRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
