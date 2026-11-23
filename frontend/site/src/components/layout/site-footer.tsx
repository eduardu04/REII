import Link from "next/link";

import { Logo } from "@/components/brand/logo";
import { siteConfig } from "@/config/site";

/** Rodapé preto, com o logótipo em grande a fechar a página. */
export function SiteFooter() {
  return (
    <footer className="bg-rent-deep text-white">
      <div className="shell grid gap-12 pt-20 pb-14 md:grid-cols-12">
        <p className="max-w-sm text-[1.05rem] leading-relaxed text-white/60 md:col-span-5">
          Vender ou arrendar, lado a lado. O REII não ganha com nenhuma das opções: mostra os números e explica-os.
        </p>

        <FooterColumn title="Produto" className="md:col-span-2 md:col-start-8">
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
        </FooterColumn>

        <FooterColumn title="Fontes de dados" className="md:col-span-3">
          {siteConfig.sources.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </FooterColumn>
      </div>

      <div className="shell">
        <Logo className="h-auto w-full text-mint/90" title="REII" />
      </div>

      <div className="shell flex flex-col gap-3 py-8 text-[0.8rem] text-white/45 md:flex-row md:items-center md:justify-between">
        <p>Os valores são estimativas, não uma avaliação certificada.</p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
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
    </footer>
  );
}

function FooterColumn({ title, className, children }: { title: string; className?: string; children: React.ReactNode }) {
  return (
    <div className={className}>
      <h2 className="type-label text-white/40">{title}</h2>
      <ul className="mt-5 space-y-3 text-[0.95rem] text-white/75">{children}</ul>
    </div>
  );
}
