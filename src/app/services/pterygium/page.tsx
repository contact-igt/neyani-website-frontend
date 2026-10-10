import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Check, Droplets, Eye, Glasses, HeartHandshake, Languages, Microscope, Phone, ScanEye, ShieldCheck, SlidersHorizontal, Stethoscope, Sun } from "lucide-react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import FAQ from "@/components/FAQ/FAQ";
import Testimonials from "@/components/Testimonials/Testimonials";
import BenefitsSlider from "@/components/BenefitsSlider/BenefitsSlider";
import WhatsAppFAB from "@/components/WhatsAppFAB/WhatsAppFAB";
import { hospital } from "@/content/hospital";
import styles from "./pterygium.module.css";

export const metadata: Metadata = {
  title: `Pterygium Treatment — ${hospital.name}`,
  description: "Assessment and treatment planning for pterygium, eye irritation and vision concerns at Neyani Eye Hospital in Gandhidham.",
};

const reasons = [
  { icon: Stethoscope, title: "Specialist-led care", description: "Care led by Dr. Yajuvendra Singh Rathore, MBBS, MS Ophthalmology, with experience in examining and managing eye-surface conditions." },
  { icon: ScanEye, title: "Slit-lamp examination", description: "A detailed slit-lamp review shows the size and position of the growth and the health of the surrounding eye surface." },
  { icon: Eye, title: "Vision and astigmatism check", description: "Clarity and corneal astigmatism are assessed, as a pterygium reaching the cornea can affect how clearly you see." },
  { icon: Sun, title: "Comfort and UV guidance", description: "Practical advice on irritation, redness and sun protection helps you look after your eyes between visits." },
  { icon: SlidersHorizontal, title: "Individual treatment plans", description: "Monitoring, eye drops or surgery are considered only after examination, based on the growth and your symptoms." },
  { icon: Microscope, title: "Advanced surgical technology", description: "Surgery is supported by the Zeiss Visu 160 operating microscope, with a clear, magnified view throughout the procedure." },
  { icon: HeartHandshake, title: "Patient support", description: "The team provides clear guidance through diagnosis, treatment and eligible insurance or TPA documentation." },
  { icon: Languages, title: "Clear communication", description: "Consultations are supported in English, Hindi and Gujarati to help patients and families understand their care." },
] as const;

const assessmentSigns = [
  { icon: Eye, title: "Redness & irritation", text: "Persistent redness, irritation or a gritty feeling." },
  { icon: Droplets, title: "Dryness or foreign-body sensation", text: "Watery eyes, dryness or something stuck in the eye." },
  { icon: Sun, title: "Visible growth", text: "A whitish or fleshy growth on the clear surface of the eye." },
  { icon: Glasses, title: "Blurred vision", text: "Difficulty seeing clearly or reduced visual sharpness." },
  { icon: ScanEye, title: "Changes in astigmatism", text: "Frequent changes in spectacle power or distortion in vision." },
] as const;

const examinationSteps = [
  { icon: HeartHandshake, title: "Symptom review", text: "We discuss your symptoms, duration, and any changes in vision or eye comfort.", image: "/pterygium-exam-symptom-review-v1.png", alt: "Ophthalmologist discussing eye symptoms with a patient" },
  { icon: Microscope, title: "Slit-lamp examination", text: "A detailed examination of the eye surface assesses the size, location and characteristics of the pterygium.", image: "/pterygium-exam-slit-lamp-v1.png", alt: "Detailed slit-lamp examination of the eye" },
  { icon: Glasses, title: "Vision / refraction check", text: "We check vision and measure spectacle power to understand any changes caused by the pterygium.", image: "/pterygium-exam-refraction-v1.png", alt: "Patient undergoing a refraction check with an ophthalmologist" },
  { icon: ScanEye, title: "Corneal assessment", text: "We evaluate the cornea and surrounding structures to understand the extent of involvement and plan care.", image: "/pterygium-exam-corneal-v1.png", alt: "Close-up of the cornea and eye surface" },
  { icon: SlidersHorizontal, title: "Progression monitoring", text: "We monitor changes over time and determine the right treatment or follow-up based on your condition.", image: "/pterygium-exam-monitoring-v1.png", alt: "Eye-surface images being reviewed during a follow-up appointment" },
] as const;

const treatmentOptions = [
  {
    icon: ScanEye,
    label: "Assessment",
    title: "Comprehensive Pterygium Assessment",
    description: "A detailed examination records the size and position of the growth and the health of the surrounding eye surface, creating a baseline for future comparison.",
    benefits: ["Slit-lamp examination", "Corneal and vision assessment", "Photographs or notes for comparison"],
    image: "/pterygium-treatment-assessment-v1.png",
  },
  {
    icon: Droplets,
    label: "Medical care",
    title: "Lubricating & Soothing Eye Drops",
    description: "For mild pterygium, lubricating or prescribed drops may ease redness, dryness and irritation while the growth is monitored.",
    benefits: ["Relief from irritation and dryness", "Guidance on using drops correctly", "Reviewed at follow-up visits"],
    image: "/pterygium-treatment-drops-v1.png",
  },
  {
    icon: Microscope,
    label: "Surgical care",
    title: "Pterygium Surgery",
    description: "When the growth causes ongoing discomfort, affects vision or keeps growing, surgery to remove it may be recommended.",
    benefits: ["Considered after careful assessment", "Benefits and risks explained", "Close post-operative follow-up"],
    image: "/pterygium-treatment-surgery-v1.png",
  },
  {
    icon: Sun,
    label: "Ongoing care",
    title: "Protection & Follow-up",
    description: "Sun and wind protection and regular reviews help look after the eye surface and check for any change or recurrence.",
    benefits: ["UV-protective eyewear advice", "Scheduled follow-up visits", "Treatment reviewed when needed"],
    image: "/pterygium-treatment-protection-v1.png",
  },
] as const;

const benefits = [
  { image: "/pterygium-benefit-comfort-v1.png", title: "Relief from irritation", description: "Treatment can ease redness, dryness and the gritty feeling that a pterygium often causes." },
  { image: "/pterygium-benefit-vision-v1.png", title: "Clearer, more comfortable vision", description: "Managing a growth that reaches the cornea may reduce blurring and astigmatism changes." },
  { image: "/pterygium-benefit-detection-v1.png", title: "Early detection", description: "Regular checks help catch changes in size or position before they affect your eyesight." },
  { image: "/pterygium-treatment-consultation-v1.png", title: "Clear guidance", description: "Your doctor explains your options so you understand whether monitoring, drops or surgery suits you." },
  { image: "/pterygium-eye-comfort-v1.png", title: "Lasting eye comfort", description: "Follow-up and sun protection help look after the eye surface and support long-term comfort." },
] as const;

export default function PterygiumPage() {
  return <><Header /><main className={styles.main}>
    <section className={styles.hero} aria-labelledby="pterygium-heading">
      <Image className={styles.heroImage} src="/pterygium-treatment-hero-v1.png" alt="Ophthalmologist performing a slit-lamp examination for an adult patient" fill priority quality={95} sizes="100vw" />
      <div className={styles.heroPanel}><div className={styles.heroCopy}>
        <p className={styles.kicker}><span><Eye size={16} aria-hidden="true" /></span> Pterygium treatment</p>
        <h1 id="pterygium-heading">Protect your comfort.<br /><span>Keep vision clear.</span></h1>
        <p className={styles.intro}>A pterygium can cause redness, irritation or changes in vision. A careful eye examination helps determine the right next step for you.</p>
        <div className={styles.actions}><Link href="/contact#appointment" className={styles.primary}>Book a pterygium assessment <span><ArrowRight size={18} aria-hidden="true" /></span></Link><a href={hospital.phoneUrl} className={styles.call}><Phone size={17} aria-hidden="true" /> {hospital.phone}</a></div>
        <div className={styles.facts} aria-label="Pterygium care highlights">
          <p><Sun aria-hidden="true" /><span><strong>Surface assessment</strong>Comfort and eye-surface changes reviewed</span></p>
          <p><Eye aria-hidden="true" /><span><strong>Vision checked</strong>Clarity and astigmatism assessed</span></p>
          <p><ArrowRight aria-hidden="true" /><span><strong>Clear next steps</strong>Care guided by your examination</span></p>
        </div>
      </div></div>
    </section>
    <section className={styles.explainer} aria-labelledby="what-is-pterygium">
      <div className={`container ${styles.explainerLayout}`}>
        <div className={styles.explainerCopy}>
          <p className={styles.sectionLabel}><Eye size={16} aria-hidden="true" /> What is pterygium?</p>
          <h2 id="what-is-pterygium">What is <span>pterygium?</span></h2>
          <p>A pterygium is a common, non-cancerous growth of thin tissue on the clear surface of the eye. It usually starts on the white part of the eye and can gradually grow towards the cornea.</p>
          <div className={styles.factCards}>
            <article><span><Sun aria-hidden="true" /></span><h3>Often related to UV exposure</h3><p>More common in people who spend time outdoors.</p></article>
            <article><span><Eye aria-hidden="true" /></span><h3>Generally non-cancerous</h3><p>A benign growth that can increase in size over time.</p></article>
            <article><span><ArrowRight aria-hidden="true" /></span><h3>Can affect vision</h3><p>It may cause irritation, redness or blurred vision if it reaches the cornea.</p></article>
          </div>
        </div>
        <div className={styles.explainerVisual} aria-label="Pterygium eye surface and assessment">
          <figure className={styles.eyeDetail}><Image src="/pterygium-explainer-growth-v3.png" alt="Close-up eye showing an early pterygium growth near the inner corner" fill sizes="(max-width: 800px) 100vw, 52vw" /><figcaption><i /> Pterygium growth</figcaption></figure>
          <figure className={styles.assessmentPhoto}><Image src="/pterygium-explainer-slit-lamp-v2.png" alt="Ophthalmologist assessing a patient's eye surface with a slit lamp" fill sizes="(max-width: 800px) 62vw, 24vw" /><figcaption><i /> Eye surface assessment</figcaption></figure>
          <figure className={styles.detailPhoto}><Image src="/pterygium-explainer-corneal-v2.png" alt="Close-up corneal assessment during an eye examination" fill sizes="(max-width: 800px) 40vw, 15vw" /><figcaption><i /> Corneal assessment</figcaption></figure>
        </div>
      </div>
    </section>
    <section className={styles.reasons} aria-labelledby="why-neyani">
      <div className="container">
        <div className={styles.reasonsHeading}>
          <p className={styles.sectionLabel}><ShieldCheck size={16} aria-hidden="true" /> Why choose us</p>
          <h2 id="why-neyani">Why patients choose <span>Neyani Eye Hospital</span><br />for pterygium care</h2>
          <p>Detailed examination, specialist assessment and clear guidance for patients and families across Gandhidham and the Kutch region.</p>
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
    <section className={styles.assessment} aria-labelledby="pterygium-assessment-heading">
      <div className={`container ${styles.assessmentLayout}`}>
        <div className={styles.assessmentCopy}>
          <p className={styles.assessmentLabel}><span /> When to seek an assessment</p>
          <h2 id="pterygium-assessment-heading">When should you<br /><span>book an eye examination?</span></h2>
          <p>Redness, irritation, dryness or a visible growth should not be ignored. Early assessment helps determine whether treatment is needed and prevents discomfort or further progression.</p>
          <ul className={styles.assessmentSigns}>
            {assessmentSigns.map(({ icon: Icon, title, text }) => <li key={title}><span><Icon aria-hidden="true" /></span><div><strong>{title}</strong><small>{text}</small></div></li>)}
          </ul>
        </div>
        <div className={styles.assessmentVisual} aria-label="Pterygium eye assessment">
          <figure className={styles.assessmentMain}><Image src="/pterygium-assessment-main-v2.png" alt="Ophthalmologist carrying out a slit-lamp eye examination" fill quality={92} sizes="(max-width: 850px) 100vw, 48vw" /><figcaption><i /> Comprehensive<br />eye examination</figcaption></figure>
          <div className={styles.assessmentBottom}>
            <figure><Image src="/pterygium-assessment-detail-v2.png" alt="Detailed slit-lamp assessment of the eye" fill quality={90} sizes="(max-width: 850px) 58vw, 29vw" /><figcaption><i /> Detailed eye assessment</figcaption></figure>
            <figure><Image src="/pterygium-assessment-eye-v2.png" alt="Close-up eye showing a pterygium growth" fill quality={90} sizes="(max-width: 850px) 42vw, 22vw" /><figcaption><i /> Early evaluation<br />helps prevent progression</figcaption></figure>
          </div>
        </div>
      </div>
    </section>
    <section className={styles.examination} aria-labelledby="examination-heading">
      <div className="container">
        <div className={styles.examinationHeading}>
          <p><span /> Your examination</p>
          <h2 id="examination-heading">Your <span>examination</span></h2>
          <p>A comprehensive eye examination helps us understand the extent of the pterygium and plan the right treatment for you.</p>
        </div>
        <figure className={styles.examinationHero}><Image src="/pterygium-treatment-hero-v1.png" alt="Ophthalmologist carrying out a detailed eye examination" fill sizes="(max-width: 850px) 100vw, 55vw" /><figcaption><i /> Comprehensive<br />assessment</figcaption></figure>
        <ol className={styles.examinationSteps}>{examinationSteps.map(({ icon: Icon, title, text, image, alt }, index) => <li key={title}>
          <figure><Image src={image} alt={alt} fill sizes="(max-width: 850px) 100vw, 20vw" /><b>{String(index + 1).padStart(2, "0")}</b></figure>
          <div><span><Icon aria-hidden="true" /></span><h3>{title}</h3><p>{text}</p></div>
          {index < examinationSteps.length - 1 && <i className={styles.stepArrow}><ArrowRight aria-hidden="true" /></i>}
        </li>)}</ol>
        <aside className={styles.examinationCta}><span><ShieldCheck aria-hidden="true" /></span><div><p>Early evaluation helps</p><h3>Get a clear understanding of your eye health</h3><small>A thorough examination helps us confirm the extent of the pterygium and plan the most suitable treatment for you.</small></div><Link href="/contact#appointment">Book an Eye Examination <ArrowRight aria-hidden="true" /></Link></aside>
      </div>
    </section>
    <section className={styles.treatments} aria-labelledby="treatment-options">
      <div className="container">
        <div className={styles.treatmentHeading}>
          <p className={styles.sectionLabel}><Microscope size={16} aria-hidden="true" /> Our advanced options</p>
          <h2 id="treatment-options">Our advanced pterygium care &amp; <span>treatment options</span></h2>
          <p>From detailed assessment to eye drops, surgery and long-term follow-up, every care plan is based on the size and effect of your pterygium.</p>
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
                <Link href="/contact#appointment">Book a pterygium assessment <ArrowRight size={16} aria-hidden="true" /></Link>
              </div>
            </article>
          ))}
        </div>
        <p className={styles.treatmentNote}>Treatment choice depends on the size of the growth, your symptoms and its effect on vision. Your ophthalmologist will explain suitable options after examination.</p>
      </div>
    </section>
    <section className={styles.benefits} aria-labelledby="pterygium-benefits">
      <div className="container">
        <div className={styles.benefitsHeading}>
          <h2 id="pterygium-benefits">Benefits of early <span>pterygium care</span></h2>
          <p>A pterygium can grow slowly over time. Early assessment and consistent follow-up help protect comfort and clear vision.</p>
        </div>
        <BenefitsSlider benefits={benefits} label="Benefits of pterygium care carousel" />
        <p className={styles.benefitNote}>Results vary with the size of the growth and how consistently treatment and follow-up are maintained. Your ophthalmologist will discuss realistic expectations with you.</p>
      </div>
    </section>
    <Testimonials />
    <FAQ
      faqs={hospital.pterygiumFaqs}
      intro="Helpful guidance about pterygium, eye irritation, treatment options and what to expect from your visit."
      image="/pterygium-eye-detail-v1.png"
      imageAlt="Close-up of an eye showing a pterygium growth"
    />
    <section className={styles.finalCta} aria-labelledby="pterygium-consultation">
      <div className={`container ${styles.ctaPanel}`}>
        <div className={styles.ctaCopy}>
          <p className={styles.ctaLabel}><span /> Take the first step</p>
          <h2 id="pterygium-consultation">Protect your comfort,<br />keep vision clear</h2>
          <p>Book a pterygium assessment to discuss your symptoms, eye surface and treatment options with the Neyani Eye Hospital team.</p>
          <div className={styles.ctaActions}>
            <Link href="/contact#appointment"><CalendarDays size={17} aria-hidden="true" /> Book a pterygium assessment <ArrowRight size={16} aria-hidden="true" /></Link>
            <a href={hospital.phoneUrl}><Phone size={16} aria-hidden="true" /> Call {hospital.phone}</a>
          </div>
          <p className={styles.ctaDetail}><Check size={15} aria-hidden="true" /> Your visit includes an eye examination and a clear explanation of suitable next steps.</p>
        </div>
        <div className={styles.ctaVisual}>
          <Image src="/pterygium-treatment-consultation-v1.png" alt="Ophthalmologist explaining pterygium treatment options to a patient" fill quality={95} sizes="(max-width: 760px) 100vw, 38vw" />
          <div><ShieldCheck size={18} aria-hidden="true" /><span><strong>Early care matters</strong>Careful assessment, clearly explained</span></div>
        </div>
      </div>
    </section>
  </main><Footer /><WhatsAppFAB /></>;
}
