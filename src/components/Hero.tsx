import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-vibranium/10 blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-royal/10 blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-silver/5 blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-grid-pattern bg-repeat" style={{
          backgroundImage: `
            linear-gradient(rgba(170, 85, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(170, 85, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className={`transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}>
          {/* Main Heading */}
          <div className="inline-block px-12 py-6 rounded-full border-4 border-vibranium glow-vibranium mb-6">
            <h1 className="text-6xl md:text-8xl font-tech font-bold leading-tight text-vibranium animate">
              ELECTROVERSE
            </h1>
          </div>
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Powering the future of technology through innovation, collaboration, and electrifying events
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              variant="vibranium" 
              size="xl"
              onClick={() => onNavigate("events")}
              className="w-full sm:w-auto"
            >
              Explore Events
            </Button>
            <Button 
              variant="outline_vibranium" 
              size="xl"
              onClick={() => onNavigate("about")}
              className="w-full sm:w-auto"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <div className="bg-card/50 backdrop-blur-sm border border-vibranium/20 rounded-lg p-6 glow-vibranium">
              <div className="text-3xl font-bold text-vibranium mb-2">50+</div>
              <div className="text-muted-foreground">Events Organized</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-royal/20 rounded-lg p-6 glow-royal">
              <div className="text-3xl font-bold text-royal mb-2">1000+</div>
              <div className="text-muted-foreground">Participants</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-silver/20 rounded-lg p-6 glow-silver">
              <div className="text-3xl font-bold text-silver mb-2">25+</div>
              <div className="text-muted-foreground">Team Members</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-vibranium w-8 h-8" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;