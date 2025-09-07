import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <Button onClick={goBack} variant="outline" className="mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
        
        <div className="bg-surface-elevated rounded-lg p-8 shadow-sm">
          <h1 className="text-3xl font-bold text-foreground mb-6">Privacy Policy</h1>
          <p className="text-foreground-secondary mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="space-y-6 text-foreground-secondary">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Information We Collect</h2>
              <p className="mb-3">
                At Sankalp Pathology Lab, we collect information you provide directly to us, such as when you:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Book a home healthcare service</li>
                <li>Contact us for inquiries</li>
                <li>Request medical consultations</li>
                <li>Subscribe to our newsletter</li>
              </ul>
              <p className="mt-3">
                This may include your name, phone number, email address, home address, medical information relevant to services, and payment information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">How We Use Your Information</h2>
              <p className="mb-3">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Provide and deliver home healthcare services</li>
                <li>Process appointments and service bookings</li>
                <li>Communicate with you about services and appointments</li>
                <li>Send you service reminders and health information</li>
                <li>Improve our services and customer experience</li>
                <li>Comply with legal and regulatory requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Information Sharing</h2>
              <p className="mb-3">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>To healthcare professionals providing your care</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information against unauthorized access, 
                alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Your Rights</h2>
              <p className="mb-3">You have the right to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt out of communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at:
                <br />
                Phone: +91 70248 32751
                <br />
                Email: sankalppathologylab@gmail.com
                <br />
                Address: Front of, Ganesh Galaxy City, Ayodhya Bypass Road, Indus Park, Phase 2, Bhopal, Madhya Pradesh 462041
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;