"use client";

import GhostButton from "@/components/UI/Buttons/GhostButton";
import { useChat } from "@/providers/ChatProvider";
import { cn } from "@/utils";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { questions, QUICK_QUESTIONS } from "../constants";
import OtherQuestions from "./OtherQuestions";

const QuickQuestionsButton = ({
  children,
  ...props
}: React.ComponentProps<typeof GhostButton>) => (
  <GhostButton hoverColor="accent" {...props}>
    <div className="bg-pill-bg border-pill-border flex gap-2 rounded-full border px-4 py-1 hover:border-current">
      {children}
    </div>
  </GhostButton>
);

type QuickQuestionsProps = {
  className?: string;
};

const QuickQuestions = ({ className }: QuickQuestionsProps) => {
  const { sendMessage, status, error } = useChat();
  const errorCode = error ? JSON.parse(error.message).code : null;

  return (
    <ul
      className={cn(
        "flex w-full flex-wrap items-center justify-center gap-3",
        className
      )}
      role="list"
    >
      {QUICK_QUESTIONS.map((question) => (
        <QuickQuestionsButton
          key={question.key}
          aria-label={`Ask: ${questions[question.key].label}`}
          disabled={
            status === "submitted" ||
            status === "streaming" ||
            errorCode === 429
          }
          onClick={() =>
            sendMessage({ text: questions[question.key].question })
          }
        >
          <>
            <span aria-hidden="true">{question.icon}</span>
            <span>{questions[question.key].label}</span>
          </>
        </QuickQuestionsButton>
      ))}
      <OtherQuestions>
        <QuickQuestionsButton
          aria-label="Open other questions"
          disabled={
            status === "submitted" ||
            status === "streaming" ||
            errorCode === 429
          }
        >
          <EllipsisHorizontalIcon className="size-6" />
        </QuickQuestionsButton>
      </OtherQuestions>
    </ul>
  );
};

export default QuickQuestions;
