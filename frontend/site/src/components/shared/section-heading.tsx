import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

type SectionIntroProps = {
  title: string;
  lead?: React.ReactNode;
  tone?: "dark" | "light";
  className?: string;
};

/**
 * Abertura de secção (padrão do mockup): título grande à esquerda, texto de apoio à direita,
 * alinhado pela base. Sem etiquetas nem números decorativos.
 */
export function SectionIntro({ title, lead, tone = "dark", className }: SectionIntroProps) {
  return (
    <Reveal className={cn("grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-8", className)}>
      <h2 className={cn("type-h2 lg:col-span-6", tone === "dark" ? "text-ink" : "text-white")}>{title}</h2>
      {lead ? (
        <p
          className={cn(
            "type-lead max-w-xl lg:col-span-5 lg:col-start-8 lg:pb-1.5",
            tone === "dark" ? "text-ink-2" : "text-white/70",
          )}
        >
          {lead}
        </p>
      ) : null}
    </Reveal>
  );
}
