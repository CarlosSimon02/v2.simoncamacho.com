type SubHeaderProps = {
  children: React.ReactNode;
};

const SubHeader = ({ children }: SubHeaderProps) => (
  <h3 className="font-oswald text-dark-gray-50 mb-5 text-2xl font-black md:mb-7 md:text-3xl dark:text-white">
    {children}
  </h3>
);

export default SubHeader;
