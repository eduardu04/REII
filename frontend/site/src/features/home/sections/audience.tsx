"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, m } from "motion/react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/config/site";
import { audience } from "@/content/home";
import { cn } from "@/lib/utils";

/**
 * 3 · Para quem é. Lista tipográfica grande; a situação ativa ganha um painel suave e abre o
 * texto, e a fotografia ao lado troca com um fade (no telemóvel aparece dentro da linha).
 */
export function Audience() {
  const [active, setActive] = useState(0);
  const item = audience.items[active];

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="shell">
        <Reveal>
          <h2 className="type-h2 max-w-[20ch] text-ink">{audience.title}</h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-7">
            <ul className="space-y-2">
              {audience.items.map((it, i) => {
                const on = i === active;
                return (
                  <li key={it.title}>
                    <button
                      type="button"
                      aria-expanded={on}
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => setActive(i)}
                      className={cn(
                        "group flex w-full items-baseline gap-5 rounded-[1.5rem] px-5 py-6 text-left transition-colors duration-500 sm:gap-7 sm:px-7",
                        on ? "bg-surface" : "hover:bg-surface/60",
                      )}
                    >
                      <span
                        className={cn("w-6 text-[0.85rem] font-semibold tabular transition-colors duration-500", on ? "text-rent" : "text-ink-3")}
                      >
                        0{i + 1}
                      </span>
                      <span className="flex-1">
                        <span
                          className={cn(
                            "block text-[1.6rem] leading-[1.1] font-semibold tracking-[-0.035em] transition-colors duration-500 sm:text-[2.3rem]",
                            on ? "text-ink" : "text-ink/30 group-hover:text-ink/55",
                          )}
                        >
                          {it.title}
                        </span>
                        <span
                          className={cn(
                            "grid transition-[grid-template-rows,opacity] duration-500 ease-out-soft",
                            on ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                          )}
                        >
                          <span className="overflow-hidden">
                            <span className="block max-w-lg pt-3 text-[1rem] leading-relaxed text-ink-2">{it.text}</span>
                            <span className="relative mt-5 block aspect-[4/3] overflow-hidden rounded-2xl lg:hidden">
                              <Image src={it.image} alt={it.alt} fill placeholder="blur" sizes="100vw" className="object-cover" />
                            </span>
                          </span>
                        </span>
                      </span>
                      <ArrowUpRight
                        aria-hidden
                        className={cn("size-5 shrink-0 self-center transition-opacity duration-500", on ? "text-rent opacity-100" : "opacity-0")}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
            <Link href="/para-quem" className="mt-6 ml-5 inline-flex items-center gap-2 text-[0.98rem] font-semibold text-rent hover:underline">
              Ver o que o REII mostra em cada situação <ArrowRight aria-hidden className="size-4" />
            </Link>
          </Reveal>

          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-28">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-surface">
                <AnimatePresence initial={false}>
                  <m.div
                    key={item.title}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.7, 0, 0.3, 1] }}
                  >
                    <Image src={item.image} alt={item.alt} fill placeholder="blur" sizes="40vw" className="object-cover" />
                  </m.div>
                </AnimatePresence>
              </div>
              <a href={siteConfig.appUrl} className="mt-5 inline-flex items-center gap-2 text-[0.95rem] font-semibold text-rent">
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
