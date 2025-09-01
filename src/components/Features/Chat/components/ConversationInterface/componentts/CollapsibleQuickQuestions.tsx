import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/Primitives/Collapsible";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import QuickQuestions from "../../QuickQuestions";

const CollapsibleQuickQuestions = () => {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className="mb-1 flex flex-col items-center"
    >
      <CollapsibleTrigger className="flex items-center justify-center gap-1">
        <ChevronUpIcon
          data-state={open ? "open" : "closed"}
          className="size-4 rotate-0 transition-[rotate] data-[state=open]:rotate-180"
        />
        <span className="text-[0.75rem]">
          {open ? "Hiden quick questions" : "Show quick questions"}
        </span>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <QuickQuestions className="py-2" />
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CollapsibleQuickQuestions;
