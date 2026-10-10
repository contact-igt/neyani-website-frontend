import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AlertTriangle, ArrowLeftRight, ArrowRight, Check, Clock3, Droplets, Eye, FileText, HeartHandshake, ImageIcon, Languages, Phone, ScanEye, ShieldCheck, SlidersHorizontal, Stethoscope, Zap } from "lucide-react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB/WhatsAppFAB";
import BenefitsSlider from "@/components/BenefitsSlider/BenefitsSlider";
import FAQ from "@/components/FAQ/FAQ";
import Testimonials from "@/components/Testimonials/Testimonials";
import TreatmentOptions from "@/components/TreatmentOptions/TreatmentOptions";
import { hospital } from "@/content/hospital";
import styles from "./oculoplasty.module.css";

export const metadata: Metadata = {
  title: `Oculoplasty & Watering Eye Care — ${hospital.name}`,
  description: "Assessment for persistent watering eyes, eyelid concerns and tear-drainage symptoms at Neyani Eye Hospital in Gandhidham.",
};

const careAreas = [
  { title: "Eyelids", className: "eyelids", image: "/oculoplasty-eyelid-closeup-v1.png" },
  { title: "Tear drainage system", className: "drainage", image: "/oculoplasty-tear-drainage-v1.png" },
  { title: "Ocular surface", className: "surface", image: "/oculoplasty-ocular-surface-v1.png" },
  { title: "Surrounding tissues", className: "tissues", image: "/oculoplasty-surrounding-tissue-v1.png" },
] as const;

const reasons = [
  { icon: Stethoscope, title: "Specialist-led care", description: "A careful examination guides care for watering eyes, eyelid concerns and surrounding tissues." },
  { icon: ScanEye, title: "Detailed assessment", description: "The eyelids, tear drainage and ocular surface are reviewed to identify the likely cause of symptoms." },
  { icon: Eye, title: "Eyelid function review", description: "Eyelid position, comfort and function are assessed together when they affect vision or irritation." },
  { icon: SlidersHorizontal, title: "Individual care plans", description: "Treatment and follow-up are selected after examination, according to your symptoms and eye health." },
  { icon: Droplets, title: "Watering-eye evaluation", description: "Tear film and drainage concerns are assessed to help plan the appropriate next step." },
  { icon: Clock3, title: "Timely attention", description: "Early assessment can help avoid ongoing irritation, watering or discomfort." },
  { icon: HeartHandshake, title: "Patient support", description: "The team provides clear guidance through assessment, treatment and eligible insurance or TPA documentation." },
  { icon: Languages, title: "Clear communication", description: "Consultations are supported in English, Hindi and Gujarati for patients and families." },
] as const;

const assessmentSigns = [
  { icon: Droplets, title: "Persistent or recurrent watering", text: "Tears that keep flowing without an obvious reason.", image: "/oculoplasty-ocular-surface-v1.png" },
  { icon: Eye, title: "Discharge, swelling or repeated infections", text: "Redness, swelling or discharge near the eye or eyelids.", image: "/oculoplasty-tear-drainage-v1.png" },
  { icon: ArrowLeftRight, title: "Eyelid turning inward or outward", text: "Position changes that cause irritation or watering.", image: "/oculoplasty-eyelid-closeup-v1.png" },
  { icon: Eye, title: "Droopy eyelids affecting vision", text: "Eyelids that appear droopy or interfere with sight.", image: "/oculoplasty-center-eye-v1.png" },
  { icon: AlertTriangle, title: "Lumps, growths or eyelid irritation", text: "Any new or changing lump, cyst or skin lesion.", image: "/oculoplasty-surrounding-tissue-v1.png" },
  { icon: ScanEye, title: "Injury or change around the eye", text: "Trauma, swelling or a noticeable change around the eye.", image: "/oculoplasty-ocular-surface-v1.png" },
] as const;

const assessmentJourney = [
  { number: "01", icon: FileText, title: "Symptoms & History", text: "We listen to your watering, eyelid or comfort concerns and review relevant eye history.", image: "/neyani-consultation.png", alt: "Ophthalmologist discussing symptoms with a patient" },
  { number: "02", icon: Eye, title: "Eyelid & Surface Examination", text: "Your eyelids, lashes and ocular surface are checked carefully with a slit lamp.", image: "/oculoplasty-assessment-journey-v2.png", alt: "Ophthalmologist performing a slit-lamp eye examination" },
  { number: "03", icon: Droplets, title: "Tear-Flow Assessment", text: "Tear drainage is assessed when your symptoms suggest a flow or blockage concern.", image: "/oculoplasty-ocular-surface-v1.png", alt: "Close-up examination of the eye surface" },
  { number: "04", icon: ImageIcon, title: "Imaging or Specialist Referral", text: "Imaging or a specialist referral is arranged only when it will guide your care.", image: "/diagnostic-oct-v1.png", alt: "Diagnostic eye imaging being reviewed" },
] as const;
const treatmentOptions = [
  { icon: Droplets, label: "Surface care", title: "Dry-Eye, Allergy & Ocular-Surface Care", description: "Care for dryness, allergy and surface irritation that can contribute to persistent watering.", benefits: ["Dry-eye and allergy review", "Surface irritation management", "Comfort-focused follow-up"], image: "/oculoplasty-surface-care-v2.png" },
  { icon: ArrowLeftRight, label: "Eyelid care", title: "Eyelid-Position Treatment", description: "Assessment and treatment planning for eyelids that turn in, turn out or affect comfort and function.", benefits: ["Eyelid position assessment", "Comfort and function review", "Care plan explained clearly"], image: "/oculoplasty-eyelid-care-v2.png" },
  { icon: ScanEye, label: "Tear drainage", title: "Tear-Duct Evaluation & Procedures", description: "Tear-flow assessment with procedures considered only when examination findings indicate they may help.", benefits: ["Tear-flow assessment", "Drainage testing when needed", "Procedures discussed clearly"], image: "/oculoplasty-tear-drainage-v2.png" },
  { icon: AlertTriangle, label: "Eyelid lesions", title: "Lump & Lesion Assessment", description: "Review of eyelid lumps or lesions, with removal considered where clinically appropriate.", benefits: ["Careful lesion review", "Suitability assessed clinically", "Clear next-step guidance"], image: "/oculoplasty-eyelid-lesion-v2.png" },
] as const;

const timelyCareBenefits = [
  { image: "/oculoplasty-benefit-comfort-v2.png", title: "Better comfort and less tearing", description: "Care targets the cause of persistent watering and discomfort." },
  { image: "/oculoplasty-benefit-irritation-v2.png", title: "Reduced irritation risk", description: "Early assessment can help address ongoing irritation or recurrent infection concerns." },
  { image: "/oculoplasty-benefit-eyelid-function-v2.png", title: "Improved eyelid function", description: "Eyelid position and function are considered as part of your care plan." },
  { image: "/oculoplasty-benefit-clear-vision-v2.png", title: "Clearer daily vision", description: "Greater comfort can support clearer, more comfortable everyday vision." },
] as const;

const oculoplastyFaqs = [
  { q: "Why does my eye water even when it feels dry?", a: "Dryness or surface irritation can trigger reflex tearing. An examination can help distinguish this from eyelid or tear-drainage causes." },
  { q: "How do you check for a blocked tear duct?", a: "Your ophthalmologist reviews symptoms, eyelid position and tear flow. Further tear-drainage testing may be recommended when appropriate." },
  { q: "Can eyelid position cause watering?", a: "Yes. Eyelids that turn inward, outward or do not close well can affect tear distribution and drainage." },
  { q: "When does a watering eye need a procedure?", a: "A procedure is considered only after examination confirms a cause for which it is likely to help." },
  { q: "Are eyelid lumps always serious?", a: "Many eyelid lumps are not serious, but new, changing or persistent lesions should be assessed by an eye specialist." },
  { q: "What should I bring to the appointment?", a: "Bring your current glasses, medication list, previous eye records or scans, and any relevant referral details." },
] as const;
export default function OculoplastyPage() {
  return <><Header /><main className={styles.main}>
    <section className={styles.hero} aria-labelledby="oculoplasty-heading">
      <Image className={styles.heroImage} src="/oculoplasty-watering-eye-hero-v1.png" alt="Ophthalmologist examining an adult patient's eye with a slit lamp" fill priority quality={95} sizes="100vw" />
      <div className={styles.heroPanel}><div className={styles.copy}>
        <p className={styles.kicker}><span><Droplets size={16} aria-hidden="true" /></span> Oculoplasty & watering eye care</p>
        <h1 id="oculoplasty-heading">Comfort begins with <span>finding the cause.</span></h1>
        <p>For persistent watering, eyelid changes and tear-drainage concerns, a careful examination helps guide the right next step.</p>
        <div className={styles.actions}><Link href="/contact#appointment">Book an assessment <span><ArrowRight size={18} aria-hidden="true" /></span></Link><a href={hospital.phoneUrl}><Phone size={17} aria-hidden="true" /> {hospital.phone}</a></div>
        <ul className={styles.facts} aria-label="Oculoplasty care highlights"><li><Droplets aria-hidden="true" /><span><strong>Watering-eye review</strong> Tear film and drainage assessed</span></li><li><Eye aria-hidden="true" /><span><strong>Eyelid examination</strong> Comfort and function checked</span></li><li><ShieldCheck aria-hidden="true" /><span><strong>Clear next steps</strong> Based on your examination</span></li></ul>
      </div></div>
    </section>
    <section className={styles.introduction} aria-labelledby="care-heading"><div className={`container ${styles.introductionInner}`}>
      <div className={styles.introCopy}><p className={styles.label}>Oculoplasty &amp; watering eye care</p><h2 id="care-heading">What is <span>Oculoplasty &amp;<br />Watering Eye Care?</span></h2><p>Oculoplasty is a specialised area of eye care that focuses on the eyelids, tear-drainage system and the surrounding tissues of the eye. It helps diagnose and treat concerns that affect comfort, function and eye health.</p><p>Watering eyes, also called epiphora, can be linked to tear drainage, eyelid position, dry eye, allergies or irritation. A detailed examination helps identify the cause and the most appropriate treatment.</p><aside className={styles.assurance}><span><Eye aria-hidden="true" /></span><div><h3>Comprehensive care for the eyes and surrounding areas</h3><p>Our team evaluates the eyelids, tear drainage system and adjacent facial tissues to provide precise diagnosis and personalised care.</p></div></aside></div>
      <div className={styles.careVisual} aria-label="Areas assessed during oculoplasty and watering-eye care">
        <div className={styles.orbit} aria-hidden="true" /><figure className={styles.centralEye}><Image src="/oculoplasty-center-eye-v1.png" alt="Close-up of a healthy eye" fill sizes="(max-width: 850px) 72vw, 31vw" /></figure>
        {careAreas.map(({ title, className, image }) => <figure className={`${styles.careCard} ${styles[className]}`} key={title}><Image src={image} alt={title} fill sizes="(max-width: 850px) 50vw, 18vw" /></figure>)}
      </div>
    </div></section>
    <section className={styles.reasons} aria-labelledby="why-choose-us">
      <div className="container">
        <div className={styles.reasonsHeading}>
          <p className={styles.sectionLabel}><span /> Why choose us</p>
          <h2 id="why-choose-us">Why patients choose <span>Neyani Eye Hospital</span><br />for oculoplasty care</h2>
          <p>Detailed assessment, thoughtful guidance and individual care for watering-eye and eyelid concerns across Gandhidham and the Kutch region.</p>
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
    <section className={styles.assessment} aria-labelledby="assessment-heading">
      <Image className={styles.assessmentImage} src="/oculoplasty-assessment-portrait-v1.png" alt="Close-up portrait of a woman with a healthy eye" fill sizes="(max-width: 1000px) 100vw, 45vw" />
      <div className={`container ${styles.assessmentContent}`}>
        <div className={styles.assessmentHeading}><p className={styles.sectionLabel}><span /> Signs &amp; symptoms</p><h2 id="assessment-heading">When to seek an <span>assessment?</span></h2><p>You may benefit from an oculoplasty consultation if you notice signs or symptoms related to your eyelids, tear drainage or the surrounding areas of the eye.</p></div>
        <div className={styles.symptomGrid}>{assessmentSigns.map(({ icon: Icon, title, text, image }) => <article className={styles.symptomCard} key={title}><div><span><Icon aria-hidden="true" /></span><h3>{title}</h3><p>{text}</p></div><figure><Image src={image} alt="" fill sizes="(max-width: 700px) 35vw, 12vw" /></figure></article>)}</div>
        <aside className={styles.urgentPanel}><span><AlertTriangle aria-hidden="true" /></span><h3>Need immediate care?</h3><p>Seek urgent evaluation if you experience:</p><ul><li><span><Zap aria-hidden="true" /></span>Sudden eye pain</li><li><span><Eye aria-hidden="true" /></span>Sudden vision loss or double vision</li><li><span><AlertTriangle aria-hidden="true" /></span>Significant injury or trauma around the eye</li></ul><a href={hospital.phoneUrl}><Phone size={17} aria-hidden="true" /> Call us immediately <ArrowRight size={16} aria-hidden="true" /></a></aside>
      </div>
    </section>
    <section className={styles.assessmentJourney} aria-labelledby="assessment-journey-heading">
      <div className={`container ${styles.assessmentJourneyLayout}`}>
        <div className={styles.assessmentJourneyIntro}>
          <p className={styles.assessmentJourneyLabel}><span /> Assessment journey</p>
          <h2 id="assessment-journey-heading">Your Assessment <span>Journey</span></h2>
          <p>A simple, step-by-step approach to understand the cause of your symptoms and plan the right care for your eyes.</p>
          <figure className={styles.assessmentJourneyFeature}><Image src="/oculoplasty-assessment-journey-v2.png" alt="Ophthalmologist performing a slit-lamp examination with a patient" fill sizes="(max-width: 850px) 100vw, 42vw" /></figure>
          <aside className={styles.assessmentJourneyNote}><span><ShieldCheck aria-hidden="true" /></span><div><strong>Personalized for your needs</strong><p>Your symptoms and examination guide a clear, clinically appropriate next step.</p></div></aside>
        </div>
        <ol className={styles.assessmentJourneySteps} aria-label="Oculoplasty assessment steps">
          {assessmentJourney.map(({ number, icon: Icon, title, text, image, alt }) => <li key={number}>
            <span className={styles.assessmentJourneyNumber}>{number}</span>
            <figure><Image src={image} alt={alt} fill sizes="(max-width: 850px) 100vw, 25vw" /></figure>
            <div className={styles.assessmentJourneyCopy}><span><Icon aria-hidden="true" /></span><div><h3>{title}</h3><p>{text}</p></div></div>
          </li>)}
        </ol>
      </div>
    </section>
    <TreatmentOptions className={styles.treatments} headingId="treatment-options-heading" eyebrow="Our advanced options" title={<>Care planned around <span>the cause of your symptoms</span></>} intro="Treatment is selected after a detailed examination of your eyelids, tear drainage and ocular surface." options={treatmentOptions} cta="Book an assessment" note="Treatment choices depend on your examination findings and overall eye health. Your ophthalmologist will explain suitable options after assessment." />
    <section className={styles.benefits} aria-labelledby="timely-care-benefits-heading">
      <div className="container">
        <div className={styles.contentHeading}>
          <p className={styles.sectionLabel}><span /> Benefits of timely care</p>
          <h2 id="timely-care-benefits-heading">Support for more <span>comfortable daily vision</span></h2>
        </div>
        <BenefitsSlider benefits={timelyCareBenefits} label="Benefits of timely oculoplasty and watering-eye care" />
      </div>
    </section>
    <Testimonials />
    <FAQ faqs={oculoplastyFaqs} intro="Answers to common questions about persistent watering, eyelid concerns and your oculoplasty assessment." image="/oculoplasty-watering-eye-hero-v1.png" imageAlt="Ophthalmologist examining a patient's eye" />
    <section className={styles.consultation} aria-labelledby="consultation-heading">
      <div className={`container ${styles.consultationInner}`}>
        <div className={styles.consultationCopy}><p className={styles.sectionLabel}><span /> Oculoplasty consultation</p><h2 id="consultation-heading">Find the cause of <span>persistent watering</span></h2><p>The right treatment depends on your examination findings, symptoms and eye health.</p><div className={styles.consultationActions}><Link href="/contact#appointment">Book an appointment <ArrowRight size={18} aria-hidden="true" /></Link><a href={hospital.phoneUrl}><Phone size={18} aria-hidden="true" /> Call {hospital.phone}</a></div></div>
        <figure className={styles.consultationVisual}><Image src="/oculoplasty-watering-eye-hero-v1.png" alt="Ophthalmologist examining a patient with a slit lamp" fill sizes="(max-width: 800px) 100vw, 42vw" /><figcaption>Personalised oculoplasty assessment</figcaption></figure>
      </div>
    </section>  </main><Footer /><WhatsAppFAB /></>;
}
