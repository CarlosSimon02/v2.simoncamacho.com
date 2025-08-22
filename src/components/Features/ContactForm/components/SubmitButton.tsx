import PillButton from "@/components/UI/Buttons/PillButton";
import LoadingSpinner from "./LoadingSpinner";

type SubmitButtonProps = {
  isSubmitting: boolean;
};

const SubmitButton = ({ isSubmitting }: SubmitButtonProps) => (
  <PillButton
    variant="accent"
    type="submit"
    className="flex w-full items-center justify-center"
    disabled={isSubmitting}
    aria-describedby={isSubmitting ? "submit-loading" : undefined}
  >
    {isSubmitting ? (
      <>
        <LoadingSpinner />
        <span id="submit-loading" className="sr-only">
          Sending Message...
        </span>
      </>
    ) : (
      "Send Message"
    )}
  </PillButton>
);

export default SubmitButton;
