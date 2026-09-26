import type { Metadata } from "next";
import "./globals.css";
import { hospital } from "@/content/hospital";

export const metadata: Metadata = {
  title: `${hospital.name} — Eye Specialist, Gandhidham, Gujarat`,
  description:
    "Neyani Eye Hospital offers expert cataract surgery, glaucoma treatment, diabetic retina care, pediatric ophthalmology, and general eye care in Gandhidham, Gujarat. Serving Adipur, Anjar, Bhachau, and the Kutch region.",
  keywords: [
    "eye hospital Gandhidham",
    "cataract surgery Gandhidham",
    "ophthalmologist Kutch",
    "eye doctor Adipur",
    "glaucoma treatment Gujarat",
    "diabetic retinopathy",
    "pediatric ophthalmology Gandhidham",
    "Neyani Eye Hospital",
    "Dr Yajuvendra Singh Rathore",
  ],
  openGraph: {
    title: `${hospital.name} — Eye Specialist, Gandhidham`,
    description:
      "Advanced eye care in Gandhidham, Gujarat — cataract surgery, glaucoma, diabetic retina care, and more.",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "geo.region": "IN-GJ",
    "geo.placename": "Gandhidham, Gujarat, India",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalClinic", "LocalBusiness"],
  name: hospital.name,
  description:
    "Eye hospital in Gandhidham providing cataract surgery, glaucoma management, diabetic eye care, and pediatric ophthalmology.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot No. 249, Gayatri Mandir Road, Opp. Kutch Uday, Sector 1A",
    addressLocality: "Gandhidham",
    addressRegion: "Gujarat",
    postalCode: "370201",
    addressCountry: "IN",
  },
  telephone: hospital.phone,
  openingHours: [
    "Mo-Sa 10:30-13:00",
    "Mo-Sa 17:30-20:00",
  ],
  medicalSpecialty: ["Ophthalmology"],
  availableService: [
    { "@type": "MedicalProcedure", name: "Cataract Surgery" },
    { "@type": "MedicalProcedure", name: "Glaucoma Treatment" },
    { "@type": "MedicalProcedure", name: "Diabetic Retinopathy Management" },
    { "@type": "MedicalProcedure", name: "Pediatric Eye Care" },
  ],
  foundingDate: hospital.established,
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
