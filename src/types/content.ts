export type Language = 'en' | 'bn';

export interface Subsidiary {
  id: string;
  name: { en: string; bn: string };
  category: 'manufacturing' | 'energy' | 'logistics' | 'materials';
  categoryLabel: { en: string; bn: string };
  tagline: { en: string; bn: string };
  year: string;
  capacity: { en: string; bn: string };
  headcount: string;
  headquarters: { en: string; bn: string };
  description: { en: string; bn: string };
  capabilities: { en: string[]; bn: string[] };
  isoCertifications: string[];
}

export interface MetricItem {
  id: string;
  value: string;
  suffix?: string;
  label: { en: string; bn: string };
  subtext: { en: string; bn: string };
}

export interface GovernancePillar {
  title: { en: string; bn: string };
  description: { en: string; bn: string };
  icon: string;
}

export interface NewsItem {
  date: string;
  category: { en: string; bn: string };
  title: { en: string; bn: string };
  excerpt: { en: string; bn: string };
}
