import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { AddressForm } from "@/components/shared/address-form";
import { finalCta } from "@/content/home";

/** 11 · Fecho: a sala vazia, a luz, e a promessa central. (Mantido a pedido.) */
export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-rent-deep text-white">
      <Image
        src={finalCta.image}
        alt={finalCta.alt}
        fill
        quality={90}
        placeholder="blur"
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-rent-deep/55 via-rent-deep/35 to-rent-deep/85" />

      <div className="shell flex min-h-[80vh] flex-col justify-end py-20 sm:py-28">
        <Reveal>
          <h2 className="type-display max-w-[14ch] text-white">{finalCta.title}</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:items-end">
          <Reveal index={1} className="lg:col-span-5">
            <p className="type-lead text-white/80">{finalCta.lead}</p>
          </Reveal>
          <Reveal index={2} className="lg:col-span-6 lg:col-start-7">
            <AddressForm tone="dark" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
