import { Baby, MonitorCheck, Glasses, Cpu } from "lucide-react";
import { hospital } from "@/content/hospital";
import styles from "./ServiceMosaic.module.css";

const iconMap: Record<string, React.ElementType> = {
  baby: Baby,
  "monitor-check": MonitorCheck,
  glasses: Glasses,
  cpu: Cpu,
};

export default function ServiceMosaic() {
  return (
    <section className={styles.section} aria-labelledby="mosaic-heading">
      <div className="container">
        <h2 id="mosaic-heading" className={styles.sectionHeading}>
          Complete Eye Care <span className="title-secondary">for Every Age</span>
        </h2>
        <p className={styles.sectionLead}>
          From a newborn&apos;s first eye check to cataract care in later life — we
          provide continuity of care across every stage.
        </p>
        <div className={styles.mosaic}>
          {hospital.mosaicServices.map((svc) => {
            const Icon = iconMap[svc.icon] ?? Glasses;
            return (
              <article key={svc.id} className={styles.tile} aria-label={svc.title}>
                <div className={styles.tileIcon} aria-hidden="true">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className={styles.tileTitle}>{svc.title}</h3>
                <p className={styles.tileDesc}>{svc.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
