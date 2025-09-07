import LoadingSpinner from "@/components/UI/LoadingSpinner";
import AIChatAvatar from "./AIChatAvatar";

const LoadingBubble = () => {
  return (
    <div className="flex items-center gap-3 md:gap-6">
      <AIChatAvatar />
      <LoadingSpinner className="text-accent" />
    </div>
  );
};

export default LoadingBubble;
