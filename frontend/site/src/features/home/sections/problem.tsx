import { ForkMark } from "@/components/brand/fork-mark";
import { Reveal } from "@/components/motion/reveal";
import { SectionIntro } from "@/components/shared/section-heading";
import { problem } from "@/content/home";

/** 3 · O problema: três vozes interessadas, e a resposta do REII (independência). */
export function Problem() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="shell">
        <SectionIntro title={problem.title} lead={problem.lead} />

        <ul className="mt-16 grid border-t border-ink md:grid-cols-3">
          {problem.voices.map((v, i) => (
            <li key={v.who} className="border-b border-line md:border-b-0 md:not-first:border-l md:not-first:pl-10 md:not-last:pr-10">
              <Reveal index={i} className="py-9 md:pt-10 md:pb-2">
                <p className="text-[0.85rem] font-semibold text-ink-2">{v.who}</p>
                <p className="mt-5 text-[1.45rem] leading-[1.25] font-medium tracking-[-0.025em] text-ink">{v.says}</p>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-2">{v.note}</p>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="mt-16 flex flex-col gap-5 rounded-[1.25rem] bg-rent px-7 py-7 sm:flex-row sm:items-center sm:gap-8 sm:px-12 sm:py-9">
          <ForkMark className="h-9 shrink-0" light />
          <p className="text-[1.15rem] leading-relaxed tracking-[-0.01em] text-white sm:text-[1.3rem]">
            {problem.answer} <span className="text-mint/80">{problem.answerMuted}</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
