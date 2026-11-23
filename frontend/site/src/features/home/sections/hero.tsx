import Image from "next/image";

import { CountUp } from "@/components/motion/count-up";
import { Reveal } from "@/components/motion/reveal";
import { AddressForm } from "@/components/shared/address-form";
import { demo, hero, photos } from "@/content/home";
import { formatEuro } from "@/lib/format";

/**
 * 1 · Hero (mockup): fotografia de ponta a ponta com velatura verde, a pergunta a branco,
 * a morada como primeiro passo e os dois resultados do T2 Coimbra desencontrados à direita.
 */
export function Hero() {
  return (
    <section data-hero-dark className="relative isolate overflow-hidden bg-rent-deep text-white">
      <Image
        src={photos.lisboaTelhados}
        alt=""
        fill
        priority
        placeholder="blur"
        sizes="100vw"
        className="-z-20 object-cover object-[35%_50%]"
      />
      {/* Velatura verde: densa à esquerda (texto), aberta à direita (fotografia) */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgb(10_54_50/0.96)_0%,rgb(10_54_50/0.88)_38%,rgb(15_76_69/0.55)_68%,rgb(15_76_69/0.25)_100%)]"
      />
      <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-rent-deep/60 to-transparent" />

      <div className="shell grid min-h-[100svh] items-center gap-14 pt-32 pb-20 lg:grid-cols-12 lg:gap-8 lg:pt-28">
        <div className="lg:col-span-7">
          <Reveal>
            <h1 className="type-display max-w-[13ch] text-white">{hero.title}</h1>
          </Reveal>
          <Reveal index={1}>
            <p className="type-lead mt-7 max-w-xl text-white/75">{hero.subtitle}</p>
          </Reveal>
          <Reveal index={2} className="mt-10 max-w-[36rem]">
            <AddressForm />
            <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[0.875rem] text-white/70">
              {hero.notes.map((note) => (
                <li key={note} className="flex items-center gap-2">
                  <span aria-hidden className="h-px w-3 bg-mint/70" />
                  {note}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="relative mx-auto w-full max-w-[26rem] lg:col-span-5 lg:mr-0">
          <Reveal index={2} y={24} className="w-[78%]">
            <article className="rounded-2xl bg-white p-6 text-ink shadow-[0_24px_60px_-24px_rgb(0_0_0/0.5)]">
              <p className="flex items-center gap-2 text-[0.85rem] font-semibold text-sell">
                <span aria-hidden className="size-2.5 rounded-[3px] bg-sell" />
                Vender
              </p>
              <p className="mt-3 text-[0.8rem] text-ink-2">Valor daqui a 5 anos</p>
              <p className="mt-1 text-[2rem] leading-tight font-semibold tracking-[-0.035em] tabular">
                <CountUp value={demo.sell.value} format="euro" delay={0.6} />
              </p>
              <p className="mt-2 text-[0.8rem] font-medium text-success">
                +{formatEuro(demo.sell.gain)} face ao valor de hoje
              </p>
            </article>
          </Reveal>

          <Reveal index={3} y={24} className="mt-6 ml-auto w-[78%]">
            <article className="rounded-2xl bg-white p-6 text-ink shadow-[0_24px_60px_-24px_rgb(0_0_0/0.5)]">
              <p className="flex items-center gap-2 text-[0.85rem] font-semibold text-rent">
                <span aria-hidden className="size-2.5 rounded-[3px] bg-rent" />
                Arrendar
              </p>
              <p className="mt-3 text-[0.8rem] text-ink-2">Renda estimada</p>
              <p className="mt-1 text-[2rem] leading-tight font-semibold tracking-[-0.035em] tabular">
                <CountUp value={demo.rent.monthly} format="euroMonth" delay={0.7} />
              </p>
              <p className="mt-2 text-[0.8rem] font-medium text-rent">
                {formatEuro(demo.rent.fiveYearGross)} em rendas em 5 anos
              </p>
            </article>
            <div className="mt-2 rounded-xl bg-black/35 px-4 py-3 backdrop-blur-md">
              <p className="text-[0.85rem] font-semibold text-white">{demo.property.title}</p>
              <p className="text-[0.75rem] text-white/70">Exemplo com valores de demonstração</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
