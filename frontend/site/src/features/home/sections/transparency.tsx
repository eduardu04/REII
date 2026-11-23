import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { demo, transparency } from "@/content/home";
import { formatNumber, formatPercent } from "@/lib/format";

/** 8 · Transparência: o que garantimos à esquerda; um número desmontado à direita. */
export function Transparency() {
  const filled = Math.round(demo.confidence / 20);

  return (
    <section className="bg-surface py-24 sm:py-32">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-5">
          <h2 className="type-h2 max-w-[12ch] text-ink">{transparency.title}</h2>
          <p className="type-lead mt-6 max-w-md text-ink-2">{transparency.lead}</p>
          <dl className="mt-10 border-t border-line">
            {transparency.principles.map((p) => (
              <div key={p.label} className="grid grid-cols-[9.5rem_1fr] gap-4 border-b border-line py-5">
                <dt className="text-[0.95rem] font-semibold text-ink">{p.label}</dt>
                <dd className="text-[0.95rem] leading-relaxed text-ink">{p.text}</dd>
              </div>
            ))}
          </dl>
          <Link
            href={transparency.link.href}
            className="mt-8 inline-block border-b-2 border-rent pb-0.5 text-[1rem] font-semibold text-rent transition-colors hover:border-rent-deep hover:text-rent-deep"
          >
            {transparency.link.label}
          </Link>
        </Reveal>

        <Reveal index={1} className="lg:col-span-6 lg:col-start-7">
          <div className="rounded-[1.5rem] bg-white p-7 ring-1 ring-line sm:p-10">
            <p className="text-[0.85rem] text-ink-2">{transparency.card.caption}</p>
            <p className="mt-3 flex items-baseline gap-3 text-rent">
              <span className="text-[4rem] leading-none font-semibold tracking-[-0.05em] tabular sm:text-[5.5rem]">
                {formatNumber(demo.rent.monthly)}&nbsp;€
              </span>
              <span className="text-[1.6rem] font-semibold tracking-[-0.03em] text-ink-2">/mês</span>
            </p>
            <dl className="mt-8 border-t border-line text-[0.92rem]">
              {transparency.card.rows.map((r) => (
                <div key={r.label} className="grid grid-cols-[7.5rem_1fr] gap-4 border-b border-line py-4">
                  <dt className="text-ink-2">{r.label}</dt>
                  <dd className="text-ink">{r.value}</dd>
                </div>
              ))}
              <div className="grid grid-cols-[7.5rem_1fr] items-center gap-4 border-b border-line py-4">
                <dt className="text-ink-2">Confiança</dt>
                <dd className="flex items-center gap-3 text-ink">
                  <span aria-hidden className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className={`h-1.5 w-4 rounded-full ${i < filled ? "bg-rent" : "bg-surface-2"}`} />
                    ))}
                  </span>
                  Alta, {formatPercent(demo.confidence)}
                </dd>
              </div>
              <div className="grid grid-cols-[7.5rem_1fr] gap-4 py-4">
                <dt className="text-ink-2">Fica de fora</dt>
                <dd className="text-ink">{transparency.card.excluded}</dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
