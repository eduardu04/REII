import { Reveal } from "@/components/motion/reveal";
import { WordReveal } from "@/components/motion/word-reveal";
import { SectionLabel } from "@/components/shared/section-heading";
import { statement } from "@/content/home";

/** 3 · O problema: a frase acende palavra a palavra; por baixo, as três vozes interessadas. */
export function Statement() {
  return (
    <section className="shell py-24 sm:py-32 lg:py-44">
      <div className="grid gap-8 lg:grid-cols-12">
        <Reveal className="lg:col-span-3 lg:pt-4">
          <SectionLabel index="01">{statement.label}</SectionLabel>
        </Reveal>
        <WordReveal
          text={statement.text}
          className="text-[1.9rem] leading-[1.12] font-medium tracking-[-0.035em] text-ink sm:text-[2.6rem] lg:col-span-9 lg:text-[3.4rem]"
        />
      </div>

      <ul className="mt-20 grid border-t border-line md:grid-cols-3 lg:mt-28 lg:ml-[25%]">
        {statement.voices.map((v, i) => (
          <li key={v.who} className="border-b border-line md:border-b-0 md:not-first:border-l md:not-first:pl-8 md:not-last:pr-8">
            <Reveal index={i} className="py-8">
              <p className="type-label text-ink-3">{v.who}</p>
              <p className="mt-4 text-[1.15rem] leading-snug font-medium tracking-[-0.02em] text-ink">{v.says}</p>
              <p className="mt-3 text-[0.9rem] text-ink-2">{v.catch}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
