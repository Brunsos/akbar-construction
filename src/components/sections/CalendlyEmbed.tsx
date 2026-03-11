import { Calendar, ArrowRight, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function CalendlyEmbed() {
  return (
    <section className="relative py-16 bg-primary overflow-hidden">
      {/* Diagonal accent stripe */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-accent rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] bg-accent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left — copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <Calendar className="w-4 h-4" />
              Free 30-Minute Consultation
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
              Let&apos;s Discuss Your{" "}
              <span className="text-accent">Next Project</span>
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8 max-w-lg">
              Book a no-obligation consultation with our team. We&apos;ll review
              your project goals, walk you through our process, and provide a
              preliminary estimate — all in 30 minutes.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={SITE.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 cursor-pointer font-heading bg-accent text-white hover:bg-accent-dark shadow-md hover:shadow-lg px-8 py-4 text-lg"
              >
                Book a Time
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
              <Button
                href={`tel:${SITE.phone}`}
                variant="outline-white"
                size="lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
              </Button>
            </div>
          </div>

          {/* Right — visual feature list */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "30", label: "Minute Consultation", sub: "No obligation" },
              { num: "24h", label: "Response Time", sub: "On all inquiries" },
              { num: "Free", label: "Project Estimate", sub: "Detailed & transparent" },
              { num: "15+", label: "Years Experience", sub: "Regina & area" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 text-center hover:bg-white/10 transition-colors duration-300"
              >
                <p className="text-3xl font-bold font-heading text-accent mb-1">
                  {item.num}
                </p>
                <p className="text-white text-sm font-semibold">{item.label}</p>
                <p className="text-gray-400 text-xs mt-1">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
