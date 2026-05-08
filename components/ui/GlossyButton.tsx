"use client";

import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "rounded-full font-medium text-sm",
    "transition-all duration-200 ease-out",
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40",
    "disabled:opacity-40 disabled:cursor-not-allowed",
  ].join(" "),
  {
    variants: {
      variant: {
        glossy:
          "bg-white/5 backdrop-blur border border-white/10 text-white hover:bg-white/10 hover:border-white/20 active:scale-[0.98]",
        solid:
          "bg-white text-black hover:bg-white/90 active:scale-[0.98]",
        ghost:
          "text-zinc-400 hover:text-white hover:bg-white/5 active:scale-[0.98]",
      },
      size: {
        sm: "px-4 py-2 text-xs",
        md: "px-6 py-3 text-sm",
        lg: "px-8 py-4 text-base",
      },
    },
    defaultVariants: {
      variant: "glossy",
      size: "md",
    },
  }
);

interface GlossyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  as?: "button" | "a";
  href?: string;
}

const GlossyButton = forwardRef<HTMLButtonElement, GlossyButtonProps>(
  ({ className = "", variant, size, as = "button", href, children, ...props }, ref) => {
    const classes = buttonVariants({ variant, size, className });

    if (as === "a" && href) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

GlossyButton.displayName = "GlossyButton";

export { GlossyButton, buttonVariants };
