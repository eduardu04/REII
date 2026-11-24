import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/config/site";
import { bonusPercent, packs, pricingPacks } from "@/content/pricing";
import { formatEuro } from "@/lib/format";
import { cn } from "@/lib/utils";

/**
 * 1 · Abertura da página Preços, no padrão das páginas de planos do Claude e do ChatGPT:
 * título curto ao centro e os três planos logo a seguir, sem imagens. Cada plano diz para quem é,
 * quanto custa, um botão e o que entrega ("Inclui" / "Tudo do anterior, mais").
 */
export function PricingPacks() {
  return (
    <section id="pacotes" className="scroll-mt-24 bg-white pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div className="shell">
        <Reveal immediate delay={0.1} className="mx-auto max-w-2xl text-center">
          <h1 className="type-display text-ink">{pricingPacks.title}</h1>
          <p className="type-lead mt-6 text-ink-2">{pricingPacks.lead}</p>
        </Reveal>

        <ul className="mx-auto mt-14 grid max-w-6xl gap-3 sm:mt-20 lg:grid-cols-3">
          {packs.map((p, i) => {
            const dark = !!p.featured;
            const bonus = bonusPercent(p);
            return (
              <li key={p.id}>
                <Reveal
                  immediate
                  delay={0.2}
                  index={i}
                  className={cn("flex h-full flex-col rounded-[1.75rem] p-8", dark ? "bg-rent-deep text-white" : "bg-surface text-ink")}
                >
                  <div className="flex min-h-7 items-center justify-between gap-3">
                    <h2 className="text-[1.5rem] font-semibold tracking-[-0.03em]">{p.name}</h2>
                    {dark && <span className="rounded-full bg-mint px-3 py-1 text-[0.75rem] font-semibold text-rent-deep">O mais escolhido</span>}
                  </div>
                  <p className={cn("mt-1.5 text-[0.95rem]", dark ? "text-white/70" : "text-ink-2")}>{p.audience}</p>

                  <p className="mt-8 flex items-baseline gap-2">
                    <span className="text-[3.25rem] leading-none font-semibold tracking-[-0.05em] tabular">{formatEuro(p.price)}</span>
                    <span className={cn("text-[0.9rem]", dark ? "text-white/65" : "text-ink-3")}>pagamento único</span>
                  </p>
                  <p className={cn("mt-3 text-[0.9rem]", dark ? "text-white/75" : "text-ink-2")}>
                    {p.credits} créditos
                    {bonus > 0 && <span className={cn("font-semibold", dark ? "text-mint" : "text-rent")}> · +{bonus} % de bónus</span>}
                  </p>

                  <a
                    href={siteConfig.appUrl}
                    className={cn(
                      "mt-8 flex h-12 items-center justify-center rounded-full text-[0.95rem] font-semibold transition-colors",
                      dark ? "bg-white text-rent-deep hover:bg-cream" : "bg-rent text-white hover:bg-rent-deep",
                    )}
                  >
                    Escolher {p.name}
                  </a>

                  <p className={cn("mt-9 text-[0.9rem] font-semibold", dark ? "text-white" : "text-ink")}>{p.includesTitle}:</p>
                  <ul className="mt-4 flex-1 space-y-3">
                    {p.items.map((f, j) => (
                      <li key={f} className={cn("text-[0.95rem] leading-snug", dark ? "text-white/80" : "text-ink-2")}>
                        {j === 0 ? <b className={cn("font-semibold", dark ? "text-white" : "text-ink")}>{f}</b> : f}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </li>
            );
          })}
        </ul>

        <Reveal immediate delay={0.4} className="mx-auto mt-10 max-w-3xl text-center text-[0.92rem] leading-relaxed text-ink-2">
          {pricingPacks.facts.join("  ·  ")}
        </Reveal>
      </div>
    </section>
  );
}
