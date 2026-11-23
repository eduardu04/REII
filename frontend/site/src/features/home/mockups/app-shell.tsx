import Image from "next/image";
import { BarChart3, Check, FileText, HelpCircle, Home, PlusCircle, Settings } from "lucide-react";

import { Logo } from "@/components/brand/logo";
import { demo, photos } from "@/content/home";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Os meus imóveis", icon: Home },
  { label: "Nova análise", icon: PlusCircle },
  { label: "Análises", icon: BarChart3, active: true },
  { label: "Relatórios", icon: FileText },
];

const STEPS = ["Caracterização", "Pressupostos", "Estimativa de mercado", "Resultados"];

/**
 * Moldura da app REII, recriada dos ecrãs da dashboard (REII_Ecras.pdf):
 * menu lateral, cabeçalho com o imóvel e os 4 passos da análise. O conteúdo vem por `children`.
 */
export function AppShell({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("overflow-hidden rounded-[1.25rem] bg-cream ring-1 ring-black/10", className)}>
      <div className="flex">
        {/* Menu lateral */}
        <aside className="hidden w-52 shrink-0 flex-col border-r border-line bg-white px-3 py-5 xl:flex">
          <div className="flex items-center gap-2.5 px-2">
            <Logo className="h-[0.95rem] text-ink" />
            <span className="text-[0.55rem] leading-tight text-ink-3">
              Real Estate
              <br />
              Investment Intelligence
            </span>
          </div>
          <nav aria-hidden className="mt-7 space-y-1">
            {NAV.map(({ label, icon: Icon, active }) => (
              <div
                key={label}
                className={cn(
                  "flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[0.78rem]",
                  active ? "bg-rent-soft font-semibold text-rent" : "text-ink-2",
                )}
              >
                <Icon className="size-3.5" strokeWidth={2} />
                {label}
              </div>
            ))}
            <div className="my-3 h-px bg-line" />
            {[
              { label: "Conta e definições", icon: Settings },
              { label: "Ajuda", icon: HelpCircle },
            ].map(({ label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[0.78rem] text-ink-2">
                <Icon className="size-3.5" />
                {label}
              </div>
            ))}
          </nav>
          <div className="mt-auto rounded-xl bg-rent-soft p-3">
            <p className="text-[0.72rem] font-semibold text-ink">Plano Profissional</p>
            <p className="mt-1 text-[0.65rem] leading-snug text-ink-2">Análises ilimitadas, cenários e relatórios.</p>
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          {/* Cabeçalho: imóvel + passos */}
          <div className="flex items-center gap-4 border-b border-line bg-white px-4 py-3 sm:px-6">
            <div className="flex min-w-0 items-center gap-3">
              <div className="relative h-8 w-11 shrink-0 overflow-hidden rounded-md">
                <Image src={photos.t2Fachada} alt="" fill sizes="44px" className="object-cover" />
              </div>
              <div className="min-w-0">
                <p className="truncate text-[0.8rem] font-semibold text-ink">{demo.property.short}</p>
                <p className="truncate text-[0.68rem] text-ink-3">Sé Nova, Coimbra · 88 m²</p>
              </div>
            </div>
            <ol aria-hidden className="ml-auto hidden items-center gap-2 lg:flex">
              {STEPS.map((s, i) => {
                const last = i === STEPS.length - 1;
                return (
                  <li key={s} className="flex items-center gap-2">
                    <span
                      className={cn(
                        "grid size-5 place-items-center rounded-full text-[0.6rem] font-semibold",
                        last ? "bg-rent text-white ring-4 ring-rent-soft" : "bg-rent text-white",
                      )}
                    >
                      {last ? 4 : <Check className="size-3" strokeWidth={3} />}
                    </span>
                    <span className={cn("text-[0.7rem]", last ? "font-semibold text-ink" : "text-ink-2")}>{s}</span>
                    {!last && <span className="h-px w-5 bg-rent" />}
                  </li>
                );
              })}
            </ol>
            <span className="ml-auto grid size-7 shrink-0 place-items-center rounded-full bg-rent text-[0.7rem] font-semibold text-white lg:ml-4">
              F
            </span>
          </div>

          <div className="p-4 sm:p-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
