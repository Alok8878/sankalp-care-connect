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
    <section id="packages" className="py-16 lg:py-24 bg-gradient-to-br from-medical-blue-light to-medical-green-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Home Healthcare <span className="bg-gradient-primary bg-clip-text text-transparent">Packages</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-foreground-secondary max-w-2xl mx-auto px-4">
            Comprehensive home healthcare packages designed for different needs and delivered at your doorstep
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon;
            return (
              <Card 
                key={index} 
                className={`package-card p-4 sm:p-6 relative hover:shadow-xl transition-all duration-300 hover:-translate-y-2 stagger-item ${
                  pkg.popular 
                    ? "bg-white border-2 border-primary shadow-lg" 
                    : "bg-white/90 backdrop-blur-sm"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1 popular-badge">
                      <Star className="h-3 w-3" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-3">
                    <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-4 sm:h-5 w-4 sm:w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-foreground leading-tight">{pkg.name}</h3>
                    </div>
                  </div>
                  
                  <p className="text-sm text-foreground-secondary">{pkg.description}</p>

                  <div className="flex items-baseline space-x-2">
                    <span className="text-2xl sm:text-3xl font-bold text-secondary">₹{pkg.currentPrice}</span>
                    <span className="text-base sm:text-lg text-foreground-muted line-through">₹{pkg.originalPrice}</span>
                  </div>

                  <div className="text-sm text-foreground-secondary">
                    <span className="font-medium">Preparation:</span> {pkg.fasting}
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground text-sm">Includes:</h4>
                    <ul className="space-y-1">
                      {pkg.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2 text-sm">
                          <CheckCircle className="h-3 w-3 text-secondary mt-0.5 flex-shrink-0" />
                          <span className="text-foreground-secondary">{feature}</span>
                        </li>
                      ))}
                      {pkg.features.length > 4 && (
                        <li className="text-sm text-primary font-medium">
                          + {pkg.features.length - 4} more services
                        </li>
                      )}
                    </ul>
                  </div>

                  <Button 
                    className={`w-full cta-button ${
                      pkg.popular 
                        ? "bg-secondary hover:bg-secondary-hover text-secondary-foreground" 
                        : "bg-primary hover:bg-primary-hover text-primary-foreground"
                    }`}
                    onClick={scrollToBooking}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Service
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-6 sm:mt-8 text-center">
          <Card className="p-4 sm:p-6 bg-white/80 backdrop-blur-sm max-w-2xl mx-auto">
            <p className="text-foreground-secondary text-xs sm:text-sm">
              <span className="font-medium text-foreground">Note:</span> Service packages can be customized per your healthcare needs. 
              All services delivered at your home. Digital reports and consultations available 24/7.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HealthPackages;