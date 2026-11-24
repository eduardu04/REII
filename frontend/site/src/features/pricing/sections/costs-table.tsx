import { FileText, Home, LineChart, ListChecks, MessageCircle, RefreshCw } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { SectionIntro } from "@/components/shared/section-heading";
import { pricingTable } from "@/content/pricing";

const ICONS = { analysis: Home, scenarios: LineChart, details: ListChecks, pdf: FileText, refresh: RefreshCw, questions: MessageCircle } as const;

/** 3 · Quanto custa cada operação: linhas arredondadas, créditos alinhados à direita. */
export function PricingCostsTable() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="shell">
        <SectionIntro title={pricingTable.title} lead={pricingTable.lead} />

        <div className="mt-14 rounded-[1.75rem] bg-surface p-2 sm:p-3 lg:mt-20">
          <div className="hidden grid-cols-12 gap-4 px-5 pt-3 pb-4 text-[0.8rem] font-medium text-ink-3 sm:grid">
            <span className="col-span-5 pl-14">Operação</span>
            <span className="col-span-5">O que inclui</span>
            <span className="col-span-2 text-right">Créditos</span>
          </div>
          <ul className="space-y-1.5">
            {pricingTable.rows.map((r, i) => {
              const Icon = ICONS[r.id as keyof typeof ICONS];
              return (
                <li key={r.id}>
                  <Reveal index={i} y={10} className="grid grid-cols-12 items-center gap-x-4 gap-y-1 rounded-[1.25rem] bg-white px-5 py-4">
                    <span className="col-span-9 flex items-center gap-4 sm:col-span-5">
                      <span className="grid size-10 shrink-0 place-items-center rounded-[0.8rem] bg-rent-soft text-rent">
                        <Icon aria-hidden className="size-[18px]" />
                      </span>
                      <span className="text-[1rem] font-semibold">{r.name}</span>
                    </span>
                    <span className="col-span-3 text-right text-[1.3rem] font-semibold tracking-[-0.02em] tabular sm:order-last sm:col-span-2">
                      {r.credits === 0 ? <span className="text-[0.95rem] text-rent">Grátis</span> : r.credits}
                    </span>
                    <span className="col-span-12 pl-14 text-[0.92rem] text-ink-2 sm:col-span-5 sm:pl-0">{r.includes}</span>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
