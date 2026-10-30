import React from 'react';
import { CardAtom } from '@/components/atoms/CardAtom';
import { HeadingAtom } from '@/components/atoms/HeadingAtom';
import { cn } from '@/lib/utils';

export interface ProcessStepMoleculeProps {
  number: string;
  title: string;
  description: string;
  className?: string;
  index?: number;
  total?: number;
}

export const ProcessStepMolecule: React.FC<ProcessStepMoleculeProps> = ({
  number,
  title,
  description,
  className,
  index = 0,
  total = 3,
}) => {
  return (
    <CardAtom
      variant="default"
      className={cn(
        'group relative flex flex-col justify-between h-full bg-white border border-sky-line hover:border-primary/50 hover:shadow-clinical-hover hover:-translate-y-1.5 transition-all duration-300 p-5 sm:p-7 rounded-2xl',
        className
      )}
    >
      <div>
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-sky-main text-primary font-bold text-lg sm:text-xl flex items-center justify-center border border-sky-line group-hover:bg-primary group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-2xs shrink-0">
            {number}
          </div>
          <span className="font-mono text-xs font-bold text-primary/80 uppercase tracking-wider px-2.5 py-1 rounded-md bg-sky-main/60 border border-sky-line/60">
            Step {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
        </div>
        <HeadingAtom level={3} className="text-xl sm:text-2xl mb-2.5 sm:mb-3 text-primary font-bold tracking-tight">
          {title}
        </HeadingAtom>
        <p className="text-foreground text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      </div>

      <div className="pt-4 sm:pt-5 mt-5 sm:mt-6 border-t border-sky-line/40 flex items-center gap-2 text-xs font-semibold text-ink-muted group-hover:text-primary transition-colors">
        <span>Part of Elfort Comfort Protocol</span>
      </div>
    </CardAtom>
  );
};
