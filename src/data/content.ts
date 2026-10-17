export interface ServiceItem {
  id: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  prefilledText: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface AudienceItem {
  icon: string;
  title: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const PRACTICE_CONFIG = {
  dentistName: 'Dr. Sarah Jenkins',
  credentials: 'BDS (Hons), MFDS RCPS',
  title: 'Registered Dental Surgeon & Mobile Dental Practitioner',
  regulatorText: 'General Dental Council (GDC) Reg. 248910 · British Dental Association (BDA)',
  insuranceText: 'Full Professional Medical Indemnity & Public Liability Covered',
  phoneDisplay: '07700 900123',
  phoneRaw: '+447700900123',
  whatsappRaw: '447700900123',
  email: 'care@visitingdentist.co.uk',
  responsePromise: 'Free to ask · No forms · No obligation · We usually reply within 30 minutes',
  hoursDisplay: {
    weekdays: 'Monday – Friday: 8:00 AM – 6:30 PM',
    saturday: 'Saturday: 9:00 AM – 4:00 PM (by appointment)',
    urgent: 'Evenings & Sundays: Urgent visits by special arrangement',
  },
  catchmentAreas: ['Bristol', 'Bath', 'South Gloucestershire', 'North Somerset'],
};

export const SITE_CONTENT = {
  header: {
    brandText: 'Dr. Sarah Jenkins · Home Dental Care',
    navLinks: [
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Who We Help', href: '#who-we-help' },
      { label: 'Services & Prices', href: '#services' },
      { label: 'What to Expect', href: '#what-we-bring' },
      { label: 'About', href: '#about' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  hero: {
    headline: 'Dental care that comes to you.',
    subheadline:
      'A friendly, licensed dentist visits your home or workplace for check-ups, cleanings, and simple repairs. Clear prices before we begin, and zero pressure.',
    primaryButtonText: 'Message Us on WhatsApp',
    secondaryButtonText: 'Prefer to call? 07700 900123',
    prefilledText: "Hello Dr. Jenkins, I'd like to ask about booking a dental visit at my home.",
    trustPoints: [
      { icon: 'Award', text: 'Fully Licensed Solo Dentist' },
      { icon: 'ShieldCheck', text: 'Sterile, Single-Use Instruments' },
      { icon: 'Tag', text: 'Clear Price Before We Start' },
    ],
  },
  howItWorks: {
    title: 'How a home visit works',
    subtitle: 'Simple, predictable, and arranged entirely around your day.',
    steps: [
      {
        number: '01',
        title: 'Send us a message',
        description:
          "Tell us where you are and what you need—whether it's a routine check-up, gentle cleaning, or a specific concern. No lengthy medical forms to fill out.",
      },
      {
        number: '02',
        title: 'Agree a time and clear price',
        description:
          'We confirm what we can do in your space and give you an exact, upfront price before booking. No surprise bills or hidden travel fees.',
      },
      {
        number: '03',
        title: 'We come to you',
        description:
          'Your dentist arrives on time with a compact, sterile portable kit. We treat you gently at your own pace, tidy up completely, and leave you in comfort.',
      },
    ] as StepItem[],
  },
  whoWeHelp: {
    title: 'Care designed around real lives',
    subtitle:
      'We visit patients wherever traditional dental clinics feel difficult, stressful, or out of reach.',
    audiences: [
      {
        icon: 'HeartHandshake',
        title: 'Seniors & Family Carers',
        description:
          'Comfortable, dignified dental care without the struggle of stairs, taxis, or confusing waiting rooms. Family members and carers are always welcome to stay by your side throughout the visit.',
      },
      {
        icon: 'Briefcase',
        title: 'Busy Workers & Shift Teams',
        description:
          'Quality check-ups and cleanings that fit around your shifts. We can visit your home on your day off, or come directly to your workplace break room during lunch.',
      },
      {
        icon: 'Smile',
        title: 'Nervous Patients & Avoiders',
        description:
          'No judgment, no lectures about missed check-ups, and no clinical panic. You are in complete control: we agree on a hand signal, take frequent breaks, and stop the moment you ask.',
      },
      {
        icon: 'Users',
        title: 'Parents & Busy Families',
        description:
          'One single appointment for the whole household in the comfort of your own living room. Children feel safe in familiar surroundings, and parents save hours of travel.',
      },
    ] as AudienceItem[],
  },
  services: {
    title: 'Services and honest prices',
    subtitle:
      'You will always receive a clear, binding price quote before we start any treatment. No hidden surcharges.',
    assuranceNote:
      'Every patient receives an itemized written receipt. While home visits are private care, we provide the full paperwork needed to claim back from your dental cash plan or private insurer if eligible.',
    items: [
      {
        id: 'checkup',
        title: 'Comprehensive Home Check-up',
        price: 'From £75',
        description:
          'Full oral health examination, soft tissue screening, gum health check, and a plain-English discussion of your teeth.',
        features: [
          'Thorough oral examination',
          'Gentle gum health assessment',
          'Written personalized care plan',
          'Free travel within local catchment',
        ],
        buttonText: 'Book a Check-up',
        prefilledText: "Hello Dr. Jenkins, I'm interested in booking a comprehensive home check-up.",
      },
      {
        id: 'combo',
        title: 'Full Check & Polish Combo (Most Popular)',
        price: 'From £155',
        description:
          'Comprehensive clinical examination, gum health check, and full ultrasonic cleaning and stain polish in one comfortable visit.',
        features: [
          'Complete oral health check-up',
          'Full ultrasonic scaling & stain removal',
          'Fresh dental polish & home care advice',
          'Best value for single-visit care',
        ],
        buttonText: 'Book Check & Clean Combo',
        prefilledText: "Hello Dr. Jenkins, I'd like to book the full Check-up & Clean combo visit.",
      },
      {
        id: 'cleaning',
        title: 'Gentle Scaling & Cleaning',
        price: 'From £95',
        description:
          'Careful removal of plaque and tartar buildup using gentle portable ultrasonic and hand instruments, followed by a fresh polish.',
        features: [
          'Plaque & tartar removal',
          'Stain removal and polish',
          'Sensitive-friendly technique',
          'Tailored home care advice',
        ],
        buttonText: 'Book a Cleaning',
        prefilledText: "Hello Dr. Jenkins, I'd like to ask about arranging a gentle scale and clean at home.",
      },
      {
        id: 'repairs',
        title: 'Simple Repairs & Pain Relief',
        price: 'From £120',
        description:
          'Temporary fillings, recementing loose crowns or bridges, smoothing sharp chips, and immediate relief for aching teeth.',
        features: [
          'Urgent pain relief assessment',
          'Recementing loose crowns',
          'Smooth chipped enamel edges',
          'Temporary protective fillings',
        ],
        buttonText: 'Ask About a Repair',
        prefilledText: "Hello Dr. Jenkins, I have a chipped tooth/loose crown and need advice on a home repair.",
      },
      {
        id: 'family',
        title: 'Family & Multi-Patient Visit',
        price: 'Special Combined Rate',
        description:
          'Convenient combined visits for households or care home residents, reducing per-person costs in a single relaxed session.',
        features: [
          'Single convenient visit window',
          'Examination for 2+ family members',
          'Gentle introduction for young kids',
          'Discounted group travel rate',
        ],
        buttonText: 'Inquire for Family',
        prefilledText: "Hello Dr. Jenkins, I'd like to inquire about booking a combined home visit for my household.",
      },
    ] as ServiceItem[],
  },
  equipment: {
    title: 'What we bring, and what you provide',
    subtitle:
      'We arrive self-sufficient with portable medical equipment. Setting up takes under 10 minutes.',
    weBring: {
      title: 'What We Bring (100% Self-Contained)',
      items: [
        'Hospital-grade sterile instruments in vacuum-sealed surgical pouches (unsealed in front of you)',
        'High-intensity medical LED headlamp and clinical dental loupes for precision vision',
        'Compact, whisper-quiet mobile dental unit with suction and polishing handpiece',
        'Disposable protective coverings for your furniture and treatment area',
        'Clinical sharps container and safe medical waste disposal bags',
      ],
    },
    youProvide: {
      title: 'All You Need in Your Home',
      items: [
        'A comfortable armchair, recliner, sofa, or bed where the patient can lean back comfortably',
        'Access to one standard household electrical plug socket',
        'Adequate room lighting (a window or standard ceiling light)',
        'A small clear table, desk, or countertop for our sterile instrument tray',
      ],
    },
  },
  scope: {
    title: 'Honest care: what we can and cannot do at home',
    subtitle:
      'Your safety always comes first. If a procedure requires a hospital clinic, we tell you immediately.',
    canDo: {
      title: 'Safe & Effective in Your Home',
      items: [
        'Routine check-ups, oral cancer screening & gum assessments',
        'Gentle plaque, tartar, and stain cleaning and polishing',
        'Temporary fillings and minor composite repairs',
        'Recementing dislodged crowns and loose dental bridges',
        'Smoothing rough, broken, or cutting enamel edges',
        'Denture checks, pressure relief adjustments, and soft relines',
        'Prescriptions for acute dental infections and urgent toothache management',
      ],
    },
    cannotDo: {
      title: 'Procedures We Refer to a Clinic',
      items: [
        'Complex surgical tooth extractions or impacted wisdom teeth removal',
        'Full root canal therapy requiring specialized radiographic equipment',
        'General anesthesia or intravenous conscious sedation',
        'Surgical dental implant placement and bone grafting',
        'Extensive multi-unit cosmetic veneers or laboratory crowns',
      ],
      referralNote:
        'If our initial examination shows that your tooth needs a specialized surgery or hospital setting, we will explain exactly why, provide immediate pain relief, and help coordinate a direct referral to a trusted local clinic.',
    },
  },
  promise: {
    title: 'Our promise to every patient',
    subtitle: 'The professional standards we uphold on every single visit.',
    promises: [
      {
        icon: 'FileCheck',
        title: 'A Clear Price Before We Begin',
        body: 'You will never receive a surprise bill. We assess your teeth, explain your options in plain English, and confirm the exact cost before opening any instrument.',
      },
      {
        icon: 'ShieldCheck',
        title: 'Zero Pressure, Zero Upselling',
        body: "We never recommend unnecessary cosmetic procedures or pressure you into treatments you don't need. Our only goal is comfortable, healthy, functioning teeth.",
      },
      {
        icon: 'Stethoscope',
        title: 'Complete Honesty on Limits',
        body: 'If a tooth cannot be safely or permanently repaired in your home, we say so immediately. We relieve your immediate pain and help guide you to the right clinic.',
      },
    ],
  },
  about: {
    title: 'Meet your visiting dentist',
    bioParagraph1:
      'After more than twelve years practicing in busy traditional dental surgeries, I realized that the people who need dental care the most are often the ones who find it hardest to reach a clinic—busy shift workers who cannot lose half a day, elderly grandparents with mobility limits, and patients paralyzed by dental anxiety.',
    bioParagraph2:
      'I founded this home-visit practice to bring unhurried, gentle, one-on-one dentistry back to where patients feel safest: in their own homes. When you book a visit, you deal with me personally from the very first WhatsApp message to your treatment and follow-up.',
    ctaButtonText: 'Message Dr. Jenkins on WhatsApp',
    prefilledText: 'Hello Dr. Jenkins, I read your background and would love to ask a quick question.',
  },
  faq: {
    title: 'Frequently asked questions',
    subtitle: 'Everything you need to know about welcoming a dentist into your home.',
    items: [
      {
        id: 'faq-1',
        question: 'Is dental care at home really safe and hygienic?',
        answer:
          'Yes, absolutely. We follow the exact same cross-infection control protocols as a premier dental hospital. All instruments are pre-sterilized under high pressure in hospital-grade autoclaves, vacuum-sealed in single-use pouches, and opened directly in front of you. All disposable items are packaged in clinical waste bags and removed immediately after your appointment.',
      },
      {
        id: 'faq-2',
        question: 'What if I feel nervous or need to stop during treatment?',
        answer:
          'You are in complete control of the visit. Before we begin, we agree on a simple hand signal. If you need to swallow, take a breath, ask a question, or pause for any reason, you simply raise your hand and we stop instantly. We never rush.',
      },
      {
        id: 'faq-3',
        question: 'How does payment work, and will dental insurance cover it?',
        answer:
          'We confirm our fees in writing before we start your visit. Payment is collected at the end of the appointment via a secure mobile card terminal or direct bank transfer. While we do not process direct insurer billing, we provide an itemized official receipt with all clinical codes, which most dental cash plans and private health policies accept for reimbursement.',
      },
      {
        id: 'faq-4',
        question: 'Can you visit my workplace or office?',
        answer:
          'Yes. Many of our patients are shift workers, busy professionals, or corporate teams. As long as you have a private room (such as a meeting room, first-aid room, or quiet office) with a chair and an electrical socket, we can provide routine check-ups and cleanings during your lunch break.',
      },
      {
        id: 'faq-5',
        question: 'What if my elderly parent has dementia or cannot speak well?',
        answer:
          "We specialize in compassionate care for patients with cognitive decline and physical challenges. We take our time, speak in calm, gentle tones, and work at the patient's pace. We encourage family members or trusted carers to sit right beside them throughout the appointment.",
      },
      {
        id: 'faq-6',
        question: 'What happens if I have an emergency or severe swelling?',
        answer:
          'If you have severe swelling spreading to your eye or throat, difficulty swallowing, difficulty breathing, or uncontrolled bleeding after trauma, you should attend your nearest hospital Accident & Emergency (A&E) immediately. For persistent toothaches or lost fillings, send us a WhatsApp message and we will advise on pain relief and book the earliest home visit slot.',
      },
      {
        id: 'faq-7',
        question: 'How much space do you need in my house?',
        answer:
          'Very little. Our entire clinical setup is packed into two lightweight portable cases. All we need is enough floor space for your dentist to stand or sit beside your armchair, and a small clean table or tray nearby for our instruments.',
      },
    ] as FAQItem[],
  },
  areaAndHours: {
    title: 'Service area and availability',
    subtitle: 'Providing dependable home visits across the local community.',
    catchmentTitle: 'Catchment Area',
    catchmentText:
      'We provide regular home and workplace visits across Bristol, Bath, South Gloucestershire, and North Somerset.',
    travelNote:
      'Visits within our primary 10-mile radius include zero travel surcharges. For visits outside this perimeter, a modest travel fee is agreed upfront before booking.',
    emergencyTitle: 'Urgent Care & Emergency Guidance',
    emergencyText:
      'For life-threatening dental emergencies, facial trauma, or airway swelling, please call 999 or attend your nearest Emergency Department immediately.',
  },
  finalCTA: {
    title: 'Ready for dental care that comes to you?',
    subtitle:
      "Send us a quick WhatsApp message. Tell us what you need and where you are, and we'll reply promptly with times and clear pricing.",
    buttonText: 'Message Us on WhatsApp',
    prefilledText: "Hello Dr. Jenkins, I'd like to find out about your next available home visit slots.",
    phonePrompt: 'Prefer to speak with us first? Call Dr. Jenkins directly at',
    microCopy: 'No pressure · Free advice · Clear prices before we start',
  },
  footer: {
    disclaimer:
      'Information on this website is for general guidance and does not replace in-person clinical diagnosis. Home treatment is subject to clinical suitability assessed at the time of examination.',
    privacyNote:
      'Your privacy is strictly respected. Messages sent via WhatsApp and clinical records are kept in strict compliance with healthcare data protection standards.',
  },
};
