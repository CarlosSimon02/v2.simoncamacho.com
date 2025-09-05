"use client";

import { Form } from "@/components/Primitives/Form";
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
  );
};

export default ContactForm;
