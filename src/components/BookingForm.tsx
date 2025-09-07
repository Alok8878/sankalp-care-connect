import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Upload, 
  Calendar as CalendarIcon,
  CheckCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BookingForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    testPackage: "",
    preferredDate: "",
    preferredTime: "",
    address: "",
    notes: "",
    consent: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const { toast } = useToast();

  const testOptions = [
    "Home Wellness Check - ₹1299",
    "Complete Home Care Package - ₹2999",
    "Senior Care at Home - ₹2199", 
    "Basic Home Service - ₹699",
    "Home Sample Collection",
    "Home Nursing Care",
    "Physiotherapy at Home",
    "Medical Equipment Rental",
    "Teleconsultation",
    "Blood Tests at Home",
    "Diabetes Management",
    "Elderly Care Services",
    "Post-operative Home Care",
    "Custom Service (specify in notes)"
  ];

  const timeSlots = [
    "8:00 AM - 9:00 AM",
    "9:00 AM - 10:00 AM", 
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "12:00 PM - 1:00 PM",
    "2:00 PM - 3:00 PM",
    "3:00 PM - 4:00 PM",
    "4:00 PM - 5:00 PM",
    "5:00 PM - 6:00 PM",
    "6:00 PM - 7:00 PM",
    "7:00 PM - 8:00 PM"
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile.replace(/\D/g, '').slice(-10))) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number";
    }
    
    if (!formData.testPackage) {
      newErrors.testPackage = "Please select a service or package";
    }
    
    if (!formData.consent) {
      newErrors.consent = "Please accept the terms and conditions";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Please fix the errors",
        description: "Check the form for any missing or incorrect information.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    // WhatsApp auto-send integration
    const whatsappMessage = `🏥 *NEW BOOKING - Sankalp Care Connect*

👤 Name: ${formData.fullName}
📱 Mobile: ${formData.mobile}
🔬 Service: ${formData.testPackage}
📅 Date: ${formData.preferredDate}
⏰ Time: ${formData.preferredTime}
📍 Address: ${formData.address || 'Service at clinic'}
📝 Notes: ${formData.notes || 'None'}`;

    // Auto-open WhatsApp with message
    const whatsappURL = `https://wa.me/917024832751?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Open WhatsApp after successful form submission
    window.open(whatsappURL, '_blank');

    toast({
      title: "Booking Confirmed!",
      description: "Your booking details have been sent via WhatsApp. You'll receive a confirmation soon.",
    });

    // Reset form
    setFormData({
      fullName: "",
      mobile: "",
      testPackage: "",
      preferredDate: "",
      preferredTime: "",
      address: "",
      notes: "",
      consent: false
    });

    setIsSubmitting(false);
  };

  return (
    <section id="booking" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Book Your Service</span>
            </h2>
            <p className="text-xl text-foreground-secondary">
              Schedule your home healthcare service easily and get professional care at your doorstep
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <div className="bg-gradient-primary text-white p-4 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold">Online Booking Form</h3>
                  <p className="text-sm opacity-90">Fill out the form below to book your home healthcare service</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName" className="text-foreground font-medium">Full Name *</Label>
                        <Input
                          id="fullName"
                          value={formData.fullName}
                          onChange={(e) => handleInputChange("fullName", e.target.value)}
                          required
                          className={`mt-1 ${errors.fullName ? 'border-red-500' : ''}`}
                          placeholder="Enter your full name"
                        />
                        {errors.fullName && (
                          <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                        )}
                    </div>
                    <div>
                      <Label htmlFor="mobile" className="text-foreground font-medium">Mobile Number *</Label>
                        <Input
                          id="mobile"
                          type="tel"
                          value={formData.mobile}
                          onChange={(e) => handleInputChange("mobile", e.target.value)}
                          required
                          className={`mt-1 ${errors.mobile ? 'border-red-500' : ''}`}
                          placeholder="Enter mobile number"
                        />
                        {errors.mobile && (
                          <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
                        )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="testPackage" className="text-foreground font-medium">Service/Package Selection *</Label>
                      <Select value={formData.testPackage} onValueChange={(value) => handleInputChange("testPackage", value)}>
                        <SelectTrigger className={`mt-1 h-12 bg-surface border-2 hover:border-primary/50 focus:border-primary transition-colors ${errors.testPackage ? 'border-red-500' : ''}`}>
                          <SelectValue placeholder="Select a service or package" className="text-foreground/70" />
                        </SelectTrigger>
                      <SelectContent className="max-h-60 bg-background border-2 border-border shadow-xl">
                        {testOptions.map((test, index) => (
                          <SelectItem key={index} value={test} className="hover:bg-accent/50 focus:bg-accent cursor-pointer py-3 px-4">
                            <div className="flex items-center justify-between w-full">
                              <span className="font-medium">{test}</span>
                            </div>
                          </SelectItem>
                        ))}
                        </SelectContent>
                      </Select>
                      {errors.testPackage && (
                        <p className="text-red-500 text-sm mt-1">{errors.testPackage}</p>
                      )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="preferredDate" className="text-foreground font-medium">Preferred Date</Label>
                      <Input
                        id="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                        className="mt-1"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div>
                      <Label htmlFor="preferredTime" className="text-foreground font-medium">Preferred Time</Label>
                      <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange("preferredTime", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select time slot" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((slot, index) => (
                            <SelectItem key={index} value={slot}>
                              {slot}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="address" className="text-foreground font-medium">Service Address</Label>
                    <Textarea
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      className="mt-1"
                      placeholder="Complete address for home service delivery"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="notes" className="text-foreground font-medium">Additional Notes</Label>
                    <Textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => handleInputChange("notes", e.target.value)}
                      className="mt-1"
                      placeholder="Any specific requirements or instructions"
                      rows={3}
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) => handleInputChange("consent", checked as boolean)}
                      className={`mt-1 ${errors.consent ? 'border-red-500' : ''}`}
                    />
                    <Label htmlFor="consent" className="text-sm text-foreground-secondary leading-relaxed">
                      I consent to the collection and processing of my personal and health information for 
                      diagnostic purposes. I understand the terms and conditions of the service.
                    </Label>
                  </div>
                  {errors.consent && (
                    <p className="text-red-500 text-sm mt-1">{errors.consent}</p>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-secondary hover:bg-secondary-hover text-secondary-foreground"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Booking...
                      </>
                    ) : (
                      <>
                        <CalendarIcon className="w-5 h-5 mr-2" />
                        Confirm Booking
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Quick Action Cards */}
            <div className="space-y-6">
              <Card className="p-6 bg-gradient-accent">
                <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Call Now</p>
                        <Button 
                          variant="link" 
                          className="p-0 h-auto text-primary"
                          onClick={() => window.open("tel:+917024832751", "_self")}
                        >
                          +91 70248 32751
                        </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                    <MapPin className="h-6 w-6 text-secondary" />
                    <div>
                      <p className="font-medium text-foreground">Walk-in</p>
                      <p className="text-sm text-foreground-secondary">No appointment needed</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                    <Clock className="h-6 w-6 text-medical-blue" />
                    <div>
                      <p className="font-medium text-foreground">Quick Response</p>
                      <p className="text-sm text-foreground-secondary">2hr response time</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Email Confirmation</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary mt-0.5" />
                    <p className="text-sm text-foreground-secondary">
                      Instant booking confirmation via WhatsApp
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary mt-0.5" />
                    <p className="text-sm text-foreground-secondary">
                      Service reminders before appointment
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary mt-0.5" />
                    <p className="text-sm text-foreground-secondary">
                      Digital service reports and updates
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;