"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";

interface FooterLink {
  key: string;
  href: string;
  external?: boolean;
}

const footerLinks: Record<string, FooterLink[]> = {
  product: [
    { key: "products", href: "/products" },
    { key: "process", href: "/process" },
    { key: "projects", href: "/projects" },
    { key: "faq", href: "/faq" },
  ],
  company: [
    { key: "about", href: "/about" },
    { key: "blog", href: "/blog" },
    { key: "contact", href: "/contact" },
    { key: "careers", href: "#", external: true },
  ],
  resources: [
    { key: "documentation", href: "#", external: true },
    { key: "technicalSpecs", href: "#", external: true },
    { key: "downloads", href: "#", external: true },
  ],
};

const socialLinks = [
  { name: "Twitter", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "YouTube", href: "#" },
  { name: "GitHub", href: "#" },
];

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-dark text-white" role="contentinfo">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Main Footer */}
        <div className="py-16 lg:py-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link
              href="/"
              className="inline-block min-h-[44px] min-w-[44px] py-2"
              aria-label="Combstruct - Go to homepage"
            >
              <span className="text-[22px] font-semibold tracking-[-0.02em]">
                Combstruct
              </span>
            </Link>
            <p className="mt-4 text-[15px] leading-relaxed text-white/60 max-w-sm">
              {t("brandDescription")}
            </p>
          </div>

          {/* Product Links */}
          <nav aria-labelledby="footer-product-heading">
            <h3
              id="footer-product-heading"
              className="text-[13px] font-semibold uppercase tracking-wider text-white/40 mb-4"
            >
              {t("sections.product")}
            </h3>
            <ul className="space-y-3" role="list">
              {footerLinks.product.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="inline-block py-1 text-[15px] text-white/70 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-dark rounded"
                  >
                    {t(`links.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company Links */}
          <nav aria-labelledby="footer-company-heading">
            <h3
              id="footer-company-heading"
              className="text-[13px] font-semibold uppercase tracking-wider text-white/40 mb-4"
            >
              {t("sections.company")}
            </h3>
            <ul className="space-y-3" role="list">
              {footerLinks.company.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1 py-1 text-[15px] text-white/70 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-dark rounded"
                    {...(link.external && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                      "aria-label": `${t(`links.${link.key}`)} (opens in new tab)`,
                    })}
                  >
                    {t(`links.${link.key}`)}
                    {link.external && (
                      <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Resources Links */}
          <nav aria-labelledby="footer-resources-heading">
            <h3
              id="footer-resources-heading"
              className="text-[13px] font-semibold uppercase tracking-wider text-white/40 mb-4"
            >
              {t("sections.resources")}
            </h3>
            <ul className="space-y-3" role="list">
              {footerLinks.resources.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1 py-1 text-[15px] text-white/70 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-dark rounded"
                    {...(link.external && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                      "aria-label": `${t(`links.${link.key}`)} (opens in new tab)`,
                    })}
                  >
                    {t(`links.${link.key}`)}
                    {link.external && (
                      <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <nav aria-labelledby="footer-social-heading">
            <h3
              id="footer-social-heading"
              className="text-[13px] font-semibold uppercase tracking-wider text-white/40 mb-4"
            >
              {t("sections.social")}
            </h3>
            <ul className="space-y-3" role="list">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="inline-block py-1 text-[15px] text-white/70 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-dark rounded"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${link.name} (opens in new tab)`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[13px] text-white/40">
            {t("legal.copyright", { year: new Date().getFullYear() })}
          </p>
          <nav aria-label="Legal">
            <ul className="flex gap-6" role="list">
              <li>
                <a
                  href="#"
                  className="inline-block py-1 text-[13px] text-white/40 hover:text-white/70 transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-dark rounded"
                >
                  {t("legal.privacy")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-1 text-[13px] text-white/40 hover:text-white/70 transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-dark rounded"
                >
                  {t("legal.terms")}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
