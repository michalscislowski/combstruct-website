import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "faq" });

  return {
    title: t("hero.title"),
    description: t("hero.description"),
    openGraph: {
      title: `${t("hero.title")} | Combstruct`,
      description: t("hero.description"),
      images: ["/images/og-image.jpg"],
    },
  };
}

export default function FaqLayout({ children }: Props) {
  return children;
}
