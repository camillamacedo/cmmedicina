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
            Médico Virtual y Telemedicina en Argentina
          </h1>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            Accedé a una consulta médica online desde cualquier lugar de
            Argentina mediante telemedicina. La Dra. Camilla Macedo ofrece
            atención médica personalizada, segura y basada en evidencia,
            priorizando la calidad asistencial y el bienestar de cada paciente.
          </p>

        </section>

        {/* ¿QUÉ ES? */}

        <section className="mt-20">

          <h2 className="text-3xl font-semibold">
            ¿Qué es un médico virtual?
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Un médico virtual es un profesional que realiza consultas médicas
            mediante plataformas de telemedicina. Durante la consulta se
            evalúan los síntomas, antecedentes personales, estudios
            complementarios y la historia clínica para brindar orientación,
            diagnóstico y tratamiento cuando corresponda.
          </p>

        </section>

        {/* SERVICIOS */}

        <section className="mt-20">

          <h2 className="text-3xl font-semibold">
            ¿Qué consultas pueden realizarse?
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            <div className="rounded-2xl border p-6">
              Consulta de Medicina Clínica
            </div>

            <div className="rounded-2xl border p-6">
              Orientación médica
            </div>

            <div className="rounded-2xl border p-6">
              Control de enfermedades crónicas
            </div>

            <div className="rounded-2xl border p-6">
              Renovación de recetas médicas
            </div>

            <div className="rounded-2xl border p-6">
              Solicitud de estudios
            </div>

            <div className="rounded-2xl border p-6">
              Evaluación para certificados médicos cuando exista indicación clínica
            </div>

          </div>

        </section>

        {/* BENEFICIOS */}

        <section className="mt-20">

          <h2 className="text-3xl font-semibold">
            Beneficios de la telemedicina
          </h2>

          <div className="mt-10 space-y-5 text-lg text-gray-600">

            <p>✔ Atención desde cualquier lugar de Argentina.</p>

            <p>✔ Mayor comodidad y ahorro de tiempo.</p>

            <p>✔ Menor necesidad de desplazamientos.</p>

            <p>✔ Seguimiento médico personalizado.</p>

            <p>✔ Atención rápida y segura.</p>

            <p>✔ Comunicación directa con la médica.</p>

          </div>

        </section>

        {/* COMO FUNCIONA */}

        <section className="mt-20">

          <h2 className="text-3xl font-semibold">
            ¿Cómo funciona la consulta?
          </h2>

          <div className="mt-10 space-y-6 text-lg leading-8 text-gray-600">

            <p>
              <strong>1.</strong> Reservá tu turno desde la página web.
            </p>

            <p>
              <strong>2.</strong> Recibirás la confirmación de la consulta.
            </p>

            <p>
              <strong>3.</strong> Ingresá al enlace de la videollamada en el horario acordado.
            </p>

            <p>
              <strong>4.</strong> Realizá tu consulta médica de forma segura.
            </p>

            <p>
              <strong>5.</strong> Si corresponde, recibirás indicaciones, recetas, solicitudes de estudios o certificados médicos según criterio profesional.
            </p>

          </div>

        </section>

        {/* CTA */}

        <section className="mt-24 rounded-3xl bg-black p-12 text-center text-white">

          <h2 className="text-4xl font-bold">
            Atención médica online para toda Argentina
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
            Consultá con la Dra. Camilla Macedo mediante telemedicina y
            recibí una atención médica personalizada desde cualquier lugar.
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