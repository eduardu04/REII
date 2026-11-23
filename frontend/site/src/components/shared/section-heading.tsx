import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

/** Etiqueta de secção: número + nome, numa linha fina (grelha editorial). */
export function SectionLabel({ index, children, className, tone = "dark" }: {
  index?: string;
  children: React.ReactNode;
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <p className={cn("type-label flex items-center gap-3", tone === "dark" ? "text-ink-3" : "text-white/55", className)}>
      {index ? <span className={tone === "dark" ? "text-rent" : "text-mint"}>{index}</span> : null}
      <span aria-hidden className={cn("h-px w-6", tone === "dark" ? "bg-line" : "bg-white/25")} />
      {children}
    </p>
  );
}

type SectionHeadingProps = {
  index?: string;
  label: string;
  title: string;
  lead?: string;
  className?: string;
  tone?: "dark" | "light";
};

/** Cabeçalho de secção em grelha: etiqueta à esquerda, título grande e texto à direita. */
export function SectionHeading({ index, label, title, lead, className, tone = "dark" }: SectionHeadingProps) {
  return (
    <div className={cn("grid gap-6 lg:grid-cols-12 lg:gap-8", className)}>
      <Reveal className="lg:col-span-3 lg:pt-3">
        <SectionLabel index={index} tone={tone}>{label}</SectionLabel>
      </Reveal>
      <div className="lg:col-span-9">
        <Reveal index={1}>
          <h2 className={cn("type-h2 max-w-[18ch]", tone === "dark" ? "text-ink" : "text-white")}>{title}</h2>
        </Reveal>
        {lead ? (
          <Reveal index={2}>
            <p className={cn("type-lead mt-6 max-w-xl", tone === "dark" ? "text-ink-2" : "text-white/70")}>{lead}</p>
          </Reveal>
        ) : null}
      </div>
    </div>
  );
}
