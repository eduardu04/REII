"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, m } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import { DrawLine, MaskReveal } from "@/components/motion/editorial";
import { siteConfig } from "@/config/site";
import { audience } from "@/content/home";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * 3 · Para quem é. Lista tipográfica grande; a situação ativa abre o texto e a fotografia
 * troca ao lado (no telemóvel aparece dentro da própria linha). Ativa com rato, foco ou toque.
 */
export function Audience() {
  const [active, setActive] = useState(0);
  const item = audience.items[active];

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="shell">
        <DrawLine />
        <MaskReveal as="h2" className="type-h2 max-w-[20ch] pt-8 text-ink lg:pt-10">
          {audience.title}
        </MaskReveal>

        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-8">
          <ul className="lg:col-span-7">
            {audience.items.map((it, i) => {
              const on = i === active;
              return (
                <li key={it.title} className="border-t border-line last:border-b">
                  <button
                    type="button"
                    aria-expanded={on}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className="group flex w-full items-baseline gap-5 py-7 text-left sm:gap-8"
                  >
                    <span className={cn("w-6 text-[0.85rem] font-semibold tabular transition-colors duration-500", on ? "text-rent" : "text-ink-3")}>
                      0{i + 1}
                    </span>
                    <span className="flex-1">
                      <span
                        className={cn(
                          "block text-[1.75rem] leading-[1.1] font-semibold tracking-[-0.035em] transition-colors duration-500 sm:text-[2.6rem]",
                          on ? "text-ink" : "text-ink/25 group-hover:text-ink/50",
                        )}
                      >
                        {it.title}
                      </span>
                      <span
                        className={cn(
                          "grid transition-[grid-template-rows,opacity] duration-700 ease-out-soft",
                          on ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                        )}
                      >
                        <span className="overflow-hidden">
                          <span className="block max-w-lg pt-4 text-[1rem] leading-relaxed text-ink-2">{it.text}</span>
                          <span className="relative mt-5 block aspect-[4/3] overflow-hidden rounded-2xl lg:hidden">
                            <Image src={it.image} alt={it.alt} fill placeholder="blur" sizes="100vw" className="object-cover" />
                          </span>
                        </span>
                      </span>
                    </span>
                    <ArrowUpRight
                      aria-hidden
                      className={cn("size-5 shrink-0 self-center transition-all duration-500", on ? "text-rent opacity-100" : "opacity-0")}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-28">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-surface">
                <AnimatePresence initial={false}>
                  <m.div
                    key={item.title}
                    className="absolute inset-0"
                    initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
                    animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                    exit={{ opacity: 0, transition: { duration: 0.6, delay: 0.3 } }}
                    transition={{ duration: 0.9, ease: EASE }}
                  >
                    <m.div
                      className="absolute inset-0"
                      initial={{ scale: 1.12 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1.4, ease: EASE }}
                    >
                      <Image src={item.image} alt={item.alt} fill placeholder="blur" sizes="40vw" className="object-cover" />
                    </m.div>
                  </m.div>
                </AnimatePresence>
              </div>
              <a
                href={siteConfig.appUrl}
                className="mt-5 inline-flex items-center gap-2 text-[0.95rem] font-semibold text-rent"
              >
                Começar com esta situação
                <ArrowUpRight aria-hidden className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
