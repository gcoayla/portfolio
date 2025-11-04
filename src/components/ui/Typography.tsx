import React from 'react';
import { clsx } from 'clsx';

type TypographyProps = {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  children: React.ReactNode;
  className?: string;
};

export const Typography = ({ variant, children, className }: TypographyProps) => {
  const Component = variant;

  const classes = clsx(
    {
      'font-heading': ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(variant),
      'font-body': ['p', 'span'].includes(variant),
    },
    className
  );

  return <Component className={classes}>{children}</Component>;
};
