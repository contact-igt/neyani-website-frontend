import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { hospital } from "@/content/hospital";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div><h2>Protect your sight with <span className="title-secondary-on-dark">specialist care</span></h2><p>Questions about your vision or treatment? Our team is ready to help you plan your next visit.</p></div>
        <div className={styles.actions}>
          <a href={hospital.phoneUrl} className={styles.call}><Phone size={16} aria-hidden="true" /> Call us</a>
          <a href="/contact#appointment" className={styles.book}>Book appointment <i><ArrowRight size={17} aria-hidden="true" /></i></a>
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.main}>
        <div className={styles.brand}>
          <a href="#main-content" className={styles.logo} aria-label="Neyani Eye Hospital home"><Image src="/logo-new.png" alt="" width={469} height={252} /></a>
          <p>{hospital.tagline}</p>
          <span>Specialist ophthalmology for Gandhidham and the wider Kutch region.</span>
        </div>

        <nav aria-label="Footer navigation"><h3>Quick links</h3><a href="/">Home</a><a href="/#about">About us</a><a href="/#doctors">Our doctors</a><a href="/contact#appointment">Book a visit</a><a href="/contact">Contact</a></nav>
        <nav aria-label="Eye care services"><h3>Services</h3><a href="#services">Cataract surgery</a><a href="#services">Glaucoma care</a><a href="#services">Retina care</a><a href="#services">Pediatric eye care</a><a href="#services">Eye diagnostics</a></nav>

        <div className={styles.contact}><h3>Contact information</h3><p><strong>Phone</strong><a href={hospital.phoneUrl}>{hospital.phone}</a></p><p><strong>Address</strong><span>{hospital.address}</span></p><p><strong>Clinic hours</strong><span>Mon–Sat · {hospital.hours.morning}<br />{hospital.hours.evening}</span></p></div>
      </div>

      <div className={styles.bottom}><p>© {new Date().getFullYear()} {hospital.name}. All rights reserved.</p><p>Information on this website does not replace a clinical examination or medical advice.</p></div>
    </footer>
  );
}
