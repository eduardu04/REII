import { Reveal } from "@/components/motion/reveal";
import { sources } from "@/content/home";

/**
 * 7 · De onde vêm os números. Quatro painéis arredondados com o nome da fonte em grande
 * (na escala do rodapé) e o que cada uma fornece. Sem linhas.
 */
export function Sources() {
  return (
    <section className="bg-white pb-24 sm:pb-32">
      <div className="shell">
        <Reveal className="grid gap-6 pb-12 lg:grid-cols-12 lg:items-end lg:gap-8 lg:pb-16">
          <h2 className="type-h2 text-ink lg:col-span-7">{sources.title}</h2>
          <p className="text-[1.05rem] leading-relaxed text-ink-2 lg:col-span-4 lg:col-start-9">{sources.lead}</p>
        </Reveal>

        <ul className="grid gap-3 sm:grid-cols-2">
          {sources.items.map((s, i) => (
            <li key={s.name}>
              <Reveal index={i} className="flex h-full min-h-[15rem] flex-col justify-between rounded-[1.75rem] bg-surface p-7 sm:min-h-[18rem] sm:p-10">
                <span className="text-[2.75rem] leading-none font-semibold tracking-[-0.055em] text-ink sm:text-[4.25rem]">{s.name}</span>
                <span className="mt-10 max-w-sm text-[1rem] leading-relaxed text-ink-2">{s.text}</span>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
