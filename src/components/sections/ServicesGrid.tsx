import Image from "next/image";
import {
  Home,
  Building2,
  Hammer,
  CookingPot,
  Bath,
  Ruler,
  ClipboardList,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/services";
import SectionHeading from "@/components/ui/SectionHeading";

const iconMap: Record<string, LucideIcon> = {
  Home,
  Building2,
  Hammer,
  CookingPot,
  Bath,
  Ruler,
  ClipboardList,
};

interface ServicesGridProps {
  limit?: number;
  showFeatures?: boolean;
}

export default function ServicesGrid({ limit, showFeatures = false }: ServicesGridProps) {
  const items = limit ? services.slice(0, limit) : services;

  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="Our Services"
          subtitle="From residential builds to commercial projects, we offer comprehensive construction services tailored to your needs."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((service) => {
            const Icon = iconMap[service.icon] || Hammer;
            return (
              <div
                key={service.title}
                className="group relative bg-white rounded-xl overflow-hidden border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image header */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold font-heading text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {showFeatures && service.features.length > 0 && (
                    <ul className="mt-4 space-y-1.5">
                      {service.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2 text-sm text-text-secondary"
                        >
                          <span className="text-accent font-bold mt-0.5">&#10003;</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  )}

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-accent hover:text-accent-dark transition-colors group/link"
                  >
                    Get a Quote
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
