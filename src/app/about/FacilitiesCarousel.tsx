"use client";

import Image from "next/image";
import { useRef } from "react";
import Slider, { type Settings } from "react-slick";
import { ChevronLeft, ChevronRight, Eye, Microscope, Stethoscope, UsersRound } from "lucide-react";
import styles from "./FacilitiesCarousel.module.css";

const facilities = [
  { icon: Stethoscope, title: "Consultation Rooms", text: "Comfortable and private spaces for detailed evaluation.", image: "/journey-new.jpg", alt: "Consultation room at Neyani Eye Hospital" },
  { icon: Eye, title: "Advanced Diagnostics", text: "Accurate testing with modern diagnostic technology.", image: "/advanced-diagnostic.jpg", alt: "Diagnostic equipment in an eye examination room" },
  { icon: Microscope, title: "Operating Theatre", text: "Equipped for planned eye procedures and surgery.", image: "/operation-theatre.jpg", alt: "Ophthalmic operating theatre at Neyani Eye Hospital" },
  { icon: UsersRound, title: "Patient Support", text: "A welcoming team to guide every visit.", image: "/patient-support.jpg", alt: "Patient support and reception area at Neyani Eye Hospital" },
] as const;

const settings: Settings = {
  arrows: false,
  dots: true,
  infinite: false,
  speed: 400,
  slidesToShow: 3,
  slidesToScroll: 1,
  accessibility: true,
  responsive: [
    { breakpoint: 900, settings: { slidesToShow: 2 } },
    { breakpoint: 600, settings: { slidesToShow: 1 } },
  ],
};

export default function FacilitiesCarousel() {
  const sliderRef = useRef<Slider>(null);
  return (
    <section className={styles.section} aria-labelledby="facilities-title">
      <div className={`container ${styles.inner}`}>
        <header className={styles.heading}>
          <div><p className={styles.kicker}><span /> Our facilities</p><h2 id="facilities-title">Modern facilities for<br /><em>complete eye care.</em></h2><p className={styles.lead}>From consultation to diagnostics and surgery, our facilities are designed to provide a comfortable, safe and seamless experience for every patient.</p></div>
          <div className={styles.arrows}><button type="button" onClick={() => sliderRef.current?.slickPrev()} aria-label="Previous facility"><ChevronLeft aria-hidden="true" /></button><button type="button" onClick={() => sliderRef.current?.slickNext()} aria-label="Next facility"><ChevronRight aria-hidden="true" /></button></div>
        </header>
        <div className={styles.slider} aria-label="Neyani Eye Hospital facilities">
          <Slider ref={sliderRef} {...settings}>{facilities.map(({ icon: Icon, title, text, image, alt }) => <div className={styles.slide} key={title}><article className={styles.card}><figure><Image src={image} alt={alt} fill sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw" /></figure><div><span><Icon aria-hidden="true" /></span><p><strong>{title}</strong>{text}</p></div></article></div>)}</Slider>
        </div>
      </div>
    </section>
  );
}
