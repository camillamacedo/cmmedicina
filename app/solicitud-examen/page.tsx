import Link from "next/link";

export default function SolicitudExamen() {
  return (
    <main className="min-h-screen bg-white">

      <div className="mx-auto max-w-5xl px-6 py-20">

        <Link
          href="/servicios"
          className="text-gray-500 transition hover:text-black"
        >
          ← Volver a Servicios
        </Link>

        <section className="mt-12">

          <h1 className="text-5xl font-bold text-gray-900">
            Solicitud de Examen Médicos Online
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Durante la consulta médica online, la Dra. Camilla Macedo puede
            indicar estudios complementarios cuando exista una necesidad
            clínica. La solicitud se realiza luego de una evaluación médica
            personalizada y de acuerdo con el criterio profesional.
          </p>

        </section>

        <section className="mt-16 rounded-3xl bg-gray-50 p-10">

          <h2 className="text-3xl font-semibold">
            ¿Qué estudios pueden solicitarse?
          </h2>

          <ul className="mt-8 space-y-4 text-gray-600 leading-8">

            <li>✔️ Análisis de sangre.</li>

            <li>✔️ Estudios de laboratorio.</li>

            <li>✔️ Orina y otros estudios clínicos.</li>

            <li>✔️ Electrocardiograma.</li>

            <li>✔️ Ecografías.</li>

            <li>✔️ Radiografías.</li>

            <li>✔️ Tomografía y Resonancia (cuando corresponda).</li>

            <li>✔️ Otros estudios complementarios según evaluación médica.</li>

          </ul>

        </section>

        <section className="mt-16">

          <h2 className="text-3xl font-semibold">
            ¿Cuándo se solicita un estudio?
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">

            Cada paciente recibe una evaluación individual durante la
            teleconsulta. Los estudios únicamente son solicitados cuando
            existe una indicación médica y contribuyen al diagnóstico,
            seguimiento o prevención de enfermedades.

          </p>

        </section>

        <section className="mt-16">

          <h2 className="text-3xl font-semibold">
            Atención médica online en Argentina
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">

            La consulta virtual permite recibir orientación médica,
            solicitar estudios cuando estén indicados, renovar recetas,
            obtener certificados médicos y realizar el seguimiento de
            múltiples enfermedades desde cualquier lugar de Argentina.

          </p>

        </section>

        <section className="mt-20 rounded-3xl bg-black p-12 text-center text-white">

          <h2 className="text-4xl font-bold">

            ¿Necesitás una consulta médica?

          </h2>

          <p className="mt-4 text-gray-300">

            Reservá tu turno y recibí atención médica personalizada desde cualquier lugar de Argentina.

          </p>

          <Link
            href="/reservar"
            className="mt-8 inline-block rounded-full bg-white px-10 py-4 font-semibold text-black transition hover:bg-gray-200"
          >
            Reservar turno
          </Link>

        </section>

      </div>

    </main>
  );
}