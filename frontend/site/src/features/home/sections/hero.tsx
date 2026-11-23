import { Check } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { AddressForm } from "@/components/shared/address-form";
import { Eyebrow } from "@/components/shared/section-heading";
import { hero } from "@/content/home";

import { DecisionCards } from "../mockups/decision-cards";

/** 1 · Hero: o benefício e o produto em 5 segundos. Pede só a localização. */
export function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-24 lg:pt-20">
      {/* Luz quente de fundo, muito subtil */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-[36rem] bg-[radial-gradient(60%_50%_at_70%_30%,#fcf4ee_0%,transparent_70%),radial-gradient(50%_45%_at_20%_20%,#e8f0ee_0%,transparent_70%)]"
      />
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div>
          <Reveal>
            <Eyebrow>{hero.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal index={1}>
            <h1 className="mt-4 text-[2.5rem] leading-[1.02] font-normal tracking-[-0.025em] text-ink sm:text-[3.5rem] lg:text-[4.1rem]">
              <span className="pr-[0.06em] text-sell italic">Vender</span> {hero.titleStart}{" "}
              <span className="pr-[0.04em] text-rent italic">arrendar</span>
              {hero.titleEnd}
            </h1>
          </Reveal>
          <Reveal index={2}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">{hero.subtitle}</p>
          </Reveal>
          <Reveal index={3} className="mt-8 max-w-xl">
            <AddressForm />
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-soft">
              {hero.reassurance.map((item) => (
                <li key={item} className="inline-flex items-center gap-1.5">
                  <Check aria-hidden className="size-4 text-rent" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <DecisionCards />
      </div>
    </section>
  );
}
