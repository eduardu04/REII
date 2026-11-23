import { ArrowRight, Building2, DoorClosed, KeyRound, Palmtree } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { siteConfig } from "@/config/site";
import { audience } from "@/content/home";

const icons = { heir: KeyRound, second: Palmtree, empty: DoorClosed, investor: Building2 } as const;

/** 4 · Para quem é: espelha o onboarding da app. Cada pessoa encontra a sua situação. */
export function Audience() {
  return (
    <section className="bg-cream-deep/60 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading eyebrow={audience.eyebrow} title={audience.title} />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {audience.items.map((item, i) => {
            const Icon = icons[item.key];
            return (
              <li key={item.key} className="h-full">
                <Reveal index={i} className="h-full">
                  <a
                    href={siteConfig.appUrl}
                    className="group flex h-full flex-col rounded-2xl bg-card p-6 shadow-card ring-1 ring-line transition-[transform,box-shadow] duration-300 ease-editorial hover:-translate-y-1 hover:shadow-lift focus-visible:ring-3 focus-visible:ring-rent/30 focus-visible:outline-none"
                  >
                    <span className="grid size-10 place-items-center rounded-xl bg-rent-soft text-rent">
                      <Icon aria-hidden className="size-5" />
                    </span>
                    <p className="mt-6 text-base font-medium text-ink">{item.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.question}</p>
                    <span className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-medium text-rent">
                      Começar por aqui
                      <ArrowRight aria-hidden className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </span>
                  </a>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
