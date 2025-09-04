import { UIDataTypes, UIMessagePart, UITools } from "ai";
import ContactTool, { ContactToolLoading } from "./ToolUIs/ContactTool";
import PresentationTool, {
  PresentationToolLoading,
} from "./ToolUIs/PresentationTool";
import ProjectsTool, { ProjectsToolLoading } from "./ToolUIs/ProjectsTool";
import ToolError from "./ToolUIs/ToolError";

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
          return <ToolError />;
      }
    case "tool-getPresentation":
      switch (part.state) {
        case "input-streaming":
        case "input-available":
          return <PresentationToolLoading />;
        case "output-available":
          return <PresentationTool />;
        case "output-error":
          return <ToolError />;
      }
    case "tool-getProjects":
      switch (part.state) {
        case "input-streaming":
        case "input-available":
          return <ProjectsToolLoading />;
        case "output-available":
          return <ProjectsTool />;
        case "output-error":
          return <ToolError />;
      }
    case "tool-getResume":
      switch (part.state) {
        case "input-streaming":
        case "input-available":
          return <div>Loading...</div>;
        case "output-available":
          return <div>Output available</div>;
        case "output-error":
          return <div>Output error</div>;
      }
    case "tool-getSkills":
      switch (part.state) {
        case "input-streaming":
        case "input-available":
          return <div>Loading...</div>;
        case "output-available":
          return <div>Output available</div>;
        case "output-error":
          return <div>Output error</div>;
      }
    case "tool-getSport":
      switch (part.state) {
        case "input-streaming":
        case "input-available":
          return <div>Loading...</div>;
        case "output-available":
          return <div>Output available</div>;
        case "output-error":
          return <div>Output error</div>;
      }
    case "tool-getWorkExperience":
      switch (part.state) {
        case "input-streaming":
        case "input-available":
          return <div>Loading...</div>;
        case "output-available":
          return <div>Output available</div>;
        case "output-error":
          return <div>Output error</div>;
      }
  }
};

export default ToolRenderer;
