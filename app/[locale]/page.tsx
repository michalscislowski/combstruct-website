import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/sections/Hero";
import ValueProps from "@/components/sections/ValueProps";
import HowItWorks from "@/components/sections/HowItWorks";
import Applications from "@/components/sections/Applications";
// import Partners from "@/components/sections/Partners";
import CTA from "@/components/sections/CTA";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <ValueProps />
      <HowItWorks />
      <Applications />
      {/* <Partners /> */}
      <CTA />
    </>
  );
}
