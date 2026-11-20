"use client";

import { useRef, useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { createAppointmentRequestId } from "@/lib/appointment-request-id";
import { ArrowRight, Loader2, AlertCircle } from "lucide-react";
import styles from "./contact.module.css";

export default function AppointmentForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const submission = useRef<{ fields: string; requestId: string } | null>(null);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: data.get("name"),
      phone: data.get("phone"),
      treatment: data.get("treatment"),
      message: data.get("message"),
      source: "Contact Page",
    };

    try {
      const fields = JSON.stringify(payload);
      if (submission.current?.fields !== fields) {
        submission.current = { fields, requestId: createAppointmentRequestId() };
      }

      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, requestId: submission.current.requestId }),
      });

      const result = await response.json();

      if (!response.ok || result.success !== true) {
        throw new Error(result.error || "Failed to submit request.");
      }

      submission.current = null;
      form.reset();
      router.replace("/thank-you");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Failed to record your appointment. Please try again.");
    }
  }

  return (
    <form className={styles.form} onSubmit={submit}>
      <div className={styles.formTitle}>
        <p>Appointment request</p>
        <h2 id="appointment-heading">Plan your visit</h2>
        <span>Tell us what you need and our team will get in touch with you.</span>
      </div>

      <div className={styles.fieldGrid}>
        <Field label="Full name">
          <input name="name" placeholder="Enter your full name" autoComplete="name" required />
        </Field>
        <Field label="Mobile number">
          <input name="phone" type="tel" placeholder="Enter your mobile number" autoComplete="tel" required />
        </Field>
        <Field label="Treatment you are interested in" wide>
          <select name="treatment" defaultValue="" required>
            <option value="" disabled>Select a treatment option</option>
            <option>Cataract consultation</option>
            <option>Glaucoma care</option>
            <option>Retina &amp; diabetic eye care</option>
            <option>Pediatric eye care</option>
            <option>General eye examination</option>
          </select>
        </Field>
        <Field label="Message" wide>
          <textarea name="message" placeholder="Enter your message here..." rows={5} required />
        </Field>
      </div>

      {status === "error" && (
        <div className={styles.errorAlert} role="alert">
          <AlertCircle size={18} aria-hidden="true" />
          <span>{errorMessage}</span>
        </div>
      )}

      <p className={styles.formNote}>Please avoid sharing detailed or sensitive medical information here. Our team will discuss your condition while confirming the appointment.</p>
      <button className={styles.submit} type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <>
            Submitting...
            <span className={styles.spin}><Loader2 size={17} aria-hidden="true" /></span>
          </>
        ) : (
          <>
            Send message <span><ArrowRight size={17} aria-hidden="true" /></span>
          </>
        )}
      </button>
    </form>
  );
}

function Field({label,wide=false,children}:{label:string;wide?:boolean;children:React.ReactNode}) {
  return <label className={wide?styles.wide:""}><span>{label}</span>{children}</label>;
}
