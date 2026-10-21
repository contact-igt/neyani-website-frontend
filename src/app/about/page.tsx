import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Baby, CalendarDays, Check, Eye, GraduationCap, Heart, Info, MapPin, MessageCircle, Phone, ScanEye, ShieldCheck, UsersRound } from "lucide-react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import FAQ from "@/components/FAQ/FAQ";
import WhatsAppFAB from "@/components/WhatsAppFAB/WhatsAppFAB";
import FacilitiesCarousel from "./FacilitiesCarousel";
import ImpactStats from "./ImpactStats";
import StatValue from "@/components/StatValue/StatValue";
import { hospital } from "@/content/hospital";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: `About ${hospital.name}`,
  description: `Learn about the specialist eye-care approach at ${hospital.name} in Gandhidham.`,
};

const storyMilestones = [
  { icon: CalendarDays, year: "1989", title: "Founded in Rapar, Kutch", text: "Neyani Eye Hospital was founded by Dr. Shivpal Singh Rathore." },
  { icon: UsersRound, year: "2019", title: "Second Eye Centre Established in Gandhidham", text: "The hospital expanded its services with its second eye centre in Gandhidham." },
  { icon: MapPin, year: "Today", title: "Care Across Generations", text: "The legacy is being carried forward by Dr. Yajuvendra Singh Rathore. Consultation services are also provided through the Bhachau OPD centre." },
] as const;

const carePrinciples = [
  { icon: Eye, title: "Diagnostic-first care", text: "Care begins with a thorough eye examination and accurate diagnosis." },
  { icon: UsersRound, title: "Coordinated services", text: "Our specialists work together to provide the right treatment plan for your needs." },
  { icon: MessageCircle, title: "Clear communication", text: "We explain your condition, treatment options and next steps in simple, easy-to-understand language." },
  { icon: Heart, title: "Patient-focused care", text: "Your comfort, safety and long-term eye health are at the heart of everything we do." },
] as const;

const specialists = [
  { doctor: hospital.doctors[0], portrait: "/dr.yajuvendra-singh.jpg", position: "35% 30%", label: "Lead surgeon", specialty: "Proprietor and Lead Surgeon", description: "Dr. Yajuvendra Singh Rathore leads the clinical care at Neyani Eye Hospital with a focus on clear communication, ethical treatment and patient-first care.", expertise: [{ icon: Eye, label: "Cataract Surgery" }, { icon: ShieldCheck, label: "General Eye Care" }] },
  { doctor: hospital.doctors[1], portrait: "/dr.urmil-shah.jpeg", position: "center top", label: "Visiting consultant", specialty: "Retina Specialist", description: "Dr. Urmil Shah specialises in medical and surgical management of retinal conditions, including diabetic retinopathy, macular disorders and other complex retinal diseases.", expertise: [{ icon: Eye, label: "Medical and Surgical Retina" }, { icon: ScanEye, label: "Retinal Disorders" }] },
  { doctor: hospital.doctors[2], portrait: "/dr.ankit-shah.jpeg", position: "center top", label: "Visiting consultant", specialty: "Pediatric Ophthalmology and Squint Surgery", description: "Dr. Ankit Shah specialises in pediatric ophthalmology and squint surgery, helping children with vision and eye alignment issues.", expertise: [{ icon: Baby, label: "Pediatric Ophthalmology" }, { icon: Eye, label: "Squint Evaluation & Surgery" }] },
] as const;

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero} aria-labelledby="about-title">
          <div className={styles.orbit} aria-hidden="true" />
          <div className={`container ${styles.layout}`}>
            <div className={styles.copy}>
              <p className={styles.kicker}><span /> About Neyani Eye Hospital</p>
              <h1 id="about-title">Trusted eye care for brighter <em>tomorrows.</em></h1>
              <p className={styles.intro}>Neyani Eye Hospital was founded in Rapar, Kutch, in 1989. Its second eye centre was established in Gandhidham in 2019, continuing the hospital&apos;s commitment to dependable and accessible eye care.</p>
              <div className={styles.actions}>
                <Link href="/contact#appointment" className={styles.primary}>Book an appointment <span><ArrowRight size={18} aria-hidden="true" /></span></Link>
                <a href={hospital.phoneUrl} className={styles.call}><Phone size={18} aria-hidden="true" /> {hospital.phone}</a>
              </div>
            </div>

            <div className={styles.visual}>
              <div className={styles.mainImage}><Image src="/pterygium-exam-slit-lamp-v1.png" alt="Ophthalmologist carefully examining an adult patient's eyes with a slit lamp" fill priority sizes="(max-width: 760px) 90vw, 38vw" /></div>
              <div className={styles.childImage}><Image src="/about-pediatric-refraction-v1.png" alt="Child receiving a refraction check at an eye clinic" fill sizes="(max-width: 760px) 40vw, 16vw" /></div>
              <div className={styles.facilityImage}><Image src="/about-banner3.jpg" alt="Neyani Eye Hospital building exterior" fill sizes="(max-width: 760px) 52vw, 30vw" /></div>
              <aside className={`${styles.note} ${styles.noteTop}`}><span><Eye size={24} aria-hidden="true" /></span><p><strong>Personalised care</strong>Every treatment plan begins with a thorough eye examination.</p></aside>
              <dl className={styles.stats}>
                {hospital.stats.map((stat, index) => {
                  const Icon = [CalendarDays, UsersRound, Eye][index];
                  return <div key={stat.label}><span><Icon size={25} aria-hidden="true" /></span><dt><StatValue value={stat.value} /></dt><dd>{stat.label}</dd></div>;
                })}
              </dl>
            </div>
          </div>
        </section>
        <section className={styles.story} aria-labelledby="story-title">
          <div className={`container ${styles.storyLayout}`}>
            <div className={styles.storyVisual}>
              <div className={styles.storyFacade}><Image src="/journey2.jpg" alt="Interior corridor at Neyani Eye Hospital" fill sizes="(max-width: 800px) 92vw, 48vw" /></div>
              <div className={styles.storyExam}><Image src="/journey4.jpg" alt="Consultation room at Neyani Eye Hospital" fill sizes="(max-width: 800px) 58vw, 28vw" /></div>
              <div className={styles.storyNote}><span><Eye size={25} aria-hidden="true" /></span><p><strong>Personalised care</strong>Every treatment plan begins with a thorough eye examination.</p></div>
            </div>
            <div className={styles.storyCopy}>
              <p className={styles.kicker}><span /> Our story</p>
              <h2 id="story-title">Our Legacy</h2>
              <p className={styles.storyIntro}>Neyani Eye Hospital is committed to providing eye care supported by medical expertise and modern technology. Our focus is on helping patients understand their eye health and access appropriate care for their vision needs.</p>
              <ol className={styles.timeline}>
                {storyMilestones.map(({ icon: Icon, year, title, text }) => <li key={year}><span className={styles.timelineDot} /><span className={styles.timelineIcon}><Icon size={27} aria-hidden="true" /></span><div><strong>{year}</strong><h3>{title}</h3><p>{text}</p></div></li>)}
              </ol>
              <Link href="/contact#appointment" className={styles.storyCta}>Book an appointment <span><ArrowRight size={18} aria-hidden="true" /></span></Link>
            </div>
          </div>
        </section>
        <section className={styles.founderSection} aria-labelledby="founder-title">
          <div className={`container ${styles.founderContainer}`}>
            <header className={styles.founderHeading}>
              <p className={styles.founderKicker}>
                <span className={styles.founderHeadingLine} aria-hidden="true" />
                OUR FOUNDER
                <span className={styles.founderHeadingLine} aria-hidden="true" />
              </p>
              <h2 id="founder-title" className={styles.founderMainHeading}>
                The Legacy Behind <span className={styles.founderTitleAccent}>Neyani Eye Hospital</span>
              </h2>
            </header>
            <article className={styles.founderCard}>
              <div className={styles.founderPhotoWrap}>
                <Image
                  src="/founder-dr-shivpal-singh-rathore.jpg"
                  alt="Dr. Shivpal Singh Rathore — Founder of Neyani Eye Hospital"
                  fill
                  quality={95}
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
                  className={styles.founderPhoto}
                />
              </div>
              <div className={styles.founderBody}>
                <p className={styles.founderRoleLabel}>FOUNDER OF NEYANI EYE HOSPITAL</p>
                <h3 className={styles.founderName}>Dr. Shivpal Singh Rathore</h3>
                <h4 className={styles.founderQualifications}>MBBS, MS (Ophthalmology)</h4>
                <blockquote className={styles.founderDescription}>
                  &ldquo;Dr. Shivpal Singh Rathore founded Neyani Eye Hospital in Rapar, Kutch, in 1989, with a commitment to providing dependable and accessible eye care to the people of Kutch.&rdquo;
                </blockquote>
                <div className={styles.founderMetaCards}>
                  <div className={styles.founderMetaCard}>
                    <span className={styles.founderMetaIconWrap}>
                      <CalendarDays size={20} aria-hidden="true" />
                    </span>
                    <div className={styles.founderMetaCardContent}>
                      <span className={styles.founderMetaLabel}>Founded</span>
                      <strong className={styles.founderMetaValue}>1989</strong>
                    </div>
                  </div>
                  <div className={styles.founderMetaCard}>
                    <span className={styles.founderMetaIconWrap}>
                      <MapPin size={20} aria-hidden="true" />
                    </span>
                    <div className={styles.founderMetaCardContent}>
                      <span className={styles.founderMetaLabel}>Location</span>
                      <strong className={styles.founderMetaValue}>Rapar, Kutch</strong>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
        <section className={styles.philosophy} aria-labelledby="philosophy-title">
          <div className={`container ${styles.philosophyLayout}`}>
            <div className={styles.philosophyCopy}>
              <p className={styles.kicker}><span /> Care philosophy</p>
              <h2 id="philosophy-title">The principles behind <em>every patient&apos;s care</em></h2>
              <p className={styles.philosophyIntro}>Every decision begins with understanding your eyes, your needs, and explaining every next step.</p>
              <div className={styles.principleGrid}>
                {carePrinciples.map(({ icon: Icon, title, text }, index) => <article className={`${styles.principle} ${styles[`principle${index + 1}`]}`} key={title}><span><Icon size={34} aria-hidden="true" /></span><div><h3>{title}</h3><p>{text}</p></div></article>)}
              </div>
            </div>
            <div className={styles.philosophyVisual}>
              <div className={styles.diagnosticsImage}><Image src="/patient-care2.jpg" alt="Patient care consultation room at Neyani Eye Hospital" fill sizes="(max-width: 850px) 92vw, 49vw" /></div>
              <div className={styles.philosophyExam}><Image src="/pterygium-exam-slit-lamp-v1.png" alt="Detailed slit-lamp eye examination" fill sizes="(max-width: 850px) 54vw, 28vw" /></div>
            </div>
          </div>
        </section>
        <section className={styles.specialists} aria-labelledby="specialists-title">
          <div className={`container ${styles.specialistsInner}`}>
            <header className={styles.specialistsHeading}>
              <p className={styles.kicker}><span /> Our specialists</p>
              <h2 id="specialists-title">Meet the <em>Specialists</em></h2>
              <p>Experienced specialists working together for comprehensive eye care.<br />Our clinical team brings specialised expertise and a shared commitment to better vision for every patient.</p>
            </header>
            <div className={styles.specialistGrid}>
              {specialists.map(({ doctor, portrait, position, label, specialty, description, expertise }) => <article className={styles.specialistCard} key={doctor.id}>
                <div className={styles.specialistPortrait}><Image src={portrait} alt={doctor.name} fill sizes="(max-width: 760px) 88vw, 31vw" style={{ objectPosition: position }} /></div>
                <div className={styles.specialistBody}>
                  <p className={styles.specialistLabel}>{label}</p><h3>{doctor.name}</h3><h4>{specialty}</h4><p className={styles.specialistDescription}>{description}</p>
                  <div className={styles.expertise}><strong>Areas of expertise</strong><ul>{expertise.map(({ icon: Icon, label: itemLabel }) => <li key={itemLabel}><span><Icon size={20} aria-hidden="true" /></span>{itemLabel}</li>)}</ul></div>
                </div>
              </article>)}
            </div>
            <aside className={styles.specialistNote}><Info aria-hidden="true" /><span><strong>Retinal surgeries and squint surgeries are provided through visiting consultants or referral pathways when appropriate.</strong><small>We work with a network of experienced specialists to ensure you receive the most suitable care for your condition.</small></span></aside>
          </div>
        </section>
        <section className={styles.impact} aria-labelledby="impact-title">
          <div className={`container ${styles.impactInner}`}>
            <div className={styles.impactImage} aria-hidden="true"><Image src="/cataract-consultation-v2.png" alt="" fill sizes="(max-width: 760px) 100vw, 62vw" /></div>
            <header className={styles.impactHeading}>
              <p className={styles.kicker}><span /> Impact &amp; trust</p>
              <h2 id="impact-title">Trusted by thousands{" "}<br /><em>for healthier vision.</em></h2>
            </header>
            <ImpactStats />
            <aside className={styles.impactContact}>
              <div className={styles.languageSupport}><span><MessageCircle aria-hidden="true" /></span><div><strong>Languages We Support</strong><p>{hospital.languages.map((language) => <b key={language}>{language}</b>)}</p></div></div>
              <div className={styles.impactPhone}><span><Phone aria-hidden="true" /></span><div><strong>Contact Us</strong><a href={hospital.phoneUrl}>{hospital.phone}</a></div></div>
            </aside>
          </div>
        </section>
        <div className={styles.facilitiesWrap}><FacilitiesCarousel /></div>
        <div className={styles.faqWrap}><FAQ /></div>
        <section className={styles.finalCta} aria-labelledby="about-consultation">
          <div className={`container ${styles.ctaPanel}`}>
            <div className={styles.ctaCopy}>
              <p className={styles.ctaLabel}><span /> Take the first step</p>
              <h2 id="about-consultation">Start your vision<br />care journey</h2>
              <p>Book a consultation to discuss your symptoms, eye health and treatment options with the Neyani Eye Hospital team.</p>
              <div className={styles.ctaActions}>
                <Link href="/contact#appointment"><CalendarDays size={17} aria-hidden="true" /> Book consultation <ArrowRight size={16} aria-hidden="true" /></Link>
                <a href={hospital.phoneUrl}><Phone size={16} aria-hidden="true" /> Call {hospital.phone}</a>
              </div>
              <p className={styles.ctaDetail}><Check size={15} aria-hidden="true" /> Your consultation includes an eye examination and discussion of suitable next steps.</p>
            </div>
            <div className={styles.ctaVisual}>
              <Image src="/neyani-consultation.png" alt="A patient receiving an eye examination at Neyani Eye Hospital" fill quality={95} sizes="(max-width: 760px) 100vw, 38vw" />
              <div><Eye size={18} aria-hidden="true" /><span><strong>Personalized eye care</strong>Guidance based on your examination</span></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
