import { cn } from "@/utils";

type ErrorBubbleProps = {
  errorCode: 400 | 500 | 429 | "tool-error";
  className?: string;
};

const ErrorBubble = ({ errorCode, className }: ErrorBubbleProps) => {
  let errorMessage;

  switch (errorCode) {
    case 400:
      errorMessage =
        "⚠️ Oops, something wasn’t quite right with your request. Please double-check what you entered and try again!";
      break;
    case 500:
      errorMessage =
        "💥 Yikes! Something went wrong on our end. Don’t worry—it’s not you, it’s me. Try again in a bit!";
      break;
    case 429:
      errorMessage =
        "⏳ Whoa there! You’ve reached the daily chat limit. I need a short break 💤. Please try again later.";
      break;
    case "tool-error":
      errorMessage =
        "🛠️ Hmm, I couldn’t load that tool right now. It might be taking a little nap 😴. Please try again in a moment!";
    default:
      errorMessage =
        "❓ Hmm, I ran into an unexpected issue. Let’s try again or come back a little later!";
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
