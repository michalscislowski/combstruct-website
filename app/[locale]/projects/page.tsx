"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Section from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";

const projectKeys = [
  "modernVilla",
  "ecoApartments",
  "countrysideRetreat",
  "officeBuilding",
  "weekendCabin",
  "workshopGarage",
] as const;

const projectImages: Record<string, string> = {
  modernVilla: "/images/Domy_parterowe.webp",
  ecoApartments: "/images/Domy_wielopietrowe.webp",
  countrysideRetreat: "/images/Nowoczesne_Elewacje.webp",
  officeBuilding: "/images/Biura_Ogrodowe.webp",
  weekendCabin: "/images/Szopy_ogrodowe.webp",
  workshopGarage: "/images/Garaze.webp",
};

const statKeys = ["projectsCompleted", "squareMeters", "clientSatisfaction", "avgDays"] as const;

export default function ProjectsPage() {
  const t = useTranslations("projects");

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

      {/* Projects Grid */}
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectKeys.map((key, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] bg-secondary rounded-2xl mb-4 overflow-hidden relative">
                <Image
                  src={projectImages[key]}
                  alt={`${t(`items.${key}.title`)} - ${t(`items.${key}.location`)}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-medium text-muted uppercase tracking-wider">
                    {t(`items.${key}.category`)}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mt-1">
                    {t(`items.${key}.title`)}
                  </h3>
                  <p className="text-sm text-muted">{t(`items.${key}.location`)}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted group-hover:text-foreground transition-colors" />
              </div>
              <div className="mt-3 flex gap-4 text-sm">
                <span className="text-muted">
                  <span className="font-medium text-foreground">
                    {t(`items.${key}.size`)}
                  </span>
                </span>
                <span className="text-muted">
                  <span className="font-medium text-foreground">
                    {t(`items.${key}.duration`)}
                  </span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Stats */}
      <Section className="bg-foreground text-white">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {statKeys.map((key, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-4xl lg:text-5xl font-bold">
                {t(`stats.${key}.value`)}
              </div>
              <div className="mt-2 text-white/70">{t(`stats.${key}.label`)}</div>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
