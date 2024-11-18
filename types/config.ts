export type BrandLink = {
  name: string;
  href: string;
  icon: React.ElementType;
};

export type NavLink = {
  label: string;
  href: string;
  icon: React.ElementType;
};

export type Experience = {
  company: string;
  companyUrl: string;
  title: string;
  date: {
    from: string;
    to: string;
  };
  accomplishments: string[];
};

export type Project = {
  name: string;
  description: string;
  technologies: string[];
  repoUrl: string;
  externalUrl?: string;
  npm?: boolean;
};
