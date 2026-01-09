"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";

const applicationKeys = ["singleFamily", "multiUnit", "commercial", "tenementSuperstructures"] as const;

const applicationHrefs = {
  singleFamily: "/products#homes",
  multiUnit: "/products#apartments",
  commercial: "/products#commercial",
  tenementSuperstructures: "/products#superstructures",
};

const applicationImages = {
  singleFamily: "/images/Dom_Jednorodzinny.png",
  multiUnit: "/images/Zabudowa Wielorodzinna.png",
  commercial: "/images/Przestrzen_Komercyjna.png",
  tenementSuperstructures: "/images/Nadbudowy_Blokow.png",
};

export default function Applications() {
  const t = useTranslations("applications");

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16 lg:mb-20"
        >
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-foreground">
            {t("sectionTitle")}
            <br />
            <span className="text-muted">{t("sectionTitleBreak")}</span>
          </h2>
          <p className="mt-6 text-[18px] leading-relaxed text-muted">
            {t("sectionDescription")}
          </p>
        </motion.div>

        {/* Applications Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {applicationKeys.map((appKey, index) => (
            <motion.div
              key={appKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link href={applicationHrefs[appKey]} className="group block">
                {/* Image */}
                <div className="relative aspect-[16/10] bg-secondary overflow-hidden">
                  <img
                    src={applicationImages[appKey]}
                    alt={t(`types.${appKey}.title`)}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>

                {/* Content */}
                <div className="mt-5 flex items-start justify-between">
                  <div>
                    <h3 className="text-[20px] font-semibold text-foreground">
                      {t(`types.${appKey}.title`)}
                    </h3>
                    <p className="mt-1 text-[15px] text-muted">
                      {t(`types.${appKey}.description`)}
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted group-hover:text-foreground group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
