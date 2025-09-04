import {
  BriefcaseIcon,
  CodeBracketIcon,
  EnvelopeIcon,
  FaceSmileIcon,
  UserCircleIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

export const questionsByCategory = [
  {
    id: "profile",
    name: "Profile",
    icon: UserCircleIcon,
    questions: [
      "Who is Simon Camacho?",
      "Can you tell me about Simon's background?",
      "How did Simon get into programming?",
      "What motivates Simon to keep learning?",
      "Where does Simon see himself in 5 years?",
      "What’s Simon’s biggest strength?",
      "What’s a weakness Simon is working on?",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    icon: BriefcaseIcon,
    questions: [
      "Can I see Simon's resume?",
      "Where is Simon working now?",
      "What kind of work does Simon do at Supafaya?",
      "What makes Simon a valuable team member?",
      "Why should someone hire Simon?",
      "What’s Simon’s educational background?",
      "Has Simon worked with clients or startups before?",
    ],
  },
  {
    id: "projects",
    name: "Projects",
    icon: CodeBracketIcon,
    questions: [
      "What projects is Simon most proud of?",
      "What is Simon’s portfolio website built with?",
      "Has Simon done any game development?",
    ],
  },
  {
    id: "skills",
    name: "Skills",
    icon: WrenchScrewdriverIcon,
    questions: [
      "What are Simon’s main skills?",
      "Which frontend frameworks does Simon use?",
      "Does Simon have backend experience too?",
      "What tools does Simon use for design?",
      "How does Simon keep his skills sharp?",
    ],
  },
  {
    id: "fun",
    name: "Fun",
    icon: FaceSmileIcon,
    questions: [
      "What’s Simon’s favorite food?",
      "Does Simon play any sports?",
      "What’s Simon’s fastest Rubik’s cube solve?",
      "Does Simon like BTS?",
      "What’s Simon’s favorite chess opening?",
      "What does Simon do for fun outside coding?",
    ],
  },
  {
    id: "contact",
    name: "Contact & Future",
    icon: EnvelopeIcon,
    questions: [
      "How can I reach Simon?",
      "What kind of projects is Simon interested in?",
      "Where is Simon located?",
      "Is Simon open for work or collaborations?",
      "What’s Simon’s dream project?",
    ],
  },
];

export const questions = {
  profile: {
    question: "Who is Simon Camacho? I want to know more about him.",
    label: "Profile",
  },
  projects: {
    question: "What are Simon’s projects? What is he working on right now?",
    label: "Projects",
  },
  skills: {
    question: "What are Simon’s skills? Can you list his soft and hard skills?",
    label: "Skills",
  },
  fun: {
    question:
      "What’s the craziest thing Simon has ever done? What are his hobbies?",
    label: "Fun",
  },
  contact: {
    question:
      "How can I reach Simon? What kind of project would make him say 'yes' immediately?",
    label: "Contact",
  },
};

type QuestionKey = keyof typeof questions;

export const QUICK_QUESTIONS: { key: QuestionKey; icon: string }[] = [
  { key: "profile", icon: "🙃" },
  { key: "projects", icon: "📂" },
  { key: "skills", icon: "🧠" },
  { key: "fun", icon: "🎉" },
  { key: "contact", icon: "📞" },
];
