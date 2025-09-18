import { cn } from "@/utils";
import { useTranslations } from "next-intl";

type ErrorBubbleProps = {
  errorCode: 400 | 500 | 429 | "tool-error" | 422;
  className?: string;
};

const ErrorBubble = ({ errorCode, className }: ErrorBubbleProps) => {
  const t = useTranslations("chat.errors");

  let errorMessage;

  switch (errorCode) {
    case 400:
      errorMessage = t("400");
      break;
    case 500:
      errorMessage = t("500");
      break;
    case 429:
      errorMessage = t("429");
      break;
    case "tool-error":
      errorMessage = t("toolError");
      break;
    case 422:
      errorMessage = t("422");
      break;
    default:
      errorMessage = t("default");
      break;
  }

  return (
    <p
      className={cn(
        "mr-10 max-w-2xl rounded-3xl rounded-bl-none bg-red-500/10 px-5 py-3 text-red-500",
        className
      )}
    >
      {errorMessage}
    </p>
  );
};

export default ErrorBubble;
