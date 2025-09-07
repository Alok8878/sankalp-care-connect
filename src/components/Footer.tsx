import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Calendar,
  TestTube,
  X as XRay,
  Heart,
  Home
} from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Packages", id: "packages" },
    { name: "Contact", id: "contact" }
  ];

  const services = [
    { name: "Home Sample Collection", icon: TestTube },
    { name: "Home Nursing Care", icon: XRay },
    { name: "Physiotherapy at Home", icon: Heart },
    { name: "Medical Equipment Rental", icon: Home }
  ];

  return (
    <footer className="bg-gradient-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Lab Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/c47ab05b-5664-47f9-8a07-68af5b3c3433.png" 
                alt="Sankalp Care Connect Logo" 
                className="w-12 h-12 rounded-lg bg-white/20 p-2"
              />
              <div>
                <h3 className="text-xl font-bold">Sankalp Care Connect</h3>
                <p className="text-sm opacity-90">स्वास्थ्य ही संकल्प है...</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
              Providing comprehensive home healthcare services with advanced technology and 
              experienced professionals for over 5 years in Bhopal.
            </p>
            <Button 
              onClick={() => scrollToSection("booking")}
              className="bg-white/20 hover:bg-white/30 text-white border-white/30"
              variant="outline"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book a Service
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/80 hover:text-white transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <li key={index} className="flex items-center space-x-2">
                    <IconComponent className="h-4 w-4 text-white/60" />
                    <span className="text-white/80">{service.name}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-white/60 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/80 text-sm">
                    Ayodhya Bypass, Indus Park<br />
                    Bhopal, Madhya Pradesh
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-white/60" />
                  <button
                    onClick={() => window.open("tel:+917024832751", "_self")}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    +91 70248 32751
                  </button>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-white/60" />
                <button
                  onClick={() => window.open("mailto:sankalppathologylab@gmail.com", "_self")}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  sankalppathologylab@gmail.com
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/70 text-sm">
              © 2024 Sankalp Care Connect. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <button 
                onClick={() => window.open('/privacy-policy', '_blank')}
                className="text-white/70 hover:text-white transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => window.open('/terms-of-service', '_blank')}
                className="text-white/70 hover:text-white transition-colors"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => window.open('/disclaimer', '_blank')}
                className="text-white/70 hover:text-white transition-colors"
              >
                Disclaimer
              </button>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-white/10 text-center">
            <p className="text-white/60 text-xs">
              Website design by <span className="text-white/80 font-medium">Aarna Sharma</span> - <span className="text-white/70">7974496150</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;