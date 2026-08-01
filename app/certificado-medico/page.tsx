import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Certificados Médicos Online | CM Medicina",

  description:
    "Consulta médica online para evaluación y emisión de certificados médicos cuando exista indicación profesional. Atención por telemedicina en toda Argentina.",

  keywords: [
    "certificado médico online",
    "certificado médico",
    "certificado laboral",
    "justificativo médico",
    "telemedicina argentina",
    "consulta médica online",
    "médica online",
    "CM Medicina",
  ],

  alternates: {
    canonical: "https://cmmedicina.com/certificados-medicos",
  },
};

export default function CertificadosMedicos() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">

      <div className="mx-auto max-w-6xl px-6 py-20">

        <Link
          href="/servicios"
          className="text-gray-500 transition hover:text-black"
        >
          ← Volver a servicios
        </Link>

        {/* HERO */}

        <section className="mt-10 rounded-[32px] bg-black px-10 py-14 text-white">

          <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
            Telemedicina · Toda Argentina
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight">
            Certificados Médicos Online
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            En CM Medicina realizamos consultas médicas por telemedicina para
            evaluar el estado de salud del paciente. Cuando existe indicación
            médica, los certificados pueden ser emitidos de forma digital,
            respetando los criterios clínicos, éticos y legales vigentes en
            Argentina.
          </p>

          <Link
            href="/reservar"
            className="mt-10 inline-block rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:bg-gray-200"
          >
            Reservar consulta
          </Link>

        </section>

       {/* COMO FUNCIONA */}

<section className="mt-24">

  <h2 className="text-center text-4xl font-bold text-black">
    ¿Cómo funciona?
  </h2>

  <p className="mx-auto mt-5 max-w-3xl text-center text-lg leading-8 text-gray-600">
    El proceso es simple, seguro y completamente online.
  </p>

  <div className="mt-12 grid gap-6 md:grid-cols-3">

    <div className="rounded-3xl bg-gray-100 p-6">

      <div className="flex items-center justify-center gap-3">

        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
          1
        </div>

        <h3 className="text-xl font-semibold text-gray-900">
          Reservá tu consulta
        </h3>

      </div>

      <p className="mt-4 text-center text-sm leading-6 text-gray-600">
        Elegí el día y horario que mejor se adapte a vos mediante nuestro
        sistema de turnos online.
      </p>

    </div>


    <div className="rounded-3xl bg-gray-100 p-6">

      <div className="flex items-center justify-center gap-3">

        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
          2
        </div>

        <h3 className="text-xl font-semibold text-gray-900">
          Evaluación médica
        </h3>

      </div>

      <p className="mt-4 text-center text-sm leading-6 text-gray-600">
        Durante la consulta se realiza una entrevista clínica completa,
        valorando antecedentes, síntomas y el estado general del paciente.
      </p>

    </div>


    <div className="rounded-3xl bg-gray-100 p-6">

      <div className="flex items-center justify-center gap-3">

        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
          3
        </div>

        <h3 className="text-xl font-semibold text-gray-900">
          Emisión del certificado
        </h3>

      </div>

      <p className="mt-4 text-center text-sm leading-6 text-gray-600">
        Cuando la evaluación médica lo justifica, el certificado es emitido
        digitalmente y enviado al paciente.
      </p>

    </div>

  </div>

</section>
        {/* CERTIFICADOS */}

        <section className="mt-24 grid gap-14 lg:grid-cols-2 lg:items-center">

          <div>

            <span className="rounded-full bg-gray-200 px-4 py-2 text-sm font-medium text-black ">
              Documentación médica profesional
            </span>

            <h2 className="mt-6 text-4xl font-bold text-black">
              Certificado Médico Digital | CABA y Todo Territorio Nacional 
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              Todos los certificados son emitidos exclusivamente luego de una
              evaluación médica individual, respetando los principios éticos,
              científicos y legales que rigen el ejercicio profesional.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Los certificados son emitidos por una médica matriculada y
              confeccionados mediante sistemas que cumplen con los requisitos
              establecidos por el <strong>Ministerio de Salud de la Nación</strong>
              para la práctica de la telemedicina, cuando corresponde,
              garantizando la adecuada documentación del acto médico.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Cada documento incluye los datos profesionales correspondientes,
              la fecha de emisión y la información necesaria de acuerdo con la
              evaluación clínica realizada durante la consulta.
            </p>

          </div>

          <div className="rounded-3xl border-2 border-dashed border-gray-300 bg-gray-100 p-8">

            <div className="flex aspect-[4/5] items-center justify-center rounded-2xl bg-white">

              <div className="text-center">

                <div className="text-lg font-semibold text-gray-700">
                  Modelo de certificado
                </div>

                <p className="mt-2 text-gray-400">
                  Agregar imagen aquí
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* TIPOS */}

<section className="mt-24">

  <h2 className="text-center text-4xl font-bold text-black">
    ¿En qué situaciones puede emitirse un certificado?
  </h2>

  <div className="mt-10 grid gap-5 md:grid-cols-3">

    <div className="rounded-3xl bg-gray-100 p-5 text-center text-gray-700">
      ✔ Ausencias laborales.
    </div>

    <div className="rounded-3xl bg-gray-100 p-5 text-center text-gray-700">
      ✔ Justificación escolar o universitaria.
    </div>

    <div className="rounded-3xl bg-gray-100 p-5 text-center text-gray-700">
      ✔ Reintegro a actividades.
    </div>

    <div className="rounded-3xl bg-gray-100 p-5 text-center text-gray-700">
      ✔ Constancias de atención médica.
    </div>

    <div className="rounded-3xl bg-gray-100 p-5 text-center text-gray-700">
      ✔ Seguimiento clínico.
    </div>

    <div className="rounded-3xl bg-gray-100 p-5 text-center text-gray-700">
      ✔ Otras situaciones.
    </div>

  </div>

</section>
                
        {/* DIFERENCIALES */}

<section className="mt-24">

  <h2 className="text-center text-4xl font-bold text-black">
    ¿Por qué elegir CM Medicina?
  </h2>

  <div className="mt-12 grid gap-6 md:grid-cols-2">

    <div className="rounded-3xl bg-gray-100 p-6 text-center">

      <h3 className="text-xl font-semibold text-gray-900">
        Atención profesional
      </h3>

      <p className="mt-3 text-sm leading-6 text-gray-600">
        Cada consulta es realizada por una médica matriculada, priorizando una
        evaluación clínica completa, responsable y personalizada.
      </p>

    </div>


    <div className="rounded-3xl bg-gray-100 p-6 text-center">

      <h3 className="text-xl font-semibold text-gray-900">
        Documentación segura
      </h3>

      <p className="mt-3 text-sm leading-6 text-gray-600">
        Los certificados son confeccionados mediante sistemas adecuados para la
        práctica de la telemedicina en Argentina.
      </p>

    </div>


    <div className="rounded-3xl bg-gray-100 p-6 text-center">

      <h3 className="text-xl font-semibold text-gray-900">
        Entrega digital
      </h3>

      <p className="mt-3 text-sm leading-6 text-gray-600">
        Cuando corresponde su emisión, el certificado es enviado en formato
        digital para una presentación rápida y segura.
      </p>

    </div>


    <div className="rounded-3xl bg-gray-100 p-6 text-center">

      <h3 className="text-xl font-semibold text-gray-900">
        Atención en toda Argentina
      </h3>

      <p className="mt-3 text-sm leading-6 text-gray-600">
        Brindamos consultas médicas online para pacientes de todo el territorio
        nacional, con compromiso y calidad profesional.
      </p>

    </div>

  </div>

</section>
        
        {/* FAQ */}

<section className="mt-24">

  <h2 className="text-center text-4xl font-bold text-black">
    Preguntas frecuentes
  </h2>

  <div className="mt-10 grid gap-5 md:grid-cols-2">


    <details className="group rounded-3xl bg-gray-100 p-5">

      <summary className="flex cursor-pointer list-none items-center justify-between text-center text-lg font-semibold text-gray-900">

        <span className="mx-auto">
          ¿El certificado tiene validez?
        </span>

        <span className="ml-3 text-xl transition group-open:rotate-45">
          +
        </span>

      </summary>

      <p className="mt-4 text-center text-sm leading-6 text-gray-600">
        Sí. Los certificados son emitidos por una médica matriculada luego de
        una evaluación clínica y contienen la información profesional
        correspondiente.
      </p>

    </details>


    <details className="group rounded-3xl bg-gray-100 p-5">

      <summary className="flex cursor-pointer list-none items-center justify-between text-center text-lg font-semibold text-gray-900">

        <span className="mx-auto">
          ¿Siempre recibiré un certificado?
        </span>

        <span className="ml-3 text-xl transition group-open:rotate-45">
          +
        </span>

      </summary>

      <p className="mt-4 text-center text-sm leading-6 text-gray-600">
        No. La emisión depende exclusivamente del criterio médico luego de la
        consulta y de la existencia de una indicación clínica.
      </p>

    </details>


    <details className="group rounded-3xl bg-gray-100 p-5">

      <summary className="flex cursor-pointer list-none items-center justify-between text-center text-lg font-semibold text-gray-900">

        <span className="mx-auto">
          ¿Cuándo recibiré el certificado?
        </span>

        <span className="ml-3 text-xl transition group-open:rotate-45">
          +
        </span>

      </summary>

      <p className="mt-4 text-center text-sm leading-6 text-gray-600">
        Cuando corresponde su emisión, generalmente se entrega al finalizar la
        consulta o dentro de un plazo breve.
      </p>

    </details>


    <details className="group rounded-3xl bg-gray-100 p-5">

      <summary className="flex cursor-pointer list-none items-center justify-between text-center text-lg font-semibold text-gray-900">

        <span className="mx-auto">
          ¿Necesito una consulta médica?
        </span>

        <span className="ml-3 text-xl transition group-open:rotate-45">
          +
        </span>

      </summary>

      <p className="mt-4 text-center text-sm leading-6 text-gray-600">
        Sí. Todo certificado requiere una evaluación médica individual. No
        emitimos certificados sin consulta previa.
      </p>

    </details>


  </div>

</section>
        {/* CTA */}

        <section className="mt-24 rounded-3xl bg-gray-100 px-10 py-14 text-center">

          <h2 className="text-4xl font-bold">
            ¿Necesitás una consulta médica?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Reservá tu turno y recibí atención médica online de forma rápida,
            segura y profesional desde cualquier lugar de Argentina.
          </p>

          <Link
            href="/reservar"
            className="mt-10 inline-block rounded-full bg-black px-8 py-4 font-semibold text-white transition hover:bg-gray-800"
          >
            Reservar turno
          </Link>

        </section>

      </div>

    </main>
  );
}
