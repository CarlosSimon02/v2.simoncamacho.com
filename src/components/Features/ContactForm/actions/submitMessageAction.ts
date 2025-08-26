"use server";

import { env } from "@/env";
import { getTranslations } from "next-intl/server";
import { z } from "zod";
import { ContactFormData, createContactFormSchema } from "../validations";

const GOOGLE_FORM_URL = env.GOOGLE_FORM_URL;
const GOOGLE_FORM_NAME = env.GOOGLE_FORM_NAME_ENTRY_ID;
const GOOGLE_FORM_EMAIL = env.GOOGLE_FORM_EMAIL_ENTRY_ID;
const GOOGLE_FORM_MESSAGE = env.GOOGLE_FORM_MESSAGE_ENTRY_ID;
const GOOGLE_FORM_USP = env.GOOGLE_FORM_USP;
const GOOGLE_FORM_SUBMIT_LABEL = env.GOOGLE_FORM_SUBMIT_LABEL;

const submitMessageAction = async (formData: ContactFormData) => {
  const t = await getTranslations("contactForm");
  const result = createContactFormSchema(t).safeParse(formData);

  if (!result.success) {
    const fieldErrors = z.treeifyError(result.error);
    return {
      success: false,
      message: t("messages.fixErrors"),
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
      message: t("messages.success"),
      errors: null,
      data: result.data,
    };
  } catch (error) {
    console.error("Form submission error:", error);
    return {
      success: false,
      message: t("messages.submissionError"),
      errors: null,
      data: null,
    };
  }
};

export default submitMessageAction;
