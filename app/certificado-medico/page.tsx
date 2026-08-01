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

            <span className="rounded-full bg-gray-200 px-4 py-2 text-sm font-medium">
              Documentación médica profesional
            </span>

            <h2 className="mt-6 text-4xl font-bold">
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

          <h2 className="text-4xl font-bold">
            ¿En qué situaciones puede emitirse un certificado?
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            <div className="rounded-2xl bg-gray-100 p-6">
              ✔ Ausencias laborales.
            </div>

            <div className="rounded-2xl bg-gray-100 p-6">
              ✔ Justificación escolar o universitaria.
            </div>

            <div className="rounded-2xl bg-gray-100 p-6">
              ✔ Reintegro a actividades.
            </div>

            <div className="rounded-2xl bg-gray-100 p-6">
              ✔ Constancias de atención médica.
            </div>

            <div className="rounded-2xl bg-gray-100 p-6">
              ✔ Seguimiento clínico.
            </div>

            <div className="rounded-2xl bg-gray-100 p-6">
              ✔ Otras situaciones evaluadas individualmente.
            </div>

          </div>

        </section>
                {/* IMPORTANTE */}

        <section className="mt-24 rounded-3xl bg-black px-10 py-12 text-white">

          <h2 className="text-3xl font-bold">
            Información importante
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            La finalidad de la consulta médica es evaluar el estado de salud del
            paciente. La emisión de un certificado médico depende exclusivamente
            del criterio profesional y de los hallazgos obtenidos durante la
            evaluación clínica.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            No es posible garantizar la emisión de certificados antes de la
            consulta, ni emitir documentación sin una valoración médica
            individual. Cada caso es analizado de forma ética, responsable y
            conforme a la normativa vigente.
          </p>

        </section>

        {/* DIFERENCIALES */}

        <section className="mt-24">

          <h2 className="text-center text-4xl font-bold">
            ¿Por qué elegir CM Medicina?
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-2">

            <div className="rounded-3xl bg-gray-100 p-8">
              <h3 className="text-2xl font-semibold">
                Atención profesional
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                Cada consulta es realizada por una médica matriculada,
                priorizando una evaluación clínica completa, responsable y
                personalizada.
              </p>
            </div>

            <div className="rounded-3xl bg-gray-100 p-8">
              <h3 className="text-2xl font-semibold">
                Documentación segura
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                Los certificados son confeccionados mediante sistemas que
                cumplen con los requisitos establecidos para la práctica de la
                telemedicina en Argentina, garantizando una adecuada
                documentación del acto médico.
              </p>
            </div>

            <div className="rounded-3xl bg-gray-100 p-8">
              <h3 className="text-2xl font-semibold">
                Entrega digital
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                Cuando corresponde su emisión, el certificado es enviado en
                formato digital para que puedas presentarlo de forma rápida y
                segura.
              </p>
            </div>

            <div className="rounded-3xl bg-gray-100 p-8">
              <h3 className="text-2xl font-semibold">
                Atención en toda Argentina
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                Brindamos consultas médicas online para pacientes de todo el
                territorio nacional, con la misma seriedad y compromiso que una
                consulta presencial cuando la telemedicina resulta apropiada.
              </p>
            </div>

          </div>

        </section>

        {/* FAQ */}

        <section className="mt-24">

          <h2 className="text-4xl font-bold">
            Preguntas frecuentes
          </h2>

          <div className="mt-10 space-y-8">

            <div className="rounded-3xl bg-gray-100 p-8">

              <h3 className="text-2xl font-semibold">
                ¿El certificado tiene validez?
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                Sí. Los certificados son emitidos por una médica matriculada
                luego de una evaluación clínica y contienen la información
                profesional correspondiente.
              </p>

            </div>

            <div className="rounded-3xl bg-gray-100 p-8">

              <h3 className="text-2xl font-semibold">
                ¿Siempre recibiré un certificado?
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                No. La emisión depende exclusivamente del criterio médico luego
                de la consulta y de la existencia de una indicación clínica.
              </p>

            </div>

            <div className="rounded-3xl bg-gray-100 p-8">

              <h3 className="text-2xl font-semibold">
                ¿Cuándo recibiré el certificado?
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                Cuando corresponde su emisión, generalmente se entrega al
                finalizar la consulta o dentro de un plazo breve.
              </p>

            </div>

            <div className="rounded-3xl bg-gray-100 p-8">

              <h3 className="text-2xl font-semibold">
                ¿Necesito una consulta médica?
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                Sí. Todo certificado requiere una evaluación médica individual.
                No emitimos certificados sin consulta previa.
              </p>

            </div>

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
