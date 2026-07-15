export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  coverImage: string;
  images: string[];
  toolsUsed: string[];
  role: string;
  duration: string;
  result: string;
  caseStudyLink?: string;
  liveProjectLink?: string;
  problem?: string;
  solution?: string;
  deliverables?: { title: string; description: string; color: string }[];
  keyFeatures?: string[];
  screenModules?: { label: string; title: string; description: string }[];
  impact?: string;
}

export interface Skill {
  id: string;
  name: string;
  category: 'Design' | 'Prototyping' | 'Research' | 'Tools';
  icon?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}
