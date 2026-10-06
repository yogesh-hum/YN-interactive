import { ServiceItem, FeatureItem, DemoProject, PricingPlan, ProcessStep, FAQItem } from '../types.ts';
import restaurantImg from '../assets/images/demo_restaurant_cafe_1791265040854.jpg';
import salonImg from '../assets/images/demo_salon_spa_1791265051489.jpg';
import fashionImg from '../assets/images/demo_fashion_store_1791265062641.jpg';

export const BRAND = {
  name: 'YN Interactive',
  positioning: 'Web • Software • AI • Digital Solutions',
  tagline: 'Ideas to Real Solutions.',
  founder: 'Yogesh Naik',
  founderRole: 'Founder — YN Interactive',
  phone: '+91 84540 16069',
  phoneRaw: '918454016069',
  email: 'naikyogesh580@gmail.com',
};

export function getWhatsAppUrl(customMessage?: string): string {
  const baseText = customMessage || "Hi YN Interactive, I would like to get a free quote for my business.";
  return `https://wa.me/${BRAND.phoneRaw}?text=${encodeURIComponent(baseText)}`;
}

export function getEmailUrl(subject?: string, body?: string): string {
  const sub = subject || "Project Inquiry — YN Interactive";
  const b = body || "Hi Yogesh,\n\nI would like to discuss a digital solution project for my business.\n\nBusiness Name:\nRequirements:\nPhone / WhatsApp:";
  return `mailto:${BRAND.email}?subject=${encodeURIComponent(sub)}&body=${encodeURIComponent(b)}`;
}

export const TARGET_INDUSTRIES = [
  'Restaurants & Cafes',
  'Salons & Spas',
  'Gyms & Fitness Centers',
  'Clothing & Retail Stores',
  'Sweet Shops & Bakeries',
  'Repair & Auto Workshops',
  'Clinics & Healthcare',
  'Coaching Classes & Tutors',
  'Photographers & Studios',
  'Real Estate & Builders',
  'Hotels & Homestays',
  'Local Service Providers',
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'business-websites',
    title: 'Business Websites',
    description: 'Professional, responsive websites designed to establish a strong online presence and generate enquiries.',
    iconName: 'Globe',
    badge: 'High Conversion',
    deliverables: [
      'Clean modern layout designed to build customer trust',
      'Direct WhatsApp inquiry buttons and contact flow',
      'Full mobile & tablet responsive optimization',
      'Search visibility setup and fast page loading',
    ],
  },
  {
    id: 'ecommerce-websites',
    title: 'E-Commerce Websites',
    description: 'Modern online stores and product catalogues designed for selling products online.',
    iconName: 'ShoppingBag',
    badge: 'Catalogue & Store',
    deliverables: [
      'Interactive digital product catalog with filter options',
      'Direct WhatsApp ordering or checkout integration',
      'Categorized showcase for products, variations, & prices',
      'Convenient mobile browsing experience for customers',
    ],
  },
  {
    id: 'web-applications',
    title: 'Web Applications',
    description: 'Custom web applications that simplify business workflows and digital operations.',
    iconName: 'Layers',
    badge: 'Operations & SaaS',
    deliverables: [
      'Internal management portals and booking dashboards',
      'Digital inquiry management and status tracking',
      'Role-tailored tools for staff and store managers',
      'Cloud deployment with structured SSL encryption',
    ],
  },
  {
    id: 'software-solutions',
    title: 'Software Solutions',
    description: 'Business-focused custom software designed around specific requirements.',
    iconName: 'Code',
    badge: 'Custom Engineered',
    deliverables: [
      'Tailored business logic built specifically for your niche',
      'Inventory, billing, or client appointment management',
      'Reliable, well-structured codebase with ongoing maintenance',
      'Zero bloated third-party subscription overhead',
    ],
  },
  {
    id: 'ai-automation',
    title: 'AI Automation',
    description: 'AI-powered workflows, assistants and automation that reduce repetitive work and improve productivity.',
    iconName: 'Bot',
    badge: 'Smart Productivity',
    deliverables: [
      'Automated WhatsApp and website inquiry answering',
      'Smart customer query routing and FAQ handling',
      'Document summarization and data categorization',
      'Streamlined repetitive tasks to save daily business hours',
    ],
  },
  {
    id: 'digital-services',
    title: 'Digital Services',
    description: 'Deployment, maintenance, optimisation, integrations and other digital solutions.',
    iconName: 'Cpu',
    badge: 'Support & Ops',
    deliverables: [
      'Production deployment on verified cloud hosting',
      'Domain connection, SSL encryption, and security audit',
      'Regular website maintenance, fixes, and content updates',
      'Performance speed tuning and search engine indexing',
    ],
  },
];

export const WHY_US_FEATURES: FeatureItem[] = [
  {
    id: 'modern-design',
    title: 'Modern Design',
    description: 'Distinctive, clean, and professional visual aesthetics that give your business credibility over local competitors.',
    iconName: 'Palette',
    outcome: 'Instills immediate customer trust',
  },
  {
    id: 'mobile-first',
    title: 'Mobile First',
    description: 'Most potential customers discover and research local businesses on their smartphones. Every page, menu, and button is designed for effortless touch navigation.',
    iconName: 'Smartphone',
    outcome: 'Seamless mobile conversion',
  },
  {
    id: 'fast-performance',
    title: 'Fast Performance',
    description: 'Lightweight code structure engineered for swift loading across mobile and desktop connections, keeping visitors engaged.',
    iconName: 'Zap',
    outcome: 'Smooth, responsive visitor experience',
  },
  {
    id: 'business-focused',
    title: 'Business Focused',
    description: 'We build solutions designed around real business outcomes. Every button, section, and text copy directs prospects toward making an enquiry or calling you.',
    iconName: 'Target',
    outcome: 'Generates qualified customer inquiries',
  },
  {
    id: 'affordable-solutions',
    title: 'Affordable Solutions',
    description: 'Transparent tier-based pricing with no hidden developer fees or ongoing trap subscriptions. High quality made accessible for local businesses.',
    iconName: 'BadgePercent',
    outcome: 'Predictable, accessible investment',
  },
  {
    id: 'future-ready',
    title: 'Future Ready',
    description: 'Built on modern, established web frameworks that can seamlessly grow as your business adds services, products, or AI automation.',
    iconName: 'ShieldCheck',
    outcome: 'Scales with your long-term growth',
  },
];

export const DEMO_PROJECTS: DemoProject[] = [
  {
    id: 'restaurant-cafe',
    title: 'Restaurant / Café Website',
    category: 'Hospitality & Dining',
    description: 'A modern restaurant website with interactive menu, food gallery, location map, and direct WhatsApp table reservation and order enquiry functionality.',
    image: restaurantImg,
    features: [
      'Categorized digital menu with dietary tags and dish pricing',
      'One-tap WhatsApp table booking with guest count and date',
      'Google Maps directions link and opening hours display',
      'Optimized photo gallery showing ambience and specialties',
    ],
    liveDetails: {
      tagline: 'Artisanal Dining & Café Experience',
      sampleMetrics: ['Direct WhatsApp Table Booking', 'Digital Mobile Menu', 'Map & Hours Integration'],
      conceptRole: 'Designed for cafes, bistros, bakeries, and dining spots seeking an intuitive digital menu and reservation flow.',
    },
  },
  {
    id: 'premium-salon',
    title: 'Premium Salon Website',
    category: 'Beauty, Wellness & Salon',
    description: 'A stylish salon website featuring categorized grooming services, clear pricing cards, artist gallery, and instant WhatsApp appointment enquiry.',
    image: salonImg,
    features: [
      'Service catalog with duration, pricing, and package combos',
      'Instant appointment request directly into stylist WhatsApp',
      'Lookbook gallery highlighting hair transformations and styling',
      'Client preparation guidelines and salon address guidance',
    ],
    liveDetails: {
      tagline: 'Contemporary Hair & Wellness Studio',
      sampleMetrics: ['WhatsApp Slot Inquiries', 'Service Rate Card', 'Stylist Transformation Showcase'],
      conceptRole: 'Tailored for hair salons, nail studios, barbershops, and spa clinics looking to organize appointment bookings.',
    },
  },
  {
    id: 'fashion-store',
    title: 'Fashion Store Website',
    category: 'Apparel & Retail Storefront',
    description: 'A modern fashion storefront with product collections, high-definition product cards, size availability indicators, and 1-click WhatsApp purchase enquiry.',
    image: fashionImg,
    features: [
      'Minimalist lookbook grid with collection filtering',
      'Product quick-view with fabric specs and size charts',
      'Pre-filled WhatsApp checkout order link for each product',
      'Direct WhatsApp customer orders without third-party merchant fees',
    ],
    liveDetails: {
      tagline: 'Contemporary Streetwear & Apparel Storefront',
      sampleMetrics: ['Direct WhatsApp Orders', 'Mobile Catalog Grid', 'Instant Customer Chat'],
      conceptRole: 'Engineered for boutique clothing brands, sneaker stores, and local retail shops selling via direct customer chat.',
    },
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'STARTER',
    price: '₹2,999',
    description: 'Perfect for small local businesses, solo professionals, or shops establishing their foundational web presence.',
    features: [
      '1–3 pages',
      'Responsive design (Mobile, Tablet, Desktop)',
      'WhatsApp integration (1-click inquiry link)',
      'Basic SEO (Meta tags & Google indexing setup)',
      'Deployment (Configured on reliable cloud hosting)',
      'Domain connection assistance',
    ],
    ctaText: 'Get a Free Quote',
    popular: false,
  },
  {
    id: 'business',
    name: 'BUSINESS',
    price: '₹5,999',
    badge: 'MOST POPULAR',
    description: 'The complete package for growing businesses needing a full multi-page presence with custom branding and inquiries.',
    features: [
      '5–7 pages',
      'Premium UI with dark or custom aesthetic',
      'WhatsApp integration with pre-filled inquiries',
      'Contact form with email notifications',
      'Basic SEO (On-page meta & schema structure)',
      'Deployment on verified cloud infrastructure',
      'Basic analytics to track visitor visits',
      'Social media & Google Maps integration',
    ],
    ctaText: 'Get a Free Quote',
    popular: true,
  },
  {
    id: 'premium',
    name: 'PREMIUM',
    price: '₹9,999',
    description: 'High-impact solution for established businesses seeking bespoke visuals, high performance, and comprehensive polish.',
    features: [
      'Custom UI tailored to your exact brand voice',
      'Advanced sections & interactive showcases',
      'Animations & refined micro-interactions',
      'Advanced functionality (Custom forms, filters)',
      'SEO optimisation (Speed score & structured data)',
      'Deployment on optimized cloud infrastructure',
      'Support & post-launch assistance included',
      'Priority delivery timeline',
    ],
    ctaText: 'Get a Free Quote',
    popular: false,
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discuss',
    description: 'Understand your business and requirements. We review your target audience, services, and primary goals to choose the right structure.',
    timeline: 'Discovery & Scope',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Plan the structure and visual direction. We craft a clear layout wireframe, typography pairing, and component styles tailored to your brand.',
    timeline: 'Visual Direction',
  },
  {
    number: '03',
    title: 'Build',
    description: 'Develop, test and optimise the solution. Clean, responsive code with WhatsApp routing, fast asset loading, and mobile cross-browser verification.',
    timeline: 'Engineering & Testing',
  },
  {
    number: '04',
    title: 'Launch',
    description: 'Deploy the final product and provide support. We connect your custom domain, verify SSL encryption, and provide clear handover guidance.',
    timeline: 'Go-To-Market & Handover',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'How much does a website cost?',
    answer: 'Our transparent website packages start at ₹2,999 for foundational 1–3 page business sites, ₹5,999 for our most popular 5–7 page Business package, and ₹9,999 for bespoke Premium solutions. For custom software or AI automation, we provide a clear quotation based on your exact specifications.',
  },
  {
    question: 'How long does a website take to build?',
    answer: 'Most standard business websites are completed and launched within 5 to 7 working days once content and details are provided. Smaller starter websites can be ready in 3 to 4 days, while complex web applications and custom software take approximately 2 to 3 weeks depending on scope.',
  },
  {
    question: 'Will my website work on mobile?',
    answer: 'Yes, absolutely. We build every project mobile-first. The vast majority of customer searches for local services happen on smartphones, so your website will look sharp, load smoothly, and provide easy tap-friendly navigation across iPhone, Android, tablet, and desktop screens.',
  },
  {
    question: 'Can you maintain my website after launch?',
    answer: 'Yes. We offer reliable ongoing maintenance, content updates, security checks, and technical support. You can reach out whenever you want to update prices, add new photos, post announcements, or tweak your services.',
  },
  {
    question: 'Can you build custom software?',
    answer: 'Yes. Beyond marketing websites, we build business-focused web applications, appointment scheduling portals, inventory calculators, and internal operational dashboards designed specifically around your company’s workflow.',
  },
  {
    question: 'Do you provide AI automation?',
    answer: 'Yes. We implement practical AI automations including automated WhatsApp message responses, customer inquiry triage, FAQ answering bots, and workflow automations that help save business owners time on repetitive administrative tasks.',
  },
  {
    question: 'How do I get started?',
    answer: 'Getting started is simple. Just click "Get a Free Quote" or send us a message on WhatsApp at +91 84540 16069. Tell us briefly about your business and what you need, and we will guide you with a clear roadmap and exact quote.',
  },
];
