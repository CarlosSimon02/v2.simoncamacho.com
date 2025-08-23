import { toast } from "@/components/Primitives/Sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import submitMessageAction from "../actions/submitMessageAction";
import { SubmitMessageActionResponse } from "../types";
import { ContactFormData, createContactFormSchema } from "../validations";

const useContactForm = () => {
  const [canFocus, setCanFocus] = useState(true);
  const t = useTranslations("contactForm");

  const form = useForm<ContactFormData>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
      honeypot: "",
    },
    resolver: zodResolver(createContactFormSchema(t)),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    shouldFocusError: false,
  });

  const handleServerErrors = (
    errors: SubmitMessageActionResponse["errors"]
  ) => {
    if (errors?.properties) {
      Object.entries(errors.properties).forEach(
        ([field, { errors: fieldErrors }]) => {
          if (fieldErrors?.length) {
            form.setError(field as keyof ContactFormData, {
              type: "server",
              message: fieldErrors[0],
            });
          }
        }
      );
    }
  };

  const onError = () => {
    setCanFocus(true);
  };

  const onSubmit = async (data: ContactFormData) => {
    if (data.honeypot && data.honeypot.trim().length > 0) {
      toast.error(t("errors.spamDetected"));
      return;
    }

    try {
      const response = await submitMessageAction(data);

      if (response.success) {
        form.reset();
        toast.success(response.message);
      } else {
        handleServerErrors(response.errors);
        toast.error(response.message);
      }
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : t("errors.unexpectedError")
      );
    }
  };

  useEffect(() => {
    if (form.formState.errors && canFocus) {
      // Sort inputs based on their position on the page. (the order will be based on validaton order otherwise)
      const elements = Object.keys(form.formState.errors)
        .map((name) => document.getElementsByName(name)[0])
        .filter((el) => !!el);
      elements.sort(
        (a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top
      );

      if (elements.length > 0) {
        let errorElement = elements[0];
        errorElement.scrollIntoView({ behavior: "smooth", block: "center" }); // scrollIntoView options are not supported in Safari
        errorElement.focus({ preventScroll: true });
        setCanFocus(false); // so the form doesn't suddenly jump to the next input that has error.
      }
    }
  }, [form.formState, canFocus]);

  return {
    form,
    onSubmit,
    isSubmitting: form.formState.isSubmitting,
    onError,
  };
};

export default useContactForm;
