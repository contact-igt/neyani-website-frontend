"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { FileCheck2, PhoneCall } from "lucide-react";
import Slider, { type Settings } from "react-slick";
import { hospital } from "@/content/hospital";
import styles from "./FacilitiesInsurance.module.css";

const sliderSettings: Settings = {
  arrows: false,
  draggable: false,
  infinite: false,
  slidesToShow: 6,
  swipe: false,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 4 } },
    { breakpoint: 620, settings: { slidesToShow: 2 } },
  ],
};

export default function FacilitiesInsurance() {
  const { insurance } = hospital;

  return (
    <section className={styles.section} aria-labelledby="insurance-heading">
      <div className={`container ${styles.inner}`}>
        <div className={styles.topline}>
          <div className={styles.intro}>
            <p className={styles.eyebrow}>Cashless care support</p>
            <h2 id="insurance-heading" className={styles.heading}>
              Insurance made <span className="title-secondary">easier</span>
            </h2>
            <p className={styles.lead}>{insurance.summary}</p>
          </div>
          <div className={styles.support}>
            <FileCheck2 aria-hidden="true" />
            <div>
              <strong>We help with the paperwork</strong>
              <span>Bring your insurance card and policy details when you visit.</span>
            </div>
          </div>
          <div className={styles.providerCount} aria-label={`${insurance.providers.length} insurance and TPA providers`}>
            <strong>{insurance.providers.length}</strong>
            <span>providers</span>
          </div>
        </div>

        <div className={styles.directory}>
          <div className={styles.logoMarquee} aria-label="Insurance and TPA providers">
            <Slider {...sliderSettings}>
              {[...insurance.providers, ...insurance.providers].map((provider, index) => {
                const duplicate = index >= insurance.providers.length;

                return (
                <div aria-hidden={duplicate || undefined} key={`${provider.name}-${index}`}>
                  <div className={styles.logoTile}>
                    <Image
                      src={provider.logo}
                      alt={duplicate ? "" : `${provider.name} logo`}
                      width={180}
                      height={80}
                      className={styles.logo}
                      style={{ "--logo-scale": provider.scale } as CSSProperties}
                    />
                  </div>
                </div>
                );
              })}
            </Slider>
          </div>
          <div className={styles.notice}>
            <PhoneCall aria-hidden="true" />
            <p>{insurance.disclaimer}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
