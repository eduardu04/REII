import { Megaphone, Newspaper, UserRound } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { problem } from "@/content/home";

const icons = [Megaphone, UserRound, Newspaper];

/** 3 · O problema: o visitante reconhece-se antes de ouvir a solução. */
export function Problem() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading eyebrow={problem.eyebrow} title={problem.title} scrollTitle />

        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {problem.cards.map((card, i) => {
            const Icon = icons[i];
            return (
              <li key={card.who} className="h-full">
                <Reveal index={i} className="flex h-full flex-col rounded-2xl bg-card p-6 shadow-card ring-1 ring-line">
                  <div className="flex items-center gap-2.5">
                    <span className="grid size-8 place-items-center rounded-lg bg-cream ring-1 ring-line">
                      <Icon aria-hidden className="size-4 text-ink-soft" />
                    </span>
                    <p className="text-sm font-medium text-ink">{card.who}</p>
                  </div>
                  <p className="mt-5 font-heading text-xl leading-snug text-ink">{card.says}</p>
                  <p className="mt-auto pt-6 text-sm text-ink-soft">{card.catch}</p>
                </Reveal>
              </li>
            );
          })}
        </ul>

        <Reveal className="mt-10 flex items-start gap-3 rounded-2xl border border-rent/20 bg-rent-soft px-5 py-4 sm:items-center">
          <span aria-hidden className="mt-1 h-4 w-1 shrink-0 rounded-full bg-rent sm:mt-0" />
          <p className="text-base text-ink sm:text-lg">{problem.answer}</p>
        </Reveal>
      </div>
    </section>
  );
}
