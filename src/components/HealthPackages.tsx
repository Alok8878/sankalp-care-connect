import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Star, Calendar, Home, Users, Heart } from "lucide-react";

const HealthPackages = () => {
  const packages = [
    {
      name: "Home Wellness Check",
      currentPrice: 1299,
      originalPrice: 1800,
      description: "Essential health screening at your home comfort",
      icon: Home,
      features: [
        "Home sample collection",
        "Complete Blood Count (CBC)",
        "Blood Sugar & HbA1c",
        "Lipid Profile assessment",
        "Kidney Function Test",
        "Digital report delivery"
      ],
      fasting: "10-12 hours",
      popular: false
    },
    {
      name: "Complete Home Care Package",
      currentPrice: 2999,
      originalPrice: 4500,
      description: "Most comprehensive home healthcare service",
      icon: Users,
      features: [
        "All Home Wellness tests",
        "Home nursing consultation",
        "Physiotherapy assessment",
        "Thyroid & Vitamin profile",
        "Cardiac risk evaluation",
        "Monthly health monitoring",
        "24/7 teleconsultation access",
        "Medical equipment on rent"
      ],
      fasting: "10-12 hours",
      popular: true
    },
    {
      name: "Senior Care at Home",
      currentPrice: 2199,
      originalPrice: 3200,
      description: "Specialized healthcare package for elderly",
      icon: Heart,
      features: [
        "Comprehensive health screening",
        "Diabetes & BP monitoring",
        "Mobility assessment",
        "Home nursing visits (2)",
        "Medicine management guidance",
        "Emergency response planning"
      ],
      fasting: "8-10 hours",
      popular: false
    },
    {
      name: "Basic Home Service",
      currentPrice: 699,
      originalPrice: 999,
      description: "Starter home healthcare package",
      icon: Home,
      features: [
        "Home sample collection",
        "Basic blood tests (CBC)",
        "Blood sugar monitoring", 
        "Blood pressure check",
        "Digital report delivery"
      ],
      fasting: "No fasting required",
      popular: false
    }
  ];

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="packages" className="py-16 lg:py-24 bg-gradient-to-br from-medical-blue-light to-medical-green-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Home Healthcare <span className="bg-gradient-primary bg-clip-text text-transparent">Packages</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
            Comprehensive home healthcare packages designed for different needs and delivered at your doorstep
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon;
            return (
              <Card 
                key={index} 
                className={`package-card p-6 relative hover:shadow-xl transition-all duration-300 hover:-translate-y-2 stagger-item ${
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
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{pkg.name}</h3>
                    </div>
                  </div>
                  
                  <p className="text-sm text-foreground-secondary">{pkg.description}</p>

                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-bold text-secondary">₹{pkg.currentPrice}</span>
                    <span className="text-lg text-foreground-muted line-through">₹{pkg.originalPrice}</span>
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

        <div className="mt-8 text-center">
          <Card className="p-6 bg-white/80 backdrop-blur-sm max-w-2xl mx-auto">
            <p className="text-foreground-secondary text-sm">
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