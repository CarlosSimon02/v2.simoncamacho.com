import { UIDataTypes, UIMessagePart, UITools } from "ai";
import ErrorBubble from "./ErrorBubble";
import CatsTool, { CatsToolLoading } from "./ToolUIs/CatsTool";
import ContactTool, { ContactToolLoading } from "./ToolUIs/ContactTool";
import PresentationTool, {
  PresentationToolLoading,
} from "./ToolUIs/PresentationTool";
import ProjectsTool, { ProjectsToolLoading } from "./ToolUIs/ProjectsTool";
import ResumeTool, { ResumeToolLoading } from "./ToolUIs/ResumeTool";
import SkillsTool, { SkillsToolLoading } from "./ToolUIs/SkillsTool";
import SportTool, { SportToolLoading } from "./ToolUIs/SportTool";

type ToolRendererProps = {
  part: UIMessagePart<UIDataTypes, UITools>;
};

const ToolRenderer = ({ part }: ToolRendererProps) => {
  switch (part.type) {
    case "tool-getContact":
      switch (part.state) {
        case "input-streaming":
        case "input-available":
          return <ContactToolLoading />;
        case "output-available":
          return <ContactTool />;
        case "output-error":
          return <ErrorBubble errorCode="tool-error" />;
      }
    case "tool-getPresentation":
      switch (part.state) {
        case "input-streaming":
        case "input-available":
          return <PresentationToolLoading />;
        case "output-available":
          return <PresentationTool />;
        case "output-error":
          return <ErrorBubble errorCode="tool-error" />;
      }
    case "tool-getProjects":
      switch (part.state) {
        case "input-streaming":
        case "input-available":
          return <ProjectsToolLoading />;
        case "output-available":
          return <ProjectsTool />;
        case "output-error":
          return <ErrorBubble errorCode="tool-error" />;
      }
    case "tool-getResume":
      switch (part.state) {
        case "input-streaming":
        case "input-available":
          return <ResumeToolLoading />;
        case "output-available":
          return <ResumeTool />;
        case "output-error":
          return <ErrorBubble errorCode="tool-error" />;
      }
    case "tool-getSkills":
      switch (part.state) {
        case "input-streaming":
        case "input-available":
          return <SkillsToolLoading />;
        case "output-available":
          return <SkillsTool />;
        case "output-error":
          return <ErrorBubble errorCode="tool-error" />;
      }
    case "tool-getSports":
      switch (part.state) {
        case "input-streaming":
        case "input-available":
          return <SportToolLoading />;
        case "output-available":
          return <SportTool />;
        case "output-error":
          return <ErrorBubble errorCode="tool-error" />;
      }
    case "tool-getCats":
      switch (part.state) {
        case "input-streaming":
        case "input-available":
          return <CatsToolLoading />;
        case "output-available":
          return <CatsTool />;
        case "output-error":
          return <ErrorBubble errorCode="tool-error" />;
      }
  }
};

export default ToolRenderer;
