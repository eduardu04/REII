import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { ai } from "@/content/home";

import { AiChat } from "../mockups/ai-chat";

/** 7 · IA que explica. Secção escura (o único contraste forte da página antes do fecho). */
export function AiExplains() {
  return (
    <section className="bg-rent-deep py-24 text-white sm:py-32">
      <div className="shell">
        <SectionHeading index="05" label={ai.label} title={ai.title} lead={ai.lead} tone="light" />

        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-8">
          <ul className="border-t border-white/15 lg:col-span-4 lg:col-start-4 lg:self-end">
            {ai.points.map((point, i) => (
              <li key={point} className="border-b border-white/15">
                <Reveal index={i} className="flex items-baseline gap-4 py-5">
                  <span className="text-[0.8rem] font-semibold text-mint tabular">0{i + 1}</span>
                  <span className="text-[1.05rem] font-medium tracking-[-0.015em] text-white/90">{point}</span>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal y={48} className="lg:col-span-5">
            <AiChat />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
