import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { photos } from "@/content/home";
import { costs, creditValidityMonths, packById, pricingHero } from "@/content/pricing";
import { HeroBackdrop } from "@/features/home/sections/hero-backdrop";
import { formatEuro } from "@/lib/format";

/**
 * 1 · Pague só o que usar. Capa fotográfica de ponta a ponta (como o Início), com o preço dito
 * em três números grandes, só tipografia: sem cartões, sem ícones, sem nada sobreposto.
 */
export function PricingHero() {
  const facts = [
    { value: formatEuro(0), label: "Primeira estimativa", note: "Valor hoje e renda provável, sem cartão." },
    { value: formatEuro(packById("uma").price), label: "Análise completa", note: `${costs.analysis} créditos, com relatório em PDF.` },
    { value: `${creditValidityMonths} meses`, label: "Validade dos créditos", note: "Para qualquer operação, em qualquer imóvel." },
  ];

  return (
    <section data-hero-dark className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-rent-deep text-white">
      <HeroBackdrop>
        <Image
          src={photos.t2Fachada}
          alt=""
          fill
          priority
          quality={90}
          placeholder="blur"
          sizes="100vw"
          className="object-cover object-[50%_40%]"
        />
      </HeroBackdrop>
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-56 bg-gradient-to-b from-rent-deep/80 to-transparent" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgb(10_54_50/0.97)_0%,rgb(10_54_50/0.88)_34%,rgb(10_54_50/0.4)_64%,transparent_85%)]"
      />

      <div className="shell mt-auto pt-40 pb-10 lg:pb-14">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-8">
          <Reveal immediate delay={0.2} className="lg:col-span-7">
            <h1 className="type-display max-w-[11ch] text-white">{pricingHero.title}</h1>
          </Reveal>
          <Reveal immediate delay={0.2} index={2} className="lg:col-span-4 lg:col-start-9 lg:pb-2">
            <p className="text-[1.05rem] leading-relaxed text-white/75">{pricingHero.lead}</p>
          </Reveal>
        </div>

        <dl className="mt-14 grid gap-8 sm:grid-cols-3 sm:gap-8 lg:mt-20">
          {facts.map((f, i) => (
            <Reveal key={f.label} immediate delay={0.2} index={4 + i}>
              <dt className="text-[0.9rem] font-medium text-mint">{f.label}</dt>
              <dd className="mt-2 text-[2.75rem] leading-none font-semibold tracking-[-0.05em] whitespace-nowrap tabular sm:text-[3.25rem]">
                {f.value}
              </dd>
              <dd className="mt-3 text-[0.92rem] leading-relaxed text-white/65">{f.note}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
