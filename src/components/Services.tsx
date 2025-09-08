import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  TestTube, 
  Users, 
  Heart, 
  Home,
  CheckCircle,
  Phone,
  Calendar,
  Stethoscope,
  PhoneCall,
  HeartHandshake
} from "lucide-react";

const Services = () => {
  const [activeTab, setActiveTab] = useState("pathology");

  const tabs = [
    { id: "pathology", label: "Sample Collection", icon: TestTube },
    { id: "nursing", label: "Home Nursing", icon: Users },
    { id: "physiotherapy", label: "Physiotherapy", icon: Heart },
    { id: "equipment", label: "Medical Equipment", icon: Stethoscope },
    { id: "teleconsult", label: "Teleconsultation", icon: PhoneCall }
  ];

  const pathologyServices = [
    {
      category: "Blood Tests at Home",
      tests: ["CBC", "Sugar Tests", "Lipid Profile", "Liver Function", "Kidney Function", "Thyroid Profile"]
    },
    {
      category: "Specialized Tests",
      tests: ["HbA1c", "Vitamin D", "Vitamin B12", "Cardiac Markers", "Tumor Markers"]
    },
    {
      category: "Infection Screening",
      tests: ["COVID-19 RT-PCR", "Dengue", "Malaria", "Typhoid", "Hepatitis Profile"]
    },
    {
      category: "Health Packages",
      tests: ["Full Body Check", "Diabetes Package", "Heart Health", "Senior Citizen Package"]
    }
  ];

  const nursingServices = [
    "Post-operative care at home",
    "Injection and IV administration", 
    "Wound dressing and care",
    "Elderly care assistance",
    "Medication management",
    "Vital signs monitoring"
  ];

  const physiotherapyServices = [
    "Post-stroke rehabilitation",
    "Joint pain and mobility therapy",
    "Sports injury recovery",
    "Elderly fitness programs",
    "Posture correction exercises",
    "Pain management techniques"
  ];

  const medicalEquipment = [
    "Oxygen concentrators",
    "Hospital beds",
    "Wheelchairs and walkers",
    "Blood pressure monitors",
    "Nebulizers",
    "Patient lifting aids"
  ];

  const teleconsultServices = [
    "General physician consultation",
    "Specialist doctor sessions",
    "Follow-up consultations",
    "Prescription renewals",
    "Health monitoring guidance",
    "Emergency medical advice"
  ];

  const homeCollectionAreas = [
    "Ayodhya Bypass & surrounding areas",
    "Indus Park & nearby localities", 
    "Ganesh Galaxy City region",
    "Kolar Road area",
    "MP Nagar zones",
    "Berasia Road vicinity"
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "pathology":
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Home Sample Collection Services</h3>
              <p className="text-foreground-secondary mb-6">
                Professional sample collection at your doorstep with trained phlebotomists and 
                proper safety protocols. Reports delivered digitally within 24 hours.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {pathologyServices.map((category, index) => (
                <Card key={index} className="p-6 bg-surface-elevated hover:shadow-lg transition-shadow">
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
            <div className="mt-8">
              <Card className="p-6 bg-gradient-accent">
                <h4 className="text-lg font-semibold text-foreground mb-4">Coverage Areas in Bhopal</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {homeCollectionAreas.map((area, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-foreground-secondary">{area}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        );

      case "nursing":
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Professional Home Nursing Care</h3>
              <p className="text-foreground-secondary mb-6">
                Experienced nurses providing comprehensive healthcare services at home. 
                Personalized care plans tailored to your specific medical needs.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 bg-surface-elevated">
                <h4 className="text-lg font-semibold text-foreground mb-4">Available Nursing Services</h4>
                <ul className="space-y-3">
                  {nursingServices.map((service, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span className="text-foreground-secondary">{service}</span>
                    </li>
                  ))}
                </ul>
              </Card>
              <Card className="p-6 bg-gradient-primary text-white">
                <h4 className="text-lg font-semibold mb-4">Why Choose Our Nurses?</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Registered and experienced professionals</li>
                  <li>• Proper infection control protocols</li>
                  <li>• Flexible scheduling as per your needs</li>
                  <li>• Regular health monitoring and updates</li>
                  <li>• Compassionate and patient-centered care</li>
                  <li>• 24/7 emergency support available</li>
                </ul>
              </Card>
            </div>
          </div>
        );

      case "physiotherapy":
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Physiotherapy at Home</h3>
              <p className="text-foreground-secondary mb-6">
                Professional physiotherapy services in the comfort of your home. 
                Customized treatment plans for faster recovery and improved mobility.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 bg-surface-elevated">
                <h4 className="text-lg font-semibold text-foreground mb-4">Physiotherapy Services</h4>
                <ul className="space-y-3">
                  {physiotherapyServices.map((service, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-secondary">{service}</span>
                    </li>
                  ))}
                </ul>
              </Card>
              <Card className="p-6 bg-gradient-accent">
                <h4 className="text-lg font-semibold text-foreground mb-4">Treatment Process</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm">1</div>
                    <div>
                      <p className="font-medium text-foreground">Initial Assessment</p>
                      <p className="text-sm text-foreground-secondary">Comprehensive evaluation at home</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm">2</div>
                    <div>
                      <p className="font-medium text-foreground">Custom Treatment Plan</p>
                      <p className="text-sm text-foreground-secondary">Tailored therapy schedule</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm">3</div>
                    <div>
                      <p className="font-medium text-foreground">Regular Sessions</p>
                      <p className="text-sm text-foreground-secondary">Professional therapy at home</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm">4</div>
                    <div>
                      <p className="font-medium text-foreground">Progress Monitoring</p>
                      <p className="text-sm text-foreground-secondary">Regular evaluation and adjustments</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        );

      case "equipment":
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Medical Equipment Rental</h3>
              <p className="text-foreground-secondary mb-6">
                High-quality medical equipment available for rent with delivery and setup at your home. 
                Affordable rates with maintenance support included.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 bg-surface-elevated">
                <h4 className="text-lg font-semibold text-foreground mb-4">Available Equipment</h4>
                <ul className="space-y-3">
                  {medicalEquipment.map((equipment, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span className="text-foreground-secondary">{equipment}</span>
                    </li>
                  ))}
                </ul>
              </Card>
              <Card className="p-6 bg-gradient-primary text-white">
                <h4 className="text-lg font-semibold mb-4">Rental Benefits</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Free home delivery and setup</li>
                  <li>• Regular maintenance included</li>
                  <li>• Flexible rental periods</li>
                  <li>• 24/7 technical support</li>
                  <li>• Sanitized and safety-checked equipment</li>
                  <li>• Cost-effective compared to purchase</li>
                </ul>
              </Card>
            </div>
          </div>
        );

      case "teleconsult":
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Teleconsultation Services</h3>
              <p className="text-foreground-secondary mb-6">
                Connect with qualified doctors from the comfort of your home. 
                Video consultations, prescription services, and follow-up care available.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 bg-surface-elevated">
                <h4 className="text-lg font-semibold text-foreground mb-4">Consultation Services</h4>
                <ul className="space-y-3">
                  {teleconsultServices.map((service, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span className="text-foreground-secondary">{service}</span>
                    </li>
                  ))}
                </ul>
              </Card>
              <Card className="p-6 bg-gradient-accent">
                <h4 className="text-lg font-semibold text-foreground mb-4">How It Works</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm">1</div>
                    <div>
                      <p className="font-medium text-foreground">Book Appointment</p>
                      <p className="text-sm text-foreground-secondary">Schedule via call or WhatsApp</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm">2</div>
                    <div>
                      <p className="font-medium text-foreground">Video Consultation</p>
                      <p className="text-sm text-foreground-secondary">Connect with qualified doctors</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm">3</div>
                    <div>
                      <p className="font-medium text-foreground">Digital Prescription</p>
                      <p className="text-sm text-foreground-secondary">Receive prescription digitally</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm">4</div>
                    <div>
                      <p className="font-medium text-foreground">Follow-up Care</p>
                      <p className="text-sm text-foreground-secondary">Regular health monitoring</p>
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
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Home Healthcare Services</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-foreground-secondary max-w-2xl mx-auto px-4">
            Comprehensive healthcare services delivered to your doorstep with professional care and modern technology
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12 px-2">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-xs sm:text-sm md:text-base touch-button ${
                  activeTab === tab.id 
                    ? "bg-primary hover:bg-primary-hover text-primary-foreground" 
                    : "border-border text-foreground hover:bg-accent"
                }`}
              >
                <IconComponent className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
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
            <div className="flex items-center justify-center mb-4">
              <HeartHandshake className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-2xl font-semibold text-foreground">
                Need Personalized Healthcare at Home?
              </h3>
            </div>
            <p className="text-foreground-secondary mb-6 max-w-2xl mx-auto">
              Our experienced healthcare professionals are ready to provide quality care at your doorstep. 
              Contact us to discuss your specific healthcare needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary-hover text-secondary-foreground"
                onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Service
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open("tel:+917024832751", "_self")}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call for Consultation
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;