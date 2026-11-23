import { cn } from "@/lib/utils";

/**
 * Logótipo REII (provisório): monograma geométrico de cantos arredondados + palavra.
 * As duas barras do monograma usam as cores da marca: terracota (vender) e verde (arrendar).
 * Substituir pelo SVG final do Figma quando existir.
 */
export function Logo({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <svg viewBox="0 0 28 28" aria-hidden className="size-7 shrink-0">
        <rect width="28" height="28" rx="8" fill={inverted ? "#ffffff" : "#1c1b19"} />
        <rect x="7" y="12" width="5.5" height="9" rx="2" fill="#b8562f" />
        <rect x="15.5" y="7" width="5.5" height="14" rx="2" fill={inverted ? "#0f4c45" : "#5fa79a"} />
      </svg>
      <span
        className={cn(
          "font-sans text-[1.15rem] font-semibold tracking-[0.14em]",
          inverted ? "text-white" : "text-ink",
        )}
      >
        REII
      </span>
    </span>
  );
}
