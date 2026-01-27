import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import ConfiguratorStyles from "./ConfiguratorStyles";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "configurator" });

  return {
    title: t("pageTitle"),
    description: "Interactive 3D beam configurator. Design your Combstruct building structure with our patented comb-beam technology.",
    openGraph: {
      title: `${t("pageTitle")} | Combstruct`,
      description: "Interactive 3D beam configurator. Design your Combstruct building structure with our patented comb-beam technology.",
      images: ["/images/og-image.jpg"],
    },
  };
}

export default function ConfiguratorLayout({ children }: Props) {
  return (
    <ConfiguratorStyles>
      {children}
    </ConfiguratorStyles>
  );
}
