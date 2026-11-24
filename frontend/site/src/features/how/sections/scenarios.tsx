import { Reveal } from "@/components/motion/reveal";
import { SectionIntro } from "@/components/shared/section-heading";
import { howScenarios } from "@/content/how";
import { formatEuro } from "@/lib/format";

const MIN = 300_000;
const MAX = 400_000;
const TODAY = 320_000;
const pct = (v: number) => `${((v - MIN) / (MAX - MIN)) * 100}%`;

/** 5 · Três cenários: cada um explicado e, ao lado, onde fica o valor do imóvel em cada um. */
export function HowScenarios() {
  return (
    <section className="bg-surface py-24 sm:py-32">
      <div className="shell">
        <SectionIntro title={howScenarios.title} lead={howScenarios.lead} />

        <div className="mt-14 grid gap-3 lg:mt-20 lg:grid-cols-12">
          <ul className="grid gap-3 lg:col-span-5">
            {howScenarios.items.map((s, i) => (
              <li key={s.name}>
                <Reveal index={i} className="flex h-full gap-5 rounded-[1.75rem] bg-white p-7">
                  <span aria-hidden className="mt-1.5 size-3.5 shrink-0 rounded-[4px]" style={{ background: s.color }} />
                  <span>
                    <span className="block text-[1.3rem] font-semibold tracking-[-0.02em]">{s.name}</span>
                    <span className="mt-1.5 block text-[0.98rem] leading-relaxed text-ink-2">{s.text}</span>
                  </span>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal index={1} className="flex flex-col rounded-[1.75rem] bg-white p-7 sm:p-10 lg:col-span-7">
            <p className="text-[1.15rem] font-semibold">{howScenarios.chartTitle}</p>
            <div className="mt-10 flex-1 space-y-7">
              {howScenarios.items.map((s) => (
                <div key={s.name}>
                  <p className="flex items-baseline justify-between gap-4 text-[0.92rem]">
                    <span className="text-ink-2">{s.name}</span>
                    <span className="text-[1.5rem] font-semibold tracking-[-0.03em] tabular sm:text-[1.9rem]">{formatEuro(s.value)}</span>
                  </p>
                  <div className="relative mt-3 h-4 rounded-full bg-surface">
                    <div className="absolute inset-y-0 left-0 rounded-full" style={{ width: pct(s.value), background: s.color }} />
                    <span aria-hidden className="absolute -inset-y-1.5 w-[3px] rounded-full bg-ink" style={{ left: pct(TODAY) }} />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-10 flex items-center gap-2.5 text-[0.85rem] text-ink-2">
              <span aria-hidden className="h-4 w-[3px] rounded-full bg-ink" /> {howScenarios.chartNote}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
