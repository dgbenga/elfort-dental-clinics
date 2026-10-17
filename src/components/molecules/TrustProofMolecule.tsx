import React from 'react';
import { Award, ShieldCheck, Tag, HeartHandshake, FileCheck, Stethoscope } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface TrustProofMoleculeProps {
  iconName: string;
  text: string;
  className?: string;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Award,
  ShieldCheck,
  Tag,
  HeartHandshake,
  FileCheck,
  Stethoscope,
};

export const TrustProofMolecule: React.FC<TrustProofMoleculeProps> = ({
  iconName,
  text,
  className,
}) => {
  const IconComponent = ICON_MAP[iconName] || ShieldCheck;

  return (
    <div
      className={cn(
        'inline-flex items-center gap-3 px-4 py-3 rounded-2xl bg-white border border-sky-line shadow-clinical',
        className
      )}
    >
      <div className="w-8 h-8 rounded-xl bg-sky-main text-primary flex items-center justify-center shrink-0 border border-sky-line/50">
        <IconComponent className="w-4 h-4" aria-hidden="true" />
      </div>
      <span className="text-foreground font-semibold text-base sm:text-lg">
        {text}
      </span>
    </div>
  );
};
