import { CalendarDays, MapPin, ShieldCheck } from "lucide-react";
import { hospital } from "@/content/hospital";
import styles from "./StatsBand.module.css";

const statIcons = [CalendarDays, ShieldCheck, MapPin] as const;

export default function StatsBand() {
  return (
    <section className={styles.band} aria-label="Hospital highlights">
      <div className={`container ${styles.inner}`}>
        {hospital.stats.map((stat, index) => {
          const Icon = statIcons[index];

          return (
            <div key={stat.label} className={styles.stat}>
              <span className={styles.icon}>
                <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <span className={styles.value}>{stat.value}</span>
              <span className={styles.label}>{stat.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
