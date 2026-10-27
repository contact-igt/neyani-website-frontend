import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Baby, CalendarDays, Check, Eye, Focus, Glasses, HeartHandshake, Languages, Phone, ScanEye, ShieldCheck, SlidersHorizontal, Stethoscope, Users } from "lucide-react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import FAQ from "@/components/FAQ/FAQ";
import Testimonials from "@/components/Testimonials/Testimonials";
import BenefitsSlider from "@/components/BenefitsSlider/BenefitsSlider";
import WhatsAppFAB from "@/components/WhatsAppFAB/WhatsAppFAB";
import TreatmentOptions from "@/components/TreatmentOptions/TreatmentOptions";
import { hospital } from "@/content/hospital";
import styles from "./squint.module.css";

export const metadata: Metadata = {
  title: `Squint Care — ${hospital.name}`,
  description: "Squint assessment and eye-alignment care for children and adults at Neyani Eye Hospital in Gandhidham.",
};

const reasons = [
  { icon: Stethoscope, title: "Specialist-led care", description: "Squint care is supported by our pediatric ophthalmologist and squint surgeon, Dr. Ankit Shah." },
  { icon: Baby, title: "Child-friendly examination", description: "Gentle, age-appropriate vision and alignment checks help children stay comfortable and cooperative." },
  { icon: Focus, title: "Alignment assessment", description: "Cover tests and eye-movement checks help assess how well the eyes work together." },
  { icon: ScanEye, title: "Amblyopia screening", description: "Vision in each eye is checked so lazy eye can be identified early, when treatment tends to help most." },
  { icon: SlidersHorizontal, title: "Individual treatment plans", description: "Glasses, patching, therapy or surgery are considered only after examination, based on your child's needs." },
  { icon: Users, title: "Children and adults", description: "Assessment and guidance are available for children and for adults who notice eye misalignment." },
  { icon: HeartHandshake, title: "Family support", description: "The team explains each step clearly to parents and families, with guidance through follow-up." },
  { icon: Languages, title: "Clear communication", description: "Consultations are supported in English, Hindi and Gujarati to help patients and families understand their care." },
] as const;

const treatmentOptions = [
  {
    icon: ScanEye,
    label: "Assessment",
    title: "Comprehensive Squint Assessment",
    description: "A gentle examination checks how the eyes line up and move together, and records a baseline for comparing future results.",
    benefits: ["Cover and eye-movement tests", "Vision checked in each eye", "Assessment matched to age"],
    image: "/squint-alignment-assessment-v1.png",
  },
  {
    icon: Glasses,
    label: "Optical correction",
    title: "Glasses & Refraction",
    description: "Some squints are linked to uncorrected focusing errors. The right glasses can improve alignment and help vision develop evenly.",
    benefits: ["Careful refraction testing", "Guidance on wearing glasses", "Reviewed at follow-up visits"],
    image: "/squint-improved-vision-v1.png",
  },
  {
    icon: Eye,
    label: "Amblyopia care",
    title: "Lazy Eye (Amblyopia) Therapy",
    description: "When vision in one eye has not developed clearly, patching or other therapy may be advised to strengthen the weaker eye.",
    benefits: ["Treatment matched to your child", "Clear routine for parents", "Progress checked regularly"],
    image: "/squint-pediatric-exam-v1.png",
  },
  {
    icon: Stethoscope,
    label: "Surgical care",
    title: "Squint Surgery",
    description: "When other measures are not enough, surgery on the eye muscles may be recommended to improve alignment.",
    benefits: ["Considered after careful assessment", "Benefits and risks explained", "Close post-operative follow-up"],
    image: "/squint-before-treatment-v1.png",
  },
] as const;

const benefits = [
  { image: "/squint-improved-vision-v1.png", title: "Better eye alignment", description: "Glasses, therapy or surgery may help the eyes line up and work together more comfortably." },
  { image: "/squint-pediatric-exam-v1.png", title: "Healthier visual development", description: "Early care in childhood supports clearer vision in both eyes as the visual system matures." },
  { image: "/squint-alignment-assessment-v1.png", title: "Improved coordination", description: "Well-aligned eyes may support depth perception, reading and everyday activities." },
  { image: "/squint-before-treatment-v1.png", title: "Greater confidence", description: "Many children and adults feel more comfortable in social situations once their eyes look and work better together." },
  { image: "/squint-care-hero-v1.png", title: "Clear guidance for families", description: "Each step is explained clearly, so parents know what to expect and how to support treatment at home." },
] as const;

export default function SquintPage() {
  return <><Header /><main className={styles.main}>
    <section className={styles.hero} aria-labelledby="squint-heading">
      <Image className={styles.heroImage} src="/squint-care-hero-v1.png" alt="Eye doctor assessing a child's eye alignment with a parent present" fill priority quality={95} sizes="100vw" />
      <div className={styles.heroPanel}><div className={styles.heroCopy}>
        <p className={styles.kicker}><span><Eye size={16} aria-hidden="true" /></span> Squint care</p>
        <h1 id="squint-heading">Helping eyes work <span>together.</span></h1>
        <p className={styles.intro}>A squint can affect how the eyes align and work as a pair. Careful assessment helps us understand vision, eye movement and the right next step for your child or family member.</p>
        <div className={styles.actions}><Link href="/contact#appointment" className={styles.primary}>Book a squint assessment <span><ArrowRight size={18} aria-hidden="true" /></span></Link><a href={hospital.phoneUrl} className={styles.call}><Phone size={17} aria-hidden="true" /> {hospital.phone}</a></div>
        <div className={styles.facts} aria-label="Squint care highlights">
          <p><ScanEye aria-hidden="true" /><span><strong>Alignment assessment</strong> for eye movement and coordination</span></p>
          <p><Focus aria-hidden="true" /><span><strong>Vision checks</strong> tailored to age and comfort</span></p>
          <p><ShieldCheck aria-hidden="true" /><span><strong>Clear guidance</strong> for treatment and follow-up</span></p>
        </div>
      </div></div>
    </section>
    <section className={styles.explainer} aria-labelledby="squint-explainer-heading">
      <div className={`container ${styles.explainerLayout}`}>
        <div className={styles.explainerCopy}>
          <p className={styles.sectionLabel}><span /> Squint &amp; amblyopia care</p>
          <h2 id="squint-explainer-heading">What is <span>Squint &amp; Amblyopia?</span></h2>
          <p>Squint, also called strabismus, is when the eyes do not align and look in different directions. Amblyopia, often called lazy eye, develops when vision in one eye does not mature clearly.</p>
          <p>Early assessment is especially important for children. Timely care can support eye alignment, visual development and everyday confidence.</p>
          <aside className={styles.assurance}><span><ShieldCheck size={24} aria-hidden="true" /></span><div><strong>Early treatment can improve vision and coordination</strong><p>We explain every recommended next step clearly, with care matched to your child&apos;s examination.</p></div></aside>
        </div>
        <div className={styles.journey} aria-label="Squint care journey">
          <article><figure><Image src="/squint-before-treatment-v1.png" alt="Child before a squint assessment" fill sizes="(max-width: 850px) 100vw, 48vw" /></figure><div className={styles.journeyCard}><span className={styles.journeyIcon}><Eye aria-hidden="true" /></span><div className={styles.journeyContent}><b>01</b><h3>Before treatment</h3><p>Early signs may include eyes that do not appear to work together.</p></div></div><svg className={styles.journeyArrow} viewBox="0 0 92 58" fill="none" aria-hidden="true"><path d="M15 3C15 35 35 46 70 46" /><path d="m61 37 9 9-10 8" /></svg></article>
          <article><figure><Image src="/squint-alignment-assessment-v1.png" alt="Doctor assessing a child's eye alignment" fill sizes="(max-width: 850px) 100vw, 48vw" /></figure><div className={styles.journeyCard}><span className={styles.journeyIcon}><Focus aria-hidden="true" /></span><div className={styles.journeyContent}><b>02</b><h3>Eye alignment assessment</h3><p>Gentle vision and cover tests help us assess alignment accurately.</p></div></div><svg className={styles.journeyArrow} viewBox="0 0 92 58" fill="none" aria-hidden="true"><path d="M15 3C15 35 35 46 70 46" /><path d="m61 37 9 9-10 8" /></svg></article>
          <article><figure><Image src="/squint-pediatric-exam-v1.png" alt="Pediatric eye examination with a slit lamp" fill sizes="(max-width: 850px) 100vw, 48vw" /></figure><div className={styles.journeyCard}><span className={styles.journeyIcon}><ScanEye aria-hidden="true" /></span><div className={styles.journeyContent}><b>03</b><h3>Pediatric eye examination</h3><p>We check vision, eye movement and overall eye health.</p></div></div><svg className={styles.journeyArrow} viewBox="0 0 92 58" fill="none" aria-hidden="true"><path d="M15 3C15 35 35 46 70 46" /><path d="m61 37 9 9-10 8" /></svg></article>
          <article><figure><Image src="/squint-improved-vision-v1.png" alt="Child wearing glasses after an eye appointment" fill sizes="(max-width: 850px) 100vw, 48vw" /></figure><div className={styles.journeyCard}><span className={styles.journeyIcon}><Eye aria-hidden="true" /></span><div className={styles.journeyContent}><b>04</b><h3>Improved vision after treatment</h3><p>Glasses, therapy or surgery may support clearer, more coordinated vision.</p></div></div></article>
        </div>
      </div>
    </section>
    <section className={styles.reasons} aria-labelledby="why-neyani">
      <div className="container">
        <div className={styles.reasonsHeading}>
          <p className={styles.sectionLabel}><span /> Why choose us</p>
          <h2 id="why-neyani">Why families choose <span>Neyani Eye Hospital</span><br />for squint care</h2>
          <p>Gentle assessment, specialist guidance and clear communication for children and families across Gandhidham and the Kutch region.</p>
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
    <section className={styles.evaluation} aria-labelledby="squint-evaluation-heading">
      <div className={`container ${styles.evaluationLayout}`}>
        <div className={styles.evaluationCopy}>
          <p className={styles.evaluationLabel}><Eye size={16} aria-hidden="true" /> Squint &amp; amblyopia</p>
          <h2 id="squint-evaluation-heading">When should you<br />consider evaluation?</h2>
          <p>A timely evaluation can help detect squint and amblyopia early. Consider a consultation if you experience:</p>
          <ul className={styles.evaluationSigns}>
            <li><Eye aria-hidden="true" />Visible misalignment of the eyes</li><li><Focus aria-hidden="true" />One eye turning inward, outward, upward or downward</li><li><ScanEye aria-hidden="true" />Reduced vision in one eye (lazy eye)</li><li><Eye aria-hidden="true" />Difficulty in depth perception</li><li><Focus aria-hidden="true" />Frequent squinting or eye strain</li><li><ScanEye aria-hidden="true" />Head tilting or abnormal posture to see clearly</li><li><Eye aria-hidden="true" />Screening recommended for children at an early age</li>
          </ul>
          <Link href="/contact#appointment" className={styles.evaluationCta}>Book an evaluation <span><ArrowRight size={18} aria-hidden="true" /></span></Link>
        </div>
        <div className={styles.evaluationFlow} aria-label="Squint evaluation process">
          <article><Image src="/squint-before-treatment-v1.png" alt="Child before a squint assessment" fill sizes="(max-width: 850px) 100vw, 34vw" /><h3><b>01</b> Before treatment</h3><aside><Eye aria-hidden="true" /><span><strong>Eyes misaligned</strong>Difficulty focusing and depth perception</span></aside></article><article><Image src="/squint-alignment-assessment-v1.png" alt="Eye alignment assessment for a child" fill sizes="(max-width: 850px) 100vw, 34vw" /><h3><b>02</b> Eye alignment assessment</h3><aside><Focus aria-hidden="true" /><span><strong>Precise evaluation</strong>Detailed tests for eye alignment and vision</span></aside></article><div className={styles.treatmentPlan}><ShieldCheck size={20} aria-hidden="true" /> Personalized treatment plan</div><article><Image src="/squint-pediatric-exam-v1.png" alt="Pediatric eye examination" fill sizes="(max-width: 850px) 100vw, 34vw" /><h3><b>03</b> Pediatric examination</h3><aside><ScanEye aria-hidden="true" /><span><strong>Specialist assessment</strong>Child-friendly comprehensive evaluation</span></aside></article><article><Image src="/squint-improved-vision-v1.png" alt="Child with improved vision after treatment" fill sizes="(max-width: 850px) 100vw, 34vw" /><h3><b>04</b> Improved vision after treatment</h3><aside><Eye aria-hidden="true" /><span><strong>Better alignment</strong>Improved vision and confidence</span></aside></article>
        </div>
      </div>
    </section>
    <TreatmentOptions className={styles.treatments} headingId="treatment-options" eyebrow="Our advanced options" title={<>Our advanced squint care &amp; <span>assessment options</span></>} intro="From gentle assessment to glasses, lazy-eye therapy and surgery, every care plan is based on your child&apos;s examination and needs." options={treatmentOptions} cta="Book a squint assessment" note="Treatment choice depends on the type of squint, vision in each eye and your child&apos;s age and overall eye health. Your ophthalmologist will explain suitable options after examination." />
    {/*
      <div className="container">
        <div className={styles.treatmentHeading}>
          <p className={styles.sectionLabel}><span /> Our advanced options</p>
          <h2 id="treatment-options">Our advanced squint care &amp; <span>assessment options</span></h2>
          <p>From gentle assessment to glasses, lazy-eye therapy and surgery, every care plan is based on your child&apos;s examination and needs.</p>
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
                <Link href="/contact#appointment">Book a squint assessment <ArrowRight size={16} aria-hidden="true" /></Link>
              </div>
            </article>
          ))}
        </div>
        <p className={styles.treatmentNote}>Treatment choice depends on the type of squint, vision in each eye and your child&apos;s age and overall eye health. Your ophthalmologist will explain suitable options after examination.</p>
      </div>
    </section>*/}
    <section className={styles.benefits} aria-labelledby="squint-benefits">
      <div className="container">
        <div className={styles.benefitsHeading}>
          <h2 id="squint-benefits">Benefits of early <span>squint care</span></h2>
          <p>Squint and lazy eye are most treatable when found early. Timely assessment and consistent follow-up help protect vision and eye alignment.</p>
        </div>
        <BenefitsSlider benefits={benefits} label="Benefits of squint care carousel" />
        <p className={styles.benefitNote}>Results vary with the type of squint, age at treatment and how consistently treatment and follow-up are maintained. Your ophthalmologist will discuss realistic expectations with you.</p>
      </div>
    </section>
    <Testimonials />
    <FAQ
      faqs={hospital.squintFaqs}
      intro="Helpful guidance about squint checks, lazy eye, treatment options and what to expect from your child's visit."
      image="/squint-pediatric-exam-v1.png"
      imageAlt="A pediatric eye examination with a slit lamp"
    />
    <section className={styles.finalCta} aria-labelledby="squint-consultation">
      <div className={`container ${styles.ctaPanel}`}>
        <div className={styles.ctaCopy}>
          <p className={styles.ctaLabel}><span /> Take the first step</p>
          <h2 id="squint-consultation">Help their eyes<br />work together</h2>
          <p>Book a squint assessment to discuss your concerns, eye alignment and care options with the Neyani Eye Hospital team.</p>
          <div className={styles.ctaActions}>
            <Link href="/contact#appointment"><CalendarDays size={17} aria-hidden="true" /> Book a squint assessment <ArrowRight size={16} aria-hidden="true" /></Link>
            <a href={hospital.phoneUrl}><Phone size={16} aria-hidden="true" /> Call {hospital.phone}</a>
          </div>
          <p className={styles.ctaDetail}><Check size={15} aria-hidden="true" /> Your visit includes an eye examination and a clear explanation of suitable next steps.</p>
        </div>
        <div className={styles.ctaVisual}>
          <Image src="/squint-alignment-assessment-v1.png" alt="A doctor assessing a child's eye alignment" fill quality={95} sizes="(max-width: 760px) 100vw, 38vw" />
          <div><ShieldCheck size={18} aria-hidden="true" /><span><strong>Early care matters</strong>Gentle assessment, clearly explained</span></div>
        </div>
      </div>
    </section>
  </main><Footer /><WhatsAppFAB /></>;
}
