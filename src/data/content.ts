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

export interface OutreachPillar {
  icon: string;
  title: string;
  description: string;
  benefits: string[];
}

export const PRACTICE_CONFIG = {
  practiceName: 'Elfort Dental Clinics',
  dentistName: 'Elfort Dental Clinics',
  credentials: 'BDS, Licensed Dental Surgeons',
  title: 'Licensed Dental Surgeons & Mobile Oral Healthcare Team',
  regulatorText: 'Licensed Dental Surgery Practice · Full Clinical Compliance',
  insuranceText: 'Hospital-Grade Sterilization & Strict Cross-Infection Control',
  phoneDisplay: '0814 419 9019',
  phoneRaw: '+2348144199019',
  whatsappRaw: '2348144199019',
  email: 'elfortdentalclinics@gmail.com',
  responsePromise: 'Free to ask · No forms · No obligation · We usually reply within 30 minutes',
  hoursDisplay: {
    weekdays: 'Monday – Friday: 8:00 AM – 6:30 PM',
    saturday: 'Saturday: 9:00 AM – 4:00 PM (by appointment)',
    urgent: 'Evenings & Outreaches: By special arrangement',
  },
  catchmentAreas: ['Home Visits', 'Workplaces & Offices', 'Churches & Religious Bodies', 'Community Centers'],
};

export const SITE_CONTENT = {
  header: {
    brandText: 'Elfort Dental Clinics',
    tagline: 'Mobile & Community Dental Care',
    navLinks: [
      { label: 'Services', href: '#services' },
      { label: 'Outreach', href: '#outreach' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Safety', href: '#safety' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  hero: {
    headline: 'Dental care that comes to you.',
    subheadline:
      'Elfort Dental Clinics brings friendly, licensed dental care directly to your home, workplace, church, or community. Professional check-ups, cleanings, and specialized preventive treatments—with clear prices and zero stress.',
    primaryButtonText: 'Message Us on WhatsApp',
    secondaryButtonText: 'Call: 0814 419 9019',
    prefilledText: "Hello Elfort Dental Clinics, I'd like to ask about booking a mobile dental visit.",
    trustPoints: [
      { icon: 'Award', text: 'Licensed Dental Surgeons' },
      { icon: 'ShieldCheck', text: 'Sterile, Single-Use Instruments' },
      { icon: 'Tag', text: 'Transparent Upfront Pricing' },
    ],
  },
  howItWorks: {
    title: 'How a home visit works',
    subtitle: 'Simple, predictable, and arranged entirely around your personal schedule.',
    steps: [
      {
        number: '01',
        title: 'Send us a message',
        description:
          "Tell us where you are and what you need—whether it's routine scaling, gum care, teeth whitening, or community outreach. No complex forms required.",
      },
      {
        number: '02',
        title: 'Agree a time and clear price',
        description:
          'We confirm the treatment plan, answer all questions, and provide a clear, upfront quote before booking. No hidden charges or surprise costs.',
      },
      {
        number: '03',
        title: 'We come to you',
        description:
          'Our dental team arrives on time with compact, hospital-grade portable equipment. We treat you gently at your own pace, tidy up completely, and leave you in comfort.',
      },
    ] as StepItem[],
  },
  whoWeHelp: {
    title: 'Care designed around real lives',
    subtitle:
      'We visit patients and organizations wherever traditional dental clinics feel stressful, difficult, or inconvenient.',
    audiences: [
      {
        icon: 'HeartHandshake',
        title: 'Seniors & Family Carers',
        description:
          'Comfortable, dignified dental care without the struggle of stairs, transport, or waiting rooms. Carers and family are always welcome to stay by their side.',
      },
      {
        icon: 'Briefcase',
        title: 'Busy Professionals & Corporate Teams',
        description:
          'Quality check-ups and scaling that fit around your working day. We visit your home or set up in your office conference room during break times.',
      },
      {
        icon: 'Smile',
        title: 'Nervous Patients & Avoiders',
        description:
          'No judgment, no lectures, and no clinical panic. You are in complete control: we agree on a hand signal, take frequent pauses, and stop whenever you ask.',
      },
      {
        icon: 'Users',
        title: 'Churches & Community Groups',
        description:
          'We organize outreach programs partnering with churches, mosques, companies, and community groups to provide free dental consultations and screenings.',
      },
    ] as AudienceItem[],
  },
  services: {
    title: 'Our Clinical Services & Clear Pricing',
    subtitle:
      'Delivered with hospital-grade sterilization, modern portable units, and complete price transparency.',
    assuranceNote:
      'Every patient receives an itemized written receipt. Clear prices are confirmed before any procedure begins, ensuring complete transparency and peace of mind.',
    items: [
      {
        id: 'scaling-polishing',
        title: 'Scaling and Polishing',
        price: 'Clear Upfront Fee',
        description:
          'Thorough removal of supragingival tartar, plaque, and tough surface stains using gentle ultrasonic and hand instruments, finished with a fresh prophy polish.',
        features: [
          'Full ultrasonic scaling & plaque removal',
          'Removal of stubborn tea, coffee & tobacco stains',
          'Fresh fluoride dental polish for smooth enamel',
          'Oral health assessment & hygiene counseling',
        ],
        buttonText: 'Book Scaling & Polishing',
        prefilledText: "Hello Elfort Dental Clinics, I'd like to book a Scaling and Polishing session.",
      },
      {
        id: 'root-planing',
        title: 'Subgingival Scaling & Root Planing',
        price: 'Personalized Care Plan',
        description:
          'Targeted deep periodontal cleaning beneath the gumline to eliminate harmful subgingival calculus, detoxify root surfaces, and arrest bleeding gums.',
        features: [
          'Deep pocket debridement below gumline',
          'Root smoothing to eliminate bacterial toxins',
          'Stops bleeding gums & active periodontal disease',
          'Encourages healthy gum reattachment & tissue healing',
        ],
        buttonText: 'Inquire About Root Planing',
        prefilledText: "Hello Elfort Dental Clinics, I'm inquiring about Subgingival Scaling and Root Planing for gum care.",
      },
      {
        id: 'sealant-fluoride-desensitization',
        title: 'Fissure Sealant, Fluoride & Desensitization',
        price: 'Preventive Rate',
        description:
          'Tri-action preventive therapy: sealing deep cavity-prone grooves, professional fluoride enamel strengthening, and rapid desensitization for sensitive teeth.',
        features: [
          'Resin fissure sealant for deep cavity-prone grooves',
          'Professional topical fluoride varnish application',
          'Instant relief from cold, hot, or sweet sensitivity',
          '100% painless, non-invasive preventive therapy',
        ],
        buttonText: 'Book Preventive Care',
        prefilledText: "Hello Elfort Dental Clinics, I need Fissure Sealant, Fluoride treatment, or tooth desensitization.",
      },
      {
        id: 'whitening',
        title: 'Professional Teeth Whitening',
        price: 'Cosmetic Rate',
        description:
          'Dentist-supervised cosmetic whitening treatment formulated to safely lift deep discoloration, surface stains, and restore a bright, radiant smile.',
        features: [
          'Dentist-formulated, enamel-safe whitening gel',
          'Lifts deep stains from coffee, tea, and aging',
          'Noticeable shade lightening in a single session',
          'Custom gum protection and home care advice',
        ],
        buttonText: 'Book Teeth Whitening',
        prefilledText: "Hello Elfort Dental Clinics, I'd like to book an appointment for Professional Teeth Whitening.",
      },
      {
        id: 'counseling',
        title: 'Oral Hygiene Counseling & Education',
        price: 'Included With Visits',
        description:
          'One-on-one personalized prevention counseling, hands-on brushing and flossing technique coaching, dietary guidance, and custom maintenance plans.',
        features: [
          'Personalized brushing & interdental flossing coaching',
          'Dietary counseling for cavity and acid erosion prevention',
          'Tailored home maintenance routine for all ages',
          'Guidance on caring for children or eldercare oral health',
        ],
        buttonText: 'Inquire About Counseling',
        prefilledText: "Hello Elfort Dental Clinics, I'd like to consult on Oral Hygiene Counseling and home care.",
      },
    ] as ServiceItem[],
  },
  outreach: {
    title: 'Community Outreaches & Institutional Partnerships',
    subtitle:
      'We partner with churches, corporations, community groups, and NGOs to provide free dental examinations and oral health consultations.',
    description:
      'At Elfort Dental Clinics, we believe quality oral healthcare should be accessible to everyone. We regularly organize community outreaches and partner with religious organizations, businesses, and civic groups to screen, educate, and empower communities toward healthier smiles.',
    pillars: [
      {
        icon: 'Church',
        title: 'Churches & Religious Bodies',
        description:
          'We collaborate with churches, mosques, and faith fellowships to organize weekend dental outreach days, providing free oral screenings and health talks to congregations.',
        benefits: [
          'Free oral examinations & consultation',
          'Educational dental talk during fellowship',
          'Personalized oral hygiene recommendations',
          'Subsidized follow-up treatment plans',
        ],
      },
      {
        icon: 'Building2',
        title: 'Corporate & Workplace Wellness',
        description:
          'Partner with us for corporate wellness days. We bring dental check-ups directly to your office, saving employee hours and promoting workplace health.',
        benefits: [
          'On-site examinations in a quiet meeting room',
          'Zero commute or lost work hours for staff',
          'Lunch-and-learn oral hygiene seminars',
          'Group corporate dental health packages',
        ],
      },
      {
        icon: 'Users2',
        title: 'Community Groups & NGOs',
        description:
          'We team up with community leaders, charitable NGOs, and youth/elderly associations to conduct impactful public oral health missions.',
        benefits: [
          'Large-scale public dental screening drives',
          'Free consultations and dental hygiene kits',
          'Care home and vulnerable population visits',
          'Comprehensive outreach coordination',
        ],
      },
    ] as OutreachPillar[],
    ctaText: 'Partner With Us for an Outreach',
    prefilledText:
      'Hello Elfort Dental Clinics, I would like to discuss organizing a community or corporate dental outreach with our organization/church.',
  },
  equipment: {
    title: 'What we bring, and what you provide',
    subtitle:
      'We arrive self-sufficient with portable medical equipment. Setting up takes under 10 minutes.',
    weBring: {
      title: 'What Elfort Dental Brings (100% Self-Contained)',
      items: [
        'Hospital-grade sterile instruments in vacuum-sealed surgical pouches (unsealed in front of you)',
        'High-intensity medical LED headlamp and clinical dental loupes for precision vision',
        'Compact, whisper-quiet mobile dental unit with suction, scaler, and polishing handpiece',
        'Disposable protective coverings for your furniture and treatment area',
        'Clinical sharps container and safe medical waste disposal bags',
      ],
    },
    youProvide: {
      title: 'All You Need in Your Home or Venue',
      items: [
        'A comfortable armchair, recliner, sofa, or desk chair where the patient can lean back comfortably',
        'Access to one standard household or office electrical plug socket',
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
      title: 'Safe & Effective in Your Home or Workplace',
      items: [
        'Scaling and polishing for healthy gums and clean teeth',
        'Subgingival scaling and root planing for gum disease',
        'Fissure sealant, topical fluoride & tooth desensitization',
        'Professional teeth whitening treatments',
        'Comprehensive oral health examinations & cancer screening',
        'Oral hygiene counseling and personalized home care coaching',
        'Temporary protective fillings and pain relief consultations',
      ],
    },
    cannotDo: {
      title: 'Procedures We Refer to a Clinic',
      items: [
        'Complex surgical tooth extractions or impacted wisdom teeth removal',
        'Full root canal therapy requiring specialized radiographic equipment',
        'General anesthesia or intravenous conscious sedation',
        'Surgical dental implant placement and bone grafting',
        'Extensive multi-unit laboratory crowns and surgical bridges',
      ],
      referralNote:
        'If our initial examination shows that your tooth needs a specialized surgery or hospital setting, we will explain exactly why, provide immediate pain relief, and help coordinate a direct referral to a trusted clinic.',
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
        body: 'If a tooth cannot be safely or permanently treated in your home, we say so immediately. We relieve your immediate pain and help guide you to the right clinic.',
      },
    ],
  },
  about: {
    title: 'Meet Elfort Dental Clinics',
    bioParagraph1:
      'Elfort Dental Clinics was founded on a simple, compassionate conviction: dental care should be accessible, humane, and free of the intimidating barriers of traditional clinics. Too many families, shift workers, and frail elders suffer in silence because visiting a surgery is physically daunting or incompatible with their schedules.',
    bioParagraph2:
      'Whether we are visiting an individual in their private living room, conducting a corporate wellness check for an office team, or partnering with a church for a free community outreach, our team delivers unhurried, gentle, and hospital-grade dental care with personal warmth and total transparency.',
    ctaButtonText: 'Message Elfort Dental on WhatsApp',
    prefilledText: 'Hello Elfort Dental Clinics, I would love to learn more about your services and book an appointment.',
  },
  faq: {
    title: 'Frequently asked questions',
    subtitle: 'Everything you need to know about our mobile visits and community outreaches.',
    items: [
      {
        id: 'faq-1',
        question: 'Is dental care at home really safe and hygienic?',
        answer:
          'Yes, absolutely. We follow the exact same cross-infection control protocols as premier dental hospitals. All instruments are pre-sterilized under high pressure in autoclaves, vacuum-sealed in single-use surgical pouches, and opened directly in front of you. All disposables are removed in clinical waste bags immediately after treatment.',
      },
      {
        id: 'faq-2',
        question: 'How do community and church outreaches work?',
        answer:
          'We partner with churches, companies, and community organizations to host dental health days. Our team provides free dental examinations, oral cancer screenings, and one-on-one oral hygiene counseling for attendees. We can tailor the outreach to your venue size and schedule.',
      },
      {
        id: 'faq-3',
        question: 'What is subgingival scaling and root planing?',
        answer:
          'It is a specialized deep cleaning procedure for patients with gum disease, tartar beneath the gumline, or bleeding gums. We gently remove hardened bacterial calculus from root surfaces, allowing the gum tissue to heal and firmly reattach to the tooth.',
      },
      {
        id: 'faq-4',
        question: 'What are fissure sealants and fluoride applications?',
        answer:
          'Fissure sealants are thin, protective coatings applied to the deep chewing grooves of back teeth to shield them from food and decay. Fluoride applications strengthen tooth enamel and resist acid attacks, while our desensitization treatment provides rapid relief for painful cold or sweet tooth sensitivity.',
      },
      {
        id: 'faq-5',
        question: 'Can you visit my workplace or company office?',
        answer:
          'Yes! Many of our patients are busy executives and corporate teams. With access to a quiet room or meeting space with a standard plug socket, we can provide scaling, polishing, and consultations during lunch breaks or corporate health days.',
      },
      {
        id: 'faq-6',
        question: 'What happens if a tooth needs a surgical clinic procedure?',
        answer:
          'We believe in radical honesty. If our examination reveals a tooth requires a complex surgical extraction, root canal therapy, or hospital care, we will explain the situation clearly, prescribe relief if necessary, and connect you with trusted clinic partners.',
      },
      {
        id: 'faq-7',
        question: 'How do I contact or book with Elfort Dental Clinics?',
        answer:
          'You can message us directly on WhatsApp at 0814 419 9019, call our phone line at 0814 419 9019, or email us at elfortdentalclinics@gmail.com. We usually respond within 30 minutes during working hours.',
      },
    ] as FAQItem[],
  },
  areaAndHours: {
    title: 'Service area, outreaches and availability',
    subtitle: 'Providing mobile dental visits and community outreaches.',
    catchmentTitle: 'Where We Operate',
    catchmentText:
      'Elfort Dental Clinics provides mobile dental care to private residences, corporate offices, churches, and community venues across our catchment perimeter.',
    travelNote:
      'Standard local visits include clear, upfront pricing agreed before we travel. For group outreaches and community events, custom logistic arrangements are coordinated with your leadership team.',
    emergencyTitle: 'Urgent Care & Severe Emergencies',
    emergencyText:
      'For severe facial trauma, airway swelling, or uncontrolled bleeding, please seek immediate emergency hospital medical attention. For toothaches or urgent scaling, message us on WhatsApp for rapid scheduling.',
  },
  finalCTA: {
    title: 'Ready for gentle dental care that comes to you?',
    subtitle:
      "Send Elfort Dental Clinics a quick WhatsApp message or give us a call. Whether you need a personal home visit or want to organize a community outreach, we're ready to help.",
    buttonText: 'Message on WhatsApp',
    prefilledText: "Hello Elfort Dental Clinics, I'd like to book an appointment or discuss a visit.",
    phonePrompt: 'Prefer to call us directly?',
    microCopy: 'No pressure · Clear prices · Dedicated mobile & community team',
  },
  footer: {
    disclaimer:
      'Information on this website is for general guidance and does not replace in-person clinical diagnosis. Home and outreach treatments are subject to clinical examination and suitability.',
    privacyNote:
      'Patient privacy is strictly protected. Communications and medical consultations comply with professional healthcare confidentiality standards.',
  },
};
