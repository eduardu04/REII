import { Audience } from "@/features/home/sections/audience";
import { Example } from "@/features/home/sections/example";
import { Explain } from "@/features/home/sections/explain";
import { Faq } from "@/features/home/sections/faq";
import { FinalCta } from "@/features/home/sections/final-cta";
import { Hero } from "@/features/home/sections/hero";
import { Problem } from "@/features/home/sections/problem";
import { Result } from "@/features/home/sections/result";
import { Sources } from "@/features/home/sections/sources";
import { Steps } from "@/features/home/sections/steps";

/** Página Início: da dúvida à decisão, pela ordem em que o proprietário pensa. */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Audience />
      <Steps />
      <Result />
      <Explain />
      <Sources />
      <Example />
      <Faq />
      <FinalCta />
    </>
  );
}
