import type { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";
import CalendlyEmbed from "@/components/sections/CalendlyEmbed";

export const metadata: Metadata = {
  title: "Contact Us | Akbar Construction",
  description:
    "Get in touch with Akbar Construction. Request a free consultation, get a quote, or ask us anything about your upcoming project.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative bg-primary py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage:
              "url(https://plus.unsplash.com/premium_photo-1681823801287-4326e7e22676?w=1920&h=600&fit=crop)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">
            Let&apos;s Talk
          </p>
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-white">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to start your project? Get in touch for a free consultation
            and detailed estimate.
          </p>
        </div>
      </section>

      <ContactForm />
      <CalendlyEmbed />
    </>
  );
}
