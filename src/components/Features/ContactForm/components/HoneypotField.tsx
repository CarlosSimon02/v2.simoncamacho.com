import { FormControl } from "@/components/Primitives/Form";
import { useFormContext } from "react-hook-form";

const HoneypotField = () => {
  const { register } = useFormContext();

  return (
    <FormControl>
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        {...register("honeypot")}
      />
    </FormControl>
  );
};

export default HoneypotField;
