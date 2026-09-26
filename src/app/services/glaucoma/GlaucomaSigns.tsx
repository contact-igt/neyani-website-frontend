import Image from "next/image";
import Link from "next/link";
import { Activity, ArrowRight, ChevronDown, Eye, Gauge, ScanEye, ShieldCheck, TrendingUp } from "lucide-react";
import styles from "./glaucoma.module.css";

const signs = [
  { title: "A close relative has glaucoma", detail: "A parent or sibling with glaucoma increases your risk, even when your vision feels normal.", tag: "Family history" },
  { title: "You are over 40 or have diabetes", detail: "Age and certain health conditions can raise risk. Your doctor can advise how often your eyes should be checked.", tag: "Risk assessment" },
  { title: "Raised eye pressure was found previously", detail: "High pressure does not always mean glaucoma, but it should be assessed with the optic nerve and visual field.", tag: "Pressure review" },
  { title: "Side vision seems reduced or patchy", detail: "Glaucoma often affects peripheral vision first. Any new vision loss needs prompt professional assessment.", tag: "Visual field" },
  { title: "You already use glaucoma eye drops", detail: "Regular reviews help check pressure, optic-nerve appearance and whether treatment is controlling the condition.", tag: "Ongoing monitoring" },
] as const;

const visualChecks = [
  { image: "/service-glaucoma.png", label: "Slit-lamp examination", position: "center" },
  { image: "/service-diagnostics.png", label: "Eye-pressure check", position: "center" },
  { image: "/cataract-diagnostic-review-v2.png", label: "Optic-nerve imaging", position: "58% center" },
  { image: "/neyani-consultation.png", label: "Results and follow-up", position: "center" },
] as const;

export default function GlaucomaSigns() {
  return (
    <section className={styles.signs} aria-labelledby="glaucoma-checkup">
      <div className="container">
        <header className={styles.signsHeading}>
          <p><span /> Glaucoma risk checklist</p>
          <h2 id="glaucoma-checkup">When should you consider a <span>glaucoma check?</span></h2>
          <div>Glaucoma often develops without early symptoms. A comprehensive examination is especially important when you have known risk factors or are due for ongoing monitoring.</div>
        </header>

        <div className={styles.signsLayout}>
          <div className={styles.screener}>
            <div className={styles.signList}>
              {signs.map((sign, index) => (
                <details key={sign.title} open={index === 0}>
                  <summary><i>{String(index + 1).padStart(2, "0")}</i><strong>{sign.title}</strong><ChevronDown size={16} aria-hidden="true" /></summary>
                  <div><p>{sign.detail}</p><b>{sign.tag}</b>{index === 0 && <span><TrendingUp size={13} aria-hidden="true" /> Clinical next step: comprehensive glaucoma assessment</span>}</div>
                </details>
              ))}
            </div>
          </div>

          <div className={styles.signsVisual}>
            <div className={styles.visualGrid}>
              {visualChecks.map((item, index) => (
                <figure key={item.label}>
                  <Image src={item.image} alt="" fill quality={88} sizes="(max-width: 850px) 50vw, 20vw" style={{ objectPosition:item.position }} />
                  <figcaption>{item.label}<span>{index === 0 ? <Eye size={13} /> : index === 1 ? <Gauge size={13} /> : index === 2 ? <ScanEye size={13} /> : <Activity size={13} />}</span></figcaption>
                </figure>
              ))}
            </div>
            <aside className={styles.clinicalAdvisory}>
              <span><ShieldCheck size={20} aria-hidden="true" /></span>
              <div><p>Clinical guidance</p><h3>Do any of these apply to you?</h3><small>This checklist cannot diagnose glaucoma. A complete eye examination is the right next step.</small></div>
              <Link href="/contact#appointment">Book a check <ArrowRight size={15} aria-hidden="true" /></Link>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
