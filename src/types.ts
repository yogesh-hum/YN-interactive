export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
  deliverables: string[];
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  outcome: string;
}

export interface DemoProject {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  features: string[];
  liveDetails: {
    tagline: string;
    sampleMetrics: string[];
    conceptRole: string;
  };
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  badge?: string;
  description: string;
  features: string[];
  ctaText: string;
  popular?: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  timeline: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
