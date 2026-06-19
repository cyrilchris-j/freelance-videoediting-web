import "../styles/fonts.css";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { PricingSection } from "./components/PricingSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { WhySection } from "./components/WhySection";
import { ReviewsSection } from "./components/ReviewsSection";
import { OrderForm } from "./components/OrderForm";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div style={{ background: "#050508", minHeight: "100vh", scrollBehavior: "smooth" }}>
      <Navbar />
      <HeroSection />
      <PricingSection />
      <PortfolioSection />
      <WhySection />
      <ReviewsSection />
      <OrderForm />
      <ContactSection />
      <Footer />
    </div>
  );
}
