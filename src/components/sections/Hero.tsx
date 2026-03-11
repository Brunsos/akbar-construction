import Image from "next/image";
import { Shield, ArrowRight, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#162D4A]">
      {/* Subtle gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F1E30] via-[#1F3A5F] to-[#1a3255]" />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: "56px 56px",
        }}
      />

      {/* Amber glow — top right */}
      <div className="absolute top-0 right-0 w-[32rem] h-[32rem] bg-amber-400/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — text content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-400/15 text-amber-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-amber-400/20">
              <Shield className="w-4 h-4" />
              Trusted Construction Partner in Regina, SK
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white leading-[1.08]">
              Building Your Vision{" "}
              <span className="text-amber-400">Into Reality</span>
            </h1>

            <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-lg">
              Residential and commercial construction experts delivering quality
              craftsmanship across Regina. From custom homes to complete
              renovations — done right, on time.
            </p>

            {/* Inline stats — single source of truth */}
            <div className="mt-8 flex flex-wrap gap-8 border-t border-white/10 pt-7">
              {[
                { value: "15+", label: "Years Experience" },
                { value: "250+", label: "Projects Completed" },
                { value: "Local", label: "Regina Based" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-heading font-bold text-amber-400">{stat.value}</p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" variant="accent" size="lg" className="group">
                Book Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button href="/projects" variant="outline-white" size="lg">
                View Our Projects
              </Button>
            </div>

            {/* Quick contact */}
            <div className="mt-8 flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Call Us Today</p>
                <a
                  href={`tel:${SITE.phone}`}
                  className="text-white font-heading font-bold hover:text-amber-400 transition-colors"
                >
                  {SITE.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Right — single feature image */}
          <div className="hidden lg:block relative">
            {/* Amber accent border behind image */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-amber-400/30 via-transparent to-transparent blur-sm" />

            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=620&h=700&fit=crop"
                alt="Quality home built by Akbar Construction"
                width={620}
                height={700}
                className="object-cover w-full"
                priority
              />
              {/* Gradient overlay — reveals caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E30]/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 px-6 py-5">
                <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-1">
                  Featured Project
                </p>
                <p className="text-white font-heading font-bold text-lg leading-tight">
                  Custom Residential Build — Regina, SK
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
