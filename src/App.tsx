import React from 'react';
import { HeaderOrganism } from '@/components/organisms/HeaderOrganism';
import { HeroOrganism } from '@/components/organisms/HeroOrganism';
import { HowItWorksOrganism } from '@/components/organisms/HowItWorksOrganism';
import { WhoWeHelpOrganism } from '@/components/organisms/WhoWeHelpOrganism';
import { ServicesPricingOrganism } from '@/components/organisms/ServicesPricingOrganism';
import { EquipmentSafetyOrganism } from '@/components/organisms/EquipmentSafetyOrganism';
import { ScopeBoundariesOrganism } from '@/components/organisms/ScopeBoundariesOrganism';
import { TrustPromiseOrganism } from '@/components/organisms/TrustPromiseOrganism';
import { MeetDentistOrganism } from '@/components/organisms/MeetDentistOrganism';
import { FAQOrganism } from '@/components/organisms/FAQOrganism';
import { ServiceAreaHoursOrganism } from '@/components/organisms/ServiceAreaHoursOrganism';
import { FinalCTABandOrganism } from '@/components/organisms/FinalCTABandOrganism';
import { FooterOrganism } from '@/components/organisms/FooterOrganism';
import { FloatingWhatsAppCTAOrganism } from '@/components/organisms/FloatingWhatsAppCTAOrganism';

export const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen selection:bg-sky-deep selection:text-navy">
      <HeaderOrganism />
      <main className="flex-1">
        <HeroOrganism />
        <HowItWorksOrganism />
        <WhoWeHelpOrganism />
        <ServicesPricingOrganism />
        <EquipmentSafetyOrganism />
        <ScopeBoundariesOrganism />
        <TrustPromiseOrganism />
        <MeetDentistOrganism />
        <FAQOrganism />
        <ServiceAreaHoursOrganism />
        <FinalCTABandOrganism />
      </main>
      <FooterOrganism />
      <FloatingWhatsAppCTAOrganism />
    </div>
  );
};

export default App;
