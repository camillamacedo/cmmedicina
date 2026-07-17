import Link from "next/link";

export default function AptoFisico() {
  return (
    <main className="min-h-screen bg-white">

      <div className="mx-auto max-w-6xl px-6 py-20">

        {/* Volver */}
        <Link
          href="/servicios"
          className="text-gray-500 transition hover:text-black"
        >
          ← Volver a servicios
        </Link>


        {/* Título */}
        <section className="mt-10 text-center">

          <div className="mx-auto inline-block rounded-full bg-black px-8 py-3">
            <h1 className="text-3xl font-bold text-white">
              Apto Físico
            </h1>
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-600">
            Evaluación médica online para la realización de aptos físicos,
            con valoración profesional y emisión del certificado correspondiente.
          </p>

        </section>


        {/* Cards */}
        <section className="mt-16 grid gap-8 md:grid-cols-3">


          <div className="rounded-2xl bg-gray-50 p-8 shadow-sm">

            <h2 className="mb-4 text-xl font-semibold">
              Evaluación médica
            </h2>

            <p className="leading-relaxed text-gray-600">
              Análisis del estado general de salud, antecedentes y condiciones
              necesarias según la actividad solicitada.
            </p>

          </div>


          <div className="rounded-2xl bg-gray-50 p-8 shadow-sm">

            <h2 className="mb-4 text-xl font-semibold">
              ¿Para qué sirve?
            </h2>

            <p className="leading-relaxed text-gray-600">
              Ideal para actividades deportivas, laborales, educativas u otras
              situaciones que requieran certificación médica.
            </p>

          </div>


          <div className="rounded-2xl bg-gray-50 p-8 shadow-sm">

            <h2 className="mb-4 text-xl font-semibold">
              Atención online
            </h2>

            <p className="leading-relaxed text-gray-600">
              Realizá tu consulta desde cualquier lugar del territorio nacional
              de manera cómoda y segura.
            </p>

          </div>


        </section>


        {/* Botón */}
        <section className="mt-16 text-center">

          <Link
            href="/reservar"
            className="inline-flex rounded-full bg-black px-10 py-4 text-lg font-semibold text-white transition hover:bg-gray-800"
          >
            Solicitar apto físico
          </Link>

        </section>


      </div>

    </main>
  );
}