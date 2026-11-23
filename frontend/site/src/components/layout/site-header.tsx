"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, m } from "motion/react";

import { Logo } from "@/components/brand/logo";
import { ctaLabel, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

/**
 * Navegação em pílula flutuante.
 * Sobre um herói escuro (`[data-hero-dark]`) fica transparente com texto claro;
 * depois do herói passa a vidro branco com texto escuro e encolhe ligeiramente.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [overDark, setOverDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>("[data-hero-dark]");
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setOverDark(hero ? y < hero.offsetHeight - 80 : false);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const light = overDark && !open;

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={cn(
          "pointer-events-auto mx-auto flex items-center justify-between rounded-full transition-[max-width,background-color,box-shadow,padding] duration-500 ease-out-soft",
          scrolled ? "max-w-[64rem] py-2 pr-2 pl-5" : "max-w-[84rem] py-2.5 pr-2.5 pl-6",
          light
            ? "bg-white/8 ring-1 ring-white/15 backdrop-blur-md"
            : "bg-white/85 shadow-[0_1px_2px_rgb(0_0_0/0.04),0_8px_24px_-12px_rgb(0_0_0/0.15)] ring-1 ring-black/5 backdrop-blur-xl",
        )}
      >
        <Link
          href="/"
          aria-label="REII, página inicial"
          className={cn("transition-colors duration-300", light ? "text-white" : "text-ink")}
        >
          <Logo className="h-[1.05rem]" />
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-1 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-[0.9rem] font-medium transition-colors duration-200",
                light ? "text-white/80 hover:bg-white/10 hover:text-white" : "text-ink-2 hover:bg-surface hover:text-ink",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-1 md:flex">
          <a
            href={siteConfig.appUrl}
            className={cn(
              "rounded-full px-4 py-2 text-[0.9rem] font-medium transition-colors",
              light ? "text-white/80 hover:text-white" : "text-ink-2 hover:text-ink",
            )}
          >
            Entrar
          </a>
          <a
            href={siteConfig.appUrl}
            className={cn(
              "inline-flex h-10 items-center rounded-full px-5 text-[0.9rem] font-semibold transition-colors duration-300",
              light ? "bg-cream text-rent-deep hover:bg-white" : "bg-rent text-white hover:bg-rent-deep",
            )}
          >
            {ctaLabel}
          </a>
        </div>

        <button
          type="button"
          className={cn(
            "inline-flex h-10 items-center gap-2 rounded-full px-4 text-[0.9rem] font-medium md:hidden",
            light ? "bg-white/12 text-white" : "bg-surface text-ink",
          )}
          aria-expanded={open}
          aria-controls="menu-movel"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Fechar" : "Menu"}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <m.nav
            id="menu-movel"
            aria-label="Principal (telemóvel)"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-auto mx-auto mt-2 origin-top rounded-[1.75rem] bg-white p-2 shadow-[0_24px_48px_-16px_rgb(0_0_0/0.25)] ring-1 ring-black/5 md:hidden"
          >
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3.5 text-[1.15rem] font-medium tracking-[-0.02em] text-ink hover:bg-surface"
              >
                {item.label}
              </Link>
            ))}
            <a href={siteConfig.appUrl} className="block rounded-2xl px-4 py-3.5 text-[1.15rem] font-medium text-ink-2 hover:bg-surface">
              Entrar
            </a>
            <a
              href={siteConfig.appUrl}
              className="mt-1 flex h-12 items-center justify-center rounded-full bg-rent text-[0.95rem] font-semibold text-white"
            >
              {ctaLabel}
            </a>
          </m.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
