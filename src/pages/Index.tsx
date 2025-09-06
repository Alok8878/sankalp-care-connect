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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <About />
        <Services />
        <HealthPackages />
        <BookingForm />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;