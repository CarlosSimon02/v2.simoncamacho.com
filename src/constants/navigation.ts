import {
  BriefcaseIcon,
  ChatBubbleOvalLeftIcon,
  CodeBracketIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

export const NAV_ITEMS = [
  { href: "#home", id: "home", icon: HomeIcon },
  { href: "#about", id: "about", icon: UserIcon },
  { href: "#experience", id: "experience", icon: BriefcaseIcon },
  { href: "#projects", id: "projects", icon: CodeBracketIcon },
  { href: "#connect", id: "connect", icon: ChatBubbleOvalLeftIcon },
] as const;
