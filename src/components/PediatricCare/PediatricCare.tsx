import { AlertCircle } from "lucide-react";
import { hospital } from "@/content/hospital";
import styles from "./PediatricCare.module.css";

export default function PediatricCare() {
  return (
    <section className={styles.section} id="pediatric" aria-labelledby="peds-heading">
      <div className={`container ${styles.inner}`}>
        {/* Text column */}
        <div className={styles.textCol}>
          <h2 id="peds-heading" className={styles.heading}>
            Children&apos;s <span className="title-secondary">Eye Health</span>
          </h2>
          <p className={styles.body}>
            Children&apos;s eyes develop rapidly — and problems caught early are far
            easier to treat. Neyani Eye Hospital provides comprehensive eye care
            from newborns through to school-age children and beyond.
          </p>
          <p className={styles.body}>
            Our visiting pediatric ophthalmologist and squint surgeon handles
            conditions including amblyopia, squints, and congenital eye disorders.
            Complex squint surgery is performed as a visiting consultant service.
          </p>
          <div className={styles.firstCheck}>
            <span className={styles.checkIcon} aria-hidden="true">
              <AlertCircle size={18} strokeWidth={2} />
            </span>
            <p>
              We recommend a thorough eye examination before your child starts
              school — ideally by age 5 — even if no problems are apparent.
            </p>
          </div>
        </div>

        {/* Warning signs column */}
        <div className={styles.warningCol}>
          <h3 className={styles.warningHeading}>Signs to watch for in your child</h3>
          <ul className={styles.warningList} role="list">
            {hospital.pediatricWarnings.map((w, i) => (
              <li key={i} className={styles.warningItem}>
                <span className={styles.dot} aria-hidden="true" />
                {w}
              </li>
            ))}
          </ul>
          <p className={styles.warningNote}>
            If you notice any of these signs, an eye examination is the first step.
          </p>
        </div>
      </div>
    </section>
  );
}
