# Page Specifications & Atomic Wireframes: Home-Visit Dentist

**Architecture Pattern:** Atomic Design System (shadcn/ui + Radix UI Primitives)  
**Copywriting Guarantee:** Zero Lorem Ipsum, Zero Hollow Buzzwords. Final human copywriting written in full.  
**Invariants Enforced:** The Anti-Pill Law, Senior-First Touch Targets (≥48px), Single-Knob Cascading.  

---

## 1. Atomic Component Taxonomy

```
[ATOMS] ─────────────────────────────────────────────────────────────
• ButtonAtom          (shadcn/ui Button variant: primary, outline, ghost)
• CardAtom            (shadcn/ui Card with 16px radius, #C7DCF3 border)
• HeadingAtom         (Semantic h1/h2/h3 with pure typographic styling)
• IconWrapperAtom     (Lucide icon container in deep navy #0B3A75)
• SeparatorAtom       (Radix Separator in #C7DCF3)
• BadgeAtom           (Accessible status badge, strictly for data/hours)

[MOLECULES] ─────────────────────────────────────────────────────────
• WhatsAppCTAButton   (Pre-encoded wa.me intent link + monochrome WhatsApp icon)
• PhoneCallButton     (Accessible direct dial link with phone icon)
• ServiceCardMolecule (Icon + Service Name + "From" Price + Feature List + CTA)
• ProcessStepMolecule (Step Number Circle + Title + Plain English Walkthrough)
• TrustProofMolecule  (Checkmark/Shield icon + Credential Text)
• FAQAccordionItem    (Radix AccordionItem + Accessible Trigger + Answer Body)
• AudienceCardMolecule(Audience Title + Real-Life Scenario + Reassurance)

[ORGANISMS] ─────────────────────────────────────────────────────────
• HeaderOrganism              (Logo Text + Quick Anchor Nav + Header Contact Actions)
• HeroOrganism                (Headline + Lead Subtitle + Dual CTAs + 3 Proof Badges)
• HowItWorksOrganism          (3-Column Asymmetric Step Progression)
• WhoWeHelpOrganism           (4-Card Grid: Families, Workers, Seniors, Avoiders)
• ServicesPricingOrganism     (4 Service Cards + Transparent Pricing Guarantee)
• EquipmentSafetyOrganism     (2-Column Layout: What We Bring vs What You Provide)
• ScopeBoundariesOrganism     (Two-Tone Card: What We Do at Home vs Clinic Referrals)
• TrustPromiseOrganism        (3 Ethical Commitments in White Cards)
• MeetDentistOrganism         (Photo + Professional Bio + GDC Registration Number)
• FAQOrganism                 (Radix Single-Open Accordion for 7 Objections)
• ServiceAreaHoursOrganism    (Catchment Areas + Working Hours + Emergency Alert)
• FinalCTABandOrganism        (High-Contrast Deep Navy Authority Banner)
• FooterOrganism              (Legal Disclosures + Privacy Policy + Medical Disclaimer)
• FloatingWhatsAppCTAOrganism (Mobile-Only Fixed Sticky Dock at Screen Bottom)
```

---

## 2. Sprint Design System Immutability

Any future feature, modal, or section added to this site must strictly be assembled from these registered Atoms and Molecules. Creating unstyled divs, ad-hoc inline colors, or unregistered buttons is strictly forbidden.

---

## 3. Section-by-Section Wireframes & Final Human Copy

```
=============================================================================
SECTION 1: Header (HeaderOrganism)
=============================================================================
Position: Sticky Top (Z-Index 40)
Purpose: Establish immediate professional identity, provide instant contact access, and enable quick navigation.
Layout: 
  - Desktop (1200px): Horizontal flex, height 80px, background white with 80% opacity and backdrop-blur, subtle bottom border (#C7DCF3).
  - Mobile (375px): Logo text left, "Message" button right, height 64px.
Contents & Exact Copy:
  1. Logo Brand Text: "Dr. [Dentist Name] · Home Dental Care" (or "The Visiting Dentist")
  2. Nav Anchor Links (Desktop only):
     - How It Works (#how-it-works)
     - Who We Help (#who-we-help)
     - Services & Prices (#services)
     - What to Expect (#what-we-bring)
     - Meet Dentist (#about)
     - FAQ (#faq)
  3. Action Buttons:
     - Secondary: "Call: 07000 000000" (tel link)
     - Primary: "Message Us" (wa.me link with generic inquiry prefill)
Interaction: Smooth scroll to anchors; tap target 48px; active focus ring.
Rationale: Reassures visitors immediately that this is a real, licensed practitioner with transparent contact options.
```

```
=============================================================================
SECTION 2: Hero Viewport (HeroOrganism)
=============================================================================
Position: Section 2
Purpose: Deliver the 5-second value proposition, eliminate fear and confusion, and provide the primary conversion trigger.
Layout:
  - Desktop: Asymmetric 2-column or centered high-impact layout (max-w-4xl), py-20, background Soft Sky Blue (#EAF3FF).
  - Mobile (375px): Single vertical stack, py-12, full-width buttons.
Contents & Exact Copy:
  1. Main Headline (H1): 
     "Dental care that comes to you."
  2. Subheadline (Lead Paragraph): 
     "A friendly, licensed dentist visits your home or workplace for check-ups, cleanings, and simple repairs. Clear prices before we begin, and zero pressure."
  3. Primary Call to Action:
     - Button Label: "Message Us on WhatsApp"
     - Sub-text / Micro-copy: "Free to ask · No forms · No obligation · We usually reply within 30 minutes"
     - Destination: https://wa.me/447000000000?text=Hello%20Doctor%2C%20I%27d%20like%20to%20ask%20about%20booking%20a%20home%20visit.
  4. Secondary Call to Action:
     - Button Label: "Prefer to call? 07000 000000"
  5. Trust Proof Points (3 inline proof molecules):
     - Molecule 1: [Checkmark Icon] "Fully Licensed Solo Dentist"
     - Molecule 2: [Shield Icon] "Sterile, Single-Use Instruments"
     - Molecule 3: [Tag Icon] "Clear Price Before We Start"
Interaction: Primary button hover deepens to #082C5A; WhatsApp icon white monochrome.
Rationale: Overcomes cost fear, clinic anxiety, and travel friction within the first 5 seconds.
```

```
=============================================================================
SECTION 3: How It Works (HowItWorksOrganism)
=============================================================================
Position: Section 3
Purpose: Demystify the home visit process and remove procedural uncertainty in 3 plain steps.
Layout:
  - Desktop: 3-column horizontal grid (1fr 1fr 1fr), py-20, background Crisp White (#FFFFFF).
  - Mobile (375px): Vertical stacked list with connecting vertical line.
Contents & Exact Copy:
  Section Heading (H2): "How a home visit works"
  Section Subtitle: "Simple, predictable, and arranged entirely around your day."
  
  Step 1 Molecule:
    - Number: "01"
    - Title: "Send us a message"
    - Body: "Tell us where you are and what you need—whether it's a routine check-up, gentle cleaning, or a specific concern. No lengthy medical forms to fill out."
  
  Step 2 Molecule:
    - Number: "02"
    - Title: "Agree a time and clear price"
    - Body: "We confirm what we can do in your space and give you an exact, upfront price before booking. No surprise bills or hidden travel fees."
  
  Step 3 Molecule:
    - Number: "03"
    - Title: "We come to you"
    - Body: "Your dentist arrives on time with a compact, sterile portable kit. We treat you gently at your own pace, tidy up completely, and leave you in comfort."
Rationale: Breaks down mental resistance by making the entire customer journey feel effortless and transparent.
```

```
=============================================================================
SECTION 4: Who We Help (WhoWeHelpOrganism)
=============================================================================
Position: Section 4
Purpose: Enable immediate self-identification across all 4 key patient demographics.
Layout:
  - Desktop: 4-card grid (2x2 or 4x1), py-20, background Soft Sky Blue (#EAF3FF).
  - Mobile (375px): Single column stacked cards, 16px gap.
Contents & Exact Copy:
  Section Heading (H2): "Care designed around real lives"
  Section Subtitle: "We visit patients wherever traditional dental clinics feel difficult, stressful, or out of reach."
  
  Card 1 (Seniors & Carers):
    - Icon: HeartHandshake (Lucide)
    - Title: "Seniors & Family Carers"
    - Body: "Comfortable, dignified dental care without the struggle of stairs, taxis, or confusing waiting rooms. Family members and carers are always welcome to stay by your side throughout the visit."
  
  Card 2 (Busy Workers & Shift Workers):
    - Icon: Briefcase (Lucide)
    - Title: "Busy Workers & Shift Teams"
    - Body: "Quality check-ups and cleanings that fit around your shifts. We can visit your home on your day off, or come directly to your workplace break room during lunch."
  
  Card 3 (Nervous Patients & Avoiders):
    - Icon: Smile (Lucide)
    - Title: "Nervous Patients & Avoiders"
    - Body: "No judgment, no lectures about missed check-ups, and no clinical panic. You are in complete control: we agree on a hand signal, take frequent breaks, and stop the moment you ask."
  
  Card 4 (Parents & Families):
    - Icon: Users (Lucide)
    - Title: "Parents & Busy Families"
    - Body: "One single appointment for the whole household in the comfort of your own living room. Children feel safe in familiar surroundings, and parents save hours of travel."
Rationale: Addresses each demographic's specific emotional pain point directly.
```

```
=============================================================================
SECTION 5: Services & Clear Pricing (ServicesPricingOrganism)
=============================================================================
Position: Section 5
Purpose: Answer "what do you do and how much does it cost" with complete honesty and zero bill shock.
Layout:
  - Desktop: 4-column service grid (or 2x2 large cards), py-20, background Crisp White (#FFFFFF).
  - Mobile (375px): Vertical card stack with clear prominent pricing badges.
Contents & Exact Copy:
  Section Heading (H2): "Services and honest prices"
  Section Subtitle: "You will always receive a clear, binding price quote before we start any treatment. No hidden surcharges."
  
  Service Card 1:
    - Title: "Comprehensive Home Check-up"
    - Price: "From £75 / $95"
    - Description: "Full oral health examination, soft tissue screening, gum health check, and a plain-English discussion of your teeth."
    - Features:
      • Thorough oral examination
      • Gentle gum health assessment
      • Written personalized care plan
      • Free travel within local catchment
    - Button: "Book a Check-up" (prefilled WhatsApp)
  
  Service Card 2:
    - Title: "Gentle Scaling & Cleaning"
    - Price: "From £95 / $120"
    - Description: "Careful removal of plaque and tartar buildup using gentle portable ultrasonic and hand instruments, followed by a fresh polish."
    - Features:
      • Plaque & tartar removal
      • Stain removal and polish
      • Sensitive-friendly technique
      • Tailored home care advice
    - Button: "Book a Cleaning" (prefilled WhatsApp)
  
  Service Card 3:
    - Title: "Simple Repairs & Pain Relief"
    - Price: "From £120 / $150"
    - Description: "Temporary fillings, recementing loose crowns or bridges, smoothing sharp chips, and immediate relief for aching teeth."
    - Features:
      • Urgent pain relief assessment
      • Recementing loose crowns
      • Smooth chipped tooth edges
      • Temporary protective fillings
    - Button: "Ask About a Repair" (prefilled WhatsApp)
  
  Service Card 4:
    - Title: "Family & Multi-Patient Visit"
    - Price: "Special Combined Rate"
    - Description: "Convenient combined visits for households or care home residents, reducing per-person costs in a single relaxed session."
    - Features:
      • Single convenient visit window
      • Examination for 2+ family members
      • Gentle introduction for young kids
      • Discounted group travel rate
    - Button: "Inquire for Family" (prefilled WhatsApp)

  Bottom Pricing Assurance Note:
    - Text: "Every patient receives an itemized written receipt. While home visits are private care, we provide the full paperwork needed to claim back from your dental cash plan or private insurer if eligible."
Rationale: Directly eliminates the #1 industry barrier (Price Ambiguity & Bill Shock).
```

```
=============================================================================
SECTION 6: What We Bring & What You Need (EquipmentSafetyOrganism)
=============================================================================
Position: Section 6
Purpose: Overcome skepticism regarding hygiene, equipment completeness, and home disruption.
Layout:
  - Desktop: 2-column comparative card layout (1fr 1fr), py-20, background Soft Sky Blue (#EAF3FF).
  - Mobile (375px): 2 stacked cards with distinct visual borders.
Contents & Exact Copy:
  Section Heading (H2): "What we bring, and what you provide"
  Section Subtitle: "We arrive self-sufficient with portable medical equipment. Setting up takes under 10 minutes."
  
  Column 1 (What Your Dentist Brings):
    - Card Title: "What We Bring (100% Self-Contained)"
    - Items:
      • Hospital-grade sterile instruments in sealed surgical pouches (unsealed in front of you)
      • High-intensity medical LED headlamp and clinical dental loupes
      • Compact, whisper-quiet mobile dental unit with suction and polishing handpiece
      • Disposable protective coverings for your furniture and work area
      • Clinical waste container and safe disposal bags
  
  Column 2 (All You Need to Provide):
    - Card Title: "All You Need in Your Home"
    - Items:
      • A comfortable armchair, recliner, sofa, or bed where the patient can lean back
      • Access to one standard household electrical plug socket
      • Adequate room lighting (a window or ceiling light)
      • A small clear table, desk, or countertop for our sterile instrument tray
Rationale: Eliminates caregiver anxiety that a home visit will damage furniture or create medical mess.
```

```
=============================================================================
SECTION 7: What We Can & Can't Do at Home (ScopeBoundariesOrganism)
=============================================================================
Position: Section 7
Purpose: Build deep institutional trust through radical honesty regarding clinical limits.
Layout:
  - Desktop: 2-column side-by-side card (Green checkmarks vs Amber arrows), py-20, background Crisp White (#FFFFFF).
  - Mobile (375px): Stacked cards.
Contents & Exact Copy:
  Section Heading (H2): "Honest care: what we can and cannot do at home"
  Section Subtitle: "Your safety always comes first. If a procedure requires a hospital clinic, we tell you immediately."
  
  Card Left (What We Happily Treat at Home):
    - Title: "Safe & Effective in Your Home"
    - List:
      ✓ Routine check-ups, cancer screening & gum assessments
      ✓ Gentle plaque, tartar, and stain cleaning
      ✓ Temporary fillings and minor composite repairs
      ✓ Recementing dislodged crowns and loose bridges
      ✓ Smoothing rough, broken, or cutting enamel edges
      ✓ Denture checks, adjustments, and soft relines
      ✓ Prescription for dental infections or urgent toothache
  
  Card Right (Procedures That Require a Clinic):
    - Title: "Procedures We Refer to a Clinic"
    - List:
      → Complex surgical tooth extractions or impacted wisdom teeth
      → Full root canal therapy requiring specialized radiographic equipment
      → General anesthesia or intravenous sedation
      → Surgical dental implant placement
      → Extensive multi-unit cosmetic restorations
    - Bottom Reassurance Box:
      "If our initial examination shows that your tooth needs a specialized clinic or hospital setting, we will explain why, provide pain relief, and help coordinate a referral to a trusted local clinic."
Rationale: Radical transparency proves the practitioner is ethical and prioritizes patient safety over booking fees.
```

```
=============================================================================
SECTION 8: Our 3 Core Promises (TrustPromiseOrganism)
=============================================================================
Position: Section 8
Purpose: Provide unshakeable ethical social proof (essential before client reviews accumulate).
Layout:
  - Desktop: 3-column white card grid, py-16, background Soft Sky Blue (#EAF3FF).
  - Mobile (375px): Stacked cards.
Contents & Exact Copy:
  Section Heading (H2): "Our promise to every patient"
  Section Subtitle: "The standards we uphold on every single visit."
  
  Promise 1:
    - Icon: FileCheck (Lucide)
    - Title: "A Clear Price Before We Begin"
    - Body: "You will never receive a surprise bill. We assess your teeth, explain your options in plain English, and confirm the exact cost before opening any instrument."
  
  Promise 2:
    - Icon: ShieldCheck (Lucide)
    - Title: "Zero Pressure, Zero Upselling"
    - Body: "We never recommend unnecessary cosmetic procedures or pressure you into treatments you don't need. Our only goal is comfortable, healthy teeth."
  
  Promise 3:
    - Icon: Stethoscope (Lucide)
    - Title: "Complete Honesty on Limits"
    - Body: "If a tooth cannot be safely or permanently repaired in your home, we say so immediately. We relieve your immediate pain and help guide you to the right clinic."
Rationale: Converts skeptical readers by establishing an unassailable ethical code of conduct.
```

```
=============================================================================
SECTION 9: Meet Your Dentist (MeetDentistOrganism)
=============================================================================
Position: Section 9
Purpose: Humanize the service; people trust a qualified person, not an abstract company.
Layout:
  - Desktop: 2-column split (Left: Professional warm portrait, Right: Bio & Credentials), py-20, background Crisp White (#FFFFFF).
  - Mobile (375px): Portrait on top, credentials below.
Contents & Exact Copy:
  Section Heading (H2): "Meet your visiting dentist"
  
  Profile Content:
    - Doctor Name: "Dr. [Dentist Full Name], BDS"
    - Official Title: "Registered Dental Surgeon & Mobile Dental Practitioner"
    - Regulatory Registration: "General Dental Council (GDC) No. [123456] · Fully Insured"
    - Bio Story:
      "After more than a decade practicing in traditional dental clinics, I realized that the people who need dental care the most are often the ones who find it hardest to reach a surgery—busy shift workers, elderly grandparents with mobility limits, and patients paralyzed by dental anxiety.\n\nI started this home-visit practice to bring unhurried, gentle, one-on-one dentistry back to where patients feel safest: in their own homes. When you book a visit, you deal with me personally from the very first WhatsApp message to your treatment and aftercare."
    - Direct Contact Links:
      • "Message Dr. [Name] on WhatsApp" (wa.me link)
      • "Direct Phone: 07000 000000"
Rationale: Establishes medical credibility, legal compliance, and emotional warmth.
```

```
=============================================================================
SECTION 10: Frequently Asked Questions (FAQOrganism)
=============================================================================
Position: Section 10
Purpose: Handle all remaining objections regarding safety, cost, insurance, hygiene, and emergency care.
Layout:
  - Desktop: Centered single-column accordion (max-w-3xl), py-20, background Soft Sky Blue (#EAF3FF).
  - Mobile (375px): Full-width accordion with large tap targets (min 52px).
Contents & Exact Copy:
  Section Heading (H2): "Frequently asked questions"
  Section Subtitle: "Everything you need to know about welcoming a dentist into your home."
  
  Q1: "Is dental care at home really safe and hygienic?"
  A1: "Yes, absolutely. We follow the exact same cross-infection control protocols as a premier dental hospital. All instruments are pre-sterilized under high pressure in hospital autoclaves, vacuum-sealed in single-use pouches, and opened directly in front of you. All disposable items are packaged in clinical waste bags and removed immediately after your appointment."

  Q2: "What if I feel nervous or need to stop during treatment?"
  A2: "You are in complete control of the visit. Before we begin, we agree on a simple hand signal. If you need to swallow, take a breath, ask a question, or pause for any reason, you simply raise your hand and we stop instantly. We never rush."

  Q3: "How does payment work, and will dental insurance cover it?"
  A3: "We confirm our fees in writing before we start your visit. Payment is collected at the end of the appointment via a secure mobile card terminal or direct bank transfer. While we do not process direct insurer billing, we provide an itemized official receipt with all clinical codes, which most dental cash plans and private health policies accept for reimbursement."

  Q4: "Can you visit my workplace or office?"
  A4: "Yes. Many of our patients are shift workers, busy professionals, or corporate teams. As long as you have a private room (such as a meeting room, first-aid room, or quiet office) with a chair and an electrical socket, we can provide routine check-ups and cleanings during your lunch break."

  Q5: "What if my elderly parent has dementia or cannot speak well?"
  A5: "We specialize in compassionate care for patients with cognitive decline and physical challenges. We take our time, speak in calm, gentle tones, and work at the patient's pace. We encourage family members or trusted carers to sit right beside them throughout the appointment."

  Q6: "What happens if I have an emergency or severe swelling?"
  A6: "If you have severe swelling spreading to your eye or throat, difficulty swallowing, difficulty breathing, or uncontrolled bleeding after trauma, you should attend your nearest hospital Accident & Emergency (A&E) immediately. For persistent toothaches or lost fillings, send us a WhatsApp message and we will advise on pain relief and book the earliest home visit slot."

  Q7: "How much space do you need in my house?"
  A7: "Very little. Our entire clinical setup is packed into two lightweight portable cases. All we need is enough floor space for your dentist to stand or sit beside your armchair, and a small clean table or tray nearby for our instruments."
Rationale: Neutralizes lingering cognitive hesitations before the final conversion.
```

```
=============================================================================
SECTION 11: Service Area & Working Hours (ServiceAreaHoursOrganism)
=============================================================================
Position: Section 11
Purpose: Clarify geographic availability and hours so patients know whether they can be visited.
Layout:
  - Desktop: 2-column card split (Left: Areas covered, Right: Hours & Emergency Notice), py-16, background Crisp White (#FFFFFF).
  - Mobile (375px): Stacked cards.
Contents & Exact Copy:
  Section Heading (H2): "Service area and availability"
  Section Subtitle: "Providing reliable home visits across the local community."
  
  Column 1 (Areas Covered):
    - Title: "Catchment Area"
    - Body: "We provide home visits across [City / Region] and surrounding postal codes: [Postcode A], [Postcode B], [Postcode C], and [Postcode D]."
    - Travel Fee Note: "Visits within our primary 10-mile radius include zero travel surcharges. For visits outside this perimeter, a modest travel fee is agreed upfront before booking."
  
  Column 2 (Hours & Availability):
    - Title: "Visiting Hours"
    - Schedule:
      • Monday – Friday: 8:00 AM – 6:30 PM
      • Saturday: 9:00 AM – 4:00 PM (by prior appointment)
      • Sunday & Evenings: Urgent visits by special arrangement
    - Emergency Disclaimer:
      "For life-threatening dental emergencies, facial trauma, or airway swelling, please call 999 / 911 or visit your nearest Emergency Department immediately."
Rationale: Avoids booking disappointment and provides necessary emergency triage guidance.
```

```
=============================================================================
SECTION 12: Final Call to Action Band (FinalCTABandOrganism)
=============================================================================
Position: Section 12
Purpose: High-impact final conversion push in the authoritative Deep Navy (#0B3A75) brand color.
Layout:
  - Desktop: Full-width container with Deep Navy background (#0B3A75), py-20, centered white text.
  - Mobile (375px): py-14, full-width vertical buttons.
Contents & Exact Copy:
  Headline (H2): "Ready for dental care that comes to you?"
  Subheadline: "Send us a quick WhatsApp message. Tell us what you need and where you are, and we'll reply promptly with times and clear pricing."
  
  Primary Button:
    - Text: "Message Us on WhatsApp"
    - Icon: White WhatsApp Icon
    - Destination: wa.me link with generic inquiry prefill
  
  Secondary Contact Info:
    - Text: "Prefer to speak with us first? Call Dr. [Name] directly at 07000 000000"
    - Micro-line: "No pressure · Free advice · Clear prices"
Rationale: Provides a visually arresting closing anchor that captures visitors who scrolled to the bottom.
```

```
=============================================================================
SECTION 13: Footer (FooterOrganism)
=============================================================================
Position: Section 13 (Bottom of page)
Purpose: Ensure statutory medical compliance, privacy disclosures, and legal transparency.
Layout:
  - Desktop: 3-column footer, dark navy background (#082C5A), py-12, text-slate-300.
  - Mobile (375px): Vertical stacked list, centered.
Contents & Exact Copy:
  Column 1: 
    - Title: "Dr. [Dentist Name] · Home Dental Care"
    - Text: "Compassionate, licensed dental care delivered to your home or workplace. Dedicated to patient comfort, transparent prices, and gentle treatment."
  Column 2: 
    - Title: "Regulatory & Compliance"
    - Text: "Licensed Dental Practitioner · General Dental Council (GDC) Reg. [123456] · Member of the British Dental Association (BDA) · Full Professional Indemnity Cover."
  Column 3: 
    - Title: "Patient Privacy & Terms"
    - Links: Privacy Policy · Terms of Care · Medical Disclaimer
    - Disclaimer Note: "Information on this website is for general guidance and does not replace in-person diagnosis. Home treatment is subject to clinical suitability assessed at the time of examination."
  Copyright: "© 2026 Dr. [Dentist Name]. All rights reserved."
Rationale: Satisfies regulatory advertising guidelines and instills institutional credibility.
```

```
=============================================================================
STICKY COMPONENT: Floating WhatsApp CTA Dock (FloatingWhatsAppCTAOrganism)
=============================================================================
Position: Fixed bottom dock (visible on screens ≤768px, Z-index 50)
Purpose: Ensure the primary conversion trigger is permanently reachable within the user's thumb zone.
Layout:
  - Container: fixed bottom-4 left-4 right-4 z-50 md:hidden
  - Button: Deep Navy background (#0B3A75), rounded-2xl (16px), height 54px, flex items-center justify-center gap-3, shadow-[0_8px_30px_rgba(11,58,117,0.4)].
Contents & Exact Copy:
  - Icon: White WhatsApp SVG
  - Text: "Message Us on WhatsApp"
  - Micro-badge: "Usually replies in 30m"
Interaction: Smooth tap feedback; respects safe-area-inset-bottom.
Rationale: 70%+ of traffic will be mobile; keeps the single conversion goal always 1 tap away.
```
