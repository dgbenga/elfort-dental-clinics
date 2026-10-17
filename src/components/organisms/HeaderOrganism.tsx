import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { WhatsAppCTAButton } from '@/components/molecules/WhatsAppCTAButton';
import { SITE_CONTENT, PRACTICE_CONFIG } from '@/data/content';

export const HeaderOrganism: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-border shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Identity - Perfectly Aligned */}
        <a
          href="#"
          className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg py-1 px-1 transition-colors shrink-0"
          aria-label={`${PRACTICE_CONFIG.practiceName} home`}
        >
          {/* Clinical Emblem */}
          <div className="w-9 h-9 rounded-lg bg-primary text-white flex items-center justify-center font-bold shadow-xs group-hover:bg-primary-hover transition-colors shrink-0">
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm2.5 15h-5v-1h5v1zm0-2h-5v-1h5v1zm-2.5-4c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
            </svg>
          </div>

          <span className="text-lg sm:text-xl font-extrabold tracking-tight text-primary group-hover:text-primary-hover transition-colors">
            {PRACTICE_CONFIG.practiceName}
          </span>
        </a>

        {/* Clean, Ordered Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
          {SITE_CONTENT.header.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-foreground/80 hover:text-primary hover:bg-secondary/60 px-3 py-1.5 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Right Action: WhatsApp CTA Only (No Mobile Number) */}
        <div className="hidden sm:flex items-center">
          <WhatsAppCTAButton
            size="sm"
            label="Chat on WhatsApp"
            locationTag="desktop_nav"
            className="h-10 px-4 text-sm font-semibold shadow-xs"
          />
        </div>

        {/* Mobile Toggle Button */}
        <div className="flex items-center sm:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 rounded-lg bg-secondary text-primary flex items-center justify-center border border-border focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-primary" />
            ) : (
              <Menu className="w-5 h-5 text-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Clean Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {SITE_CONTENT.header.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-foreground/80 hover:text-primary hover:bg-secondary px-3.5 py-2.5 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-4 pt-4 border-t border-border">
            <WhatsAppCTAButton
              size="default"
              label="Chat on WhatsApp"
              locationTag="mobile_menu"
              className="w-full text-center h-11 text-base font-semibold"
            />
          </div>
        </div>
      )}
    </header>
  );
};
