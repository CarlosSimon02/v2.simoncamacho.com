import ContactForm from "@/components/Features/ContactForm";
import { Skeleton } from "@/components/Primitives/Skeleton";
import OrSeperator from "@/components/UI/OrSeperator";
import SocialsHorizontal from "@/components/UI/SocialsHorizontal";
import { useTranslations } from "next-intl";

export const ContactToolLoading = () => {
  return (
    <div className="flex w-full flex-col gap-8 md:gap-12">
      {/* Description */}
      <Skeleton className="h-5 w-full" />

      <div className="flex w-full max-w-lg min-w-0 flex-col gap-6 md:gap-8">
        {/* Socials placeholder */}
        <div className="mx-auto flex w-full max-w-[17rem] flex-wrap justify-center gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-10 w-10 rounded-full" />
          ))}
        </div>

        {/* Or separator */}
        <div className="flex items-center gap-5">
          <Skeleton className="h-[1px] flex-1" />
          <Skeleton className="h-4 w-6" />
          <Skeleton className="h-[1px] flex-1" />
        </div>

        {/* Contact form fields */}
        <div className="space-y-6 md:space-y-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-12 w-full rounded-md" />
          ))}
          <Skeleton className="h-10 w-24 rounded-md" />
        </div>
      </div>
    </div>
  );
};

const ContactTool = () => {
  const t = useTranslations("chat.tools.contact");

  return (
    <div className="mb-5 flex flex-col gap-8 md:gap-12">
      <p>{t("description")}</p>
      <div className="flex w-full max-w-lg min-w-0 flex-col gap-6 md:gap-8">
        <SocialsHorizontal />
        <OrSeperator />
        <ContactForm className="w-full" />
      </div>
    </div>
  );
};

export default ContactTool;
