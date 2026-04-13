import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductShowcase from "@/components/ProductShowcase";
import TechnologySection from "@/components/TechnologySection";
import GlobalPresence from "@/components/GlobalPresence";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <ProductShowcase />
    <TechnologySection />
    <GlobalPresence />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
