import { ContactFormData } from "../validations";

const formConfig = {
  fields: [
    {
      name: "name" as keyof ContactFormData,
      label: "Name",
      placeholder: "Juan Dela Cruz",
      component: "input" as const,
    },
    {
      name: "email" as keyof ContactFormData,
      label: "Email",
      placeholder: "juandelacruz@example.com",
      component: "input" as const,
    },
    {
      name: "message" as keyof ContactFormData,
      label: "Your Message",
      placeholder: "e.g. Hello! Let's connect.",
      component: "textarea" as const,
    },
  ],
};

export default formConfig;
