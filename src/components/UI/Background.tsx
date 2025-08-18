const Background = () => {
  return (
    <div className="fixed inset-0 -z-[9999]">
      <div className="bg-bg-primary h-dvh w-dvw" />
      <div
        className="bg-bg-secondary absolute top-0 left-0 aspect-[600/400] w-xl md:w-[50vw]"
        style={{
          clipPath: "polygon(0 0, 100% 0, 0 100%)",
        }}
      />
    </div>
  );
};

export default Background;
