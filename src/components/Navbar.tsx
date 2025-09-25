import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Navbar = ({ activeSection, onNavigate }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "events", label: "Events" },
    { id: "team", label: "Team" },
    { id: "contact", label: "Contact Us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "backdrop-wakanda border-b border-vibranium/20" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="cursor-pointer flex items-center space-x-2"
            onClick={() => onNavigate("home")}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-vibranium flex items-center justify-center glow-vibranium">
               <img 
                src="/logo.png" 
                alt="Electroverse Logo" 
                className="h-10 w-10 object-contain"/>
            </div>
            <span className="font-tech text-xl font-bold text-vibranium">
              ELECTROVERSE
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`font-medium transition-all duration-300 hover:text-vibranium ${
                  activeSection === item.id 
                    ? "text-vibranium glow-vibranium" 
                    : "text-foreground/80"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost_vibranium"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden backdrop-wakanda border-t border-vibranium/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-md font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-vibranium bg-vibranium/10 glow-vibranium"
                      : "text-foreground/80 hover:text-vibranium hover:bg-vibranium/5"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;