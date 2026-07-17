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
  href="/servicios/apto-fisico"
  className="group rounded-3xl bg-black p-8 text-white transition hover:scale-[1.02]"
>
  <h2 className="text-2xl font-semibold">
    Apto Físico
  </h2>

  <p className="mt-4 text-gray-300">
    Evaluación médica para aptos deportivos, laborales y personales.
  </p>

  <div className="mt-6 text-sm font-medium text-white">
    Solicitar atención →
  </div>
</Link>

          {/* Renovación de Recetas */}

          <Link
  href="/renovacion-de-receta"
  className="group rounded-3xl bg-black p-8 text-white transition hover:scale-[1.02]"
>
  <h2 className="text-2xl font-semibold">
    Renovación de Receta Médica
  </h2>

  <p className="mt-4 text-gray-300">
    Renovación de tratamientos habituales mediante evaluación médica online.
    Atención segura y personalizada.
  </p>

  
</Link>

        </section>

        {/* CTA */}

        <section className="mt-20 rounded-3xl bg-gray-50 p-12 text-center">

          <h2 className="text-3xl font-semibold text-gray-900">
            ¿Necesitás atención médica?
          </h2>

          <p className="mt-4 text-gray-600">
            Reservá tu consulta de manera rápida, segura y sencilla.
          </p>

          <Link
            href="/reservar"
            className="mt-8 inline-block rounded-full bg-black px-10 py-4 font-semibold text-white transition hover:bg-gray-800"
          >
            Reservar turno
          </Link>

        </section>

      </div>
    </main>
  );
}