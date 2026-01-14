import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { StorySection } from "@/components/StorySection";
import { MachinesSection } from "@/components/MachinesSection";
import { LegacySection } from "@/components/LegacySection";
import { MindBlowerSection } from "@/components/MindBlowerSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior
    ScrollTrigger.defaults({
      markers: false,
    });

    // Refresh ScrollTrigger after fonts load
    document.fonts.ready.then(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <StorySection />
      <MachinesSection />
      <LegacySection />
      <MindBlowerSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
