"use client";

import GhostButton from "@/components/UI/Buttons/GhostButton";
import { useChat } from "@/providers/ChatProvider";
import { cn } from "@/utils";
import { questions, QUICK_QUESTIONS } from "../constants";

type QuickQuestionsProps = {
  className?: string;
};

const QuickQuestions = ({ className }: QuickQuestionsProps) => {
  const { sendMessage } = useChat();

  return (
    <ul
      className={cn(
        "flex w-full flex-wrap items-center justify-center gap-3",
        className
      )}
      role="list"
    >
      {QUICK_QUESTIONS.map((question, index) => (
        <li key={index}>
          <GhostButton
            hoverColor="accent"
            aria-label={`Ask: ${questions[question.key].label}`}
            onClick={() =>
              sendMessage({ text: questions[question.key].question })
            }
          >
            <div className="bg-bg-card/50 dark:bg-bg-card border-fg-primary/50 flex gap-2 rounded-full border px-4 py-1 hover:border-current">
              <span aria-hidden="true">{question.icon}</span>
              <span>{questions[question.key].label}</span>
            </div>
          </GhostButton>
        </li>
      ))}
    </ul>
  );
};

export default QuickQuestions;
