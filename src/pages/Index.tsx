import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import About from "@/components/About";
import Services from "@/components/Services";
import HealthPackages from "@/components/HealthPackages";
import BookingForm from "@/components/BookingForm";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import VisitorCounter from "@/components/VisitorCounter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main role="main" aria-label="Main content">
        {/* Hero Section - Primary Information */}
        <section aria-labelledby="hero-heading">
          <Hero />
        </section>
        
        {/* Key Features Section */}
        <section aria-labelledby="features-heading">
          <WhyChooseUs />
        </section>
        
        {/* About Company Section */}
        <section aria-labelledby="about-heading">
          <About />
        </section>
        
        {/* Healthcare Services Section */}
        <section aria-labelledby="services-heading">
          <Services />
        </section>
        
        {/* Health Packages and Pricing */}
        <section aria-labelledby="packages-heading">
          <HealthPackages />
        </section>
        
        {/* Booking and Contact Form */}
        <section aria-labelledby="booking-heading">
          <BookingForm />
        </section>
        
        {/* Frequently Asked Questions */}
        <section aria-labelledby="faq-heading">
          <FAQ />
        </section>
        
        {/* Contact Information and Location */}
        <section aria-labelledby="contact-heading">
          <Contact />
        </section>
      </main>
      <Footer />
      <WhatsAppWidget />
      <VisitorCounter />
    </div>
  );
};

export default Index;