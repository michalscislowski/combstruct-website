"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";

const stepKeys = ["design", "manufacture", "deliver", "build"] as const;

export default function HowItWorks() {
  const t = useTranslations("howItWorks");

  return (
    <section className="py-24 lg:py-32 bg-dark text-white">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16 lg:mb-20"
        >
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
            {t("sectionTitle")}
            <br />
            <span className="text-white/60">{t("sectionTitleBreak")}</span>
          </h2>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {stepKeys.map((stepKey, index) => (
            <motion.div
              key={stepKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-dark p-8 lg:p-10"
            >
              <span className="text-[13px] font-medium text-white/40 tracking-wider">
                {t(`steps.${stepKey}.number`)}
              </span>
              <h3 className="mt-4 text-[22px] font-semibold">
                {t(`steps.${stepKey}.title`)}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/60">
                {t(`steps.${stepKey}.description`)}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16"
        >
          <Link
            href="/process"
            className="group inline-flex items-center gap-2 text-[16px] font-medium text-white"
          >
            {t("ctaText")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
