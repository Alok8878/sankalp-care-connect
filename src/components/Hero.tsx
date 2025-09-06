import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Clock, MapPin, Calendar, PhoneCall, Navigation, Badge } from "lucide-react";
import heroImage from "@/assets/hero-lab.jpg";

const Hero = () => {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCall = () => {
    window.open("tel:+919876543210", "_self");
  };

  const handleDirections = () => {
    window.open("https://maps.google.com/?q=Sankalp+Pathology+Lab+Bhopal", "_blank");
  };

  return (
    <section id="home" className="py-16 lg:py-24 bg-gradient-to-br from-surface to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Sankalp Pathology Lab –{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Trusted Pathology, X-Ray & ECG
                </span>{" "}
                in Bhopal
              </h1>
              <p className="text-xl text-foreground-secondary">
                Accurate diagnostic reports with fast turnaround times
              </p>
            </div>

            {/* Contact Info Card */}
            <Card className="p-6 bg-surface-elevated shadow-md">
              <h3 className="font-semibold text-lg text-foreground mb-4">Visit Our Lab</h3>
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
                    <p className="font-medium text-foreground">+91 9876543210</p>
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
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary-hover text-secondary-foreground px-8"
                onClick={scrollToBooking}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book a Test
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8"
                onClick={handleCall}
              >
                <PhoneCall className="w-5 h-5 mr-2" />
                Call Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8"
                onClick={handleDirections}
              >
                <Navigation className="w-5 h-5 mr-2" />
                Get Directions
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img 
                src={heroImage} 
                alt="Modern pathology laboratory with advanced diagnostic equipment"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              
              {/* Trust Badge */}
              <div className="absolute top-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Badge className="h-8 w-8 text-secondary" />
                    <div>
                      <p className="font-bold text-secondary text-lg">5+ Years</p>
                      <p className="text-sm text-foreground-secondary">Trusted</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">1K+</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Happy Patients</p>
                  <p className="text-sm text-foreground-secondary">Trusted by families</p>
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