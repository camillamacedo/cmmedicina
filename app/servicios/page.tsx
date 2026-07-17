import Link from "next/link";

export default function Servicios() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">

        <Link
          href="/"
          className="text-gray-500 transition hover:text-black"
        >
          ← Volver al inicio
        </Link>

        {/* HERO */}

        <section className="mt-14 text-center">

          <h1 className="mt-5 text-5xl font-bold text-gray-900">
            Servicios Médicos Online
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Servicios de medicina clínica mediante telemedicina para pacientes
            de toda Argentina. Consultá con un médico virtual, obtené
            certificados médicos, renová recetas, solicitá estudios y recibí
            atención médica personalizada desde cualquier lugar del país.
          </p>

        </section>

        {/* SERVICIOS */}

        <section className="mt-16 grid gap-8 md:grid-cols-2">

          {/* Médico Virtual */}

          <Link
            href="/medico-virtual"
            className="rounded-3xl bg-black p-10 text-center text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl block"
          >
            <h2 className="relative inline-block text-2xl font-semibold">
              Médico Virtual

              <span className="absolute -bottom-3 left-1/2 h-px w-12 -translate-x-1/2 bg-gray-400"></span>
            </h2>

            <p className="mt-8 leading-7 text-gray-300">
              Consultá con un médico virtual mediante telemedicina desde
              cualquier lugar de Argentina. Atención médica segura,
              profesional y personalizada.
            </p>
          </Link>

          {/* Médico de Cabecera */}

          <Link
            href="/medico-de-cabecera"
            className="rounded-3xl bg-black p-10 text-center text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl block"
          >
            <h2 className="relative inline-block text-2xl font-semibold">
              Médico de Cabecera

              <span className="absolute -bottom-3 left-1/2 h-px w-12 -translate-x-1/2 bg-gray-400"></span>
            </h2>

            <p className="mt-8 leading-7 text-gray-300">
              Atención médica continua con seguimiento integral de tu salud,
              prevención de enfermedades, control de patologías crónicas y
              acompañamiento personalizado.
            </p>
          </Link>

          {/* Consulta Médica */}

          <Link
            href="/consulta-medica"
            className="rounded-3xl bg-black p-10 text-center text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl block"
          >
            <h2 className="relative inline-block text-2xl font-semibold">
              Consulta Médica

              <span className="absolute -bottom-3 left-1/2 h-px w-12 -translate-x-1/2 bg-gray-400"></span>
            </h2>

            <p className="mt-8 leading-7 text-gray-300">
              Evaluación clínica personalizada, orientación médica y
              seguimiento integral según las necesidades de cada paciente.
            </p>
          </Link>

          {/* Certificados Médicos */}

          <Link
            href="/certificado-medico"
            className="rounded-3xl bg-black p-10 text-center text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl block"
          >
            <h2 className="relative inline-block text-2xl font-semibold">
              Certificados Médicos

              <span className="absolute -bottom-3 left-1/2 h-px w-12 -translate-x-1/2 bg-gray-400"></span>
            </h2>

            <p className="mt-8 leading-7 text-gray-300">
              Evaluación médica profesional para la emisión de certificados
              cuando exista indicación clínica.
            </p>
          </Link>

          {/* Solicitud de Estudios */}

          {/* Solicitud de Estudios */}

<Link
  href="/solicitud-examen"
  className="rounded-3xl bg-black p-10 text-center text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl block"
>
  <h2 className="relative inline-block text-2xl font-semibold">
    Solicitud de Estudios / Examen

    <span className="absolute -bottom-3 left-1/2 h-px w-12 -translate-x-1/2 bg-gray-400"></span>
  </h2>

  <p className="mt-8 leading-7 text-gray-300">
    Solicitud de análisis de laboratorio, estudios por imágenes y otros
    estudios complementarios cuando exista indicación médica, luego de una
    evaluación clínica personalizada.
  </p>
</Link>
          {/* Apto Físico */}

<Link
  href="/apto-fisico"
  className="rounded-3xl bg-black p-10 text-center text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl block"
>
  <h2 className="relative inline-block text-2xl font-semibold">
    Apto Físico

    <span className="absolute -bottom-3 left-1/2 h-px w-12 -translate-x-1/2 bg-gray-400"></span>
  </h2>

  <p className="mt-8 leading-7 text-gray-300">
    Evaluación médica para aptos deportivos, laborales y personales,
    con valoración profesional y emisión del certificado correspondiente.
  </p>
</Link>


{/* Renovación de Receta Médica */}

<Link
  href="/renovacion-de-receta"
  className="rounded-3xl bg-black p-10 text-center text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl block"
>
  <h2 className="relative inline-block text-2xl font-semibold">
    Renovación de Receta Médica

    <span className="absolute -bottom-3 left-1/2 h-px w-12 -translate-x-1/2 bg-gray-400"></span>
  </h2>

  <p className="mt-8 leading-7 text-gray-300">
    Renovación de tratamientos habituales mediante evaluación médica online,
    con seguimiento seguro y personalizado.
  </p>
</Link>


{/* Consultorio */}

<Link
  href="/consultorio"
  className="rounded-3xl bg-black p-10 text-center text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl block"
>
  <h2 className="relative inline-block text-2xl font-semibold">
    Consultorio

    <span className="absolute -bottom-3 left-1/2 h-px w-12 -translate-x-1/2 bg-gray-400"></span>
  </h2>

  <p className="mt-8 leading-7 text-gray-300">
    Próximamente se actualizará la dirección del consultorio físico
    para atención presencial.
  </p>
</Link>

        </section>

      </div>
    </main>
  );
}