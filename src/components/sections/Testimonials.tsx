import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import SectionHeading from "@/components/ui/SectionHeading";

interface TestimonialsProps {
  limit?: number;
}

export default function Testimonials({ limit }: TestimonialsProps) {
  const items = limit ? testimonials.slice(0, limit) : testimonials;

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Subtle diagonal background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted via-white to-muted" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Clients Say"
          subtitle="Don't just take our word for it — hear from homeowners and businesses who trusted us with their projects."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((t) => (
            <div
              key={t.name}
              className="relative rounded-xl p-6 bg-white border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <Quote className="w-10 h-10 mb-4 text-accent/20" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-accent text-accent"
                  />
                ))}
              </div>

              <p className="text-sm leading-relaxed mb-5 text-foreground">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="border-t border-border pt-4">
                <p className="font-semibold font-heading text-sm text-foreground">
                  {t.name}
                </p>
                <p className="text-xs mt-0.5 text-text-secondary">
                  {t.role} &middot; {t.project}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
