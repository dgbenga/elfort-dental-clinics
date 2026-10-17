import React from 'react';
import { cn } from '@/lib/utils';

export interface IconWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'sky' | 'navy' | 'plain' | 'white';
  size?: 'sm' | 'md' | 'lg';
}

export const IconWrapperAtom: React.FC<IconWrapperProps> = ({
  variant = 'sky',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const variants = {
    sky: 'bg-sky-main text-primary border border-sky-line',
    navy: 'bg-primary text-white',
    plain: 'text-primary',
    white: 'bg-white text-primary border border-sky-line shadow-sm',
  };

  const sizes = {
    sm: 'w-10 h-10 p-2 rounded-xl text-lg',
    md: 'w-12 h-12 p-2.5 rounded-2xl text-xl',
    lg: 'w-16 h-16 p-3.5 rounded-2xl text-2xl',
  };

  return (
    <div
      className={cn(
        'inline-flex items-center justify-center shrink-0 transition-colors',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
