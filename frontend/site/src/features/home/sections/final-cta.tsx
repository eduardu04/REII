import { Reveal } from "@/components/motion/reveal";
import { AddressForm } from "@/components/shared/address-form";
import { finalCta } from "@/content/home";

/** 11 · CTA final: fecha com a promessa central e repete o primeiro passo. */
export function FinalCta() {
  return (
    <section className="bg-rent text-white">
      <div className="container-page py-20 text-center sm:py-28">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-[2.3rem] leading-[1.05] font-normal tracking-[-0.02em] sm:text-[3.2rem] lg:text-[3.8rem]">
            {finalCta.title}
          </h2>
        </Reveal>
        <Reveal index={1}>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/75 sm:text-lg">{finalCta.lead}</p>
        </Reveal>
        <Reveal index={2} className="mx-auto mt-10 max-w-xl">
          <AddressForm tone="dark" />
        </Reveal>
      </div>
    </section>
  );
}
