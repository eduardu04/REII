import { Reveal } from "@/components/motion/reveal";
import { howHero } from "@/content/how";
import { ScaledScreen } from "@/features/home/mockups/scaled-screen";
import { EstimateScreen } from "@/features/home/mockups/step-screens";

/**
 * 1 · Abertura em verde: a promessa da página, atalhos para cada parte e o ecrã de resultados
 * a sair pela direita, com um cartão que mostra como cada número traz a sua origem.
 */
export function HowHero() {
  return (
    <section
      data-hero-dark
      className="relative isolate overflow-hidden bg-[radial-gradient(110%_80%_at_80%_0%,#145a51_0%,var(--rent-deep)_62%)] pt-36 text-white sm:pt-44"
    >
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-8">
          <Reveal immediate delay={0.15} className="lg:col-span-7">
            <h1 className="type-display max-w-[15ch] text-white">{howHero.title}</h1>
          </Reveal>
          <Reveal immediate delay={0.15} index={2} className="lg:col-span-4 lg:col-start-9 lg:pb-2">
            <p className="text-[1.05rem] leading-relaxed text-white/75">{howHero.lead}</p>
          </Reveal>
        </div>

        <Reveal immediate delay={0.15} index={3}>
          <nav aria-label="Nesta página" className="mt-10 flex flex-wrap gap-2 lg:mt-14">
            {howHero.anchors.map((a) => (
              <a
                key={a.href}
                href={a.href}
                className="rounded-full bg-white/10 px-4 py-2 text-[0.88rem] font-medium text-white/90 ring-1 ring-white/15 transition-colors hover:bg-white/20 focus-visible:ring-white/60 focus-visible:outline-none"
              >
                {a.label}
              </a>
            ))}
          </nav>
        </Reveal>
      </div>

      <div className="shell mt-14 sm:mt-20">
        <Reveal immediate delay={0.3} index={4} y={32} className="relative lg:mr-[-12vw]">
          <div className="overflow-hidden rounded-t-[1.25rem] shadow-[0_-30px_80px_-30px_rgb(0_0_0/0.5)] ring-1 ring-white/10">
            <ScaledScreen viewport={640} cursor>
              <EstimateScreen />
            </ScaledScreen>
          </div>

          {/* A origem de um número, como aparece na app ao passar o rato */}
          <div className="absolute bottom-6 left-4 hidden w-[19rem] rounded-[1.25rem] bg-white p-5 text-ink shadow-[0_30px_60px_-20px_rgb(0_0_0/0.45)] sm:block lg:bottom-10 lg:-left-6">
            <p className="text-[0.8rem] text-ink-2">Renda estimada</p>
            <p className="mt-1 text-[1.6rem] font-semibold tracking-[-0.03em] tabular">1&nbsp;200&nbsp;€/mês</p>
            <dl className="mt-4 space-y-2 rounded-[0.9rem] bg-surface p-3.5 text-[0.82rem]">
              <div className="flex justify-between gap-3">
                <dt className="text-ink-2">Fontes</dt>
                <dd className="font-semibold">Idealista e INE</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-ink-2">Data</dt>
                <dd className="font-semibold">06 mai 2026</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-ink-2">Confiança</dt>
                <dd className="font-semibold text-rent">Alta, 85&nbsp;%</dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
