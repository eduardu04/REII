import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/shared/button-link";
import { DemoBadge } from "@/components/shared/demo-badge";
import { SectionHeading } from "@/components/shared/section-heading";
import { demo, example } from "@/content/home";
import { formatEuro, formatEuroMonth } from "@/lib/format";
import { cn } from "@/lib/utils";

/** 9 · Exemplo T2 Coimbra: galeria do imóvel e os números-chave, sem pedir registo. */
export function Example() {
  const figures = [
    { label: "Valor hoje", value: formatEuro(demo.valueToday), tone: "text-ink" },
    { label: "Vender, a 5 anos", value: formatEuro(demo.sell.value), tone: "text-sell" },
    { label: "Arrendar", value: formatEuroMonth(demo.rent.monthly), tone: "text-rent" },
    { label: "Ponto de viragem", value: formatEuroMonth(demo.turningPoint), tone: "text-ink" },
  ];

  return (
    <section className="bg-surface py-24 sm:py-32">
      <div className="shell">
        <SectionHeading index="07" label={example.label} title={example.title} />

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:mt-20 lg:grid-cols-12 lg:grid-rows-2">
          {example.gallery.map((g, i) => (
            <Reveal
              key={g.caption}
              index={i}
              y={40}
              className={cn(
                "group relative overflow-hidden rounded-2xl",
                i === 0 ? "aspect-[4/3] sm:col-span-2 lg:col-span-7 lg:row-span-2 lg:aspect-auto" : "aspect-[4/3] lg:col-span-5 lg:aspect-[16/9]",
              )}
            >
              <Image
                src={g.image}
                alt={g.alt}
                fill
                placeholder="blur"
                sizes={i === 0 ? "(min-width: 1024px) 58vw, 100vw" : "(min-width: 1024px) 40vw, 50vw"}
                className="object-cover transition-transform duration-[1.2s] ease-out-soft group-hover:scale-[1.03]"
              />
              <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[0.75rem] font-medium text-ink backdrop-blur">
                {g.caption}
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-3 rounded-2xl bg-white p-6 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-5">
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-[1rem] font-semibold tracking-[-0.01em] text-ink">{demo.property.title}</p>
                <DemoBadge />
              </div>
              <p className="mt-1 text-[0.9rem] text-ink-2">{demo.property.details}</p>
              <blockquote className="mt-6 text-[1.5rem] leading-[1.2] font-medium tracking-[-0.03em] text-ink sm:text-[1.9rem]">
                “{demo.property.question}”
              </blockquote>
            </div>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4 lg:col-span-7">
              {figures.map((f) => (
                <div key={f.label} className="border-t border-line pt-4">
                  <dt className="text-[0.8rem] text-ink-2">{f.label}</dt>
                  <dd className={cn("mt-2 text-[1.25rem] font-semibold tracking-[-0.03em] tabular", f.tone)}>{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-line pt-6">
            <ButtonLink href={example.cta.href} arrow>
              {example.cta.label}
            </ButtonLink>
            <span className="text-[0.9rem] text-ink-2">Sem registo · Sem cartão</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
