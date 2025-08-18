import { cn } from "@/utils";

type VerticalLineProps = {
  position: number;
  className?: string;
};

const VerticalLine = ({ position, className }: VerticalLineProps) => (
  <div className={cn("relative h-full w-[0.0625rem]", className)}>
    <div className="dark:bg-dark-gray-700 bg-light-gray-200 h-full w-full" />
    <div
      className="absolute left-1/2 z-10 h-[1.25rem] w-[0.3125rem] -translate-x-1/2 -translate-y-1/2 transform overflow-clip rounded-full transition-[top] duration-1000"
      style={{
        top: `${position}%`,
      }}
    >
      <div className="dark:bg-dark-gray-700 bg-light-gray-300 absolute inset-0" />
    </div>
  </div>
);

export default VerticalLine;
