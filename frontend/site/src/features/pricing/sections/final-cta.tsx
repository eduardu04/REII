import { Reveal } from "@/components/motion/reveal";
import { AddressForm } from "@/components/shared/address-form";
import { pricingCta } from "@/content/pricing";

/** Fecho: começar pela casa antes de pensar em pacotes. Só texto e o campo da morada, ao centro. */
export function PricingFinalCta() {
  return (
    <section className="bg-surface py-24 sm:py-32">
      <div className="shell">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="type-h2 text-ink">{pricingCta.title}</h2>
          </Reveal>
          <Reveal index={1}>
            <p className="type-lead mt-5 text-ink-2">{pricingCta.lead}</p>
          </Reveal>
          <Reveal index={2}>
            <AddressForm className="mx-auto mt-9 max-w-xl" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
