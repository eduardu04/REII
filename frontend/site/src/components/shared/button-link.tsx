import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonLink = cva(
  "group inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-medium tracking-[-0.01em] whitespace-nowrap transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
  {
    variants: {
      variant: {
        primary: "bg-rent text-white hover:bg-rent-deep focus-visible:ring-rent",
        inverted: "bg-cream text-rent-deep hover:bg-white focus-visible:ring-white focus-visible:ring-offset-rent-deep",
        ghost: "text-ink ring-1 ring-line hover:bg-surface ring-inset focus-visible:ring-ink",
      },
      size: {
        sm: "h-9 px-4 text-[0.85rem]",
        md: "h-11 px-5 text-[0.95rem]",
        lg: "h-13 px-6 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type ButtonLinkProps = React.ComponentProps<"a"> &
  VariantProps<typeof buttonLink> & {
    /** Seta diagonal que se desloca no hover (para ligações que levam a outra página). */
    arrow?: boolean;
  };

export function ButtonLink({ className, variant, size, arrow = false, children, ...props }: ButtonLinkProps) {
  return (
    <a className={cn(buttonLink({ variant, size }), className)} {...props}>
      {children}
    </a>
  );
}
