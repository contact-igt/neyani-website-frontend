"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { hospital } from "@/content/hospital";
import styles from "./TechSpotlight.module.css";

const technologyImages = [
  { src: "/tech-chair-unit.webp", alt: "Ophthalmic Chair Unit — Integrated Examination Suite" },
  { src: "/tech-unicos-rk.webp", alt: "UNICOS UNIQUE-RK — Auto Refractometer and Keratometer" },
  { src: "/tech-slit-lamp-imaging.webp", alt: "Slit Lamp with High-Resolution Digital Imaging Module" },
  { src: "/tech-icare-tonometer.webp", alt: "iCare ic100 — Rebound Tonometer" },
  { src: "/tech-lenstar-biometer.webp", alt: "Haag-Streit Lenstar 900 — Optical Biometer" },
  { src: "/tech-zeiss-oct.webp", alt: "ZEISS Cirrus HD-OCT — Optical Coherence Tomography System" },
  { src: "/tech-zeiss-perimetry.webp", alt: "ZEISS Humphrey Field Analyzer — Visual Field Perimeter" },
  { src: "/tech-appasamy-yag.webp", alt: "Appasamy Appa YAG Laser 307 — Ophthalmic Laser System" },
  { src: "/tech-oertli-faros.webp", alt: "OERTLI FAROS — Phacoemulsification System" },
  { src: "/tech-zeiss-visu150.webp", alt: "ZEISS VISU 150 — Surgical Operating Microscope" },
  { src: "/tech-alcon-infiniti.webp", alt: "Alcon Infiniti Vision System — Phacoemulsification Platform" },
] as const;

// Keep each device paired with its original image while changing display order.
const technologyOrder = [8, 4, 3, 0, 1, 2, 5, 6, 7, 9, 10] as const;

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
            {technologyOrder.map((index) => {
              const item = techSpotlight.items[index];
              return <TechCard key={item.title} item={item} index={index} />;
            })}
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
          quality={88}
          priority={index === 0}
          loading={index === 0 ? "eager" : "lazy"}
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
