import type { Metadata } from "next";
import Image from "next/image";
import { Shield, Eye, Clock, HardHat, Award } from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import Stats from "@/components/sections/Stats";

export const metadata: Metadata = {
  title: "About Us | Akbar Construction",
  description:
    "Learn about Akbar Construction's story, mission, values, and our commitment to quality craftsmanship in the Regina, SK area.",
};

const values = [
  {
    icon: Shield,
    title: "Quality Craftsmanship",
    description:
      "We never cut corners. Every project is built with premium materials and meticulous attention to detail that stands the test of time.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Clear communication, honest pricing, and regular progress updates. You'll always know exactly where your project stands.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description:
      "We show up on time, meet our deadlines, and deliver on our promises. Your schedule and budget are as important to us as they are to you.",
  },
  {
    icon: HardHat,
    title: "Safety",
    description:
      "Safety is non-negotiable on every job site. Our team follows strict safety protocols to protect our workers, clients, and properties.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Banner with image */}
      <section className="relative bg-primary py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&h=600&fit=crop)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">
            Who We Are
          </p>
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-white">
            About Akbar Construction
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Building trust, quality, and lasting relationships since 2010.
          </p>
        </div>
      </section>

      <Stats />

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">
                Our Story
              </p>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-5">
                From a Small Team to Regina&apos;s Trusted Builder
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  Akbar Construction was founded in 2010 with a simple mission: deliver
                  exceptional construction services with integrity, transparency, and an
                  unwavering commitment to quality. What started as a small team of
                  dedicated craftsmen has grown into one of Regina&apos;s most respected
                  construction companies.
                </p>
                <p>
                  Over the past 15+ years, we&apos;ve completed more than 250 projects
                  ranging from custom luxury homes to major commercial buildouts. Our
                  growth has been fueled not by advertising, but by the referrals of
                  satisfied clients who experienced our dedication firsthand.
                </p>
                <p>
                  Today, our team of experienced project managers, skilled tradespeople,
                  and dedicated support staff continues to uphold the values that built
                  our reputation. Every project, no matter the size, receives the same
                  level of care and attention to detail.
                </p>
              </div>
            </div>
            <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop"
                alt="Akbar Construction team at work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Accent corner badge */}
              <div className="absolute bottom-0 left-0 bg-accent px-5 py-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-white" />
                <span className="text-white font-heading font-bold text-sm">Since 2010</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none' stroke='%23fff' stroke-width='1'/%3E%3C/svg%3E")`,
        }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-2">
            Our Mission
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">
            Building Better Communities, One Project at a Time
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Our mission is to transform our clients&apos; visions into reality through
            superior craftsmanship, innovative solutions, and a client-first approach.
            We believe that every building tells a story, and we&apos;re honoured to help
            write yours. We are committed to delivering projects that exceed
            expectations while maintaining the highest standards of safety, quality,
            and environmental responsibility.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-2">
              Our Values
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">
              What Drives Us Every Day
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-xl p-6 text-center border border-border hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent transition-colors duration-300">
                  <v.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold font-heading text-foreground mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
