import React from 'react';
import { CardAtom } from '@/components/atoms/CardAtom';
import { HeadingAtom } from '@/components/atoms/HeadingAtom';
import { cn } from '@/lib/utils';

export interface ProcessStepMoleculeProps {
  number: string;
  title: string;
  description: string;
  className?: string;
}

export const ProcessStepMolecule: React.FC<ProcessStepMoleculeProps> = ({
  number,
  title,
  description,
  className,
}) => {
  return (
    <CardAtom
      variant="default"
      className={cn(
        'relative flex flex-col justify-between h-full bg-white border border-sky-line hover:border-primary/40 transition-colors',
        className
      )}
    >
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-2xl bg-sky-main text-primary font-bold text-xl flex items-center justify-center border border-sky-line">
            {number}
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">
            Step {number}
          </span>
        </div>
        <HeadingAtom level={3} className="text-2xl mb-3 text-primary">
          {title}
        </HeadingAtom>
        <p className="text-foreground text-lg leading-relaxed">
          {description}
        </p>
      </div>
    </CardAtom>
  );
};
