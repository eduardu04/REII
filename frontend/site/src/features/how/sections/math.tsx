import { Reveal } from "@/components/motion/reveal";
import { SectionIntro } from "@/components/shared/section-heading";
import { howMath } from "@/content/how";
import { ScaledScreen } from "@/features/home/mockups/scaled-screen";
import { CalculationsScreen } from "@/features/home/mockups/step-screens";

/** 4 · As contas: os quatro indicadores explicados e o ecrã de cálculos financeiros da app. */
export function HowMath() {
  return (
    <section id="contas" className="scroll-mt-24 bg-white py-24 sm:py-32">
      <div className="shell">
        <SectionIntro title={howMath.title} lead={howMath.lead} />

        <ul className="mt-14 grid gap-3 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {howMath.items.map((it, i) => (
            <li key={it.label}>
              <Reveal index={i} className="flex h-full flex-col rounded-[1.75rem] bg-surface p-7">
                <p className="text-[2.4rem] leading-none font-semibold tracking-[-0.05em] whitespace-nowrap text-ink tabular">
                  {it.value}
                  {it.unit && <span className="ml-1.5 text-[1rem] font-medium tracking-normal text-ink-2">{it.unit}</span>}
                </p>
                <p className="mt-6 text-[1.05rem] font-semibold">
                  {it.label} {it.tech && <span className="font-medium text-ink-3">{it.tech}</span>}
                </p>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-2">{it.text}</p>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-[0.85rem] text-ink-3">{howMath.note}</p>

        <Reveal className="mt-10 rounded-[1.75rem] bg-[radial-gradient(120%_90%_at_50%_0%,#145a51_0%,var(--rent-deep)_70%)] p-3 sm:p-8">
          <div className="overflow-hidden rounded-[1rem] shadow-[0_40px_80px_-30px_rgb(0_0_0/0.55)] ring-1 ring-black/10">
            <ScaledScreen viewport={860}>
              <CalculationsScreen />
            </ScaledScreen>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
