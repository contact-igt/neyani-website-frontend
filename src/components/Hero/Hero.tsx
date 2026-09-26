import Image from "next/image";
import { ArrowRight, Eye } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <Image src="/neyani-eye-exam-banner-enhanced.png" alt="An Indian ophthalmologist examining an Indian patient in a modern eye clinic" fill priority quality={95} sizes="100vw" className={styles.heroImage} />
      <div className={styles.panel}>
        <div className={styles.copy}>
          <p className={styles.kicker}><Eye size={16} aria-hidden="true" /> Specialist eye care in Gandhidham</p>
          <h1 id="hero-heading">Clearer vision.<br /><span className={styles.headingAccent}>Care you can trust.</span></h1>
          <p className={styles.intro}>Advanced cataract, retina and children&apos;s eye care—thoughtfully delivered for every stage of life.</p>
          <div className={styles.actions}>
            <a href="#contact" className={styles.primary}>Book appointment <span><ArrowRight size={17} aria-hidden="true" /></span></a>
            <a href="#services" className={styles.secondary}>View services <ArrowRight size={16} aria-hidden="true" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
