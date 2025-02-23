import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

// const className = "text-6xl font-sem";

const headingStyles = cva("text-inherit", {
  variants: {
    size: {
      h1: "text-2xl xs:text-[40px] md:text-6xl",
      h2: "text-2xl xs:text-[40px] md:text-[50px]",
      h3: "text-3xl",
    },
    font: {
      sora: "font-sora",
      inverse: "font-inverse",
    },
    weight: {
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    font: "sora",
    size: "h1",
    weight: "bold",
  },
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingStyles> {
  asChild?: boolean;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, size, font, ...props }, ref) => {
    const Slot = size ?? "h1";
    return (
      <Slot
        {...props}
        ref={ref}
        className={cn(headingStyles({ font, size }), className)}
      ></Slot>
    );
  }
);

Heading.displayName = "Heading";

export { Heading, headingStyles };
