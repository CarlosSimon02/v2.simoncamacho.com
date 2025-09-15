import InlineLink from "@/components/UI/Buttons/InlineLink";
import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  a: (props) => <InlineLink {...props} />,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
