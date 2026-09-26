import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarCheck, Check, Clock3, MapPin, MessageCircle, Phone } from "lucide-react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB/WhatsAppFAB";
import { hospital } from "@/content/hospital";
import AppointmentForm from "./AppointmentForm";
import styles from "./contact.module.css";

export const metadata:Metadata={
  title:`Contact & Appointments — ${hospital.name}`,
  description:`Book an eye consultation at ${hospital.name} in Gandhidham or contact our team for directions and visiting hours.`,
};

export default function ContactPage() {
  const leadDoctor = hospital.doctors[0];

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero} aria-labelledby="contact-title">
          <div className={styles.heroDoctor}>
            <Image src="/contact-doctor-cutout.png" alt="An ophthalmologist welcoming patients to Neyani Eye Hospital" fill preload quality={95} sizes="(max-width: 850px) 86vw, 48vw" />
          </div>
          <div className={styles.doctorCard}>
            <CalendarCheck aria-hidden="true" />
            <span><strong>{leadDoctor.name}</strong><small>{leadDoctor.note}</small></span>
          </div>
          <div className={`container ${styles.heroInner}`}>
            <div className={styles.heroCopy}>
              <p><span /> Appointments &amp; enquiries</p>
              <h1 id="contact-title">Your eye care visit,<br /><span>made simple.</span></h1>
              <div className={styles.heroText}>Share a few details below and our team will help arrange a suitable consultation at Neyani Eye Hospital.</div>
              <div className={styles.heroActions}>
                <Link href="#appointment">Book an appointment <i><ArrowRight size={17} aria-hidden="true" /></i></Link>
                <a href={hospital.phoneUrl}><Phone size={17} aria-hidden="true" />{hospital.phone}</a>
              </div>
              <ul><li><Check size={15} />Specialist eye care</li><li><Check size={15} />Gandhidham, Kutch</li></ul>
            </div>
          </div>
        </section>

        <section className={styles.appointment} id="appointment" aria-labelledby="appointment-heading">
          <div className="container">
            <div className={styles.appointmentGrid}>
              <aside className={styles.contactCard} aria-labelledby="contact-info-heading">
                <div className={styles.contactHeading}>
                  <p>Contact us</p>
                  <h2 id="contact-info-heading">Let’s plan your visit</h2>
                  <span>Our team will help with appointments, directions and questions about your eye-care visit.</span>
                </div>
                <div className={styles.contactList}>
                  <a href={hospital.phoneUrl}><i><Phone size={18} /></i><span><small>Phone</small><strong>{hospital.phone}</strong></span></a>
                  <a href={hospital.whatsappUrl} target="_blank" rel="noreferrer"><i><MessageCircle size={18} /></i><span><small>WhatsApp</small><strong>Message our appointment desk</strong></span></a>
                  <div><i><MapPin size={18} /></i><span><small>Our location</small><strong>{hospital.address}</strong></span></div>
                  <div><i><Clock3 size={18} /></i><span><small>Consultation hours</small><strong>{hospital.hours.weekdays}<br />{hospital.hours.morning} &amp; {hospital.hours.evening}</strong></span></div>
                </div>
              </aside>

              <AppointmentForm />
            </div>

            <div className={styles.location} aria-labelledby="location-heading">
              <div className={styles.locationHeading}>
                <div><p>Find us in Gandhidham</p><h2 id="location-heading">Visit Neyani Eye Hospital</h2></div>
                <a href="https://www.google.com/maps/search/?api=1&query=Neyani+Eye+Hospital+Gandhidham" target="_blank" rel="noreferrer">Get directions <ArrowRight size={16} aria-hidden="true" /></a>
              </div>
              <div className={styles.mapFrame}>
                <iframe
                  title="Map showing Neyani Eye Hospital in Gandhidham"
                  src="https://www.google.com/maps?q=Neyani%20Eye%20Hospital%2C%20Gayatri%20Mandir%20Road%2C%20Gandhidham%2C%20Gujarat&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
