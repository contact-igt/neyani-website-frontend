"use client";

import Image from "next/image";
import { ArrowRight, Eye } from "lucide-react";
import Slider, { type Settings } from "react-slick";
import styles from "./Hero.module.css";

const slides = [
  { image: "/home-banner2.jpg", alt: "Eye examination and consultation room at Neyani Eye Hospital", position: "center bottom" },
  { image: "/home-banner3.jpg", alt: "Eye diagnostic room at Neyani Eye Hospital", position: "center bottom" },
] as const;

const sliderSettings: Settings = {
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  cssEase: "cubic-bezier(0.22, 1, 0.36, 1)",
  dots: false,
  draggable: false,
  infinite: true,
  pauseOnFocus: true,
  pauseOnHover: true,
  speed: 850,
  slidesToScroll: 1,
  slidesToShow: 1,
  swipe: false,
  touchMove: false,
};

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <Slider {...sliderSettings} className={styles.heroSlider} aria-label="Neyani Eye Hospital highlights">
        {slides.map(({ image, alt, position }) => <div className={styles.heroSlide} key={image}>
          <Image src={image} alt={alt} fill priority quality={95} sizes="100vw" className={styles.heroImage} style={{ objectPosition: position }} />
        </div>)}
      </Slider>
      <div className={styles.panel}>
        <div className={styles.copy}>
          <p className={styles.kicker}><span><Eye size={15} aria-hidden="true" /></span> Specialist eye care in Gandhidham</p>
          <h1 id="hero-heading">Clearer vision.<br /><span className={styles.headingAccent}>Care you can trust.</span></h1>
          <p className={styles.intro}>Advanced cataract, retina and children&apos;s eye care—thoughtfully delivered for every stage of life.</p>
          <div className={styles.actions}>
            <a href="#contact" className={styles.primary}>Book appointment <span><ArrowRight size={17} aria-hidden="true" /></span></a>
            <a href="#services" className={styles.secondary}>View services <span><ArrowRight size={16} aria-hidden="true" /></span></a>
          </div>
        </div>
      </div>
    </section>
  );
}
