"use client";

import { Accordion } from "@base-ui/react/accordion";
import { Plus } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { SectionLabel } from "@/components/shared/section-heading";
import { faq } from "@/content/home";

/** 10 · Perguntas frequentes: linhas finas, "+" que roda para "×". */
export function Faq() {
  return (
    <section className="py-24 sm:py-32">
      <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-3">
          <Reveal>
            <SectionLabel index="08">{faq.label}</SectionLabel>
          </Reveal>
        </div>
        <div className="lg:col-span-9">
          <Reveal>
            <h2 className="type-h2 text-ink">{faq.title}</h2>
          </Reveal>
          <Reveal index={1} className="mt-12">
            <Accordion.Root className="border-t border-line">
              {faq.items.map((item) => (
                <Accordion.Item key={item.q} value={item.q} className="border-b border-line">
                  <Accordion.Header>
                    <Accordion.Trigger className="group flex w-full items-center justify-between gap-6 py-6 text-left focus-visible:outline-2 focus-visible:outline-offset-4">
                      <span className="text-[1.15rem] font-medium tracking-[-0.02em] text-ink sm:text-[1.3rem]">{item.q}</span>
                      <span className="grid size-9 shrink-0 place-items-center rounded-full ring-1 ring-line transition-colors group-hover:bg-surface">
                        <Plus
                          aria-hidden
                          className="size-4 text-ink transition-transform duration-500 ease-out-soft group-data-[panel-open]:rotate-45"
                        />
                      </span>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Panel className="h-(--accordion-panel-height) overflow-hidden transition-[height] duration-500 ease-out-soft data-[ending-style]:h-0 data-[starting-style]:h-0">
                    <p className="max-w-2xl pb-7 text-[1rem] leading-relaxed text-ink-2">{item.a}</p>
                  </Accordion.Panel>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
