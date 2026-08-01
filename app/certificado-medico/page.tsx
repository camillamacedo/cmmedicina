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
    "certificado para trabajo",
    "certificado escolar",
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

          <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
            Telemedicina · Toda Argentina
          </span>

          <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-tight">
            Certificados Médicos Online
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/90">
            Realizamos consultas médicas online para evaluar tu estado de salud.
            Cuando existe indicación profesional, el certificado médico puede
            emitirse de forma digital, cumpliendo con los criterios clínicos,
            éticos y legales vigentes en Argentina.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/reservar"
              className="rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:bg-gray-200"
            >
              Reservar consulta
            </Link>

            <Link
              href="/contacto"
              className="rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              Consultar por WhatsApp
            </Link>

          </div>

        </section>

        {/* COMO FUNCIONA */}

        <section className="mt-20">

          <h2 className="text-center text-4xl font-bold">
            ¿Cómo funciona?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            Un proceso simple, rápido y seguro.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
                1
              </div>

              <h3 className="text-xl font-semibold">
                Reservá tu turno
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Elegí el día y horario que mejor se adapte a vos mediante nuestro
                sistema de reservas online.
              </p>

            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
                2
              </div>

              <h3 className="text-xl font-semibold">
                Consulta médica
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                La médica realiza una evaluación clínica completa mediante
                teleconsulta para valorar tu situación de forma individual.
              </p>

            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
                3
              </div>

              <h3 className="text-xl font-semibold">
                Emisión digital
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Si existe indicación médica, el certificado se emite digitalmente
                y se envía al paciente al finalizar la atención o dentro de un
                plazo breve.
              </p>

            </div>

          </div>

        </section>

              {/* CERTIFICADOS */}

        <section className="mt-20 grid gap-14 lg:grid-cols-2 lg:items-center">

          <div>

            <span className="rounded-full border border-gray-300 bg-gray-100 px-4 py-2 text-sm font-medium">
              Atención médica responsable
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight">
              Certificados emitidos con criterio médico
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              En CM Medicina cada certificado es emitido únicamente después de
              una consulta médica individual. Nuestro objetivo es brindar una
              evaluación seria, responsable y basada en la situación clínica de
              cada paciente.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              La documentación es confeccionada por una médica matriculada y
              contiene la información correspondiente a la consulta realizada,
              respetando la normativa vigente para la práctica de la
              telemedicina en Argentina.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Cada documento incluye fecha de emisión, identificación
              profesional y los datos necesarios según la evaluación médica
              efectuada.
            </p>

          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

            <div className="flex aspect-[4/5] items-center justify-center rounded-2xl border border-gray-200 bg-gray-50">

              <div className="max-w-xs rounded-xl bg-white p-8 shadow">

                <div className="border-b pb-3 text-center">

                  <h3 className="font-bold tracking-wide">
                    CERTIFICADO MÉDICO
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Modelo ilustrativo
                  </p>

                </div>

                <div className="mt-6 space-y-4 text-sm text-gray-500">

                  <div className="h-3 rounded bg-gray-200"></div>
                  <div className="h-3 rounded bg-gray-200"></div>
                  <div className="h-3 w-4/5 rounded bg-gray-200"></div>

                  <div className="pt-8">

                    <div className="mx-auto h-px w-36 bg-gray-400"></div>

                    <p className="mt-2 text-center text-xs">
                      Firma y sello profesional
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* TIPOS */}

        <section className="mt-20">

          <h2 className="text-4xl font-bold">
            ¿Cuándo puede emitirse un certificado médico?
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600">
            La emisión depende siempre de la evaluación médica realizada durante
            la consulta. Algunas situaciones frecuentes incluyen:
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">

            <div className="rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm">
              ✔ Ausencias laborales.
            </div>

            <div className="rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm">
              ✔ Justificación escolar o universitaria.
            </div>

            <div className="rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm">
              ✔ Constancias de atención médica.
            </div>

            <div className="rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm">
              ✔ Reintegro a actividades.
            </div>

            <div className="rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm">
              ✔ Seguimiento clínico.
            </div>

            <div className="rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm">
              ✔ Otras situaciones evaluadas individualmente.
            </div>

          </div>

        </section>

        {/* IMPORTANTE */}

        <section className="mt-20 rounded-[32px] bg-black px-10 py-12 text-white">

          <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
            Información importante
          </span>

          <h2 className="mt-6 text-3xl font-bold">
            La emisión del certificado depende de la evaluación médica
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/90">
            El objetivo principal de la consulta es evaluar tu estado de salud.
            La decisión de emitir un certificado corresponde exclusivamente al
            criterio profesional de la médica, luego de analizar los
            antecedentes, síntomas y hallazgos obtenidos durante la consulta.
          </p>

          <p className="mt-6 text-lg leading-8 text-white/90">
            No es posible garantizar la emisión de certificados antes de la
            atención médica ni emitir documentación sin una valoración clínica
            individual. Cada caso se analiza de forma ética, responsable y de
            acuerdo con la normativa vigente.
          </p>

        </section>

                {/* DIFERENCIALES */}

        <section className="mt-20">

          <h2 className="text-center text-4xl font-bold">
            ¿Por qué elegir CM Medicina?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            Atención médica online con un enfoque profesional, humano y seguro.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

              <h3 className="text-xl font-semibold">
                Médica matriculada
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Cada consulta es realizada de forma personalizada por una médica
                habilitada para ejercer en Argentina, priorizando una evaluación
                clínica completa y responsable.
              </p>

            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

              <h3 className="text-xl font-semibold">
                Atención rápida
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Accedé a una consulta médica desde cualquier lugar, sin traslados
                ni largas esperas, con turnos simples y atención online.
              </p>

            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

              <h3 className="text-xl font-semibold">
                Documentación digital
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Cuando corresponde, el certificado se entrega en formato digital,
                listo para descargar y presentar.
              </p>

            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

              <h3 className="text-xl font-semibold">
                Cobertura nacional
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Brindamos atención médica online para pacientes de toda Argentina,
                manteniendo los mismos estándares de calidad y compromiso
                profesional.
              </p>

            </div>

          </div>

        </section>

        {/* FAQ */}

        <section className="mt-20">

          <h2 className="text-4xl font-bold">
            Preguntas frecuentes
          </h2>

          <div className="mt-8 space-y-5">

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

              <h3 className="text-xl font-semibold">
                ¿El certificado tiene validez?
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Sí. Cuando existe indicación médica, el certificado es emitido
                por una médica matriculada y contiene los datos profesionales
                correspondientes.
              </p>

            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

              <h3 className="text-xl font-semibold">
                ¿Siempre recibiré un certificado?
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                No. La emisión depende exclusivamente de la evaluación clínica
                realizada durante la consulta y del criterio profesional.
              </p>

            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

              <h3 className="text-xl font-semibold">
                ¿Cuándo lo recibiré?
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                En la mayoría de los casos, cuando corresponde su emisión, el
                certificado se entrega al finalizar la consulta o dentro de un
                plazo breve.
              </p>

            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

              <h3 className="text-xl font-semibold">
                ¿Puedo solicitar un certificado sin consulta?
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                No. Todo certificado requiere una evaluación médica previa. No
                emitimos certificados sin realizar la correspondiente consulta.
              </p>

            </div>

          </div>

        </section>

        {/* CTA */}

        <section className="mt-20 rounded-[32px] bg-black px-10 py-14 text-center text-white">

          <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
            Atención médica online
          </span>

          <h2 className="mt-6 text-4xl font-bold">
            ¿Necesitás una consulta médica?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
            Reservá tu turno y recibí atención médica online de forma rápida,
            segura y profesional, desde cualquier lugar de Argentina.
          </p>

          <Link
            href="/reservar"
            className="mt-10 inline-block rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:bg-gray-200"
          >
            Reservar turno
          </Link>

        </section>

      </div>

    </main>
  );
}
