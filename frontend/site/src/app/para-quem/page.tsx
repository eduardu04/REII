import type { Metadata } from "next";

import { situations } from "@/content/audience";
import { AudienceFinalCta } from "@/features/audience/sections/final-cta";
import { AudienceHero } from "@/features/audience/sections/hero";
import { AudienceNotFor } from "@/features/audience/sections/not-for";
import { Situation } from "@/features/audience/sections/situation";

export const metadata: Metadata = {
  title: "Para quem é",
  description:
    "Herdou uma casa, tem uma segunda habitação, um imóvel vazio ou vários imóveis? Veja o que a análise REII lhe mostra em cada situação.",
};

/** Página Para quem é: as quatro situações, o que o REII mostra em cada uma e quando não é a resposta. */
export default function AudiencePage() {
  return (
    <>
      <AudienceHero />
      {situations.map((s, i) => (
        <Situation key={s.id} data={s} index={i} />
      ))}
      <AudienceNotFor />
      <AudienceFinalCta />
    </>
  );
}
