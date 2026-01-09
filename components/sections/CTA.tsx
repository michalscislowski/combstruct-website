"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  const t = useTranslations("cta");

  return (
    <section className="py-24 lg:py-32 bg-dark text-white">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
              {t("headline")}
              <br />
              {t("headlineBreak")}
            </h2>
            <p className="mt-6 text-[18px] leading-relaxed text-white/70 max-w-lg">
              {t("description")}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-6">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-[16px] font-medium text-white"
              >
                {t("primaryLink")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/faq"
                className="group inline-flex items-center gap-2 text-[16px] font-medium text-white/60 hover:text-white transition-colors"
              >
                {t("secondaryLink")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Featured Project Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-video bg-dark-lighter rounded-sm overflow-hidden"
          >
            <img
              src="/images/DOM_KWIATKI.jpeg"
              alt="Combstruct featured project - modern home with flowers"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
