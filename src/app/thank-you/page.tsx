import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CircleCheck } from "lucide-react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "./thank-you.module.css";

export const metadata: Metadata = {
  title: "Thank you for your appointment request",
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className={styles.confirmation} aria-labelledby="thank-you-heading">
          <span className={styles.icon}>
            <CircleCheck size={40} aria-hidden="true" />
          </span>
          <h1 id="thank-you-heading">Thank you for your appointment request</h1>
          <p>
            We’ve received your details. The Neyani Eye Hospital team will call
            you to confirm your appointment date and time.
          </p>
          <div className={styles.actions}>
            <Link className={styles.book} href="/contact#appointment">
              Book another appointment <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link className={styles.home} href="/">Back to home</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
