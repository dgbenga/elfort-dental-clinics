import React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'sky' | 'navy' | 'muted';
}

export const CardAtom = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const variants = {
      default:
        'bg-card text-card-foreground border border-sky-line shadow-clinical hover:shadow-clinical-hover transition-all duration-200',
      sky:
        'bg-sky-main/80 text-foreground border border-sky-line/80 shadow-clinical',
      navy:
        'bg-primary text-white border border-primary/20 shadow-clinical',
      muted:
        'bg-sky-deep/50 text-foreground border border-sky-line',
    };

    return (
      <div
        ref={ref}
        className={cn('rounded-2xl p-6 md:p-8', variants[variant], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardAtom.displayName = 'CardAtom';
