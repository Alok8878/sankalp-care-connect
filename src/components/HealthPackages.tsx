import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Star, Calendar, Home, Users, Heart } from "lucide-react";

const HealthPackages = () => {
  const packages = [
    {
      name: "Blood Tests Package",
      currentPrice: 800,
      originalPrice: 1600,
      description: "Essential blood tests with home collection service",
      icon: Home,
      features: [
        "Complete Blood Count (CBC) - ₹200",
        "Lipid Profile - ₹450",
        "Liver Function Test - ₹500",
        "Kidney Function Test - ₹450",
        "Home collection included",
        "Digital report within 2 hours"
      ],
      fasting: "10 hours fasting required",
      popular: false
    },
    {
      name: "Specialized Tests",
      currentPrice: 1200,
      originalPrice: 2400,
      description: "Advanced diagnostic tests for specific conditions",
      icon: Users,
      features: [
        "Thyroid Function Test - ₹500",
        "Diabetes Panel - ₹700",
        "Cardiac Risk Assessment - ₹1200",
        "Sample collection at home",
        "Reports via email/WhatsApp",
        "Expert consultation included"
      ],
      fasting: "No fasting required",
      popular: true
    },
    {
      name: "Infection Screening",
      currentPrice: 900,
      originalPrice: 2200,
      description: "Comprehensive infection and disease screening",
      icon: Heart,
      features: [
        "COVID-19 RT-PCR - ₹900",
        "Hepatitis Panel - ₹900", 
        "HIV Testing - ₹400",
        "Confidential testing process",
        "Secure report delivery",
        "Home sample collection"
      ],
      fasting: "No fasting required",
      popular: false
    },
    {
      name: "Comprehensive Health Packages",
      currentPrice: 1500,
      originalPrice: 3700,
      description: "Complete health assessment packages",
      icon: Users,
      features: [
        "Basic Health Checkup - ₹1000 (25+ tests)",
        "Executive Health Package - ₹1500 (50+ tests)", 
        "Senior Citizen Package - ₹1200 (40+ tests)",
        "Complete health assessment",
        "Doctor consultation included",
        "Detailed health report"
      ],
      fasting: "8-12 hours recommended",
      popular: false
    }
  ];

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="packages" className="py-16 lg:py-20 bg-gradient-to-b from-background to-medical-blue/5">
      <div className="mobile-container">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-medical-blue/10 text-medical-blue px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Heart className="w-4 h-4" />
            Health Packages
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Home Healthcare <span className="medical-gradient-text">Packages</span>
          </h2>
          <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
            Comprehensive diagnostic packages designed for your health needs, delivered with professional care at your doorstep
          </p>
        </div>

        <div className="mobile-grid lg:grid-cols-4">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon;
            return (
              <div
                key={index} 
                className={`package-card glass-card p-6 relative hover-lift stagger-item ${
                  pkg.popular 
                    ? "border-2 border-medical-blue shadow-glow" 
                    : "border border-border/20"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-accent-orange to-accent-orange-light text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1 popular-badge">
                      <Star className="h-3 w-3" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-medical-blue to-medical-blue-dark rounded-xl flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground leading-tight">{pkg.name}</h3>
                    </div>
                  </div>
                  
                  <p className="text-foreground-muted leading-relaxed">{pkg.description}</p>

                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-medical-green">₹{pkg.currentPrice}</span>
                    <span className="text-lg text-foreground-muted line-through">₹{pkg.originalPrice}</span>
                  </div>

                  <div className="bg-medical-blue/5 rounded-lg p-3">
                    <span className="text-sm font-medium text-foreground">Preparation: </span>
                    <span className="text-sm text-foreground-secondary">{pkg.fasting}</span>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Includes:</h4>
                    <ul className="space-y-2">
                      {pkg.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-medical-green mt-0.5 flex-shrink-0" />
                          <span className="text-foreground-secondary">{feature}</span>
                        </li>
                      ))}
                      {pkg.features.length > 4 && (
                        <li className="text-sm text-medical-blue font-medium">
                          + {pkg.features.length - 4} more services
                        </li>
                      )}
                    </ul>
                  </div>

                  <Button 
                    className={`w-full touch-button ${
                      pkg.popular 
                        ? "bg-gradient-to-r from-accent-orange to-accent-orange-light hover:shadow-glow" 
                        : "bg-gradient-to-r from-medical-blue to-medical-blue-dark hover:shadow-glow"
                    }`}
                    onClick={scrollToBooking}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Health Checkup Now
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="glass-card p-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-medical-green" />
              <h3 className="text-xl font-semibold text-foreground">Personalized Healthcare Solutions</h3>
            </div>
            <p className="text-foreground-secondary leading-relaxed">
              <span className="font-medium text-foreground">Note:</span> All packages can be customized based on your specific health requirements. 
              Professional home collection service, digital reports within 2 hours, and expert consultations available 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-medical-green to-medical-green-light hover:shadow-glow touch-button"
                onClick={scrollToBooking}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Custom Package
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="glass-border hover:bg-medical-blue/10 touch-button"
              >
                <Users className="w-5 h-5 mr-2" />
                Consult Expert
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthPackages;