"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";

const featureKeys = ["buildFast", "sustainable", "precision"] as const;

const featureConfig = {
  buildFast: {
    linkHref: "/process",
    type: "video" as const,
    video: "/images/featured-project.mp4",
    videoAlt: "Combstruct modular home construction timelapse showing rapid assembly process",
  },
  sustainable: {
    linkHref: "/products",
    type: "image" as const,
    image: "/images/Dom_Warstwy.jpeg",
    imageAlt: "Sustainable insulation materials being installed in Combstruct wall system",
  },
  precision: {
    linkHref: "/products#specs",
    type: "video" as const,
    video: "/images/CNC_NASZE.mp4",
    videoAlt: "CNC machine precision cutting plywood panels for Combstruct building system",
  },
};

export default function ValueProps() {
  const t = useTranslations("valueProps");

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-20 lg:mb-28"
        >
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-foreground">
            {t("sectionTitle")}
            <br />
            {t("sectionTitleBreak")}
          </h2>
          <p className="mt-6 text-[18px] leading-relaxed text-muted">
            {t("sectionDescription")}
          </p>
        </motion.div>

        {/* Feature Blocks */}
        <div className="space-y-24 lg:space-y-32">
          {featureKeys.map((featureKey, index) => {
            const config = featureConfig[featureKey];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Text Content */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <h3 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-foreground">
                    {t(`features.${featureKey}.title`)}
                  </h3>
                  <p className="mt-5 text-[17px] leading-relaxed text-muted">
                    {t(`features.${featureKey}.description`)}
                  </p>
                  <Link
                    href={config.linkHref}
                    className="group inline-flex items-center gap-2 mt-6 text-[16px] font-medium text-foreground"
                  >
                    {t(`features.${featureKey}.linkText`)}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Visual Content */}
                <div
                  className={`relative aspect-[4/3] bg-secondary rounded-sm overflow-hidden ${
                    index % 2 === 1 ? "lg:col-start-1" : ""
                  }`}
                >
                  {config.type === "video" ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                      aria-label={config.videoAlt}
                    >
                      <source src={config.video} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={config.image!}
                      alt={config.imageAlt!}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
