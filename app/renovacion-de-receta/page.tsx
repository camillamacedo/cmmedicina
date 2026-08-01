import Link from "next/link";

export default function RenovacionReceta() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">

      <div className="mx-auto max-w-6xl px-6 py-20">


        {/* VOLVER */}

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
              Renovación de Receta Médica
            </h1>

          </div>


          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
            Renovación de recetas médicas de forma práctica y segura,
            mediante consulta online con evaluación profesional.
          </p>


        </section>



        {/* CARDS */}


        <section className="mt-16 grid gap-6 md:grid-cols-3">


          <div className="rounded-3xl bg-gray-100 p-6 text-center">


            <h2 className="text-xl font-semibold text-gray-900">
              ¿Cómo funciona?
            </h2>


            <p className="mt-3 text-sm leading-6 text-gray-600">
              Durante la consulta médica online se revisará el tratamiento
              actual, antecedentes y necesidad de continuidad del medicamento.
            </p>


          </div>



          <div className="rounded-3xl bg-gray-100 p-6 text-center">


            <h2 className="text-xl font-semibold text-gray-900">
              Importante
            </h2>


            <p className="mt-3 text-sm leading-6 text-gray-600">
              La renovación está sujeta a evaluación médica. No todos los
              medicamentos pueden ser renovados sin una nueva valoración
              clínica.
            </p>


          </div>



          <div className="rounded-3xl bg-gray-100 p-6 text-center">


            <h2 className="text-xl font-semibold text-gray-900">
              Atención online
            </h2>


            <p className="mt-3 text-sm leading-6 text-gray-600">
              Recibí atención médica desde cualquier lugar del territorio
              nacional, con comodidad y seguridad.
            </p>


          </div>


        </section>



        {/* CTA */}


        <section className="mx-auto mt-16 max-w-4xl rounded-3xl bg-black px-8 py-10 text-center text-white">


          <h2 className="text-3xl font-bold">
            ¿Necesitás renovar una receta?
          </h2>


          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/80">
            Reservá tu consulta médica online y recibí una evaluación
            profesional desde cualquier lugar de Argentina.
          </p>


          <Link
            href="/reservar"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-black transition hover:bg-gray-200"
          >
            Solicitar renovación
          </Link>


        </section>


      </div>

    </main>
  );
}
