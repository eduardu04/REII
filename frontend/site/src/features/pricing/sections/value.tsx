import { CountUp } from "@/components/motion/count-up";
import { Reveal } from "@/components/motion/reveal";
import { packById, pricingValue as v } from "@/content/pricing";
import { formatEuro } from "@/lib/format";

/**
 * O valor de uma boa decisão, dito numa frase grande ao centro: o que está em jogo no exemplo
 * e quanto custa saber a resposta. Só tipografia, sem gráficos nem cartões.
 */
export function PricingValue() {
  return (
    <section className="bg-surface py-28 sm:py-40">
      <div className="shell">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <h2 className="text-[1rem] font-semibold text-rent">{v.title}</h2>
          </Reveal>
          <Reveal index={1}>
            <p className="mt-8 text-[2rem] leading-[1.15] font-semibold tracking-[-0.035em] text-ink sm:text-[3rem] lg:text-[3.75rem]">
              {v.before}{" "}
              <CountUp value={v.rent - v.sell} format="euro" className="whitespace-nowrap text-rent tabular" />. {v.middle}{" "}
              <span className="whitespace-nowrap text-sell tabular">{formatEuro(packById("uma").price)}</span>.
            </p>
          </Reveal>
          <Reveal index={2}>
            <p className="mx-auto mt-8 max-w-xl text-[0.95rem] leading-relaxed text-ink-3">{v.note}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
