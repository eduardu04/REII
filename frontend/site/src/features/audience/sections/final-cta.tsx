import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { AddressForm } from "@/components/shared/address-form";
import { audienceCta } from "@/content/audience";
import { photos } from "@/content/home";

/** Fecho: da situação à casa da pessoa. */
export function AudienceFinalCta() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="shell">
        <div className="relative isolate overflow-hidden rounded-[2rem] p-8 text-white sm:p-14 lg:p-20">
          <Image src={photos.fecho} alt="" fill placeholder="blur" sizes="100vw" className="-z-10 object-cover" />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgb(10_54_50/0.95)_0%,rgb(10_54_50/0.7)_50%,rgb(10_54_50/0.1)_100%)]"
          />
          <Reveal>
            <h2 className="type-h2 max-w-[18ch] text-white">{audienceCta.title}</h2>
          </Reveal>
          <Reveal index={1}>
            <p className="type-lead mt-5 max-w-xl text-white/80">{audienceCta.lead}</p>
          </Reveal>
          <Reveal index={2}>
            <AddressForm tone="dark" className="mt-9 max-w-xl" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
