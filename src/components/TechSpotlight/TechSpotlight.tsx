"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

export default function TechSpotlight() {
  const { techSpotlight } = hospital;
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollPrev(scrollLeft > 6);
    setCanScrollNext(scrollLeft < scrollWidth - clientWidth - 6);
  }, []);

  useEffect(() => {
    updateScrollState();
    const el = trackRef.current;
    if (!el) return;

    window.addEventListener("resize", updateScrollState);
    return () => window.removeEventListener("resize", updateScrollState);
  }, [updateScrollState]);

  const getScrollStep = () => {
    if (!trackRef.current) return 360;
    const firstCard = trackRef.current.firstElementChild as HTMLElement | null;
    return (firstCard?.offsetWidth ?? 360) + 20; // card width + gap (1.25rem = 20px)
  };

  const scrollPrev = () => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({ left: -getScrollStep(), behavior: "smooth" });
  };

  const scrollNext = () => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({ left: getScrollStep(), behavior: "smooth" });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollPrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollNext();
    }
  };

  return (
    <section className={styles.section} id="technology" aria-labelledby="tech-heading">
      <div className={`container ${styles.inner}`}>
        <div className={styles.labelBar}>
          <span className={styles.label}>Surgical Technology</span>
        </div>
        <h2 id="tech-heading" className={styles.heading}>
          Technology designed <span className="title-secondary-on-dark">for precise eye care</span>
        </h2>

        <div className={styles.carouselWrapper}>
          <button
            type="button"
            className={`${styles.navButton} ${styles.navPrev}`}
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            aria-label="Previous equipment"
          >
            <ChevronLeft size={22} aria-hidden="true" />
          </button>

          <div
            ref={trackRef}
            className={styles.carouselTrack}
            tabIndex={0}
            role="region"
            aria-label="Medical equipment horizontal carousel"
            onScroll={updateScrollState}
            onKeyDown={handleKeyDown}
          >
            {techSpotlight.items.map((item, i) => (
              <TechCard key={item.title} item={item} index={i} />
            ))}
          </div>

          <button
            type="button"
            className={`${styles.navButton} ${styles.navNext}`}
            onClick={scrollNext}
            disabled={!canScrollNext}
            aria-label="Next equipment"
          >
            <ChevronRight size={22} aria-hidden="true" />
          </button>
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
        <Image
          src={image.src}
          alt={image.alt}
          fill
          quality={95}
          sizes="(max-width: 620px) 85vw, (max-width: 1024px) 340px, 360px"
        />
      </div>
      <div className={styles.itemBody}>
        <h3 className={styles.itemTitle}>{item.title}</h3>
        <p className={styles.itemDetail}>{item.description}</p>
      </div>
    </div>
  );
}
