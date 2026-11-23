"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, m } from "motion/react";

import { Logo } from "@/components/brand/logo";
import { ButtonLink } from "@/components/shared/button-link";
import { ctaLabel, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

/** Cabeçalho fixo e branco. Depois de 24 px de scroll ganha uma linha fina por baixo. */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 backdrop-blur-xl transition-[background-color,box-shadow] duration-300",
        scrolled || open ? "bg-white/90" : "bg-cream",
        scrolled && !open ? "shadow-[0_1px_0_var(--line)]" : "shadow-none",
      )}
    >
      <div className="shell relative flex h-16 items-center justify-between gap-6 lg:h-[4.5rem]">
        <Link href="/" aria-label="REII, página inicial" className="rounded-sm text-ink">
          <Logo className="h-[1.05rem] lg:h-[1.15rem]" />
        </Link>

        <nav aria-label="Principal" className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.9rem] font-medium text-ink-2 transition-colors duration-200 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a href={siteConfig.appUrl} className="px-3 text-[0.9rem] font-medium text-ink-2 transition-colors hover:text-ink">
            Entrar
          </a>
          <ButtonLink href={siteConfig.appUrl} size="sm">
            {ctaLabel}
          </ButtonLink>
        </div>

        <button
          type="button"
          className="-mr-2 inline-flex size-10 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="menu-movel"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-5">
            <span
              className={cn(
                "absolute left-0 h-[1.5px] w-5 bg-ink transition-all duration-300 ease-out-soft",
                open ? "top-1.5 rotate-45" : "top-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 h-[1.5px] w-5 bg-ink transition-all duration-300 ease-out-soft",
                open ? "top-1.5 -rotate-45" : "top-3",
              )}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <m.div
            id="menu-movel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-16 bottom-0 bg-white md:hidden"
          >
            <nav aria-label="Principal (telemóvel)" className="shell flex h-full flex-col pt-6 pb-8">
              {siteConfig.nav.map((item, i) => (
                <m.div
                  key={item.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-line py-4 text-[1.75rem] font-medium tracking-[-0.03em] text-ink"
                  >
                    {item.label}
                  </Link>
                </m.div>
              ))}
              <div className="mt-auto grid gap-3">
                <ButtonLink href={siteConfig.appUrl} size="lg" className="w-full">
                  {ctaLabel}
                </ButtonLink>
                <ButtonLink href={siteConfig.appUrl} variant="ghost" size="lg" className="w-full">
                  Entrar
                </ButtonLink>
              </div>
            </nav>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
