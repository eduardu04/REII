"use client";

import { useState } from "react";

import { Reveal } from "@/components/motion/reveal";
import { SectionIntro } from "@/components/shared/section-heading";
import { siteConfig } from "@/config/site";
import { costs, packs, pricingCalculator } from "@/content/pricing";
import { formatEuro } from "@/lib/format";
import { cn } from "@/lib/utils";

const MAX = 10;
const plural = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`;

/** 4 · Calculadora: casas à esquerda, pacote sugerido com a conta à direita. */
export function PricingCalculator() {
  const [homes, setHomes] = useState(2);
  const [refresh, setRefresh] = useState(false);

  const lines = [
    { k: plural(homes, "análise completa", "análises completas"), v: homes * costs.analysis },
    ...(refresh ? [{ k: plural(homes, "atualização", "atualizações"), v: homes * costs.refresh }] : []),
  ];
  const needed = lines.reduce((s, l) => s + l.v, 0);
  // O pacote mais pequeno que chega; se nenhum chegar, várias vezes o maior.
  const biggest = packs[packs.length - 1];
  const pack = packs.find((p) => p.credits >= needed) ?? biggest;
  const times = pack.credits >= needed ? 1 : Math.ceil(needed / biggest.credits);
  const reserve = pack.credits * times - needed;

  return (
    <section className="bg-surface py-24 sm:py-32">
      <div className="shell">
        <SectionIntro title={pricingCalculator.title} lead={pricingCalculator.lead} />

        <Reveal className="mt-14 grid gap-3 lg:mt-20 lg:grid-cols-2">
          <div className="rounded-[1.75rem] bg-white p-7 sm:p-10">
            <label htmlFor="calc-homes" className="text-[0.95rem] text-ink-2">
              Quantos imóveis quer analisar?
            </label>
            <p className="mt-3 flex items-baseline gap-2">
              <span className="text-[4rem] leading-none font-semibold tracking-[-0.05em] text-rent tabular">{homes}</span>
              <span className="text-[1.05rem] text-ink-2">{homes === 1 ? "imóvel" : "imóveis"}</span>
            </p>
            <input
              id="calc-homes"
              type="range"
              min={1}
              max={MAX}
              value={homes}
              onChange={(e) => setHomes(Number(e.target.value))}
              className="mt-6 w-full"
              style={{ accentColor: "var(--rent)" }}
            />
            <div className="mt-1 flex justify-between text-[0.8rem] text-ink-3">
              <span>1</span>
              <span>{MAX}</span>
            </div>

            <label
              className={cn(
                "mt-8 flex cursor-pointer items-center gap-3 rounded-[1rem] px-4 py-3.5 text-[0.98rem] transition-colors",
                refresh ? "bg-rent-soft" : "bg-surface hover:bg-surface-2",
              )}
            >
              <input type="checkbox" checked={refresh} onChange={() => setRefresh((r) => !r)} className="peer sr-only" />
              <span
                aria-hidden
                className={cn(
                  "grid size-5 shrink-0 place-items-center rounded-[6px] peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-rent",
                  refresh ? "bg-rent text-white" : "bg-white ring-1 ring-line",
                )}
              >
                {refresh && <span className="size-2 rounded-[2px] bg-white" />}
              </span>
              {pricingCalculator.refreshLabel}
            </label>
            <p className="mt-4 text-[0.85rem] leading-relaxed text-ink-3">Cada análise completa já inclui os três cenários e o relatório em PDF.</p>
          </div>

          <div aria-live="polite" className="flex flex-col rounded-[1.75rem] bg-rent-deep p-7 text-white sm:p-10">
            <p className="text-[0.9rem] text-white/60">Sugerimos</p>
            <p className="mt-2 text-[2.25rem] leading-tight font-semibold tracking-[-0.04em]">{times > 1 ? `${times} × ${pack.name}` : pack.name}</p>
            <p className="mt-1 text-[1rem] text-white/70">
              {pack.credits * times} créditos, {formatEuro(pack.price * times)}
            </p>

            <dl className="mt-8 flex-1 space-y-1.5">
              {lines.map((l) => (
                <div key={l.k} className="flex justify-between gap-4 rounded-[0.9rem] bg-white/[0.07] px-4 py-3 text-[0.95rem]">
                  <dt className="text-white/75">{l.k}</dt>
                  <dd className="font-semibold whitespace-nowrap tabular">{l.v} créditos</dd>
                </div>
              ))}
              <div className="flex justify-between gap-4 rounded-[0.9rem] px-4 py-3 text-[0.95rem]">
                <dt className="text-white/75">Ficam de reserva</dt>
                <dd className="font-semibold whitespace-nowrap tabular text-mint">{reserve} créditos</dd>
              </div>
            </dl>

            <a
              href={siteConfig.appUrl}
              className="mt-8 flex h-12 items-center justify-center rounded-full bg-white text-[0.95rem] font-semibold text-rent-deep transition-colors hover:bg-cream"
            >
              {times > 1 ? "Comprar estes pacotes" : "Comprar este pacote"}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
