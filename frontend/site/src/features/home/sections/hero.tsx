import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { AddressForm } from "@/components/shared/address-form";
import { SectionLabel } from "@/components/shared/section-heading";
import { siteConfig } from "@/config/site";
import { hero, photos } from "@/content/home";

import { DecisionCard } from "../mockups/decision-card";

/**
 * 1 · Hero (como no mockup): à esquerda, a pergunta e o primeiro passo (só a morada);
 * à direita, uma casa portuguesa real com os cartões Vender e Arrendar do T2 Coimbra por cima.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="shell grid items-center gap-12 pt-10 pb-16 sm:pt-14 lg:min-h-[calc(100svh-4.5rem)] lg:grid-cols-12 lg:gap-8 lg:py-16">
        <div className="lg:col-span-6 lg:pr-8">
          <Reveal>
            <SectionLabel>Para proprietários em Portugal</SectionLabel>
          </Reveal>
          <Reveal index={1}>
            <h1 className="type-display mt-7 text-ink">
              <span className="text-sell">Vender</span> ou <span className="text-rent">arrendar</span>? {hero.titleLines.slice(1).join(" ")}
            </h1>
          </Reveal>
          <Reveal index={2}>
            <p className="type-lead mt-7 max-w-lg text-ink-2">{hero.subtitle}</p>
          </Reveal>
          <Reveal index={3} className="mt-9 max-w-xl">
            <AddressForm />
            <p className="mt-3 pl-5 text-[0.85rem] text-ink-3">{hero.reassurance}</p>
          </Reveal>
          <Reveal index={4} className="mt-12 border-t border-line pt-5">
            <p className="text-[0.8rem] text-ink-3">
              Dados de <span className="text-ink-2">{siteConfig.sources.join(" · ")}</span>
            </p>
          </Reveal>
        </div>

        <div className="relative lg:col-span-6">
          <Reveal y={24} className="relative ml-auto aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] sm:w-[85%] lg:w-[88%]">
            <Image
              src={photos.portoCasa}
              alt="Casa portuguesa com azulejo e porta verde, junto ao rio"
              fill
              priority
              placeholder="blur"
              sizes="(min-width: 1024px) 45vw, (min-width: 640px) 85vw, 100vw"
              className="object-cover"
            />
            <span className="absolute top-4 right-4 rounded-full bg-white/90 px-3 py-1.5 text-[0.75rem] font-medium text-ink backdrop-blur">
              {"Sé Nova, Coimbra"}
            </span>
          </Reveal>

          <Reveal
            index={3}
            y={24}
            className="relative z-10 -mt-28 w-[92%] sm:absolute sm:bottom-10 sm:left-0 sm:mt-0 sm:w-[24rem] lg:-left-10 lg:w-[25rem]"
          >
            <DecisionCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
