import { cn } from "@/lib/utils";

/**
 * Progresso do separador ativo, sem linhas: um preenchimento suave que cresce por trás
 * do próprio elemento (herda os cantos arredondados). Pausa com `running=false`.
 */
export function ProgressFill({
  active,
  running,
  duration,
  reduce,
  light = false,
  resetKey,
}: {
  active: boolean;
  running: boolean;
  duration: number;
  reduce: boolean;
  light?: boolean;
  resetKey: string | number;
}) {
  if (!active || reduce) return null;
  return (
    <span aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
      <span
        key={resetKey}
        className={cn("block h-full w-full origin-left", light ? "bg-white/8" : "bg-rent/6")}
        style={{ animation: `reii-fill ${duration}ms linear forwards`, animationPlayState: running ? "running" : "paused" }}
      />
    </span>
  );
}
