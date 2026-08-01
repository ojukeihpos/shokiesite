// types/experience.ts
import { ReactNode } from 'react';

export interface JobItem {
  title: string;
  date: string;
  location?: string | ReactNode;
  subTitle?: ReactNode;
  skills?: string;
  showBlueBar?: boolean;
  highlight?: ReactNode;
  bullets: (string | ReactNode)[];
}

export interface ExperienceSection {
  category: string;
  items: JobItem[];
}

export interface PageData {
  title: string;
  headerLinks: { label: string; href: string }[];
  intro?: string;
  sections: ExperienceSection[];
  otherEntries?: { org: string; role: string | ReactNode }[];
}