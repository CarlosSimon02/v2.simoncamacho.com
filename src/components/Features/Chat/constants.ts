import {
  BriefcaseIcon,
  CodeBracketIcon,
  EnvelopeIcon,
  FaceSmileIcon,
  UserCircleIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

export const questionCategories = [
  {
    id: "profile",
    icon: UserCircleIcon,
  },
  {
    id: "professional",
    icon: BriefcaseIcon,
  },
  {
    id: "projects",
    icon: CodeBracketIcon,
  },
  {
    id: "skills",
    icon: WrenchScrewdriverIcon,
  },
  {
    id: "fun",
    icon: FaceSmileIcon,
  },
  {
    id: "contact",
    icon: EnvelopeIcon,
  },
];

export const quickQuestionKeys = [
  "profile",
  "projects",
  "skills",
  "cats",
  "contact",
] as const;

export const QUICK_QUESTIONS: {
  key: (typeof quickQuestionKeys)[number];
  icon: string;
}[] = [
  { key: "profile", icon: "🙃" },
  { key: "projects", icon: "📂" },
  { key: "skills", icon: "🧠" },
  { key: "cats", icon: "😺" },
  { key: "contact", icon: "📞" },
];
