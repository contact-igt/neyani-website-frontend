import { Stethoscope, Activity, ClipboardCheck } from "lucide-react";
import styles from "./Testimonials.module.css";

const journeySteps = [
  {
    step: "01",
    title: "Consultation and Evaluation",
    description:
      "Eye examinations help our doctors assess your concerns and determine the appropriate next steps.",
    icon: Stethoscope,
  },
  {
    step: "02",
    title: "Diagnostic Services",
    description:
      "Diagnostic evaluations help our clinical team assess eye conditions and guide care planning.",
    icon: Activity,
  },
  {
    step: "03",
    title: "Treatment Planning and Follow-up",
    description:
      "Your doctor will discuss appropriate treatment options and follow-up care according to your individual needs.",
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
              Your Eye Care <span className="title-secondary">Journey</span>
            </h2>
            <p className={styles.description}>
              Our team provides eye consultations, diagnostic evaluations and treatment planning based on each patient’s individual needs.
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
