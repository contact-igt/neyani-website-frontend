import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarCheck, CalendarClock, CalendarDays, Check, CheckCircle2, ChevronDown, ClipboardPlus, Clock3, Droplets, Eye, FileText, Glasses, HeartHandshake, Languages, Microscope, ScanEye, ScanLine, ShieldCheck, Stethoscope, Phone, Users } from "lucide-react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import FAQ from "@/components/FAQ/FAQ";
import Testimonials from "@/components/Testimonials/Testimonials";
import WhatsAppFAB from "@/components/WhatsAppFAB/WhatsAppFAB";
import { hospital } from "@/content/hospital";
import EyeProblemsSlider from "./EyeProblemsSlider";
import styles from "./general.module.css";

const service = hospital.mosaicServices.find((item) => item.id === "general")!;

const checkupBenefits = [
  { icon: ScanEye, label: "Early detection", title: "Detect changes early", copy: "Regular reviews can identify changes in the retina, cornea or optic nerve before they noticeably affect sight." },
  { icon: ShieldCheck, label: "Vision protection", title: "Protect everyday vision", copy: "Tracking vision and eye health over time helps guide care before concerns disrupt reading, work or driving." },
  { icon: Eye, label: "Preventive care", title: "Screen for silent conditions", copy: "Some eye conditions may have few early symptoms, making a routine examination especially valuable." },
  { icon: Clock3, label: "Regular monitoring", title: "Monitor changing needs", copy: "Your prescription and eye health can be reviewed as your lifestyle, work and vision requirements change." },
  { icon: ScanLine, label: "Clinical diagnostics", title: "Use tests when indicated", copy: "Imaging and diagnostic tests are selected after examination when a closer look is needed." },
  { icon: Stethoscope, label: "Personalised care", title: "Plan your next step", copy: "Your ophthalmologist explains the findings and recommends follow-up, treatment or referral when appropriate." },
] as const;

const warningSigns = [
  { title: "Blurred vision", detail: "Blurred vision that is new, persistent or affecting daily tasks should be assessed." },
  { title: "Headaches", detail: "Headaches linked to reading, screen use or visual effort may need a vision and eye-health review." },
  { title: "Eye pain", detail: "Pain, pressure or a deep ache in or around the eye needs prompt professional advice." },
  { title: "Redness", detail: "Ongoing redness, especially with discomfort, discharge or light sensitivity, should be checked." },
  { title: "Watering eyes", detail: "Excessive tearing can be caused by irritation, dryness, allergy or a tear-drainage concern." },
  { title: "Difficulty reading", detail: "Needing to hold text farther away, squinting or tiring quickly may indicate a change in vision." },
  { title: "Frequent prescription changes", detail: "A prescription that changes often is a good reason for a comprehensive eye examination." },
  { title: "Diabetes or family history of eye disease", detail: "Regular checks help monitor eye health when you have diabetes or a close family history of eye disease." },
] as const;

const examinationSteps = [
  { icon: ClipboardPlus, title: "Welcome & consultation", copy: "Discuss your vision and any concerns." },
  { icon: ScanEye, title: "Vision assessment", copy: "We check clarity, focus and prescription needs." },
  { icon: Microscope, title: "Eye health tests", copy: "Targeted tests are selected when needed." },
  { icon: FileText, title: "Results explained", copy: "Your ophthalmologist discusses the findings." },
  { icon: CalendarClock, title: "Care plan & follow-up", copy: "Leave with clear next steps for your eyes." },
] as const;

const reasons = [
  { icon: Stethoscope, title: "Specialist-led care", description: "Examinations are led by Dr. Yajuvendra Singh Rathore, MBBS, MS Ophthalmology, with fellowship training in phaco and refractive surgery." },
  { icon: ScanEye, title: "Thorough eye examinations", description: "Slit-lamp examination, retinoscopy and a dedicated refraction lane support a careful check of both vision and eye health." },
  { icon: Glasses, title: "Accurate prescriptions", description: "Vision is tested carefully so spectacle prescriptions support clear, comfortable sight for reading, work and daily life." },
  { icon: Droplets, title: "Dry eye & allergy care", description: "Assessment and management of dry eye, conjunctivitis and allergic eye disease, based on the cause of your symptoms." },
  { icon: ScanLine, title: "Diagnostics under one roof", description: "OCT, fundus photography and visual field testing are available when your examination shows they are needed." },
  { icon: Users, title: "Care for the whole family", description: "Routine annual checkups for adults and children, with dedicated pediatric examination facilities for younger patients." },
  { icon: CalendarCheck, title: "Established locally", description: "Neyani Eye Hospital has served patients and families in Gandhidham and the wider Kutch region since 2019." },
  { icon: Languages, title: "Clear communication", description: "Consultations are supported in English, Hindi and Gujarati to help patients and families understand their care." },
] as const;

export const metadata: Metadata = {
  title: `${service.title} - ${hospital.name}`,
  description: service.description,
};

export default function GeneralEyeCarePage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero} aria-labelledby="general-eye-care-heading">
          <Image
            src="/neyani-eye-exam-banner-enhanced.png"
            alt="An ophthalmologist performing a routine eye examination for an adult patient"
            fill
            priority
            quality={95}
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={styles.heroPanel}>
            <div className={`container ${styles.copy}`}>
              <p className={styles.kicker}><span><Eye size={16} aria-hidden="true" /></span> General eye care</p>
              <h1 id="general-eye-care-heading">See clearly.<br /><span>Stay ahead of changes.</span></h1>
              <p className={styles.intro}>Routine eye examinations help protect everyday vision, update your prescription and identify eye concerns before they begin to affect your sight.</p>
              <div className={styles.actions}>
                <Link href="/contact#appointment" className={styles.primary}>Book an eye checkup <span><ArrowRight size={18} aria-hidden="true" /></span></Link>
                <a href={hospital.phoneUrl} className={styles.call}><Phone size={17} aria-hidden="true" /> {hospital.phone}</a>
              </div>
              <div className={styles.facts} aria-label="General eye care highlights">
                <p><Glasses aria-hidden="true" /><span><strong>Vision assessment</strong> for glasses and contact-lens needs</span></p>
                <p><ScanEye aria-hidden="true" /><span><strong>Detailed eye review</strong> when your symptoms need closer attention</span></p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.overview} aria-labelledby="general-eye-care-overview">
          <div className={`container ${styles.overviewGrid}`}>
            <div className={styles.overviewCopy}>
              <p className={styles.sectionLabel}><span /> Comprehensive eye care</p>
              <h2 id="general-eye-care-overview">What General<br /><span>Eye Care Covers</span></h2>
              <p>Beyond routine spectacle-power checks, a comprehensive examination assesses the eye from the front surface to the retina and optic nerve.</p>
              <ul>
                <li><CheckCircle2 aria-hidden="true" /> Slit-lamp examination</li>
                <li><CheckCircle2 aria-hidden="true" /> Refraction and vision assessment</li>
                <li><CheckCircle2 aria-hidden="true" /> Dilated retinal evaluation when indicated</li>
              </ul>
              <Link href="/contact#appointment" className={styles.overviewAction}>Book an eye examination <ArrowRight size={15} aria-hidden="true" /></Link>
              <small><Stethoscope size={13} aria-hidden="true" /> Specialist eye care in Gandhidham, Kutch</small>
            </div>

            <div className={styles.overviewVisual}>
              <figure>
                <Image src="/neyani-eye-exam-banner-enhanced.png" alt="An ophthalmologist examining a patient's eye with a clinical microscope" fill quality={90} sizes="(max-width: 850px) 100vw, 45vw" />
                <figcaption><strong>Clinical eye examination</strong>Carefully assessing the eye and vision</figcaption>
              </figure>
              <aside className={`${styles.examCard} ${styles.comprehensive}`}><Eye aria-hidden="true" /><span><strong>Comprehensive exam</strong>Thorough review of vision and eye health.</span></aside>
              <aside className={`${styles.examCard} ${styles.assessment}`}><Glasses aria-hidden="true" /><span><strong>Vision assessment</strong>Refraction for clear, comfortable sight.</span></aside>
              <aside className={`${styles.examCard} ${styles.screening}`}><ScanLine aria-hidden="true" /><span><strong>Routine screening</strong>Examination tailored to your needs.</span></aside>
              <aside className={`${styles.examCard} ${styles.detection}`}><ScanEye aria-hidden="true" /><span><strong>Early detection</strong>Changes are identified before symptoms affect sight.</span></aside>
            </div>
          </div>
        </section>

        <section className={styles.conditions} aria-labelledby="common-eye-problems-heading">
          <div className="container">
            <div className={styles.conditionsHeading}>
              <div>
                <p className={styles.sectionLabel}><span /> Everyday eye concerns</p>
                <h2 id="common-eye-problems-heading">Common eye problems<br /><span>we treat</span></h2>
              </div>
              <Link href="/contact#appointment" className={styles.allConditions}>Book a consultation <i><ArrowRight size={16} aria-hidden="true" /></i></Link>
            </div>
            <EyeProblemsSlider />
          </div>
        </section>

        <section className={styles.checkups} aria-labelledby="checkups-heading">
          <div className={`container ${styles.checkupsInner}`}>
            <div className={styles.checkupsHeading}>
              <p className={styles.sectionLabel}><span /> Preventive ophthalmology · lifelong vision care</p>
              <h2 id="checkups-heading">Why Regular <span>Eye Checkups</span> Matter</h2>
              <p>Many eye conditions develop quietly. A comprehensive examination helps your ophthalmologist assess vision, eye health and whether any further tests are needed.</p>
              <ul>
                <li><ShieldCheck size={14} aria-hidden="true" /> Comprehensive eye-health review</li>
                <li><Clock3 size={14} aria-hidden="true" /> Consultation time based on your needs</li>
                <li><ScanLine size={14} aria-hidden="true" /> Diagnostics when clinically indicated</li>
              </ul>
            </div>
            <div className={styles.checkupGrid}>
              <svg className={styles.checkupConnectors} aria-hidden="true" viewBox="0 0 1200 500" preserveAspectRatio="none">
                <path d="M 306 76 C 410 76, 420 150, 498 170" />
                <path d="M 306 250 C 390 250, 425 250, 472 250" />
                <path d="M 306 424 C 410 424, 420 350, 498 330" />
                <path d="M 894 76 C 790 76, 780 150, 702 170" />
                <path d="M 894 250 C 810 250, 775 250, 728 250" />
                <path d="M 894 424 C 790 424, 780 350, 702 330" />
                <circle cx="498" cy="170" r="4" />
                <circle cx="472" cy="250" r="4" />
                <circle cx="498" cy="330" r="4" />
                <circle cx="702" cy="170" r="4" />
                <circle cx="728" cy="250" r="4" />
                <circle cx="702" cy="330" r="4" />
              </svg>
              <div className={styles.checkupColumn}>{checkupBenefits.slice(0, 3).map((benefit) => <CheckupBenefit key={benefit.title} {...benefit} />)}</div>
              <div className={styles.checkupVisual}>
                <Image src="/general-checkup-illustration-indian.png" alt="Indian ophthalmologist examining a patient with a slit-lamp microscope" fill quality={92} sizes="(max-width: 850px) 82vw, 33vw" />
                <span className={styles.visualTag}>Comprehensive eye examination</span>
              </div>
              <div className={styles.checkupColumn}>{checkupBenefits.slice(3).map((benefit) => <CheckupBenefit key={benefit.title} {...benefit} />)}</div>
            </div>
          </div>
        </section>
        <section className={styles.warningSigns} aria-labelledby="warning-signs-heading">
          <div className={`container ${styles.warningGrid}`}>
            <div className={styles.warningCopy}>
              <h2 id="warning-signs-heading">Watch Out for These<br /><span>Symptoms</span></h2>
              <ul>
                {warningSigns.map((sign, index) => (
                  <li key={sign.title}>
                    <details open={index === 0}>
                      <summary><i>{String(index + 1).padStart(2, "0")}</i><strong>{sign.title}</strong><ChevronDown size={16} aria-hidden="true" /></summary>
                      <p>{sign.detail}</p>
                    </details>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.warningMosaic} aria-label="Examples of common visual warning signs">
              <figure className={styles.mosaicPrescription}><Image src="/keratoconus-frequent-power.png" alt="Person struggling with a frequent prescription change" fill sizes="(max-width: 600px) 100vw, 45vw" /><figcaption>Prescription Changes</figcaption></figure>
              <figure className={styles.mosaicReading}><Image src="/keratoconus-blurred-vision.png" alt="Person experiencing blurred vision while reading" fill sizes="(max-width: 600px) 50vw, 30vw" /><figcaption>Blurred Vision</figcaption></figure>
              <figure className={styles.mosaicStrain}><Image src="/keratoconus-light-sensitivity.png" alt="Person shielding their eyes from bright light" fill sizes="(max-width: 600px) 50vw, 45vw" /><figcaption>Light Sensitivity</figcaption></figure>
              <figure className={styles.mosaicGlare}><Image src="/keratoconus-halos-glare.png" alt="Driver affected by glare from vehicle lights at night" fill sizes="(max-width: 600px) 50vw, 45vw" /><figcaption>Eye Strain &amp; Glare</figcaption></figure>
              <figure className={styles.mosaicRedness}><Image src="/general-eye-warning-mosaic.png" alt="Person with a red, watering eye" fill sizes="(max-width: 600px) 50vw, 30vw" /><figcaption>Redness &amp; Watering</figcaption></figure>
            </div>
          </div>
        </section>
        <section className={styles.examJourney} aria-labelledby="exam-journey-heading">
          <div className="container">
            <div className={styles.journeyHeading}>
              <p className={styles.sectionLabel}><span /> Your visit, clearly explained</p>
              <h2 id="exam-journey-heading">Your eye examination: <span>what to expect</span></h2>
              <p>A calm, thorough appointment designed around your eye health and everyday vision.</p>
            </div>
            <ol className={styles.journeySteps}>
              {examinationSteps.map(({ icon: Icon, title, copy }, index) => (
                <li key={title}>
                  <span className={styles.journeyNumber}>{String(index + 1).padStart(2, "0")}</span>
                  <span className={styles.journeyIcon}><Icon size={27} aria-hidden="true" /></span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section className={styles.reasons} aria-labelledby="why-neyani">
          <div className="container">
            <div className={styles.reasonsHeading}>
              <p className={styles.sectionLabel}><span /> Why choose us</p>
              <h2 id="why-neyani">Why patients choose <span>Neyani Eye Hospital</span><br />for everyday eye care</h2>
              <p>Thorough examinations, clear explanations and considerate care for patients and families across Gandhidham and the Kutch region.</p>
            </div>
            <div className={styles.reasonGrid}>
              {reasons.map((reason, index) => (
                <article className={styles.reasonCard} key={reason.title}>
                  <div className={styles.reasonTop}><span><reason.icon size={21} strokeWidth={1.7} aria-hidden="true" /></span><b>{String(index + 1).padStart(2, "0")}</b></div>
                  <h3>{reason.title}</h3>
                  <p>{reason.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <Testimonials />
        <FAQ
          faqs={hospital.generalFaqs}
          intro="Helpful guidance about routine eye checks, prescriptions, common eye problems and what to expect from your visit."
          image="/retina-warning-consultation.png"
          imageAlt="An ophthalmologist explaining eye examination results to a patient and her daughter"
        />
        <section className={styles.finalCta} aria-labelledby="general-consultation">
          <div className={`container ${styles.ctaPanel}`}>
            <div className={styles.ctaCopy}>
              <p className={styles.ctaLabel}><span /> Book an appointment</p>
              <h2 id="general-consultation">Take care of<br />your everyday vision</h2>
              <p>Book an eye examination to check your vision, review your prescription and discuss any eye concerns with the Neyani Eye Hospital team.</p>
              <div className={styles.ctaActions}>
                <Link href="/contact#appointment"><CalendarDays size={17} aria-hidden="true" /> Book an appointment <ArrowRight size={16} aria-hidden="true" /></Link>
                <a href={hospital.phoneUrl}><Phone size={16} aria-hidden="true" /> Call {hospital.phone}</a>
              </div>
              <p className={styles.ctaDetail}><Check size={15} aria-hidden="true" /> Your visit includes an eye examination, results explained clearly and a plan for next steps.</p>
            </div>
            <div className={styles.ctaVisual}>
              <Image src="/service-glaucoma.png" alt="An ophthalmologist examining a patient's eyes with a slit lamp" fill quality={95} sizes="(max-width: 760px) 100vw, 38vw" />
              <div><HeartHandshake size={18} aria-hidden="true" /><span><strong>Care for the whole family</strong>Routine checkups for adults and children</span></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}

function CheckupBenefit({ icon: Icon, label, title, copy }: (typeof checkupBenefits)[number]) {
  return <article className={styles.checkupCard}><span className={styles.checkupIcon}><Icon size={20} aria-hidden="true" /></span><div><p>{label}</p><h3>{title}</h3><span>{copy}</span></div></article>;
}
