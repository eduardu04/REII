import { Check } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { ai } from "@/content/home";

import { AiChat } from "../mockups/ai-chat";

/** 7 · IA que explica: explicadora, não oráculo. */
export function AiExplains() {
  return (
    <section className="bg-cream-deep/60 py-20 sm:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading eyebrow={ai.eyebrow} title={ai.title} lead={ai.lead} />
          <ul className="mt-8 space-y-3">
            {ai.points.map((point, i) => (
              <li key={point}>
                <Reveal index={i + 3} className="flex items-center gap-3 text-base text-ink">
                  <span className="grid size-6 place-items-center rounded-full bg-rent text-white">
                    <Check aria-hidden className="size-3.5" />
                  </span>
                  {point}
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        <Reveal y={40}>
          <AiChat />
        </Reveal>
      </div>
    </section>
  );
}
