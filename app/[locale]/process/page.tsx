"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Section from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";

const phaseKeys = ["design", "manufacturing", "delivery", "assembly"] as const;

const phaseMedia: Record<string, { src: string; type: "image" | "video" }> = {
  design: { src: "/images/Dom_Warstwy.jpeg", type: "image" },
  manufacturing: { src: "/images/CNC_NASZE.mp4", type: "video" },
  delivery: { src: "/images/featured-project.mp4", type: "video" },
  assembly: { src: "/images/hero-video.mp4", type: "video" },
};

export default function ProcessPage() {
  const t = useTranslations("process");

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-white text-foreground rounded-full">
              {t("hero.badge")}
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
              {t("hero.title")}
              <br />
              <span className="text-muted">{t("hero.titleBreak")}</span>
            </h1>
            <p className="mt-6 text-lg text-muted max-w-2xl">
              {t("hero.description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <Section>
        <div className="space-y-16">
          {phaseKeys.map((key, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-16"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-medium text-muted">
                    {t(`phases.${key}.phase`)}
                  </span>
                  <span className="px-3 py-1 text-xs font-medium bg-secondary rounded-full">
                    {t(`phases.${key}.duration`)}
                  </span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  {t(`phases.${key}.title`)}
                </h2>
                <p className="text-muted mb-6">{t(`phases.${key}.description`)}</p>
                <ul className="space-y-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-muted"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground" />
                      {t(`phases.${key}.details.${i}`)}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={`aspect-video bg-secondary rounded-2xl overflow-hidden relative ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                {phaseMedia[key].type === "video" ? (
                  <video
                    src={phaseMedia[key].src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src={phaseMedia[key].src}
                    alt={`${t(`phases.${key}.title`)} - ${t(`phases.${key}.phase`)}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    loading="lazy"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-foreground text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">{t("cta.title")}</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            {t("cta.description")}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-7 py-4 bg-white text-foreground font-semibold hover:bg-white/90 transition-colors min-h-[48px]"
          >
            {t("cta.button")}
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </Section>
    </>
  );
}
