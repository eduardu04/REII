import type { Metadata } from "next";

import { pricingFaq } from "@/content/pricing";
import { Faq } from "@/features/home/sections/faq";
import { PricingCalculator } from "@/features/pricing/sections/calculator";
import { PricingCostsTable } from "@/features/pricing/sections/costs-table";
import { PricingFinalCta } from "@/features/pricing/sections/final-cta";
import { PricingHero } from "@/features/pricing/sections/hero";
import { PricingInvestors } from "@/features/pricing/sections/investors";
import { PricingPacks } from "@/features/pricing/sections/packs";
import { PricingValue } from "@/features/pricing/sections/value";

export const metadata: Metadata = {
  title: "Preços",
  description: "Pague só o que usar: pacotes de créditos, sem mensalidades nem fidelização. Veja quanto custa cada operação.",
};

/** Página Preços: quanto custa, o que inclui, de quanto preciso e se vale a pena. */
export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingPacks />
      <PricingCostsTable />
      <PricingCalculator />
      <PricingInvestors />
      <PricingValue />
      <Faq data={pricingFaq} />
      <PricingFinalCta />
    </>
  );
}
