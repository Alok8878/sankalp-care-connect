import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Star, Calendar } from "lucide-react";

const HealthPackages = () => {
  const packages = [
    {
      name: "Basic Health Check",
      currentPrice: 899,
      originalPrice: 1200,
      description: "Essential health screening for routine checkups",
      features: [
        "Complete Blood Count (CBC)",
        "Blood Sugar (Fasting)",
        "Lipid Profile",
        "Kidney Function Test",
        "Liver Function Test"
      ],
      fasting: "10-12 hours",
      popular: false
    },
    {
      name: "Comprehensive Full Body Check",
      currentPrice: 2499,
      originalPrice: 3500,
      description: "Most popular complete health checkup package",
      features: [
        "All Basic Health Check tests",
        "Thyroid Profile (T3, T4, TSH)",
        "Vitamin D & B12",
        "HbA1c (Diabetes monitoring)",
        "Cardiac Risk Markers",
        "Complete Urine Analysis",
        "Chest X-Ray",
        "ECG"
      ],
      fasting: "10-12 hours",
      popular: true
    },
    {
      name: "Diabetes Care Profile",
      currentPrice: 1299,
      originalPrice: 1800,
      description: "Specialized package for diabetes monitoring and care",
      features: [
        "Fasting Blood Sugar",
        "Post Meal Blood Sugar",
        "HbA1c (3-month average)",
        "Lipid Profile",
        "Kidney Function Test",
        "Urine Analysis"
      ],
      fasting: "10-12 hours",
      popular: false
    },
    {
      name: "Thyroid Profile",
      currentPrice: 699,
      originalPrice: 999,
      description: "Comprehensive thyroid function assessment",
      features: [
        "T3 (Triiodothyronine)",
        "T4 (Thyroxine)",
        "TSH (Thyroid Stimulating Hormone)",
        "Free T3",
        "Free T4"
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
            Health <span className="bg-gradient-primary bg-clip-text text-transparent">Packages</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
            Comprehensive health checkup packages designed for different health needs and budgets
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`p-6 relative hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                pkg.popular 
                  ? "bg-white border-2 border-primary shadow-lg" 
                  : "bg-white/90 backdrop-blur-sm"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="h-3 w-3" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{pkg.name}</h3>
                  <p className="text-sm text-foreground-secondary">{pkg.description}</p>
                </div>

                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl font-bold text-secondary">₹{pkg.currentPrice}</span>
                  <span className="text-lg text-foreground-muted line-through">₹{pkg.originalPrice}</span>
                </div>

                <div className="text-sm text-foreground-secondary">
                  <span className="font-medium">Fasting:</span> {pkg.fasting}
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
                        + {pkg.features.length - 4} more tests
                      </li>
                    )}
                  </ul>
                </div>

                <Button 
                  className={`w-full ${
                    pkg.popular 
                      ? "bg-secondary hover:bg-secondary-hover text-secondary-foreground" 
                      : "bg-primary hover:bg-primary-hover text-primary-foreground"
                  }`}
                  onClick={scrollToBooking}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Now
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Card className="p-6 bg-white/80 backdrop-blur-sm max-w-2xl mx-auto">
            <p className="text-foreground-secondary text-sm">
              <span className="font-medium text-foreground">Note:</span> Package contents may vary per doctor's advice. 
              Home collection available for all packages. Reports delivered digitally within 24 hours.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HealthPackages;