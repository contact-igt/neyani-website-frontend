import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import StatsBand from "@/components/StatsBand/StatsBand";
import Introduction from "@/components/Introduction/Introduction";
import PriorityServices from "@/components/PriorityServices/PriorityServices";
import WhyChoose from "@/components/WhyChoose/WhyChoose";
import TechSpotlight from "@/components/TechSpotlight/TechSpotlight";
import DoctorSection from "@/components/DoctorSection/DoctorSection";
import FacilitiesInsurance from "@/components/FacilitiesInsurance/FacilitiesInsurance";
import FAQ from "@/components/FAQ/FAQ";
import Testimonials from "@/components/Testimonials/Testimonials";
import ContactSection from "@/components/ContactSection/ContactSection";
import Footer from "@/components/Footer/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB/WhatsAppFAB";

export const metadata: Metadata = {
  title: "Neyani Eye Hospital — Best Eye Hospital & Specialist in Gandhidham, Gujarat",
  description:
    "Leading eye hospital in Gandhidham offering advanced cataract surgery (Phaco & MICS), glaucoma care, diabetic retina care, and pediatric ophthalmology. Serving Gandhidham, Adipur, Anjar, and Kutch.",
  alternates: {
    canonical: "https://neyanihospital.in",
  },
};

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
