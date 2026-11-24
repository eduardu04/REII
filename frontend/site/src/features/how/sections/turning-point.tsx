import { Reveal } from "@/components/motion/reveal";
import { SectionIntro } from "@/components/shared/section-heading";
import { howTurning as t } from "@/content/how";
import { formatEuro } from "@/lib/format";

const pos = (v: number) => `${((v - t.min) / (t.max - t.min)) * 100}%`;

/**
 * 6 · O ponto de viragem, em verde: uma régua de rendas com a zona onde vender compensa mais,
 * a zona onde arrendar compensa mais, o ponto de viragem e a renda estimada.
 */
export function HowTurningPoint() {
  return (
    <section className="bg-rent-deep py-24 text-white sm:py-32">
      <div className="shell">
        <SectionIntro tone="light" title={t.title} lead={t.lead} />

        <Reveal className="mt-14 rounded-[1.75rem] bg-white/[0.06] p-7 ring-1 ring-white/10 sm:p-12 lg:mt-20">
          <p className="text-[1rem] text-white/70">{t.context}</p>

          <div className="relative mt-24 mb-28 sm:mt-28 sm:mb-20">
            {/* Etiquetas acima da régua */}
            <div className="absolute bottom-full mb-4 -translate-x-1/2 text-center" style={{ left: pos(t.turning) }}>
              <p className="text-[0.78rem] whitespace-nowrap text-white/60">Ponto de viragem</p>
              <p className="text-[1.3rem] font-semibold tracking-[-0.02em] whitespace-nowrap tabular sm:text-[1.7rem]">{formatEuro(t.turning)}/mês</p>
            </div>

            <div className="flex h-5 overflow-hidden rounded-full">
              <div className="h-full bg-sell/80" style={{ width: pos(t.turning) }} />
              <div className="h-full flex-1 bg-mint/80" />
            </div>

            <span aria-hidden className="absolute -top-2 h-9 w-1 -translate-x-1/2 rounded-full bg-white" style={{ left: pos(t.turning) }} />
            <span
              aria-hidden
              className="absolute top-1/2 size-7 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white ring-[6px] ring-rent"
              style={{ left: pos(t.rent) }}
            />

            {/* Etiquetas abaixo */}
            <div className="absolute top-full mt-10 -translate-x-1/2 text-center sm:mt-5" style={{ left: pos(t.rent) }}>
              <p className="text-[0.78rem] whitespace-nowrap text-white/60">Renda estimada</p>
              <p className="text-[1.1rem] font-semibold whitespace-nowrap tabular">{formatEuro(t.rent)}/mês</p>
            </div>
            <p className="absolute top-full left-0 mt-3 text-[0.85rem] text-white/50 tabular sm:mt-5">{formatEuro(t.min)}</p>
            <p className="absolute top-full right-0 mt-3 text-[0.85rem] text-white/50 tabular sm:mt-5">{formatEuro(t.max)}</p>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-[0.88rem] text-white/75">
            <span className="flex items-center gap-2.5">
              <span aria-hidden className="size-3 rounded-[4px] bg-sell/80" /> Abaixo do ponto: vender compensa mais
            </span>
            <span className="flex items-center gap-2.5">
              <span aria-hidden className="size-3 rounded-[4px] bg-mint/80" /> Acima do ponto: arrendar compensa mais
            </span>
          </div>
        </Reveal>

        <div className="mt-3 grid gap-3 md:grid-cols-2">
          {t.notes.map((n, i) => (
            <Reveal key={n.strong} index={i} className="rounded-[1.75rem] bg-white/[0.06] p-7 ring-1 ring-white/10">
              <p className="text-[1.05rem] leading-relaxed text-white/75">
                <b className="font-semibold text-white">{n.strong}</b> {n.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
