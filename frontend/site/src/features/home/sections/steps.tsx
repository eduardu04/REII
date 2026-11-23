import { Reveal } from "@/components/motion/reveal";
import { SectionIntro } from "@/components/shared/section-heading";
import { demo, steps } from "@/content/home";
import { formatEuro } from "@/lib/format";

/** 5 · Três passos, cada um com o pedaço da app que lhe corresponde. */
export function Steps() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="shell">
        <SectionIntro title={steps.title} lead={steps.lead} />

        <ol className="mt-16 grid gap-5 lg:grid-cols-3">
          {steps.items.map((step, i) => (
            <li key={step.title}>
              <Reveal index={i} className="flex h-full flex-col rounded-[1.25rem] bg-surface p-7">
                <span className="grid size-9 place-items-center rounded-full bg-rent text-[0.85rem] font-semibold text-white tabular">
                  {i + 1}
                </span>
                <h3 className="mt-7 text-[1.35rem] font-semibold tracking-[-0.025em] text-ink">{step.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-2">{step.text}</p>
                <div className="mt-auto pt-8">
                  <div className="rounded-xl bg-white p-4 ring-1 ring-line">{[<Describe key="d" />, <Estimate key="e" />, <Compare key="c" />][i]}</div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Row({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-white px-3.5 py-2.5 text-[0.85rem] ring-1 ring-line">
      <span className="text-ink-2">{label}</span>
      <span className={accent ? "font-semibold text-rent" : "font-semibold text-ink tabular"}>{value}</span>
    </div>
  );
}

function Describe() {
  return (
    <div className="space-y-2">
      <Row label="Tipologia" value="T2" />
      <Row label="Área útil" value="88 m²" />
      <Row label="Localização" value="Sé Nova, Coimbra" />
      <div className="pt-2">
        <div className="h-1.5 overflow-hidden rounded-full bg-surface-2">
          <div className="h-full w-[60%] rounded-full bg-rent" />
        </div>
        <p className="mt-2 text-[0.75rem] text-ink-3">Dados preenchidos: 60 %</p>
      </div>
    </div>
  );
}

function Estimate() {
  return (
    <div className="space-y-2">
      <Row label="Valor estimado hoje" value={formatEuro(demo.valueToday)} />
      <Row label="Renda mensal estimada" value={formatEuro(demo.rent.monthly)} />
      <Row label="Casas comparadas" value="6 na zona" />
      <Row label="Confiança" value="Alta" accent />
    </div>
  );
}

function Compare() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-lg bg-sell-soft p-3">
          <p className="text-[0.75rem] font-semibold text-sell">Vender</p>
          <p className="mt-1 text-[1.2rem] font-semibold tracking-[-0.03em] text-ink tabular">{formatEuro(demo.sell.value)}</p>
          <p className="text-[0.7rem] text-ink-3">daqui a 5 anos</p>
        </div>
        <div className="rounded-lg bg-rent-soft p-3">
          <p className="text-[0.75rem] font-semibold text-rent">Arrendar</p>
          <p className="mt-1 text-[1.2rem] font-semibold tracking-[-0.03em] text-ink tabular">{formatEuro(demo.rent.monthly)}</p>
          <p className="text-[0.7rem] text-ink-3">por mês</p>
        </div>
      </div>
      <svg viewBox="0 0 280 56" className="mt-3 h-14 w-full" aria-hidden>
        <path d="M4 52 C 90 44, 180 26, 276 6" fill="none" stroke="var(--rent)" strokeWidth="2" strokeLinecap="round" />
        <path d="M4 52 C 90 48, 180 38, 276 28" fill="none" stroke="var(--sell)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}
