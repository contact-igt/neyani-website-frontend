import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Activity, ArrowRight, CalendarDays, Check, Droplets, Eye, Gauge, HeartHandshake, History, Languages, Microscope, Phone, ScanEye, ScanLine, ShieldCheck, SlidersHorizontal, Stethoscope } from "lucide-react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import FAQ from "@/components/FAQ/FAQ";
import Testimonials from "@/components/Testimonials/Testimonials";
import BenefitsSlider from "@/components/BenefitsSlider/BenefitsSlider";
import WhatsAppFAB from "@/components/WhatsAppFAB/WhatsAppFAB";
import GlaucomaSigns from "./GlaucomaSigns";
import { hospital } from "@/content/hospital";
import styles from "./glaucoma.module.css";

const glaucoma = hospital.priorityServices.find((service) => service.id === "glaucoma")!;

const reasons = [
  { icon: Stethoscope, title: "Specialist-led care", description: "Care led by Dr. Yajuvendra Singh Rathore, MBBS, MS Ophthalmology, with experience in diagnosing and managing glaucoma." },
  { icon: Gauge, title: "Eye-pressure measurement", description: "Intraocular pressure (IOP) is measured as part of a glaucoma assessment and rechecked at follow-up visits." },
  { icon: ScanEye, title: "Optic nerve & OCT imaging", description: "Optic disc evaluation with OCT and fundus imaging helps detect and document changes to the optic nerve." },
  { icon: Activity, title: "Visual field testing", description: "A visual field analyser checks side vision, helping identify functional changes that may not be noticed day to day." },
  { icon: SlidersHorizontal, title: "Individual treatment plans", description: "Medical or surgical management is selected after examination, according to the type and stage of glaucoma." },
  { icon: History, title: "Long-term monitoring", description: "Comparing pressure, imaging and field results over time helps your doctor judge whether treatment is working." },
  { icon: HeartHandshake, title: "Patient support", description: "The team provides clear guidance through diagnosis, treatment and eligible insurance or TPA documentation." },
  { icon: Languages, title: "Clear communication", description: "Consultations are supported in English, Hindi and Gujarati to help patients and families understand their care." },
] as const;

const treatmentOptions = [
  {
    icon: ScanEye,
    label: "Diagnosis",
    title: "Comprehensive Glaucoma Assessment",
    description: "A detailed examination confirms whether glaucoma is present, identifies its type and records a baseline for comparing future results.",
    benefits: ["Eye-pressure (IOP) measurement", "Optic disc and OCT imaging", "Visual field testing"],
    image: "/service-diagnostics.png",
  },
  {
    icon: Droplets,
    label: "Medical management",
    title: "Pressure-Lowering Eye Drops",
    description: "Prescription eye drops are commonly the first treatment, lowering eye pressure to help protect the optic nerve from further damage.",
    benefits: ["Treatment matched to your eyes", "Guidance on using drops correctly", "Adjusted according to results"],
    image: "/glaucoma-eye-drops.png",
  },
  {
    icon: Microscope,
    label: "Surgical management",
    title: "Glaucoma Surgery",
    description: "When drops alone do not control pressure well enough, surgery may be recommended to improve fluid drainage from the eye.",
    benefits: ["Considered after careful assessment", "Benefits and risks explained", "Close post-operative follow-up"],
    image: "/glaucoma-surgery.png",
  },
  {
    icon: History,
    label: "Ongoing care",
    title: "Long-Term Monitoring",
    description: "Glaucoma needs lifelong follow-up. Regular reviews compare pressure, imaging and field results to check that treatment is working.",
    benefits: ["Scheduled follow-up visits", "Results compared over time", "Treatment reviewed when needed"],
    image: "/glaucoma-monitoring.png",
  },
] as const;

const benefits = [
  { image: "/service-diagnostics.png", title: "Earlier detection", description: "Regular checks can identify glaucoma before you notice any change in your vision." },
  { image: "/glaucoma-monitoring.png", title: "Protecting remaining sight", description: "Timely treatment aims to slow further optic-nerve damage and help preserve the vision you have." },
  { image: "/glaucoma-laser-treatment.png", title: "Controlled eye pressure", description: "Drops or surgery can lower eye pressure, one of the main factors that can be treated in glaucoma." },
  { image: "/glaucoma-eye-drops.png", title: "Clear understanding of your condition", description: "Results are explained clearly so you know your stage of glaucoma and why treatment matters." },
  { image: "/service-glaucoma.png", title: "Confidence in everyday life", description: "Well-managed glaucoma helps many people continue reading, driving and daily activities, depending on their eye health." },
] as const;

export const metadata: Metadata = {
  title: `${glaucoma.title} — ${hospital.name}`,
  description: glaucoma.description,
};

export default function GlaucomaPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero} aria-labelledby="glaucoma-heading">
          <Image
            src="/service-glaucoma.png"
            alt="An ophthalmologist carefully examining an adult patient's eyes for signs of glaucoma"
            fill
            preload
            quality={95}
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={styles.heroPanel}>
            <div className={styles.copy}>
              <p className={styles.kicker}><span><Eye size={16} aria-hidden="true" /></span> Glaucoma care</p>
              <h1 id="glaucoma-heading">Protect the sight<br /><span>you may not know you&apos;re losing.</span></h1>
              <p className={styles.intro}>Glaucoma can progress quietly. A detailed eye examination can detect changes early, so your doctor can plan treatment and help preserve the vision you have.</p>
              <div className={styles.actions}>
                <Link href="/contact#appointment" className={styles.primary}>Book a glaucoma check <span><ArrowRight size={18} aria-hidden="true" /></span></Link>
                <a href={hospital.phoneUrl} className={styles.call}><Phone size={17} aria-hidden="true" /> {hospital.phone}</a>
              </div>
              <div className={styles.facts} aria-label="Glaucoma care highlights">
                <p><Gauge aria-hidden="true" /><span><strong>Eye pressure check</strong> measured as part of assessment</span></p>
                <p><ScanEye aria-hidden="true" /><span><strong>Optic nerve review</strong> with imaging where indicated</span></p>
                <p><Activity aria-hidden="true" /><span><strong>Visual field testing</strong> to monitor functional vision</span></p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.explainer} aria-labelledby="what-is-glaucoma">
          <div className={`container ${styles.explainerLayout}`}>
            <div className={styles.explainerCopy}>
              <p className={styles.sectionLabel}><span /> Understanding glaucoma</p>
              <h2 id="what-is-glaucoma">What is <span>Glaucoma?</span></h2>
              <p>Glaucoma is a group of eye conditions that damage the optic nerve—the connection that carries visual information from the eye to the brain. It is often associated with raised pressure inside the eye, although it can also occur when pressure readings are within the usual range.</p>
              <p>It is sometimes called the <strong>“silent thief of sight”</strong> because early glaucoma commonly causes no pain or noticeable vision change. Regular examinations are important, particularly if you have a family history of glaucoma, diabetes, high eye pressure or are over 40.</p>

              <aside className={styles.detectionNote}>
                <span><ShieldCheck size={18} aria-hidden="true" /></span>
                <div><h3>Early detection helps protect sight</h3><p>Vision already lost to glaucoma cannot usually be restored. Timely diagnosis and ongoing treatment aim to slow further optic-nerve damage.</p></div>
              </aside>

              <ul className={styles.diagnosticTags} aria-label="Glaucoma assessment methods">
                <li><Gauge size={14} aria-hidden="true" /> Eye-pressure measurement</li>
                <li><ScanEye size={14} aria-hidden="true" /> Optic-disc and OCT imaging</li>
                <li><Activity size={14} aria-hidden="true" /> Visual-field monitoring</li>
              </ul>
            </div>

            <div className={styles.explainerVisual} aria-label="Glaucoma examination and diagnostic imaging">
              <figure className={styles.primaryExam}>
                <Image src="/service-diagnostics.png" alt="An ophthalmologist performing a non-contact diagnostic eye scan" fill quality={92} sizes="(max-width: 850px) 100vw, 40vw" />
                <figcaption><Gauge size={13} aria-hidden="true" /> Eye-pressure and optic-nerve assessment</figcaption>
              </figure>
              <figure className={styles.scanReview}>
                <Image src="/cataract-diagnostic-review-v2.png" alt="An ophthalmologist reviewing detailed eye imaging with a patient" fill quality={90} sizes="(max-width: 850px) 48vw, 22vw" />
                <figcaption><ScanLine size={13} aria-hidden="true" /> OCT-guided review</figcaption>
              </figure>
              <figure className={styles.patientReview}>
                <Image src="/neyani-consultation.png" alt="An ophthalmologist explaining an eye scan to a patient" fill quality={90} sizes="(max-width: 850px) 48vw, 20vw" />
                <figcaption><Eye size={13} aria-hidden="true" /> Results explained clearly</figcaption>
              </figure>
              <div className={styles.monitoringBadge}><Activity size={18} aria-hidden="true" /><span><strong>Progress monitoring</strong>Comparing results over time guides care</span></div>
            </div>
          </div>
        </section>
        <section className={styles.reasons} aria-labelledby="why-neyani">
          <div className="container">
            <div className={styles.reasonsHeading}>
              <p className={styles.sectionLabel}><span /> Why choose us</p>
              <h2 id="why-neyani">Why patients choose <span>Neyani Eye Hospital</span><br />for glaucoma care</h2>
              <p>Detailed diagnostics, specialist assessment and long-term monitoring for patients and families across Gandhidham and the Kutch region.</p>
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
        <GlaucomaSigns />
        <section className={styles.treatments} aria-labelledby="treatment-options">
          <div className="container">
            <div className={styles.treatmentHeading}>
              <p className={styles.sectionLabel}><span /> Treatment options</p>
              <h2 id="treatment-options">Our glaucoma care &amp; <span>treatment options</span></h2>
              <p>From detailed diagnosis to eye drops, surgery and long-term monitoring—every treatment plan is based on the type and stage of your glaucoma.</p>
            </div>
            <div className={styles.treatmentGrid}>
              {treatmentOptions.map((treatment) => (
                <article className={styles.treatmentCard} key={treatment.title}>
                  <figure className={styles.treatmentImage}>
                    <Image src={treatment.image} alt="" fill quality={90} sizes="(max-width: 700px) 100vw, 50vw" />
                  </figure>
                  <div className={styles.treatmentBody}>
                    <div className={styles.treatmentMeta}><span><treatment.icon size={20} aria-hidden="true" /></span><b>{treatment.label}</b></div>
                    <h3>{treatment.title}</h3>
                    <p>{treatment.description}</p>
                    <ul>{treatment.benefits.map((benefit) => <li key={benefit}><Check size={15} aria-hidden="true" />{benefit}</li>)}</ul>
                    <Link href="/contact#appointment">Book a glaucoma check <ArrowRight size={16} aria-hidden="true" /></Link>
                  </div>
                </article>
              ))}
            </div>
            <p className={styles.treatmentNote}>Treatment choice depends on the type and stage of glaucoma, eye pressure and your overall eye health. Vision already lost to glaucoma usually cannot be restored; treatment aims to protect remaining sight.</p>
          </div>
        </section>
        <section className={styles.benefits} aria-labelledby="glaucoma-benefits">
          <div className="container">
            <div className={styles.benefitsHeading}>
              <h2 id="glaucoma-benefits">Benefits of early <span>glaucoma care</span></h2>
              <p>Glaucoma often progresses without symptoms. Early diagnosis and consistent treatment aim to protect your sight for the years ahead.</p>
            </div>
            <BenefitsSlider benefits={benefits} label="Benefits of glaucoma care carousel" />
            <p className={styles.benefitNote}>Results vary with the type and stage of glaucoma and how consistently treatment and follow-up are maintained. Your ophthalmologist will discuss realistic expectations with you.</p>
          </div>
        </section>
        <Testimonials />
        <FAQ
          faqs={hospital.glaucomaFaqs}
          intro="Helpful guidance about glaucoma checks, eye pressure, treatment options and what to expect from follow-up care."
          image="/glaucoma-monitoring.png"
          imageAlt="An ophthalmologist examining a patient's eye with a slit lamp"
        />
        <section className={styles.finalCta} aria-labelledby="glaucoma-consultation">
          <div className={`container ${styles.ctaPanel}`}>
            <div className={styles.ctaCopy}>
              <p className={styles.ctaLabel}><span /> Take the first step</p>
              <h2 id="glaucoma-consultation">Protect your sight<br />before it changes</h2>
              <p>Book a glaucoma check to discuss your risk, eye-pressure results and treatment options with the Neyani Eye Hospital team.</p>
              <div className={styles.ctaActions}>
                <Link href="/contact#appointment"><CalendarDays size={17} aria-hidden="true" /> Book a glaucoma check <ArrowRight size={16} aria-hidden="true" /></Link>
                <a href={hospital.phoneUrl}><Phone size={16} aria-hidden="true" /> Call {hospital.phone}</a>
              </div>
              <p className={styles.ctaDetail}><Check size={15} aria-hidden="true" /> Your visit includes an eye examination and a clear explanation of suitable next steps.</p>
            </div>
            <div className={styles.ctaVisual}>
              <Image src="/glaucoma-eye-drops.png" alt="An ophthalmologist explaining glaucoma eye-drop treatment to a patient" fill quality={95} sizes="(max-width: 760px) 100vw, 38vw" />
              <div><ShieldCheck size={18} aria-hidden="true" /><span><strong>Early detection matters</strong>Regular checks help protect your sight</span></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
