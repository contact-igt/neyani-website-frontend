import Image from "next/image";
import { Hospital, MessageCircle, Microscope } from "lucide-react";
import styles from "./Introduction.module.css";

const pillars = [
  { icon: Microscope, title: "Diagnostic first", text: "A thorough examination before any recommendation." },
  { icon: Hospital, title: "Care under one roof", text: "Consultation, diagnostics, and surgical planning." },
  { icon: MessageCircle, title: "Clear communication", text: "Every finding explained in your preferred language." },
];

export default function Introduction() {
  return (
    <section className={styles.section} id="about">
      <div className={`container ${styles.inner}`}>
        <div className={styles.imageWrap}>
          <Image src="/neyani-consultation.png" alt="Ophthalmologist explaining an eye scan to a patient" width={1122} height={1402} quality={95} sizes="(max-width: 768px) 100vw, 44vw" className={styles.image} />
          <span className={styles.imageBadge}>Since 2019 <i /> Gandhidham</span>
        </div>
        <div className={styles.content}>
          <h2 className={styles.heading}>Eye care, <span className="title-secondary">explained clearly.</span></h2>
          <p className={styles.body}>Specialist diagnosis and thoughtful treatment for families across Gandhidham and Kutch, with every option explained before care begins.</p>
          <div className={styles.pillars}>
            {pillars.map(({ icon: Icon, title, text }) => (
              <div key={title} className={styles.pillar}>
                <span className={styles.pillarIcon} aria-hidden="true"><Icon size={20} strokeWidth={1.8} /></span>
                <div><strong className={styles.pillarTitle}>{title}</strong><p className={styles.pillarText}>{text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
