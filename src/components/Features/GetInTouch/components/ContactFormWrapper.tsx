"use client";

import ContactForm from "@/components/Features/ContactForm";
import OrSeperator from "@/components/UI/OrSeperator";
import SocialsHorizontal from "@/components/UI/SocialsHorizontal";
import { cn } from "@/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const CONTACT_FORM_CLASS = "contact-form";

const ContactFormWrapper = () => {
  useGSAP(() => {
    gsap.to(`.${CONTACT_FORM_CLASS}`, {
      top: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: `.${CONTACT_FORM_CLASS}`,
        start: "top 70%",
      },
    });
  });

  return (
    <div
      className={cn(
        "from-bottom-sm w-full max-w-xl basis-1/2 text-start",
        CONTACT_FORM_CLASS
      )}
    >
      <div className="flex flex-col gap-6 md:gap-8">
        <SocialsHorizontal className="xl:hidden" />
        <OrSeperator className="xl:hidden" />
        <ContactForm className="w-full" />
      </div>
    </div>
  );
};

export default ContactFormWrapper;
