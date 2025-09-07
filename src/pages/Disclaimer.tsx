import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Disclaimer = () => {
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
          <h1 className="text-3xl font-bold text-foreground mb-6">Medical Disclaimer</h1>
          <p className="text-foreground-secondary mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="space-y-6 text-foreground-secondary">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">General Medical Disclaimer</h2>
              <p>
                The information provided by Sankalp Pathology Lab is for general informational purposes only. 
                All information on our website and services is provided in good faith, however we make no 
                representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, 
                validity, reliability, availability, or completeness of any information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Not a Substitute for Professional Medical Advice</h2>
              <p>
                The content provided through our services is not intended to be a substitute for professional 
                medical advice, diagnosis, or treatment. Always seek the advice of your physician or other 
                qualified health provider with any questions you may have regarding a medical condition. 
                Never disregard professional medical advice or delay in seeking it because of something 
                you have read or received through our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Emergency Medical Situations</h2>
              <p>
                If you think you may have a medical emergency, call your doctor, go to the emergency department, 
                or call emergency services (108) immediately. Sankalp Pathology Lab does not recommend or endorse 
                any specific tests, physicians, products, procedures, opinions, or other information that may be 
                mentioned through our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Test Results and Interpretation</h2>
              <p>
                Laboratory test results should always be interpreted by a qualified healthcare professional. 
                Normal ranges may vary between laboratories, and individual results should be evaluated in 
                the context of your overall health and medical history. We are not responsible for the 
                interpretation of test results or any actions taken based on those results.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Service Limitations</h2>
              <p className="mb-3">
                Our home healthcare services have limitations and may not be suitable for all medical conditions. 
                We cannot provide:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Emergency medical treatment</li>
                <li>Critical care services</li>
                <li>Surgical procedures</li>
                <li>Advanced diagnostic imaging</li>
                <li>Treatment for life-threatening conditions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Accuracy of Information</h2>
              <p>
                While we strive to provide accurate and up-to-date information, medical knowledge is constantly 
                evolving. The information provided may not reflect the most current medical developments. 
                We reserve the right to update or modify information without prior notice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Third-Party Content</h2>
              <p>
                Our services may contain links to third-party websites or content. We do not endorse or 
                assume responsibility for the accuracy or reliability of any information, data, opinions, 
                advice, or statements made on these third-party sites.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Contact Information</h2>
              <p>
                If you have questions about this disclaimer, please contact us at:
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

export default Disclaimer;