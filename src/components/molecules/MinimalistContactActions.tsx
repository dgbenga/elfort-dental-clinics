import React from 'react';
import { Phone } from 'lucide-react';
import { buildWhatsAppUrl, cn } from '@/lib/utils';
import { PRACTICE_CONFIG, SITE_CONTENT } from '@/data/content';

export interface MinimalistContactActionsProps {
  prefilledText?: string;
  locationTag?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'inverted';
  className?: string;
}

export const MinimalistContactActions: React.FC<MinimalistContactActionsProps> = ({
  prefilledText = SITE_CONTENT.hero.prefilledText,
  locationTag = 'contact_action',
  size = 'md',
  variant = 'default',
  className,
}) => {
  const whatsappUrl = buildWhatsAppUrl(PRACTICE_CONFIG.whatsappRaw, prefilledText);

  const handleClick = () => {
    if (
      typeof window !== 'undefined' &&
      (window as unknown as { gtag?: (event: string, action: string, params: Record<string, string>) => void }).gtag
    ) {
      (window as unknown as { gtag: (event: string, action: string, params: Record<string, string>) => void }).gtag(
        'event',
        'whatsapp_click',
        {
          button_location: locationTag,
          prefilled_intent: prefilledText.slice(0, 40),
        }
      );
    }
  };

  const sizeClasses = {
    sm: 'w-10 h-10 rounded-xl',
    md: 'w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl',
    lg: 'w-12 h-12 sm:w-14 sm:h-14 rounded-2xl',
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  const isDark = variant === 'inverted';

  return (
    <div className={cn('inline-flex items-center gap-2.5', className)}>
      {/* Small Minimalist WhatsApp Icon Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={cn(
          sizeClasses[size],
          'flex items-center justify-center transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 shrink-0',
          isDark
            ? 'bg-white text-primary hover:bg-sky-main shadow-md'
            : 'bg-primary text-white hover:bg-primary-hover shadow-xs'
        )}
        aria-label="Message Dr. Elfort on WhatsApp"
        title="Message on WhatsApp"
      >
        <svg
          className={cn(iconSizes[size], 'fill-current shrink-0')}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M12.031 0C5.397 0 0 5.397 0 12.031c0 2.124.554 4.195 1.608 6.015L0 24l6.147-1.583a12.016 12.016 0 005.884 1.528h.005c6.633 0 12.03-5.398 12.03-12.031 0-3.214-1.252-6.234-3.526-8.508C18.265 1.252 15.245 0 12.031 0zm-.005 22.013h-.004a9.986 9.986 0 01-5.093-1.39l-.365-.216-3.784.974.996-3.689-.237-.377a9.967 9.967 0 01-1.536-5.284C2.008 6.505 6.504 2.008 12.026 2.008c2.674 0 5.188 1.042 7.08 2.934 1.89 1.892 2.93 4.406 2.93 7.081 0 5.522-4.496 10.02-10.01 10.02zm5.49-7.502c-.3-.15-1.776-.877-2.052-.977-.275-.1-.476-.15-.676.15-.201.3-.777.977-.952 1.178-.175.2-.351.226-.652.075-.301-.15-1.27-.468-2.42-1.493-.894-.798-1.498-1.784-1.674-2.085-.175-.3-.019-.463.132-.612.136-.135.301-.351.452-.527.15-.175.201-.3.301-.501.1-.2.05-.376-.025-.526-.075-.15-.677-1.631-.927-2.233-.244-.587-.492-.507-.677-.517-.175-.009-.376-.009-.577-.009-.201 0-.527.075-.802.376-.276.3-1.054 1.03-1.054 2.511s1.079 2.912 1.23 3.112c.15.201 2.124 3.243 5.145 4.547.719.31 1.28.496 1.718.636.721.229 1.378.197 1.897.12.578-.087 1.776-.726 2.027-1.428.25-.702.25-1.304.175-1.429-.075-.125-.276-.2-.577-.35z" />
        </svg>
      </a>

      {/* Small Minimalist Phone Call Icon Button */}
      <a
        href={`tel:${PRACTICE_CONFIG.phoneRaw}`}
        className={cn(
          sizeClasses[size],
          'flex items-center justify-center transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 shrink-0',
          isDark
            ? 'bg-white/15 text-white hover:bg-white/25 border border-white/30 shadow-md'
            : 'bg-white text-primary border-2 border-sky-line hover:bg-sky-main/60 hover:border-primary/40 shadow-xs'
        )}
        aria-label={`Call Dr. Elfort directly`}
        title="Call dentist"
      >
        <Phone className={cn(iconSizes[size], 'shrink-0')} aria-hidden="true" />
      </a>
    </div>
  );
};

