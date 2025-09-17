"use client";

import GhostButton from "@/components/UI/Buttons/GhostButton";
import { useChat } from "@/providers/ChatProvider";
import { cn } from "@/utils";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";
import { QUICK_QUESTIONS } from "../constants";
import { getErrorCode } from "../utils";
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
  onSend?: () => void;
};

const QuickQuestions = ({ className, onSend }: QuickQuestionsProps) => {
  const { sendMessage, status, error } = useChat();
  const t = useTranslations("chat");
  const errorCode = getErrorCode(error?.message ?? "");

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
          aria-label={t("quickQuestions.askAria", {
            label: t(`questions.${question.key}.label`),
          })}
          disabled={
            status === "submitted" ||
            status === "streaming" ||
            errorCode === 429
          }
          onClick={() => {
            sendMessage({ text: t(`questions.${question.key}.question`) });
            onSend?.();
          }}
        >
          <>
            <span aria-hidden="true">{question.icon}</span>
            <span>{t(`questions.${question.key}.label`)}</span>
          </>
        </QuickQuestionsButton>
      ))}
      <OtherQuestions onSend={onSend}>
        <QuickQuestionsButton
          aria-label={t("quickQuestions.openOtherQuestions")}
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
