import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./WhyChoose.module.css";

export default function WhyChoose() {
  return (
    <section className={styles.section} aria-labelledby="why-heading">
      <div className={styles.heading}>
        <h2 id="why-heading">Eye care that begins<br /><span className="title-secondary">with understanding</span></h2>
        <p>Individual examinations, clear communication and thoughtful guidance for every patient who walks through our doors.</p>
      </div>

      <div className={styles.grid}>
        <Photo src="/service-glaucoma.png" alt="An ophthalmologist carrying out a detailed eye examination" className={styles.photoOne} />
        <Fact value="01" title="Individual Clinical Examination" className={styles.blue} href="#services">At Neyani Eye Hospital, every patient&apos;s eye care journey begins with an individual examination. We evaluate vision and ocular health thoroughly before recommending any treatment.</Fact>
        <Photo src="/service-diagnostics.png" alt="Advanced digital eye diagnostic equipment in use" className={styles.photoTwo} />
        <Fact value="02" title="Care with Understanding" className={styles.lilac} href="/about">We focus on understanding each patient&apos;s daily visual requirements, explaining suitable treatment options clearly to support informed, confident decisions about eye health.</Fact>
        <Photo src="/neyani-hero-care.png" alt="A doctor speaking with a mother and daughter in an eye clinic" className={styles.photoThree} />
        <Fact value="03" title="Continuity & Long-Term Care" className={styles.softBlue} href="/doctors">Clear communication, transparent post-treatment guidance and dedicated follow-up care from our experienced ophthalmology team across Gandhidham and Kutch.</Fact>
      </div>
    </section>
  );
}

function Photo({ src, alt, className }: { src: string; alt: string; className: string }) {
  return <div className={`${styles.photo} ${className}`}><Image src={src} alt={alt} fill quality={95} sizes="(max-width: 700px) 100vw, 33vw" /></div>;
}

function Fact({ value, title, href, className, children }: { value: string; title: string; href: string; className: string; children: React.ReactNode }) {
  return <article className={`${styles.fact} ${className}`}><strong>{value}</strong><h3>{title}</h3><p>{children}</p><a href={href}>Learn more <ArrowRight size={16} aria-hidden="true" /></a></article>;
}
