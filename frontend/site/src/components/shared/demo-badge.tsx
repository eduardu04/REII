import { cn } from "@/lib/utils";

/** Etiqueta obrigatória em qualquer número de exemplo enquanto não estiver validado. */
export function DemoBadge({ className, children = "Valores de demonstração" }: { className?: string; children?: React.ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center gap-1.5 rounded-full whitespace-nowrap bg-cream-deep px-2.5 py-1 text-[0.7rem] font-medium text-ink-soft",
        className,
      )}
    >
      <span aria-hidden className="size-1.5 rounded-full bg-ink-soft/60" />
      {children}
    </span>
  );
}
