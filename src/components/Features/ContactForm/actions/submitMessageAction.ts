"use server";

import { z } from "zod";
import { ContactFormData, contactFormSchema } from "../validations";

const GOOGLE_FORM_URL = process.env.GOOGLE_FORM_URL!;
const GOOGLE_FORM_NAME = process.env.GOOGLE_FORM_NAME_ENTRY_ID!;
const GOOGLE_FORM_EMAIL = process.env.GOOGLE_FORM_EMAIL_ENTRY_ID!;
const GOOGLE_FORM_MESSAGE = process.env.GOOGLE_FORM_MESSAGE_ENTRY_ID!;
const GOOGLE_FORM_USP = process.env.GOOGLE_FORM_USP ?? "pp_url";
const GOOGLE_FORM_SUBMIT_LABEL =
  process.env.GOOGLE_FORM_SUBMIT_LABEL ?? "Submit";

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
    // Build a proper URL with query params (handles encoding: spaces -> +, etc.)
    const url = new URL(GOOGLE_FORM_URL);

    // Preserve any existing search params in GOOGLE_FORM_URL, then set ours
    const params = new URLSearchParams(url.search);
    params.set("usp", GOOGLE_FORM_USP);
    params.set("submit", GOOGLE_FORM_SUBMIT_LABEL);

    // Map your inputs to Google Form "entry.*" fields
    params.set(GOOGLE_FORM_NAME, result.data.name);
    params.set(GOOGLE_FORM_EMAIL, result.data.email);
    params.set(GOOGLE_FORM_MESSAGE, result.data.message);

    url.search = params.toString();

    // GET request with query string
    const response = await fetch(url.toString(), { method: "GET" });

    if (!response.ok) {
      throw new Error(`Google Forms request failed: ${response.status}`);
    }

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
