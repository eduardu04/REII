import { cn } from "@/lib/utils";

/**
 * Bifurcação Vender / Arrendar: uma linha que se divide em dois caminhos.
 * Assinatura gráfica da marca (vem do mockup). Terracota em cima (vender), verde-claro em baixo (arrendar).
 */
export function ForkMark({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <svg viewBox="0 0 68 40" fill="none" aria-hidden className={cn("h-8 w-auto", className)}>
      <path d="M2 20H30" stroke={light ? "#f6f3ec" : "#0f4c45"} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M30 20C40 20 44 6 66 6" stroke="#e39a73" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M30 20C40 20 44 34 66 34" stroke="#8fc7b8" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}
