"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/Primitives/Form";
import { Input } from "@/components/Primitives/Input";
import { Textarea } from "@/components/Primitives/Textarea";
import PillButton from "@/components/UI/Buttons/PillButton";
import { cn } from "@/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import submitMessageAction from "./submitMessageAction";
import { SubmitMessageActionResponse } from "./types";
import { ContactFormData, contactFormSchema } from "./validations";

type ContactFormProps = {
  className?: string;
};

const ContactForm = ({ className }: ContactFormProps) => {
  const form = useForm<ContactFormData>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
      honeypot: "",
    },
    resolver: zodResolver(contactFormSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: ContactFormData) => {
    if (data.honeypot && data.honeypot.trim().length > 0) {
      toast.error("Spam detected.");
      return;
    }

    try {
      const response: SubmitMessageActionResponse =
        await submitMessageAction(data);

      if (response.success) {
        form.reset();
        toast.success(response.message);
      } else {
        if (response.errors && response.errors.properties) {
          Object.entries(response.errors.properties).forEach(
            ([field, { errors }]) => {
              if (errors && errors.length > 0) {
                form.setError(field as keyof ContactFormData, {
                  type: "server",
                  message: errors[0],
                });
              }
            }
          );
        }
        toast.error(response.message);
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "An unexpected error occurred. Please try again.";

      toast.error(errorMessage);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("space-y-4", className)}
        noValidate
      >
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          {...form.register("honeypot")}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Juan Dela Cruz" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="juandelacruz@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Hello! Let's connect." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <PillButton
          variant="accent"
          type="submit"
          className="flex w-full items-center justify-center"
          disabled={form.formState.isSubmitting}
          aria-describedby={
            form.formState.isSubmitting ? "submit-loading" : undefined
          }
        >
          {form.formState.isSubmitting ? (
            <>
              <div className="grid animate-spin grid-cols-2 gap-0.5">
                {Array.from({ length: 4 }, (_, i) => (
                  <div
                    key={i}
                    className="size-2 rounded-full bg-current"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <span id="submit-loading" className="sr-only">
                Sending Message...
              </span>
            </>
          ) : (
            "Send Message"
          )}
        </PillButton>
      </form>
    </Form>
  );
};

export default ContactForm;
