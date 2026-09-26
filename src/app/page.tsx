import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import StatsBand from "@/components/StatsBand/StatsBand";
import Introduction from "@/components/Introduction/Introduction";
import PriorityServices from "@/components/PriorityServices/PriorityServices";
import WhyChoose from "@/components/WhyChoose/WhyChoose";
import TechSpotlight from "@/components/TechSpotlight/TechSpotlight";
import DoctorSection from "@/components/DoctorSection/DoctorSection";
// import PediatricCare from "@/components/PediatricCare/PediatricCare"; // Reserved for the future Services page.
import FacilitiesInsurance from "@/components/FacilitiesInsurance/FacilitiesInsurance";
import FAQ from "@/components/FAQ/FAQ";
import Testimonials from "@/components/Testimonials/Testimonials";
import ContactSection from "@/components/ContactSection/ContactSection";
import Footer from "@/components/Footer/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB/WhatsAppFAB";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <StatsBand />
        <Introduction />
        <PriorityServices />
        <WhyChoose />
        <TechSpotlight />
        <DoctorSection />
        {/* <PediatricCare /> */}
        <FacilitiesInsurance />
        <Testimonials />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
