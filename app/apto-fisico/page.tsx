import Link from "next/link";

export default function AptoFisico() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">

      <div className="mx-auto max-w-6xl px-6 py-20">

        {/* Volver */}

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
              Apto Físico
            </h1>

          </div>


          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
            Evaluación médica online para la realización de aptos físicos,
            con valoración profesional y emisión del certificado correspondiente.
          </p>

        </section>


        {/* CARDS */}

        <section className="mt-16 grid gap-6 md:grid-cols-3">


          <div className="rounded-3xl bg-gray-100 p-6 text-center">

            <h2 className="text-xl font-semibold text-gray-900">
              Evaluación médica
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Análisis del estado general de salud, antecedentes y condiciones
              necesarias según la actividad solicitada.
            </p>

          </div>


          <div className="rounded-3xl bg-gray-100 p-6 text-center">

            <h2 className="text-xl font-semibold text-gray-900">
              ¿Para qué sirve?
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Ideal para actividades deportivas, laborales, educativas u otras
              situaciones que requieran certificación médica.
            </p>

          </div>


          <div className="rounded-3xl bg-gray-100 p-6 text-center">

            <h2 className="text-xl font-semibold text-gray-900">
              Atención online
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Realizá tu consulta desde cualquier lugar del territorio nacional
              de manera cómoda y segura.
            </p>

          </div>


        </section>


        {/* CTA */}

        <section className="mx-auto mt-16 max-w-4xl rounded-3xl bg-black px-8 py-10 text-center text-white">

          <h2 className="text-3xl font-bold">
            ¿Necesitás un apto físico?
          </h2>


          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/80">
            Reservá tu consulta médica online y realizá tu evaluación de forma
            rápida, segura y profesional.
          </p>


          <Link
            href="/reservar"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-black transition hover:bg-gray-200"
          >
            Solicitar apto físico
          </Link>

        </section>


      </div>

    </main>
  );
}
