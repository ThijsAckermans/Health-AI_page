export interface SiteSettings {
  siteName: string;
  siteDescription: string;
  projectFullName: string;
  grantAgreementNumber: string;
  fundingProgram: string;
  socialLinks: {
    facebook: string;
    linkedin: string;
    twitter: string;
  };
  footerText: string;
}

export interface MenuItem {
  label: string;
  href: string;
  order: number;
}

export interface Navigation {
  mainMenu: MenuItem[];
}

export interface HomeContent {
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  heroButtonText: string;
  heroButtonLink: string;
  introTitle: string;
  introContent: string;
  introImage: string;
}

export interface Objective {
  title: string;
  description: string;
  icon: string;
}

export interface AboutContent {
  title: string;
  subtitle: string;
  heroImage: string;
  content: string;
  objectives: Objective[];
}

export interface NewsPost {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: {
    name: string;
    picture: string;
  };
  ogImage: {
    url: string;
  };
  content: string;
}

export interface Publication {
  slug: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  type: string;
  doi: string;
  url: string;
  abstract: string;
}

export interface Event {
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  link: string;
}

export interface OutreachContent {
  title: string;
  intro: string;
  events: Event[];
}

export interface Partner {
  slug: string;
  name: string;
  shortName: string;
  logo: string;
  country: string;
  website: string;
  description: string;
  role: string;
  order: number;
}

export interface WorkPackage {
  slug: string;
  number: number;
  title: string;
  lead: string;
  description: string;
  objectives: string[];
}

export interface ContactContent {
  title: string;
  intro: string;
  email: string;
  address: string;
  coordinatorName: string;
  coordinatorOrg: string;
  mapEmbed: string;
}

export interface PatientsContent {
  title: string;
  intro: string;
  content: string;
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface LegalPage {
  title: string;
  lastUpdated: string;
  content: string;
}
