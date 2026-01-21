import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-sans font-black uppercase tracking-[0.15em] transition-all duration-500 disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20",
  {
    variants: {
      variant: {
        default: "bg-cta text-white hover:bg-cta-hover shadow-[0_10px_30px_-10px_rgba(243,106,60,0.4)] hover:shadow-[0_15px_40px_-10px_rgba(243,106,60,0.5)] active:scale-[0.98]",
        destructive:
          "bg-red-500 text-white hover:bg-red-500/90 shadow-lg active:scale-[0.98]",
        outline:
          "border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/20 text-white shadow-xl backdrop-blur-sm active:scale-[0.98]",
        secondary:
          "bg-cta-secondary text-white hover:bg-cta-secondary-hover shadow-[0_10px_30px_-10px_rgba(78,193,200,0.3)] hover:shadow-[0_15px_40px_-10px_rgba(78,193,200,0.4)] active:scale-[0.98]",
        ghost:
          "hover:bg-white/5 text-white active:scale-[0.98]",
        link: "text-white underline-offset-4 hover:underline",
      },
      size: {
        default: "px-8 py-5",
        sm: "px-5 py-2.5 text-xs",
        lg: "px-12 py-7 text-lg",
        icon: "size-11",
        "icon-sm": "size-9",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
