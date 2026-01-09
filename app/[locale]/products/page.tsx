"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { ArrowRight, Check } from "lucide-react";

const featureKeys = [
  "cost",
  "thermal",
  "speed",
  "carbon",
  "labor",
  "recyclable",
  "noConcrete",
  "diyFriendly",
] as const;

const specKeys = [
  "wallThickness",
  "thermal",
  "fireResistance",
  "soundInsulation",
  "loadCapacity",
  "lifespan",
] as const;

const applicationKeys = ["homes", "apartments", "commercial", "workshops"] as const;

const applicationImages: Record<string, string> = {
  homes: "/images/Dom_Jednorodzinny.png",
  apartments: "/images/Zabudowa Wielorodzinna.png",
  commercial: "/images/Przestrzen_Komercyjna.png",
  workshops: "/images/Nadbudowy_Blokow.png",
};

export default function ProductsPage() {
  const t = useTranslations("products");

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-block text-[13px] font-medium text-muted uppercase tracking-wider mb-6">
                {t("hero.badge")}
              </span>
              <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-foreground">
                {t("hero.title")}
                <br />
                <span className="text-muted">{t("hero.titleBreak")}</span>
              </h1>
              <p className="mt-6 text-[18px] leading-relaxed text-muted max-w-lg">
                {t("hero.description")}
              </p>
              <div className="mt-10 flex flex-wrap gap-8">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 text-[16px] font-medium text-foreground"
                >
                  {t("hero.getQuote")}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/process"
                  className="group inline-flex items-center gap-2 text-[16px] font-medium text-muted hover:text-foreground transition-colors"
                >
                  {t("hero.seeProcess")}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="aspect-square bg-secondary relative overflow-hidden"
            >
              <Image
                src="/images/DESKA.jpeg"
                alt={t("hero.imageAlt")}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28 border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(1.75rem,3vw,2.5rem)] font-semibold tracking-[-0.02em] text-foreground mb-12"
          >
            {t("features.title")}
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featureKeys.map((key, index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-start gap-3"
              >
                <div className="w-5 h-5 rounded-full bg-foreground flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-[15px] text-foreground">
                  {t(`features.items.${key}`)}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[clamp(1.75rem,3vw,2.5rem)] font-semibold tracking-[-0.02em] text-foreground mb-6"
              >
                {t("specs.title")}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-[17px] text-muted mb-10"
              >
                {t("specs.description")}
              </motion.p>
              <div className="grid grid-cols-2 gap-4">
                {specKeys.map((key, index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white p-5"
                  >
                    <div className="text-[13px] text-muted mb-1">
                      {t(`specs.items.${key}.label`)}
                    </div>
                    <div className="text-[20px] font-semibold text-foreground">
                      {t(`specs.items.${key}.value`)}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="aspect-[4/3] bg-white relative overflow-hidden"
            >
              <Image
                src="/images/Dom_Warstwy.jpeg"
                alt={t("specs.imageAlt")}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 lg:py-28 bg-dark text-white" id="applications">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-semibold tracking-[-0.02em]">
              {t("applications.title")}
            </h2>
            <p className="mt-3 text-[17px] text-white/60">
              {t("applications.description")}
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {applicationKeys.map((key, index) => (
              <motion.div
                key={key}
                id={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-dark p-6 hover:bg-dark-lighter transition-colors cursor-pointer"
              >
                <div className="aspect-video relative overflow-hidden mb-4">
                  <Image
                    src={applicationImages[key]}
                    alt={t(`applications.types.${key}`)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <h3 className="text-[17px] font-medium flex items-center gap-2">
                  {t(`applications.types.${key}`)}
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(1.75rem,3vw,2.5rem)] font-semibold tracking-[-0.02em] text-foreground mb-4"
          >
            {t("cta.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[17px] text-muted mb-10 max-w-lg mx-auto"
          >
            {t("cta.description")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-[17px] font-medium text-foreground"
            >
              {t("cta.button")}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
