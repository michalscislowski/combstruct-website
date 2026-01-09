"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const partners = [
  { name: "STEICO", subtitle: "Wood Fiber" },
  { name: "GUTEX", subtitle: "Insulation" },
  { name: "ROTHOBLAAS", subtitle: "Connectors" },
  { name: "FERMACELL", subtitle: "Boards" },
  { name: "KNAUF", subtitle: "Systems" },
  { name: "VELUX", subtitle: "Windows" },
  { name: "SIGA", subtitle: "Membranes" },
  { name: "PRO CLIMA", subtitle: "Airtight" },
];

export default function Partners() {
  const t = useTranslations("partners");

  return (
    <section className="py-20 lg:py-24 border-t border-border overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <p className="text-[15px] font-medium text-muted">
            {t("trustStatement")}
          </p>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex"
        >
          <div className="flex animate-marquee">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 lg:mx-12 flex flex-col items-center justify-center h-16 group cursor-default"
              >
                <span className="text-[18px] lg:text-[20px] font-semibold tracking-tight text-muted-light group-hover:text-foreground transition-colors duration-300">
                  {partner.name}
                </span>
                <span className="text-[11px] uppercase tracking-[0.15em] text-muted-light/60 mt-0.5">
                  {partner.subtitle}
                </span>
              </div>
            ))}
          </div>
          <div className="flex animate-marquee" aria-hidden="true">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`dup-${index}`}
                className="flex-shrink-0 mx-8 lg:mx-12 flex flex-col items-center justify-center h-16 group cursor-default"
              >
                <span className="text-[18px] lg:text-[20px] font-semibold tracking-tight text-muted-light group-hover:text-foreground transition-colors duration-300">
                  {partner.name}
                </span>
                <span className="text-[11px] uppercase tracking-[0.15em] text-muted-light/60 mt-0.5">
                  {partner.subtitle}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
