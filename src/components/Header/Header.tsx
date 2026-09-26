"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { hospital } from "@/content/hospital";
import styles from "./Header.module.css";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About us" },
  { href: "/#doctors", label: "Doctors" },
  { href: "/#technology", label: "Technology" },
  { href: "/contact", label: "Contact us" },
];

const serviceLinks = [...hospital.priorityServices, ...hospital.mosaicServices];
const serviceHref = (id:string) => ["cataract", "glaucoma", "pediatric", "retina", "general"].includes(id) ? `/services/${id}` : `/services#${id}`;

export default function Header() {
  const pathname = usePathname();
  const [menuOpen,setMenuOpen]=useState(false);
  const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{
    const onScroll=()=>setScrolled(window.scrollY>24);
    const close=()=>setMenuOpen(false);
    onScroll();
    window.addEventListener("scroll",onScroll,{passive:true});
    window.addEventListener("resize",close);
    return()=>{ window.removeEventListener("scroll",onScroll); window.removeEventListener("resize",close); };
  },[]);
  return (
    <header className={`${styles.header} ${scrolled?styles.scrolled:""}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label="Neyani Eye Hospital home"><Image src="/logo-new.png" alt="" width={469} height={252} priority /></Link>
        <nav className={styles.nav} aria-label="Main navigation"><ul>
          {navLinks.slice(0,2).map((link)=><li key={link.href}><Link className={(link.href==="/"?pathname==="/":pathname.startsWith(link.href))?styles.active:""} href={link.href}>{link.label}</Link></li>)}
          <li className={styles.servicesMenu}>
            <Link href="/services" className={pathname.startsWith("/services")?styles.active:""}> Services <ChevronDown size={14} aria-hidden="true" /></Link>
            <div className={styles.dropdown}>{serviceLinks.map((service)=><Link key={service.id} href={serviceHref(service.id)}>{service.title}</Link>)}</div>
          </li>
          {navLinks.slice(2).map((link)=><li key={link.href}><Link href={link.href}>{link.label}</Link></li>)}
        </ul></nav>
        <Link className={styles.cta} href="/contact#appointment">Book appointment <span><ArrowRight size={17} aria-hidden="true" /></span></Link>
        <button className={styles.toggle} onClick={()=>setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="mobile-nav" aria-label={menuOpen?"Close menu":"Open menu"}>{menuOpen?<X aria-hidden="true"/>:<Menu aria-hidden="true"/>}</button>
      </div>
      {menuOpen&&<nav id="mobile-nav" className={styles.mobile} aria-label="Mobile navigation">
        {navLinks.slice(0,2).map((link)=><Link key={link.href} href={link.href} onClick={()=>setMenuOpen(false)}>{link.label}</Link>)}
        <details className={styles.mobileServices}>
          <summary>Services <ChevronDown size={18} aria-hidden="true" /></summary>
          <div>
            <Link href="/services" onClick={()=>setMenuOpen(false)}>View all services</Link>
            {serviceLinks.map((service)=><Link key={service.id} href={serviceHref(service.id)} onClick={()=>setMenuOpen(false)}>{service.title}</Link>)}
          </div>
        </details>
        {navLinks.slice(2).map((link)=><Link key={link.href} href={link.href} onClick={()=>setMenuOpen(false)}>{link.label}</Link>)}
        <Link href="/contact#appointment" onClick={()=>setMenuOpen(false)}>Book appointment</Link>
      </nav>}
    </header>
  );
}
