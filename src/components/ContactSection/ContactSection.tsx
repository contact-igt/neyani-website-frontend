"use client";

import Image from "next/image";
import { ArrowRight, Clock3, MapPin } from "lucide-react";
import { FormEvent } from "react";
import { hospital } from "@/content/hospital";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  function book(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Hello, I would like to book an appointment at Neyani Eye Hospital.",
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Service: ${data.get("service")}`,
      `Details: ${data.get("details") || "None"}`,
    ].join("\n");
    window.open(`https://wa.me/919327433816?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <section className={styles.section} id="contact" aria-labelledby="contact-heading">
      <div className={styles.heading}>
        <h2 id="contact-heading">Book your <span className="title-secondary">appointment today</span></h2>
        <p>Share your details and our team will confirm your visit on WhatsApp.</p>
      </div>

      <div className={styles.layout}>
        <form className={styles.form} onSubmit={book}>
          <Field label="Name"><input name="name" placeholder="Name" autoComplete="name" required /></Field>
          <Field label="Phone number"><input name="phone" type="tel" placeholder="Phone number" autoComplete="tel" required /></Field>
          <Field label="Service"><select name="service" defaultValue="" required><option value="" disabled>Service</option><option>Cataract consultation</option><option>Glaucoma care</option><option>Retina & diabetic eye care</option><option>Pediatric eye care</option><option>Comprehensive eye check</option></select></Field>
          <Field label="Additional information"><textarea name="details" placeholder="Additional information" rows={4} /></Field>
          <button type="submit" className={styles.submit}>Schedule my appointment <ArrowRight size={16} aria-hidden="true" /></button>
        </form>

        <aside className={styles.visitCard}>
          <Image src="/service-pediatric.png" alt="An eye specialist performing a friendly child vision check" fill quality={95} sizes="(max-width: 760px) 100vw, 44vw" />
          <div className={styles.overlay} />
          <div className={styles.visitContent}>
            <span>Your first step to clearer sight</span>
            <h3>Specialist eye care,<br />close to home.</h3>
            <div className={styles.visitDetails}>
              <p><i><MapPin size={16} aria-hidden="true" /></i>{hospital.address}</p>
              <p><i><Clock3 size={16} aria-hidden="true" /></i>Mon–Sat<br />10:30 AM–1:00 PM<br />5:30 PM–8:00 PM</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Field({ label, children }: { label:string; children:React.ReactNode }) {
  return <label><span>{label}</span>{children}</label>;
}
