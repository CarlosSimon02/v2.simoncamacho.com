import { z } from "zod";

export const createContactFormSchema = (t: (key: string) => string) =>
  z.object({
    name: z
      .string()
      .min(2, t("validation.name.minLength"))
      .max(50, t("validation.name.maxLength")),
    email: z.email(t("validation.email.invalid")),
    message: z
      .string()
      .min(10, t("validation.message.minLength"))
      .max(500, t("validation.message.maxLength")),
    honeypot: z.string().optional(),
  });

export type ContactFormData = z.infer<
  ReturnType<typeof createContactFormSchema>
>;
