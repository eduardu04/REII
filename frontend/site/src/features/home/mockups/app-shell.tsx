import Image from "next/image";
import { BarChart3, Bell, Check, ChevronRight, FileText, HelpCircle, Home, PlusCircle, Settings } from "lucide-react";

import { Logo } from "@/components/brand/logo";
import { photos } from "@/content/home";
import { cn } from "@/lib/utils";

export type AppNav = "Os meus imóveis" | "Nova análise" | "Análises" | "Relatórios";

export type AppHeader =
  | { kind: "greeting"; text: string }
  | { kind: "stepper"; current: number }
  | { kind: "breadcrumb"; items: string[] };

const NAV: { label: AppNav; icon: typeof Home }[] = [
  { label: "Os meus imóveis", icon: Home },
  { label: "Nova análise", icon: PlusCircle },
  { label: "Análises", icon: BarChart3 },
  { label: "Relatórios", icon: FileText },
];

const STEPS = ["Caracterização", "Pressupostos", "Estimativa de mercado", "Resultados"];

/**
 * Moldura da app REII, recriada dos ecrãs da dashboard (REII_Ecras.pdf):
 * menu lateral (a partir de `xl`), cabeçalho variável e o conteúdo do ecrã em `children`.
 */
export function AppShell({
  nav,
  header,
  children,
  className,
}: {
  nav: AppNav;
  header: AppHeader;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex overflow-hidden rounded-[1.25rem] bg-cream ring-1 ring-black/10", className)}>
      <aside className="hidden w-48 shrink-0 flex-col border-r border-line bg-white px-3 py-5 xl:flex">
        <div className="flex items-center gap-2 px-2">
          <Logo className="h-[0.9rem] text-ink" />
          <span className="text-[0.5rem] leading-tight text-ink-3">
            Real Estate
            <br />
            Investment Intelligence
          </span>
        </div>
        <nav aria-hidden className="mt-7 space-y-0.5">
          {NAV.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className={cn(
                "flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[0.75rem]",
                label === nav ? "bg-rent-soft font-semibold text-rent" : "text-ink-2",
              )}
            >
              <Icon className="size-3.5" />
              {label}
            </div>
          ))}
          <div className="my-3 h-px bg-line" />
          {[
            { label: "Conta e definições", icon: Settings },
            { label: "Ajuda", icon: HelpCircle },
          ].map(({ label, icon: Icon }) => (
            <div key={label} className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[0.75rem] text-ink-2">
              <Icon className="size-3.5" />
              {label}
            </div>
          ))}
        </nav>
        <div className="mt-auto rounded-xl bg-rent-soft p-3">
          <p className="text-[0.7rem] font-semibold text-ink">Plano Profissional</p>
          <p className="mt-1 text-[0.62rem] leading-snug text-ink-2">Análises ilimitadas, cenários e relatórios.</p>
        </div>
      </aside>

      <div className="min-w-0 flex-1">
        <div className="flex h-14 items-center gap-4 border-b border-line bg-white px-4 sm:px-6">
          <HeaderContent header={header} />
          <div className="ml-auto flex items-center gap-3">
            <Bell aria-hidden className="hidden size-4 text-ink-3 sm:block" />
            <span className="grid size-7 place-items-center rounded-full bg-rent text-[0.7rem] font-semibold text-white">F</span>
          </div>
        </div>
        <div className="p-4 sm:p-6">{children}</div>
      </div>
    </div>
  );
}

function HeaderContent({ header }: { header: AppHeader }) {
  if (header.kind === "greeting") return <p className="text-[0.8rem] text-ink-2">{header.text}</p>;

  if (header.kind === "breadcrumb")
    return (
      <p className="flex min-w-0 items-center gap-1.5 truncate text-[0.78rem] text-ink-3">
        {header.items.map((it, i) => (
          <span key={it} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight aria-hidden className="size-3" />}
            <span className={i === header.items.length - 1 ? "font-semibold text-ink" : ""}>{it}</span>
          </span>
        ))}
      </p>
    );

  return (
    <div className="flex min-w-0 flex-1 items-center gap-4">
      <div className="flex min-w-0 items-center gap-2.5">
        <span className="relative h-7 w-10 shrink-0 overflow-hidden rounded-md">
          <Image src={photos.t2Fachada} alt="" fill sizes="40px" className="object-cover" />
        </span>
        <span className="min-w-0">
          <span className="block truncate text-[0.75rem] font-semibold text-ink">Nova análise · T2 Coimbra</span>
          <span className="block truncate text-[0.65rem] text-ink-3">Sé Nova, Coimbra</span>
        </span>
      </div>
      <ol aria-hidden className="ml-auto hidden items-center gap-2 lg:flex">
        {STEPS.map((s, i) => {
          const done = i < header.current;
          const now = i === header.current;
          return (
            <li key={s} className="flex items-center gap-2">
              <span
                className={cn(
                  "grid size-5 place-items-center rounded-full text-[0.6rem] font-semibold",
                  done && "bg-rent text-white",
                  now && "bg-rent text-white ring-4 ring-rent-soft",
                  !done && !now && "text-ink-3 ring-1 ring-line",
                )}
              >
                {done ? <Check className="size-3" strokeWidth={3} /> : i + 1}
              </span>
              <span className={cn("text-[0.68rem]", now ? "font-semibold text-ink" : "text-ink-3")}>{s}</span>
              {i < STEPS.length - 1 && <span className={cn("h-px w-4", done ? "bg-rent" : "bg-line")} />}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
