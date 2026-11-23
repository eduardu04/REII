import Image from "next/image";
import { BarChart3, Bell, Check, ChevronRight, FileText, HelpCircle, Home, Menu, PlusCircle, Settings } from "lucide-react";

import { Logo } from "@/components/brand/logo";
import { photos } from "@/content/home";
import { cn } from "@/lib/utils";

/*
 * Moldura da app REII, à escala fixa do desenho (1440 px), recriada de REII_Ecras.pdf.
 * Sem classes responsivas: o ecrã inteiro é reduzido por <ScaledScreen>, para ficar igual à dashboard.
 */

export type AppNav = "Os meus imóveis" | "Nova análise" | "Análises" | "Relatórios";

export type AppTop =
  | { kind: "greeting"; text: string }
  | { kind: "stepper"; current: number; subtitle: string; done?: boolean }
  | { kind: "breadcrumb"; items: string[] };

const NAV: { label: AppNav; icon: typeof Home }[] = [
  { label: "Os meus imóveis", icon: Home },
  { label: "Nova análise", icon: PlusCircle },
  { label: "Análises", icon: BarChart3 },
  { label: "Relatórios", icon: FileText },
];

const STEPS = ["Caracterização", "Pressupostos", "Estimativa de mercado", "Resultados"];

export function AppShell({ nav, top, children }: { nav: AppNav; top: AppTop; children: React.ReactNode }) {
  return (
    <div className="flex w-[1440px] bg-cream text-ink">
      <aside className="flex w-[248px] shrink-0 flex-col border-r border-line bg-white px-4 pt-7 pb-5">
        <div className="flex items-center gap-3 px-2">
          <Logo className="h-[22px] text-ink" />
          <span className="text-[11px] leading-[1.35] text-ink-2">
            Real Estate
            <br />
            Investment
            <br />
            Intelligence
          </span>
        </div>
        <nav aria-hidden className="mt-9 space-y-1.5">
          {NAV.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className={cn(
                "flex items-center gap-3 rounded-[10px] px-3 py-2.5 text-[14px]",
                label === nav ? "bg-rent-soft font-semibold text-rent" : "text-ink",
              )}
            >
              <Icon className="size-[18px]" strokeWidth={1.8} />
              {label}
            </div>
          ))}
          <div className="!my-4 h-px bg-line" />
          {[
            { label: "Conta e definições", icon: Settings },
            { label: "Ajuda", icon: HelpCircle },
          ].map(({ label, icon: Icon }) => (
            <div key={label} className="flex items-center gap-3 rounded-[10px] px-3 py-2.5 text-[14px] text-ink">
              <Icon className="size-[18px]" strokeWidth={1.8} />
              {label}
            </div>
          ))}
        </nav>
        <div className="mt-auto rounded-[14px] bg-rent-soft p-4">
          <p className="text-[15px] font-semibold">Plano Profissional</p>
          <p className="mt-1.5 text-[13px] leading-snug text-ink-2">Análises ilimitadas, cenários e relatórios.</p>
          <p className="mt-3 text-[13px] font-semibold text-rent">Ver planos →</p>
        </div>
      </aside>

      <div className="min-w-0 flex-1">
        <header className="flex h-[80px] items-center gap-5 border-b border-line bg-white px-8">
          <TopContent top={top} />
          <div className="ml-auto flex items-center gap-4">
            <Bell className="size-5 text-ink-2" strokeWidth={1.8} />
            <span className="grid size-10 place-items-center rounded-full bg-rent text-[15px] font-semibold text-white">F</span>
          </div>
        </header>
        <main className="px-8 pt-9 pb-10">{children}</main>
      </div>
    </div>
  );
}

function TopContent({ top }: { top: AppTop }) {
  if (top.kind === "greeting") return <p className="text-[15px] text-ink-2">{top.text}</p>;

  if (top.kind === "breadcrumb")
    return (
      <div className="flex items-center gap-3 text-[14px]">
        <Menu className="size-5 text-ink-2" strokeWidth={1.8} />
        {top.items.map((it, i) => (
          <span key={it} className="flex items-center gap-2">
            {i > 0 && <ChevronRight className="size-4 text-ink-3" />}
            <span className={i === top.items.length - 1 ? "font-semibold text-ink" : "text-ink-2"}>{it}</span>
          </span>
        ))}
      </div>
    );

  return (
    <div className="flex flex-1 items-center gap-6">
      <Menu className="size-5 text-ink-2" strokeWidth={1.8} />
      <div className="flex items-center gap-3">
        <span className="relative h-[44px] w-[56px] overflow-hidden rounded-[6px]">
          <Image src={photos.t2Fachada} alt="" fill sizes="56px" className="object-cover" />
        </span>
        <span>
          <span className="block text-[15px] font-semibold">Nova análise · T2 Coimbra</span>
          <span className="block text-[12px] text-ink-2">{top.subtitle}</span>
        </span>
      </div>
      <ol aria-hidden className="ml-auto flex items-start">
        {STEPS.map((s, i) => {
          const done = top.done || i < top.current;
          const now = !top.done && i === top.current;
          return (
            <li key={s} className="relative flex w-[150px] flex-col items-center gap-2">
              {i < STEPS.length - 1 && (
                <span className={cn("absolute top-4 left-[calc(50%+22px)] h-[2px] w-[calc(100%-44px)]", done ? "bg-rent" : "bg-line")} />
              )}
              <span className="contents">
                <span
                  className={cn(
                    "grid size-8 place-items-center rounded-full text-[13px] font-semibold",
                    done && "bg-rent text-white",
                    now && "bg-rent text-white ring-[5px] ring-rent-soft",
                    !done && !now && "bg-white text-ink-2 ring-1 ring-line",
                  )}
                >
                  {done ? <Check className="size-4" strokeWidth={3} /> : i + 1}
                </span>
                <span className={cn("text-[13px] whitespace-nowrap", now ? "font-semibold text-ink" : "text-ink-2")}>{s}</span>
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
