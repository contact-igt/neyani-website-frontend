import type { Metadata } from "next";
import Link from "next/link";
import { Activity, Baby, Cpu, Eye, Glasses, MonitorCheck, Scan, ArrowRight } from "lucide-react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB/WhatsAppFAB";
import { hospital } from "@/content/hospital";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: `Eye Care Services — ${hospital.name}`,
  description: "Explore cataract, glaucoma, retina, pediatric, diagnostic and general eye care services at Neyani Eye Hospital in Gandhidham.",
};

const icons = { eye: Eye, activity: Activity, scan: Scan, baby: Baby, "monitor-check": MonitorCheck, glasses: Glasses, cpu: Cpu } as const;
const services = [...hospital.priorityServices, ...hospital.mosaicServices];
const servicePages = ["cataract", "glaucoma", "pediatric", "retina", "general"];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <header className={styles.hero}>
          <div className="container">
            <p className={styles.eyebrow}>Our services</p>
            <h1>Specialist eye care<br /><span className="title-secondary">for every stage of life</span></h1>
            <p>From routine eye examinations to advanced surgical care, explore the services available at Neyani Eye Hospital.</p>
          </div>
        </header>
        <section className={styles.services} aria-label="Eye care services">
          <div className="container">
            {services.map((service, index) => {
              const Icon = icons[service.icon];
              const hasPage = servicePages.includes(service.id);
              return (
                <article className={styles.service} id={service.id} key={service.id}>
                  <div className={styles.number}>{String(index + 1).padStart(2, "0")}</div>
                  <div className={styles.icon}><Icon size={27} strokeWidth={1.6} aria-hidden="true" /></div>
                  <div className={styles.copy}>
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                    <Link href={hasPage ? `/services/${service.id}` : "/contact#appointment"}>{hasPage ? `Explore ${service.id} care` : "Book a consultation"} <ArrowRight size={17} aria-hidden="true" /></Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
