"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Section from "@/components/ui/Section";
import { Target, Eye, Heart, ArrowRight } from "lucide-react";

const valuesIcons = [Target, Eye, Heart] as const;
const valuesKeys = ["mission", "vision", "values"] as const;

export default function AboutPage() {
  const t = useTranslations("about");

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

      {/* Story */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              {t("story.title")}
            </h2>
            <div className="space-y-4 text-muted">
              <p>{t("story.paragraph1")}</p>
              <p>{t("story.paragraph2")}</p>
              <p>{t("story.paragraph3")}</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-video bg-secondary rounded-2xl overflow-hidden relative"
          >
            <Image
              src="/images/Gotowa_Konstrukcja_Budynku.webp"
              alt={t("story.imageAlt")}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
          </motion.div>
        </div>
      </Section>

      {/* Mission, Vision, Values */}
      <Section className="bg-secondary">
        <div className="grid md:grid-cols-3 gap-8">
          {valuesKeys.map((key, index) => {
            const IconComponent = valuesIcons[index];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                  <IconComponent className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {t(`values.${key}.title`)}
                </h3>
                <p className="text-muted">{t(`values.${key}.description`)}</p>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {t("cta.title")}
          </h2>
          <p className="text-muted mb-8 max-w-xl mx-auto">
            {t("cta.description")}
          </p>
          <Link href="/contact" className="btn-primary inline-flex">
            {t("cta.button")}
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </Section>
    </>
  );
}
