import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const className = "font-no";

const textStyles = cva("text-inherit", {
  variants: {
    size: {
      sm: "",
      md: "",
      lg: "text-base xs:text-xl md:text-2xl",
    },
    font: {
      sora: "font-sora",
      inverse: "font-inverse",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    font: "sora",
    size: "lg",
    weight: "normal",
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textStyles> {
  asChild?: boolean;
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, size, font, ...props }, ref) => {
    return <p {...props} className={cn(textStyles({ font, size }))}></p>;
  }
);

Text.displayName = "Text";

export { Text, textStyles };
