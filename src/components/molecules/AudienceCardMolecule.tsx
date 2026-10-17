import React from 'react';
import { HeartHandshake, Briefcase, Smile, Users } from 'lucide-react';
import { CardAtom } from '@/components/atoms/CardAtom';
import { HeadingAtom } from '@/components/atoms/HeadingAtom';
import { IconWrapperAtom } from '@/components/atoms/IconWrapperAtom';
import type { AudienceItem } from '@/data/content';
import { cn } from '@/lib/utils';

export interface AudienceCardMoleculeProps {
  audience: AudienceItem;
  className?: string;
}

const ICON_MAP: Record<string, React.ElementType> = {
  HeartHandshake,
  Briefcase,
  Smile,
  Users,
};

export const AudienceCardMolecule: React.FC<AudienceCardMoleculeProps> = ({
  audience,
  className,
}) => {
  const IconComponent = ICON_MAP[audience.icon] || HeartHandshake;

  return (
    <CardAtom
      variant="default"
      className={cn(
        'flex flex-col h-full bg-white border border-sky-line hover:border-primary/40 transition-colors',
        className
      )}
    >
      <div className="mb-5">
        <IconWrapperAtom variant="sky" size="md">
          <IconComponent className="w-6 h-6 text-primary" aria-hidden="true" />
        </IconWrapperAtom>
      </div>

      <HeadingAtom level={3} className="text-2xl mb-3 text-primary font-bold">
        {audience.title}
      </HeadingAtom>

      <p className="text-foreground text-lg leading-relaxed">
        {audience.description}
      </p>
    </CardAtom>
  );
};
