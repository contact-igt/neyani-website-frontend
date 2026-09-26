import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./WhyChoose.module.css";

export default function WhyChoose() {
  return (
    <section className={styles.section} aria-labelledby="why-heading">
      <div className={styles.heading}>
        <h2 id="why-heading">Advanced eye care<br /><span className="title-secondary">with a human touch</span></h2>
        <p>Specialist expertise, proven technology and thoughtful care for every patient who walks through our doors.</p>
      </div>

      <div className={styles.grid}>
        <Photo src="/service-glaucoma.png" alt="An ophthalmologist carrying out a detailed eye examination" className={styles.photoOne} />
        <Fact value="30,000+" title="Cataract surgeries performed" className={styles.blue} href="#services">Precision cataract care using micro-incision techniques and the Oertli Faros platform, with treatment selected for each patient.</Fact>
        <Photo src="/service-diagnostics.png" alt="Advanced digital eye diagnostic equipment in use" className={styles.photoTwo} />
        <Fact value="Est. 2019" title="Rooted in Gandhidham" className={styles.lilac} href="#contact">Accessible specialist eye care for families from Gandhidham, Adipur, Anjar, Bhachau and across the Kutch region.</Fact>
        <Photo src="/neyani-hero-care.png" alt="A doctor speaking with a mother and daughter in an eye clinic" className={styles.photoThree} />
        <Fact value="80,000+" title="Patients cared for" className={styles.yellow} href="#doctors">Clear communication, evidence-based treatment and continuity of care from our ophthalmology team.</Fact>
      </div>
    </section>
  );
}

function Photo({ src, alt, className }: { src:string; alt:string; className:string }) {
  return <div className={`${styles.photo} ${className}`}><Image src={src} alt={alt} fill quality={95} sizes="(max-width: 700px) 100vw, 33vw" /></div>;
}

function Fact({ value, title, href, className, children }: { value:string; title:string; href:string; className:string; children:React.ReactNode }) {
  return <article className={`${styles.fact} ${className}`}><strong>{value}</strong><h3>{title}</h3><p>{children}</p><a href={href}>Learn more <ArrowRight size={16} aria-hidden="true" /></a></article>;
}
