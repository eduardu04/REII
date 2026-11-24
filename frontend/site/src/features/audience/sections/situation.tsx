import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import type { Situation as SituationData } from "@/content/audience";
import { packById } from "@/content/pricing";
import { formatEuro } from "@/lib/format";
import { cn } from "@/lib/utils";

/**
 * Uma situação: fotografia fixa de um lado; do outro, as perguntas que a pessoa faz,
 * o que a análise lhe mostra, o que continua a precisar de um profissional e o pacote indicado.
 */
export function Situation({ data: s, index }: { data: SituationData; index: number }) {
  const flip = index % 2 === 1;
  const pack = packById(s.packId);

  return (
    <section id={s.id} className={cn("scroll-mt-24 py-20 sm:py-28", flip ? "bg-surface" : "bg-white")}>
      <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-8">
        <Reveal className={cn("lg:col-span-5", flip && "lg:order-last lg:col-start-8")}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] lg:sticky lg:top-28">
            <Image src={s.image} alt={s.alt} fill placeholder="blur" sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3.5 py-1.5 text-[0.82rem] font-semibold text-ink backdrop-blur-md">
              0{index + 1} · {s.label}
            </span>
          </div>
        </Reveal>

        <div className={cn("lg:col-span-6", flip ? "lg:col-start-1" : "lg:col-start-7")}>
          <Reveal>
            <h2 className="type-h2 max-w-[15ch] text-ink">{s.title}</h2>
            <p className="type-lead mt-6 text-ink-2">{s.lead}</p>
          </Reveal>

          <Reveal index={1} className="mt-10">
            <p className="text-[0.85rem] font-semibold text-ink-3">As perguntas que ouvimos</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {s.questions.map((q) => (
                <li key={q} className="rounded-[1.1rem] rounded-bl-[0.35rem] bg-rent px-4 py-2.5 text-[0.95rem] text-white">
                  {q}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal index={2} className="mt-10">
            <p className="text-[0.85rem] font-semibold text-ink-3">O que a análise lhe mostra</p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-3">
              {s.shows.map((it) => (
                <li key={it.title} className={cn("rounded-[1.25rem] p-5", flip ? "bg-white" : "bg-surface")}>
                  <p className="text-[1rem] leading-snug font-semibold">{it.title}</p>
                  <p className="mt-1.5 text-[0.9rem] leading-relaxed text-ink-2">{it.text}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal index={3} className="mt-3">
            <p className="flex gap-3 rounded-[1.25rem] bg-sell-soft p-5 text-[0.95rem] leading-relaxed text-ink-2">
              <Info aria-hidden className="mt-0.5 size-5 shrink-0 text-sell" />
              <span>
                <b className="font-semibold text-ink">O que fica fora. </b>
                {s.limit}
              </span>
            </p>
          </Reveal>

          <Reveal index={4} className="mt-8">
            <Link
              href="/precos#pacotes"
              className="group inline-flex items-center gap-3 rounded-full bg-rent-soft py-2 pr-2 pl-5 text-[0.95rem] text-ink transition-colors hover:bg-mint"
            >
              <span>
                Indicado: <b className="font-semibold">{pack.name}</b>, {formatEuro(pack.price)}
              </span>
              <span className="grid size-8 place-items-center rounded-full bg-rent text-white transition-transform group-hover:translate-x-0.5">
                <ArrowRight aria-hidden className="size-4" />
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
