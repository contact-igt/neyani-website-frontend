"use client";

import Image from "next/image";
import { ArrowRight, CheckCircle2, Clock3, Loader2, MapPin, AlertCircle } from "lucide-react";
import { useState, FormEvent } from "react";
import { hospital } from "@/content/hospital";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function book(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: data.get("name"),
      phone: data.get("phone"),
      treatment: data.get("service"),
      details: data.get("details") || "",
      source: "Homepage Contact Section",
    };

    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit appointment request.");
      }

      setStatus("success");
      form.reset();
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Failed to record your appointment. Please try again.");
    }
  }

  return (
    <section className={styles.section} id="contact" aria-labelledby="contact-heading">
      <div className={styles.heading}>
        <h2 id="contact-heading">Book your <span className="title-secondary">appointment today</span></h2>
        <p>Share your details and our team will get in touch to confirm your visit.</p>
      </div>

      <div className={styles.layout}>
        {status === "success" ? (
          <div className={styles.successBox} role="status" aria-live="polite">
            <div className={styles.successIconWrap}>
              <CheckCircle2 size={44} aria-hidden="true" />
            </div>
            <p className={styles.successPre}>Appointment Received</p>
            <h3 className={styles.successTitle}>Thank You! We Have Received Your Details</h3>
            <p className={styles.successText}>
              Your appointment request has been recorded. Our team at Neyani Eye Hospital will contact you shortly on your phone to confirm your appointment time and date.
            </p>
            <button
              type="button"
              className={styles.resetButton}
              onClick={() => setStatus("idle")}
            >
              Book Another Appointment
            </button>
          </div>
        ) : (
          <form className={styles.form} onSubmit={book}>
            <Field label="Name"><input name="name" placeholder="Name" autoComplete="name" required /></Field>
            <Field label="Phone number"><input name="phone" type="tel" placeholder="Phone number" autoComplete="tel" required /></Field>
            <Field label="Service">
              <select name="service" defaultValue="" required>
                <option value="" disabled>Service</option>
                <option>Cataract consultation</option>
                <option>Glaucoma care</option>
                <option>Retina &amp; diabetic eye care</option>
                <option>Pediatric eye care</option>
                <option>Comprehensive eye check</option>
              </select>
            </Field>
            <Field label="Additional information"><textarea name="details" placeholder="Additional information" rows={4} /></Field>

            {status === "error" && (
              <div className={styles.errorAlert} role="alert">
                <AlertCircle size={18} aria-hidden="true" />
                <span>{errorMessage}</span>
              </div>
            )}

            <button type="submit" className={styles.submit} disabled={status === "submitting"}>
              {status === "submitting" ? (
                <>
                  Submitting...
                  <Loader2 size={16} className={styles.spin} aria-hidden="true" />
                </>
              ) : (
                <>
                  Schedule my appointment <ArrowRight size={16} aria-hidden="true" />
                </>
              )}
            </button>
          </form>
        )}

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
