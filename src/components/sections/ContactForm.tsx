"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle, Send } from "lucide-react";
import { SITE } from "@/lib/constants";
import Button from "@/components/ui/Button";

const projectTypes = [
  "Residential Construction",
  "Commercial Construction",
  "Home Renovation",
  "Kitchen Remodeling",
  "Bathroom Remodeling",
  "Custom Home Build",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-16 bg-muted">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="text-3xl font-bold font-heading text-foreground mb-4">
            Thank You!
          </h2>
          <p className="text-text-secondary text-lg">
            We&apos;ve received your message and will get back to you within 24
            hours. Looking forward to working with you!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-border">
            <h2 className="text-2xl font-bold font-heading text-foreground mb-1">
              Send Us a Message
            </h2>
            <p className="text-text-secondary text-sm mb-6">
              Fill out the form and we&apos;ll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-muted text-foreground placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-muted text-foreground placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition text-sm"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="(306) 555-0172"
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-muted text-foreground placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-1">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-muted text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition text-sm"
                  >
                    <option value="">Select a project type</option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-muted text-foreground placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition resize-none text-sm"
                />
              </div>

              <Button type="submit" variant="accent" size="md" className="w-full sm:w-auto">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact info sidebar */}
          <div className="lg:col-span-2 space-y-5">
            {/* Info card */}
            <div className="bg-primary rounded-2xl p-6 text-white">
              <h3 className="font-heading font-bold text-lg mb-5">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <a
                      href={`tel:${SITE.phone}`}
                      className="text-sm text-gray-300 hover:text-accent transition-colors"
                    >
                      {SITE.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-sm text-gray-300 hover:text-accent transition-colors"
                    >
                      {SITE.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Office</p>
                    <p className="text-sm text-gray-300">{SITE.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Business Hours</p>
                    <p className="text-sm text-gray-300">Mon – Fri: 8 AM – 6 PM</p>
                    <p className="text-sm text-gray-300">Sat: 9 AM – 2 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick CTA */}
            <div className="bg-accent rounded-2xl p-6 text-center">
              <p className="text-white font-heading font-bold text-lg mb-2">
                Prefer to Talk?
              </p>
              <p className="text-white/80 text-sm mb-4">
                Call us directly for an immediate response.
              </p>
              <a
                href={`tel:${SITE.phone}`}
                className="inline-flex items-center gap-2 bg-white text-accent font-heading font-bold px-6 py-2.5 rounded-lg hover:bg-gray-100 transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
