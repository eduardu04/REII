import Image from "next/image";

import { DrawLine, ImageReveal, MaskReveal } from "@/components/motion/editorial";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/shared/button-link";
import { example } from "@/content/home";

/**
 * 8 · Exemplo real, como caso de estudo editorial: a frase da Francisca em grande,
 * as fotografias da casa a revelarem-se e os números-chave numa linha.
 */
export function Example() {
  const [main, ...rest] = example.gallery;

  return (
    <section className="bg-surface py-24 sm:py-32">
      <div className="shell">
        <DrawLine />
        <div className="grid gap-8 pt-8 lg:grid-cols-12 lg:gap-8 lg:pt-10">
          <MaskReveal as="h2" className="type-h2 lg:col-span-8">
            {example.title}
          </MaskReveal>
          <Reveal delay={0.2} className="lg:col-span-4 lg:self-end">
            <p className="text-[1.05rem] leading-relaxed text-ink-2">{example.lead}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-3 lg:mt-20 lg:grid-cols-12">
          <ImageReveal className="aspect-[4/3] rounded-[1.5rem] lg:col-span-8 lg:aspect-auto lg:min-h-[34rem]">
            <Image src={main.image} alt={main.alt} fill placeholder="blur" sizes="(min-width: 1024px) 66vw, 100vw" className="object-cover" />
          </ImageReveal>
          <div className="grid grid-cols-2 gap-3 lg:col-span-4 lg:grid-cols-1">
            {rest.map((g, i) => (
              <ImageReveal key={g.alt} delay={0.15 + i * 0.1} className="aspect-[4/3] rounded-[1.5rem] lg:aspect-auto">
                <Image src={g.image} alt={g.alt} fill placeholder="blur" sizes="(min-width: 1024px) 33vw, 50vw" className="object-cover" />
              </ImageReveal>
            ))}
          </div>
        </div>

        <dl className="mt-12 grid grid-cols-2 gap-x-8 lg:grid-cols-4">
          {example.figures.map((f, i) => (
            <div key={f.label}>
              <DrawLine delay={i * 0.08} />
              <Reveal delay={0.1 + i * 0.08} className="py-6">
                <dt className="text-[0.85rem] text-ink-2">{f.label}</dt>
                <dd className="mt-2 text-[1.7rem] font-semibold tracking-[-0.04em] text-ink tabular sm:text-[2.2rem]">{f.value}</dd>
              </Reveal>
            </div>
          ))}
        </dl>

        <Reveal className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          <ButtonLink href={example.cta.href} size="lg" arrow>
            {example.cta.label}
          </ButtonLink>
          <span className="text-[0.88rem] text-ink-3">Sem criar conta · valores de demonstração</span>
        </Reveal>
      </div>
    </section>
  );
}
