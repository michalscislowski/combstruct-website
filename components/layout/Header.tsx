"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useState, useEffect, useCallback } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

const navigationKeys = [
  { key: "about", href: "/about" },
  { key: "products", href: "/products" },
  { key: "projects", href: "/projects" },
  { key: "process", href: "/process" },
  { key: "faq", href: "/faq" },
  { key: "blog", href: "/blog" },
] as const;

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("navigation");
  const tAccess = useTranslations("accessibility");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    },
    [mobileMenuOpen]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Check if link is active
  const isActive = (href: string) => pathname === href;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white border-b border-border"
          : "bg-white/80 backdrop-blur-sm"
      }`}
      role="banner"
    >
      <nav
        className="mx-auto max-w-[1400px] px-6 lg:px-10"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center min-h-[44px] min-w-[44px]"
            aria-label="Combstruct - Go to homepage"
          >
            <span className="text-[22px] font-semibold tracking-[-0.02em] text-foreground">
              Combstruct
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div
            className="hidden lg:flex lg:items-center lg:gap-x-8"
            role="menubar"
          >
            {navigationKeys.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`relative text-[15px] font-medium transition-colors py-2 ${
                  isActive(item.href)
                    ? "text-foreground"
                    : "text-muted hover:text-foreground"
                }`}
                aria-current={isActive(item.href) ? "page" : undefined}
                role="menuitem"
              >
                {t(item.key)}
                {/* Active indicator */}
                {isActive(item.href) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA + Language Switcher */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <LanguageSwitcher />
            <Link href="/contact" className="btn-primary">
              {t("startProject")}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button
              type="button"
              className="p-3 -mr-3 text-foreground min-h-[44px] min-w-[44px] flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={
                mobileMenuOpen ? tAccess("closeMenu") : tAccess("openMenu")
              }
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 top-[72px] bg-black/20 backdrop-blur-sm"
              aria-hidden="true"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu panel */}
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden absolute top-[72px] left-0 right-0 bg-white border-b border-border shadow-lg"
              role="menu"
              aria-orientation="vertical"
            >
              <div className="px-6 py-6 space-y-1">
                {navigationKeys.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    className={`flex items-center justify-between py-4 text-[17px] font-medium transition-colors border-b border-border last:border-0 min-h-[52px] ${
                      isActive(item.href)
                        ? "text-foreground"
                        : "text-muted hover:text-foreground"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                    role="menuitem"
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    <span className="flex items-center gap-3">
                      {isActive(item.href) && (
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-foreground"
                          aria-hidden="true"
                        />
                      )}
                      {t(item.key)}
                    </span>
                    <ArrowRight
                      className="h-4 w-4 text-muted"
                      aria-hidden="true"
                    />
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 py-4 mt-4 text-[17px] font-semibold text-white bg-foreground min-h-[52px]"
                  onClick={() => setMobileMenuOpen(false)}
                  role="menuitem"
                >
                  {t("startProject")}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
