import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ValueProps from "@/components/sections/ValueProps";
import HowItWorks from "@/components/sections/HowItWorks";
import Applications from "@/components/sections/Applications";
import CTA from "@/components/sections/CTA";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      images: ["/images/og-image.jpg"],
    },
  };
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <ValueProps />
      <HowItWorks />
      <Applications />
      <CTA />
    </>
  );
}
