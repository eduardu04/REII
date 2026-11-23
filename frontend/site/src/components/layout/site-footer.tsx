import Link from "next/link";

import { Logo } from "@/components/brand/logo";
import { siteConfig } from "@/config/site";

export function SiteFooter() {

  return (
    <footer className="bg-rent-deep text-white/80">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm space-y-4">
          <Logo inverted />
          <p className="text-sm leading-relaxed text-white/70">
            Vender ou arrendar, lado a lado. O REII não ganha com nenhuma das opções: mostra os
            números e explica-os. A decisão é sempre sua.
          </p>
        </div>

        <div>
          <h2 className="font-sans text-xs font-medium tracking-[0.12em] text-white/50 uppercase">
            Produto
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={siteConfig.appUrl} className="transition-colors hover:text-white">
                Entrar
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-xs font-medium tracking-[0.12em] text-white/50 uppercase">
            Fontes de dados
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {siteConfig.sources.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <p>
            Os valores são estimativas, não uma avaliação certificada. © {siteConfig.name}
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            <li>
              <Link href="/privacidade" className="hover:text-white">Privacidade</Link>
            </li>
            <li>
              <Link href="/aviso-legal" className="hover:text-white">Aviso legal</Link>
            </li>
            <li>
              <Link href="/contactos" className="hover:text-white">Contactos</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
