import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { faq } from "@/content/home";

/** 10 · Perguntas frequentes: responde às objeções antes do botão final. */
export function Faq() {
  return (
    <section className="bg-cream-deep/60 py-20 sm:py-28">
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <SectionHeading eyebrow={faq.eyebrow} title={faq.title} />

        <Reveal index={1}>
          <Accordion className="rounded-2xl bg-card px-5 shadow-card ring-1 ring-line sm:px-7">
            {faq.items.map((item) => (
              <AccordionItem key={item.q} value={item.q} className="border-line">
                <AccordionTrigger className="py-5 font-sans text-base font-medium text-ink hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-base leading-relaxed text-ink-soft">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
