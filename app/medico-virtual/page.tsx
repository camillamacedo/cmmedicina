import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Médico Virtual y Telemedicina en Argentina | CM Medicina",

  description:
    "Consultá con un médico virtual mediante telemedicina desde cualquier lugar de Argentina. Atención médica online personalizada con la Dra. Camilla Macedo.",

  keywords: [
    "médico virtual",
    "telemedicina",
    "consulta médica online",
    "médico online",
    "teleconsulta",
    "consulta virtual",
    "medicina online",
    "Argentina",
  ],

  alternates: {
    canonical: "https://cmmedicina.com/medico-virtual",
  },
};


export default function MedicoVirtual() {
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

        <section className="mt-10 text-center">

          <div className="mx-auto inline-block rounded-full bg-black px-8 py-3">

            <h1 className="text-3xl font-bold text-white">
              Médico Virtual y Telemedicina
            </h1>

          </div>


          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
            Accedé a una consulta médica online desde cualquier lugar de
            Argentina mediante telemedicina. Atención personalizada, segura y
            basada en evidencia, priorizando la calidad asistencial y el
            bienestar de cada paciente.
          </p>

        </section>


        {/* ¿QUÉ ES? */}

        <section className="mt-20">

          <h2 className="text-center text-4xl font-bold text-black">
            ¿Qué es un médico virtual?
          </h2>


          <div className="mx-auto mt-8 max-w-4xl rounded-3xl bg-gray-100 p-6 text-center">

            <p className="text-sm leading-7 text-gray-600">
              Un médico virtual es un profesional que realiza consultas médicas
              mediante plataformas de telemedicina. Durante la consulta se
              evalúan síntomas, antecedentes personales, estudios
              complementarios e historia clínica para brindar orientación,
              diagnóstico y tratamiento cuando corresponda.
            </p>

          </div>

        </section>
                {/* SERVICIOS */}

        <section className="mt-20">

          <h2 className="text-center text-4xl font-bold text-black">
            ¿Qué consultas pueden realizarse?
          </h2>


          <div className="mt-10 grid gap-5 md:grid-cols-3">


            <div className="rounded-3xl bg-gray-100 p-5 text-center">

              <h3 className="text-lg font-semibold text-gray-900">
                Consulta de Medicina Clínica
              </h3>

            </div>


            <div className="rounded-3xl bg-gray-100 p-5 text-center">

              <h3 className="text-lg font-semibold text-gray-900">
                Orientación médica
              </h3>

            </div>


            <div className="rounded-3xl bg-gray-100 p-5 text-center">

              <h3 className="text-lg font-semibold text-gray-900">
                Control de enfermedades crónicas
              </h3>

            </div>


            <div className="rounded-3xl bg-gray-100 p-5 text-center">

              <h3 className="text-lg font-semibold text-gray-900">
                Renovación de recetas médicas
              </h3>

            </div>


            <div className="rounded-3xl bg-gray-100 p-5 text-center">

              <h3 className="text-lg font-semibold text-gray-900">
                Solicitud de estudios
              </h3>

            </div>


            <div className="rounded-3xl bg-gray-100 p-5 text-center">

              <h3 className="text-lg font-semibold text-gray-900">
                Certificados médicos cuando exista indicación clínica
              </h3>

            </div>


          </div>

        </section>



        {/* BENEFICIOS */}

        <section className="mt-20">


          <h2 className="text-center text-4xl font-bold text-black">
            Beneficios de la telemedicina
          </h2>


          <div className="mt-10 grid gap-5 md:grid-cols-3">


            <div className="rounded-3xl bg-gray-100 p-5 text-center text-gray-700">
              Atención desde cualquier lugar de Argentina.
            </div>


            <div className="rounded-3xl bg-gray-100 p-5 text-center text-gray-700">
              Mayor comodidad y ahorro de tiempo.
            </div>


            <div className="rounded-3xl bg-gray-100 p-5 text-center text-gray-700">
              Menor necesidad de desplazamientos.
            </div>


            <div className="rounded-3xl bg-gray-100 p-5 text-center text-gray-700">
              Seguimiento médico personalizado.
            </div>


            <div className="rounded-3xl bg-gray-100 p-5 text-center text-gray-700">
              Atención rápida y segura.
            </div>


            <div className="rounded-3xl bg-gray-100 p-5 text-center text-gray-700">
              Comunicación directa con la médica.
            </div>


          </div>


        </section>
                {/* COMO FUNCIONA */}

        <section className="mt-20">


          <h2 className="text-center text-4xl font-bold text-black">
            ¿Cómo funciona la consulta?
          </h2>


          <div className="mt-10 grid gap-5 md:grid-cols-3">


            <div className="rounded-3xl bg-gray-100 p-6 text-center">

              <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-black text-lg font-bold text-white">
                1
              </div>

              <h3 className="text-xl font-semibold text-gray-900">
                Reservá tu turno
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Elegí el día y horario disponible desde nuestra página web.
              </p>

            </div>


            <div className="rounded-3xl bg-gray-100 p-6 text-center">

              <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-black text-lg font-bold text-white">
                2
              </div>

              <h3 className="text-xl font-semibold text-gray-900">
                Confirmación
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Recibirás la confirmación de tu consulta y las indicaciones
                necesarias para la atención.
              </p>

            </div>


            <div className="rounded-3xl bg-gray-100 p-6 text-center">

              <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-black text-lg font-bold text-white">
                3
              </div>

              <h3 className="text-xl font-semibold text-gray-900">
                Videollamada
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Ingresá al enlace de la consulta y realizá tu atención médica
                online de forma segura.
              </p>

            </div>


            <div className="rounded-3xl bg-gray-100 p-6 text-center">

              <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-black text-lg font-bold text-white">
                4
              </div>

              <h3 className="text-xl font-semibold text-gray-900">
                Evaluación médica
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                La médica realiza la valoración clínica y define las indicaciones
                correspondientes.
              </p>

            </div>


            <div className="rounded-3xl bg-gray-100 p-6 text-center">

              <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-black text-lg font-bold text-white">
                5
              </div>

              <h3 className="text-xl font-semibold text-gray-900">
                Indicaciones
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Si corresponde, recibirás recetas, solicitudes de estudios o
                certificados según criterio profesional.
              </p>

            </div>


          </div>


        </section>



        {/* CTA */}


        <section className="mx-auto mt-20 max-w-4xl rounded-3xl bg-black px-8 py-10 text-center text-white">


          <h2 className="text-3xl font-bold">
            Atención médica online para toda Argentina
          </h2>


          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/80">
            Consultá con la Dra. Camilla Macedo mediante telemedicina y recibí
            una atención médica personalizada desde cualquier lugar.
          </p>


          <Link
            href="/reservar"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-black transition hover:bg-gray-200"
          >
            Reservar turno
          </Link>


        </section>


      </div>

    </main>
  );
}
        
