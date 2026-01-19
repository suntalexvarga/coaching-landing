import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-sm px-4 py-1 text-xs font-sans font-semibold uppercase tracking-wide transition-colors w-fit whitespace-nowrap shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[#c9a961] text-white",
        secondary:
          "bg-gray-100 text-gray-900",
        destructive:
          "bg-red-500 text-white",
        outline:
          "border border-gray-200 text-gray-900",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
