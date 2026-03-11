"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, HardHat, Phone } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-white shadow-md"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <HardHat className="w-8 h-8 text-accent transition-transform duration-200 group-hover:scale-110" />
            <span className="text-xl font-bold font-heading text-primary">
              {SITE.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button href="/contact" variant="accent" size="sm">
              Book Consultation
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-foreground hover:text-accent transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } bg-white border-t border-border`}
      >
        <nav className="flex flex-col px-6 py-6 gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="py-3 text-base font-medium text-foreground hover:text-accent hover:bg-muted rounded-lg px-3 transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <div className="border-t border-border mt-3 pt-4 space-y-3">
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors px-3"
            >
              <Phone className="w-4 h-4" />
              {SITE.phone}
            </a>
            <Button
              href="/contact"
              variant="accent"
              size="md"
              className="w-full"
            >
              Book Consultation
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
