import { Reveal } from "@/components/motion/reveal";
import { SectionIntro } from "@/components/shared/section-heading";
import { audienceNotFor } from "@/content/audience";

/** Quando o REII não é a resposta: dito antes de a pessoa pagar. */
export function AudienceNotFor() {
  return (
    <section className="bg-rent-deep py-24 text-white sm:py-32">
      <div className="shell">
        <SectionIntro tone="light" title={audienceNotFor.title} lead={audienceNotFor.lead} />
        <ul className="mt-14 grid gap-3 md:grid-cols-3 lg:mt-20">
          {audienceNotFor.items.map((it, i) => (
            <li key={it.title}>
              <Reveal index={i} className="h-full rounded-[1.75rem] bg-white/[0.06] p-7 ring-1 ring-white/10 sm:p-8">
                <p className="text-[1.25rem] leading-snug font-semibold tracking-[-0.02em]">{it.title}</p>
                <p className="mt-3 text-[1rem] leading-relaxed text-white/70">{it.text}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
