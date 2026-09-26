"use client";

import Image from "next/image";
import Slider, { type Settings } from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./BenefitsSlider.module.css";

type Benefit = { image: string; title: string; description: string };

function PrevArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button type="button" className={`${styles.arrow} ${styles.arrowPrev}`} onClick={onClick} aria-label="Previous benefit">
      <ChevronLeft size={20} aria-hidden="true" />
    </button>
  );
}

function NextArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button type="button" className={`${styles.arrow} ${styles.arrowNext}`} onClick={onClick} aria-label="Next benefit">
      <ChevronRight size={20} aria-hidden="true" />
    </button>
  );
}

export default function BenefitsSlider({ benefits, label = "Benefits of cataract surgery carousel" }: { benefits: readonly Benefit[]; label?: string }) {
  const settings: Settings = {
    dots: false,
    arrows: true,
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    speed: 450,
    slidesToShow: 3,
    slidesToScroll: 1,
    accessibility: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 900, settings: { slidesToShow: 3, centerPadding: "0px" } },
      { breakpoint: 620, settings: { slidesToShow: 1, centerPadding: "18px" } },
    ],
  };

  return (
    <div className={styles.carousel} aria-label={label}>
      <div className={styles.sliderWrap}>
      <Slider {...settings}>
        {benefits.map((benefit) => (
          <div className={styles.slide} key={benefit.title}>
            <article className={styles.benefitCard}>
              <Image src={benefit.image} alt="" fill quality={95} sizes="(max-width: 620px) 100vw, (max-width: 900px) 50vw, 40vw" />
              <div className={styles.benefitShade} />
              <div className={styles.benefitCopy}><h3>{benefit.title}</h3><p>{benefit.description}</p></div>
            </article>
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
}
