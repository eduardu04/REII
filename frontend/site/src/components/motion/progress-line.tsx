import { cn } from "@/lib/utils";

/** Linha de progresso do separador ativo (CSS, pausa com `running=false`). */
export function ProgressLine({
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
  return (
    <span aria-hidden className={cn("block h-0.5 overflow-hidden rounded-full", light ? "bg-white/15" : "bg-line")}>
      {active && (
        <span
          key={resetKey}
          className={cn("block h-full origin-left rounded-full", light ? "bg-white" : "bg-rent")}
          style={{
            animation: reduce ? "none" : `reii-fill ${duration}ms linear forwards`,
            animationPlayState: running ? "running" : "paused",
            transform: reduce ? "scaleX(1)" : undefined,
          }}
        />
      )}
    </span>
  );
}
