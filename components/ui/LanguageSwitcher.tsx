"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { routing, Locale } from "@/i18n/routing";
import { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown } from "lucide-react";

const localeNames: Record<Locale, string> = {
  en: "EN",
  pl: "PL",
  de: "DE",
};

const localeFullNames: Record<Locale, string> = {
  en: "English",
  pl: "Polski",
  de: "Deutsch",
};

export default function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("languageSwitcher");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on escape key
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const handleLocaleChange = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-foreground hover:text-muted transition-colors rounded-md hover:bg-secondary"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={t("label")}
      >
        <Globe className="h-4 w-4" aria-hidden="true" />
        <span>{localeNames[locale]}</span>
        <ChevronDown
          className={`h-3 w-3 transition-transform ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-36 bg-white rounded-md shadow-lg border border-border py-1 z-50"
          role="listbox"
          aria-label={t("label")}
        >
          {routing.locales.map((loc) => (
            <button
              key={loc}
              onClick={() => handleLocaleChange(loc)}
              className={`w-full px-4 py-2 text-left text-sm hover:bg-secondary transition-colors flex items-center justify-between ${
                locale === loc
                  ? "text-foreground font-medium bg-secondary/50"
                  : "text-muted"
              }`}
              role="option"
              aria-selected={locale === loc}
            >
              <span>{localeFullNames[loc]}</span>
              <span className="text-xs text-muted">{localeNames[loc]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
