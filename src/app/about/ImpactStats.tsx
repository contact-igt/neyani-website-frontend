"use client";

import CountUp from "react-countup";
import { CalendarDays, Eye, UsersRound } from "lucide-react";
import styles from "./about.module.css";

export default function ImpactStats() {
  return (
    <div className={styles.impactStats}>
      <article><span><UsersRound aria-hidden="true" /></span><div><strong><CountUp end={80000} separator="," duration={2} enableScrollSpy scrollSpyOnce />+</strong><p>Patients treated</p></div></article>
      <article><span><Eye aria-hidden="true" /></span><div><strong><CountUp end={30000} separator="," duration={2} enableScrollSpy scrollSpyOnce />+</strong><p>Cataract surgeries<br />completed</p></div></article>
      <article><span><CalendarDays aria-hidden="true" /></span><div><p>Since</p><strong><CountUp end={2019} separator="" duration={2} enableScrollSpy scrollSpyOnce /></strong><p>Serving with care</p></div></article>
    </div>
  );
}
