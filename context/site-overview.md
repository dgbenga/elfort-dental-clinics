# Site Overview & Product Requirements Document: Home-Visit Dentist

**Tier:** Tier 1: Mini-Website (High-Conversion Landing Page)  
**Status:** Locked & Calibrated  
**Target Delivery Stack:** Vite + React 19 + TypeScript + Tailwind CSS v4 + Radix UI + Lucide + Sentry  
**Hosting & Operational Scope:** Free-Tier Static Edge CDN (Cloudflare Pages / Vercel), $0/month recurring burn  

---

## 1. Executive Summary & Core Offer

### The Core Offer
A single-page, mobile-first website for a solo licensed dentist who treats patients at home, at work, or at a relative's house. The website has one clear mission: make starting a conversation on WhatsApp feel completely safe, simple, and pressure-free.

- **One-Line Promise:** *Dental care without the travelling, the waiting room or the stress.*
- **Brand Positioning:** *The friendly, honest dentist who comes to you.* Not an exclusive concierge or luxury service, but a dependable, trusted neighborhood healthcare professional who is clear about what they do, what it costs, and what to expect.
- **Primary Conversion Event:** Direct WhatsApp chat link (`wa.me`) with prefilled service intent text.
- **Secondary Conversion Event:** Direct telephone click-to-call for older adults and caregivers who prefer speaking directly with a human.

---

## 2. Autonomous UX Secondary Research Intelligence

Research synthesizes verifiable clinical data, dental practice management literature, and public patient forums (Reddit `r/Dentistry`, `r/AskDentists`, Carers UK forums, AgingCare community, and NHS/ADA consumer feedback).

### 2.1 User Intelligence & Demographic Audit

| Persona Segment | Demographics & Profile | Digital Literacy & Device Habits | Primary Skepticism & Barrier | Emotional Trigger to Book |
|---|---|---|---|---|
| **Seniors & Adult Children Caregivers** | Age 65+ (patients) or 40–55 (caregiving adult children). | Moderate literacy; predominantly iPad, Android tablet, or smartphone; prefers large text and plain phone calling. | *"Can real dental work actually be done safely at home? Will it make a mess or be unsafe?"* | Relieving a frail parent's toothache without forcing them down stairs or into a stressful hospital transport van. |
| **Busy Shift Workers & Commuters** | Age 24–48; nurses, drivers, hospitality, engineers, corporate workers. | High digital literacy; 100% smartphone; low tolerance for forms or phone queues. | *"I don't have half a day to waste in a waiting room, but can they treat me on my lunch break or shift off?"* | Fitting a 40-minute cleaning or check-up into their actual work schedule without burning paid time off. |
| **Dental Anxious Avoiders** | All ages (15%+ of population); avoids dental clinics due to past trauma. | High digital literacy; deeply private; researches treatments late at night. | *"I will be judged, scolded for neglecting my teeth, or trapped in an unbearable chair."* | Total control: being in their own living room, being able to say "stop", and knowing they will not be lectured. |
| **Parents & Young Families** | Age 28–45; managing multiple children's schedules. | High mobile literacy; juggles appointments between school runs. | *"Taking three young kids to a dental clinic is absolute chaos and expensive."* | Having the dentist check the whole family in one calm home afternoon. |

### 2.2 Jakob's Law: Familiar Market Pattern Mapping
Users spend most of their mobile time on apps like WhatsApp, Apple Messages, Uber, and local delivery apps.
- **Zero-Friction Communication:** Users expect to tap once and be directly chatting with a human. Multi-page signups and 6-field booking forms cause high drop-off.
- **Healthcare Simplicity (Zocdoc / Doctolib mental model):** Credential badge, doctor photo, clear price indicator, and direct booking trigger.
- **Single Primary Action per Viewport:** No competing buttons or visual noise. Every scroll section gently funnels down to the WhatsApp conversation or telephone fallback.

### 2.3 Jobs-To-Be-Done (JTBD) Matrix

1. **Functional (Caregiver):** *When* my elderly parent has tooth pain and cannot easily walk down our porch stairs, *I want* a licensed dentist to come inside our living room with portable equipment, *so that* my parent gets prompt relief without exhausting hospital transport.
2. **Functional (Shift Worker):** *When* my work schedule conflicts with standard 9-to-5 clinic hours, *I want* a fast 40-minute cleaning and check-up at my workplace or home, *so that* my dental health is maintained without losing half a day's wages.
3. **Emotional (Anxious Avoider):** *When* I feel intense embarrassment and dread about visiting a dental office, *I want* a private, gentle visit in my own home where I control the pace, *so that* I can fix my teeth without shame, judgment, or panic attacks.
4. **Emotional (Family Organizer):** *When* managing family schedules is overwhelming, *I want* one professional to examine both my kids and myself in our own house, *so that* dental check-ups become a relaxed routine rather than a stressful expedition.
5. **Social (Honest Cost):** *When* I need dental treatment, *I want* to know the exact price or base visit fee before work begins, *so that* I never experience the social anxiety and shock of a surprise $800 bill at a checkout desk.
6. **Social (Professional Trust):** *When* inviting a medical professional into my private home, *I want* visible proof of verified licensing, sterile single-use packaging, and background credentials, *so that* I feel completely safe and confident.

### 2.4 Pain Points & Frustrations Hierarchy (Ranked with Verbatim User Quotes)

| Rank | Friction Point | Verbatim User Language (Public Forums) | Root Cause & Website Resolution |
|---|---|---|---|
| **P1** | **Cost Ambiguity & Bill Shock** | *"Dentists feel like mechanics. You go in for a cleaning and leave with a $1,200 estimate and no idea why."* | Transparent "from" pricing displayed upfront, with an explicit promise: *"You will always know the exact cost before we pick up an instrument."* |
| **P2** | **Shame, Fear & Judgement** | *"I haven't been in 6 years because I'm terrified they'll lecture me like a bad child."* | Non-judgmental reassurance: *"No lectures, no shame. You set the pace and we stop whenever you ask."* |
| **P3** | **Transport & Mobility Struggle** | *"Getting my 84-year-old mother with dementia into a taxi and down narrow clinic stairs is a two-person nightmare."* | Clear operational walkthrough: *"We come to your kitchen or living room armchair. You stay right beside your loved one."* |
| **P4** | **Clinic Waiting Room Fatigue** | *"I take two hours off work, only to sit in a vinyl chair for 45 minutes past my appointment listening to drills."* | Time respect positioning: *"No waiting rooms. We arrive on time, treat you in 40–50 minutes, and tidy up completely."* |
| **P5** | **Home Hygiene & Safety Doubts** | *"Can dental work at home be sterile? What if they make a mess or need something they left in their van?"* | Section 6 detail: *"Hospital-grade sterile instruments unsealed right in front of you. All we need is a standard chair, light, and a plug socket."* |
| **P6** | **Boundary & Scope Uncertainty** | *"Can they actually fix my filling at home or is it just someone looking in my mouth with a mirror?"* | Clear "What we can & can't do at home" checklist. Honest referrals to partner clinics if surgery is needed. |
| **P7** | **Booking Friction & Phone Phobia** | *"I hate calling during working hours when coworkers can hear me discussing my bleeding gums."* | Direct asynchronous WhatsApp messaging: prefilled message, reply within confirmed hours, zero phone pressure. |
| **P8** | **Impersonal Corporate Chains** | *"You see a different locum dentist every 6 months who doesn't know your history."* | The solo practitioner promise: *"One licensed dentist who knows you by name, from first message to final polish."* |

### 2.5 Competitive Landscape & Whitespace Mapping

```
High Cost / Alienating
▲
│   [Tier 3: Luxury Concierge Dental]
│   • $2,000+ retainers, marble & gold aesthetics
│   • Framed for executives, celebrities & penthouses
│   • Alienating and unaffordable for normal families
│
│                        ★ OUR POSITION: THE HONEST NEIGHBORHOOD DENTIST
│                          • Friendly, human, transparent, accessible
│                          • Clear prices before starting, sterile portable kit
│                          • Visits ordinary homes, care homes, and workplaces
│
│   [Tier 1: Brick-and-Mortar Clinics]     [Tier 2: Public Geriatric Vans]
│   • Strict 9-to-5, travel & stairs       • Institutional, bureaucratic
│   • Intimidating clinical environment    • Months-long waitlists, no workplace option
▼
Low Cost / Inflexible ────────────────────────────────────────► High Flexibility / Convenience
```

**The Vacant Whitespace:** The warm, neighborhood-trusted solo practitioner who provides honest, gentle, transparently priced routine dental care right in the comfort of your home or workplace.

### 2.6 Search & Language Intelligence Vault

#### High-Intent User Queries
- *"dentist who visits home near me"*
- *"mobile dentist for elderly mother with dementia"*
- *"gentle dentist for nervous patients at home"*
- *"dental checkup at workplace lunch break"*
- *"how much does a home dental visit cost"*

#### The Human Copywriting Domain Separation (12-Year-Old & Executive Litmus Test)
Strictly ban developer jargon, corporate healthcare buzzwords, and luxury puffery from all customer-facing strings:

| Banned Corporate / Plumbing / Luxury Words | Enforced Human Replacement | Rationale |
|---|---|---|
| *Concierge, boutique, VIP, bespoke, elite* | **Home visit, friendly, local, personal** | Removes class barriers and cost intimidation. |
| *High-profile, discerning, executive tier* | **Busy workers, families, seniors, everyone** | Welcomes ordinary working people and carers. |
| *Sanctuary, clinical suite, state-of-the-art* | **Gentle, calm, sterile portable care** | Honest medical terminology without exaggeration. |
| *100% painless, guaranteed outcome* | **Gentle care at your own pace; pause whenever you ask** | Complies with dental medical advertising regulations. |
| *Dispatch gates, client intake portal, endpoint* | **Send us a message on WhatsApp** | Passes the human kitchen-table litmus test. |

### 2.7 Strategic Priorities & Design Sprint Focus (HMW)
- **HMW-1:** How might we convince an anxious patient in under 10 seconds that they have full control over the pace of treatment?
- **HMW-2:** How might we make an adult-child caregiver feel total confidence in the safety, hygiene, and legitimacy of a home visit?
- **HMW-3:** How might we eliminate all price anxiety before the user even opens WhatsApp?
- **HMW-4:** How might we ensure a 75-year-old on an iPad can start a chat or make a call without any visual confusion or tiny tap targets?

---

## 3. Sitemap & Page Structure

This Tier 1 site is built as a single, mobile-optimized continuous conversion page organized into 13 structured sections, supported by a persistent mobile floating CTA:

```
[Section 1: Header] ─────────────── Typographic Logo + Nav Anchor Links + WhatsApp & Phone Buttons
[Section 2: Hero Viewport] ──────── Headline ("Dental care that comes to you") + Sub + Primary CTA + 3 Trust Proofs
[Section 3: How It Works] ───────── 3-Step Plain Walkthrough (Message -> Agree Price -> We Come To You)
[Section 4: Who We Help] ────────── 4 Clear Audience Cards (Families, Workers, Seniors & Carers, Nervous Patients)
[Section 5: Services & Prices] ──── 4 Transparent Service Cards with "From" Pricing & WhatsApp Prefills
[Section 6: What We Bring] ──────── What the dentist brings (sterile kit) vs What you need (chair, light, plug)
[Section 7: Home Scope Limits] ──── Honest "What we can & can't do at home" + Clinic Referral Promise
[Section 8: Our 3 Promises] ─────── Clear price first · No pressure or upselling · Clinic referral when needed
[Section 9: Meet Your Dentist] ──── Verified Doctor Bio, Credentials, Reg Number & Friendly Headshot
[Section 10: FAQ Accordion] ─────── 7 Core Objections Handled (Safety, Costs, Anxiety, Space, Emergencies)
[Section 11: Service Area & Hours]  Catchment Postcodes/Cities, Working Hours, Urgent Visit Guidance
[Section 12: Final CTA Band] ────── Deep Navy High-Contrast Banner + Dual WhatsApp & Call Links
[Section 13: Footer] ────────────── Regulated Disclosures, Privacy Note, Medical Disclaimer, Copyright
[Sticky: Floating WhatsApp] ─────── Fixed Bottom-Center Dock for Mobile Screens (≤768px)
```

---

## 4. Conversion Hierarchy & WhatsApp Architecture

### Primary Conversion: WhatsApp Click-to-Chat
Every service and section features a tailored WhatsApp link that automatically prefills the message based on user context:
- **Base Hero Link:**  
  `https://wa.me/447000000000?text=Hello%20Doctor%2C%20I%27d%20like%20to%20ask%20about%20booking%20a%20home%20visit.`
- **Check-up & Cleaning:**  
  `https://wa.me/447000000000?text=Hello%20Doctor%2C%20I%27m%20interested%20in%20a%20routine%20check-up%20and%20cleaning%20at%20home.`
- **Workplace Visit:**  
  `https://wa.me/447000000000?text=Hello%20Doctor%2C%20I%27d%20like%20to%20ask%20about%20a%20dental%20visit%20at%20my%20workplace.`
- **Family Visit:**  
  `https://wa.me/447000000000?text=Hello%20Doctor%2C%20I%27d%20like%20to%20arrange%20a%20home%20visit%20for%20my%20family.`
- **General Question / Anxious Patient:**  
  `https://wa.me/447000000000?text=Hello%20Doctor%2C%20I%20have%20a%20quick%20question%20about%20your%20home%20dental%20visits.`

### Secondary Conversion: Phone Call Fallback
- Direct `tel:+447000000000` link placed in Header, Meet Dentist, Final CTA Band, and Footer for patients who do not use WhatsApp or prefer immediate voice reassurance.

---

## 5. Explicit Out-of-Scope Boundaries

To maintain lean engineering and prevent tool bloat:
1. **No User Accounts / Login Portal:** No patient login or database auth required for Phase 1.
2. **No Upfront Payment Gateway:** No Stripe/PayPal checkout on the landing page; payment is handled directly at the time of the visit via mobile card terminal or bank transfer.
3. **No Heavy Booking Calendars:** No external booking widgets (Calendly/Jane) embedded in Phase 1 that slow mobile load times; bookings are agreed via WhatsApp conversation.
4. **No Unsubstantiated Claims:** Strictly no "100% pain-free", "hospital-grade", or "best dentist in town" claims.
5. **No General Anesthesia or Major Oral Surgery:** The service is explicitly framed for preventive, diagnostic, and minor restorative care at home, with referral pathways for hospital care.
