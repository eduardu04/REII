import Image from "next/image";

import { ImageReveal } from "@/components/motion/editorial";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/shared/button-link";
import { example } from "@/content/home";

/**
 * 8 · Exemplo real, como caso de estudo: a frase da Francisca em grande,
 * as fotografias da casa e os números-chave num painel.
 */
export function Example() {
  const [main, ...rest] = example.gallery;

  return (
    <section className="bg-surface py-24 sm:py-32">
      <div className="shell">
        <Reveal className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-8">
          <h2 className="type-h2 lg:col-span-8">{example.title}</h2>
          <p className="text-[1.05rem] leading-relaxed text-ink-2 lg:col-span-4">{example.lead}</p>
        </Reveal>

        <div className="mt-14 grid gap-3 lg:mt-20 lg:grid-cols-12">
          <ImageReveal className="aspect-[4/3] rounded-[1.75rem] lg:col-span-8 lg:aspect-auto lg:min-h-[34rem]">
            <Image src={main.image} alt={main.alt} fill placeholder="blur" sizes="(min-width: 1024px) 66vw, 100vw" className="object-cover" />
          </ImageReveal>
          <div className="grid grid-cols-2 gap-3 lg:col-span-4 lg:grid-cols-1">
            {rest.map((g, i) => (
              <ImageReveal key={g.alt} delay={0.1 + i * 0.1} className="aspect-[4/3] rounded-[1.75rem] lg:aspect-auto">
                <Image src={g.image} alt={g.alt} fill placeholder="blur" sizes="(min-width: 1024px) 33vw, 50vw" className="object-cover" />
              </ImageReveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-3 rounded-[1.75rem] bg-white p-7 sm:p-10">
          <dl className="grid grid-cols-2 gap-x-8 gap-y-8 lg:grid-cols-4">
            {example.figures.map((f) => (
              <div key={f.label}>
                <dt className="text-[0.85rem] text-ink-2">{f.label}</dt>
                <dd className="mt-2 text-[1.6rem] font-semibold tracking-[-0.04em] text-ink tabular sm:text-[2.1rem]">{f.value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            <ButtonLink href={example.cta.href} size="lg" arrow>
              {example.cta.label}
            </ButtonLink>
            <span className="text-[0.88rem] text-ink-3">Sem criar conta · valores de demonstração</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
