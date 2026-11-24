import Image from "next/image";
import { Check } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { photos } from "@/content/home";
import { analysisWithReport, costs, packs, pricingHero } from "@/content/pricing";

const balance = packs[1].credits;

/**
 * 1 · Pague só o que usar: o modelo numa frase e, à direita, a janela real de confirmação
 * da app sobre a fachada, com o saldo de créditos. Quem compra vê o custo antes de gastar.
 */
export function PricingHero() {
  const rows = [
    { k: "Análise completa", v: costs.analysis },
    { k: "Relatório em PDF", v: costs.pdf },
    { k: "Saldo depois desta análise", v: balance - analysisWithReport },
  ];

  return (
    <section className="bg-white pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-8">
        <div className="lg:col-span-6">
          <Reveal immediate delay={0.1}>
            <h1 className="type-display max-w-[11ch] text-ink">{pricingHero.title}</h1>
          </Reveal>
          <Reveal immediate delay={0.1} index={2}>
            <p className="type-lead mt-7 max-w-lg text-ink-2">{pricingHero.lead}</p>
          </Reveal>
          <Reveal immediate delay={0.1} index={3}>
            <ul className="mt-8 flex flex-wrap gap-2">
              {pricingHero.points.map((p) => (
                <li key={p} className="flex items-center gap-2 rounded-full bg-surface px-4 py-2 text-[0.9rem] font-medium">
                  <Check aria-hidden className="size-4 text-rent" strokeWidth={2.5} /> {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal immediate delay={0.2} index={2} y={32} className="lg:col-span-6">
          <div className="relative isolate overflow-hidden rounded-[2rem] px-5 pt-10 pb-5 sm:px-10 sm:pt-14 sm:pb-10">
            <Image
              src={photos.t2Fachada}
              alt="Fachada de um prédio em Coimbra"
              fill
              priority
              placeholder="blur"
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="-z-10 object-cover"
            />
            <div aria-hidden className="absolute inset-0 -z-10 bg-rent-deep/45" />

            {/* Janela de confirmação, como na app */}
            <div className="max-w-sm rounded-[1.5rem] bg-white p-6 text-ink shadow-[0_30px_60px_-24px_rgb(0_0_0/0.5)]">
              <p className="text-[1.15rem] font-semibold tracking-[-0.02em]">Confirmar análise</p>
              <p className="mt-0.5 text-[0.85rem] text-ink-2">T2 na Sé Nova, Coimbra</p>
              <dl className="mt-5 space-y-1.5">
                {rows.map((r) => (
                  <div key={r.k} className="flex items-center justify-between gap-4 rounded-[0.9rem] bg-surface px-4 py-3 text-[0.9rem]">
                    <dt className="text-ink-2">{r.k}</dt>
                    <dd className="font-semibold whitespace-nowrap tabular">{r.v} créditos</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-5 grid grid-cols-2 gap-2 text-[0.9rem] font-semibold">
                <span className="rounded-full py-3 text-center text-rent ring-1 ring-rent/40">Voltar</span>
                <span className="rounded-full bg-rent py-3 text-center text-white">Confirmar</span>
              </div>
            </div>

            {/* Saldo */}
            <div className="mt-4 ml-auto w-[13rem] rounded-[1.5rem] bg-cream p-5 text-ink shadow-[0_30px_60px_-24px_rgb(0_0_0/0.5)] sm:-mt-10">
              <p className="text-[0.85rem] font-semibold">O seu saldo</p>
              <p className="mt-2 text-[2.4rem] leading-none font-semibold tracking-[-0.04em] tabular">{balance}</p>
              <p className="mt-1 text-[0.82rem] text-ink-2">créditos disponíveis</p>
              <p className="mt-3 text-[0.85rem] font-semibold text-rent">Comprar créditos</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
