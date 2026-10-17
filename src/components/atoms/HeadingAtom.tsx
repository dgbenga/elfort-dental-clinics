import React from 'react';
import { cn } from '@/lib/utils';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'span';
}

export const HeadingAtom: React.FC<HeadingProps> = ({
  level = 2,
  as,
  className,
  children,
  ...props
}) => {
  const Component = as || (`h${level}` as React.ElementType);

  // Pure typographic hierarchy: tight tracking, high-legibility scale, no pills
  const styles = {
    1: 'text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-[1.15]',
    2: 'text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight text-primary leading-[1.22]',
    3: 'text-2xl sm:text-[1.65rem] font-semibold text-primary tracking-tight leading-[1.3]',
    4: 'text-xl sm:text-2xl font-semibold text-primary leading-[1.35]',
  };

  return (
    <Component className={cn(styles[level], className)} {...props}>
      {children}
    </Component>
  );
};
