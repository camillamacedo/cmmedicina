import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Médico Virtual en Argentina",
  description:
    "Consulta con un médico virtual mediante telemedicina. Atención médica online, certificados médicos, recetas electrónicas y seguimiento clínico para pacientes de toda Argentina.",

  keywords: [
    "médico virtual",
    "consulta online",
    "telemedicina",
    "teleconsulta",
    "médico online",
    "Argentina",
  ],

  alternates: {
    canonical: "https://cmmedicina.com/medico-virtual",
  },
};

export default function MedicoVirtual() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24">

      <h1 className="text-5xl font-bold">
        Médico Virtual en Argentina
      </h1>

      <p className="mt-8 text-lg leading-8 text-gray-600">
        La consulta con un médico virtual permite recibir atención médica
        profesional sin salir de casa. Mediante telemedicina es posible
        realizar consultas clínicas, seguimiento de enfermedades, solicitar
        estudios, renovar recetas médicas y evaluar la necesidad de emitir
        certificados médicos cuando corresponde.
      </p>

      <h2 className="mt-12 text-3xl font-semibold">
        ¿Qué puede resolver un médico virtual?
      </h2>

      <ul className="mt-6 space-y-3 text-gray-600">
        <li>✔ Consulta clínica general</li>
        <li>✔ Telemedicina</li>
        <li>✔ Certificados médicos</li>
        <li>✔ Renovación de recetas</li>
        <li>✔ Solicitud de estudios</li>
        <li>✔ Seguimiento de enfermedades crónicas</li>
        <li>✔ Orientación médica personalizada</li>
      </ul>

      <h2 className="mt-12 text-3xl font-semibold">
        Atención médica en todo el territorio nacional
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        CM Medicina brinda atención médica online para pacientes de toda
        Argentina mediante teleconsulta segura, profesional y basada en
        evidencia científica.
      </p>

    </main>
  );
}