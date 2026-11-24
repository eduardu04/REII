"use client";

import { Accordion } from "@base-ui/react/accordion";
import { ChevronDown } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { faq as homeFaq } from "@/content/home";
import { cn } from "@/lib/utils";

type FaqData = { title: string; lead: string; email: string; items: { q: string; a: string }[] };

/** Perguntas frequentes. Por omissão as do Início; a página Preços passa as suas. */
export function Faq({ data: faq = homeFaq, className }: { data?: FaqData; className?: string }) {
  return (
    <section className={cn("bg-white py-24 sm:py-32", className)}>
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-4">
          <h2 className="type-h2 max-w-[10ch] text-ink">{faq.title}</h2>
          <p className="type-lead mt-6 text-ink-2">
            {faq.lead}{" "}
            <a href={`mailto:${faq.email}`} className="font-semibold text-rent hover:underline">
              {faq.email}
            </a>
          </p>
        </Reveal>

        <Reveal index={1} className="lg:col-span-7 lg:col-start-6">
          <Accordion.Root className="space-y-2" defaultValue={[faq.items[0].q]}>
            {faq.items.map((item) => (
              <Accordion.Item key={item.q} value={item.q} className="rounded-[1.25rem] bg-surface px-6">
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-6 py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rent">
                    <span className="text-[1.1rem] font-semibold tracking-[-0.02em] text-ink sm:text-[1.2rem]">{item.q}</span>
                    <ChevronDown
                      aria-hidden
                      className="size-5 shrink-0 text-ink transition-transform duration-300 group-data-[panel-open]:rotate-180"
                    />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Panel className="h-(--accordion-panel-height) overflow-hidden transition-[height] duration-300 ease-out-soft data-[ending-style]:h-0 data-[starting-style]:h-0">
                  <p className="max-w-2xl pb-5 text-[1rem] leading-relaxed text-ink-2">{item.a}</p>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Reveal>
      </div>
    </section>
  );
}
