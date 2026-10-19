import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CalendarDays, Check, Clock3, GraduationCap, Languages, MapPin, MessageCircle, Phone, Quote } from "lucide-react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB/WhatsAppFAB";
import { hospital } from "@/content/hospital";
import { doctorProfiles, getDoctorProfile } from "@/content/doctorProfiles";
import heroStyles from "../doctors.module.css";
import DoctorsHero from "../DoctorsHero";
import styles from "./profile.module.css";

type ProfilePageProps = { params: Promise<{ id: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return doctorProfiles.map((profile) => ({ id: profile.doctor.id }));
}

export async function generateMetadata({ params }: ProfilePageProps): Promise<Metadata> {
  const { id } = await params;
  const profile = getDoctorProfile(id);
  if (!profile) return {};
  return {
    title: `${profile.doctor.name} — ${profile.doctor.role} | ${hospital.name}`,
    description: profile.description,
  };
}

export default async function DoctorProfilePage({ params }: ProfilePageProps) {
  const { id } = await params;
  const profile = getDoctorProfile(id);
  if (!profile) notFound();

  const { doctor, type, image, about, expertise, services, quote } = profile;
  const isLead = type === "lead";
  const otherDoctors = doctorProfiles.filter((item) => item.doctor.id !== doctor.id);

  return (
    <>
      <Header />
      <main className={heroStyles.main}>
        <DoctorsHero specialistsHref="/doctors#specialists-title" />

        <section className={styles.body} aria-label={`${doctor.name} profile`}>
          <div className={`container ${styles.layout}`}>
            <div className={styles.mainColumn}>
              <article className={styles.card} aria-labelledby="about-doctor">
                <div className={styles.aboutHead}>
                  <figure className={styles.portrait}>
                    <Image src={image} alt={doctor.name} fill sizes="(max-width: 600px) 90vw, 220px" style={profile.imagePosition ? { objectPosition: profile.imagePosition } : undefined} />
                  </figure>
                  <div className={styles.aboutIntro}>
                    <p className={styles.sectionLabel}><span /> About</p>
                    <h2 id="about-doctor">{doctor.name}</h2>
                    <p className={styles.aboutRole}>{doctor.role}</p>
                    <ul className={styles.aboutFacts}>
                      <li><GraduationCap size={16} aria-hidden="true" />{doctor.credentials || profile.specialty}</li>
                      <li><CalendarDays size={16} aria-hidden="true" />At {hospital.name} · Gandhidham</li>
                      <li><Languages size={16} aria-hidden="true" />{hospital.languages.join(", ")}</li>
                    </ul>
                  </div>
                </div>
                <div className={styles.aboutBody}>
                  {about.map((paragraph, index) => <p className={index === 0 ? styles.lead : styles.paragraph} key={paragraph}>{paragraph}</p>)}
                  {quote && <blockquote className={styles.quote}><Quote size={18} aria-hidden="true" /><p>{quote}</p></blockquote>}
                </div>
              </article>

              <article className={styles.card} aria-labelledby="doctor-expertise">
                <p className={styles.sectionLabel}><span /> Expertise</p>
                <h2 id="doctor-expertise">Areas of <span>expertise</span></h2>
                <ul className={styles.expertiseGrid}>
                  {expertise.map((item) => <li key={item.title}>
                    <span><Check size={16} aria-hidden="true" /></span>
                    <div><h3>{item.title}</h3><p>{item.detail}</p></div>
                  </li>)}
                </ul>
              </article>

              <article className={styles.card} aria-labelledby="doctor-services">
                <p className={styles.sectionLabel}><span /> Services</p>
                <h2 id="doctor-services">Related <span>services</span></h2>
                <ul className={styles.serviceList}>
                  {services.map((service) => <li key={service.href}>
                    <Link href={service.href}>
                      <span><strong>{service.title}</strong>{service.detail}</span>
                      <ArrowRight size={18} aria-hidden="true" />
                    </Link>
                  </li>)}
                </ul>
              </article>
            </div>

            <aside className={styles.sidebar} aria-label="Consultation details">
              <div className={styles.infoCard}>
                <h2>Consultation details</h2>
                {doctor.credentials && <div className={styles.infoRow}>
                  <GraduationCap size={18} aria-hidden="true" />
                  <p><strong>{doctor.credentials}</strong>{doctor.fellowships}</p>
                </div>}
                <div className={styles.infoRow}>
                  <Clock3 size={18} aria-hidden="true" />
                  {isLead
                    ? <p><strong>{hospital.hours.weekdays}</strong>{hospital.hours.morning} · {hospital.hours.evening}<br />Sunday: {hospital.hours.sunday}</p>
                    : <p><strong>Visiting consultation days</strong>Please call to confirm available dates and times.</p>}
                </div>
                <div className={styles.infoRow}>
                  <Languages size={18} aria-hidden="true" />
                  <p><strong>Languages</strong>{hospital.languages.join(", ")}</p>
                </div>
                <div className={styles.infoRow}>
                  <MapPin size={18} aria-hidden="true" />
                  <p><strong>{hospital.name}</strong>{hospital.address}</p>
                </div>
                <div className={styles.infoActions}>
                  <Link href="/contact#appointment" className={styles.bookButton}>Book appointment <span><ArrowRight size={16} aria-hidden="true" /></span></Link>
                  <a href={hospital.phoneUrl} className={styles.ghostButton}><Phone size={16} aria-hidden="true" /> Call</a>
                  <a href={hospital.whatsappUrl} className={styles.ghostButton} target="_blank" rel="noopener noreferrer"><MessageCircle size={16} aria-hidden="true" /> WhatsApp</a>
                </div>
              </div>
            </aside>
          </div>

          <div className={`container ${styles.others}`}>
            <header>
              <p className={styles.sectionLabel}><span /> Our team</p>
              <h2>Meet our other <span>specialists</span></h2>
            </header>
            <div className={styles.otherGrid}>
              {otherDoctors.map((item) => <Link href={`/doctors/${item.doctor.id}`} className={styles.otherCard} key={item.doctor.id}>
                <span className={styles.otherImage}><Image src={item.image} alt="" fill sizes="140px" style={item.imagePosition ? { objectPosition: item.imagePosition } : undefined} /></span>
                <span className={styles.otherCopy}>
                  <small>{item.type === "lead" ? "Lead surgeon" : "Visiting consultant"}</small>
                  <strong>{item.doctor.name}</strong>
                  <em>{item.doctor.role}</em>
                  <b>View profile <ArrowRight size={15} aria-hidden="true" /></b>
                </span>
              </Link>)}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
