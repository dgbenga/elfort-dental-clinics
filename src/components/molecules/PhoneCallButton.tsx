import React from 'react';
import { Phone } from 'lucide-react';
import { ButtonAtom, type ButtonProps } from '@/components/atoms/ButtonAtom';
import { PRACTICE_CONFIG } from '@/data/content';
import { cn } from '@/lib/utils';

export interface PhoneCallButtonProps extends Omit<ButtonProps, 'children'> {
  label?: string;
  phoneRaw?: string;
}

export const PhoneCallButton: React.FC<PhoneCallButtonProps> = ({
  label = `Call: ${PRACTICE_CONFIG.phoneDisplay}`,
  phoneRaw = PRACTICE_CONFIG.phoneRaw,
  variant = 'outline',
  size = 'default',
  className,
  ...props
}) => {
  return (
    <ButtonAtom
      asChild
      variant={variant}
      size={size}
      className={cn('gap-2.5 w-full sm:w-auto font-medium', className)}
      {...props}
    >
      <a href={`tel:${phoneRaw}`} aria-label={`Call the dentist directly at ${PRACTICE_CONFIG.phoneDisplay}`}>
        <Phone className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
        <span>{label}</span>
      </a>
    </ButtonAtom>
  );
};
