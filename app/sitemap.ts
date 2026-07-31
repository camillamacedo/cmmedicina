import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {

  return [

    {
      url: "https://cmmedicina.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },


    {
      url: "https://cmmedicina.com/servicios",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },


    {
      url: "https://cmmedicina.com/contacto",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },


    {
      url: "https://cmmedicina.com/reservar",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },


    {
      url: "https://cmmedicina.com/teleconsulta",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },


    {
      url: "https://cmmedicina.com/medico-virtual",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },


    {
      url: "https://cmmedicina.com/medico-de-cabecera",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },


    {
      url: "https://cmmedicina.com/consulta-medica",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },


    {
      url: "https://cmmedicina.com/certificado-medico",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },


    {
      url: "https://cmmedicina.com/renovacion-de-receta",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },


    {
      url: "https://cmmedicina.com/solicitud-examen",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },


    {
      url: "https://cmmedicina.com/apto-fisico",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },


    {
      url: "https://cmmedicina.com/consultorio",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },


  ];

}