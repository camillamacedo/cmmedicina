import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Médico de Cabecera Online | CM Medicina",

  description:
    "Contá con un médico de cabecera para el seguimiento integral de tu salud. Atención médica online personalizada para pacientes de toda Argentina.",

  keywords: [
    "médico de cabecera",
    "médico clínico",
    "medicina clínica",
    "consulta médica",
    "seguimiento médico",
    "médico online",
    "telemedicina",
    "Argentina",
  ],

  alternates: {
    canonical: "https://cmmedicina.com/medico-de-cabecera",
  },
};


export default function MedicoCabecera() {
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
              Médico de Cabecera Online
            </h1>

          </div>


          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
            Contá con un profesional que conoce tu historia clínica, realiza el
            seguimiento de tu salud y te acompaña en la prevención, diagnóstico
            y tratamiento de distintas enfermedades.
          </p>


        </section>



        {/* ¿QUÉ ES? */}


        <section className="mt-20">


          <h2 className="text-center text-4xl font-bold text-black">
            ¿Qué hace un médico de cabecera?
          </h2>


          <div className="mx-auto mt-8 max-w-4xl rounded-3xl bg-gray-100 p-6 text-center">


            <p className="text-sm leading-7 text-gray-600">
              El médico de cabecera es el primer profesional al que podés acudir
              ante un problema de salud. Evalúa cada situación de manera
              integral, coordina estudios cuando son necesarios y realiza el
              seguimiento de enfermedades agudas y crónicas.
            </p>


          </div>


        </section>
                {/* SERVICIOS */}

        <section className="mt-20">


          <h2 className="text-center text-4xl font-bold text-black">
            ¿Cómo puede ayudarte?
          </h2>


          <div className="mt-10 grid gap-5 md:grid-cols-3">


            <div className="rounded-3xl bg-gray-100 p-5 text-center">

              <h3 className="text-lg font-semibold text-gray-900">
                Medicina Clínica
              </h3>

            </div>


            <div className="rounded-3xl bg-gray-100 p-5 text-center">

              <h3 className="text-lg font-semibold text-gray-900">
                Control de hipertensión arterial
              </h3>

            </div>


            <div className="rounded-3xl bg-gray-100 p-5 text-center">

              <h3 className="text-lg font-semibold text-gray-900">
                Control de diabetes
              </h3>

            </div>


            <div className="rounded-3xl bg-gray-100 p-5 text-center">

              <h3 className="text-lg font-semibold text-gray-900">
                Evaluación de síntomas frecuentes
              </h3>

            </div>


            <div className="rounded-3xl bg-gray-100 p-5 text-center">

              <h3 className="text-lg font-semibold text-gray-900">
                Solicitud de estudios
              </h3>

            </div>


            <div className="rounded-3xl bg-gray-100 p-5 text-center">

              <h3 className="text-lg font-semibold text-gray-900">
                Derivación a especialistas
              </h3>

            </div>


          </div>


        </section>



        {/* BENEFICIOS */}


        <section className="mt-20">


          <h2 className="text-center text-4xl font-bold text-black">
            Beneficios de tener un médico de cabecera
          </h2>


          <div className="mt-10 grid gap-5 md:grid-cols-3">


            <div className="rounded-3xl bg-gray-100 p-5 text-center text-gray-700">
              Seguimiento continuo de tu salud.
            </div>


            <div className="rounded-3xl bg-gray-100 p-5 text-center text-gray-700">
              Prevención de enfermedades.
            </div>


            <div className="rounded-3xl bg-gray-100 p-5 text-center text-gray-700">
              Control de enfermedades crónicas.
            </div>


            <div className="rounded-3xl bg-gray-100 p-5 text-center text-gray-700">
              Atención personalizada.
            </div>


            <div className="rounded-3xl bg-gray-100 p-5 text-center text-gray-700">
              Mayor conocimiento de tus antecedentes médicos.
            </div>


            <div className="rounded-3xl bg-gray-100 p-5 text-center text-gray-700">
              Acompañamiento a largo plazo.
            </div>


          </div>


        </section>
                {/* TELEMEDICINA */}

        <section className="mt-20">


          <h2 className="text-center text-4xl font-bold text-black">
            Médico de cabecera mediante telemedicina
          </h2>


          <div className="mx-auto mt-8 max-w-4xl rounded-3xl bg-gray-100 p-6 text-center">


            <p className="text-sm leading-7 text-gray-600">
              Gracias a la telemedicina es posible realizar controles médicos,
              resolver dudas, hacer seguimiento clínico y recibir orientación
              profesional desde cualquier lugar de Argentina, con la comodidad
              de una consulta online.
            </p>


          </div>


        </section>



        {/* CTA */}


        <section className="mx-auto mt-20 max-w-4xl rounded-3xl bg-black px-8 py-10 text-center text-white">


          <h2 className="text-3xl font-bold">
            Cuidá tu salud con un seguimiento profesional
          </h2>


          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/80">
            La atención continua permite conocer mejor cada paciente y ofrecer
            un cuidado integral basado en confianza, prevención y seguimiento.
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
