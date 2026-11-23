import { AiExplains } from "@/features/home/sections/ai-explains";
import { Audience } from "@/features/home/sections/audience";
import { Example } from "@/features/home/sections/example";
import { Faq } from "@/features/home/sections/faq";
import { FinalCta } from "@/features/home/sections/final-cta";
import { Hero } from "@/features/home/sections/hero";
import { HowItWorks } from "@/features/home/sections/how-it-works";
import { Result } from "@/features/home/sections/result";
import { Statement } from "@/features/home/sections/statement";
import { Transparency } from "@/features/home/sections/transparency";

/** Página Início: 11 secções, pela ordem das dúvidas do proprietário. */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Statement />
      <Audience />
      <HowItWorks />
      <Result />
      <AiExplains />
      <Transparency />
      <Example />
      <Faq />
      <FinalCta />
    </>
  );
}
