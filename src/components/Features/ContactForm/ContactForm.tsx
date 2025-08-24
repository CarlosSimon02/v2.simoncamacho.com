"use client";

import { Form } from "@/components/Primitives/Form";
import SocialButton from "@/components/UI/Buttons/SocialButton";
import { SOCIALS } from "@/data/socials";
import { cn } from "@/utils";
import { useTranslations } from "next-intl";
import FormFieldRenderer from "./components/FormFieldRenderer";
import HoneypotField from "./components/HoneypotField";
import SubmitButton from "./components/SubmitButton";
import formConfig from "./config/formConfig";
import useContactForm from "./hooks/useContactForm";

type ContactFormProps = {
  className?: string;
};

const ContactForm = ({ className }: ContactFormProps) => {
  const { form, onSubmit, isSubmitting, onError } = useContactForm();
  const t = useTranslations("contactForm");

  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <div className="mx-auto flex w-full max-w-[17rem] flex-wrap justify-center gap-6 xl:hidden">
        {SOCIALS.map((social) => (
          <SocialButton key={social.id} social={social} hoverDirection="up" />
        ))}
      </div>
      <div
        className={cn(
          "font-oswald text-fg-muted flex items-center gap-5 uppercase xl:hidden",
          "before:h-[0.0625rem] before:w-full before:flex-1 before:bg-current",
          "after:h-[0.0625rem] after:w-full after:flex-1 after:bg-current"
        )}
      >
        {t("or")}
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit, onError)}
          className={cn("space-y-6 md:space-y-8", className)}
          noValidate
        >
          <HoneypotField />
          {formConfig.fields.map((fieldConfig) => (
            <FormFieldRenderer
              key={fieldConfig.name}
              control={form.control}
              {...fieldConfig}
            />
          ))}
          <SubmitButton isSubmitting={isSubmitting} />
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
