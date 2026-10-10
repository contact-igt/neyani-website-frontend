import Image from "next/image";
import { hospital } from "@/content/hospital";
import styles from "./DoctorSection.module.css";

const portraits = [
  { src: "/dr.yajuvendra-singh.jpg", position: "35% 30%", photo: true },
  { src: "/dr.urmil-shah.jpeg", position: undefined, photo: true },
  { src: "/dr.ankit-shah.jpeg", position: undefined, photo: true },
];
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
            <Image src={portraits[index].src} alt={portraits[index].photo ? doctor.name : `Representative portrait for ${doctor.name}`} fill quality={95} sizes="(max-width: 700px) 88vw, 33vw" className={styles.portrait} style={portraits[index].position ? { objectPosition: portraits[index].position } : undefined} />
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
