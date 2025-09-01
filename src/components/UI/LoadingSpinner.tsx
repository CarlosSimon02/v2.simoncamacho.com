import { cn } from "@/utils";

type LoadingSpinnerProps = {
  className?: string;
};

const LoadingSpinner = ({ className }: LoadingSpinnerProps) => (
  <div className={cn("grid animate-spin grid-cols-2 gap-0.5", className)}>
    {Array.from({ length: 4 }, (_, index) => (
      <div
        key={index}
        className="size-2 rounded-full bg-current"
        aria-hidden="true"
      />
    ))}
  </div>
);

export default LoadingSpinner;
