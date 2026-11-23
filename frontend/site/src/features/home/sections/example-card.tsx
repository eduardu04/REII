import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { DemoBadge } from "@/components/shared/demo-badge";
import { Eyebrow } from "@/components/shared/section-heading";
import { demo, example } from "@/content/home";
import { formatEuro, formatEuroMonth } from "@/lib/format";

import { FacadeIllustration } from "../mockups/facade-illustration";

/** 9 · Exemplo T2 Coimbra: leva quem hesita para a página Exemplo, sem pedir registo. */
export function ExampleCard() {
  const figures = [
    { label: "Valor hoje", value: formatEuro(demo.valueToday), tone: "text-ink" },
    { label: "Vender, a 5 anos", value: formatEuro(demo.sell.value), tone: "text-sell" },
    { label: "Arrendar", value: formatEuroMonth(demo.rent.monthly), tone: "text-rent" },
    { label: "Ponto de viragem", value: formatEuroMonth(demo.turningPoint), tone: "text-ink" },
  ];

  return (
    <section className="pb-20 sm:pb-28">
      <div className="container-page">
        <Reveal y={40} className="overflow-hidden rounded-3xl bg-card shadow-lift ring-1 ring-line">
          <div className="grid lg:grid-cols-[1fr_1.1fr]">
            <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[26rem]">
              <FacadeIllustration className="absolute inset-0" />
            </div>

            <div className="flex flex-col p-6 sm:p-10">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <Eyebrow>{example.eyebrow}</Eyebrow>
                <DemoBadge />
              </div>
              <h2 className="mt-4 text-[1.9rem] leading-[1.1] font-normal tracking-[-0.015em] text-ink sm:text-[2.4rem]">
                {example.title}
              </h2>
              <p className="mt-4 text-sm text-ink-soft">
                {demo.property.title} · {demo.property.details}
              </p>
              <blockquote className="mt-3 border-l-2 border-sell pl-3 font-heading text-lg text-ink italic">
                “{demo.property.question}”
              </blockquote>

              <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5">
                {figures.map((f) => (
                  <div key={f.label}>
                    <dt className="text-xs text-ink-soft">{f.label}</dt>
                    <dd className={`mt-1 text-lg font-semibold tabular sm:text-xl ${f.tone}`}>{f.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-auto flex flex-wrap items-center gap-4 pt-10">
                <Link
                  href={example.cta.href}
                  className="group inline-flex h-11 items-center gap-2 rounded-xl bg-ink px-5 text-sm font-medium text-white transition-colors hover:bg-ink/85"
                >
                  {example.cta.label}
                  <ArrowRight aria-hidden className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
                <span className="text-sm text-ink-soft">Sem registo</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
