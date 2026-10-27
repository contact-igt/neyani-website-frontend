import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Activity, Baby, Cpu, Droplets, Eye, Glasses, Layers, MonitorCheck, Scan, ScanEye, ArrowRight, Check, Focus, Sparkles, Sun } from "lucide-react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB/WhatsAppFAB";
import { hospital } from "@/content/hospital";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: `Eye Care Treatments — ${hospital.name}`,
  description: "Explore cataract, glaucoma, retina, pediatric, diagnostic and general eye care treatments at Neyani Eye Hospital in Gandhidham.",
};

const icons = { eye: Eye, activity: Activity, scan: Scan, baby: Baby, "monitor-check": MonitorCheck, glasses: Glasses, cpu: Cpu, layers: Layers, focus: Focus, sun: Sun, droplets: Droplets } as const;

/** Every treatment in the header menu, in the same order. */
const services = [
  ...hospital.priorityServices,
  ...hospital.mosaicServices,
  { id: "cornea", icon: "layers", title: "Cornea Care", description: "Cornea assessment, imaging and care for corneal conditions. Slit-lamp examination and corneal topography help us understand the clarity, surface and shape of your cornea before planning care." },
  { id: "squint", icon: "focus", title: "Squint Care", description: "Squint assessment and eye-alignment care for children and adults. Care is supported by our pediatric ophthalmologist and squint surgeon, with treatment planned only after examination." },
  { id: "pterygium", icon: "sun", title: "Pterygium Treatment", description: "Assessment and treatment planning for pterygium, eye irritation and vision concerns. A detailed slit-lamp review guides whether monitoring, eye drops or surgery is the right next step." },
  { id: "oculoplasty", icon: "droplets", title: "Oculoplasty & Watering Eye Care", description: "Assessment for persistent watering eyes, eyelid concerns and tear-drainage symptoms. The eyelids, tear drainage and ocular surface are reviewed to identify the likely cause." },
] as const;

const servicePages = ["cataract", "glaucoma", "retina", "pediatric", "general", "cornea", "squint", "pterygium", "oculoplasty"];

const serviceVisuals = {
  cataract: { label: "Cataract & lens restoration", imageNote: "Micro-incision cataract care", action: "Discover Cataract Care", image: "/service-cataract.png", alt: "Eye surgeon carrying out cataract surgery with an operating microscope", points: [["Oertli Faros system", "Precise phacoemulsification", Cpu], ["1.6 mm MICS", "Micro-incision technique", Scan], ["Topical anaesthesia", "In suitable cases", Sparkles]] },
  glaucoma: { label: "Glaucoma & optic nerve care", imageNote: "Precision pressure assessment", action: "Understand Pressure Care", image: "/service-glaucoma.png", alt: "Ophthalmologist carrying out a detailed glaucoma eye examination", points: [["Eye-pressure check", "IOP measured at each review", Activity], ["Optic nerve imaging", "OCT and fundus review", Scan], ["Visual field testing", "Side-vision monitoring", Focus]] },
  retina: { label: "Retina & diabetic eye care", imageNote: "Detailed retina imaging", action: "Explore Retina Care", image: "/retina-care-hero.png", alt: "Retina specialist explaining retinal imaging to a patient", points: [["OCT & fundus imaging", "Detailed retinal views", Scan], ["Laser photocoagulation", "Where suitable", Sparkles], ["Retina specialist", "Vitreoretinal surgery", Activity]] },
  pediatric: { label: "Pediatric eye care", imageNote: "Gentle care for young eyes", action: "Explore Pediatric Care", image: "/pediatric-eye-care-hero.png", alt: "Ophthalmologist gently examining a child's eyes", points: [["Child-friendly checks", "Age-appropriate testing", Baby], ["Squint & lazy eye", "Assessment and care", Eye], ["Glasses for children", "Accurate prescriptions", Glasses]] },
  screening: { label: "Diagnostics & screening", imageNote: "Clinical imaging review", action: "Book a diagnostic consultation", image: "/service-diagnostics.png", alt: "Specialist reviewing advanced eye diagnostic imaging", points: [["Retina imaging", "Fundus and OCT scans", Scan], ["Visual-field testing", "Functional vision review", MonitorCheck], ["Clear results", "Next steps explained", Check]] },
  general: { label: "General eye care", imageNote: "Complete routine eye review", action: "Explore General Eye Care", image: "/neyani-eye-exam-banner-enhanced.png", alt: "Ophthalmologist performing a routine eye examination", points: [["Prescription updates", "Vision checked carefully", Glasses], ["Comfortable eyes", "Dry-eye and red-eye care", Eye], ["Family checkups", "Routine care for all ages", Check]] },
  technology: { label: "Clinical technology", imageNote: "Precision-led eye care", action: "Book a consultation", image: "/cataract-equipment-detail.png", alt: "Advanced ophthalmology equipment in a clinical setting", points: [["Zeiss Visu 160", "Operating microscope", Cpu], ["Advanced imaging", "Detailed diagnostic views", Scan], ["Care planning", "Technology guided by need", Check]] },
  cornea: { label: "Cornea care", imageNote: "Corneal mapping and review", action: "Explore Cornea Care", image: "/cornea-care-eye-banner-v3.png", alt: "Close view of a healthy eye showing the clear cornea", points: [["Slit-lamp examination", "Corneal clarity and surface", ScanEye], ["Corneal topography", "Shape and curvature mapping", Layers], ["Clear guidance", "Options explained after review", Check]] },
  squint: { label: "Squint & eye alignment", imageNote: "Alignment for every age", action: "Explore Squint Care", image: "/squint-care-hero-v1.png", alt: "Eye specialist assessing a patient's eye alignment", points: [["Alignment assessment", "Cover and eye-movement tests", Focus], ["Amblyopia screening", "Vision checked in each eye", Eye], ["Squint surgeon", "Specialist-led care", Baby]] },
  pterygium: { label: "Pterygium care", imageNote: "Eye-surface assessment", action: "Explore Pterygium Treatment", image: "/pterygium-treatment-hero-v1.png", alt: "Ophthalmologist examining the surface of a patient's eye", points: [["Slit-lamp review", "Size and position of growth", ScanEye], ["Astigmatism check", "Effect on clear vision", Eye], ["UV guidance", "Comfort and sun protection", Sun]] },
  oculoplasty: { label: "Oculoplasty & watering eyes", imageNote: "Eyelid and tear-drainage care", action: "Explore Oculoplasty Care", image: "/oculoplasty-watering-eye-hero-v1.png", alt: "Ophthalmologist examining a patient with a watering eye", points: [["Watering-eye evaluation", "Tear film and drainage", Droplets], ["Eyelid function review", "Position and comfort", Eye], ["Individual care plans", "Planned after examination", Check]] },
} as const;

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <header className={styles.hero}>
          <Image className={styles.heroImage} src="/services-overview-banner-v1.png" alt="Ophthalmologist discussing eye scan results with a patient" fill priority sizes="100vw" />
          <div className="container">
            <div className={styles.heroContent}>
              <p className={styles.eyebrow}>Our treatments</p>
              <h1>Specialist eye care<br /><span className="title-secondary">for every stage of life</span></h1>
              <p>From routine eye examinations to advanced surgical care, explore the treatments available at Neyani Eye Hospital.</p>
              <Link className={styles.heroAction} href="/contact#appointment">Book an appointment <ArrowRight size={17} aria-hidden="true" /></Link>
            </div>
          </div>
        </header>
        <section className={styles.services} aria-label="Eye care treatments">
          <div className="container">
            {services.map((service, index) => {
              const Icon = icons[service.icon];
              const hasPage = servicePages.includes(service.id);
              const visual = serviceVisuals[service.id as keyof typeof serviceVisuals];
              return (
                <article className={`${styles.service} ${index % 2 ? styles.reverse : ""}`} id={service.id} key={service.id}>
                  <figure className={styles.serviceVisual}>
                    <Image src={visual.image} alt={visual.alt} fill sizes="(max-width: 760px) 100vw, 48vw" />
                    {index % 2 === 1 && <span className={styles.imageTag}>{visual.imageNote}</span>}
                    <figcaption><Icon size={15} aria-hidden="true" /> {visual.label}</figcaption>
                  </figure>
                  <div className={styles.copy}>
                    <p className={styles.number}>{String(index + 1).padStart(2, "0")} · {visual.label}</p>
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                    <ul>{visual.points.map(([title, detail, PointIcon]) => <li key={title}><span className={styles.pointIcon}><PointIcon size={22} aria-hidden="true" /></span><span><strong>{title}</strong><small>{detail}</small></span></li>)}</ul>
                    <Link href={hasPage ? `/services/${service.id}` : "/contact#appointment"}>{visual.action} <ArrowRight size={17} aria-hidden="true" /></Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
