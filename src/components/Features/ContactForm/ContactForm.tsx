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
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import submitMessageAction from "./submitMessageAction";
import { SubmitMessageActionResponse } from "./types";
import { ContactFormData, contactFormSchema } from "./validations";

type ContactFormProps = {
  className?: string;
};

const ContactForm = ({ className }: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    resolver: zodResolver(contactFormSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

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
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("space-y-4", className)}
        noValidate
      >
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
                <Textarea placeholder="e.g. Hello! Let's connect." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <PillButton
          variant="accent"
          type="submit"
          className="flex w-full items-center justify-center"
          disabled={isSubmitting}
          aria-describedby={isSubmitting ? "submit-loading" : undefined}
        >
          {isSubmitting ? (
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
