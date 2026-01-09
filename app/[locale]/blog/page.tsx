"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Section from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";

const postKeys = [
  "sustainableFuture",
  "buildIn30Days",
  "energyEfficiency",
  "diyVsProfessional",
  "combBeamTech",
  "customerStory",
] as const;

export default function BlogPage() {
  const t = useTranslations("blog");

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
            </h1>
            <p className="mt-6 text-lg text-muted max-w-2xl">
              {t("hero.description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postKeys.map((key, index) => (
            <motion.article
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/blog/${t(`posts.${key}.slug`)}`}>
                <div className="aspect-[16/10] bg-secondary rounded-2xl mb-4 overflow-hidden flex items-center justify-center text-muted">
                  {t("placeholderImage")}
                </div>
                <div className="flex items-center gap-3 text-sm text-muted mb-2">
                  <span className="px-2 py-0.5 bg-secondary rounded-full text-xs font-medium">
                    {t(`posts.${key}.category`)}
                  </span>
                  <span>{t(`posts.${key}.readTime`)}</span>
                </div>
                <h2 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors mb-2">
                  {t(`posts.${key}.title`)}
                </h2>
                <p className="text-sm text-muted line-clamp-2">
                  {t(`posts.${key}.excerpt`)}
                </p>
                <div className="mt-4 flex items-center text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                  {t("readMore")}
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </Section>
    </>
  );
}
