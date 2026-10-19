// ─── Doctor profiles — used by /doctors and /doctors/[id] ───────────────────
// Facts come from `hospital.doctors` and the service pages. Keep claims in
// line with what the hospital has confirmed.

import { hospital } from "./hospital";

type Doctor = (typeof hospital.doctors)[number];

export type DoctorProfile = {
  doctor: Doctor;
  type: "lead" | "visiting";
  image: string;
  /** CSS object-position that keeps the face in frame (default: centre, near top). */
  imagePosition?: string;
  /** Short speciality label for compact UI. */
  specialty: string;
  /** Short summary used on cards and the profile banner. */
  description: string;
  /** Longer introduction for the profile page. */
  about: readonly string[];
  skills: readonly string[];
  expertise: readonly { title: string; detail: string }[];
  services: readonly { title: string; href: string; detail: string }[];
  quote?: string;
};

const [rathore, urmilShah, ankitShah] = hospital.doctors;

export const doctorProfiles: readonly DoctorProfile[] = [
  {
    doctor: rathore,
    type: "lead",
    image: "/dr.yajuvendra-singh.jpg",
    imagePosition: "35% 28%",
    specialty: "Cataract & eye care",
    description: "Dr. Yajuvendra Singh Rathore is an experienced ophthalmologist specialising in cataract surgery, pediatric cataract and comprehensive eye care. With a patient-centric approach, he combines advanced technology with personalised treatment plans for clear and healthy vision.",
    about: [
      "Dr. Yajuvendra Singh Rathore is the Proprietor and Lead Surgeon at Neyani Eye Hospital, serving patients and families in Gandhidham and the wider Kutch region since 2019.",
      "Dr. Rathore holds an MBBS and MS in Ophthalmology, a fellowship in Phaco & Refractive surgery from H.V. Desai Eye Hospital, Pune, and FICO (UK). The practice focuses on cataract surgery, pediatric cataract and comprehensive eye care.",
      "Treatment is planned after a detailed examination, and every patient receives a clear explanation of their options in English, Hindi or Gujarati.",
    ],
    skills: ["Cataract surgery", "Pediatric cataract", "General eye care"],
    expertise: [
      { title: "Cataract Surgery", detail: "We use the Oertli Faros system for cataract surgery, with the surgical approach and anaesthesia chosen according to your eye condition and individual needs." },
      { title: "Lens Planning", detail: "Choosing the right lens is an important part of cataract surgery. Our doctor will guide you through the available lens options based on your eye health, lifestyle and vision needs." },
      { title: "Glaucoma Care", detail: "We help assess eye health and check for signs of glaucoma through appropriate examinations, so the doctor can recommend the right care for your needs." },
      { title: "Cornea Care", detail: "The cornea is the clear front surface of your eye. We assess corneal conditions and help you understand the appropriate treatment options for your eyes." },
      { title: "Diabetic Eye Care", detail: "Diabetes can affect your vision over time. Regular eye examinations and retinal screening can help detect changes early and support timely care." },
      { title: "Comprehensive Eye Care", detail: "From routine eye check-ups and vision prescriptions to common eye concerns, we help you care for your eyes and maintain healthy vision." },
    ],
    services: [
      { title: "Cataract surgery", href: "/services/cataract", detail: "Robotic, painless micro-incision cataract surgery." },
      { title: "General eye care", href: "/services/general", detail: "Eye checkups, prescriptions and everyday eye problems." },
    ],
    quote: "My focus is on safe, precise and personalised care for every patient.",
  },
  {
    doctor: urmilShah,
    type: "visiting",
    image: "/dr.urmil-shah.jpeg",
    specialty: "Retina specialist",
    description: "Dr. Urmil Shah specialises in medical and surgical management of retinal conditions, diabetic eye disease and vitreous disorders.",
    about: [
      "Dr. Urmil Shah is the visiting retina specialist at Neyani Eye Hospital, providing consultation for retinal and vitreoretinal conditions.",
      "Dr. Shah’s work covers the medical and surgical management of retinal disease, diabetic eye disease and vitreous disorders, supported by OCT and fundus imaging at the hospital.",
      "As a visiting consultant, appointments are scheduled on consultation days. Please call the hospital to confirm availability.",
    ],
    skills: ["Retina & vitreous", "Diabetic eye disease", "Retinal evaluation"],
    expertise: [
      { title: "Diabetic retinopathy care", detail: "Screening, staging and treatment of diabetic changes in the retina." },
      { title: "Laser photocoagulation", detail: "Laser treatment, where suitable, to seal leaking blood vessels." },
      { title: "Vitreoretinal surgery", detail: "Surgical care for complex retinal and vitreous conditions." },
      { title: "Retinal evaluation", detail: "Detailed assessment with OCT scans and fundus photography." },
    ],
    services: [
      { title: "Diabetic eye & retina care", href: "/services/retina", detail: "Retinal screening, laser treatment and vitreoretinal surgery." },
    ],
  },
  {
    doctor: ankitShah,
    type: "visiting",
    image: "/dr.ankit-shah.jpeg",
    specialty: "Pediatric & squint",
    description: "Dr. Ankit Shah specialises in pediatric ophthalmology, squint treatment and amblyopia management, providing comprehensive care for children’s eye health.",
    about: [
      "Dr. Ankit Shah is the visiting pediatric ophthalmologist and squint surgeon at Neyani Eye Hospital.",
      "Dr. Shah provides specialist eye care for children, including squint assessment and surgery, amblyopia (lazy eye) management and vision checks adapted to each child's age.",
      "As a visiting consultant, appointments are scheduled on consultation days. Please call the hospital to confirm availability.",
    ],
    skills: ["Pediatric ophthalmology", "Squint treatment", "Amblyopia management"],
    expertise: [
      { title: "Pediatric eye examinations", detail: "Gentle, age-appropriate vision and eye health checks for children." },
      { title: "Squint (strabismus) care", detail: "Eye-alignment assessment, non-surgical options and squint surgery." },
      { title: "Amblyopia management", detail: "Glasses and patching plans to help a weaker eye develop." },
      { title: "Refractive errors in children", detail: "Accurate testing and glasses for short-sight, long-sight and astigmatism." },
    ],
    services: [
      { title: "Pediatric eye care", href: "/services/pediatric", detail: "Eye checks, lazy eye and squint care for children." },
    ],
  },
];

export const getDoctorProfile = (id: string) => doctorProfiles.find((profile) => profile.doctor.id === id);
