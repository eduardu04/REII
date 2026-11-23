import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/config/site";

/** 2 · Faixa de fontes: sem clientes ainda, as fontes são a prova social. */
export function SourcesStrip() {
  return (
    <section aria-label="Fontes de dados" className="border-y border-line bg-cream-deep/50">
      <Reveal className="container-page flex flex-col items-center gap-4 py-7 sm:flex-row sm:justify-between">
        <p className="shrink-0 text-xs font-medium tracking-[0.14em] text-ink-soft uppercase">Dados de</p>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:justify-end">
          {siteConfig.sources.map((source) => (
            <li key={source} className="font-heading text-lg text-ink/75 sm:text-xl">
              {source}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
