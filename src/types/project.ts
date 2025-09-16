import { TechnologyName } from "@/data/technologies";

export type Project = {
  slug: string;
  logo: string | React.ReactNode;
  technologies: TechnologyName[];
  image: string;
  ogImage: string;
  codeLink: string;
  previewLink: string;
  keywords: string[];
  datePublished: string;
  dateModified: string;
  type: "article";
};
