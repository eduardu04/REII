import type { Metadata } from "next";

import { HowAssistant } from "@/features/how/sections/assistant";
import { HowConfidence } from "@/features/how/sections/confidence";
import { HowFinalCta } from "@/features/how/sections/final-cta";
import { HowHero } from "@/features/how/sections/hero";
import { HowMath } from "@/features/how/sections/math";
import { HowPrivacy } from "@/features/how/sections/privacy";
import { HowSources } from "@/features/how/sections/sources";
import { HowSteps } from "@/features/how/sections/steps";
import { HowTurningPoint } from "@/features/how/sections/turning-point";

export const metadata: Metadata = {
  title: "Como funciona",
  description: "De onde vêm os dados, como fazemos as contas e onde estão os limites da análise REII.",
};

/** Página Como funciona: a origem de cada número, pela ordem em que aparece numa análise. */
export default function HowItWorksPage() {
  return (
    <>
      <HowHero />
      <HowSteps />
      <HowSources />
      <HowMath />
      <HowTurningPoint />
      <HowAssistant />
      <HowConfidence />
      <HowPrivacy />
      <HowFinalCta />
    </>
  );
}
