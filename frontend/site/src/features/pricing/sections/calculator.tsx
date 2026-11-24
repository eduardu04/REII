"use client";

import { useState } from "react";
import { Check } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { SectionIntro } from "@/components/shared/section-heading";
import { siteConfig } from "@/config/site";
import { costs, packs, pricingCalculator } from "@/content/pricing";
import { formatEuro } from "@/lib/format";
import { cn } from "@/lib/utils";

const MAX = 10;
const plural = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`;

/** 4 · Calculadora: casas e opções à esquerda, pacote sugerido com a conta à direita. */
export function PricingCalculator() {
  const [homes, setHomes] = useState(2);
  const [opts, setOpts] = useState<Record<string, boolean>>(() => Object.fromEntries(pricingCalculator.options.map((o) => [o.id, o.default])));

  const lines = [
    { k: plural(homes, "análise completa", "análises completas"), v: homes * costs.analysis },
    ...pricingCalculator.options
      .filter((o) => opts[o.id])
      .map((o) => ({
        k: o.id === "pdf" ? plural(homes, "relatório em PDF", "relatórios em PDF") : o.id === "scenarios" ? "Três cenários" : "Atualizações",
        v: homes * o.cost,
      })),
  ];
  const needed = lines.reduce((s, l) => s + l.v, 0);
  const pack = packs.find((p) => p.credits >= needed);
  const many = !pack; // mais do que o maior pacote: créditos mensais
  const reserve = pack ? pack.credits - needed : 0;

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
              <span className="text-[4rem] leading-none font-semibold tracking-[-0.05em] text-rent tabular">{homes === MAX ? `${MAX}+` : homes}</span>
              <span className="text-[1.05rem] text-ink-2">{homes === 1 ? "imóvel" : "imóveis"}</span>
            </p>
            <input
              id="calc-homes"
              type="range"
              min={1}
              max={MAX}
              value={homes}
              onChange={(e) => setHomes(Number(e.target.value))}
              className="mt-6 w-full accent-rent"
              style={{ accentColor: "var(--rent)" }}
            />
            <div className="mt-1 flex justify-between text-[0.8rem] text-ink-3">
              <span>1</span>
              <span>5</span>
              <span>10 ou mais</span>
            </div>

            <fieldset className="mt-8 space-y-2">
              <legend className="sr-only">O que quer receber</legend>
              {pricingCalculator.options.map((o) => {
                const on = !!opts[o.id];
                return (
                  <label
                    key={o.id}
                    className={cn(
                      "flex cursor-pointer items-center gap-3 rounded-[1rem] px-4 py-3.5 text-[0.98rem] transition-colors",
                      on ? "bg-rent-soft" : "bg-surface hover:bg-surface-2",
                    )}
                  >
                    <input type="checkbox" checked={on} onChange={() => setOpts((s) => ({ ...s, [o.id]: !s[o.id] }))} className="peer sr-only" />
                    <span
                      aria-hidden
                      className={cn(
                        "grid size-5 shrink-0 place-items-center rounded-[6px] peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-rent",
                        on ? "bg-rent text-white" : "bg-white ring-1 ring-line",
                      )}
                    >
                      {on && <Check className="size-3.5" strokeWidth={3} />}
                    </span>
                    {o.label}
                  </label>
                );
              })}
            </fieldset>
          </div>

          <div aria-live="polite" className="flex flex-col rounded-[1.75rem] bg-rent-deep p-7 text-white sm:p-10">
            <p className="text-[0.9rem] text-white/60">Sugerimos</p>
            {many ? (
              <>
                <p className="mt-2 text-[2.25rem] leading-tight font-semibold tracking-[-0.04em]">Créditos mensais</p>
                <p className="mt-2 text-[1rem] leading-relaxed text-white/70">
                  Para {needed} créditos, a opção para investidores fica mais em conta. Fale connosco.
                </p>
              </>
            ) : (
              <>
                <p className="mt-2 text-[2.25rem] leading-tight font-semibold tracking-[-0.04em]">{pack.name}</p>
                <p className="mt-1 text-[1rem] text-white/70">
                  {pack.credits} créditos, {formatEuro(pack.price)}
                </p>
              </>
            )}

            <dl className="mt-8 flex-1 space-y-1.5">
              {lines.map((l) => (
                <div key={l.k} className="flex justify-between gap-4 rounded-[0.9rem] bg-white/[0.07] px-4 py-3 text-[0.95rem]">
                  <dt className="text-white/75">{l.k}</dt>
                  <dd className="font-semibold whitespace-nowrap tabular">{l.v} créditos</dd>
                </div>
              ))}
              {pack && reserve > 0 && (
                <div className="flex justify-between gap-4 rounded-[0.9rem] px-4 py-3 text-[0.95rem]">
                  <dt className="text-white/75">Ficam de reserva</dt>
                  <dd className="font-semibold whitespace-nowrap tabular text-mint">{reserve} créditos</dd>
                </div>
              )}
            </dl>

            <a
              href={many ? "#investidores" : siteConfig.appUrl}
              className="mt-8 flex h-12 items-center justify-center rounded-full bg-white text-[0.95rem] font-semibold text-rent-deep transition-colors hover:bg-cream"
            >
              {many ? "Ver a opção para investidores" : "Comprar este pacote"}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
