"use server";

import { z } from "zod";
import { ContactFormData, contactFormSchema } from "./validations";

const submitMessageAction = async (formData: ContactFormData) => {
  const result = contactFormSchema.safeParse(formData);

  if (!result.success) {
    const fieldErrors = z.treeifyError(result.error);

    return {
      success: false,
      message: "Please fix the errors in the form",
      errors: fieldErrors,
      data: null,
    };
  }

  try {
    console.log("Valid form data:", result.data);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      success: true,
      message: "Message sent successfully!",
      errors: null,
      data: result.data,
    };
  } catch (error) {
    console.error("Form submission error:", error);

    return {
      success: false,
      message:
        "An error occurred while sending your message. Please try again.",
      errors: null,
      data: null,
    };
  }
};

export default submitMessageAction;
