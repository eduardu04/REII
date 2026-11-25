import { ForkDrawing } from "@/components/brand/fork-drawing";
import { Reveal } from "@/components/motion/reveal";
import { AddressForm } from "@/components/shared/address-form";
import { howCta } from "@/content/how";

/** 10 · Fecho: a mesma pergunta, agora com a casa da pessoa. */
export function HowFinalCta() {
  return (
    <section className="bg-white pb-24 sm:pb-32">
      <div className="shell">
        <div className="grid gap-10 overflow-hidden rounded-[2rem] bg-[radial-gradient(120%_90%_at_80%_0%,#145a51_0%,var(--rent-deep)_70%)] p-8 text-white sm:p-14 lg:grid-cols-12 lg:items-center lg:gap-8">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="type-h2 max-w-[18ch] text-white">{howCta.title}</h2>
            </Reveal>
            <Reveal index={1}>
              <p className="mt-5 text-[1.05rem] leading-relaxed text-white/75">{howCta.lead}</p>
            </Reveal>
            <Reveal index={2}>
              <AddressForm tone="dark" className="mt-8 max-w-xl" />
            </Reveal>
          </div>
          <div className="text-white lg:col-span-5">
            <ForkDrawing className="mx-auto max-w-[24rem]" />
          </div>
        </div>
      </div>
    </section>
  );
}
