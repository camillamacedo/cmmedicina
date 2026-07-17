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
    <main className="min-h-screen bg-white">

      <div className="mx-auto max-w-5xl px-6 py-20">

        <Link
          href="/servicios"
          className="text-gray-500 transition hover:text-black"
        >
          ← Volver a servicios
        </Link>

        {/* HERO */}

        <section className="mt-12">

          <h1 className="text-5xl font-bold text-gray-900">
            Médico de Cabecera Online
          </h1>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            Tener un médico de cabecera significa contar con un profesional que
            conoce tu historia clínica, realiza el seguimiento de tu salud y te
            acompaña en la prevención, el diagnóstico y el tratamiento de
            distintas enfermedades.
          </p>

        </section>

        {/* ¿QUÉ ES? */}

        <section className="mt-20">

          <h2 className="text-3xl font-semibold">
            ¿Qué hace un médico de cabecera?
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            El médico de cabecera es el primer profesional al que podés acudir
            ante un problema de salud. Evalúa cada situación de manera integral,
            coordina estudios cuando son necesarios y realiza el seguimiento de
            enfermedades agudas y crónicas.
          </p>

        </section>

        {/* SERVICIOS */}

        <section className="mt-20">

          <h2 className="text-3xl font-semibold">
            ¿Cómo puede ayudarte?
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            <div className="rounded-2xl border p-6">
              ✔ Consultas de Medicina Clínica.
            </div>

            <div className="rounded-2xl border p-6">
              ✔ Seguimiento de hipertensión arterial.
            </div>

            <div className="rounded-2xl border p-6">
              ✔ Control de diabetes.
            </div>

            <div className="rounded-2xl border p-6">
              ✔ Evaluación de síntomas frecuentes.
            </div>

            <div className="rounded-2xl border p-6">
              ✔ Solicitud de estudios.
            </div>

            <div className="rounded-2xl border p-6">
              ✔ Derivación a especialistas cuando corresponda.
            </div>

          </div>

        </section>

        {/* BENEFICIOS */}

        <section className="mt-20">

          <h2 className="text-3xl font-semibold">
            Beneficios de tener un médico de cabecera
          </h2>

          <div className="mt-8 space-y-5 text-lg text-gray-600">

            <p>✔ Seguimiento continuo de tu salud.</p>

            <p>✔ Prevención de enfermedades.</p>

            <p>✔ Control de enfermedades crónicas.</p>

            <p>✔ Atención personalizada.</p>

            <p>✔ Mayor conocimiento de tus antecedentes médicos.</p>

            <p>✔ Acompañamiento a largo plazo.</p>

          </div>

        </section>

        {/* TELEMEDICINA */}

        <section className="mt-20">

          <h2 className="text-3xl font-semibold">
            Médico de cabecera mediante telemedicina
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Gracias a la telemedicina es posible realizar controles médicos,
            resolver dudas, hacer seguimiento clínico y recibir orientación
            profesional desde cualquier lugar de Argentina, con la comodidad de
            una consulta online.
          </p>

        </section>

        {/* CTA */}

        <section className="mt-24 rounded-3xl bg-black p-12 text-center text-white">

          <h2 className="text-4xl font-bold">
            Cuidá tu salud con un seguimiento profesional
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
            La atención continua permite conocer mejor cada paciente y ofrecer
            un cuidado integral basado en confianza, prevención y seguimiento.
          </p>

          <Link
            href="/reservar"
            className="mt-10 inline-block rounded-full bg-white px-10 py-4 font-semibold text-black transition hover:bg-gray-200"
          >
            Reservar turno
          </Link>

        </section>

      </div>

    </main>
  );
}