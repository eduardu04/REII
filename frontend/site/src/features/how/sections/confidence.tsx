import { Reveal } from "@/components/motion/reveal";
import { SectionIntro } from "@/components/shared/section-heading";
import { howConfidence as c } from "@/content/how";
import { cn } from "@/lib/utils";

function Level({ filled, label }: { filled: number; label: string }) {
  return (
    <p className="flex items-center gap-3 text-[0.92rem]">
      <span aria-hidden className="flex gap-1">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} className={cn("h-2.5 w-5 rounded-full", i < filled ? (filled === 1 ? "bg-sell" : "bg-rent") : "bg-surface-2")} />
        ))}
      </span>
      {label}
    </p>
  );
}

/** 8 · Os limites: o que pesa na confiança de cada estimativa e o que fica fora das contas. */
export function HowConfidence() {
  return (
    <section id="limites" className="scroll-mt-24 bg-surface py-24 sm:py-32">
      <div className="shell">
        <SectionIntro title={c.title} lead={c.lead} />

        <div className="mt-14 grid gap-3 lg:mt-20 lg:grid-cols-12">
          <ol className="grid gap-3 sm:grid-cols-3 lg:col-span-8">
            {c.factors.map((f, i) => (
              <li key={f.title}>
                <Reveal index={i} className="flex h-full flex-col rounded-[1.75rem] bg-white p-7">
                  <span className="text-[0.85rem] font-semibold text-rent tabular">0{i + 1}</span>
                  <span className="mt-8 text-[1.2rem] leading-snug font-semibold tracking-[-0.02em]">{f.title}</span>
                  <span className="mt-2 text-[0.95rem] leading-relaxed text-ink-2">{f.text}</span>
                </Reveal>
              </li>
            ))}
          </ol>
          <Reveal index={3} className="flex flex-col justify-between rounded-[1.75rem] bg-white p-7 lg:col-span-4">
            <p className="text-[1.05rem] font-semibold">Nível de confiança</p>
            <div className="mt-6 space-y-4">
              {c.levels.map((l) => (
                <Level key={l.label} {...l} />
              ))}
            </div>
            <p className="mt-6 text-[0.85rem] leading-relaxed text-ink-2">Com confiança baixa, a análise mostra um aviso e diz porquê.</p>
          </Reveal>
        </div>

        <Reveal className="mt-3 rounded-[1.75rem] bg-white p-7 sm:p-10">
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <p className="text-[1.6rem] leading-tight font-semibold tracking-[-0.03em]">{c.excluded.title}</p>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-ink-2">{c.excluded.lead}</p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
              {c.excluded.items.map((it) => (
                <li key={it.title} className="rounded-[1.25rem] bg-surface p-6">
                  <p className="text-[1.05rem] font-semibold">{it.title}</p>
                  <p className="mt-1.5 text-[0.93rem] leading-relaxed text-ink-2">{it.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
