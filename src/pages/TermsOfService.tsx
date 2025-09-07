import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const TermsOfService = () => {
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
          <h1 className="text-3xl font-bold text-foreground mb-6">Terms of Service</h1>
          <p className="text-foreground-secondary mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="space-y-6 text-foreground-secondary">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Acceptance of Terms</h2>
              <p>
                By accessing and using Sankalp Care Connect services, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Service Description</h2>
              <p className="mb-3">
                Sankalp Care Connect provides home healthcare services including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Home sample collection for diagnostic tests</li>
                <li>Home nursing care services</li>
                <li>Physiotherapy at home</li>
                <li>Medical equipment rental</li>
                <li>Teleconsultation services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Appointment and Booking</h2>
              <p className="mb-3">
                By booking our services, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Provide accurate and complete information</li>
                <li>Be available at the scheduled time and location</li>
                <li>Provide a safe and accessible environment for our staff</li>
                <li>Pay applicable fees as agreed upon</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Cancellation Policy</h2>
              <p>
                Cancellations must be made at least 2 hours before the scheduled appointment time. 
                Late cancellations may be subject to charges. Emergency cancellations will be considered on a case-by-case basis.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Payment Terms</h2>
              <p>
                Payment is due at the time of service unless other arrangements have been made. 
                We accept cash, digital payments, and insurance (where applicable). 
                Prices are subject to change with prior notice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Limitation of Liability</h2>
              <p>
                Sankalp Care Connect provides healthcare services to the best of our ability. 
                However, we are not liable for any indirect, incidental, or consequential damages 
                arising from the use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Medical Disclaimer</h2>
              <p>
                Our services are not a substitute for professional medical advice, diagnosis, or treatment. 
                Always seek the advice of your physician or other qualified health provider with any questions 
                you may have regarding a medical condition.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Contact Information</h2>
              <p>
                For questions about these Terms of Service, please contact us at:
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

export default TermsOfService;