import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import FAQ from "@/components/FAQ/FAQ";
import WhatsAppFAB from "@/components/WhatsAppFAB/WhatsAppFAB";
import { hospital } from "@/content/hospital";
import { doctorProfiles } from "@/content/doctorProfiles";
import DoctorsHero from "./DoctorsHero";
import styles from "./doctors.module.css";

export const metadata: Metadata = {
  title: `Our Doctors | ${hospital.name}`,
  description: `Meet the ophthalmology specialists at ${hospital.name} in Gandhidham.`,
};


const [lead, ...consultants] = doctorProfiles;

export default function DoctorsPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <DoctorsHero />

        <section className={styles.specialists} aria-labelledby="specialists-title">
          <div className={`container ${styles.specialistsInner}`}>
            <header className={styles.specialistsHeading}>
              <p className={styles.sectionLabel}><span /> Meet our specialists</p>
              <h2 id="specialists-title">Expertise you can <span>trust</span></h2>
              <p>Experienced ophthalmologists dedicated to personalised and comprehensive eye care for every member of your family.</p>
            </header>

            <article className={`${styles.profileCard} ${styles.leadCard}`}>
              <div className={styles.profileImage}>
                <Image src={lead.image} alt={lead.doctor.name} fill sizes="(max-width: 760px) 100vw, 42vw" style={lead.imagePosition ? { objectPosition: lead.imagePosition } : undefined} />
              </div>
              <div className={styles.profileContent}>
                <p className={styles.rolePill}>Lead surgeon</p>
                <h3>{lead.doctor.name}</h3>
                <p className={styles.profileRole}>{lead.doctor.role}</p>
                {lead.doctor.credentials && <p className={styles.credentials}><strong>{lead.doctor.credentials}</strong>{lead.doctor.fellowships}</p>}
                <p className={styles.profileDescription}>{lead.description}</p>
                <blockquote className={styles.doctorQuote}><Quote size={18} aria-hidden="true" /><p>My focus is on safe, precise and personalised care for every patient.</p></blockquote>
                <div className={styles.profileActions}>
                  <Link href={`/doctors/${lead.doctor.id}`} className={styles.profileButton}>View profile <span><ArrowRight size={16} aria-hidden="true" /></span></Link>
                </div>
              </div>
            </article>

            <div className={styles.consultantGrid}>
              {consultants.map(({ doctor, image, description, skills }) => <article className={styles.profileCard} key={doctor.id}>
                <div className={styles.profileImage}><Image src={image} alt={doctor.name} fill sizes="(max-width: 760px) 100vw, 22vw" /></div>
                <div className={styles.profileContent}>
                  <p className={styles.rolePill}>Specialist</p>
                  <h3>{doctor.name}</h3>
                  <p className={styles.profileRole}>{doctor.role}</p>
                  <p className={styles.profileDescription}>{description}</p>
                  <ul className={styles.skills} aria-label={`${doctor.name} specialities`}>{skills.slice(0, 2).map((skill) => <li key={skill}>{skill}</li>)}</ul>
                  <div className={styles.profileActions}>
                    <Link href={`/doctors/${doctor.id}`} className={styles.profileButton}>View profile <span><ArrowRight size={16} aria-hidden="true" /></span></Link>
                  </div>
                </div>
              </article>)}
            </div>
          </div>
        </section>
        <FAQ
          faqs={hospital.doctorsFaqs}
          intro="Helpful guidance about choosing a doctor, specialist availability, second opinions and what to expect from your consultation."
          image="/neyani-consultation.png"
          imageAlt="An ophthalmologist explaining eye examination results to a patient"
        />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
