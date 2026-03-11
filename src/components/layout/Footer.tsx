import Link from "next/link";
import { HardHat, Phone, Mail, MapPin } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { services } from "@/data/services";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <HardHat className="w-7 h-7 text-accent" />
              <span className="text-lg font-bold font-heading">{SITE.name}</span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Regina&apos;s trusted construction partner delivering quality
              craftsmanship for residential and commercial projects since 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {services.slice(0, 6).map((s) => (
                <li key={s.title}>
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-accent transition-colors text-sm"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <Phone className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <a href={`tel:${SITE.phone}`} className="hover:text-accent transition-colors">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <Mail className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <a href={`mailto:${SITE.email}`} className="hover:text-accent transition-colors">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <span>{SITE.address}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            &copy; 2026 {SITE.name}. All rights reserved.
          </p>
          <p className="text-sm text-gray-400">Licensed &amp; Insured</p>
        </div>
      </div>
    </footer>
  );
}
