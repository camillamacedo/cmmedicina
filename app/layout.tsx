import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";
import WhatsAppButton from "./components/WhatsAppButton";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});



export const metadata: Metadata = {

  metadataBase: new URL("https://cmmedicina.com"),


  title: {
    default:
      "CM Medicina | Dra. Camilla Macedo | Telemedicina en Argentina",
    template: "%s | CM Medicina",
  },


  description:
    "Atención médica online en Argentina. Consultas de Clínica Médica, Cardiología, certificados médicos y seguimiento personalizado con la Dra. Camilla Macedo.",



  keywords: [
    "CM Medicina",
    "Dra. Camilla Macedo",
    "telemedicina Argentina",
    "médico online Argentina",
    "consulta médica online",
    "clínica médica",
    "cardiología",
    "certificados médicos",
    "renovación de recetas",
    "UBA medicina",
  ],



  authors: [
    {
      name: "Dra. Camilla Macedo",
    },
  ],



  creator:
    "Dra. Camilla Macedo",



  publisher:
    "CM Medicina",



  robots: {

    index: true,
    follow: true,

    googleBot: {

      index: true,
      follow: true,

      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,

    },

  },



  openGraph: {

    title:
      "CM Medicina | Atención médica online",

    description:
      "Medicina de calidad, estés donde estés.",

    url:
      "https://cmmedicina.com",

    siteName:
      "CM Medicina",

    locale:
      "es_AR",

    type:
      "website",


    images: [

      {

        url:
          "/og-image.png",

        width:
          1200,

        height:
          630,

        alt:
          "CM Medicina - Dra. Camilla Macedo",

      },

    ],

  },



  twitter: {

    card:
      "summary_large_image",

    title:
      "CM Medicina | Atención médica online",

    description:
      "Medicina de calidad, estés donde estés.",

    images:
      [
        "/og-image.png"
      ],

  },

};





export default function RootLayout({

  children,

}: Readonly<{

  children:
    React.ReactNode;

}>) {



const schema = {


  "@context":
    "https://schema.org",


  "@type":
    "Physician",



  name:
    "Dra. Camilla Macedo",



  url:
    "https://cmmedicina.com",



  image:
    "https://cmmedicina.com/og-image.png",



  description:
    "Médica Clínica egresada de la Universidad de Buenos Aires (UBA). Atención médica online para pacientes de toda Argentina, con enfoque en Clínica Médica, Cardiología y Geriatría.",



  medicalSpecialty: [

    "GeneralPractice",
    "Cardiovascular",
    "GeriatricMedicine"

  ],



  areaServed: {

    "@type":
      "Country",

    name:
      "Argentina",

  },



  availableLanguage: [

    "Spanish",
    "Portuguese"

  ],



  contactPoint: {

    "@type":
      "ContactPoint",

    telephone:
      "+54 9 11 5860-7484",

    contactType:
      "customer service",

    areaServed:
      "AR",

    availableLanguage: [

      "Spanish",
      "Portuguese"

    ],

  },



  sameAs: [

    "https://instagram.com/dramacedocamilla"

  ],



  hasOfferCatalog: {


    "@type":
      "OfferCatalog",


    name:
      "Servicios Médicos",



    itemListElement: [

      {

        "@type":
          "Offer",

        itemOffered: {

          "@type":
            "MedicalTherapy",

          name:
            "Consulta Médica Online",

        },

      },


      {

        "@type":
          "Offer",

        itemOffered: {

          "@type":
            "MedicalTherapy",

          name:
            "Teleconsulta",

        },

      },


      {

        "@type":
          "Offer",

        itemOffered: {

          "@type":
            "MedicalTherapy",

          name:
            "Certificados Médicos",

        },

      },


      {

        "@type":
          "Offer",

        itemOffered: {

          "@type":
            "MedicalTherapy",

          name:
            "Renovación de Recetas Médicas",

        },

      },


      {

        "@type":
          "Offer",

        itemOffered: {

          "@type":
            "MedicalTherapy",

          name:
            "Solicitud de Estudios",

        },

      },


      {

        "@type":
          "Offer",

        itemOffered: {

          "@type":
            "MedicalTherapy",

          name:
            "Apto Físico",

        },

      },


    ],


  },


};





return (

<html
  lang="es"
  className={`${inter.variable} h-full antialiased`}
>


<body className="min-h-full flex flex-col">



<Script

src="https://www.googletagmanager.com/gtag/js?id=G-LN466FXFX2"

strategy="afterInteractive"

/>



<Script

id="google-analytics"

strategy="afterInteractive"

>

{`

window.dataLayer = window.dataLayer || [];

function gtag(){dataLayer.push(arguments);}

gtag('js', new Date());


gtag('config', 'G-LN466FXFX2', {

page_path: window.location.pathname,

});


`}

</Script>





<Script

id="schema-org"

type="application/ld+json"

dangerouslySetInnerHTML={{

__html:
JSON.stringify(schema),

}}

/>





<Navbar />



<main className="flex-1 pt-24">

{children}

</main>



<Footer />



<WhatsAppButton />



</body>


</html>

);

}