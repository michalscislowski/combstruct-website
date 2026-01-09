"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Section from "@/components/ui/Section";
import { ChevronDown, ArrowRight } from "lucide-react";
import { useState, useId } from "react";

const categoryKeys = ["general", "technical", "process", "pricing"] as const;
const questionsPerCategory = {
  general: 3,
  technical: 3,
  process: 3,
  pricing: 3,
};

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const id = useId();
  const buttonId = `faq-button-${id}`;
  const panelId = `faq-panel-${id}`;

  return (
    <div className="border-b border-border">
      <h3>
        <button
          id={buttonId}
          onClick={() => setIsOpen(!isOpen)}
          className="w-full py-5 flex items-center justify-between text-left min-h-[52px] focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 rounded"
          aria-expanded={isOpen}
          aria-controls={panelId}
        >
          <span className="font-medium text-foreground pr-4">{question}</span>
          <ChevronDown
            className={`h-5 w-5 text-muted flex-shrink-0 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          />
        </button>
      </h3>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-muted">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  const t = useTranslations("faq");

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

      {/* FAQ Sections */}
      <Section>
        <div className="max-w-3xl mx-auto">
          {categoryKeys.map((categoryKey, sectionIndex) => (
            <motion.div
              key={categoryKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-xl font-bold text-foreground mb-6">
                {t(`categories.${categoryKey}.title`)}
              </h2>
              <div>
                {Array.from({ length: questionsPerCategory[categoryKey] }, (_, i) => i + 1).map(
                  (questionIndex) => (
                    <FAQItem
                      key={questionIndex}
                      question={t(`categories.${categoryKey}.questions.${questionIndex}.q`)}
                      answer={t(`categories.${categoryKey}.questions.${questionIndex}.a`)}
                    />
                  )
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-secondary">
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
