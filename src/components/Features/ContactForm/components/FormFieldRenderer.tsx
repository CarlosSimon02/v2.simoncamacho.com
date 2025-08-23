import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/Primitives/Form";
import { Input } from "@/components/Primitives/Input";
import { Textarea } from "@/components/Primitives/Textarea";
import { useTranslations } from "next-intl";
import { ContactFormData } from "../validations";

type FormFieldRendererProps = {
  control: any;
  name: keyof ContactFormData;
  component: "input" | "textarea";
};

const componentMap = {
  input: Input,
  textarea: Textarea,
};

const FormFieldRenderer = ({
  control,
  name,
  component,
}: FormFieldRendererProps) => {
  const Component = componentMap[component];
  const t = useTranslations("contactForm.fields");

  return (
    <FormField
      control={control}
      name={name}
      render={({ field, formState: { errors } }) => (
        <FormItem>
          <FormLabel>{t(`${name}.label`)}</FormLabel>
          <FormControl>
            <Component placeholder={t(`${name}.placeholder`)} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormFieldRenderer;
