"use client";

import { useId } from "react";
import { ArrowRight, Search } from "lucide-react";

import { ctaLabel, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type AddressFormProps = {
  /** `dark` para fundos escuros ou fotografias. */
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
      action={siteConfig.appUrl}
      method="get"
      className={cn(
        "flex w-full flex-col gap-2 rounded-[1.75rem] p-1.5 transition-shadow duration-300 sm:flex-row sm:items-center sm:rounded-full",
        dark
          ? "bg-white/12 ring-1 ring-white/25 backdrop-blur-md focus-within:ring-white/60"
          : "bg-white ring-1 ring-line shadow-soft focus-within:ring-rent/50",
        className,
      )}
    >
      <label htmlFor={id} className="sr-only">
        Morada ou freguesia do imóvel
      </label>
      <div className="flex flex-1 items-center gap-3 pl-4">
        <Search aria-hidden className={cn("size-4 shrink-0", dark ? "text-white/70" : "text-ink-3")} />
        <input
          id={id}
          name="local"
          type="text"
          autoComplete="street-address"
          placeholder="Morada ou freguesia"
          className={cn(
            "h-12 w-full min-w-0 bg-transparent text-[1rem] outline-none",
            dark ? "text-white placeholder:text-white/65" : "text-ink placeholder:text-ink-3",
          )}
        />
      </div>
      <button
        type="submit"
        className={cn(
          "group inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full px-6 text-[0.95rem] font-medium transition-colors duration-200 focus-visible:ring-2 focus-visible:outline-none",
          dark ? "bg-cream text-rent-deep hover:bg-white focus-visible:ring-white" : "bg-rent text-white hover:bg-rent-deep focus-visible:ring-rent/40",
        )}
      >
        {ctaLabel}
        <ArrowRight aria-hidden className="size-4 transition-transform duration-300 ease-out-soft group-hover:translate-x-0.5" />
      </button>
    </form>
  );
}
