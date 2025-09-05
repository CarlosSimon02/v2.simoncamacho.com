import { Skeleton } from "@/components/Primitives/Skeleton";
import Video from "next-video";
import coco from "/videos/coco.mp4";
import kenzy from "/videos/kenzy.mp4";

export const CatsToolLoading = () => {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <Skeleton className="aspect-video rounded-xl" />
      <Skeleton className="aspect-video rounded-xl" />
    </div>
  );
};

const CatsTool = () => {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <Video
        src={kenzy}
        color="#d97706"
        className="overflow-hidden rounded-xl"
      />
      <Video
        src={coco}
        color="#d97706"
        className="overflow-hidden rounded-xl"
      />
    </div>
  );
};

export default CatsTool;
