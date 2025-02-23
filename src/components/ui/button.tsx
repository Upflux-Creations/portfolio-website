import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        fancy:
          "relative bg-secondary text-secondary border border-primary overflow-hidden",
      },
      size: {
        default: "h-11 px-4 py-2",
        sm: "h-10 rounded-md px-3",
        lg: "h-12 rounded-md px-8",
        icon: "size-10",
      },
      radius: {
        default: "rounded-md",
        sides: "rounded-r-full rounded-l-full",
        circle: "rounded-full",
      },
      iconSize: {
        default: "[&_svg]:size-4",
        sm: "[&_svg]:size-3",
        lg: "[&_svg]:size-6",
        xl: "[&_svg]:size-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      radius: "default",
      iconSize: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, radius, size, iconSize, asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, radius, iconSize }),
          "group relative ",
          className
        )}
        ref={ref}
        {...props}
      >
        {variant === "fancy" ? (
          <>
            <span className="relative z-10 inline-flex items-center justify-center gap-2 transition-colors duration-300 group-hover:text-primary">
              {props.children}
            </span>
            <span className="absolute inset-0 bg-primary w-[120%] -left-[10%] skew-x-[30deg] transition-transform duration-500 ease-[cubic-bezier(0.3,1,0.8,1)] group-hover:translate-x-full"></span>
          </>
        ) : (
          props.children
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
