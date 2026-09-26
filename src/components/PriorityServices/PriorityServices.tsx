import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import styles from "./PriorityServices.module.css";

const services = [
  { title: "Robotic Cataract Surgery", description: "Painless micro-incision surgery with advanced Oertli Faros technology.", image: "/service-cataract.png", className: "cataract" },
  { title: "Glaucoma Care", description: "Early diagnosis, visual-field testing and tailored treatment to preserve sight.", image: "/service-glaucoma.png", className: "glaucoma" },
  { title: "Retina & Diabetic Eye Care", description: "Retinal screening, laser care and specialist support for complex conditions.", image: "/service-retina.png", className: "retina" },
  { title: "Pediatric Ophthalmology", description: "Gentle eye checks, squint care and vision support for children.", image: "/service-pediatric.png", className: "pediatric" },
  { title: "Eye Screening & Diagnostics", description: "OCT, fundus imaging, refraction and complete routine eye examinations.", image: "/service-diagnostics.png", className: "diagnostics" },
] as const;

export default function PriorityServices() {
  return (
    <section className={styles.section} id="services" aria-labelledby="services-heading">
      <div className={styles.intro}>
        <h2 id="services-heading">Specialist care for <span className="title-secondary">every vision need</span></h2>
        <p>Advanced diagnostics and focused treatment, delivered under one roof for patients of every age.</p>
      </div>
      <div className={styles.grid}>
        {services.map((service) => (
          <article key={service.title} className={`${styles.card} ${styles[service.className]}`}>
            <Image src={service.image} alt="" fill quality={95} sizes="(max-width: 760px) 100vw, 33vw" className={styles.image} />
            <div className={styles.shade} />
            <a href="#contact" className={styles.arrow} aria-label={`Enquire about ${service.title}`}><ArrowUpRight size={20} aria-hidden="true" /></a>
            <div className={styles.content}><h3>{service.title}</h3><p>{service.description}</p></div>
          </article>
        ))}
      </div>
    </section>
  );
}
