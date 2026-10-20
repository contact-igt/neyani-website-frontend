"use client";

import Image from "next/image";
import Slider, { type Settings } from "react-slick";
import { Activity, CircleDot, Eye, Gauge, ScanEye, ScanLine, TestTube2 } from "lucide-react";
import styles from "./general.module.css";

const diagnostics = [
  { icon: Eye, title: "Comprehensive Eye Examination", copy: "A complete review of vision, eye health and the next steps that suit you.", image: "/diagnostic-comprehensive-exam-v1.png", alt: "Ophthalmologist carrying out a comprehensive eye examination" },
  { icon: TestTube2, title: "Vision Testing", copy: "Clear, comfortable vision is assessed for everyday reading, work and distance tasks.", image: "/diagnostic-vision-testing-v1.png", alt: "Ophthalmologist assessing a patient's vision" },
  { icon: Gauge, title: "Eye Pressure Testing", copy: "Eye pressure is checked as part of a careful glaucoma-risk assessment.", image: "/diagnostic-eye-pressure-v1.png", alt: "Ophthalmologist reviewing eye pressure testing" },
  { icon: ScanEye, title: "Retina Examination", copy: "Detailed retinal assessment helps identify changes that may affect sight.", image: "/diagnostic-retina-exam-v1.png", alt: "Specialist reviewing a retinal image" },
  { icon: ScanLine, title: "OCT", copy: "Cross-sectional imaging gives a closer view of the retina and optic nerve.", image: "/diagnostic-oct-v1.png", alt: "Ophthalmologist reviewing an OCT scan" },
  { icon: CircleDot, title: "Optical Biometry", copy: "Precise eye measurements support planning for lens and cataract care.", image: "/diagnostic-optical-biometry-v1.png", alt: "Optical biometry equipment in an eye clinic" },
  { icon: Activity, title: "Color Vision Testing", copy: "Colour perception is assessed when symptoms or history call for closer review.", image: "/diagnostic-color-vision-v1.png", alt: "Colour vision testing at an eye clinic" },
] as const;

const equipment = [
  {
    title: "OERTLI ROBOTIC FAROS — Phacoemulsification System",
    copy: "Advanced surgical platform for cataract removal, supporting microsurgical control and anterior segment procedures.",
    image: "/service-cataract.png",
    alt: "Surgeon performing cataract surgery with a phacoemulsification platform under an operating microscope",
  },
  {
    title: "ZEISS VISU 160 — Surgical Microscope",
    copy: "High-magnification surgical visualization for fine ocular structures during delicate cataract and eye procedures.",
    image: "/operation-theatre.jpg",
    alt: "ZEISS VISU surgical microscope on a floor stand in the operating theatre at Neyani Eye Hospital",
  },
  {
    title: "LENSTAR PRO — Optical Biometer",
    copy: "Laser optical biometry for precise ocular axial length measurements and intraocular lens (IOL) calculation.",
    image: "/diagnostic-optical-biometry-v1.png",
    alt: "Patient undergoing optical biometry measurement for cataract surgery planning",
  },
  {
    title: "ZEISS OCT — OCT Imaging System",
    copy: "High-definition cross-sectional imaging of retinal layers and the optic nerve head to detect subtle pathology.",
    image: "/diagnostic-oct-v1.png",
    alt: "OCT imaging system displaying cross-sectional retina scans and retinal thickness analysis",
  },
  {
    title: "APPASAMY — YAG Laser System",
    copy: "Precision ophthalmic laser platform for posterior capsulotomy and peripheral iridotomy procedures.",
    image: "/glaucoma-laser-treatment.png",
    alt: "Ophthalmic YAG laser system used for anterior segment laser treatments",
  },
  {
    title: "iCare — Tonometer",
    copy: "Rebound tonometry for quick, gentle intraocular pressure measurement without requiring anaesthetic drops.",
    image: "/diagnostic-eye-pressure-v1.png",
    alt: "Clinical eye pressure measurement equipment for glaucoma evaluation",
  },
  {
    title: "UNICOS / UNIQUE-RK — Autorefractometer / Keratometer",
    copy: "Automated measurement of refractive error and corneal curvature to support accurate vision and lens assessments.",
    image: "/service-diagnostics.png",
    alt: "Autorefractometer and keratometer measuring refractive error and corneal curvature",
  },
  {
    title: "ZEISS Perimetry — Visual Field Testing",
    copy: "Computerised visual field testing to evaluate peripheral sensitivity and assist in glaucoma management.",
    image: "/glaucoma-monitoring.png",
    alt: "Ophthalmologist reviewing automated perimetry visual field analysis maps and scan data",
  },
  {
    title: "KEELER — Indirect Ophthalmoscope",
    copy: "Wide-angle stereoscopic illumination and magnification for comprehensive examination of the peripheral retina.",
    image: "/diagnostic-retina-exam-v1.png",
    alt: "Clinical retina examination and fundus evaluation in the diagnostic suite",
  },
  {
    title: "Digital EMR System — Hospital-wide electronic medical records",
    copy: "Integrated digital medical records connecting clinical diagnostics, consultation findings and patient history.",
    image: "/patient-care.jpg",
    alt: "Hospital clinical workstation and consultation desk with digital electronic medical records",
  },
] as const;

const settings: Settings = { arrows: false, dots: true, infinite: true, autoplay: true, autoplaySpeed: 5000, speed: 550, slidesToShow: 1, slidesToScroll: 1, pauseOnFocus: true, pauseOnHover: true, swipeToSlide: true };
const equipmentSettings: Settings = { arrows: false, dots: true, infinite: true, autoplay: false, speed: 450, slidesToShow: 3, slidesToScroll: 1, pauseOnFocus: true, pauseOnHover: true, swipeToSlide: true, responsive: [{ breakpoint: 1000, settings: { slidesToShow: 2 } }, { breakpoint: 620, settings: { slidesToShow: 1 } }] };

export default function DiagnosticsShowcase() {
  return <section className={styles.diagnostics} aria-labelledby="diagnostics-heading">
    <div className="container">
      <header className={styles.diagnosticsHeading}><p className={styles.sectionLabel}><span /> Clinical technology</p><h2 id="diagnostics-heading">Diagnostic services &amp; <span>advanced equipment</span></h2><p>Careful examination is supported by clinical imaging and precise equipment when it is needed.</p></header>
      <div className={styles.diagnosticsBlock}><Slider {...settings}>{diagnostics.map(({ icon: Icon, title, copy, image, alt }) => <div className={styles.diagnosticSlide} key={title}><article className={styles.diagnosticCard}><figure><Image src={image} alt={alt} fill priority sizes="(max-width: 700px) 100vw, 1050px" /></figure><div><Icon aria-hidden="true" /><p>Spotlight diagnostic</p><h4>{title}</h4><span>{copy}</span></div></article></div>)}</Slider></div>
      <div className={styles.equipmentBlock}><div><p className={styles.sectionLabel}><span /> Clinical suite</p><h3>Advanced Equipment</h3></div><div className={styles.equipmentCarousel}><Slider {...equipmentSettings}>{equipment.map((item) => <div className={styles.equipmentSlide} key={item.title}><article><figure><Image src={item.image} alt={item.alt} fill sizes="(max-width: 620px) 100vw, (max-width: 1000px) 50vw, 33vw" /></figure><h4>{item.title}</h4><p>{item.copy}</p></article></div>)}</Slider></div></div>
    </div>
  </section>;
}
