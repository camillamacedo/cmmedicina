import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cmmedicina.com"),

  title: {
    default: "CM Medicina | Atención médica online",
    template: "%s | CM Medicina",
  },

  description:
    "Atención médica online personalizada en toda Argentina. Medicina Clínica con actuación en Cardiología y Geriatría.",

  keywords: [
    "medicina online",
    "teleconsulta",
    "consulta médica",
    "medicina clínica",
    "cardiología",
    "geriatría",
    "certificados médicos",
    "recetas médicas",
    "CM Medicina",
  ],

  authors: [
    {
      name: "Dra. Camilla Macedo",
    },
  ],

  creator: "Dra. Camilla Macedo",

  publisher: "CM Medicina",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://cmmedicina.com",
  },

  openGraph: {
    title: "CM Medicina | Atención médica online",

    description:
      "Medicina de calidad, estés donde estés.",

    url: "https://cmmedicina.com",

    siteName: "CM Medicina",

    locale: "es_AR",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CM Medicina",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "CM Medicina | Atención médica online",

    description:
      "Medicina de calidad, estés donde estés.",

    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Physician",

    name: "Dra. Camilla Macedo",

    url: "https://cmmedicina.com",

    image: "https://cmmedicina.com/og-image.png",

    description:
      "Médica Clínica egresada de la Universidad de Buenos Aires (UBA). Atención médica online para pacientes de toda Argentina, con actuación en Clínica Médica y enfoque en Cardiología y Geriatría.",

    medicalSpecialty: "GeneralPractice",

    areaServed: {
      "@type": "Country",
      name: "Argentina",
    },

    availableLanguage: [
      "es",
      "pt",
    ],

    knowsLanguage: [
      "Español",
      "Português",
    ],

    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios Médicos",

      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalTherapy",
            name: "Consulta de Clínica Médica",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalTherapy",
            name: "Teleconsulta",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalTherapy",
            name: "Certificados Médicos",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalTherapy",
            name: "Renovación de Recetas Médicas",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalTherapy",
            name: "Solicitud de Estudios",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalTherapy",
            name: "Apto Físico",
          },
        },
      ],
    },

    sameAs: [],
  };

  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />

        <Navbar />

        <main className="flex-1 pt-24">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
