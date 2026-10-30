import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { WhatsAppCTAButton } from '@/components/molecules/WhatsAppCTAButton';
import { SITE_CONTENT, PRACTICE_CONFIG } from '@/data/content';
import { buildWhatsAppUrl } from '@/lib/utils';

export const HeaderOrganism: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const current = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, current)));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const quickWhatsAppUrl = buildWhatsAppUrl(
    PRACTICE_CONFIG.whatsappRaw,
    SITE_CONTENT.hero.prefilledText
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-border shadow-xs relative">
      {/* Scroll Reading Progress Bar */}
      <div
        className="absolute bottom-0 left-0 h-[2.5px] bg-primary transition-all duration-75 ease-out z-10"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Reading progress"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
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

          <div className="flex flex-col">
            <span className="text-base sm:text-xl font-extrabold tracking-tight text-primary group-hover:text-primary-hover transition-colors leading-tight">
              {PRACTICE_CONFIG.practiceName}
            </span>
            <span className="text-[11px] font-medium text-ink-muted leading-none hidden xs:block sm:hidden">
              Home & Mobile Care
            </span>
          </div>
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

        {/* Desktop Right Action: Live Beacon & WhatsApp CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-main text-primary text-xs font-semibold border border-sky-line">
            <span className="relative flex h-2 w-2">
              <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
            </span>
            <span>Online · Available This Week</span>
          </div>

          <WhatsAppCTAButton
            size="sm"
            label="Chat on WhatsApp"
            locationTag="desktop_nav"
            className="h-10 px-4 text-sm font-semibold shadow-xs"
          />
        </div>

        {/* Mobile Header Quick Actions & Toggle */}
        <div className="flex items-center gap-2 sm:hidden">
          {/* Quick 1-tap call for immediate reassurance */}
          <a
            href={`tel:${PRACTICE_CONFIG.phoneRaw}`}
            className="w-10 h-10 rounded-xl bg-sky-main text-primary flex items-center justify-center border border-sky-line/80 focus-visible:ring-2 focus-visible:ring-primary active:scale-95 transition-transform"
            aria-label={`Call dentist directly: ${PRACTICE_CONFIG.phoneDisplay}`}
          >
            <Phone className="w-4 h-4 text-primary" aria-hidden="true" />
          </a>

          {/* Quick WhatsApp intent */}
          <a
            href={quickWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center border border-primary/20 focus-visible:ring-2 focus-visible:ring-primary active:scale-95 transition-transform"
            aria-label="Message dentist on WhatsApp"
          >
            <MessageSquare className="w-4 h-4 text-white" aria-hidden="true" />
          </a>

          {/* Menu Drawer Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 rounded-xl bg-secondary text-primary flex items-center justify-center border border-border focus-visible:ring-2 focus-visible:ring-primary active:scale-95 transition-transform"
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

      {/* Mobile Drawer Overlay Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-16 bg-[#0B3A75]/30 backdrop-blur-xs z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Clean Senior-Friendly Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden relative z-50 bg-white border-t border-border px-5 pt-4 pb-8 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 max-h-[calc(100vh-4rem)] overflow-y-auto">
          {/* Live Availability Pill */}
          <div className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-sky-main text-xs font-semibold text-primary border border-sky-line mb-4">
            <span className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
              </span>
              <span>Available for visits this week</span>
            </span>
            <span className="text-[11px] font-mono text-ink-muted">Mon–Sat</span>
          </div>

          {/* Navigation Links with generous 50px touch targets */}
          <nav className="flex flex-col divide-y divide-sky-line/40" aria-label="Mobile Navigation">
            {SITE_CONTENT.header.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-lg font-bold text-primary hover:bg-sky-main/60 py-3.5 px-3 rounded-xl transition-colors active:scale-[0.99]"
              >
                <span>{link.label}</span>
                <span className="text-primary/40 text-sm font-semibold">→</span>
              </a>
            ))}
          </nav>

          {/* Direct Contact Actions */}
          <div className="mt-5 pt-4 border-t border-sky-line/80 space-y-3">
            <WhatsAppCTAButton
              size="default"
              label="Chat on WhatsApp"
              locationTag="mobile_menu"
              className="w-full text-center h-12 text-base font-bold shadow-xs"
            />

            <a
              href={`tel:${PRACTICE_CONFIG.phoneRaw}`}
              className="flex items-center justify-center gap-2.5 w-full h-12 rounded-xl bg-white text-primary font-bold text-base border-2 border-sky-line hover:bg-sky-main active:scale-[0.98] transition-all shadow-2xs"
            >
              <Phone className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
              <span>Call: {PRACTICE_CONFIG.phoneDisplay}</span>
            </a>

            <p className="text-center text-xs text-ink-muted pt-1">
              Free to ask · No forms · Replies in ~30 mins
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
