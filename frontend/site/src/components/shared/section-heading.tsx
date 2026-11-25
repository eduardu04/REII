import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

type SectionIntroProps = {
  title: string;
  lead?: React.ReactNode;
  tone?: "dark" | "light";
  className?: string;
};

/** Abertura de secção, igual em toda a página: título grande à esquerda, apoio à direita. */
export function SectionIntro({ title, lead, tone = "dark", className }: SectionIntroProps) {
  const light = tone === "light";
  return (
    <Reveal className={cn("grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-8", className)}>
      <h2 className={cn("type-h2 lg:col-span-7", light ? "text-white" : "text-ink")}>{title}</h2>
      {lead ? (
        <p className={cn("text-[1.05rem] leading-relaxed lg:col-span-4 lg:col-start-9 lg:pb-1.5", light ? "text-white/70" : "text-ink-2")}>
          {lead}
        </p>
      ) : null}
    </Reveal>
  );
}
