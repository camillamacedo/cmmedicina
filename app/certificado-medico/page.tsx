import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Certificados Médicos Online en Argentina",

  description:
    "Obtenga certificados médicos online mediante evaluación profesional. Atención médica por telemedicina para pacientes de toda Argentina.",

  keywords: [
    "certificado médico",
    "certificado médico online",
    "certificado laboral",
    "justificativo médico",
    "ausencia laboral",
    "telemedicina",
    "médico virtual",
    "Argentina",
  ],

  alternates: {
    canonical: "https://cmmedicina.com/certificados-medicos",
  },
};

export default function CertificadosMedicos() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24">

      <Link
        href="/servicios"
        className="text-gray-500 hover:text-black transition"
      >
        ← Volver a servicios
      </Link>

      <h1 className="mt-8 text-5xl font-bold">
        Certificados Médicos Online
      </h1>

      <p className="mt-8 text-lg leading-8 text-gray-600">
        En CM Medicina realizamos consultas médicas por telemedicina para
        evaluar el estado de salud del paciente. Cuando existe indicación
        médica y se cumplen los criterios clínicos correspondientes, es
        posible emitir certificados médicos conforme a la normativa vigente.
      </p>

      <h2 className="mt-14 text-3xl font-semibold">
        ¿Qué es un certificado médico?
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        Un certificado médico es un documento emitido por un profesional de la
        salud luego de una evaluación médica. Su finalidad es dejar constancia
        del estado clínico del paciente cuando corresponde desde el punto de
        vista profesional.
      </p>

      <h2 className="mt-14 text-3xl font-semibold">
        ¿Cuándo puede ser necesario?
      </h2>

      <ul className="mt-6 space-y-4 text-lg text-gray-600">
        <li>✔ Ausencia laboral.</li>
        <li>✔ Justificación escolar o universitaria.</li>
        <li>✔ Reintegro a actividades.</li>
        <li>✔ Evaluaciones médicas específicas.</li>
        <li>✔ Seguimiento clínico.</li>
      </ul>

      <h2 className="mt-14 text-3xl font-semibold">
        Evaluación médica responsable
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        La emisión de certificados médicos siempre depende de la evaluación
        realizada durante la consulta. No es posible garantizar la emisión de
        un certificado antes de la valoración médica, ya que cada caso requiere
        un análisis individual basado en criterios clínicos y éticos.
      </p>

      <h2 className="mt-14 text-3xl font-semibold">
        Atención en toda Argentina
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        Brindamos atención médica online mediante teleconsulta para pacientes
        de todo el territorio argentino, ofreciendo un proceso seguro,
        profesional y centrado en las necesidades de cada persona.
      </p>

      <div className="mt-16 rounded-3xl bg-gray-100 p-10 text-center">

        <h2 className="text-3xl font-semibold">
          ¿Necesitás una consulta médica?
        </h2>

        <p className="mt-4 text-gray-600">
          Reservá tu turno y recibí atención médica online de forma rápida,
          segura y personalizada.
        </p>

        <Link
          href="/reservar"
          className="mt-8 inline-block rounded-full bg-black px-8 py-4 font-semibold text-white transition hover:bg-gray-800"
        >
          Reservar turno
        </Link>

      </div>

    </main>
  );
}