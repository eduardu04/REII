"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Logo } from "@/components/brand/logo";
import { ctaLabel, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

/** Cabeçalho fixo: ganha fundo e linha inferior depois de 40 px de scroll. */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-[background-color,border-color,backdrop-filter] duration-200",
        scrolled || open
          ? "border-line bg-cream/85 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link href="/" aria-label="REII, página inicial" className="rounded-md focus-visible:ring-3 focus-visible:ring-rent/30 focus-visible:outline-none">
          <Logo />
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-ink-soft transition-colors duration-200 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href={siteConfig.appUrl} className="px-2 text-sm text-ink-soft transition-colors hover:text-ink">
            Entrar
          </a>
          <a
            href={siteConfig.appUrl}
            className="inline-flex h-9 items-center rounded-lg bg-rent px-4 text-sm font-medium text-white transition-colors duration-200 hover:bg-rent-deep"
          >
            {ctaLabel}
          </a>
        </div>

        <button
          type="button"
          className="-mr-2 inline-flex size-10 items-center justify-center rounded-lg text-ink md:hidden"
          aria-expanded={open}
          aria-controls="menu-movel"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        id="menu-movel"
        hidden={!open}
        className="border-t border-line bg-cream md:hidden"
      >
        <nav aria-label="Principal (telemóvel)" className="container-page flex flex-col py-3">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-3 text-base text-ink last:border-0"
            >
              {item.label}
            </Link>
          ))}
          <a href={siteConfig.appUrl} className="py-3 text-base text-ink-soft">
            Entrar
          </a>
          <a
            href={siteConfig.appUrl}
            className="mt-2 inline-flex h-11 items-center justify-center rounded-xl bg-rent text-sm font-medium text-white"
          >
            {ctaLabel}
          </a>
        </nav>
      </div>
    </header>
  );
}
