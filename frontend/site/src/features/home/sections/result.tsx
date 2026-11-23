import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { result } from "@/content/home";

import { ResultsScreen } from "../mockups/results-screen";

/** 6 · O resultado: o momento "quero isto para a minha casa". */
export function Result() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading eyebrow={result.eyebrow} title={result.title} lead={result.lead} />

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
          <Reveal y={40}>
            <ResultsScreen />
          </Reveal>

          <ol className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1 lg:gap-8 lg:pt-6">
            {result.notes.map((note, i) => (
              <li key={note.title}>
                <Reveal index={i + 1} className="border-t border-line pt-4">
                  <span className="font-heading text-sm text-rent tabular">{String(i + 1).padStart(2, "0")}</span>
                  <p className="mt-2 text-base font-medium text-ink">{note.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{note.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
