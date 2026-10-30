import React from 'react';
import { ButtonAtom, type ButtonProps } from '@/components/atoms/ButtonAtom';
import { buildWhatsAppUrl, cn } from '@/lib/utils';
import { PRACTICE_CONFIG } from '@/data/content';

export interface WhatsAppCTAButtonProps extends Omit<ButtonProps, 'children'> {
  prefilledText?: string;
  label?: string;
  subLabel?: string;
  locationTag?: string;
  containerClassName?: string;
}

export const WhatsAppCTAButton: React.FC<WhatsAppCTAButtonProps> = ({
  prefilledText = "Hello Elfort Dental Clinics, I'd like to ask about booking a mobile dental visit.",
  label = 'Message Us on WhatsApp',
  subLabel,
  locationTag = 'general',
  containerClassName,
  className,
  variant = 'primary',
  size = 'default',
  ...props
}) => {
  const url = buildWhatsAppUrl(PRACTICE_CONFIG.whatsappRaw, prefilledText);

  const handleClick = () => {
    // Analytics telemetry tag if gtag/plausible is present
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: (event: string, action: string, params: Record<string, string>) => void }).gtag) {
      (window as unknown as { gtag: (event: string, action: string, params: Record<string, string>) => void }).gtag('event', 'whatsapp_click', {
        button_location: locationTag,
        prefilled_intent: prefilledText.slice(0, 40),
      });
    }
  };

  return (
    <div className={cn('inline-flex flex-col items-center gap-1.5 w-full', containerClassName || 'sm:w-auto')}>
      <ButtonAtom
        asChild
        variant={variant}
        size={size}
        className={cn('w-full gap-3 text-center', !containerClassName && 'sm:w-auto', className)}
        {...props}
      >
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          aria-label={`${label} via WhatsApp`}
        >
          {/* Calm monochrome white WhatsApp SVG icon */}
          <svg
            className="w-5 h-5 shrink-0 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M12.031 0C5.397 0 0 5.397 0 12.031c0 2.124.554 4.195 1.608 6.015L0 24l6.147-1.583a12.016 12.016 0 005.884 1.528h.005c6.633 0 12.03-5.398 12.03-12.031 0-3.214-1.252-6.234-3.526-8.508C18.265 1.252 15.245 0 12.031 0zm-.005 22.013h-.004a9.986 9.986 0 01-5.093-1.39l-.365-.216-3.784.974.996-3.689-.237-.377a9.967 9.967 0 01-1.536-5.284C2.008 6.505 6.504 2.008 12.026 2.008c2.674 0 5.188 1.042 7.08 2.934 1.89 1.892 2.93 4.406 2.93 7.081 0 5.522-4.496 10.02-10.01 10.02zm5.49-7.502c-.3-.15-1.776-.877-2.052-.977-.275-.1-.476-.15-.676.15-.201.3-.777.977-.952 1.178-.175.2-.351.226-.652.075-.301-.15-1.27-.468-2.42-1.493-.894-.798-1.498-1.784-1.674-2.085-.175-.3-.019-.463.132-.612.136-.135.301-.351.452-.527.15-.175.201-.3.301-.501.1-.2.05-.376-.025-.526-.075-.15-.677-1.631-.927-2.233-.244-.587-.492-.507-.677-.517-.175-.009-.376-.009-.577-.009-.201 0-.527.075-.802.376-.276.3-1.054 1.03-1.054 2.511s1.079 2.912 1.23 3.112c.15.201 2.124 3.243 5.145 4.547.719.31 1.28.496 1.718.636.721.229 1.378.197 1.897.12.578-.087 1.776-.726 2.027-1.428.25-.702.25-1.304.175-1.429-.075-.125-.276-.2-.577-.35z" />
          </svg>
          <span>{label}</span>
        </a>
      </ButtonAtom>
      {subLabel && (
        <span className="text-xs text-ink-muted text-center font-normal px-2">
          {subLabel}
        </span>
      )}
    </div>
  );
};
