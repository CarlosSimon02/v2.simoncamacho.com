import Decorations from "@/components/BackgroundDecorations";
import AboutSection from "@/components/Sections/AboutSection";
import ExperienceSection from "@/components/Sections/ExperienceSection";
import HeroSection from "@/components/Sections/HeroSection";
import { NAV_ITEMS } from "@/constants/navigation";
import { getTranslations } from "next-intl/server";

const HomePage = async () => {
  const t = await getTranslations();
  const homePageSections = NAV_ITEMS.map((item) => ({
    id: item.id,
    title: t(`containers.navBar.links.${item.id}`),
  }));

  return (
    <>
      <Decorations sections={homePageSections} />
      <main>
        <HeroSection className="h-auto min-h-[calc(100vh-var(--header-height))] py-14 md:py-20" />
        <AboutSection />
        <ExperienceSection />
      </main>
    </>
  );
};

export default HomePage;
