import React from "react";
import { clsx } from "clsx";

type TypographyProps = {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  children: React.ReactNode;
  className?: string;
};

export const Typography = ({
  variant,
  children,
  className,
}: TypographyProps) => {
  const Component = variant;

  const classes = clsx(
    {
      "font-heading": ["h1", "h2", "h3", "h4", "h5", "h6"].includes(variant),
      "font-body": ["p", "span"].includes(variant),
      "text-3xl md:text-4xl lg:text-5xl font-bold leading-tight":
        variant === "h1",
      "text-2xl md:text-3xl lg:text-4xl font-bold leading-tight":
        variant === "h2",
      "text-xl md:text-2xl lg:text-3xl font-bold leading-tight":
        variant === "h3",
      "text-lg md:text-xl lg:text-2xl font-bold leading-tight":
        variant === "h4",
      "text-base md:text-lg lg:text-xl font-semibold leading-normal":
        variant === "h5",
      "text-base lg:text-lg font-semibold leading-normal": variant === "h6",
      "text-base font-normal leading-relaxed": variant === "p",
      "text-sm font-normal": variant === "span",
    },
    className
  );

  return <Component className={classes}>{children}</Component>;
};
