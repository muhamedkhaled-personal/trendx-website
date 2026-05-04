export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface PanelStatItem {
  prefix: string;
  highlight: string;
  suffix: string;
  label: string;
}

export interface FeatureCard {
  icon: string;
  title: string;
  description: string;
}

export interface StepCard {
  number: string;
  title: string;
  description: string;
}

export interface ServiceCard {
  icon: string;
  title: string;
  description: string;
  features?: string[];
}

export interface ReportCard {
  title: string;
  description: string;
  tag: string;
  date: string;
  image: string;
  alt: string;
  href: string;
  featured?: boolean;
}

export interface OrgCard {
  icon: string;
  title: string;
  description: string;
}

export interface BrandItem {
  name: string;
  logo: string;
}

export interface PartnerLogo {
  name: string;
  src: string;
}

export interface DemoBarItem {
  label: string;
  value: string;
  percentage: number;
  color: string;
}

export interface DemographicCard {
  icon: string;
  title: string;
  bars: DemoBarItem[];
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface SocialLink {
  icon: string;
  href: string;
  label: string;
}
