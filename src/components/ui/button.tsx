import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-sans font-semibold uppercase tracking-wide transition-colors disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950",
  {
    variants: {
      variant: {
        default: "bg-[#c9a961] text-white hover:bg-[#b89850]",
        destructive:
          "bg-red-500 text-white hover:bg-red-500/90",
        outline:
          "border border-gray-200 bg-white hover:bg-gray-50 text-gray-900",
        secondary:
          "bg-gray-900 text-white hover:bg-gray-800",
        ghost:
          "hover:bg-gray-100 text-gray-900",
        link: "text-gray-900 underline-offset-4 hover:underline",
      },
      size: {
        default: "px-6 py-3",
        sm: "px-4 py-2 text-sm",
        lg: "px-8 py-4 text-lg",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
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
