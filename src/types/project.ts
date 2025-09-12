import { TechnologyName } from "@/data/technologies";

export type Project = {
  slug: string;
  logo: string;
  technologies: TechnologyName[];
  image: string;
  codeLink: string;
  previewLink: string;
  keywords: string[];
  datePublished: string;
  dateModified: string;
  type: "WebPage";
};
