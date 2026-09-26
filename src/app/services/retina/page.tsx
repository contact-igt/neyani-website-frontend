import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Activity, ArrowRight, CalendarDays, Check, ChevronDown, CircleAlert, Droplet, Eye, HeartHandshake, History, Images, Microscope, Phone, ScanEye, ScanLine, ShieldCheck, Stethoscope, Zap } from "lucide-react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import FAQ from "@/components/FAQ/FAQ";
import Testimonials from "@/components/Testimonials/Testimonials";
import BenefitsSlider from "@/components/BenefitsSlider/BenefitsSlider";
import WhatsAppFAB from "@/components/WhatsAppFAB/WhatsAppFAB";
import { hospital } from "@/content/hospital";
import styles from "./retina.module.css";

const retina = hospital.priorityServices.find((service) => service.id === "retina")!;

const reasons = [
  { icon: Stethoscope, title: "Visiting retina specialist", description: "Complex retinal conditions are assessed and treated by our visiting retina specialist, Dr. Urmil Shah, with experience in retinal and vitreoretinal care." },
  { icon: Droplet, title: "Diabetic eye screening", description: "Regular retinal screening for people with diabetes helps detect diabetic retinopathy early, often before vision is affected." },
  { icon: ScanLine, title: "OCT retinal imaging", description: "Optical coherence tomography (OCT) gives detailed cross-sectional images of the retina and macula to detect swelling or damage." },
  { icon: Images, title: "Fundus photography", description: "Photographs of the back of the eye record the retina and blood vessels, allowing changes to be compared over time." },
  { icon: Zap, title: "Laser photocoagulation", description: "Laser treatment is available where suitable to help seal leaking blood vessels and reduce the risk of further vision loss." },
  { icon: Microscope, title: "Vitreoretinal surgery", description: "Complex retinal and vitreoretinal surgeries are performed by our visiting retina specialist when surgery is recommended." },
  { icon: History, title: "Long-term monitoring", description: "Scheduled reviews compare imaging and examination results over time, so treatment can be adjusted when needed." },
  { icon: HeartHandshake, title: "Patient support", description: "Clear guidance through diagnosis, treatment and eligible insurance or TPA documentation, in English, Hindi or Gujarati." },
] as const;

const warningSigns = [
  { title: "Blurred or distorted vision", detail: "Straight lines may appear wavy, bent or uneven, and central detail may look blurred." },
  { title: "New floaters or dark spots", detail: "A sudden increase in specks, threads or shadow-like shapes moving across your sight needs prompt attention." },
  { title: "Difficulty seeing in low light", detail: "Adjusting between bright and dim surroundings may become slower or less comfortable." },
  { title: "Reduced side vision", detail: "Dark, blurred or missing areas may appear toward the outer part of your visual field." },
  { title: "Flashes of light", detail: "Brief streaks, sparks or camera-flash sensations can occur when the retina is being pulled or irritated." },
  { title: "A dark curtain or grey veil", detail: "A shadow spreading across part of your vision is urgent and requires immediate eye assessment." },
] as const;

const riskFactors = [
  "Diabetes, especially when blood sugar has been difficult to control",
  "High myopia or a strong minus spectacle prescription",
  "Previous eye injury, eye surgery or retinal disease",
  "A close family history of retinal conditions",
] as const;

const treatmentOptions = [
  {
    icon: ScanLine,
    label: "Diagnosis",
    title: "Retinal Assessment & Imaging",
    description: "A dilated retinal examination with OCT scans and fundus photography helps detect, stage and document conditions affecting the retina and macula.",
    benefits: ["Dilated retinal examination", "OCT and fundus imaging", "Baseline for future comparison"],
    image: "/retina-treatment-assessment.png",
  },
  {
    icon: Droplet,
    label: "Diabetic eye care",
    title: "Diabetic Retinopathy Care",
    description: "Regular screening for people with diabetes finds retinal changes early, so monitoring or treatment can begin before vision is seriously affected.",
    benefits: ["Regular diabetic eye screening", "Staging of retinal changes", "Coordinated follow-up plan"],
    image: "/retina-treatment-diabetic-care.png",
  },
  {
    icon: Zap,
    label: "Laser treatment",
    title: "Laser Photocoagulation",
    description: "Where suitable, laser treatment helps seal leaking blood vessels and treat abnormal areas of the retina to reduce the risk of further vision loss.",
    benefits: ["Performed with numbing drops", "Planned after detailed imaging", "Response reviewed at follow-up"],
    image: "/retina-treatment-laser.png",
  },
  {
    icon: Microscope,
    label: "Surgical care",
    title: "Vitreoretinal Surgery",
    description: "Complex retinal and vitreoretinal surgeries are performed by our visiting retina specialist when surgery is the most suitable option.",
    benefits: ["Specialist surgical assessment", "Benefits and risks explained", "Close post-operative follow-up"],
    image: "/retina-treatment-surgery.png",
  },
] as const;

const benefits = [
  { image: "/retina-benefit-early-detection.png", title: "Earlier detection", description: "Retinal imaging can reveal changes before you notice any difference in your vision." },
  { image: "/retina-benefit-central-vision.png", title: "Protecting central vision", description: "Timely care for the macula aims to preserve the sharp central vision used for reading and recognising faces." },
  { image: "/retina-benefit-diabetic-control.png", title: "Better diabetic eye control", description: "Regular screening helps manage diabetic retinopathy alongside your overall diabetes care." },
  { image: "/retina-benefit-urgent-care.png", title: "Reduced risk of vision loss", description: "Prompt treatment of tears, leaks or swelling can lower the risk of further damage, depending on the condition." },
  { image: "/retina-benefit-clear-guidance.png", title: "Clear understanding of your condition", description: "Scan results are explained clearly so you understand your retina health and the reasons for treatment." },
] as const;

export const metadata: Metadata = {
  title: `${retina.title} — ${hospital.name}`,
  description: retina.description,
};

export default function RetinaPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero} aria-labelledby="retina-heading">
          <Image
            src="/retina-care-hero.png"
            alt="A retina specialist explaining retinal and OCT scan results to an adult patient"
            fill
            preload
            quality={95}
            sizes="100vw"
            className={styles.heroImage}
          />

          <div className={styles.heroPanel}>
            <div className={styles.copy}>
              <p className={styles.kicker}>
                <span><Eye size={16} aria-hidden="true" /></span>
                Diabetic eye &amp; retina care
              </p>

              <h1 id="retina-heading">
                See retinal changes early.
                <span> Protect your vision.</span>
              </h1>

              <p className={styles.intro}>
                Diabetes and retinal conditions can affect sight before symptoms become noticeable. Detailed retinal screening helps identify changes early and guides the right care for your eyes.
              </p>

              <div className={styles.actions}>
                <Link href="/contact#appointment" className={styles.primary}>
                  Book a retina check
                  <span><ArrowRight size={18} aria-hidden="true" /></span>
                </Link>
                <a href={hospital.phoneUrl} className={styles.call}>
                  <Phone size={17} aria-hidden="true" /> {hospital.phone}
                </a>
              </div>

              <div className={styles.facts} aria-label="Retina care highlights">
                <p><Stethoscope aria-hidden="true" /><span><strong>Dilated retinal examination</strong> for a detailed view of the retina</span></p>
                <p><ScanLine aria-hidden="true" /><span><strong>OCT imaging</strong> to assess retinal layers</span></p>
                <p><Images aria-hidden="true" /><span><strong>Fundus photography</strong> to document and monitor changes</span></p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.explainer} aria-labelledby="what-is-retina">
          <div className={`container ${styles.explainerLayout}`}>
            <div className={styles.explainerCopy}>
              <p className={styles.sectionLabel}><span /> Essential knowledge</p>
              <h2 id="what-is-retina">What is the <span>retina?</span></h2>

              <div className={styles.definition}>
                <p>The retina is the <strong>light-sensitive layer</strong> at the back of the eye. It converts light into signals that travel to the brain through the optic nerve, allowing you to see.</p>
              </div>

              <p className={styles.caution}>Some retinal damage can be permanent. Early evaluation and timely treatment can help protect the vision that remains.</p>

              <div className={styles.careSummary}>
                <ScanEye size={21} aria-hidden="true" />
                <div>
                  <h3>What retina care involves</h3>
                  <p>Retina care focuses on diagnosing and managing conditions affecting the retina, macula and blood vessels at the back of the eye.</p>
                </div>
              </div>

            </div>

            <div className={styles.explainerVisual} aria-label="Retina examinations using a slit lamp">
              <figure className={styles.closeExamPanel}>
                <Image src="/retina-explainer-close-exam.png" alt="An ophthalmologist examining an adult patient's retina using a slit lamp" fill quality={92} sizes="(max-width: 850px) 100vw, 36vw" />
                <figcaption><Eye size={14} aria-hidden="true" /> Light-sensitive retinal layer</figcaption>
              </figure>

              <figure className={styles.wideExamPanel}>
                <Image src="/retina-explainer-wide-exam.png" alt="A retina specialist performing a careful slit-lamp examination" fill quality={92} sizes="(max-width: 850px) 100vw, 42vw" />
                <figcaption><ScanEye size={14} aria-hidden="true" /> Detailed retinal evaluation</figcaption>
              </figure>
            </div>
          </div>
        </section>
        <section className={styles.reasons} aria-labelledby="why-neyani">
          <div className="container">
            <div className={styles.reasonsHeading}>
              <p className={styles.sectionLabel}><span /> Why choose us</p>
              <h2 id="why-neyani">Why patients choose <span>Neyani Eye Hospital</span><br />for retina care</h2>
              <p>Specialist retinal assessment, detailed imaging and timely treatment for patients and families across Gandhidham and the Kutch region.</p>
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

        <section className={styles.warningSection} aria-labelledby="retina-evaluation">
          <div className="container">
            <header className={styles.warningHeading}>
              <p className={styles.sectionLabel}><span /> Retina evaluation guide</p>
              <h2 id="retina-evaluation">When should you consider a <span>retina evaluation?</span></h2>
              <p>Retinal conditions can progress without pain. New or unusual changes in vision should be assessed early, particularly if you have diabetes or other risk factors.</p>
            </header>

            <div className={styles.warningLayout}>
              <div className={styles.warningCopy}>
                <div className={styles.warningList}>
                  {warningSigns.map((sign, index) => (
                    <details key={sign.title} open={index === 0}>
                      <summary><i>{String(index + 1).padStart(2, "0")}</i><strong>{sign.title}</strong><ChevronDown size={16} aria-hidden="true" /></summary>
                      <div><p>{sign.detail}</p>{index === 0 && <span><Activity size={13} aria-hidden="true" /> Clinical next step: comprehensive retinal assessment</span>}</div>
                    </details>
                  ))}
                </div>

                <aside className={styles.riskPanel}>
                  <div className={styles.riskTitle}><CircleAlert size={18} aria-hidden="true" /><h3>Risk factors that merit regular checks</h3></div>
                  <ul>{riskFactors.map((factor) => <li key={factor}><Check size={14} aria-hidden="true" />{factor}</li>)}</ul>
                </aside>
              </div>

              <div className={styles.warningVisuals} aria-label="Retina evaluation and diagnostic imaging">
                <figure className={styles.warningHeroImage}>
                  <Image src="/retina-warning-fundus-review.png" alt="A retina specialist reviewing an ultra-widefield retinal image with a patient" fill quality={92} sizes="(max-width: 900px) 100vw, 46vw" />
                  <figcaption><ScanEye size={14} aria-hidden="true" /> Wide-field retinal imaging</figcaption>
                </figure>

                <figure>
                  <Image src="/retina-warning-oct-analysis.png" alt="A retina specialist explaining a macular OCT scan" fill quality={90} sizes="(max-width: 560px) 100vw, 23vw" />
                  <figcaption><ScanLine size={14} aria-hidden="true" /> Microscopic layer analysis</figcaption>
                </figure>

                <figure>
                  <Image src="/retina-warning-examination.png" alt="A retina specialist performing a detailed retinal examination" fill quality={90} sizes="(max-width: 560px) 100vw, 23vw" />
                  <figcaption><Eye size={14} aria-hidden="true" /> Detailed retina examination</figcaption>
                </figure>

                <figure className={styles.warningConsultation}>
                  <Image src="/retina-warning-consultation.png" alt="A retina specialist discussing retinal scan results with a patient and family member" fill quality={92} sizes="(max-width: 900px) 100vw, 46vw" />
                  <figcaption><HeartHandshake size={14} aria-hidden="true" /> Personalised care planning</figcaption>
                  <div className={styles.consultationStrip}>
                    <span><Stethoscope size={18} aria-hidden="true" /></span>
                    <p><strong>Specialist retina consultation</strong>Assessment and next steps explained clearly</p>
                    <Link href="/contact#appointment">Book a check <ArrowRight size={15} aria-hidden="true" /></Link>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.treatments} aria-labelledby="treatment-options">
          <div className="container">
            <div className={styles.treatmentHeading}>
              <p className={styles.sectionLabel}><span /> Treatment options</p>
              <h2 id="treatment-options">Our retina care &amp; <span>treatment options</span></h2>
              <p>From detailed retinal imaging to diabetic eye care, laser treatment and vitreoretinal surgery—every plan is based on your diagnosis and eye health.</p>
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
                    <Link href="/contact#appointment">Book a retina check <ArrowRight size={16} aria-hidden="true" /></Link>
                  </div>
                </article>
              ))}
            </div>
            <p className={styles.treatmentNote}>Treatment choice depends on your diagnosis, the stage of the condition and your overall eye health. Some vision loss cannot be reversed; treatment aims to protect the sight you have.</p>
          </div>
        </section>
        <section className={styles.benefits} aria-labelledby="retina-benefits">
          <div className="container">
            <div className={styles.benefitsHeading}>
              <h2 id="retina-benefits">Benefits of early <span>retina care</span></h2>
              <p>Many retinal conditions develop without early symptoms. Regular checks and timely treatment aim to protect your vision for the years ahead.</p>
            </div>
            <BenefitsSlider benefits={benefits} label="Benefits of retina care carousel" />
            <p className={styles.benefitNote}>Results vary with the condition, its stage at diagnosis and how consistently treatment and follow-up are maintained. Your doctor will discuss realistic expectations with you.</p>
          </div>
        </section>
        <Testimonials />
        <FAQ
          faqs={hospital.retinaFaqs}
          intro="Helpful guidance about retina checks, diabetic eye screening, warning signs, laser treatment and what to expect from your visit."
          image="/retina-faq-consultation.png"
          imageAlt="A retina specialist answering a patient's questions while explaining retinal scan results"
        />
        <section className={styles.finalCta} aria-labelledby="retina-consultation">
          <div className={`container ${styles.ctaPanel}`}>
            <div className={styles.ctaCopy}>
              <p className={styles.ctaLabel}><span /> Take the first step</p>
              <h2 id="retina-consultation">Protect the vision<br />that matters most</h2>
              <p>Book a retina check to discuss your symptoms, diabetic eye health and treatment options with the Neyani Eye Hospital team.</p>
              <div className={styles.ctaActions}>
                <Link href="/contact#appointment"><CalendarDays size={17} aria-hidden="true" /> Book a retina check <ArrowRight size={16} aria-hidden="true" /></Link>
                <a href={hospital.phoneUrl}><Phone size={16} aria-hidden="true" /> Call {hospital.phone}</a>
              </div>
              <p className={styles.ctaDetail}><Check size={15} aria-hidden="true" /> Sudden flashes, new floaters or a shadow across your vision need urgent assessment—please call us.</p>
            </div>
            <div className={styles.ctaVisual}>
              <Image src="/retina-specialist-counselling.png" alt="A retina specialist discussing scan results and next steps with a couple" fill quality={95} sizes="(max-width: 760px) 100vw, 38vw" />
              <div><ShieldCheck size={18} aria-hidden="true" /><span><strong>Specialist retina care</strong>Assessment and next steps explained clearly</span></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
