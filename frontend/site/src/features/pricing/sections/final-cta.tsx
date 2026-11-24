import Image from "next/image";

import { ForkDrawing } from "@/components/brand/fork-drawing";
import { Reveal } from "@/components/motion/reveal";
import { AddressForm } from "@/components/shared/address-form";
import { photos } from "@/content/home";
import { pricingCta } from "@/content/pricing";

/** 8 · Fecho: começar pela casa antes de pensar em pacotes. Fotografia ao fundo e a bifurcação. */
export function PricingFinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-rent-deep text-white">
      <Image src={photos.t2Fachada} alt="" fill quality={90} placeholder="blur" sizes="100vw" className="-z-10 object-cover" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgb(10_54_50/0.95)_0%,rgb(10_54_50/0.75)_45%,rgb(10_54_50/0.15)_100%)]"
      />

      <div className="shell grid gap-12 py-24 sm:py-32 lg:grid-cols-12 lg:items-center lg:gap-8">
        <div className="lg:col-span-6">
          <Reveal>
            <h2 className="type-display max-w-[10ch] text-white">{pricingCta.title}</h2>
          </Reveal>
          <Reveal index={1}>
            <p className="type-lead mt-6 text-white/80">{pricingCta.lead}</p>
          </Reveal>
          <Reveal index={2}>
            <AddressForm tone="dark" className="mt-9 max-w-xl" />
          </Reveal>
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <ForkDrawing className="mx-auto max-w-[26rem]" />
        </div>
      </div>
    </section>
  );
}
