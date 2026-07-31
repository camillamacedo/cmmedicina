<section className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">


  {[
    {
      title: "Médico Virtual",
      text: "Consultas online seguras y personalizadas desde cualquier lugar.",
      href: "/medico-virtual",
    },
    {
      title: "Médico de Cabecera",
      text: "Seguimiento integral y acompañamiento continuo de tu salud.",
      href: "/medico-de-cabecera",
    },
    {
      title: "Consulta Médica",
      text: "Evaluación clínica, orientación y seguimiento personalizado.",
      href: "/consulta-medica",
    },
    {
      title: "Certificados Médicos",
      text: "Evaluación profesional para emisión de certificados médicos.",
      href: "/certificado-medico",
    },
    {
      title: "Solicitud de Estudios",
      text: "Indicación de estudios complementarios según evaluación médica.",
      href: "/solicitud-examen",
    },
    {
      title: "Apto Físico",
      text: "Evaluación médica para actividades deportivas y laborales.",
      href: "/apto-fisico",
    },
    {
      title: "Renovación de Recetas",
      text: "Seguimiento de tratamientos habituales.",
      href: "/renovacion-de-receta",
    },
    {
      title: "Consultorio",
      text: "Información sobre atención presencial próximamente.",
      href: "/consultorio",
    },
  ].map((service) => (

    <Link
      key={service.title}
      href={service.href}
      className="
      group
      rounded-3xl
      border
      border-neutral-200
      bg-white
      p-6
      transition
      duration-300
      hover:-translate-y-1
      hover:border-neutral-400
      hover:shadow-md
      "
    >

      <h2 className="text-xl font-semibold text-neutral-900">
        {service.title}
      </h2>


      <div className="mt-4 h-px w-8 bg-neutral-300 transition-all duration-300 group-hover:w-12"></div>


      <p className="mt-5 text-sm leading-6 text-neutral-500">
        {service.text}
      </p>


    </Link>

  ))}


</section>
