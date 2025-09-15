import {
  CssIcon,
  ExpressIcon,
  FirebaseIcon,
  HtmlIcon,
  JavascriptIcon,
  MaterialUiIcon,
  MongodbIcon,
  NestJsIcon,
  NextJsIcon,
  NodeIcon,
  ReactIcon,
  SassIcon,
  ShadCnIcon,
  TailwindIcon,
  TypeScriptIcon,
} from "@/components/UI/Icons/Techs";

export const TECHNOLOGIES = [
  {
    name: "JavaScript",
    icon: JavascriptIcon,
    color: "#F7DF1E",
  },
  {
    name: "TypeScript",
    icon: TypeScriptIcon,
    color: "#3178C6",
  },
  {
    name: "HTML",
    icon: HtmlIcon,
    color: "#E34F26",
  },
  {
    name: "CSS",
    icon: CssIcon,
    color: "#1572B6",
  },
  {
    name: "Sass",
    icon: SassIcon,
    color: "#CC6699",
  },
  {
    name: "React",
    icon: ReactIcon,
    color: "#00D8FF",
  },
  {
    name: "Next.js",
    icon: NextJsIcon,
    color: "system",
  },
  {
    name: "Node.js",
    icon: NodeIcon,
    color: "#539E43",
  },
  {
    name: "Express.js",
    icon: ExpressIcon,
    color: "system",
  },
  {
    name: "NestJS",
    icon: NestJsIcon,
    color: "#E0234E",
  },
  {
    name: "Tailwind",
    icon: TailwindIcon,
    color: "#06B6D4",
  },
  {
    name: "Firebase",
    icon: FirebaseIcon,
    color: "#FFCA28",
  },
  {
    name: "MongoDB",
    icon: MongodbIcon,
    color: "#47A248",
  },
  {
    name: "MUI",
    icon: MaterialUiIcon,
    color: "#007FFF",
  },
  {
    name: "Shadcn",
    icon: ShadCnIcon,
    color: "system",
  },
];

export type TechnologyName = (typeof TECHNOLOGIES)[number]["name"];
