import Image from "next/image";
import { hospital } from "@/content/hospital";
import styles from "./DoctorSection.module.css";

const portraits = ["/doctor-yajuvendra.png", "/doctor-urmil.png", "/doctor-ankit.png"];
const specialties = ["All specialists", "Ophthalmology", "Retina", "Pediatric & Squint"];

export default function DoctorSection() {
  return (
    <section className={styles.section} id="doctors" aria-labelledby="doctors-heading">
      <div className={styles.heading}>
        <h2 id="doctors-heading">Dedicated experts<br /><span className="title-secondary">protecting your vision</span></h2>
        <p>Meet the specialists bringing surgical expertise, precise diagnosis and compassionate care to Gandhidham.</p>
      </div>

      {hospital.doctors.length > 3 && (
        <div className={styles.specialties} aria-label="Our clinical specialties">
          {specialties.map((specialty, index) => <span key={specialty} className={index === 0 ? styles.active : ""}>{specialty}</span>)}
        </div>
      )}

      <div className={styles.grid}>
        {hospital.doctors.map((doctor, index) => (
          <article className={`${styles.card} ${styles[`tone${index + 1}`]}`} key={doctor.id}>
            <Image src={portraits[index]} alt={`Representative portrait for ${doctor.name}`} fill quality={95} sizes="(max-width: 700px) 88vw, 33vw" className={styles.portrait} />
            <div className={styles.tint} />
            <div className={styles.info}>
              <h3>{doctor.name}</h3>
              <p className={styles.role}>{doctor.role}</p>
              {doctor.credentials && <p className={styles.credentials}>{doctor.credentials}</p>}
            </div>
          </article>
        ))}
      </div>

      {hospital.doctors.length > 3 && (
        <div className={styles.pagination} aria-hidden="true">
          {hospital.doctors.map((doctor) => <i key={doctor.id} />)}
        </div>
      )}
      {/* <p className={styles.imageNote}>Portrait imagery is representative.</p> */}
    </section>
  );
}
