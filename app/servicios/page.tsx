import Link from "next/link";

export default function Servicios() {
  return (
    <main className="min-h-screen bg-white">

      <div className="mx-auto max-w-7xl px-6 py-20">


        {/* VOLVER */}

        <Link
          href="/"
          className="text-sm text-neutral-400 transition hover:text-black"
        >
          ← Volver al inicio
        </Link>


        {/* HERO */}

        <section className="mt-20 max-w-4xl">

          <span className="text-sm uppercase tracking-[0.30em] text-neutral-400">
            Servicios médicos
          </span>


          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-neutral-900">
            Atención médica personalizada,
            estés donde estés.
          </h1>


          <p className="mt-8 text-lg leading-8 text-neutral-500">

            Servicios de medicina clínica mediante telemedicina
            para pacientes de toda Argentina, con atención segura,
            profesional y basada en evidencia científica.

          </p>

        </section>



        {/* SERVICIOS */}

        <section className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">


          {[
            {
              title: "Médico Virtual",
              text: "Consultas médicas online con atención personalizada, segura y profesional.",
              href: "/medico-virtual",
            },
            {
              title: "Médico de Cabecera",
              text: "Seguimiento integral de tu salud, prevención y acompañamiento continuo.",
              href: "/medico-de-cabecera",
            },
            {
              title: "Consulta Médica",
              text: "Evaluación clínica, orientación médica y seguimiento personalizado.",
              href: "/consulta-medica",
            },
            {
              title: "Certificados Médicos",
              text: "Evaluación profesional para emisión de certificados cuando corresponda.",
              href: "/certificado-medico",
            },
            {
              title: "Solicitud de Estudios",
              text: "Indicación de análisis, imágenes y estudios complementarios según evaluación médica.",
              href: "/solicitud-examen",
            },
            {
              title: "Apto Físico",
              text: "Evaluación médica para actividades deportivas, laborales y personales.",
              href: "/apto-fisico",
            },
            {
              title: "Renovación de Recetas",
              text: "Seguimiento de tratamientos habituales mediante evaluación médica.",
              href: "/renovacion-de-receta",
            },
            {
              title: "Consultorio",
              text: "Próximamente información sobre atención presencial.",
              href: "/consultorio",
            },
          ].map((service) => (

            <Link
              key={service.title}
              href={service.href}
              className="
              group
              rounded-[28px]
              border
              border-neutral-200
              bg-white
              p-8
              transition
              duration-300
              hover:-translate-y-1
              hover:border-neutral-400
              hover:shadow-lg
              "
            >

              <span className="text-xs uppercase tracking-[0.25em] text-neutral-400">
                CM Medicina
              </span>


              <h2 className="mt-6 text-2xl font-semibold text-neutral-900">
                {service.title}
              </h2>


              <div className="mt-4 h-px w-10 bg-neutral-300 transition group-hover:w-16"></div>


              <p className="mt-6 leading-7 text-neutral-500">
                {service.text}
              </p>


            </Link>

          ))}


        </section>



        {/* CTA */}

        <section className="mt-20 rounded-[36px] bg-neutral-900 px-8 py-14 text-center text-white">

          <h2 className="text-3xl font-semibold">
            ¿Necesitás una consulta médica?
          </h2>


          <p className="mt-4 text-neutral-300">
            Reservá tu turno online de manera rápida y segura.
          </p>


          <Link
            href="/reservar"
            className="
            mt-8
            inline-flex
            rounded-full
            bg-white
            px-10
            py-4
            font-medium
            text-black
            transition
            hover:scale-105
            "
          >
            Reservar turno
          </Link>


        </section>


      </div>

    </main>
  );
}
