import { cn } from "@/lib";
import { cva, VariantProps } from "class-variance-authority";
import { Loader as LucideLoader } from "lucide-react";
import { ComponentProps, forwardRef } from "react";

const loaderStyles = cva("text-muted-foreground", {
  variants: {
    size: {
      default: "h-4 w-4",
      sm: "h-2 w-2",
      lg: "h-6 w-6",
      xl: "h-10 w-10",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

type LoaderProps = ComponentProps<"div"> &
  VariantProps<typeof loaderStyles> & {};

export const Loader = forwardRef<HTMLDivElement, LoaderProps>(
  ({ size, className }, ref) => (
    <div ref={ref} className={cn(loaderStyles({ size }), className)}>
      <LucideLoader className="h-full w-full animate-spin" />
      <div className="bg-secondary text-secondary-foreground">Hello</div>
    </div>
  ),
);
