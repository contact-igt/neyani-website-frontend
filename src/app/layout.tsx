import type { Metadata } from "next";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import { hospital } from "@/content/hospital";

const siteUrl = "https://neyanihospital.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${hospital.name} — Eye Hospital & Specialist in Gandhidham, Gujarat`,
    template: `%s | ${hospital.name}`,
  },
  description:
    "Neyani Eye Hospital offers expert cataract surgery, glaucoma treatment, diabetic retina care, pediatric ophthalmology, and general eye care in Gandhidham, Gujarat. Serving Adipur, Anjar, Bhachau, and the Kutch region.",
  keywords: [
    "eye hospital Gandhidham",
    "cataract surgery Gandhidham",
    "ophthalmologist Kutch",
    "eye doctor Adipur",
    "glaucoma treatment Gujarat",
    "diabetic retinopathy Gandhidham",
    "pediatric ophthalmology Gandhidham",
    "Neyani Eye Hospital",
    "Dr Yajuvendra Singh Rathore",
    "eye specialist Anjar",
    "eye hospital Bhachau",
    "retina specialist Kutch",
    "phaco surgery Gandhidham",
  ],
  authors: [{ name: "Dr. Yajuvendra Singh Rathore" }],
  creator: hospital.name,
  publisher: hospital.name,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: `${hospital.name} — Eye Hospital & Specialist in Gandhidham, Gujarat`,
    description:
      "Advanced eye care in Gandhidham, Gujarat — cataract surgery, glaucoma, diabetic retina care, pediatric ophthalmology, and more.",
    url: siteUrl,
    siteName: hospital.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/about-hospital-facade-v1.png",
        width: 1200,
        height: 630,
        alt: `${hospital.name} Facade in Gandhidham, Gujarat`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${hospital.name} — Eye Hospital in Gandhidham`,
    description:
      "Advanced eye care in Gandhidham, Gujarat — cataract surgery, glaucoma, retina care, and modern ophthalmic technology.",
    images: ["/about-hospital-facade-v1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "IN-GJ",
    "geo.placename": "Gandhidham, Gujarat, India",
    "geo.position": "23.0753;70.1337",
    ICBM: "23.0753, 70.1337",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalClinic", "LocalBusiness", "MedicalOrganization"],
  "@id": `${siteUrl}/#hospital`,
  name: hospital.name,
  alternateName: "Neyani Eye Centre",
  url: siteUrl,
  logo: `${siteUrl}/logo.jpeg`,
  image: `${siteUrl}/about-hospital-facade-v1.png`,
  description:
    "Specialist eye hospital in Gandhidham providing cataract surgery, glaucoma management, diabetic retina care, and pediatric ophthalmology across Kutch.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot No. 249, Gayatri Mandir Road, Opp. Kutch Uday, Sector 1A",
    addressLocality: "Gandhidham",
    addressRegion: "Gujarat",
    postalCode: "370201",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 23.0753,
    longitude: 70.1337,
  },
  telephone: hospital.phone,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:30",
      closes: "13:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "17:30",
      closes: "20:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Gandhidham" },
    { "@type": "City", name: "Adipur" },
    { "@type": "City", name: "Anjar" },
    { "@type": "City", name: "Bhachau" },
    { "@type": "City", name: "Rapar" },
    { "@type": "AdministrativeArea", name: "Kutch" },
    { "@type": "AdministrativeArea", name: "Gujarat" },
  ],
  priceRange: "₹₹",
  medicalSpecialty: ["Ophthalmology"],
  availableService: [
    { "@type": "MedicalProcedure", name: "Cataract Surgery (Phaco & MICS)" },
    { "@type": "MedicalProcedure", name: "Glaucoma Care & Laser Iridotomy" },
    { "@type": "MedicalProcedure", name: "Diabetic Retinopathy Management & OCT" },
    { "@type": "MedicalProcedure", name: "Pediatric Eye Care & Squint Evaluation" },
    { "@type": "MedicalProcedure", name: "Cornea & Ocular Surface Disease" },
    { "@type": "MedicalProcedure", name: "Pterygium Surgery with Autograft" },
    { "@type": "MedicalProcedure", name: "Comprehensive Eye Examination" },
  ],
  foundingDate: hospital.established,
  sameAs: [
    "https://www.justdial.com/Gandhidham/Neyani-Eye-Hospital-Opposite-Kutch-Uday-Gandhidham-Sector-1/9999P2836-2836-190406180514-F5C6_BZDET/amp",
    "https://www.practo.com/kutch/hospital/neyani-eye-centre-rapar",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
