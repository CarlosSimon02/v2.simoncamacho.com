type MDXContentWrapperProps = {
  children: React.ReactNode;
};

const MDXContentWrapper = ({ children }: MDXContentWrapperProps) => {
  return <div className="flex flex-col gap-12 md:gap-20">{children}</div>;
};

export default MDXContentWrapper;
