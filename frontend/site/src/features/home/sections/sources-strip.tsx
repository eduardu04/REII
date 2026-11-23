import { Reveal } from "@/components/motion/reveal";
import { sources } from "@/content/home";

/** 2 · De onde vêm os números: sem clientes ainda, as fontes são a prova. */
export function SourcesStrip() {
  return (
    <section aria-label={sources.title} className="border-b border-line bg-white">
      <Reveal className="shell grid gap-10 py-14 lg:grid-cols-12 lg:gap-8 lg:py-16">
        <div className="lg:col-span-4">
          <h2 className="text-[1.15rem] font-semibold tracking-[-0.02em] text-ink">{sources.title}</h2>
          <p className="mt-2 max-w-xs text-[1rem] leading-relaxed text-ink-2">{sources.lead}</p>
        </div>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 lg:col-span-8">
          {sources.items.map((s) => (
            <div key={s.name}>
              <dt className="text-[1.15rem] font-semibold tracking-[-0.02em] text-ink">{s.name}</dt>
              <dd className="mt-2 text-[0.9rem] leading-relaxed text-ink-2">{s.text}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
