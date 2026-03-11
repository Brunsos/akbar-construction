import { Phone, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1762813384339-c526d5533976?w=1920&h=800&fit=crop)",
        }}
      />
      <div className="absolute inset-0 bg-primary/90" />

      {/* Geometric accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">
          Start Building Today
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Get a free consultation and detailed estimate. Let&apos;s bring your
          vision to life together.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/contact" variant="accent" size="lg" className="group">
            Book Consultation
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button href={`tel:${SITE.phone}`} variant="outline-white" size="lg">
            <Phone className="w-5 h-5 mr-2" />
            {SITE.phone}
          </Button>
        </div>
      </div>
    </section>
  );
}
