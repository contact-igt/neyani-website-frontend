"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown, CircleHelp } from "lucide-react";
import { hospital } from "@/content/hospital";
import styles from "./FAQ.module.css";

type FAQItem = { q: string; a: string };

type FAQProps = {
  faqs?: readonly FAQItem[];
  intro?: string;
  image?: string;
  imageAlt?: string;
};

export default function FAQ({
  faqs = hospital.faqs,
  intro = "Helpful guidance about appointments, eye checks, surgery, children's vision and what to expect from your visit.",
  image = "/service-diagnostics.png",
  imageAlt = "An ophthalmologist explaining an eye scan during a consultation",
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className={styles.section} aria-labelledby="faq-heading">
      <div className={styles.layout}>
        <div className={styles.intro}>
          <span className={styles.label}><CircleHelp size={18} aria-hidden="true" /> FAQs</span>
          <h2 id="faq-heading">Clear answers <span className="title-secondary">to your questions</span></h2>
          <p>{intro}</p>
          <div className={styles.imageWrap}><Image src={image} alt={imageAlt} fill quality={95} sizes="(max-width: 820px) 100vw, 42vw" /></div>
        </div>

        <div className={styles.list}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <article className={`${styles.item} ${isOpen ? styles.expanded : ""}`} key={faq.q}>
                <button onClick={() => setOpenIndex(isOpen ? null : index)} aria-expanded={isOpen} aria-controls={`faq-answer-${index}`}>
                  <span>{faq.q}</span><i><ChevronDown size={18} aria-hidden="true" /></i>
                </button>
                <div id={`faq-answer-${index}`} className={styles.answer}><p>{faq.a}</p></div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
