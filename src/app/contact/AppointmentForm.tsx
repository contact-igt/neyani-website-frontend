"use client";

import { FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import styles from "./contact.module.css";

export default function AppointmentForm() {
  function submit(event:FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data=new FormData(event.currentTarget);
    const message=[
      "Hello, I would like to book an appointment at Neyani Eye Hospital.",
      `Patient: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Treatment: ${data.get("treatment")}`,
      `Message: ${data.get("message")}`,
    ].join("\n");
    window.open(`https://wa.me/919327433816?text=${encodeURIComponent(message)}`,"_blank","noopener,noreferrer");
  }

  return (
    <form className={styles.form} onSubmit={submit}>
      <div className={styles.formTitle}>
        <p>Appointment request</p>
        <h2 id="appointment-heading">Plan your visit</h2>
        <span>Tell us what you need and our team will confirm the appointment on WhatsApp.</span>
      </div>

      <div className={styles.fieldGrid}>
        <Field label="Full name"><input name="name" placeholder="Enter your full name" autoComplete="name" required /></Field>
        <Field label="Mobile number"><input name="phone" type="tel" placeholder="Enter your mobile number" autoComplete="tel" required /></Field>
        <Field label="Treatment you are interested in" wide><select name="treatment" defaultValue="" required><option value="" disabled>Select a treatment option</option><option>Cataract consultation</option><option>Glaucoma care</option><option>Retina &amp; diabetic eye care</option><option>Pediatric eye care</option><option>General eye examination</option></select></Field>
        <Field label="Message" wide><textarea name="message" placeholder="Enter your message here..." rows={5} required /></Field>
      </div>

      <p className={styles.formNote}>Please avoid sharing detailed or sensitive medical information here. Our team will discuss your condition while confirming the appointment.</p>
      <button className={styles.submit} type="submit">Send message <span><ArrowRight size={17} aria-hidden="true" /></span></button>
    </form>
  );
}

function Field({label,wide=false,children}:{label:string;wide?:boolean;children:React.ReactNode}) {
  return <label className={wide?styles.wide:""}><span>{label}</span>{children}</label>;
}
