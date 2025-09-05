import Cube from "@/components/UI/Effects/Cube";
import { cn } from "@/utils";

const CubeDecoration = ({
  className,
  size = 60,
  angle = { x: 0, y: 0 },
  positionClass = "",
}: {
  className?: string;
  size?: number;
  angle?: { x: number; y: number };
  positionClass?: string;
}) => (
  <div className={cn(positionClass, "-z-2 max-md:!hidden")}>
    <Cube
      cubeSize={size}
      defaultAngle={angle}
      autoRotate
      className={cn(className)}
    />
  </div>
);

export default CubeDecoration;
