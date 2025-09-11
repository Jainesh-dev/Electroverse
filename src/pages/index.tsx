import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Hero";
import EventCountdown from "@/components/EventCountdown";
import AboutSection from "@/components/About";
import EventsSection from "@/components/Events";
import TeamSection from "@/components/Team";
import ContactSection from "@/components/Contact";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    
    // Smooth scroll to section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "events", "team", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main>
        <section id="home">
          <HeroSection onNavigate={handleNavigate} />
          <EventCountdown />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="events">
          <EventsSection />
        </section>

        <section id="team">
          <TeamSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-electric/20 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-electric flex items-center justify-center glow-electric">
                <span className="text-background font-bold text-lg">E</span>
              </div>
              <span className="font-tech text-xl font-bold text-electric">
                ELECTROVERSE
              </span>
            </div>
            <p className="text-muted-foreground mb-4">
              Powering the future of technology through innovation and collaboration
            </p>
            <div className="text-sm text-muted-foreground">
              © 2024 Electroverse. All rights reserved. | 
              <a href="mailto:info@electroverse.org" className="text-electric hover:underline ml-1">
                info@electroverse.org
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;