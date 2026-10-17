import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'navy-inverted';
  size?: 'default' | 'lg' | 'sm' | 'icon';
}

export const ButtonAtom = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'default', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    const baseStyles =
      'inline-flex items-center justify-center font-semibold rounded-2xl transition-all duration-200 select-none disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2';

    const variants = {
      primary:
        'bg-primary text-white hover:bg-primary-hover shadow-[0_2px_10px_rgba(11,58,117,0.18)] active:bg-primary-hover',
      secondary:
        'bg-secondary text-primary hover:bg-sky-deep border border-sky-line/60',
      outline:
        'bg-card text-primary border-2 border-sky-line hover:border-primary/40 hover:bg-sky-main/50',
      ghost:
        'text-ink hover:text-primary hover:bg-sky-main/60',
      'navy-inverted':
        'bg-white text-primary hover:bg-sky-main shadow-[0_4px_16px_rgba(0,0,0,0.12)]',
    };

    const sizes = {
      // Enforce senior-first touch target minimum: height >= 48px
      default: 'h-[52px] px-6 text-lg min-w-[48px]',
      lg: 'h-[58px] px-8 text-xl min-w-[48px]',
      sm: 'h-[48px] px-4 text-base min-w-[48px]',
      icon: 'h-[48px] w-[48px] p-0',
    };

    return (
      <Comp
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);

ButtonAtom.displayName = 'ButtonAtom';
