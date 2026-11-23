import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { result } from "@/content/home";

import { ResultsScreen } from "../mockups/results-screen";

/** 6 · O resultado: o ecrã de Resultados em grande, sobre um painel cinzento, com três notas. */
export function Result() {
  return (
    <section className="py-24 sm:py-32">
      <div className="shell">
        <SectionHeading index="04" label={result.label} title={result.title} lead={result.lead} />

        <Reveal y={60} className="mt-14 rounded-[1.75rem] bg-surface px-3 pt-3 sm:px-10 sm:pt-12 lg:mt-20 lg:px-24 lg:pt-20">
          <div className="mx-auto max-w-4xl translate-y-0">
            <ResultsScreen />
          </div>
          <div className="h-3 sm:h-12 lg:h-20" />
        </Reveal>

        <ol className="mt-10 grid border-t border-line sm:grid-cols-3">
          {result.notes.map((note, i) => (
            <li key={note.title} className="border-b border-line sm:border-b-0 sm:not-first:border-l sm:not-first:pl-8 sm:not-last:pr-8">
              <Reveal index={i} className="py-7">
                <span className="text-[0.8rem] font-semibold text-ink tabular">0{i + 1}</span>
                <p className="mt-3 text-[1.1rem] font-medium tracking-[-0.02em] text-ink">{note.title}</p>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-2">{note.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
