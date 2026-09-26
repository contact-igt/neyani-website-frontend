import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Baby, Brain, CalendarCheck, CalendarDays, Check, ChevronDown, ClipboardCheck, Eye, Glasses, HeartHandshake, Languages, Phone, ScanEye, School, ShieldCheck, Smile, Sparkles, Stethoscope, TrendingUp } from "lucide-react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import FAQ from "@/components/FAQ/FAQ";
import Testimonials from "@/components/Testimonials/Testimonials";
import BenefitsSlider from "@/components/BenefitsSlider/BenefitsSlider";
import WhatsAppFAB from "@/components/WhatsAppFAB/WhatsAppFAB";
import { hospital } from "@/content/hospital";
import styles from "./pediatric.module.css";

const reasons = [
  { icon: Stethoscope, title: "Pediatric specialist care", description: "Children are seen by our visiting pediatric ophthalmologist and squint surgeon, Dr. Ankit Shah, for specialist assessment and treatment." },
  { icon: Baby, title: "Dedicated pediatric lane", description: "A dedicated paediatric examination lane keeps visits calm, focused and comfortable for young children and their parents." },
  { icon: Smile, title: "Age-appropriate testing", description: "Picture-based charts and playful vision activities are adapted to your child's age, so even young children can take part." },
  { icon: Eye, title: "Squint & lazy eye care", description: "Assessment and management of squint and amblyopia, from glasses and patching to squint surgery where it is needed." },
  { icon: ScanEye, title: "Diagnostics under one roof", description: "Retinoscopy, refraction, slit-lamp examination and retinal imaging support a detailed assessment in a single visit." },
  { icon: HeartHandshake, title: "Support for parents", description: "Findings and next steps are explained clearly, with guidance on follow-up and eligible insurance or TPA documentation." },
  { icon: CalendarCheck, title: "Established locally", description: "Neyani Eye Hospital has served patients and families in Gandhidham and the wider Kutch region since 2019." },
  { icon: Languages, title: "Clear communication", description: "Consultations are supported in English, Hindi and Gujarati to help children and families understand their care." },
] as const;

const examinationSigns = [
  { title: "Squinting or tilting the head to focus", detail: "Repeated squinting, chin-up posture or a consistent head turn can be a child's way of finding a clearer view." },
  { title: "Sitting very close to screens or books", detail: "Moving unusually close to reading material or screens can sometimes indicate difficulty seeing clearly at a normal distance." },
  { title: "Frequent rubbing, blinking or eye strain", detail: "Ongoing rubbing, excessive blinking, watering or tired eyes deserves attention, particularly when it recurs." },
  { title: "Headaches or avoiding schoolwork", detail: "Headaches after reading, losing place on a page or avoiding near work may be linked to a vision concern." },
  { title: "Closing one eye in sunlight or photographs", detail: "Regularly closing one eye in bright light or when concentrating can be associated with an eye-alignment problem." },
  { title: "Difficulty seeing the classroom board", detail: "Copying incorrectly, losing attention during distance tasks or repeatedly asking to move closer may point to unclear distance vision." },
  { title: "Eyes that appear to point in different directions", detail: "An eye that turns inward, outward, upward or downward—even if it happens only sometimes—should be examined by an eye specialist." },
] as const;

const treatmentOptions = [
  {
    icon: Glasses,
    label: "Refractive errors",
    title: "Vision Testing & Glasses",
    description: "Careful refraction finds short-sight, long-sight or astigmatism, with glasses prescribed to support clear, comfortable vision at school and play.",
    benefits: ["Age-appropriate vision testing", "Accurate glasses prescription", "Regular reviews as eyes grow"],
    image: "/pediatric-treatment-glasses.png",
  },
  {
    icon: Eye,
    label: "Lazy eye",
    title: "Amblyopia Treatment",
    description: "When one eye has not developed clear vision, treatment such as glasses and patching helps the weaker eye and brain learn to work together.",
    benefits: ["Early detection and monitoring", "Glasses and patching plans", "Progress checks at each visit"],
    image: "/pediatric-treatment-amblyopia.png",
  },
  {
    icon: ScanEye,
    label: "Eye alignment",
    title: "Squint (Strabismus) Care",
    description: "Detailed eye-alignment assessment, with non-surgical options or squint surgery by our visiting pediatric ophthalmologist and squint surgeon where needed.",
    benefits: ["Eye-alignment assessment", "Non-surgical options first where suitable", "Squint surgery when recommended"],
    image: "/pediatric-treatment-squint.png",
  },
  {
    icon: Stethoscope,
    label: "Specialist assessment",
    title: "Congenital & Developmental Conditions",
    description: "Examination and management of eye conditions present from birth or early childhood, with a clear plan and follow-up explained to parents.",
    benefits: ["Detailed eye examination", "Clear explanation for parents", "Planned follow-up care"],
    image: "/pediatric-treatment-developmental.png",
  },
] as const;

const benefits = [
  { image: "/pediatric-benefit-learning.png", title: "Clearer vision for learning", description: "Correcting a vision problem can make reading, writing and seeing the board more comfortable for your child." },
  { image: "/pediatric-benefit-detection.png", title: "Earlier detection of eye problems", description: "Regular checks can find concerns such as lazy eye or squint while treatment has the best opportunity to help." },
  { image: "/pediatric-benefit-confidence.png", title: "Confidence in class and play", description: "Comfortable, clear vision can support concentration, coordination and confidence in everyday activities." },
  { image: "/pediatric-benefit-alignment.png", title: "Better eye alignment", description: "Timely care for a turning eye can support both eyes working together, depending on your child's condition." },
  { image: "/pediatric-benefit-parent-guidance.png", title: "Peace of mind for parents", description: "A clear explanation of your child's eye health and next steps helps families plan care with confidence." },
] as const;

export const metadata: Metadata = {
  title: `Pediatric Eye Care — ${hospital.name}`,
  description: "Gentle pediatric eye examinations and specialist care for squint, lazy eye, refractive errors and childhood eye conditions in Gandhidham.",
};

export default function PediatricEyeCarePage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero} aria-labelledby="pediatric-heading">
          <Image
            src="/pediatric-eye-care-hero.png"
            alt="An ophthalmologist gently examining a young girl's eyes while her mother supports her"
            fill
            priority
            quality={95}
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={styles.heroPanel}>
            <div className={styles.copy}>
              <p className={styles.kicker}><span><Baby size={16} aria-hidden="true" /></span> Children&apos;s eye care</p>
              <h1 id="pediatric-heading">Small eyes. Big world.<br /><span>Let&apos;s help them see it clearly.</span></h1>
              <p className={styles.intro}>Every child sees the world differently. Our gentle, age-appropriate eye checks help find concerns early and make each visit feel comfortable for children and parents.</p>
              <div className={styles.actions}>
                <Link href="/contact#appointment" className={styles.primary}>Book a child eye check <span><ArrowRight size={18} aria-hidden="true" /></span></Link>
                <a href={hospital.phoneUrl} className={styles.call}><Phone size={17} aria-hidden="true" /> {hospital.phone}</a>
              </div>
              <div className={styles.facts} aria-label="Pediatric eye care highlights">
                <p><Eye aria-hidden="true" /><span><strong>Gentle eye checks</strong> designed around your child</span></p>
                <p><Glasses aria-hidden="true" /><span><strong>Squint &amp; lazy eye</strong> assessment and care</span></p>
                <p><School aria-hidden="true" /><span><strong>School-age vision</strong> checks for clearer learning</span></p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.explainer} aria-labelledby="what-is-pediatric">
          <div className={`container ${styles.explainerLayout}`}>
            <div className={styles.explainerCopy}>
              <div className={styles.explainerLabels}>
                <span><i /> Essential knowledge</span>
                <span><Baby size={12} aria-hidden="true" /> Ages 0 to 18 years</span>
              </div>
              <h2 id="what-is-pediatric">What is <span>Pediatric Eye Care?</span></h2>
              <p className={styles.explainerLead}>Specialist eye assessment, vision development support and gentle treatment created for young, developing eyes.</p>

              <article className={styles.developmentCard}>
                <span className={styles.developmentIcon}><Brain size={22} aria-hidden="true" /></span>
                <div><h3>Visual development</h3><p>Pediatric eye care focuses on the <strong>eye health and vision development</strong> of babies, children and teenagers. Early checks can find concerns that may affect learning, coordination and lifelong sight.</p></div>
              </article>

              <div className={styles.visionMessage}>
                <span><Sparkles size={19} aria-hidden="true" /></span>
                <p><strong>Clear vision in childhood</strong> supports learning and confidence. Early detection gives treatment the best opportunity to help.</p>
              </div>

              <div className={styles.checkDetails}>
                <h3><ClipboardCheck size={15} aria-hidden="true" /> What pediatric eye care involves</h3>
                <p>From simple picture-based checks to refraction, eye-alignment testing and detailed examination, every step is adapted to your child&apos;s age and comfort.</p>
              </div>
            </div>

            <div className={styles.explainerVisual}>
              <figure className={styles.mainExamImage}>
                <Image src="/pediatric-development-check.png" alt="An Indian pediatric eye specialist carrying out a playful vision check with a young girl" fill quality={92} sizes="(max-width: 800px) 100vw, 40vw" />
                <figcaption><span><Baby size={14} aria-hidden="true" /></span><strong>First vision check</strong><small>Recommended before school</small></figcaption>
                <b>Age 4–5</b>
              </figure>
              <figure className={styles.supportImage}>
                <Image src="/pediatric-playful-vision-test.png" alt="An Indian eye specialist and a young boy completing a picture-based vision activity" fill quality={90} sizes="(max-width: 800px) 92vw, 31vw" />
                <figcaption><Eye size={14} aria-hidden="true" /> Picture-based vision checks</figcaption>
              </figure>
              <div className={styles.criticalNote}><span><ShieldCheck size={17} aria-hidden="true" /></span><p><strong>Early years matter</strong>The visual system develops rapidly during childhood.</p></div>
              <div className={styles.successNote}><span><TrendingUp size={18} aria-hidden="true" /></span><p><strong>Early action</strong><small>can make care simpler and more effective</small></p></div>
            </div>
          </div>
        </section>
        <section className={styles.reasons} aria-labelledby="why-neyani">
          <div className="container">
            <div className={styles.reasonsHeading}>
              <p className={styles.sectionLabel}><span /> Why choose us</p>
              <h2 id="why-neyani">Why parents choose <span>Neyani Eye Hospital</span><br />for their child&apos;s eyes</h2>
              <p>Specialist pediatric expertise, child-friendly examinations and clear guidance for families across Gandhidham and the Kutch region.</p>
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
        <section className={styles.examination} aria-labelledby="examination-heading">
          <div className="container">
            <div className={styles.examinationHeading}>
              <p><span /> Pediatric clinical guidance</p>
              <h2 id="examination-heading">When should you consider an <span>eye examination for your child?</span></h2>
              <div>Children may not realise that their vision is different. A timely examination can identify concerns early and help protect comfortable vision, learning and development.</div>
            </div>

            <div className={styles.examinationGrid}>
              <div className={styles.signsColumn}>
                <div className={styles.signsAccordion}>
                  {examinationSigns.map((sign, index) => (
                    <details key={sign.title} open={index === 0}>
                      <summary><i>{String(index + 1).padStart(2, "0")}</i><strong>{sign.title}</strong><ChevronDown size={15} aria-hidden="true" /></summary>
                      <div><p>{sign.detail}</p>{index === 0 && <span><TrendingUp size={13} aria-hidden="true" /> Clinical next step: comprehensive pediatric eye assessment</span>}</div>
                    </details>
                  ))}
                </div>
              </div>

              <div className={styles.examinationVisual}>
                <figure>
                  <Image src="/pediatric-examination-signs.png" alt="An Indian pediatric ophthalmologist checking a young girl's eye alignment with a fixation toy" fill quality={92} sizes="(max-width: 850px) 100vw, 46vw" />
                  <div className={styles.imageStandards}><span><ShieldCheck size={13} aria-hidden="true" /> Gentle, age-appropriate examination</span><span><Sparkles size={13} aria-hidden="true" /> Child-friendly testing</span></div>
                  <figcaption><Image src="/pediatric-development-check.png" alt="A child taking part in a playful vision check" fill sizes="110px" /><span>Child-friendly<br />vision checks</span></figcaption>
                </figure>

                <div className={styles.advisory}>
                  <p><i /> Clinical care advisory</p>
                  <h3>Notice any of these signs in your child?</h3>
                  <div>An examination is the safest way to understand what your child is experiencing. Tests are non-invasive and adapted to their age.</div>
                  <nav aria-label="Pediatric examination actions">
                    <Link href="/contact#appointment">Book child eye check <ArrowRight size={15} aria-hidden="true" /></Link>
                    <a href={hospital.phoneUrl}><Phone size={14} aria-hidden="true" /> {hospital.phone}</a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.treatments} aria-labelledby="treatment-options">
          <div className="container">
            <div className={styles.treatmentHeading}>
              <p className={styles.sectionLabel}><span /> Treatment options</p>
              <h2 id="treatment-options">Our pediatric eye care &amp; <span>treatment options</span></h2>
              <p>From vision testing and glasses to lazy eye and squint care—every treatment is planned around your child&apos;s age, eye findings and comfort.</p>
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
                    <Link href="/contact#appointment">Book child eye check <ArrowRight size={16} aria-hidden="true" /></Link>
                  </div>
                </article>
              ))}
            </div>
            <p className={styles.treatmentNote}>The right treatment depends on your child&apos;s age, eye findings and response to care. Your doctor will explain the recommended plan, expected benefits and follow-up.</p>
          </div>
        </section>
        <section className={styles.benefits} aria-labelledby="pediatric-benefits">
          <div className="container">
            <div className={styles.benefitsHeading}>
              <h2 id="pediatric-benefits">Benefits of early <span>pediatric eye care</span></h2>
              <p>Children rarely complain about their vision. Timely eye checks and treatment aim to support clear, comfortable sight as your child grows.</p>
            </div>
            <BenefitsSlider benefits={benefits} label="Benefits of pediatric eye care carousel" />
            <p className={styles.benefitNote}>Results vary with each child&apos;s condition, age at diagnosis and how consistently treatment is followed. Your doctor will discuss realistic expectations with you.</p>
          </div>
        </section>
        <Testimonials />
        <FAQ
          faqs={hospital.pediatricFaqs}
          intro="Helpful guidance for parents about children's eye checks, glasses, lazy eye, squint and what to expect from your child's visit."
          image="/pediatric-faq-consultation.png"
          imageAlt="An Indian pediatric ophthalmologist answering a mother's questions about her child's glasses prescription"
        />
        <section className={styles.finalCta} aria-labelledby="pediatric-consultation">
          <div className={`container ${styles.ctaPanel}`}>
            <div className={styles.ctaCopy}>
              <p className={styles.ctaLabel}><span /> Take the first step</p>
              <h2 id="pediatric-consultation">Give your child<br />a clearer view</h2>
              <p>Book a pediatric eye check to discuss your concerns, your child&apos;s vision and suitable next steps with the Neyani Eye Hospital team.</p>
              <div className={styles.ctaActions}>
                <Link href="/contact#appointment"><CalendarDays size={17} aria-hidden="true" /> Book child eye check <ArrowRight size={16} aria-hidden="true" /></Link>
                <a href={hospital.phoneUrl}><Phone size={16} aria-hidden="true" /> Call {hospital.phone}</a>
              </div>
              <p className={styles.ctaDetail}><Check size={15} aria-hidden="true" /> Your child&apos;s visit includes an age-appropriate eye examination and a clear explanation for parents.</p>
            </div>
            <div className={styles.ctaVisual}>
              <Image src="/pediatric-cta-family.png" alt="An Indian family leaving an eye clinic with their smiling daughter wearing new glasses" fill quality={95} sizes="(max-width: 760px) 100vw, 38vw" />
              <div><Baby size={18} aria-hidden="true" /><span><strong>Child-friendly eye care</strong>Gentle checks adapted to your child</span></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
