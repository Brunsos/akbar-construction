import Image from "next/image";
import { Shield, ArrowRight, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center bg-primary overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop)",
        }}
      />
      {/* Dark gradient overlay — stronger on left for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/50" />
      {/* Bottom fade for smooth transition into Stats */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-foreground to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — text content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <Shield className="w-4 h-4" />
              Trusted Construction Partner in Regina, SK
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white leading-[1.1]">
              Building Your Vision{" "}
              <span className="text-accent">Into Reality</span>
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-xl">
              Trusted residential and commercial construction experts delivering
              quality craftsmanship. From custom homes to complete renovations, we
              bring your project to life.
            </p>

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
              <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Call Us Today</p>
                <a href={`tel:${SITE.phone}`} className="text-white font-heading font-bold hover:text-accent transition-colors">
                  {SITE.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Right — feature image card */}
          <div className="hidden lg:block relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=500&fit=crop"
                alt="Quality home built by Akbar Construction"
                width={600}
                height={500}
                className="object-cover"
                priority
              />
              {/* Accent corner */}
              <div className="absolute bottom-0 left-0 bg-accent px-6 py-4">
                <p className="text-white font-heading font-bold text-2xl">250+</p>
                <p className="text-white/80 text-xs uppercase tracking-wider">Projects Completed</p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl px-5 py-3 border border-border">
              <p className="text-accent font-heading font-bold text-lg">15+ Years</p>
              <p className="text-text-secondary text-xs">Serving Regina & Area</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
