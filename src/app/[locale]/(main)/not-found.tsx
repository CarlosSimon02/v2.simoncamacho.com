import PillButton from "@/components/UI/Buttons/PillButton";
import BaseContainer from "@/components/UI/Containers/BaseContainer";
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 px-12 text-center">
      <BaseContainer className="relative">
        <div>
          <div className="relative -z-10">
            <h1 className="text-decor text-[12rem] leading-tight select-none md:text-[16rem]">
              404
            </h1>
          </div>
          <div className="-mt-14 flex flex-col items-center justify-center gap-6 text-center">
            <h2 className="subheading">
              Sorry, we can’t find the page you’re looking for
            </h2>
            <PillButton variant="accent" asChild>
              <Link href="/">Go back home</Link>
            </PillButton>
          </div>
        </div>
      </BaseContainer>
    </main>
  );
};

export default NotFound;
