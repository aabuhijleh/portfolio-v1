export type BrandLink = {
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
  externalUrl: string;
};
