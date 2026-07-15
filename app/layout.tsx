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

  title: {
    default: "CM Medicina | Atención médica online",
    template: "%s | CM Medicina",
  },


  description:
    "Atención médica personalizada, segura y basada en evidencia. Consultas online en todo el territorio nacional.",


  keywords: [
    "medicina online",
    "teleconsulta",
    "consulta médica",
    "certificados médicos",
    "CM Medicina",
  ],



  openGraph: {

    title:
      "CM Medicina | Atención médica online",


    description:
      "Medicina de calidad, estés donde estés.",


    url:
      "https://cmmedicina.com",


    siteName:
      "CM Medicina",


    images: [

      {
        url:
          "/og-image.png",

        width:
          1200,

        height:
          630,

        alt:
          "CM Medicina - Atención médica online",
      },

    ],


    locale:
      "es_AR",


    type:
      "website",

  },



  twitter: {

    card:
      "summary_large_image",


    title:
      "CM Medicina | Atención médica online",


    description:
      "Medicina de calidad, estés donde estés.",


    images:
      ["/og-image.png"],

  },

};





export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {


  return (

    <html

      lang="es"

      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}

    >


      <body className="min-h-full flex flex-col">


        <Navbar />


        <main className="flex-1 pt-24">

          {children}

        </main>


        <Footer />


      </body>


    </html>

  );

}