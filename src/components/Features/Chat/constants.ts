export const questions = {
  me: { question: "Who are you? I want to know more about you.", label: "Me" },
  projects: {
    question: "What are your projects? What are you working on right now?",
    label: "Projects",
  },
  skills: {
    question:
      "What are your skills? Give me a list of your soft and hard skills.",
    label: "Skills",
  },
  fun: {
    question:
      "What the craziest thing you've ever done? (mb?) What are your hobbies?",
    label: "Fun",
  },
  contact: {
    question:
      'How can I reach you? What kind of project would make you say "yes" immediately?',
    label: "Contact",
  },
};

type QuestionKey = keyof typeof questions;

export const QUICK_QUESTIONS: { key: QuestionKey; icon: string }[] = [
  { key: "me", icon: "🙃" },
  { key: "projects", icon: "📂" },
  { key: "skills", icon: "🧠" },
  { key: "fun", icon: "🎉" },
  { key: "contact", icon: "📞" },
];
