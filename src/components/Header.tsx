import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Clock, MapPin, Menu, X, Calendar } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Strip */}
      <div className="bg-gradient-primary text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 7024832751</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Mon-Sat 7:30 AM-9:00 PM, Sun 7:30 AM-1:00 PM</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Bhopal, Madhya Pradesh</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-background border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/c47ab05b-5664-47f9-8a07-68af5b3c3433.png" 
                alt="Sankalp Pathology Lab Logo" 
                className="w-12 h-12 rounded-lg"
              />
              <div>
                <h1 className="text-xl font-bold text-foreground">Sankalp Pathology Lab</h1>
                <p className="text-sm text-foreground-secondary">स्वास्थ्य ही संकल्प है...</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("packages")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Packages
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Contact
              </button>
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <ThemeToggle />
              <Button 
                className="bg-secondary hover:bg-secondary-hover text-secondary-foreground cta-button pulse-button relative"
                onClick={() => scrollToSection("booking")}
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book a Test
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-border py-4">
              <div className="flex flex-col space-y-3">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-left py-2 text-foreground hover:text-primary transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-left py-2 text-foreground hover:text-primary transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-left py-2 text-foreground hover:text-primary transition-colors"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("packages")}
                  className="text-left py-2 text-foreground hover:text-primary transition-colors"
                >
                  Packages
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-left py-2 text-foreground hover:text-primary transition-colors"
                >
                  Contact
                </button>
                <div className="flex flex-col space-y-2 pt-3 border-t border-border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-foreground-secondary">Theme</span>
                    <ThemeToggle />
                  </div>
                  <Button 
                    size="sm" 
                    className="bg-secondary hover:bg-secondary-hover text-secondary-foreground"
                    onClick={() => scrollToSection("booking")}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Book a Test
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;