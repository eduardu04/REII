"use client";

import { m, useReducedMotion } from "motion/react";

import { CountUp } from "@/components/motion/count-up";
import { Reveal } from "@/components/motion/reveal";
import { packs, pricingValue as v } from "@/content/pricing";
import { formatEuro } from "@/lib/format";

const EASE = [0.22, 1, 0.36, 1] as const;

function Bar({ label, value, color, max }: { label: string; value: number; color: string; max: number }) {
  const reduce = useReducedMotion();
  return (
    <div>
      <p className="flex items-baseline justify-between gap-4 text-[0.92rem] text-ink-2">
        {label}
        <span className="text-[1.25rem] font-semibold tracking-[-0.02em] tabular" style={{ color }}>
          {formatEuro(value)}
        </span>
      </p>
      <div className="mt-2.5 h-8 rounded-[0.8rem] bg-surface">
        <m.div
          className="h-full origin-left rounded-[0.8rem]"
          style={{ width: `${(value / max) * 100}%`, background: color }}
          initial={reduce ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 1, ease: EASE }}
        />
      </div>
    </div>
  );
}

/** 6 · O valor de uma boa decisão: a diferença entre os dois caminhos ao lado do preço de um pacote. */
export function PricingValue() {
  return (
    <section className="bg-surface py-24 sm:py-32">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-8">
        <Reveal className="lg:col-span-5">
          <h2 className="type-h2 max-w-[13ch] text-ink">{v.title}</h2>
          <p className="type-lead mt-6 text-ink-2">{v.lead}</p>
        </Reveal>

        <Reveal index={1} className="rounded-[1.75rem] bg-white p-7 sm:p-10 lg:col-span-6 lg:col-start-7">
          <p className="text-[1.05rem] font-semibold">Exemplo T2 na Sé Nova, ao fim de 5 anos</p>
          <div className="mt-7 space-y-6">
            <Bar label="Arrendar: valor do imóvel + rendas líquidas" value={v.rent} color="var(--rent)" max={v.rent} />
            <Bar label="Vender: valor do imóvel" value={v.sell} color="var(--sell)" max={v.rent} />
          </div>

          <div className="mt-8 flex flex-wrap items-end justify-between gap-4 rounded-[1.25rem] bg-surface p-5 sm:p-6">
            <div>
              <p className="text-[0.88rem] text-ink-2">Diferença entre os dois caminhos</p>
              <CountUp
                value={v.rent - v.sell}
                format="euro"
                className="mt-1 block text-[2.6rem] leading-none font-semibold tracking-[-0.05em] text-rent tabular"
              />
            </div>
            <div className="sm:text-right">
              <p className="text-[0.88rem] text-ink-2">Um pacote para uma casa</p>
              <p className="mt-1 text-[1.6rem] leading-none font-semibold tracking-[-0.03em] tabular">{formatEuro(packs[0].price)}</p>
            </div>
          </div>
          <p className="mt-4 text-[0.8rem] text-ink-3">{v.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
