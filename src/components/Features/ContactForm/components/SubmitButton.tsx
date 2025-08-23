import PillButton from "@/components/UI/Buttons/PillButton";
import { useTranslations } from "next-intl";
import LoadingSpinner from "./LoadingSpinner";

type SubmitButtonProps = {
  isSubmitting: boolean;
};

const SubmitButton = ({ isSubmitting }: SubmitButtonProps) => {
  const t = useTranslations("contactForm.submit");

  return (
    <PillButton
      variant="accent"
      type="submit"
      className="flex h-[2.53125rem] w-full items-center justify-center md:h-[3.125rem]"
      disabled={isSubmitting}
      aria-describedby={isSubmitting ? "submit-loading" : undefined}
    >
      {isSubmitting ? (
        <>
          <LoadingSpinner />
          <span id="submit-loading" className="sr-only">
            {t("loading")}
          </span>
        </>
      ) : (
        t("button")
      )}
    </PillButton>
  );
};

export default SubmitButton;
