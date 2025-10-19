export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface Project {
  title: string;
  subtitle: string;
  technologies: string[];
  highlights: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  icon: string;
}
