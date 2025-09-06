import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  TestTube, 
  X as XRay, 
  Heart, 
  Home,
  CheckCircle,
  Phone,
  Calendar
} from "lucide-react";

const Services = () => {
  const [activeTab, setActiveTab] = useState("pathology");

  const tabs = [
    { id: "pathology", label: "Pathology", icon: TestTube },
    { id: "xray", label: "Digital X-Ray", icon: XRay },
    { id: "ecg", label: "ECG", icon: Heart },
    { id: "home", label: "Home Collection", icon: Home }
  ];

  const pathologyTests = [
    {
      category: "Routine Tests",
      tests: ["CBC", "ESR", "Blood Sugar", "Lipid Profile", "Liver Function", "Kidney Function"]
    },
    {
      category: "Diabetes Tests",
      tests: ["HbA1c", "Fasting Sugar", "Post-meal Sugar", "Random Sugar"]
    },
    {
      category: "Hormones",
      tests: ["Vitamin D", "Vitamin B12", "Testosterone", "Thyroid Profile"]
    },
    {
      category: "Infection Markers",
      tests: ["CRP", "Dengue NS1/IgG/IgM", "Widal Test", "Malaria"]
    }
  ];

  const xrayServices = [
    "Chest X-ray",
    "Cervical Spine",
    "Lumbar Spine", 
    "Abdomen",
    "Upper & Lower Limbs",
    "Skull & Joints"
  ];

  const ecgFeatures = [
    "12-lead resting ECG service",
    "Prompt printouts and comfortable environment",
    "Technician guidance and digital report delivery",
    "Preparation instructions included"
  ];

  const homeCollectionAreas = [
    "Ayodhya Bypass",
    "Indus Park", 
    "Ganesh Galaxy City",
    "Surrounding areas in Bhopal"
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "pathology":
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Comprehensive Pathology Services</h3>
              <p className="text-foreground-secondary mb-6">
                Advanced laboratory testing with state-of-the-art equipment and experienced technicians 
                for accurate and reliable results.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {pathologyTests.map((category, index) => (
                <Card key={index} className="p-6 bg-surface-elevated">
                  <h4 className="text-lg font-semibold text-foreground mb-3">{category.category}</h4>
                  <ul className="space-y-2">
                    {category.tests.map((test, testIndex) => (
                      <li key={testIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        <span className="text-foreground-secondary">{test}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        );

      case "xray":
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Digital X-Ray Services</h3>
              <p className="text-foreground-secondary mb-6">
                State-of-the-art digital imaging technology providing clear, high-quality images with 
                instant delivery via WhatsApp and email.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 bg-surface-elevated">
                <h4 className="text-lg font-semibold text-foreground mb-4">Available X-Ray Services</h4>
                <ul className="space-y-3">
                  {xrayServices.map((service, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span className="text-foreground-secondary">{service}</span>
                    </li>
                  ))}
                </ul>
              </Card>
              <Card className="p-6 bg-gradient-accent">
                <h4 className="text-lg font-semibold text-foreground mb-4">Digital X-Ray Benefits</h4>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-foreground-secondary">Clear digital films</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-foreground-secondary">Instant WhatsApp delivery</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-foreground-secondary">Email report delivery</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-foreground-secondary">No radiation exposure delays</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        );

      case "ecg":
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">ECG Services</h3>
              <p className="text-foreground-secondary mb-6">
                Professional electrocardiogram services with experienced technicians and comfortable 
                environment for accurate cardiac monitoring.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 bg-surface-elevated">
                <h4 className="text-lg font-semibold text-foreground mb-4">ECG Features</h4>
                <ul className="space-y-3">
                  {ecgFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
              <Card className="p-6 bg-gradient-primary text-white">
                <h4 className="text-lg font-semibold mb-4">When You Need ECG</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Chest pain or discomfort</li>
                  <li>• Irregular heartbeat</li>
                  <li>• Heart palpitations</li>
                  <li>• Routine health checkups</li>
                  <li>• Pre-surgical screening</li>
                  <li>• Monitoring heart conditions</li>
                </ul>
              </Card>
            </div>
          </div>
        );

      case "home":
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Home Collection Service</h3>
              <p className="text-foreground-secondary mb-6">
                Convenient sample collection at your doorstep with trained phlebotomists and 
                proper safety protocols.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 bg-surface-elevated">
                <h4 className="text-lg font-semibold text-foreground mb-4">Coverage Areas</h4>
                <ul className="space-y-3">
                  {homeCollectionAreas.map((area, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span className="text-foreground-secondary">{area}</span>
                    </li>
                  ))}
                </ul>
              </Card>
              <Card className="p-6 bg-gradient-accent">
                <h4 className="text-lg font-semibold text-foreground mb-4">Collection Process</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm">1</div>
                    <div>
                      <p className="font-medium text-foreground">Call/WhatsApp</p>
                      <p className="text-sm text-foreground-secondary">Book your appointment</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm">2</div>
                    <div>
                      <p className="font-medium text-foreground">Slot Confirmation</p>
                      <p className="text-sm text-foreground-secondary">Receive confirmation</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm">3</div>
                    <div>
                      <p className="font-medium text-foreground">Technician Visit</p>
                      <p className="text-sm text-foreground-secondary">Professional sample collection</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm">4</div>
                    <div>
                      <p className="font-medium text-foreground">Report Delivery</p>
                      <p className="text-sm text-foreground-secondary">Digital delivery via email/WhatsApp</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
            Complete diagnostic services under one roof with advanced technology and experienced professionals
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "outline"}
                size="lg"
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 ${
                  activeTab === tab.id 
                    ? "bg-primary hover:bg-primary-hover text-primary-foreground" 
                    : "border-border text-foreground hover:bg-accent"
                }`}
              >
                <IconComponent className="w-5 h-5 mr-2" />
                {tab.label}
              </Button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="mt-8">
          {renderTabContent()}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <Card className="p-8 bg-gradient-accent">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Need Help Choosing the Right Test?
            </h3>
            <p className="text-foreground-secondary mb-6 max-w-2xl mx-auto">
              Our experienced team can help you select the appropriate tests based on your health needs 
              and doctor's recommendations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary-hover text-secondary-foreground"
                onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book a Test
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open("tel:+919876543210", "_self")}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call for Guidance
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;