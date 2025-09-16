import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Clock, MapPin, Calendar, PhoneCall, Navigation, Badge } from "lucide-react";
import heroImage from "@/assets/hero-lab.jpg";

const Hero = () => {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCall = () => {
    window.open("tel:+917024832751", "_self");
  };

  const handleDirections = () => {
    window.open("https://maps.google.com/?q=Sankalp+Care+Connect+Bhopal+Ayodhya+Bypass", "_blank");
  };

  return (
    <section id="home" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-surface to-background" aria-labelledby="hero-heading">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-4 sm:space-y-6">
              <h1 id="hero-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Home Healthcare Services Bhopal –{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Sankalp Pathology Lab
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-foreground-secondary max-w-xl mx-auto lg:mx-0" role="description">
                Professional healthcare services at your doorstep. Comprehensive pathology tests, home sample collection, nursing care, physiotherapy, and teleconsultation services in Bhopal, Madhya Pradesh. | स्वास्थ्य सेवा घर पर - पूर्ण स्वास्थ्य जांच और देखभाल सेवाएं
              </p>
            </div>

            {/* Contact Info Card */}
            <Card className="p-4 sm:p-6 bg-surface-elevated shadow-md" role="complementary" aria-labelledby="lab-info">
              <h2 id="lab-info" className="font-semibold text-base sm:text-lg text-foreground mb-4">Visit Our Lab</h2>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Sankalp Pathology Lab</p>
                    <p className="text-foreground-secondary">Ayodhya Bypass, Bhopal, Madhya Pradesh</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">+91 70248 32751</p>
                    <p className="text-sm text-foreground-secondary">Phone & WhatsApp</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-medical-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Mon-Sat: 7:30 AM - 9:00 PM</p>
                    <p className="text-foreground-secondary">Sunday: 7:30 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                variant="cta"
                className="px-6 sm:px-8 touch-button w-full sm:w-auto"
                onClick={scrollToBooking}
              >
                <Calendar className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                Book a Test
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 sm:px-8 touch-button w-full sm:w-auto"
                onClick={handleCall}
              >
                <PhoneCall className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                Call Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-6 sm:px-8 touch-button w-full sm:w-auto"
                onClick={handleDirections}
              >
                <Navigation className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                Get Directions
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative order-first lg:order-last">
            <div className="relative rounded-lg sm:rounded-xl overflow-hidden shadow-lg sm:shadow-xl">
              <img 
                src={heroImage} 
                alt="Modern pathology laboratory interior showing advanced diagnostic equipment, clean testing environment, and professional healthcare setup at Sankalp Pathology Lab in Bhopal. State-of-the-art medical devices for blood tests, sample analysis, and comprehensive health diagnostics."
                className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              
              {/* Trust Badge */}
              <div className="absolute top-3 sm:top-6 right-3 sm:right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-2 sm:p-3 shadow-lg">
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <Badge className="h-6 sm:h-8 w-6 sm:w-8 text-secondary" />
                    <div>
                      <p className="font-bold text-secondary text-sm sm:text-lg">5+ Years</p>
                      <p className="text-xs sm:text-sm text-foreground-secondary">Trusted</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-3 sm:-bottom-6 -left-3 sm:-left-6 bg-white rounded-lg shadow-lg p-2 sm:p-4">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 sm:w-12 h-8 sm:h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm sm:text-base">1K+</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm sm:text-base">Happy Patients</p>
                  <p className="text-xs sm:text-sm text-foreground-secondary">Trusted by families</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;