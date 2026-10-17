# Discovery Document v2: Home-Visit Dentist Website

**Project:** Landing page for a solo dentist who treats patients at home or at work
**Stack:** HTML, Tailwind CSS, Lucide icons
**Primary conversion:** WhatsApp chat with a prefilled message
**Status:** Discovery v2 (replaces v1)

### What changed from v1

| Removed | Replaced with |
|---|---|
| Luxury and "concierge" positioning, executive and high-profile framing | Everyday, friendly, practical positioning for ordinary people |
| Cream, gold and charcoal design system | Very light blue (main), white (secondary), deep blue (tertiary) |
| All generated UI code, token dumps and the code audit | Our own design tokens, page structure and a research-backed plan |
| Unverified premium claims | A verify-before-publish rule for every claim |

---

## 1. Project Summary

A single-page, mobile-first website for a solo dentist who comes to the patient: at home, at work, or at a relative's house. The page has one job: make it easy and safe-feeling to start a WhatsApp conversation.

**New positioning:** *The friendly, honest dentist who comes to you.* Not an exclusive service. A practical one. It should feel like a trusted neighbourhood professional, clear about what it does, what it costs and what to expect.

**One-line promise:** Dental care without the travelling, the waiting room or the stress.

---

## 2. Research Findings and What They Mean for the Site

Research was gathered from dental practice and health-industry sources (listed in section 14). Most figures are from the US, UK and Australia, so confirm local relevance for the dentist's actual market.

| # | Finding | Implication for the website |
|---|---|---|
| 1 | Home and mobile dentistry is mainly promoted for people who find travel hard or stressful: seniors, people with mobility or cognitive challenges, children, and nervous patients. Home visits also let caregivers stay close. | Lead with relief and ease, not status. Speak directly to families, carers and seniors. |
| 2 | Providers describe the main benefits as saved travel time, no crowded waiting room, a calmer setting and more personal attention. | Use these plain benefits as the core message. |
| 3 | Mobile providers are described as following the same infection-control standards as a traditional dental office. Mobile care is also described as improving access, not replacing full dental care. | Reassure on hygiene, and be honest about limits ("if it needs a clinic, we'll tell you"). |
| 4 | What can be done at home varies by provider, equipment and local rules. X-ray availability in particular depends on local regulation. | Publish a clear "what we can and can't do at home" list. Do not promise everything. |
| 5 | Insurance coverage for home visits varies. Some mobile services are covered like in-office care, while others are not. Patients are advised to check their benefits. | Explain payment and insurance simply. Never imply coverage you can't confirm. |
| 6 | Workplace mobile dentistry exists as a model. One US practice reported that over 40% of its insured patients were not using their benefits because getting away from work was hard, and describes visits of about 40 minutes in and out. | Add a "We can come to your workplace" angle for working people. Mention shift workers. |
| 7 | Dental anxiety is widespread. One summary says roughly 9% to 15% of Americans avoid dental visits entirely because of fear, and a published review notes that some degree of anxiety is common among most US adults. | Treat nervous patients as a main audience. Calm, plain language and "you're in control" messaging. |
| 8 | Cost is a major barrier. US survey data cited by dental educators says about 27% of adults delay or skip needed care due to cost. A UK survey found that 26% said cost affected their treatment choice and 19% had delayed treatment because of cost. | Show prices (or "from" prices) early. Say "clear price before we start" prominently. |
| 9 | An Australian study found that among highly anxious adults, avoidance was predicted by difficulty paying a dental bill and by low trust in their last dentist. | Price transparency and a trustworthy, human tone matter as much as the visit itself. |
| 10 | For local service pages, advice is consistent: one primary goal, fast mobile load (under about 3 seconds), the main action visible immediately, and visible reasons to trust the business. | One clear WhatsApp call to action, a light page, proof of credentials near the top. |
| 11 | Click-to-chat removes form friction, and leads can be lost if nobody replies quickly. Sources suggest stating response times and hours, using prefilled messages, and placing a floating chat button bottom-centre on mobile. | Prefilled messages by service, honest reply-time and hours, floating bottom button, an automatic greeting in WhatsApp Business. |

**Biggest takeaway:** for everyday people the barriers are **cost, fear, time and trust**, not prestige. The site should answer those four in the first two screens.

---

## 3. Audience

| Group | What they need | Main worry | How the site answers |
|---|---|---|---|
| Busy workers and shift workers | Care that fits around work | "I can't take half a day off" | Short visits, evening and weekend slots if offered, workplace visits |
| Parents and families | One visit for several people, kid-friendly care | "Will my child cope?" "Can I afford it?" | Family visits, gentle first visits, clear prices |
| Seniors and carers | Care without transport and stairs | "Is it safe? Can it really be done at home?" | Plain explanation, what's done at home, carer welcome during visits |
| Nervous patients and avoiders | A calm, no-judgement start | "I'll be judged or rushed" | "You set the pace", "we stop when you ask", no-shame tone |
| People with mobility or health limits | Dignified care at home | "Will they understand my needs?" | Clear access and accessibility information, ask-first approach |
| Cost-conscious people | Honest, upfront pricing | "I'll get a surprise bill" | Price before treatment, "from" prices, payment options |

---

## 4. Positioning, Voice and Messaging

### 4.1 Voice

Warm, plain, reassuring and honest. Short sentences. Everyday words. Like a kind professional explaining things at your kitchen table.

### 4.2 Words to retire and their replacements

| Retire | Use instead |
|---|---|
| Concierge, boutique, exclusive, elite, VIP | Home visit, friendly, local, personal |
| Executives, high-profile, discerning | Busy people, families, everyone |
| Surgical, sanctuary, bespoke | Gentle, calm, simple, tailored to you |
| Luxury, premium, white-glove | Thoughtful, reliable, caring |
| Hospital-grade, 100%, best, guaranteed | Sterile, sealed instruments (only if true), plain claims you can prove |

### 4.3 Core messages

1. **We come to you.** Home or workplace, no travelling and no waiting room.
2. **A real, licensed dentist.** One person who knows you, start to finish.
3. **Clear price first.** You know the cost before we begin.
4. **Gentle and in your control.** Your pace, your pause button.
5. **Honest about limits.** If something needs a clinic, we say so and help you get there.

### 4.4 Draft headline directions (test these)

- Dental care that comes to you.
- Your dentist, at your door.
- No waiting room. No travelling. Just a dentist who comes to you.
- See a dentist without leaving home.

### 4.5 Draft subheadline

A friendly, licensed dentist visits your home or workplace for check-ups, cleanings and simple repairs. Clear prices, no pressure.

### 4.6 Primary call to action

**Message us on WhatsApp** (secondary: "Ask a question" and "See prices").
Micro-line: *Free to ask · No forms · No obligation · We usually reply [WITHIN X].* (Only state a reply time the dentist can keep.)

---

## 5. Design System

### 5.1 Palette

The site uses exactly three brand colours, plus tints of them. No gold, no black, no extra accent.

| Role | Colour | Hex | Where it is used |
|---|---|---|---|
| **Main** | Very light blue | `#EAF3FF` | Page background, alternating section backgrounds, soft panels |
| **Secondary** | White | `#FFFFFF` | Cards, header, form-style surfaces, text on deep blue |
| **Tertiary** | Deep blue | `#0B3A75` | Headings, primary buttons, links, icons, footer, final CTA band |

**Supporting tints (derived from the three colours):**

| Token | Hex | Use |
|---|---|---|
| Light blue, deeper | `#DCEBFC` | Hover states, selected rows |
| Light blue, border | `#C7DCF3` | Dividers and card borders |
| Deep blue, hover | `#082C5A` | Button hover and pressed |
| Body text | `#2F4562` | Paragraph text (a muted tint of the deep blue) |

**Contrast checks (approximate):**

| Pair | Ratio | Result |
|---|---|---|
| Deep blue `#0B3A75` on white | about 11:1 | Passes AA and AAA |
| Deep blue `#0B3A75` on light blue `#EAF3FF` | about 10:1 | Passes AA and AAA |
| White on deep blue `#0B3A75` | about 11:1 | Passes AA and AAA |
| Body text `#2F4562` on white | about 9.7:1 | Passes AA and AAA |
| Body text `#2F4562` on light blue `#EAF3FF` | about 8.7:1 | Passes AA and AAA |

Re-check final colours with a contrast tool before launch.

**Rule of thumb:** light blue is the dominant surface (about 60%), white carries content (about 30%), deep blue is for action and emphasis (about 10%).

**WhatsApp button:** keep it in the palette (deep blue button, white text, WhatsApp icon) so the page stays calm and consistent. The icon itself signals WhatsApp. Do not introduce a green button.

### 5.2 Tailwind tokens (ours)

```js
tailwind.config = {
  theme: {
    extend: {
      colors: {
        sky:  { main: '#EAF3FF', deep: '#DCEBFC', line: '#C7DCF3' },
        navy: { DEFAULT: '#0B3A75', hover: '#082C5A' },
        ink:  '#2F4562'
      },
      fontFamily: { sans: ['Figtree', 'system-ui', 'sans-serif'] },
      borderRadius: { card: '16px' }
    }
  }
}
```

### 5.3 Typography and layout

- **Font:** Figtree (friendly, very legible), one family for headings and body.
- **Sizes:** body 18px minimum (many visitors are older), headings 32 to 56px, generous line height (about 1.6).
- **Buttons:** at least 48px tall, large tap targets, clear labels.
- **Shapes:** soft 12 to 16px corners, thin light-blue borders, very light shadows.
- **Section rhythm:** alternate light blue and white backgrounds. Use one deep blue band for the final call to action and the footer.
- **Icons:** Lucide, simple outline style, deep blue.
- **Motion:** minimal and calm. Respect `prefers-reduced-motion`.

### 5.4 Imagery direction

- Real, warm photos: an ordinary living room or kitchen, a friendly dentist in simple scrubs or a coat, a family, an older person with a carer, a workplace break room.
- Avoid marble, penthouses, luxury interiors and stock "boardroom" imagery.
- Use real photos of the dentist whenever possible. People trust faces.
- If photos are not ready, use simple blue illustrations, not generic stock.

### 5.5 Accessibility baseline

WCAG AA contrast, visible keyboard focus, descriptive `alt` text, buttons and links with clear labels, no information conveyed by colour alone, reduced-motion support, text resizable without breaking the layout.

---

## 6. Page Structure

The order puts clarity first: what it is, how it works, what it costs, then proof.

| # | Section | Purpose | Content | Call to action |
|---|---|---|---|---|
| 1 | Header | Orient and convert | Name, short nav, "Message us" button, phone number for those who prefer to call | Yes |
| 2 | Hero | Say it in five seconds | Headline, subheadline, WhatsApp button, three small proof points (licensed, sterile instruments, clear prices) | Yes |
| 3 | How it works | Remove uncertainty | Three steps: message us, agree a time and price, we come to you | Yes |
| 4 | Who we help | Self-identification | Families, workers, seniors and carers, nervous patients | No |
| 5 | Services and prices | Answer "what and how much" | Check-ups and cleaning, simple repairs, whitening [CONFIRM], family visits. "From" prices or "clear price before we start" | Yes (per service) |
| 6 | What we bring / what you need | Practical reassurance | Equipment and sterile instruments list, plus a chair, light and a plug socket | No |
| 7 | What we can and can't do at home | Honesty builds trust | Plain list, plus "if it needs a clinic, we'll help you get there" | No |
| 8 | Reviews or our promise | Social proof | Real, consented reviews, or "Our Promise" until reviews exist | No |
| 9 | Meet your dentist | Trust in a person | Photo, short friendly bio, licence number and professional body | Yes |
| 10 | FAQ | Handle objections | Safety, cost, insurance, nerves, area, emergencies, preparation | Soft link |
| 11 | Service area and hours | Remove doubt | Areas covered, booking lead time, hours, emergency note | No |
| 12 | Final CTA band (deep blue) | Last nudge | Warm headline, WhatsApp button, phone and email | Yes |
| 13 | Footer | Compliance | Contact, credentials, privacy, disclaimer | No |
| F | Floating WhatsApp button | Always reachable | Bottom-centre on mobile | Yes |

---

## 7. Draft Copy Direction by Section

**Hero**
- Headline: *Dental care that comes to you.*
- Sub: *A friendly, licensed dentist visits your home or workplace for check-ups, cleanings and simple repairs. Clear prices, no pressure.*
- Button: *Message us on WhatsApp*
- Points: Licensed dentist · Sterile, sealed instruments · Clear price before we start

**How it works**
1. *Send us a message.* Tell us what you need and where you are. No forms.
2. *Agree a time and price.* We confirm what we can do at home and give you a clear price.
3. *We come to you.* Your dentist arrives on time, treats you gently and tidies up afterwards.

**Who we help**
- *Families:* one visit for the whole household.
- *Busy workers:* care that fits around your shifts, at home or at work.
- *Seniors and carers:* comfortable care without the journey. Carers are welcome to stay.
- *Nervous patients:* go at your own pace. We stop whenever you ask.

**Our promise (use until real reviews exist)**
- A clear price before we start.
- No pressure and no upselling.
- If it needs a clinic, we'll say so and help you get there.

**Final CTA**
- *Ready when you are.* Send us a message and we'll find a time that suits you.

---

## 8. Conversion Plan (WhatsApp-First)

- **One main goal:** start a WhatsApp chat. Everything else supports it.
- **Prefilled messages by service**, so the dentist knows what the person wants (check-up, whitening, repair, family, question).
- **Placement:** header button, hero, after services, after how-it-works, FAQ, final band, and a floating bottom-centre button on mobile.
- **Phone fallback:** show a phone number too, because some older visitors prefer to call.
- **Response promise:** state hours and a reply time only if the dentist can keep it. Set up WhatsApp Business greeting and away messages so no lead waits in silence.
- **Speed:** aim for under 3 seconds on mobile. Compress images, avoid heavy scripts.
- **Message match:** if running ads, make the ad headline and the page headline say the same thing.
- **Analytics events:** `whatsapp_click` with `location` (header, hero, services, how-it-works, faq, final, floating) and `service`.
- **KPIs:** WhatsApp click-through rate, chats started, chats that become booked visits, cost per booked visit, scroll depth to prices and FAQ.
- **Test ideas:** headline wording, showing prices vs "clear price first", photo of the dentist vs illustration, position of the floating button.

---

## 9. Trust, Pricing and Compliance

- **Credentials:** show licence number, regulator and professional membership prominently, only if real.
- **Pricing:** show "from" prices or a simple visit fee. If not, say how and when the price is given.
- **Insurance:** explain what you can provide (such as itemised receipts) without promising reimbursement.
- **Hygiene claims:** state only what the practice actually does. Describe sterilisation and infection control accurately.
- **Scope at home:** be explicit about what is and isn't done at home. Local rules (for example around X-ray equipment) affect this.
- **Emergencies:** include a clear note on when to go to emergency services instead.
- **Privacy:** a plain-language privacy policy covering WhatsApp messages and any health information shared.
- **Testimonials:** real, current and consented. No invented reviews or ratings.
- **Regional wording:** match the local regulator, privacy law, emergency number and payment methods once the market is confirmed.
- **Claims to remove or prove:** "best", "100%", "guaranteed", "pain-free", "hospital-grade" unless evidence exists.

---

## 10. Technical and SEO Notes

- **Build:** single HTML page, Tailwind CSS (compiled for production), Lucide icons, no heavy frameworks.
- **Performance targets:** Lighthouse Performance 90+, Accessibility 95+, SEO 95+.
- **SEO keywords (local):** home dentist [area], mobile dentist [area], dentist who visits your home, dentist for seniors at home, workplace dental visits.
- **Meta:** page title under 60 characters, meta description under 155, social share image in the same blue palette.
- **Structured data:** `Dentist` or `LocalBusiness` JSON-LD with area served, hours and contact.
- **Images:** self-hosted, compressed (WebP or AVIF), with width, height and alt text.
- **Fonts:** Figtree, with `font-display: swap` and a system fallback.
- **WhatsApp link format:** `https://wa.me/<international number, digits only>?text=<URL-encoded message>`.
- **Analytics:** privacy-friendly analytics plus click events on every WhatsApp button.

---

## 11. Questions for the Client

1. Practice name, tagline and any existing logo
2. Dentist's full name, qualifications, years in practice, licence details
3. Exact service area, travel limits and any travel fee
4. Services actually offered at home, and any excluded ones (X-rays, extractions, dentures, etc.)
5. Price list or visit fee, payment methods, deposit and cancellation policy
6. Insurance position: what receipts or forms can be provided
7. Hours, evening and weekend availability, workplace visit options
8. Emergency and urgent visit policy
9. Languages spoken, and accessibility needs the dentist can support
10. Equipment list and sterilisation process (for accurate claims)
11. Photos of the dentist and real visits, and any existing reviews
12. WhatsApp Business account, number and expected reply times

---

## 12. Risks and Assumptions

| Risk or assumption | Mitigation |
|---|---|
| Research is mostly US, UK and Australian | Confirm local patient needs, regulations and pricing norms |
| Not every treatment can be done at home | Publish an honest scope and referral promise |
| Promising fast WhatsApp replies that cannot be kept | Only promise what the dentist can deliver; use auto-replies |
| No real reviews at launch | Use "Our Promise" and add real reviews as they arrive |
| Three-colour palette can feel flat | Use tints, white space and real photography for depth |
| Older visitors may struggle with small text or tiny buttons | 18px body text, large buttons, phone fallback |

---

## 13. Next Steps

1. Confirm the answers in section 11.
2. Finalise the three-colour palette and run contrast checks.
3. Rewrite the copy in the new everyday voice (hero to footer).
4. Collect real photos of the dentist and the home visit setup.
5. Build the page (mobile-first) with the tokens in section 5.2.
6. Set up WhatsApp Business, greeting message and quick replies.
7. Add SEO basics, structured data and click tracking.
8. Test on real phones, then run Lighthouse and an accessibility check.

---

## 14. Sources

Findings above are summarised from these pages (accessed during research, October 2026):

- Hello Pearl, Mobile Dental Clinic glossary: https://hellopearl.com/glossary/mobile-dental-clinic
- Dentaltown, Benefits of Receiving Dental Care in Your Home: https://www.dentaltown.com/blog/post/25385/benefits-of-receiving-dental-care-in-your-home
- Royal Dental Practice, Mobile Dentistry FAQs: https://www.royaldentalwesthills.com/mobile-dentistry/
- Aspen Dental, In-home dental care guide: https://www.aspendental.com/dental-care-resources/in-home-dental-care-cant-leave-home/
- FOX4 Kansas City, workplace mobile dentistry: https://digital-release.fox4kc.com/?p=1495387
- NewMouth, Dental anxiety statistics: https://www.newmouth.com/oral-health/dental-anxitey-statistics/
- PubMed Central, dental anxiety and free clinics: https://pmc.ncbi.nlm.nih.gov/articles/PMC11635897/
- Docs Education, cost-related delay of dental care: https://www.docseducation.com/node/53220
- Armfield and Ketting, dental avoidance predictors (Australia): https://research.sahmri.org.au/en/publications/predictors-of-dental-avoidance-among-australian-adults-with-diffe/
- Adult Dental Health Survey 2009 (UK), Cardiff University: https://orca.cardiff.ac.uk/id/eprint/42702/
- Qiscus, WhatsApp Click to Chat: https://www.qiscus.com/en/blog/whatsapp-click-to-chat/
- Clicksgeek, local landing page optimisation: https://clicksgeek.com/landing-page-optimization-tips/
- GitNexa, WhatsApp chat button best practices: https://www.gitnexa.com/blogs/how-to-add-whatsapp-chat-buttons-for-mobile-users
- Pancake, WhatsApp widgets best practices: https://pancake.vn/blog/whatsapp-widgets-enhancing-customer-engagement-and-business-efficiency

*Statistics are reported as stated by these sources and are not independently verified. Check them against local data before using any figure publicly.*
