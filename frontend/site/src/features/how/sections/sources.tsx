import Image from "next/image";
import { Check } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { SectionIntro } from "@/components/shared/section-heading";
import { photos } from "@/content/home";
import { howSources } from "@/content/how";

/**
 * 3 · De onde vêm os dados: as quatro fontes em painéis, o aviso sobre preço pedido
 * e, ao lado, como as fontes aparecem dentro de cada análise.
 */
export function HowSources() {
  return (
    <section id="fontes" className="scroll-mt-24 bg-surface py-24 sm:py-32">
      <div className="shell">
        <SectionIntro title={howSources.title} lead={howSources.lead} />

        <div className="mt-14 grid gap-3 lg:mt-20 lg:grid-cols-12">
          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            {howSources.items.map((s, i) => (
              <li key={s.name}>
                <Reveal index={i} className="flex h-full min-h-[13rem] flex-col justify-between rounded-[1.75rem] bg-white p-7 sm:p-8">
                  <span className="text-[1.9rem] leading-[1.05] font-semibold tracking-[-0.045em] text-ink sm:text-[2.25rem]">{s.name}</span>
                  <span className="mt-8 text-[0.98rem] leading-relaxed text-ink-2">{s.text}</span>
                </Reveal>
              </li>
            ))}
            <li className="sm:col-span-2">
              <Reveal index={4} className="rounded-[1.75rem] bg-rent p-7 text-white sm:p-8">
                <p className="text-[1.35rem] leading-snug font-semibold tracking-[-0.02em] sm:text-[1.6rem]">{howSources.callout.strong}</p>
                <p className="mt-2 text-[1rem] leading-relaxed text-white/75">{howSources.callout.text}</p>
              </Reveal>
            </li>
          </ul>

          <Reveal index={2} className="lg:col-span-5">
            <figure className="relative isolate flex h-full min-h-[34rem] flex-col justify-end overflow-hidden rounded-[1.75rem] p-4 sm:p-6">
              <Image src={photos.t2Sala} alt="" fill placeholder="blur" sizes="(min-width: 1024px) 40vw, 100vw" className="-z-10 object-cover" />
              <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-rent-deep/10 to-rent-deep/70" />

              <div className="rounded-[1.25rem] bg-white p-5 shadow-[0_24px_50px_-24px_rgb(0_0_0/0.45)] sm:p-6">
                <p className="text-[1rem] font-semibold">Fontes e referências</p>
                <ul className="mt-3 space-y-2 text-[0.9rem] text-ink-2">
                  {[
                    "INE – Estatísticas da habitação",
                    "SIR – Confidencial Imobiliário",
                    "Anúncios comparáveis (últimos 6 meses)",
                    "Tendência da zona – Sé Nova",
                  ].map((t) => (
                    <li key={t} className="flex gap-2.5">
                      <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-rent" /> {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <p className="rounded-[0.9rem] bg-surface p-3">
                    <span className="block text-[0.75rem] text-ink-2">Data da estimativa</span>
                    <span className="mt-0.5 block text-[0.95rem] font-semibold">06 mai 2026</span>
                  </p>
                  <p className="rounded-[0.9rem] bg-surface p-3">
                    <span className="block text-[0.75rem] text-ink-2">Nível de confiança</span>
                    <span className="mt-0.5 block text-[0.95rem] font-semibold text-rent">Alta, 85&nbsp;%</span>
                  </p>
                </div>
              </div>
              <figcaption className="mt-3 px-1 text-[0.82rem] text-white/85">{howSources.caption}</figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
