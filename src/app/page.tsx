import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ProcessSteps from "@/components/sections/ProcessSteps";
import ProjectGallery from "@/components/sections/ProjectGallery";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";
import CalendlyEmbed from "@/components/sections/CalendlyEmbed";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesGrid limit={6} />
      <ProcessSteps />
      <ProjectGallery limit={6} showFilters={false} />
      <Testimonials limit={3} />
      <CTASection />
      <CalendlyEmbed />
    </>
  );
}
