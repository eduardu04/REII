import { ForkDrawing } from "@/components/brand/fork-drawing";
import { Reveal } from "@/components/motion/reveal";
import { SectionIntro } from "@/components/shared/section-heading";
import { problem } from "@/content/home";

/**
 * 2 · O problema. As três vozes em painéis lado a lado (quem / o que diz / o que não diz)
 * e a resposta do REII num painel verde, com a bifurcação Vender / Arrendar.
 */
export function Problem() {
  return (
    <section className="bg-white pt-24 pb-6 sm:pt-32">
      <div className="shell">
        <SectionIntro title={problem.title} lead={problem.lead} />

        <ul className="mt-14 grid gap-3 md:grid-cols-3 lg:mt-20">
          {problem.voices.map((v, i) => (
            <li key={v.who}>
              <Reveal index={i} className="flex h-full flex-col rounded-[1.75rem] bg-surface p-7 sm:p-9">
                <p className="text-[0.88rem] font-semibold text-ink-3">{v.who}</p>
                <p className="mt-6 text-[1.5rem] leading-[1.22] font-medium tracking-[-0.03em] text-ink sm:text-[1.75rem]">{v.says}</p>
                <p className="mt-auto pt-10 text-[0.95rem] leading-relaxed text-ink-2">{v.note}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>

      <div className="px-3 sm:px-5">
        <Reveal className="mx-auto mt-3 max-w-[90rem] overflow-hidden rounded-[2rem] bg-rent-deep text-white">
          <div className="grid items-center gap-12 px-6 py-16 sm:px-12 sm:py-20 lg:grid-cols-12 lg:gap-8 lg:px-16 lg:py-24">
            <div className="lg:col-span-7">
              <h3 className="type-h2 max-w-[18ch] text-white">{problem.answer}</h3>
              <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-mint/80">{problem.answerMuted}</p>
            </div>
            <div className="lg:col-span-5">
              <ForkDrawing className="mx-auto max-w-[28rem]" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
