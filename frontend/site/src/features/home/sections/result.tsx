import { Reveal } from "@/components/motion/reveal";
import { SectionIntro } from "@/components/shared/section-heading";
import { result } from "@/content/home";

import { AppShell } from "../mockups/app-shell";
import { ResultsPanel } from "../mockups/results-panel";

/**
 * 6 · O resultado, num só ecrã. Secção verde (mockup) com o ecrã real da app
 * e três notas presas aos sítios que explicam.
 */
export function Result() {
  return (
    <section className="bg-rent-deep py-24 text-white sm:py-32">
      <div className="shell">
        <SectionIntro title={result.title} lead={result.lead} tone="light" />

        <Reveal y={32} className="relative mt-16">
          <Callout n={1} className="left-4 -top-4 sm:left-8">
            {result.callouts[0]}
          </Callout>
          <Callout n={2} className="right-4 -top-4 hidden md:flex lg:right-[22rem]">
            {result.callouts[1]}
          </Callout>
          <Callout n={3} className="right-4 -bottom-4 hidden md:flex">
            {result.callouts[2]}
          </Callout>

          <AppShell className="shadow-[0_40px_80px_-30px_rgb(0_0_0/0.6)]">
            <ResultsPanel />
          </AppShell>
        </Reveal>

        <ol className="mt-12 space-y-3 md:hidden">
          {result.callouts.map((c, i) => (
            <li key={c} className="flex items-center gap-3 text-[0.95rem] text-white/85">
              <span className="grid size-6 shrink-0 place-items-center rounded-full bg-sell text-[0.75rem] font-semibold text-white">
                {i + 1}
              </span>
              {c}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Callout({ n, children, className }: { n: number; children: React.ReactNode; className?: string }) {
  return (
    <p
      className={`absolute z-10 flex items-center gap-2.5 rounded-full bg-white py-1.5 pr-4 pl-1.5 text-[0.8rem] font-semibold text-ink shadow-[0_12px_30px_-12px_rgb(0_0_0/0.45)] ${className ?? ""}`}
    >
      <span className="grid size-6 place-items-center rounded-full bg-sell text-[0.72rem] text-white">{n}</span>
      {children}
    </p>
  );
}
