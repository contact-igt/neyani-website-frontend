import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Eye, Heart, UsersRound } from "lucide-react";
import { hospital } from "@/content/hospital";
import StatValue from "@/components/StatValue/StatValue";
import styles from "./doctors.module.css";

const trustItems = [
  { icon: UsersRound, value: "80,000+", label: "Patients treated" },
  { icon: Eye, value: "30,000+", label: "Cataract surgeries" },
  { icon: CalendarDays, value: `Since ${hospital.established}`, label: "Trusted care" },
  { icon: Heart, value: "Personalised care", label: "For a healthier tomorrow" },
] as const;

/** Banner shared by /doctors and every /doctors/[id] profile page. */
export default function DoctorsHero({ specialistsHref = "/about#specialists-title" }: { specialistsHref?: string }) {
  return (
    <section className={styles.hero} aria-labelledby="doctors-title">
      <div className={`container ${styles.heroInner}`}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}><span /> Our doctors</p>
          <h1 id="doctors-title">Experts behind<br />your <em>vision.</em></h1>
          <p className={styles.intro}>Meet our experienced ophthalmologists providing personalised diagnosis and advanced eye care.</p>
          <div className={styles.actions}>
            <Link href="/contact#appointment" className={styles.primary}><CalendarDays size={20} aria-hidden="true" /> Book an appointment</Link>
            <Link href={specialistsHref} className={styles.secondary}>Meet our specialists <ArrowRight size={19} aria-hidden="true" /></Link>
          </div>
        </div>

        <div className={styles.doctorVisual}>
          <Image src="/doctors-hero-team-v1.png" alt="Dr. Yajuvendra Singh Rathore, Dr. Urmil Shah and Dr. Ankit Shah" fill priority sizes="(max-width: 700px) 110vw, 66vw" />
        </div>

        <dl className={styles.trustStrip}>
          {trustItems.map(({ icon: Icon, value, label }) => <div key={value}>
            <span className={styles.trustIcon}><Icon size={27} aria-hidden="true" /></span><dt><StatValue value={value} /></dt><dd>{label}</dd>
          </div>)}
        </dl>
      </div>
    </section>
  );
}
