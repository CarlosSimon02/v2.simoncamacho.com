const LoadingSpinner = () => (
  <div className="grid animate-spin grid-cols-2 gap-0.5">
    {Array.from({ length: 4 }, (_, index) => (
      <div
        key={index}
        className="size-2 rounded-full bg-current"
        aria-hidden="true"
      />
    ))}
  </div>
);

export default LoadingSpinner;
