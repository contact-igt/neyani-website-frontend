import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import styles from "./TreatmentOptions.module.css";

type TreatmentOption = {
  icon: LucideIcon;
  label: string;
  title: string;
  description: string;
  benefits: readonly string[];
  image: string;
};

type TreatmentOptionsProps = {
  className: string;
  id?: string;
  headingId: string;
  eyebrow: string;
  title: ReactNode;
  intro: string;
  options: readonly TreatmentOption[];
  cta: string;
  note: string;
};

export default function TreatmentOptions({ className, id, headingId, eyebrow, title, intro, options, cta, note }: TreatmentOptionsProps) {
  return <section className={className} id={id} aria-labelledby={headingId}>
    <div className="container">
      <div className={styles.heading}>
        <p className={styles.eyebrow}><span /> {eyebrow}</p>
        <h2 id={headingId}>{title}</h2>
        <p>{intro}</p>
      </div>
      <div className={styles.grid}>
        {options.map((option) => <article className={styles.card} key={option.title}>
          <figure className={styles.image}><Image src={option.image} alt="" fill quality={90} sizes="(max-width: 700px) 100vw, 50vw" /></figure>
          <div className={styles.body}>
            <div className={styles.meta}><span><option.icon size={20} aria-hidden="true" /></span><b>{option.label}</b></div>
            <h3>{option.title}</h3><p>{option.description}</p>
            <ul>{option.benefits.map((benefit) => <li key={benefit}><Check size={15} aria-hidden="true" />{benefit}</li>)}</ul>
            <Link href="/contact#appointment">{cta} <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
        </article>)}
      </div>
      <p className={styles.note}>{note}</p>
    </div>
  </section>;
}
