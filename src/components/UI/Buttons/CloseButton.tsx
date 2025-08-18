import { cn } from "@/utils";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Close } from "@radix-ui/react-dialog";
import GhostButton from "./GhostButton";

type CloseButtonProps = {
  onClick: () => void;
  label: string;
  className?: string;
  type: "sheet" | "dialog";
};

const CloseButton = ({ className, onClick, label, type }: CloseButtonProps) => {
  return (
    <Close className={cn(className)} asChild data-slot={`${type}-close`}>
      <GhostButton onClick={onClick}>
        <div>
          <span className="sr-only">{label}</span>
          <span aria-hidden="true">
            <XMarkIcon className="size-6 stroke-current" />
          </span>
        </div>
      </GhostButton>
    </Close>
  );
};

export default CloseButton;
