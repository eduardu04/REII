"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, m } from "motion/react";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { photos, steps } from "@/content/home";
import { cn } from "@/lib/utils";

import { StepScreen } from "../mockups/step-screens";

/**
 * 5 · Como funciona. No computador, o ecrã fica preso à direita (sticky) enquanto os passos
 * rolam à esquerda; o passo ao centro do ecrã troca o mini-ecrã. No telemóvel, cada passo traz o seu.
 */
export function HowItWorks() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index));
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="py-24 sm:py-32">
      <div className="shell">
        <SectionHeading index="03" label={steps.label} title={steps.title} />

        <div className="mt-16 grid gap-10 lg:mt-24 lg:grid-cols-12 lg:gap-8">
          <ol className="lg:col-span-5">
            {steps.items.map((step, i) => (
              <li
                key={step.title}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                data-index={i}
                className="border-t border-line py-10 lg:flex lg:min-h-[68vh] lg:flex-col lg:justify-center lg:py-0"
              >
                <Reveal>
                  <span
                    className={cn(
                      "block text-[4.5rem] leading-none font-medium tracking-[-0.06em] tabular transition-colors duration-500 lg:text-[6.5rem]",
                      active === i ? "text-rent" : "text-line lg:text-surface-2",
                    )}
                  >
                    0{i + 1}
                  </span>
                  <h3 className="type-h3 mt-6 text-ink">{step.title}</h3>
                  <p className="mt-3 max-w-sm text-[1rem] leading-relaxed text-ink-2">{step.text}</p>
                </Reveal>
                <div className="mt-8 rounded-2xl bg-surface p-4 sm:p-6 lg:hidden">
                  <StepScreen index={i} />
                </div>
              </li>
            ))}
          </ol>

          <div className="hidden lg:col-span-7 lg:block">
            <div className="sticky top-[14vh] h-[72vh] overflow-hidden rounded-2xl">
              <Image
                src={photos.fachadaAzulejo}
                alt=""
                fill
                placeholder="blur"
                sizes="60vw"
                className="scale-110 object-cover blur-[2px] brightness-[0.92]"
              />
              <div aria-hidden className="absolute inset-0 bg-white/25" />
              <div className="absolute inset-0 grid place-items-center p-10">
                <AnimatePresence mode="wait">
                  <m.div
                    key={active}
                    className="w-full max-w-md"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, transition: { duration: 0.2 } }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <StepScreen index={active} />
                  </m.div>
                </AnimatePresence>
              </div>
              <div className="absolute bottom-6 left-6 flex gap-1.5" aria-hidden>
                {steps.items.map((_, i) => (
                  <span
                    key={i}
                    className={cn("h-1 rounded-full bg-white transition-all duration-500", active === i ? "w-8" : "w-2 opacity-60")}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
