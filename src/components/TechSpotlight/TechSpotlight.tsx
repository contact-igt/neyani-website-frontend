"use client";

import Image from "next/image";
import Slider, { type Settings } from "react-slick";
import { hospital } from "@/content/hospital";
import styles from "./TechSpotlight.module.css";

const technologyImages = [
  { src: "/oertli-faros.jpg", alt: "OERTLI ROBOTIC FAROS — Phacoemulsification System" },
  { src: "/zeiss-surgical-microscope.jpg", alt: "ZEISS VISU 160 — Surgical Microscope" },
  { src: "/diagnostic-optical-biometry-v1.png", alt: "LENSTAR PRO — Haag-Streit — Optical Biometer" },
  { src: "/diagnostic-oct-v1.png", alt: "ZEISS — OCT Imaging System" },
  { src: "/zeiss-perimetry.jpg", alt: "ZEISS Perimetry — Visual Field Analyzer" },
  { src: "/glaucoma-laser-treatment.png", alt: "APPASAMY — YAG Laser System" },
  { src: "/icare-tonometer-doctor.jpg", alt: "ICARE — Tonometer" },
  { src: "/unicos-unique-rk-clinical.jpg", alt: "UNICOS UNIQUE-RK — Autorefractometer / Keratometer" },
  { src: "/diagnostic-retina-exam-v1.png", alt: "KEELER — Indirect Ophthalmoscope" },
] as const;

const sliderSettings: Settings = {
  arrows: false,
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3500,
  speed: 650,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: true,
  pauseOnHover: false,
  pauseOnFocus: false,
  pauseOnDotsHover: false,
  waitForAnimate: false,
};

export default function TechSpotlight() {
  const { techSpotlight } = hospital;
  return (
    <section className={styles.section} id="technology" aria-labelledby="tech-heading">
      <div className={`container ${styles.inner}`}>
        <div className={styles.labelBar}>
          <span className={styles.label}>Surgical Technology</span>
        </div>
        <h2 id="tech-heading" className={styles.heading}>
          Technology designed <span className="title-secondary-on-dark">for precise eye care</span>
        </h2>

        <div className={styles.items}>
          {techSpotlight.items.map((item, i) => (
            <TechCard key={item.title} item={item} index={i} />
          ))}
        </div>

        <div className={styles.mobileSlider}>
          <Slider {...sliderSettings}>
            {techSpotlight.items.map((item, i) => (
              <div className={styles.slide} key={item.title}>
                <TechCard item={item} index={i} />
              </div>
            ))}
          </Slider>
        </div>

        <p className={styles.disclaimer}>{techSpotlight.disclaimer}</p>
      </div>
    </section>
  );
}

function TechCard({ item, index }: { item: (typeof hospital.techSpotlight.items)[number]; index: number }) {
  const image = technologyImages[index] ?? technologyImages[0];
  return (
    <div className={styles.item}>
      <div className={styles.media}>
        <Image src={image.src} alt={image.alt} fill quality={95} sizes="(max-width: 620px) 94vw, 33vw" />
        <span className={styles.stepNum} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className={styles.itemBody}>
        <h3 className={styles.itemTitle}>{item.title}</h3>
        <p className={styles.itemDetail}>{item.description}</p>
      </div>
    </div>
  );
}
