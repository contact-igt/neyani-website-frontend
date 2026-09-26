"use client";

import Image from "next/image";
import Link from "next/link";
import Slider, { type Settings } from "react-slick";
import { Activity, ArrowUpRight, Droplets, Eye, Glasses, ScanEye, ScanLine, ShieldCheck, Stethoscope } from "lucide-react";
import styles from "./general.module.css";

const problems = [
  { icon: Glasses, label: "Vision & prescription", title: "Refractive errors", description: "Blurred distance or near vision caused by myopia, hyperopia, astigmatism or presbyopia.", image: "/neyani-eye-exam-banner.png", alt: "An ophthalmologist examining a patient's eyes" },
  { icon: Droplets, label: "Ocular surface care", title: "Dry eye syndrome", description: "Burning, grittiness, watering or fluctuating vision linked to tear-film imbalance.", image: "/cataract-exam-close.png", alt: "An ophthalmologist examining an adult patient's eyes" },
  { icon: Eye, label: "Ocular surface care", title: "Eye allergy", description: "Itching, watering and irritation from allergic eye conditions or seasonal triggers.", image: "/neyani-consultation.png", alt: "An ophthalmologist discussing eye findings with a patient" },
  { icon: ShieldCheck, label: "Prompt assessment", title: "Eye infection", description: "Redness, discharge, swelling or discomfort assessed to guide appropriate treatment.", image: "/service-diagnostics.png", alt: "An ophthalmologist using diagnostic equipment" },
  { icon: Eye, label: "Eye health review", title: "Red eye", description: "Persistent redness, pain or light sensitivity needs a clinical examination to find the cause.", image: "/retina-slit-lamp-exam.png", alt: "A specialist performing a slit lamp eye examination" },
  { icon: Activity, label: "Visual comfort", title: "Eye strain & headaches", description: "Screen-related discomfort, focusing difficulty and headaches checked alongside your prescription.", image: "/neyani-eye-exam-banner-enhanced.png", alt: "An ophthalmologist carrying out an eye examination" },
  { icon: ScanLine, label: "Retina screening", title: "Diabetic eye screening", description: "Retinal checks help identify diabetes-related eye changes before they affect vision.", image: "/retina-fundus-imaging.png", alt: "Specialist reviewing detailed retinal imaging" },
  { icon: ScanEye, label: "Optic nerve review", title: "Glaucoma screening", description: "Eye pressure, optic nerve and visual-field testing when glaucoma risk needs assessment.", image: "/glaucoma-monitoring.png", alt: "Ophthalmologist reviewing glaucoma monitoring results" },
  { icon: Stethoscope, label: "Healthy ageing", title: "Age-related vision changes", description: "Changes in reading, contrast, glare or night vision reviewed as your eyes change with age.", image: "/cataract-consultation-older-patient.png", alt: "Ophthalmologist discussing eye care with an older patient" },
] as const;

const settings: Settings = {
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3600,
  cssEase: "cubic-bezier(.16,1,.3,1)",
  dots: true,
  infinite: true,
  pauseOnFocus: true,
  pauseOnHover: true,
  slidesToScroll: 1,
  slidesToShow: 3,
  speed: 550,
  swipeToSlide: true,
  responsive: [
    { breakpoint: 980, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
};

export default function EyeProblemsSlider() {
  return (
    <div className={styles.problemsCarousel} aria-label="Common eye problems we treat">
      <Slider {...settings}>
        {problems.map((problem) => {
          const Icon = problem.icon;
          return (
            <div className={styles.problemSlide} key={problem.title}>
              <Link href="/contact#appointment" className={styles.conditionCard} aria-label={`Book a consultation for ${problem.title}`}>
                <div className={styles.conditionTop}><span><Icon size={19} aria-hidden="true" /></span><i><ArrowUpRight size={17} aria-hidden="true" /></i></div>
                <small className={styles.conditionLabel}>{problem.label}</small>
                <h3>{problem.title}</h3>
                <p>{problem.description}</p>
                <figure><Image src={problem.image} alt={problem.alt} fill quality={88} sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw" /></figure>
              </Link>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
