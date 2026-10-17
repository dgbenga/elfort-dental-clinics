import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { PRACTICE_CONFIG, SITE_CONTENT } from '@/data/content';

export const FooterOrganism: React.FC = () => {
  return (
    <footer className="bg-[#082C5A] text-white/80 py-16 border-t border-white/10 pb-24 md:pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Practice Info */}
          <div>
            <span className="text-xl font-bold text-white block mb-2">
              {PRACTICE_CONFIG.practiceName}
            </span>
            <span className="text-sm font-medium text-white/90 block mb-3">
              {PRACTICE_CONFIG.title}
            </span>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              Compassionate, licensed dental care delivered to your home, workplace, church, or community. Dedicated to patient comfort, transparent prices, and gentle treatment.
            </p>
            <div className="space-y-1.5 text-sm text-white/90">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-deep shrink-0" aria-hidden="true" />
                <span>Tel: </span>
                <a
                  href={`tel:${PRACTICE_CONFIG.phoneRaw}`}
                  className="underline hover:text-white transition-colors font-medium"
                >
                  {PRACTICE_CONFIG.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-deep shrink-0" aria-hidden="true" />
                <span>Email: </span>
                <a
                  href={`mailto:${PRACTICE_CONFIG.email}`}
                  className="underline hover:text-white transition-colors"
                >
                  {PRACTICE_CONFIG.email}
                </a>
              </p>
            </div>
          </div>

          {/* Clinical & Outreach Standards */}
          <div>
            <span className="text-base font-bold text-white block mb-3">
              Clinical & Outreach Standards
            </span>
            <div className="space-y-2 text-sm text-white/70">
              <p>Licensed Dental Surgery & Mobile Clinical Team.</p>
              <p>Community Dental Outreach & Corporate Wellness Division.</p>
              <p>Church & Community Free Consultation Partner.</p>
              <p>{PRACTICE_CONFIG.insuranceText}.</p>
              <p>Hospital-grade sterilization & vacuum-sealed instrument packaging.</p>
            </div>
          </div>

          {/* Privacy & Clinical Disclaimer */}
          <div>
            <span className="text-base font-bold text-white block mb-3">
              Patient Care & Privacy
            </span>
            <p className="text-xs text-white/70 leading-relaxed mb-4">
              {SITE_CONTENT.footer.disclaimer}
            </p>
            <p className="text-xs text-white/70 leading-relaxed">
              {SITE_CONTENT.footer.privacyNote}
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© 2026 {PRACTICE_CONFIG.practiceName}. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span>·</span>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Care
            </a>
            <span>·</span>
            <a href="#" className="hover:text-white transition-colors">
              Outreach Guidelines
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
