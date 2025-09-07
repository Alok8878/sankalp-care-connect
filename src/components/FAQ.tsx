import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const FAQ = () => {
  const faqs = [
    {
      question: "Do I need an appointment for tests?",
      answer: "While appointments are recommended for better service and shorter wait times, we also accept walk-in patients. Home collection services require advance booking. You can book online, call us, or WhatsApp to schedule your appointment."
    },
    {
      question: "Is fasting required for tests?",
      answer: "Fasting requirements depend on the specific tests. Generally, 10-12 hours fasting is required for lipid profile, blood sugar, and liver function tests. For thyroid tests, vitamin levels, and most other tests, no fasting is needed. We'll inform you about fasting requirements when you book."
    },
    {
      question: "How will I receive my reports?",
      answer: "We provide digital reports via email and WhatsApp within 24 hours for most tests. You can also collect physical copies from our lab. We send notifications when reports are ready, and you can download them from our patient portal using your mobile number."
    },
    {
      question: "Do you offer home sample collection?",
      answer: "Yes, we provide home collection services across Ayodhya Bypass, Indus Park, Ganesh Galaxy City, and surrounding areas in Bhopal. Our trained phlebotomists visit your home with proper safety equipment. Additional charges may apply for home collection."
    },
    {
      question: "What are your payment options?",
      answer: "We accept cash, cards (debit/credit), UPI payments (Google Pay, PhonePe, Paytm), and bank transfers. Payment can be made at the lab, during home collection, or online while booking. We provide proper receipts for all transactions."
    },
    {
      question: "Do you accept doctor prescriptions?",
      answer: "Yes, we accept prescriptions from all qualified doctors. You can bring physical prescriptions or upload digital copies while booking online. Our team can also guide you on appropriate tests based on your health concerns, but doctor consultation is recommended."
    },
    {
      question: "What is your report turnaround time?",
      answer: "Most routine tests are completed within 24 hours. Complex tests may take 2-3 days. Emergency tests can be processed within 4-6 hours with additional charges. We always inform patients about expected delivery times during booking."
    },
    {
      question: "How do you ensure data privacy?",
      answer: "We follow strict confidentiality protocols. All patient data is encrypted and stored securely. Reports are shared only with patients or authorized persons. We comply with medical data protection regulations and never share information with third parties without consent."
    },
    {
      question: "Can I reschedule my appointment?",
      answer: "Yes, you can reschedule your appointment by calling us or sending a WhatsApp message at least 2 hours before the scheduled time. For home collection, we require 4 hours advance notice for rescheduling."
    },
    {
      question: "Are X-rays safe during pregnancy?",
      answer: "We avoid X-rays during pregnancy unless absolutely necessary and prescribed by a doctor. Please inform our staff if you are pregnant or suspect pregnancy. We can suggest alternative tests or take necessary precautions as per medical guidelines."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-surface to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Frequently Asked <span className="bg-gradient-primary bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-xl text-foreground-secondary">
              Find answers to common questions about our services and procedures
            </p>
          </div>

          <Card className="p-8 bg-surface-elevated">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-4"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground-secondary leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>

          <div className="mt-8 text-center">
            <Card className="p-6 bg-gradient-accent">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Still have questions?
              </h3>
              <p className="text-foreground-secondary mb-4">
                Our friendly team is here to help you with any queries
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  onClick={() => window.open("tel:+917024832751", "_self")}
                  className="px-6 py-2 bg-primary hover:bg-primary-hover text-primary-foreground rounded-lg transition-colors"
                >
                  Call Us: +91 70248 32751
                </button>
                <button 
                  onClick={() => window.open("https://wa.me/917024832751", "_blank")}
                  className="px-6 py-2 bg-secondary hover:bg-secondary-hover text-secondary-foreground rounded-lg transition-colors"
                >
                  WhatsApp Us
                </button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;