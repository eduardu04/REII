import { DrawLine, MaskReveal } from "@/components/motion/editorial";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

type SectionIntroProps = {
  title: string;
  lead?: React.ReactNode;
  tone?: "dark" | "light";
  className?: string;
};

/**
 * Abertura de secção, igual em toda a página: linha fina que se desenha, título grande
 * que sobe por trás de uma máscara (à esquerda) e texto de apoio à direita, alinhado pela base.
 */
export function SectionIntro({ title, lead, tone = "dark", className }: SectionIntroProps) {
  const light = tone === "light";
  return (
    <div className={className}>
      <DrawLine light={light} />
      <div className="grid gap-6 pt-8 lg:grid-cols-12 lg:items-end lg:gap-8 lg:pt-10">
        <MaskReveal as="h2" className={cn("type-h2 lg:col-span-7", light ? "text-white" : "text-ink")}>
          {title}
        </MaskReveal>
        {lead ? (
          <Reveal delay={0.25} className="lg:col-span-4 lg:col-start-9 lg:pb-1.5">
            <p className={cn("text-[1.05rem] leading-relaxed", light ? "text-white/70" : "text-ink-2")}>{lead}</p>
          </Reveal>
        ) : null}
      </div>
    </div>
  );
}
