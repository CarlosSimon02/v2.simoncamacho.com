import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/Primitives/Collapsible";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";
import QuickQuestions from "../../QuickQuestions";
import { useIsQuickQuestionsOpenStore } from "../stores/useIsQuickQuestionsOpenStore";

type CollapsibleQuickQuestionsProps = {
  onSend?: () => void;
};

const CollapsibleQuickQuestions = ({
  onSend,
}: CollapsibleQuickQuestionsProps) => {
  const { isOpen, setIsOpen } = useIsQuickQuestionsOpenStore();
  const t = useTranslations("chat.quickQuestions");

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
        <span className="text-[0.75rem]">{isOpen ? t("hide") : t("show")}</span>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <QuickQuestions className="py-2" onSend={onSend} />
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CollapsibleQuickQuestions;
