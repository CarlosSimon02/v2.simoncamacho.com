type TitleContentProps = {
  title: string;
  children: React.ReactNode;
};

const TitleContent = ({ title, children }: TitleContentProps) => {
  return (
    <div className="flex w-full flex-col gap-4 md:gap-5">
      <h3 className="subheading">{title}</h3>
      <div>{children}</div>
    </div>
  );
};

export default TitleContent;
