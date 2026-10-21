import { Stethoscope, Activity, ClipboardCheck } from "lucide-react";
import styles from "./Testimonials.module.css";

const journeySteps = [
  {
    step: "01",
    title: "Eye Consultation and Evaluation",
    description:
      "Eye examinations help our doctors assess your symptoms and eye health to determine the appropriate next steps for your care.",
    icon: Stethoscope,
  },
  {
    step: "02",
    title: "Diagnostic Eye Tests",
    description:
      "Eye examinations and diagnostic tests help our doctors assess eye conditions and guide clinical decisions.",
    icon: Activity,
  },
  {
    step: "03",
    title: "Treatment Planning and Follow-up",
    description:
      "Our doctors discuss suitable treatment options and recommend follow-up care according to each patient's individual needs.",
    icon: ClipboardCheck,
  },
] as const;

export default function Testimonials() {
  return (
    <section className={styles.section} id="care-journey" aria-labelledby="journey-heading">
      <div className={`container ${styles.frame}`}>
        <div className={styles.panel}>
          <header className={styles.heading}>
            <p className={styles.label}>Patient Care</p>
            <h2 id="journey-heading">
              Your Eye Care Journey <span className="title-secondary">at Neyani Eye Hospital</span>
            </h2>
            <p className={styles.description}>
              Our team provides eye consultations, diagnostic evaluations and treatment planning based on each patient&apos;s individual eye health needs.
            </p>
          </header>

          <div className={styles.grid}>
            {journeySteps.map((item) => {
              const Icon = item.icon;
              return (
                <article className={styles.card} key={item.title}>
                  <div className={styles.cardHeader}>
                    <div className={styles.iconWrap}>
                      <Icon size={24} aria-hidden="true" />
                    </div>
                    <span className={styles.stepBadge}>Step {item.step}</span>
                  </div>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDescription}>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
