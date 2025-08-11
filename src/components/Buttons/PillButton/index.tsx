import { cn } from "@/utils";

type PillButtonProps = {
  className?: string;
  children: React.ReactNode;
  variant?: "primary" | "accent";
};

const PillButton = ({
  className,
  children,
  variant = "primary",
}: PillButtonProps) => {
  return (
    <button
      className={cn(
        className,
        "font-oswald rounded-full px-6 py-2 font-semibold uppercase md:px-8 md:py-3",
        variant === "primary" &&
          "bg-dark-gray-50 dark:text-dark-gray-950 theme-transition text-white dark:bg-white",
        variant === "accent" && "border-accent text-accent border-[0.0625rem]"
      )}
    >
      {children}
    </button>
  );
};

export default PillButton;
