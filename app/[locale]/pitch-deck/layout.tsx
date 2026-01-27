import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import PitchDeckStyles from "./PitchDeckStyles";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pitchDeck" });

  return {
    title: t("title"),
    description: "Investment opportunity in patented comb-beam building technology. 45% lower costs, 5x faster construction, passive house performance.",
    openGraph: {
      title: `${t("title")} | Combstruct`,
      description: "Investment opportunity in patented comb-beam building technology. 45% lower costs, 5x faster construction, passive house performance.",
      images: ["/images/og-image.jpg"],
    },
  };
}

export default function PitchDeckLayout({ children }: Props) {
  return (
    <PitchDeckStyles>
      {children}
    </PitchDeckStyles>
  );
}
