import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import CourseShowcase from "../components/CourseShowcase";
import Testimonials from "../components/Testimonials";
import PricingSection from "../components/PricingSection";
import Footer from "../components/Footer";
import CTABanner from "../components/CTABanner";
import FAQSection from "../components/FaqSection";
import AboutSection from "../components/AboutSection";
import aboutImg from "../assets/Mehra.jpg"; // or .png, .webp
import PartnersSection from "../components/PartnersSection";


export default function Home() {
  return (
    <>
        <HeroSection />
        <FeaturesSection />
        <CourseShowcase />
        <PricingSection />
        <CTABanner />

        <FAQSection />
        <AboutSection />
        <PartnersSection />
        <Testimonials />

        <Footer />

    </>
  );
}
