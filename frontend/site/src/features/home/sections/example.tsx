"use client";

import { useState } from "react";
import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/shared/button-link";
import { SectionIntro } from "@/components/shared/section-heading";
import { demo, example, photos } from "@/content/home";
import { formatEuro, formatEuroMonth, formatPercent } from "@/lib/format";
import { cn } from "@/lib/utils";

const TABS = ["Visão geral", "Zona e valorização", "Casas comparáveis"] as const;

/** 9 · Exemplo T2 Coimbra: a história, os números-chave e um bocado da análise para explorar. */
export function Example() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("Zona e valorização");

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="shell">
        <SectionIntro title={example.title} lead={example.lead} />

        <Reveal y={28} className="mt-16 grid grid-cols-1 gap-6 rounded-[1.5rem] bg-white p-4 ring-1 ring-line sm:p-6 lg:grid-cols-2 lg:gap-10 lg:p-10">
          <div className="flex min-w-0 flex-col p-2 sm:p-0">
            <div className="flex items-center gap-5">
              <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-xl">
                <Image src={photos.t2Fachada} alt="Fachada do T2 na Sé Nova, Coimbra" fill sizes="112px" className="object-cover" />
              </div>
              <div>
                <h3 className="text-[1.5rem] font-semibold tracking-[-0.03em] text-ink sm:text-[1.75rem]">{demo.property.title}</h3>
                <p className="mt-1 text-[0.85rem] text-ink-2">{demo.property.details}</p>
              </div>
            </div>
            <p className="mt-7 max-w-md text-[1.05rem] leading-relaxed text-ink">{example.story}</p>

            <dl className="mt-8 grid grid-cols-2 border-t border-line">
              {[
                ["Valor hoje", formatEuro(demo.valueToday), "text-ink"],
                ["Vender daqui a 5 anos", formatEuro(demo.sell.value), "text-sell"],
                ["Renda estimada", formatEuroMonth(demo.rent.monthly), "text-rent"],
                ["Rentabilidade do arrendamento", `${formatPercent(demo.irr)} ao ano`, "text-ink"],
              ].map(([k, v, tone], i) => (
                <div key={k} className={cn("border-b border-line py-5", i % 2 === 1 && "border-l pl-6")}>
                  <dt className="text-[0.8rem] text-ink-2">{k}</dt>
                  <dd className={cn("mt-1.5 text-[1.6rem] font-semibold tracking-[-0.035em] tabular sm:text-[1.85rem]", tone)}>{v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 lg:mt-auto lg:pt-8">
              <ButtonLink href={example.cta.href} size="lg" className="rounded-xl">
                {example.cta.label}
              </ButtonLink>
              <span className="text-[0.85rem] text-ink-2">Exemplo com valores de demonstração</span>
            </div>
          </div>

          <div className="min-w-0 rounded-xl bg-surface p-4 sm:p-6">
            <div role="tablist" aria-label="Partes da análise" className="flex gap-1 overflow-x-auto border-b border-line [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {TABS.map((t) => (
                <button
                  key={t}
                  role="tab"
                  type="button"
                  aria-selected={tab === t}
                  onClick={() => setTab(t)}
                  className={cn(
                    "-mb-px shrink-0 border-b-2 px-3 py-2.5 text-[0.8rem] font-medium whitespace-nowrap transition-colors",
                    tab === t ? "border-rent text-rent" : "border-transparent text-ink-2 hover:text-ink",
                  )}
                >
                  {t}
                </button>
              ))}
            </div>

            <div role="tabpanel" className="pt-2">
              {tab === "Zona e valorização" && (
                <>
                  <ul className="divide-y divide-line">
                    {example.zone.map((z) => (
                      <li key={z.name} className="flex items-start justify-between gap-4 py-3.5">
                        <div>
                          <p className="text-[0.88rem] font-semibold text-ink">{z.name}</p>
                          <p className="mt-0.5 text-[0.78rem] text-ink-2">{z.detail}</p>
                        </div>
                        <span
                          className={cn(
                            "shrink-0 rounded-full px-2.5 py-1 text-[0.7rem] font-semibold",
                            z.status === "Confirmado" ? "bg-rent-soft text-rent" : "bg-[#f8ecd2] text-[#8a5a00]",
                          )}
                        >
                          {z.status}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-2 flex items-center justify-between rounded-lg bg-white px-4 py-3.5">
                    <span className="text-[0.82rem] text-ink-2">Valorização média da zona nos últimos 5 anos</span>
                    <span className="text-[1.2rem] font-semibold text-success tabular">+{formatPercent(example.zoneGrowth)}</span>
                  </div>
                </>
              )}
              {tab === "Casas comparáveis" && (
                <ul className="divide-y divide-line">
                  {example.comparables.map((c) => (
                    <li key={c.name} className="flex items-center justify-between gap-4 py-4">
                      <div>
                        <p className="text-[0.88rem] font-semibold text-ink">{c.name}</p>
                        <p className="mt-0.5 text-[0.78rem] text-ink-2">{c.detail}</p>
                      </div>
                      <span className="text-[0.95rem] font-semibold text-ink tabular">{c.value}</span>
                    </li>
                  ))}
                </ul>
              )}
              {tab === "Visão geral" && (
                <dl className="divide-y divide-line text-[0.88rem]">
                  {[
                    ["Ganho estimado com a venda", `+${formatEuro(demo.sell.gain)}`],
                    ["Rendas brutas em 5 anos", formatEuro(demo.rent.fiveYearGross)],
                    ["Ganho do arrendamento, em dinheiro de hoje", formatEuro(demo.npv)],
                    ["Ponto de viragem", formatEuroMonth(demo.turningPoint)],
                    ["Nível de confiança", `Alta, ${formatPercent(demo.confidence)}`],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-4 py-4">
                      <dt className="text-ink-2">{k}</dt>
                      <dd className="font-semibold text-ink tabular">{v}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
