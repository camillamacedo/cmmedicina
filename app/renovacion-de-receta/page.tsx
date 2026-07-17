import Link from "next/link";

export default function RenovacionReceta() {
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
              Renovación de Receta Médica
            </h1>
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-600">
            Renovación de recetas médicas de forma práctica y segura,
            mediante consulta online con evaluación profesional.
          </p>

        </section>


        {/* Conteúdo */}
        <section className="mt-16 grid gap-8 md:grid-cols-3">


          <div className="rounded-2xl bg-gray-50 p-8 shadow-sm">

            <h2 className="mb-4 text-xl font-semibold">
              ¿Cómo funciona?
            </h2>

            <p className="leading-relaxed text-gray-600">
              Durante la consulta médica online se revisará el tratamiento
              actual, antecedentes y necesidad de continuidad del medicamento.
            </p>

          </div>


          <div className="rounded-2xl bg-gray-50 p-8 shadow-sm">

            <h2 className="mb-4 text-xl font-semibold">
              Importante
            </h2>

            <p className="leading-relaxed text-gray-600">
              La renovación está sujeta a evaluación médica.
              No todos los medicamentos pueden ser renovados sin una nueva
              valoración clínica.
            </p>

          </div>


          <div className="rounded-2xl bg-gray-50 p-8 shadow-sm">

            <h2 className="mb-4 text-xl font-semibold">
              Atención online
            </h2>

            <p className="leading-relaxed text-gray-600">
              Recibí atención médica desde cualquier lugar del territorio
              nacional, con comodidad y seguridad.
            </p>

          </div>


        </section>


        {/* Botón */}
        <section className="mt-16 text-center">

          <Link
            href="/reservar"
            className="inline-flex rounded-full bg-black px-10 py-4 text-lg font-semibold text-white transition hover:bg-gray-800"
          >
            Solicitar renovación
          </Link>

        </section>


      </div>

    </main>
  );
}