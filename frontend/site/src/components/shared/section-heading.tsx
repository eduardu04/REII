import { cn } from "@/lib/utils";

import { Reveal } from "@/components/motion/reveal";
import { WordReveal } from "@/components/motion/word-reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  /** Título palavra a palavra ligado ao scroll (usar com moderação: um por ecrã). */
  scrollTitle?: boolean;
  className?: string;
};

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("text-xs font-medium tracking-[0.14em] text-ink-soft uppercase", className)}>
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  scrollTitle = false,
  className,
}: SectionHeadingProps) {
  const titleClass =
    "mt-3 text-[2rem] leading-[1.08] font-normal tracking-[-0.015em] text-ink sm:text-[2.6rem] lg:text-[3rem]";

  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
      </Reveal>
      {scrollTitle ? (
        <WordReveal text={title} className={titleClass} />
      ) : (
        <Reveal index={1}>
          <h2 className={titleClass}>{title}</h2>
        </Reveal>
      )}
      {lead ? (
        <Reveal index={2}>
          <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">{lead}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
