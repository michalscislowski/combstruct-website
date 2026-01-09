"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Section from "@/components/ui/Section";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";

const contactIcons = {
  email: Mail,
  phone: Phone,
  location: MapPin,
  hours: Clock,
} as const;

const contactKeys = ["email", "phone", "location", "hours"] as const;

const contactHrefs: Record<string, string> = {
  email: "mailto:contact@combstruct.com",
  phone: "tel:+48123456789",
  location: "#",
  hours: "#",
};

const inquiryTypeKeys = [
  "general",
  "quote",
  "technical",
  "partnership",
  "media",
  "other",
] as const;

export default function ContactPage() {
  const t = useTranslations("contact");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(t("form.successMessage"));
  };

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

      {/* Contact Form & Info */}
      <Section>
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-6">
              {t("info.title")}
            </h2>
            <address className="space-y-6 not-italic">
              {contactKeys.map((key, index) => {
                const IconComponent = contactIcons[key];
                return (
                  <a
                    key={index}
                    href={contactHrefs[key]}
                    className="flex items-start gap-4 group min-h-[44px] py-1 focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 rounded-lg"
                    aria-label={`${t(`info.items.${key}.label`)}: ${t(`info.items.${key}.value`)}`}
                  >
                    <div
                      className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-white transition-colors"
                      aria-hidden="true"
                    >
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm text-muted">
                        {t(`info.items.${key}.label`)}
                      </div>
                      <div className="font-medium text-foreground">
                        {t(`info.items.${key}.value`)}
                      </div>
                    </div>
                  </a>
                );
              })}
            </address>

            {/* Location image */}
            <div className="mt-8 aspect-video bg-secondary rounded-2xl overflow-hidden relative">
              <Image
                src="/images/contact-side.jpg"
                alt={t("info.imageAlt")}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-secondary rounded-2xl p-8">
              <h2
                id="form-heading"
                className="text-2xl font-bold text-foreground mb-6"
              >
                {t("form.title")}
              </h2>
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                aria-labelledby="form-heading"
                noValidate
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      {t("form.fields.name.label")}{" "}
                      <span aria-hidden="true">*</span>
                      <span className="sr-only">({t("form.required")})</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      aria-required="true"
                      autoComplete="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 transition-colors min-h-[48px]"
                      placeholder={t("form.fields.name.placeholder")}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      {t("form.fields.email.label")}{" "}
                      <span aria-hidden="true">*</span>
                      <span className="sr-only">({t("form.required")})</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      aria-required="true"
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 transition-colors min-h-[48px]"
                      placeholder={t("form.fields.email.placeholder")}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      {t("form.fields.phone.label")}{" "}
                      <span className="text-muted">
                        ({t("form.optional")})
                      </span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 transition-colors min-h-[48px]"
                      placeholder={t("form.fields.phone.placeholder")}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="inquiryType"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      {t("form.fields.inquiryType.label")}{" "}
                      <span aria-hidden="true">*</span>
                      <span className="sr-only">({t("form.required")})</span>
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      required
                      aria-required="true"
                      value={formData.inquiryType}
                      onChange={(e) =>
                        setFormData({ ...formData, inquiryType: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 transition-colors min-h-[48px]"
                    >
                      <option value="">
                        {t("form.fields.inquiryType.placeholder")}
                      </option>
                      {inquiryTypeKeys.map((type) => (
                        <option key={type} value={type}>
                          {t(`form.fields.inquiryType.options.${type}`)}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    {t("form.fields.message.label")}{" "}
                    <span aria-hidden="true">*</span>
                    <span className="sr-only">({t("form.required")})</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    aria-required="true"
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 transition-colors resize-none"
                    placeholder={t("form.fields.message.placeholder")}
                  />
                </div>

                <button type="submit" className="btn-primary">
                  {t("form.submit")}
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
