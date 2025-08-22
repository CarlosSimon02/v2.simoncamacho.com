import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/Primitives/Form";
import { Input } from "@/components/Primitives/Input";
import { Textarea } from "@/components/Primitives/Textarea";
import { ContactFormData } from "../validations";

type FormFieldRendererProps = {
  control: any;
  name: keyof ContactFormData;
  label: string;
  placeholder: string;
  component: "input" | "textarea";
};

const componentMap = {
  input: Input,
  textarea: Textarea,
};

const FormFieldRenderer = ({
  control,
  name,
  label,
  placeholder,
  component,
}: FormFieldRendererProps) => {
  const Component = componentMap[component];

  return (
    <FormField
      control={control}
      name={name}
      render={({ field, formState: { errors } }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Component placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormFieldRenderer;
