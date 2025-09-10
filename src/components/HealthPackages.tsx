import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Star, Calendar, Home, Users, Heart } from "lucide-react";

const HealthPackages = () => {
  const packages = [
    {
      name: "Blood Tests Package",
      currentPrice: "Starting ₹200",
      originalPrice: null,
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
      fasting: "10-hour fasting required",
      popular: false
    },
    {
      name: "Specialized Tests",
      currentPrice: "Starting ₹500",
      originalPrice: null,
      description: "Advanced diagnostic tests for specific health conditions",
      icon: Heart,
      features: [
        "Thyroid Function Test - ₹500",
        "Diabetes Panel - ₹700",
        "Cardiac Risk Assessment - ₹1200",
        "Sample collection at home",
        "Reports via email/WhatsApp"
      ],
      fasting: "Sample collection at home, reports via email/WhatsApp",
      popular: true
    },
    {
      name: "Infection Screening",
      currentPrice: "Starting ₹400",
      originalPrice: null,
      description: "Comprehensive infection and disease screening with confidential testing",
      icon: Users,
      features: [
        "COVID-19 RT-PCR - ₹900",
        "Hepatitis Panel - ₹900", 
        "HIV Testing - ₹400",
        "Confidential testing with secure report delivery"
      ],
      fasting: "Confidential testing with secure report delivery",
      popular: false
    },
    {
      name: "Comprehensive Health Packages",
      currentPrice: "Starting ₹1000",
      originalPrice: null,
      description: "Complete health assessment with consultation",
      icon: CheckCircle,
      features: [
        "Basic Health Checkup - ₹1000 (25+ tests)",
        "Executive Health Package - ₹1500 (50+ tests)", 
        "Senior Citizen Package - ₹1200 (40+ tests)",
        "Complete health assessment with consultation"
      ],
      fasting: "Complete health assessment with consultation",
      popular: false
    }
  ];

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="packages" className="py-16 lg:py-20 bg-gradient-to-b from-background via-medical-blue/3 to-medical-green/5">
      <div className="mobile-container">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-medical-blue/15 to-medical-green/15 text-medical-blue px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-medical-blue/20">
            <Heart className="w-5 h-5" />
            Professional Health Services
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Home Healthcare </span>
            <span className="bg-gradient-to-r from-medical-blue via-medical-green to-medical-purple bg-clip-text text-transparent font-extrabold">
              Packages
            </span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-4xl mx-auto leading-relaxed">
            Professional diagnostic services delivered to your doorstep with expert care and fast, reliable results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon;
            return (
              <div
                key={index} 
                className={`relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                  pkg.popular 
                    ? "border-2 border-medical-blue ring-2 ring-medical-blue/20 shadow-2xl" 
                    : "border border-medical-blue/20 hover:border-medical-blue/40"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-medical-blue to-medical-green text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                      <Star className="h-4 w-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-medical-blue to-medical-green rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{pkg.description}</p>
                  </div>

                  <div className="text-center py-4">
                    <div className="text-3xl font-bold bg-gradient-to-r from-medical-green to-medical-blue bg-clip-text text-transparent">
                      {pkg.currentPrice}
                    </div>
                  </div>

                  <div className="bg-medical-blue/5 rounded-xl p-4 border border-medical-blue/10">
                    <p className="text-sm text-gray-700 font-medium text-center">{pkg.fasting}</p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-gray-800 text-center border-b border-medical-blue/20 pb-2">Package Includes:</h4>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3 text-sm">
                          <CheckCircle className="h-5 w-5 text-medical-green mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    className={`w-full py-4 font-bold text-lg rounded-xl transition-all duration-300 ${
                      pkg.popular 
                        ? "bg-gradient-to-r from-medical-blue to-medical-green hover:shadow-lg hover:scale-105" 
                        : "bg-gradient-to-r from-medical-green to-medical-blue hover:shadow-lg hover:scale-105"
                    }`}
                    onClick={scrollToBooking}
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Service
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