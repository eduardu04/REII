import { Assistant } from "@/features/home/sections/assistant";
import { Audience } from "@/features/home/sections/audience";
import { Example } from "@/features/home/sections/example";
import { Faq } from "@/features/home/sections/faq";
import { FinalCta } from "@/features/home/sections/final-cta";
import { Hero } from "@/features/home/sections/hero";
import { Problem } from "@/features/home/sections/problem";
import { Result } from "@/features/home/sections/result";
import { SourcesStrip } from "@/features/home/sections/sources-strip";
import { Steps } from "@/features/home/sections/steps";
import { Transparency } from "@/features/home/sections/transparency";

/** Página Início (segue REII_Pagina_Inicio_Mockup.pdf): 11 secções, pela ordem das dúvidas do proprietário. */
export default function HomePage() {
  return (
    <>
      <Hero />
      <SourcesStrip />
      <Problem />
      <Audience />
      <Steps />
      <Result />
      <Assistant />
      <Transparency />
      <Example />
      <Faq />
      <FinalCta />
    </>
  );
}
