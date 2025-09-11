import { Card } from "@/components/ui/card";
import { 
  Shield, 
  Zap, 
  Home, 
  Building2, 
  Heart, 
  DollarSign 
} from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Strict quality checks and accurate results with state-of-the-art equipment and certified processes."
    },
    {
      icon: Zap,
      title: "Fast Reports",
      description: "24-hour turnaround time for most tests with digital delivery via WhatsApp and email."
    },
    {
      icon: Home,
      title: "Home Collection",
      description: "Convenient sample collection at your doorstep across Bhopal with trained phlebotomists."
    },
    {
      icon: Building2,
      title: "Complete Services",
      description: "Pathology, Digital X-Ray & ECG under one roof for comprehensive health checkups."
    },
    {
      icon: Heart,
      title: "Comfortable Facilities",
      description: "Clean, modern, wheelchair accessible facilities with comfortable waiting areas."
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "No hidden charges, affordable rates with clear pricing and package options."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-background via-surface/50 to-background" aria-labelledby="features-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 id="features-heading" className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">Sankalp Care</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-2xl mx-auto" role="description">
            Trusted healthcare partner for families across Bhopal. Professional medical services, home sample collection, nursing care, physiotherapy, and teleconsultation with experienced healthcare professionals and modern medical technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list" aria-label="Key features and benefits">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-surface-elevated border-border"
                role="listitem"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center" aria-hidden="true">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-foreground-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;