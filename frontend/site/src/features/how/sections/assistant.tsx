import Image from "next/image";
import { Check, Minus } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { SectionIntro } from "@/components/shared/section-heading";
import { photos } from "@/content/home";
import { howAssistant } from "@/content/how";

/** 7 · O assistente: o que faz e o que não faz, com uma pergunta real sobre a análise. */
export function HowAssistant() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="shell">
        <SectionIntro title={howAssistant.title} lead={howAssistant.lead} />

        <div className="mt-14 grid gap-3 lg:mt-20 lg:grid-cols-12">
          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-6 lg:grid-cols-1">
            <Reveal className="rounded-[1.75rem] bg-rent-soft p-7 sm:p-8">
              <p className="text-[1.3rem] font-semibold tracking-[-0.02em] text-rent">O que faz</p>
              <ul className="mt-5 space-y-3.5">
                {howAssistant.does.map((d) => (
                  <li key={d} className="flex gap-3 text-[1rem] leading-snug">
                    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-rent text-white">
                      <Check aria-hidden className="size-3.5" strokeWidth={3} />
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal index={1} className="rounded-[1.75rem] bg-surface p-7 sm:p-8">
              <p className="text-[1.3rem] font-semibold tracking-[-0.02em]">O que não faz</p>
              <ul className="mt-5 space-y-3.5">
                {howAssistant.doesNot.map((d) => (
                  <li key={d} className="flex gap-3 text-[1rem] leading-snug text-ink-2">
                    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-white text-ink-2 ring-1 ring-line">
                      <Minus aria-hidden className="size-3.5" strokeWidth={3} />
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal index={2} className="lg:col-span-6">
            <figure className="relative isolate flex h-full min-h-[34rem] flex-col justify-end overflow-hidden rounded-[1.75rem] p-4 sm:p-6">
              <Image src={photos.t2Cozinha} alt="" fill placeholder="blur" sizes="(min-width: 1024px) 48vw, 100vw" className="-z-10 object-cover" />
              <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-rent-deep/10 to-rent-deep/75" />

              <div className="space-y-3">
                <p className="ml-auto max-w-[80%] rounded-[1.25rem] rounded-br-[0.4rem] bg-rent px-5 py-3.5 text-[0.95rem] text-white shadow-lg">
                  O que é o VAL de 41&nbsp;800&nbsp;€?
                </p>
                <div className="max-w-[92%] rounded-[1.25rem] rounded-bl-[0.4rem] bg-white p-5 text-ink shadow-[0_24px_50px_-24px_rgb(0_0_0/0.45)]">
                  <p className="text-[0.95rem] leading-relaxed">
                    É quanto vale hoje arrendar 5 anos e vender no fim, depois de descontar o custo de oportunidade de 5&nbsp;% ao ano. Acima de zero,
                    o arrendamento rende mais do que essa taxa.
                  </p>
                  <p className="mt-3 rounded-[0.8rem] bg-surface px-3.5 py-2.5 text-[0.8rem] leading-relaxed text-ink-2">
                    <b className="text-ink">Fonte:</b> Motor financeiro REII · 6 mai 2026
                    <br />
                    <b className="text-ink">Pressuposto:</b> taxa de desconto 5,0&nbsp;%; renda 1&nbsp;200&nbsp;€/mês
                  </p>
                </div>
              </div>
              <figcaption className="mt-3 px-1 text-[0.82rem] text-white/85">{howAssistant.caption}</figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
