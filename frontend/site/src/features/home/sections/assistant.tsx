import { ArrowRight, Check, X } from "lucide-react";

import { Logo } from "@/components/brand/logo";
import { Reveal } from "@/components/motion/reveal";
import { assistant, demo } from "@/content/home";

/** 7 · O assistente: explica e cita fontes; não decide. Conversa estática, como no mockup. */
export function Assistant() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="shell grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-5">
          <h2 className="type-h2 max-w-[12ch] text-ink">{assistant.title}</h2>
          <p className="type-lead mt-6 max-w-md text-ink-2">{assistant.lead}</p>
          <ul className="mt-9 space-y-3.5">
            {assistant.points.map((p) => (
              <li key={p.text} className="flex items-start gap-3 text-[1rem] text-ink">
                {p.ok ? (
                  <Check aria-hidden className="mt-0.5 size-4.5 shrink-0 text-rent" strokeWidth={2.5} />
                ) : (
                  <X aria-hidden className="mt-0.5 size-4.5 shrink-0 text-sell" strokeWidth={2.5} />
                )}
                {p.text}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal index={1} y={28} className="lg:col-span-6 lg:col-start-7">
          <div className="rounded-[1.5rem] bg-white p-5 shadow-[0_30px_60px_-30px_rgb(15_26_24/0.35)] ring-1 ring-line sm:p-7">
            <div className="flex items-center gap-3 border-b border-line pb-5">
              <span className="grid size-10 place-items-center rounded-xl bg-rent text-white">
                <Logo className="h-[0.55rem]" />
              </span>
              <div>
                <p className="text-[0.95rem] font-semibold text-ink">Assistente REII</p>
                <p className="text-[0.8rem] text-ink-2">Sobre a análise do {demo.property.title.replace(", Coimbra", "")}</p>
              </div>
            </div>

            <div className="space-y-4 pt-5">
              {assistant.conversation.map((turn) => (
                <div key={turn.q} className="space-y-4">
                  <p className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md bg-rent px-4 py-3 text-[0.9rem] text-white">
                    {turn.q}
                  </p>
                  <div className="max-w-[88%] rounded-2xl rounded-bl-md bg-surface px-4 py-3.5">
                    <p className="text-[0.9rem] leading-relaxed text-ink">{turn.a}</p>
                    {turn.source ? <p className="mt-2.5 text-[0.75rem] text-ink-3">{turn.source}</p> : null}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {assistant.suggestions.map((s) => (
                <span key={s} className="rounded-full px-3.5 py-2 text-[0.8rem] font-medium text-rent ring-1 ring-line">
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between rounded-xl px-4 py-3.5 text-[0.9rem] text-ink-3 ring-1 ring-line">
              Escreva a sua pergunta
              <ArrowRight aria-hidden className="size-4 text-ink" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
