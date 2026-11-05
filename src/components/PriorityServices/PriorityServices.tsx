import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import styles from "./PriorityServices.module.css";

const services = [
  {
    title: "Cataract Surgery",
    description: "Micro-incision phacoemulsification cataract surgery with advanced intraocular lens planning for clear, restored vision.",
    image: "/service-cataract.png",
    className: "cataract",
    href: "/services/cataract",
  },
  {
    title: "Glaucoma Care",
    description: "Early diagnosis, intraocular pressure monitoring, visual field testing, OCT scans, and medical or laser treatment to preserve sight.",
    image: "/service-glaucoma.png",
    className: "glaucoma",
    href: "/services/glaucoma",
  },
  {
    title: "Retina & Diabetic Eye Care",
    description: "Dedicated evaluation for diabetic and hypertensive retinopathy, retinal screening, laser photocoagulation, and vitreoretinal support.",
    image: "/service-retina.png",
    className: "retina",
    href: "/services/retina",
  },
  {
    title: "Pediatric & Squint Care",
    description: "Child-friendly vision checks, amblyopia management, lazy eye therapy, and specialised surgical and non-surgical squint alignment.",
    image: "/service-pediatric.png",
    className: "pediatric",
    href: "/services/pediatric",
  },
  {
    title: "Eye Screening & Diagnostics",
    description: "High-precision optical biometry, OCT imaging, visual field perimetry, retinoscopy, and comprehensive routine eye health evaluations.",
    image: "/service-diagnostics.png",
    className: "diagnostics",
    href: "/services/general",
  },
  {
    title: "Cornea Care",
    description: "Detailed assessment and treatment for corneal surface disorders, infections, keratoconus, dry eye disease, and corneal dystrophies.",
    image: "/cornea-care-eye-banner-v3.png",
    className: "cornea",
    href: "/services/cornea",
  },
  {
    title: "Oculoplasty & Trauma Care",
    description: "Specialised surgical care for eyelid disorders, ptosis, tear drainage obstruction, orbital conditions, and prompt ocular trauma management.",
    image: "/oculoplasty-eyelid-care-v2.png",
    className: "oculoplasty",
    href: "/services/oculoplasty",
  },
  {
    title: "Pterygium Treatment",
    description: "Sutureless pterygium excision with conjunctival autograft technique to restore corneal clarity, comfort, and minimise recurrence.",
    image: "/pterygium-treatment-surgery-v1.png",
    className: "pterygium",
    href: "/services/pterygium",
  },
  {
    title: "Laser Procedures",
    description: "Outpatient YAG laser capsulotomy for post-cataract vision clouding and laser peripheral iridotomy for narrow-angle glaucoma.",
    image: "/service-laser-yag.jpg",
    className: "laser",
    href: "/services/general",
  },
  {
    title: "Optical Services",
    description: "Comprehensive refraction lane, accurate spectacle power testing, and quality dispensing of corrective lenses and frames.",
    image: "/diagnostic-vision-testing-v1.png",
    className: "opticals",
    href: "/services/general",
  },
] as const;

export default function PriorityServices() {
  return (
    <section className={styles.section} id="services" aria-labelledby="services-heading">
      <div className={styles.intro}>
        <span className={styles.kicker}>Eye Care Services</span>
        <h2 id="services-heading">
          Comprehensive eye care <span className="title-secondary">under one roof</span>
        </h2>
        <p>
          From advanced diagnostic facilities to specialised surgical care, we provide dedicated eye care services for patients of every age.
        </p>
      </div>
      <div className={styles.grid}>
        {services.map((service) => (
          <article key={service.title} className={`${styles.card} ${styles[service.className]}`}>
            <Image
              src={service.image}
              alt={service.title}
              fill
              quality={90}
              sizes="(max-width: 600px) 100vw, (max-width: 860px) 50vw, 33vw"
              className={styles.image}
            />
            <div className={styles.shade} />
            <Link
              href={service.href}
              className={styles.arrow}
              aria-label={`Explore ${service.title}`}
            >
              <ArrowUpRight size={20} aria-hidden="true" />
            </Link>
            <div className={styles.content}>
              <h3>
                <Link href={service.href} className={styles.titleLink}>
                  {service.title}
                </Link>
              </h3>
              <p>{service.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
