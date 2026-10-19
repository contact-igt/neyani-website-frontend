import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Check, ClipboardList, Clock3, ContactRound, Droplets, Eye, ImageIcon, MapPinned, Microscope, Phone, ScanEye, ShieldCheck, Sparkles, Sun, Waves } from "lucide-react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import FAQ from "@/components/FAQ/FAQ";
import Testimonials from "@/components/Testimonials/Testimonials";
import BenefitsSlider from "@/components/BenefitsSlider/BenefitsSlider";
import WhatsAppFAB from "@/components/WhatsAppFAB/WhatsAppFAB";
import TreatmentOptions from "@/components/TreatmentOptions/TreatmentOptions";
import { hospital } from "@/content/hospital";
import styles from "./cornea.module.css";

export const metadata: Metadata = {
  title: `Cornea Care — ${hospital.name}`,
  description: "Cornea assessment, imaging and care for corneal conditions at Neyani Eye Hospital in Gandhidham.",
};

const reasons = [
  { icon: ScanEye, title: "Detailed assessment", text: "Slit-lamp examination and imaging help assess corneal clarity, surface and shape." },
  { icon: Eye, title: "Cornea-focused care", text: "Your symptoms, vision and corneal health are considered together for appropriate care." },
  { icon: ShieldCheck, title: "Clear guidance", text: "Your results, options and next steps are explained clearly after examination." },
  { icon: Clock3, title: "Timely attention", text: "Early assessment can help protect comfort and preserve clear vision." },
  { icon: Waves, title: "Precise corneal mapping", text: "Topography helps us understand corneal shape, curvature and optical irregularities." },
  { icon: Microscope, title: "Surface health review", text: "We assess dryness, healing and corneal clarity to support comfortable vision." },
  { icon: Droplets, title: "Comfort-focused support", text: "Guidance for dry eye, irritation and contact lens concerns is tailored to your needs." },
  { icon: Sparkles, title: "Careful follow-up", text: "Comparing results over time helps guide the right next step for your corneal health." },
] as const;

const evaluationSigns = [
  { icon: Eye, text: "Persistent eye redness or irritation" },
  { icon: Sun, text: "Blurred or fluctuating vision" },
  { icon: Droplets, text: "Frequent dry eyes or excessive tearing" },
  { icon: ShieldCheck, text: "Recurrent eye infections" },
  { icon: Waves, text: "Difficulty with contact lenses" },
  { icon: Sparkles, text: "History of eye injury or chemical exposure" },
  { icon: Eye, text: "Evaluation before refractive or cataract surgery" },
] as const;

const treatmentOptions = [
  {
    icon: ScanEye,
    label: "Diagnosis",
    title: "Comprehensive Cornea Assessment",
    description: "A detailed examination reviews the clarity, surface and shape of the cornea and records a baseline for comparing future results.",
    benefits: ["Slit-lamp examination", "Corneal topography mapping", "Surface and clarity review"],
    image: "/cornea-slit-lamp-exam-v1.png",
  },
  {
    icon: Waves,
    label: "Imaging",
    title: "Corneal Topography & Aberrometry",
    description: "Non-contact imaging measures corneal curvature and optical irregularities to guide diagnosis and surgical planning.",
    benefits: ["Shape and curvature mapping", "Optical irregularity detection", "Results explained clearly"],
    image: "/cornea-topography-eye-v1.png",
  },
  {
    icon: ShieldCheck,
    label: "Strength review",
    title: "Cross-Linking Assessment",
    description: "Checks corneal strength and helps monitor progressive shape change, so your doctor can decide when treatment is appropriate.",
    benefits: ["Corneal strength evaluation", "Monitoring of shape change", "Timing guided by examination"],
    image: "/cornea-protection-cross-section-v1.png",
  },
  {
    icon: Microscope,
    label: "Ongoing care",
    title: "Follow-up & Surface Care",
    description: "Regular reviews track healing and surface health, with guidance on comfort, dry eye and contact lens use.",
    benefits: ["Scheduled follow-up visits", "Results compared over time", "Treatment reviewed when needed"],
    image: "/cornea-topography-consultation-v1.png",
  },
] as const;

const benefits = [
  { image: "/diagnostic-comprehensive-exam-v1.png", title: "Earlier detection", description: "Regular checks can identify corneal changes before they noticeably affect your vision or comfort." },
  { image: "/diagnostic-color-vision-v1.png", title: "Clearer understanding of your eye", description: "Detailed imaging shows the shape and health of your cornea, so results can be explained clearly." },
  { image: "/diagnostic-retina-exam-v1.png", title: "Safer surgical planning", description: "Corneal assessment helps your surgeon choose the right technique and lens before cataract or refractive surgery." },
  { image: "/general-diagnostics-hero-v1.png", title: "Personalised care plan", description: "Treatment and follow-up are matched to your cornea, symptoms and everyday needs." },
  { image: "/neyani-eye-exam-banner-enhanced.png", title: "Comfort and protection", description: "Timely care for irritation, dryness or injury helps protect the clear surface your vision depends on." },
] as const;

const assessmentSteps = [
  { icon: ClipboardList, title: "Symptoms & History Review", text: "We understand your symptoms and medical history.", image: "/cornea-consultation-candid-v2.png", alt: "Ophthalmologist discussing symptoms with a patient" },
  { icon: Eye, title: "Eyelid & Ocular-Surface Examination", text: "Detailed check of the eyelids, lashes and ocular surface.", image: "/cornea-slit-lamp-exam-v1.png", alt: "Detailed slit-lamp examination of the eye" },
  { icon: Droplets, title: "Tear-Drainage Testing (Where Appropriate)", text: "Tests to check tear flow and drainage pathways.", image: "/cornea-slit-lamp-closeup-v1.png", alt: "Close-up eye examination" },
  { icon: ImageIcon, title: "Imaging or Referral (Only When Needed)", text: "Imaging or referral to specialists, if clinically indicated.", image: "/cornea-topography-consultation-v1.png", alt: "Clinician reviewing corneal imaging" },
] as const;

export default function CorneaPage() {
  return <>
    <Header />
    <main className={styles.main}>
      <section className={styles.hero} aria-labelledby="cornea-heading">
        <Image className={styles.heroImage} src="/cornea-care-eye-banner-v3.png" alt="Close cornea examination with a slit-lamp beam" fill priority quality={95} sizes="100vw" />
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroPanel}>
            <div className={styles.copy}>
              <p className={styles.kicker}><span><Eye size={16} aria-hidden="true" /></span> Cornea care</p>
              <h1 id="cornea-heading">Clearer focus begins <span>at the cornea.</span></h1>
              <p className={styles.intro}>The cornea is the eye&apos;s clear front window. Careful examination and imaging help us understand changes affecting comfort, vision and the surface of your eye.</p>
              <div className={styles.actions}>
                <Link href="/contact#appointment" className={styles.primary}>Book a cornea assessment <span><ArrowRight size={18} aria-hidden="true" /></span></Link>
                <a href={hospital.phoneUrl} className={styles.call}><Phone size={17} aria-hidden="true" /> {hospital.phone}</a>
              </div>
              <div className={styles.facts} aria-label="Cornea care highlights">
                <p><ScanEye aria-hidden="true" /><span><strong>Detailed cornea examination</strong> to assess clarity and surface health</span></p>
                <p><MapPinned aria-hidden="true" /><span><strong>Corneal mapping</strong> to understand shape and curvature</span></p>
                <p><ShieldCheck aria-hidden="true" /><span><strong>Clear next steps</strong> based on your examination</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.corneaOverview} aria-labelledby="cornea-overview-heading">
        <div className={`container ${styles.overviewLayout}`}>
          <div className={styles.overviewCopy}>
            <p className={styles.sectionEyebrow}>Comprehensive corneal care</p>
            <h2 id="cornea-overview-heading">The cornea is the eye&apos;s <span>master optical lens.</span></h2>
            <p className={styles.overviewIntro}>Accounting for most of the eye&apos;s focusing power, the cornea needs a careful balance of shape, clarity and surface health. Our assessment combines precise imaging with clinical examination to guide the right next step for your vision.</p>
            <div className={styles.careList}>
              <article><span><Waves aria-hidden="true" /></span><div><h3>Wavefront Aberrometry</h3><p>Maps thousands of optical points across the cornea to identify subtle irregularities.</p></div></article>
              <article><span><ScanEye aria-hidden="true" /></span><div><h3>Corneal Topography</h3><p>Measures corneal shape and curvature with detailed colour mapping.</p></div></article>
              <article><span><ShieldCheck aria-hidden="true" /></span><div><h3>Cross-Linking Assessment</h3><p>Checks corneal strength and helps monitor progressive shape change.</p></div></article>
              <article><span><Sparkles aria-hidden="true" /></span><div><h3>Surface &amp; Clarity Review</h3><p>Examines the front surface of the eye for comfort, healing and clear vision.</p></div></article>
            </div>
            <div className={styles.overviewActions}>
              <Link href="/contact#appointment" className={styles.overviewPrimary}><CalendarDays size={15} aria-hidden="true" /> Schedule corneal scan <ArrowRight size={16} aria-hidden="true" /></Link>
              <a href="#treatment-pathways" className={styles.overviewSecondary}>View treatment pathways <ArrowRight size={15} aria-hidden="true" /></a>
            </div>
          </div>

          <div className={styles.showcase} aria-label="Cornea assessment and imaging">
            <figure className={styles.topographyFigure}>
              <Image src="/cornea-topography-prep-candid-v2.png" alt="Technician preparing a corneal imaging examination" fill quality={92} sizes="(max-width: 850px) 100vw, 60vw" />
              <figcaption className={styles.topographyLabel}><span><Eye size={16} aria-hidden="true" /></span><div><strong>Corneal topography</strong><small>Shape, curvature and optical detail</small></div></figcaption>
            </figure>
            <div className={styles.supportingFigures}>
              <figure>
                <Image src="/diagnostic-eye-pressure-v1.png" alt="Eye-care clinician carrying out a diagnostic examination" fill quality={92} sizes="(max-width: 850px) 60vw, 34vw" />
                <figcaption><ScanEye size={14} aria-hidden="true" /><span><strong>Slit-lamp examination</strong><small>Detailed corneal surface review</small></span></figcaption>
              </figure>
              <figure>
                <Image src="/diagnostic-vision-testing-v1.png" alt="Vision testing during an eye-care consultation" fill quality={92} sizes="(max-width: 850px) 60vw, 34vw" />
                <figcaption><MapPinned size={14} aria-hidden="true" /><span><strong>Mapping consultation</strong><small>Results explained clearly</small></span></figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.reasons} aria-labelledby="why-choose-us">
        <div className="container">
          <div className={styles.reasonsHeading}>
            <p className={styles.sectionLabel}><span /> Why choose us</p>
            <h2 id="why-choose-us">Thoughtful care for <span>your cornea</span></h2>
            <p>Every visit focuses on understanding your symptoms, protecting corneal health and recommending the right next step.</p>
          </div>
          <div className={styles.reasonGrid}>
            {reasons.map(({ icon: Icon, title, text }, index) => <article className={styles.reasonCard} key={title}>
              <div className={styles.reasonTop}><span><Icon size={21} strokeWidth={1.7} aria-hidden="true" /></span><b>{String(index + 1).padStart(2, "0")}</b></div>
              <h3>{title}</h3><p>{text}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className={styles.evaluation} aria-labelledby="evaluation-heading">
        <div className={`container ${styles.evaluationLayout}`}>
          <div className={styles.evaluationCopy}>
            <p className={styles.evaluationLabel}><Eye size={16} aria-hidden="true" /> Cornea care</p>
            <h2 id="evaluation-heading">When should you<br />consider <span>evaluation?</span></h2>
            <p>A timely cornea evaluation can help detect problems early and prevent vision loss. You may consider consultation if you experience:</p>
            <ul>{evaluationSigns.map(({ icon: Icon, text }) => <li key={text}><span><Icon aria-hidden="true" /></span>{text}</li>)}</ul>
            <Link href="/contact#appointment" className={styles.evaluationCta}>Book an evaluation <span><ArrowRight size={19} aria-hidden="true" /></span></Link>
          </div>
          <div className={styles.evaluationVisual}>
            <figure className={styles.evaluationMain}><Image src="/cornea-slit-lamp-closeup-v1.png" alt="Detailed cornea examination" fill quality={92} sizes="(max-width: 850px) 100vw, 55vw" /></figure>
            <figure className={styles.evaluationCircle}><Image src="/cornea-protection-cross-section-v1.png" alt="Illustration of cornea protection" fill quality={90} sizes="220px" /></figure>
            <div className={styles.evaluationBottom}>
              <figure><Image src="/cornea-slit-lamp-exam-v1.png" alt="Slit-lamp examination" fill quality={90} sizes="(max-width: 850px) 50vw, 28vw" /><figcaption><span><Microscope aria-hidden="true" /></span><div><strong>Slit-lamp Examination</strong><small>Detailed cornea analysis</small></div><ArrowRight aria-hidden="true" /></figcaption></figure>
              <figure><Image src="/cornea-topography-consultation-v1.png" alt="Specialist consultation" fill quality={90} sizes="(max-width: 850px) 50vw, 28vw" /><figcaption><span><ContactRound aria-hidden="true" /></span><div><strong>Specialist Consultation</strong><small>Personalized treatment plan</small></div><ArrowRight aria-hidden="true" /></figcaption></figure>
            </div>
          </div>
        </div>
      </section>

      <TreatmentOptions className={styles.treatments} id="treatment-pathways" headingId="treatment-options" eyebrow="Our advanced options" title={<>Our advanced cornea care &amp; <span>assessment options</span></>} intro="From detailed imaging to strength review and long-term follow-up, every care plan is based on the health and shape of your cornea." options={treatmentOptions} cta="Book a cornea assessment" note="Assessment and treatment choices depend on the condition of your cornea and overall eye health. Your ophthalmologist will explain suitable options after examination." />

      <section className={styles.benefits} aria-labelledby="cornea-benefits">
        <div className="container">
          <div className={styles.benefitsHeading}>
            <h2 id="cornea-benefits">Benefits of early <span>cornea care</span></h2>
            <p>Corneal changes can affect comfort and clarity long before they become severe. Early assessment and consistent follow-up help protect your vision.</p>
          </div>
          <BenefitsSlider benefits={benefits} label="Benefits of cornea care carousel" />
          <p className={styles.benefitNote}>Results vary with the condition of the cornea and how consistently treatment and follow-up are maintained. Your ophthalmologist will discuss realistic expectations with you.</p>
        </div>
      </section>

      <Testimonials />

      <FAQ
        faqs={hospital.corneaFaqs}
        intro="Helpful guidance about cornea examinations, corneal imaging, contact lens concerns and what to expect from your visit."
        image="/diagnostic-optical-biometry-v1.png"
        imageAlt="Optical biometry equipment during an eye examination"
      />

      <section className={styles.finalCta} aria-labelledby="cornea-consultation">
        <div className={`container ${styles.ctaPanel}`}>
          <div className={styles.ctaCopy}>
            <p className={styles.ctaLabel}><span /> Take the first step</p>
            <h2 id="cornea-consultation">Protect the clear<br />window to your vision</h2>
            <p>Book a cornea assessment to discuss your symptoms, corneal imaging and care options with the Neyani Eye Hospital team.</p>
            <div className={styles.ctaActions}>
              <Link href="/contact#appointment"><CalendarDays size={17} aria-hidden="true" /> Book a cornea assessment <ArrowRight size={16} aria-hidden="true" /></Link>
              <a href={hospital.phoneUrl}><Phone size={16} aria-hidden="true" /> Call {hospital.phone}</a>
            </div>
            <p className={styles.ctaDetail}><Check size={15} aria-hidden="true" /> Your visit includes an eye examination and a clear explanation of suitable next steps.</p>
          </div>
          <div className={styles.ctaVisual}>
            <Image src="/neyani-consultation.png" alt="Ophthalmologist speaking with a patient during a consultation" fill quality={95} sizes="(max-width: 760px) 100vw, 38vw" />
            <div><ShieldCheck size={18} aria-hidden="true" /><span><strong>Clear vision starts here</strong>Detailed imaging, clearly explained</span></div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    <WhatsAppFAB />
  </>;
}
