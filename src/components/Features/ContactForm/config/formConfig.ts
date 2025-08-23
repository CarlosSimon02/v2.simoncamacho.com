import { ContactFormData } from "../validations";

const formConfig = {
  fields: [
    {
      name: "name" as keyof ContactFormData,
      component: "input" as const,
    },
    {
      name: "email" as keyof ContactFormData,
      component: "input" as const,
    },
    {
      name: "message" as keyof ContactFormData,
      component: "textarea" as const,
    },
  ],
};

export default formConfig;
