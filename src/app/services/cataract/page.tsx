import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarCheck, CalendarDays, Check, ChevronDown, Cpu, Droplets, Eye, HeartHandshake, Languages, Microscope, Phone, ScanEye, ScanLine, ShieldCheck, SlidersHorizontal, Stethoscope, TrendingUp } from "lucide-react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import FAQ from "@/components/FAQ/FAQ";
import Testimonials from "@/components/Testimonials/Testimonials";
import BenefitsSlider from "@/components/BenefitsSlider/BenefitsSlider";
import WhatsAppFAB from "@/components/WhatsAppFAB/WhatsAppFAB";
import { hospital } from "@/content/hospital";
import styles from "./cataract.module.css";

const cataract = hospital.priorityServices.find((service) => service.id === "cataract")!;

const reasons = [
  { icon: Stethoscope, title: "Specialist-led care", description: "Care led by Dr. Yajuvendra Singh Rathore, MBBS, MS Ophthalmology, with fellowship training in phaco and refractive surgery." },
  { icon: Cpu, title: "Advanced technology", description: "The Oertli Faros phacoemulsification system and Zeiss Visu 160 operating microscope support precise cataract procedures." },
  { icon: SlidersHorizontal, title: "Individual assessment", description: "The surgical technique and anaesthesia approach are selected after examination and according to individual suitability." },
  { icon: HeartHandshake, title: "Patient support", description: "The team provides clear guidance through consultation, treatment and eligible insurance or TPA documentation." },
  { icon: CalendarCheck, title: "Established locally", description: "Neyani Eye Hospital has served patients and families in Gandhidham and the wider Kutch region since 2019." },
  { icon: ShieldCheck, title: "Micro-incision approach", description: "The 1.6 mm MICS technique and topical anaesthesia are used where the patient and clinical situation are suitable." },
  { icon: ScanEye, title: "Diagnostics under one roof", description: "Slit-lamp examination, retinoscopy, OCT, fundus photography and visual field testing support detailed assessment." },
  { icon: Languages, title: "Clear communication", description: "Consultations are supported in English, Hindi and Gujarati to help patients and families understand their care." },
] as const;

const surgerySigns = [
  { title: "Blurred or hazy vision", detail: "Blurred or hazy vision interferes with reading, work or other daily activities." },
  { title: "Updated glasses are no longer enough", detail: "Updated glasses no longer provide enough improvement for everyday tasks." },
  { title: "Glare, halos or difficulty seeing at night", detail: "Glare, halos or difficulty seeing at night makes driving or moving around less comfortable." },
  { title: "Colours appear faded", detail: "Colours appear faded or less vivid than before." },
  { title: "Double vision or frequent vision changes", detail: "Double vision or frequent vision changes are affecting one eye." },
] as const;

const lensOptions = [
  {
    icon: Eye,
    label: "Single focus lens",
    title: "Standard Monofocal",
    description: "Provides clear vision at one distance, usually far. Reading glasses may still be needed for close work.",
    benefits: ["Clear distance vision", "Covered by insurance", "Proven reliability"],
    image: "/lens-monofocal-v2.png",
  },
  {
    icon: ScanEye,
    label: "Multiple focus lens",
    title: "Premium Multifocal",
    description: "Enables clear vision at multiple distances—near, intermediate and far—reducing dependence on glasses.",
    benefits: ["Multiple focal points", "Reduced glasses dependency", "Enhanced lifestyle"],
    image: "/lens-multifocal-v2.png",
  },
  {
    icon: ScanLine,
    label: "Extended depth of focus",
    title: "EDOF IOL",
    description: "Provides a continuous range of clear vision from distance to intermediate, with minimal glare and enhanced night vision.",
    benefits: ["Distance to intermediate vision", "Reduced glare and halos at night", "Natural visual continuity"],
    image: "/lens-edof-v2.png",
  },
  {
    icon: SlidersHorizontal,
    label: "Astigmatism correction",
    title: "Toric Lens",
    description: "Specially designed to correct astigmatism while providing clear distance vision in one procedure.",
    benefits: ["Corrects astigmatism", "Sharper clarity", "Single procedure"],
    image: "/lens-toric-v2.png",
  },
] as const;

const lensComparison = [
  { feature: "Primary focus", values: ["One selected distance", "Distance to intermediate", "Distance with astigmatism correction", "Multiple focal zones"] },
  { feature: "Distance vision", values: ["Commonly selected", "Supported", "Supported", "Supported"] },
  { feature: "Intermediate vision", values: ["Glasses may be needed", "Designed to support", "Depends on lens design", "Designed to support"] },
  { feature: "Near vision", values: ["Reading glasses often needed", "Reading glasses may be needed", "Depends on lens design", "Designed to support"] },
  { feature: "Astigmatism correction", values: ["Separate correction may be considered", "Toric variants may be available", "Designed for suitable regular astigmatism", "Toric variants may be available"] },
  { feature: "Possible need for glasses", values: ["Often for near tasks", "May remain for near tasks", "Varies by selected design", "May be reduced"] },
] as const;

const comparisonLenses = [
  { title: "Monofocal", subtitle: "Standard lens", image: "/iol-monofocal.png", featured: false },
  { title: "EDOF IOL", subtitle: "Extended depth of focus", image: "/iol-edof.png", featured: false },
  { title: "Toric Lens", subtitle: "Astigmatism correction", image: "/iol-toric.png", featured: false },
  { title: "Multifocal", subtitle: "Multiple focus lens", image: "/iol-multifocal.png", featured: true },
] as const;

const benefits = [
  { image: "/service-diagnostics.png", title: "Clearer everyday vision", description: "Removing the cloudy lens may improve clarity for reading, faces and everyday surroundings." },
  { image: "/service-cataract.png", title: "Brighter colour perception", description: "Many people notice colours appear brighter after the clouded natural lens is replaced." },
  { image: "/neyani-hero-care.png", title: "Greater confidence in daily life", description: "Improved vision may make routine activities easier, depending on eye health and recovery." },
  { image: "/service-glaucoma.png", title: "Reduced dependence on glasses", description: "Depending on the lens selected, many patients find they rely less on spectacles for daily tasks." },
  { image: "/neyani-consultation.png", title: "Better night vision", description: "Replacing a clouded lens may reduce glare and haloing, helping with comfort in low light." },
] as const;

export const metadata: Metadata = {
  title: `${cataract.title} — ${hospital.name}`,
  description: cataract.description,
};

export default function CataractPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero} aria-labelledby="cataract-heading">
          <Image src="/service-cataract.png" alt="Eye surgeon performing cataract surgery using an operating microscope" fill priority quality={95} sizes="100vw" className={styles.heroImage} />
          <div className={styles.heroPanel}>
            <div className={styles.copy}>
              <p className={styles.kicker}><span><Eye size={16} aria-hidden="true" /></span> Advanced cataract care</p>
              <h1 id="cataract-heading">Clearer vision.<br /><span>Care designed around you.</span></h1>
              <p className={styles.intro}>Micro-incision cataract surgery using Oertli Faros technology, with topical anaesthesia in suitable cases. Treatment is planned after an individual eye examination.</p>
              <div className={styles.actions}>
                <Link href="/contact#appointment" className={styles.primary}>Book a consultation <span><ArrowRight size={18} aria-hidden="true" /></span></Link>
                <a href={hospital.phoneUrl} className={styles.call}><Phone size={17} aria-hidden="true" /> {hospital.phone}</a>
              </div>
              <div className={styles.facts} aria-label="Cataract care highlights">
                <p><Microscope aria-hidden="true" /><span><strong>Oertli Faros</strong> phacoemulsification system</span></p>
                <p><ScanLine aria-hidden="true" /><span><strong>1.6 mm MICS</strong> micro-incision technique</span></p>
                <p><Droplets aria-hidden="true" /><span><strong>Topical anaesthesia</strong> in suitable cases</span></p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.explainer} aria-labelledby="what-is-cataract">
          <div className={`container ${styles.explainerLayout}`}>
            <div className={styles.explainerCopy}>
              <p className={styles.sectionLabel}><span /> Understanding cataracts</p>
              <h2 id="what-is-cataract">What is a <span>Cataract?</span></h2>
              <p>A cataract is a cloudy area in the eye&apos;s natural lens. The lens normally helps focus light on the retina so you can see clearly.</p>
              <p>Most cataracts develop as the eye changes with age. As the lens becomes cloudier, vision may become blurry or hazy, colours can appear faded, and seeing clearly at night can become more difficult.</p>
              <div className={styles.treatmentNote}>
                <span><Check size={18} aria-hidden="true" /></span>
                <div><h3>Cataracts can be treated with surgery</h3><p>During cataract surgery, the cloudy natural lens is removed and replaced with an artificial lens. An eye examination helps determine when surgery is appropriate for you.</p></div>
              </div>
            </div>
            <div className={styles.explainerVisual}>
              <figure className={styles.mainExamImage}>
                <Image src="/cataract-consultation-v2.png" alt="An ophthalmologist explaining cataracts to an older patient using an eye model" fill quality={90} sizes="(max-width: 800px) 100vw, 28vw" />
                <figcaption><Eye size={17} aria-hidden="true" /> Understanding cataract care</figcaption>
              </figure>
              <figure className={styles.supportImage}>
                <Image src="/cataract-eye-detail-v2.png" alt="Close view of an older adult's eye showing cataract lens clouding" fill quality={88} sizes="(max-width: 800px) 50vw, 14vw" />
              </figure>
              <figure className={styles.supportImage}>
                <Image src="/cataract-diagnostic-review-v2.png" alt="An ophthalmologist reviewing cataract diagnostic images with an older patient" fill quality={88} sizes="(max-width: 800px) 50vw, 14vw" />
              </figure>
            </div>
          </div>
        </section>
        <section className={styles.reasons} aria-labelledby="why-neyani">
          <div className="container">
            <div className={styles.reasonsHeading}>
              <p className={styles.sectionLabel}><span /> Why choose us</p>
              <h2 id="why-neyani">Why patients choose <span>Neyani Eye Hospital</span><br />for cataract care</h2>
              <p>Specialist expertise, modern surgical technology and considerate support for patients and families across Gandhidham and the Kutch region.</p>
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
        <section className={styles.signs} aria-labelledby="surgery-signs">
          <div className={`container ${styles.signsLayout}`}>
            <div className={styles.signsCopy}>
              <p className={styles.sectionLabel}><span /> Signs &amp; symptoms</p>
              <h2 id="surgery-signs">When should you consider <span>surgery?</span></h2>
              <p>Cataract surgery may be considered when changes in vision begin to interfere with daily activities, safety or independence. An ophthalmologist can assess whether cataracts are the cause and discuss the right timing.</p>
              <div className={styles.signsAccordion}>
                {surgerySigns.map((sign, index) => (
                  <details key={sign.title} open={index === 0}>
                    <summary><i>{String(index + 1).padStart(2, "0")}</i><strong>{sign.title}</strong><ChevronDown size={16} aria-hidden="true" /></summary>
                    <div><p>{sign.detail}</p>{index === 0 && <span><TrendingUp size={13} aria-hidden="true" /> Clinical next step: detailed cataract assessment</span>}</div>
                  </details>
                ))}
              </div>
            </div>
            <div className={styles.signsVisual}>
              <figure className={styles.signsMainImage}>
                <Image src="/cataract-consultation-older-patient.png" alt="An ophthalmologist discussing a cataract eye scan with an older patient" fill quality={90} sizes="(max-width: 800px) 100vw, 34vw" />
              </figure>
              <figure className={styles.signsEyeDetail}>
                <Image src="/cataract-reading-difficulty-v2.png" alt="An older woman having difficulty reading a medicine label" fill quality={88} sizes="(max-width: 600px) 45vw, 15vw" />
              </figure>
              <figure className={styles.signsDiagnosticDetail}>
                <Image src="/cataract-night-glare-v2.png" alt="Night road lights appearing with glare and halos" fill quality={88} sizes="(max-width: 600px) 45vw, 13vw" />
              </figure>
              <div className={styles.assessmentBadge}><Eye size={18} aria-hidden="true" /><span><strong>Personal assessment</strong>Examination guides treatment timing</span></div>
            </div>
          </div>
        </section>
        <section className={styles.lenses} aria-labelledby="lens-options">
          <div className="container">
            <div className={styles.lensHeading}>
              <p className={styles.sectionLabel}><span /> Lens options</p>
              <h2 id="lens-options">Our advanced <span>cataract care</span></h2>
              <p>Types of intraocular lenses (IOLs)—choose the option that best suits your lifestyle with guidance from your ophthalmologist.</p>
            </div>
            <div className={styles.lensGrid}>
              {lensOptions.map((lens) => (
                <article className={styles.lensCard} key={lens.title}>
                  <figure className={styles.lensImage}>
                    <Image src={lens.image} alt="" fill quality={90} sizes="(max-width: 700px) 100vw, 50vw" />
                  </figure>
                  <div className={styles.lensBody}>
                    <div className={styles.lensMeta}><span><lens.icon size={20} aria-hidden="true" /></span><b>{lens.label}</b></div>
                    <h3>{lens.title}</h3>
                    <p>{lens.description}</p>
                    <ul>{lens.benefits.map((benefit) => <li key={benefit}><Check size={15} aria-hidden="true" />{benefit}</li>)}</ul>
                    <Link href="/contact#appointment">Book consultation <ArrowRight size={16} aria-hidden="true" /></Link>
                  </div>
                </article>
              ))}
            </div>
            <p className={styles.lensNote}>Lens availability and suitability vary. No lens can guarantee complete freedom from glasses; your surgeon will explain expected benefits, limitations and possible visual effects.</p>
          </div>
        </section>
        <section className={styles.comparison} aria-labelledby="lens-comparison-heading">
          <div className="container">
            <div className={styles.comparisonHeading}>
              <p className={styles.sectionLabel}><span /> Side-by-side guide</p>
              <h2 id="lens-comparison-heading">Compare your <span>lens options</span></h2>
              <p>See how common intraocular lens designs differ. Your ophthalmologist will recommend an option after examining your eyes and understanding your daily vision needs.</p>
            </div>
            <p className={styles.scrollHint}>Swipe horizontally to compare all options</p>
            <div className={styles.comparisonWrap} tabIndex={0} aria-label="Scrollable comparison of cataract lens options">
              <table className={styles.comparisonTable}>
                <thead>
                  <tr>
                    <th scope="col">Feature</th>
                    {comparisonLenses.map((lens) => (
                      <th scope="col" key={lens.title} className={lens.featured ? styles.featuredLens : undefined}>
                        <strong>{lens.title}</strong>
                        <small>{lens.subtitle}</small>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className={styles.lensDesignRow}>
                    <th scope="row">Lens design</th>
                    {comparisonLenses.map((lens) => (
                      <td key={`${lens.title}-design`}>
                        <span className={styles.comparisonImage}>
                          <Image src={lens.image} alt={`Illustrative ${lens.title} intraocular lens design`} fill sizes="160px" />
                        </span>
                      </td>
                    ))}
                  </tr>
                  {lensComparison.map((row) => (
                    <tr key={row.feature}>
                      <th scope="row">{row.feature}</th>
                      {row.values.map((value, index) => <td key={`${row.feature}-${comparisonLenses[index].title}`}><Check size={16} aria-hidden="true" /><span>{value}</span></td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className={styles.comparisonNote}>Lens illustrations are representative. Lens suitability, availability and expected visual range vary between patients. No lens can guarantee complete freedom from glasses.</p>
          </div>
        </section>
        <section className={styles.benefits} aria-labelledby="surgery-benefits">
          <div className="container">
            <div className={styles.benefitsHeading}>
              <h2 id="surgery-benefits">Benefits of modern <span>cataract surgery</span></h2>
              <p>Cataract surgery replaces the cloudy natural lens with an artificial lens, with the aim of improving useful vision and everyday comfort.</p>
            </div>
            <BenefitsSlider benefits={benefits} />
            <p className={styles.benefitNote}>Results vary with the health of the eye, the selected lens and individual healing. Your ophthalmologist will discuss realistic expectations before surgery.</p>
          </div>
        </section>
        <Testimonials />
        <FAQ />
        <section className={styles.finalCta} aria-labelledby="cataract-consultation">
          <div className={`container ${styles.ctaPanel}`}>
            <div className={styles.ctaCopy}>
              <p className={styles.ctaLabel}><span /> Take the first step</p>
              <h2 id="cataract-consultation">Start your vision<br />care journey</h2>
              <p>Book a cataract consultation to discuss your symptoms, eye health and treatment options with the Neyani Eye Hospital team.</p>
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
        <section className={styles.note}>
          <div className="container">
            <p>{hospital.techSpotlight.disclaimer}</p>
            <Link href="/services">View all eye care services <ArrowRight size={17} aria-hidden="true" /></Link>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
