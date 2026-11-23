import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { SectionIntro } from "@/components/shared/section-heading";
import { siteConfig } from "@/config/site";
import { audience } from "@/content/home";

/** 4 · Para quem é: quatro situações reais, cada uma com a sua casa. */
export function Audience() {
  return (
    <section className="bg-surface py-24 sm:py-32">
      <div className="shell">
        <SectionIntro title={audience.title} lead={audience.lead} />

        <ul className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {audience.items.map((item, i) => (
            <li key={item.title}>
              <Reveal index={i}>
                <a href={siteConfig.appUrl} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      placeholder="blur"
                      sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out-soft group-hover:scale-[1.03]"
                    />
                  </div>
                  <h3 className="mt-6 text-[1.2rem] font-semibold tracking-[-0.02em] text-ink">{item.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-2">{item.text}</p>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
