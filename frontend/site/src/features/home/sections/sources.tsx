import { DrawLine, MaskReveal } from "@/components/motion/editorial";
import { Reveal } from "@/components/motion/reveal";
import { sources } from "@/content/home";

/**
 * 7 · De onde vêm os números. As fontes em tipografia grande (na escala do rodapé),
 * cada uma com o que fornece; as linhas desenham-se e os nomes sobem por trás da máscara.
 */
export function Sources() {
  return (
    <section className="bg-white pb-24 sm:pb-32">
      <div className="shell">
        <div className="grid gap-6 pb-12 lg:grid-cols-12 lg:gap-8 lg:pb-16">
          <MaskReveal as="h2" className="type-h2 text-ink lg:col-span-7">
            {sources.title}
          </MaskReveal>
          <Reveal delay={0.2} className="lg:col-span-4 lg:col-start-9 lg:self-end">
            <p className="text-[1.05rem] leading-relaxed text-ink-2">{sources.lead}</p>
          </Reveal>
        </div>

        <ul>
          {sources.items.map((s, i) => (
            <li key={s.name}>
              <DrawLine delay={i * 0.08} />
              <div className="grid gap-2 py-6 sm:py-8 lg:grid-cols-12 lg:items-center lg:gap-8">
                <MaskReveal delay={0.1 + i * 0.08} className="lg:col-span-8">
                  <span className="block text-[3rem] leading-none font-semibold tracking-[-0.055em] text-ink sm:text-[4.5rem] lg:text-[6rem]">
                    {s.name}
                  </span>
                </MaskReveal>
                <Reveal delay={0.25 + i * 0.08} className="lg:col-span-4">
                  <p className="max-w-xs text-[1rem] leading-relaxed text-ink-2">{s.text}</p>
                </Reveal>
              </div>
            </li>
          ))}
        </ul>
        <DrawLine />
      </div>
    </section>
  );
}
