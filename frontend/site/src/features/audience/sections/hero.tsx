import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { audienceHero, situations } from "@/content/audience";

/** 1 · Abertura: a pergunta "isto é para mim?" e as quatro situações, cada uma a levar à sua secção. */
export function AudienceHero() {
  return (
    <section className="bg-white pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-8">
          <Reveal immediate delay={0.1} className="lg:col-span-7">
            <h1 className="type-display max-w-[14ch] text-ink">{audienceHero.title}</h1>
          </Reveal>
          <Reveal immediate delay={0.1} index={2} className="lg:col-span-4 lg:col-start-9 lg:pb-2">
            <p className="type-lead text-ink-2">{audienceHero.lead}</p>
          </Reveal>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-3 lg:mt-20 lg:grid-cols-4">
          {situations.map((s, i) => (
            <li key={s.id}>
              <Reveal immediate delay={0.25} index={i}>
                <a
                  href={`#${s.id}`}
                  className="group relative isolate flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-[1.5rem] p-4 text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rent sm:p-6"
                >
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    priority
                    placeholder="blur"
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="-z-10 object-cover transition-transform duration-700 ease-out-soft group-hover:scale-[1.04]"
                  />
                  <span aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-rent-deep/85 via-rent-deep/15 to-transparent" />
                  <span className="flex items-end justify-between gap-3">
                    <span className="text-[1.05rem] leading-tight font-semibold tracking-[-0.02em] sm:text-[1.3rem]">{s.label}</span>
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
