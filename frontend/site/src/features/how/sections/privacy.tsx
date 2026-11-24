import { Reveal } from "@/components/motion/reveal";
import { SectionIntro } from "@/components/shared/section-heading";
import { howPrivacy } from "@/content/how";

/** 9 · Privacidade, em três frases: o que guardamos, para quê, e o que nunca fazemos. */
export function HowPrivacy() {
  return (
    <section id="privacidade" className="scroll-mt-24 bg-white py-24 sm:py-32">
      <div className="shell">
        <SectionIntro title={howPrivacy.title} lead={howPrivacy.lead} />
        <ul className="mt-14 grid gap-3 md:grid-cols-3 lg:mt-20">
          {howPrivacy.items.map((it, i) => (
            <li key={it.title}>
              <Reveal
                index={i}
                className={i === 2 ? "h-full rounded-[1.75rem] bg-rent p-7 text-white sm:p-8" : "h-full rounded-[1.75rem] bg-surface p-7 sm:p-8"}
              >
                <p className="text-[1.3rem] font-semibold tracking-[-0.02em]">{it.title}</p>
                <p className={i === 2 ? "mt-3 text-[1rem] leading-relaxed text-white/80" : "mt-3 text-[1rem] leading-relaxed text-ink-2"}>
                  {it.text}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
