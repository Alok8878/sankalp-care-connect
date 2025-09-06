import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  Mail, 
  Car,
  Accessibility,
  AlertTriangle
} from "lucide-react";

const Contact = () => {
  const handleDirections = () => {
    window.open("https://maps.google.com/?q=Sankalp+Pathology+Lab+Bhopal", "_blank");
  };

  const handleCall = () => {
    window.open("tel:+919876543210", "_self");
  };

  const handleEmail = () => {
    window.open("mailto:info@sankalplab.com", "_self");
  };

  const operatingHours = [
    { day: "Monday - Saturday", time: "7:30 AM - 9:00 PM" },
    { day: "Sunday", time: "7:30 AM - 1:00 PM" },
    { day: "Public Holidays", time: "8:00 AM - 12:00 PM" }
  ];

  return (
    <section id="contact" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Contact & <span className="bg-gradient-primary bg-clip-text text-transparent">Timings</span>
          </h2>
          <p className="text-xl text-foreground-secondary">
            Visit us or get in touch for any queries about our services
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-6 bg-surface-elevated">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                <MapPin className="h-5 w-5 text-primary mr-2" />
                Visit Our Laboratory
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Sankalp Pathology Lab</h4>
                  <p className="text-foreground-secondary">
                    Near Ayodhya Bypass<br />
                    Indus Park Area<br />
                    Bhopal, Madhya Pradesh 462021
                  </p>
                  <p className="text-sm text-foreground-muted mt-2">
                    <strong>Landmark:</strong> Opposite City Hospital, Near Ganesh Galaxy City
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button onClick={handleDirections} className="bg-primary hover:bg-primary-hover text-primary-foreground">
                    <Navigation className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                  <Button onClick={handleCall} variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                  <Button onClick={handleEmail} variant="outline">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </Button>
                </div>

                <div className="border-t border-border pt-4 mt-6">
                  <div className="flex items-start space-x-3 mb-3">
                    <Car className="h-5 w-5 text-medical-green mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Parking Available</p>
                      <p className="text-sm text-foreground-secondary">Free parking space for patients</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Accessibility className="h-5 w-5 text-medical-blue mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Wheelchair Accessible</p>
                      <p className="text-sm text-foreground-secondary">Fully accessible facilities for all patients</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-surface-elevated">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                <Phone className="h-5 w-5 text-secondary mr-2" />
                Contact Information
              </h3>
              
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-foreground">Phone & WhatsApp</p>
                  <p className="text-lg text-primary font-semibold">+91 9876543210</p>
                  <p className="text-sm text-foreground-secondary">Available during operating hours</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-primary">info@sankalplab.com</p>
                  <p className="text-sm text-foreground-secondary">For general inquiries and reports</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Operating Hours & Map */}
          <div className="space-y-8">
            <Card className="p-6 bg-gradient-accent">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                <Clock className="h-5 w-5 text-medical-blue mr-2" />
                Operating Hours
              </h3>
              
              <div className="space-y-4">
                {operatingHours.map((hours, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-white/20 last:border-b-0">
                    <span className="font-medium text-foreground">{hours.day}</span>
                    <span className="text-foreground-secondary">{hours.time}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-white rounded-lg">
                <p className="text-sm text-foreground-secondary">
                  <strong className="text-foreground">Note:</strong> Holiday hours may vary. 
                  Please call ahead on festival days. Emergency services available on request.
                </p>
              </div>
            </Card>

            {/* Interactive Map Placeholder */}
            <Card className="p-6 bg-surface-elevated">
              <h3 className="text-xl font-semibold text-foreground mb-4">Location Map</h3>
              <div className="bg-gradient-to-br from-medical-blue-light to-medical-green-light rounded-lg p-8 text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="text-foreground-secondary mb-4">
                  Interactive map showing our exact location
                </p>
                <Button onClick={handleDirections} className="bg-primary hover:bg-primary-hover text-primary-foreground">
                  <Navigation className="w-4 h-4 mr-2" />
                  Open in Google Maps
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Emergency Notice */}
        <Card className="mt-12 p-6 bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 max-w-4xl mx-auto">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-semibold text-red-800 mb-2">Emergency Notice</h3>
              <p className="text-red-700">
                <strong>We are not an emergency hospital.</strong> For medical emergencies, please call{" "}
                <span className="font-bold">108</span> immediately or visit the nearest emergency department.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;