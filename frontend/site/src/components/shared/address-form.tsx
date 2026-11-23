"use client";

import { useId } from "react";
import { ArrowRight, MapPin } from "lucide-react";

import { ctaLabel, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type AddressFormProps = {
  /** `dark` para fundos verde-escuros (CTA final). */
  tone?: "light" | "dark";
  className?: string;
};

/**
 * Primeiro passo da análise: só a morada ou freguesia (padrão Opendoor).
 * Envia para o onboarding da app; a app trata a pesquisa da localização.
 */
export function AddressForm({ tone = "light", className }: AddressFormProps) {
  const id = useId();
  const dark = tone === "dark";

  return (
    <form
      action={`${siteConfig.appUrl}`}
      method="get"
      className={cn(
        "flex w-full flex-col gap-2 rounded-2xl p-2 sm:flex-row sm:items-center",
        dark ? "bg-white/10 ring-1 ring-white/20" : "bg-card shadow-card ring-1 ring-line",
        className,
      )}
    >
      <label htmlFor={id} className="sr-only">
        Morada ou freguesia do imóvel
      </label>
      <div className="flex flex-1 items-center gap-2 px-3">
        <MapPin aria-hidden className={cn("size-4 shrink-0", dark ? "text-white/70" : "text-ink-soft")} />
        <input
          id={id}
          name="local"
          type="text"
          autoComplete="street-address"
          placeholder="Morada ou freguesia"
          className={cn(
            "h-11 w-full min-w-0 bg-transparent text-base outline-none",
            dark ? "text-white placeholder:text-white/60" : "text-ink placeholder:text-ink-soft/80",
          )}
        />
      </div>
      <button
        type="submit"
        className={cn(
          "group inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl px-5 text-sm font-medium transition-colors duration-200 focus-visible:ring-3 focus-visible:outline-none",
          dark
            ? "bg-white text-rent hover:bg-cream focus-visible:ring-white/50"
            : "bg-rent text-white hover:bg-rent-deep focus-visible:ring-rent/30",
        )}
      >
        {ctaLabel}
        <ArrowRight aria-hidden className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      </button>
    </form>
  );
}
