"use client";

import Image from "next/image";
import Slider from "react-slick";
import styles from "./about.module.css";

const photos = [
  { src: "/founder-dr-shivpal-singh-rathore.jpg", alt: "Dr. Shivpal Singh Rathore, founder of Neyani Eye Hospital", position: "50% 12%" },
  { src: "/doctors.png", alt: "Dr. Yajuvendra Singh Rathore and Dr. Shivpal Singh Rathore at Neyani Eye Hospital", position: "center top" },
];

export default function FounderSlider() {
  return (
    <div className={styles.founderPhotoWrap} aria-label="Neyani Eye Hospital founder and doctors">
      <Slider className={styles.founderSlider} arrows={false} dots={false} autoplay autoplaySpeed={4500} speed={650} fade infinite slidesToShow={1} slidesToScroll={1} pauseOnHover pauseOnFocus>
        {photos.map((photo, index) => (
          <div key={photo.src}>
            <div className={styles.founderSlide}>
              <Image src={photo.src} alt={photo.alt} fill quality={95} priority={index === 0} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px" className={styles.founderPhoto} style={{ objectPosition: photo.position }} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
