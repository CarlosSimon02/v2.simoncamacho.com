import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/Primitives/Collapsible";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import QuickQuestions from "../../QuickQuestions";
import { useIsQuickQuestionsOpenStore } from "../stores/useIsQuickQuestionsOpenStore";

const CollapsibleQuickQuestions = () => {
  const { isOpen, setIsOpen } = useIsQuickQuestionsOpenStore();

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="mb-1 flex flex-col items-center"
    >
      <CollapsibleTrigger className="flex items-center justify-center gap-1">
        <ChevronUpIcon
          data-state={isOpen ? "open" : "closed"}
          className="size-4 rotate-0 transition-[rotate] data-[state=open]:rotate-180"
        />
        <span className="text-[0.75rem]">
          {isOpen ? "Hiden quick questions" : "Show quick questions"}
        </span>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <QuickQuestions className="py-2" />
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CollapsibleQuickQuestions;
