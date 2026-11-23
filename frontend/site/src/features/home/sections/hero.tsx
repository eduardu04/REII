import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { AddressForm } from "@/components/shared/address-form";
import { siteConfig } from "@/config/site";
import { hero, photos } from "@/content/home";

import { HeroBackdrop } from "./hero-backdrop";

/**
 * 1 · Hero em "capa" (referência: Libra, Harvey): fotografia de ponta a ponta,
 * título ancorado em baixo à esquerda, primeiro passo à direita e, no rodapé da capa,
 * as fontes de dados. Sem cartões flutuantes.
 */
export function Hero() {
  return (
    <section data-hero-dark className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-rent-deep text-white">
      <HeroBackdrop>
        <Image
          src={photos.lisboaTelhados}
          alt=""
          fill
          priority
          quality={90}
          placeholder="blur"
          sizes="100vw"
          className="object-cover object-[40%_45%]"
        />
      </HeroBackdrop>
      {/* Leitura: topo ligeiro (navegação), base densa em verde (texto) */}
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-48 bg-gradient-to-b from-black/35 to-transparent" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgb(10_54_50/0.97)_0%,rgb(10_54_50/0.86)_28%,rgb(10_54_50/0.35)_58%,transparent_80%)]"
      />

      <div className="shell mt-auto pt-40">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-8">
          <Reveal immediate delay={0.2} className="lg:col-span-7">
            <h1 className="type-display max-w-[14ch] text-white">{hero.title}</h1>
          </Reveal>
          <Reveal immediate delay={0.2} index={2} className="lg:col-span-5 lg:pb-2">
            <p className="text-[1.05rem] leading-relaxed text-white/75">{hero.subtitle}</p>
            <AddressForm className="mt-7" />
            <p className="mt-4 text-[0.82rem] text-white/60">{hero.notes.join("  ·  ")}</p>
          </Reveal>
        </div>

        <Reveal
          immediate
          delay={0.2}
          index={4}
          className="mt-14 flex flex-col gap-5 border-t border-white/15 py-6 sm:flex-row sm:items-center sm:justify-between lg:mt-20"
        >
          <p className="flex flex-wrap items-baseline gap-x-7 gap-y-2">
            <span className="text-[0.75rem] font-medium tracking-[0.08em] text-white/45 uppercase">Dados de</span>
            {siteConfig.sources.map((s) => (
              <span key={s} className="text-[0.95rem] font-semibold tracking-[-0.01em] text-white/85">
                {s}
              </span>
            ))}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
