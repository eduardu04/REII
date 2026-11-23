import { ForkDrawing } from "@/components/brand/fork-drawing";
import { DrawLine, MaskReveal } from "@/components/motion/editorial";
import { Reveal } from "@/components/motion/reveal";
import { SectionIntro } from "@/components/shared/section-heading";
import { problem } from "@/content/home";

/**
 * 2 · O problema. As três vozes em linhas editoriais (quem / o que diz / o que não diz),
 * e a resposta do REII num painel verde com a bifurcação a desenhar-se.
 */
export function Problem() {
  return (
    <section className="bg-white pt-24 pb-6 sm:pt-32">
      <div className="shell">
        <SectionIntro title={problem.title} lead={problem.lead} />

        <ul className="mt-16 lg:mt-24">
          {problem.voices.map((v, i) => (
            <li key={v.who}>
              <DrawLine delay={i * 0.1} />
              <div className="grid gap-3 py-8 lg:grid-cols-12 lg:items-baseline lg:gap-8 lg:py-10">
                <Reveal delay={0.1 + i * 0.1} className="lg:col-span-3">
                  <p className="text-[0.9rem] font-semibold text-ink-3">{v.who}</p>
                </Reveal>
                <MaskReveal delay={0.15 + i * 0.1} className="lg:col-span-6">
                  <p className="text-[1.6rem] leading-[1.2] font-medium tracking-[-0.03em] text-ink sm:text-[2.1rem]">{v.says}</p>
                </MaskReveal>
                <Reveal delay={0.3 + i * 0.1} className="lg:col-span-3">
                  <p className="text-[0.95rem] leading-relaxed text-ink-2">{v.note}</p>
                </Reveal>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="px-3 sm:px-5">
        <div className="mx-auto mt-10 max-w-[90rem] overflow-hidden rounded-[2rem] bg-rent-deep text-white">
          <div className="grid items-center gap-12 px-6 py-16 sm:px-12 sm:py-20 lg:grid-cols-12 lg:gap-8 lg:px-16 lg:py-24">
            <div className="lg:col-span-7">
              <MaskReveal as="h3" className="type-h2 max-w-[18ch] text-white">
                {problem.answer}
              </MaskReveal>
              <Reveal delay={0.3}>
                <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-mint/80">{problem.answerMuted}</p>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <ForkDrawing className="mx-auto max-w-[28rem]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
