import Divider from "@/components/atoms/Divider";
import ContactSection from "@/components/elements/contact/ContactSection";
import HeroSection from "@/components/elements/hero/HeroSection";
import ResourcesSection from "@/components/elements/resources/ResourcesSection";
import ServicesSection from "@/components/elements/services/ServicesSection";
import TestimonialSection from "@/components/elements/testimonials/TestimonialSection";
import TherapistSection from "@/components/elements/therapist/TherapistSection";

export default function Home() {
  return (
    <div className="px-3 lg:p-0 overflow-hidden">
      <HeroSection />
      <Divider />
      <TherapistSection />
      <Divider />
      <ServicesSection />
      <Divider />
      <TestimonialSection />
      <Divider />
      <ResourcesSection />
      <Divider />
      <ContactSection />
      <Divider />
    </div>
  );
}
