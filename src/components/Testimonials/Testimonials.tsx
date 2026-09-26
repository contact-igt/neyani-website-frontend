"use client";

import Image from "next/image";
import Slider from "react-slick";
import { Quote, Star } from "lucide-react";
import { hospital } from "@/content/hospital";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 800,
    cssEase: "cubic-bezier(0.22, 1, 0.36, 1)",
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    pauseOnFocus: true,
    accessibility: true,
    responsive: [
      { breakpoint: 900, settings: { slidesToShow: 2 } },
      { breakpoint: 620, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className={styles.section} aria-labelledby="testimonials-heading">
      <div className={`container ${styles.frame}`}>
        <div className={styles.panel}>
          <Image
            src="/testimonial-patient-arc.png"
            alt="A diverse group of representative Indian patients"
            width={2172}
            height={724}
            quality={95}
            className={styles.portraitArc}
          />
          <div className={styles.mobilePortraits} aria-hidden="true">
            <Image
              src="/testimonial-patient-arc.png"
              alt=""
              width={2172}
              height={724}
              quality={95}
            />
          </div>

          <header className={styles.heading}>
            <p>Patient experiences</p>
            <h2 id="testimonials-heading">
              Real people. <span className="title-secondary">Clearer journeys.</span>
            </h2>
            <span>Stories shared on independent healthcare and local review platforms.</span>
          </header>

          <div className={styles.sliderWrap}>
            <Slider {...settings}>
              {hospital.testimonials.map((review) => (
                <div className={styles.slide} key={review.name}>
                  <article className={styles.card}>
                    <div className={styles.cardTop}>
                      <Quote aria-hidden="true" />
                      <div className={styles.stars} aria-label="5 out of 5 stars">
                        {Array.from({ length: 5 }, (_, index) => <Star key={index} aria-hidden="true" />)}
                      </div>
                    </div>
                    <blockquote>{review.quote}</blockquote>
                    <footer><strong>{review.name}</strong></footer>
                  </article>
                </div>
              ))}
            </Slider>
          </div>

          <p className={styles.disclosure}>Reviews are lightly edited for clarity and length. Individual treatment experiences vary.</p>
        </div>
      </div>
    </section>
  );
}
