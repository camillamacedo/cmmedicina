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

        <section className="mt-16 max-w-4xl">

          <span className="text-sm uppercase tracking-[0.30em] text-neutral-400">
            Servicios médicos
          </span>


          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
            Atención médica personalizada,
            estés donde estés.
          </h1>


          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-500">
            Servicios de medicina clínica mediante telemedicina
            para pacientes de toda Argentina, con atención segura,
            profesional y basada en evidencia científica.
          </p>


        </section>




        {/* SERVICIOS */}

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
              text: "Evaluación clínica, orientación médica y seguimiento personalizado.",
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
              text-center
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


              <div className="mx-auto mt-4 h-px w-8 bg-neutral-300 transition-all duration-300 group-hover:w-12">
              </div>


              <p className="mt-5 text-sm leading-6 text-neutral-500">
                {service.text}
              </p>


            </Link>

          ))}


        </section>




        {/* CTA FINAL */}

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
