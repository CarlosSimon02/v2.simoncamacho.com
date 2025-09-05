import ContactForm from "@/components/Features/ContactForm";
import OrSeperator from "@/components/UI/OrSeperator";
import SocialsHorizontal from "@/components/UI/SocialsHorizontal";
import { cn } from "@/utils";
import { CONTACT_FORM_STYLE } from "../constants";

const ContactFormWrapper = () => (
  <div
    className={cn("w-full max-w-xl basis-1/2 text-start", CONTACT_FORM_STYLE)}
  >
    <div className="flex flex-col gap-6 md:gap-8">
      <SocialsHorizontal className="xl:hidden" />
      <OrSeperator className="xl:hidden" />
      <ContactForm className="w-full" />
    </div>
  </div>
);

export default ContactFormWrapper;
