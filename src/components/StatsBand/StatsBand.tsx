"use client";

import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { CalendarHeart, Eye, UsersRound } from "lucide-react";
import { hospital } from "@/content/hospital";
import styles from "./StatsBand.module.css";

const countStats = [
  { end: 2019, prefix: "Est. ", icon: CalendarHeart },
  { end: 80000, suffix: "+", icon: UsersRound },
  { end: 30000, suffix: "+", icon: Eye },
] as const;

export default function StatsBand() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <section className={styles.band} aria-label="Hospital statistics">
      <div className={`container ${styles.inner}`}>
        {hospital.stats.map((stat, index) => {
          const count = countStats[index];
          const Icon = count.icon;

          return (
            <div key={stat.label} className={styles.stat}>
              <span className={styles.icon}><Icon size={21} strokeWidth={1.8} aria-hidden="true" /></span>
              <span className={styles.value} aria-label={stat.value}>
                <span aria-hidden="true">{reduceMotion ? stat.value : <CountUp end={count.end} prefix={"prefix" in count ? count.prefix : ""} suffix={"suffix" in count ? count.suffix : ""} separator="," duration={2.1} enableScrollSpy scrollSpyOnce />}</span>
              </span>
              <span className={styles.label}>{stat.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
