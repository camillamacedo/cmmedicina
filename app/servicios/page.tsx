import Link from "next/link";

export default function Servicios() {
  return (
    <main className="min-h-screen bg-white">


      <div className="mx-auto max-w-6xl px-6 py-20">


        <Link
          href="/"
          className="text-gray-500 transition hover:text-black"
        >
          ← Volver al inicio
        </Link>






        {/* HERO */}

        <section className="mt-14 text-center">


          




          <h1 className="mt-5 text-5xl font-bold text-gray-900">
            Atención médica personalizada
          </h1>




          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">

            Servicios médicos online con un enfoque integral,
            humano y basado en evidencia científica.

          </p>


        </section>









        {/* SERVICIOS */}

        <section className="mt-16 grid gap-8 md:grid-cols-2">





          {/* Consulta */}

          <div className="rounded-3xl bg-black p-10 text-center text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl">


            <h2 className="relative inline-block text-2xl font-semibold">

              Consulta Médica

              <span className="absolute -bottom-3 left-1/2 h-px w-12 -translate-x-1/2 bg-gray-400"></span>

            </h2>



            <p className="mt-8 leading-7 text-gray-300">

              Evaluación clínica personalizada,
              orientación médica y seguimiento integral
              según las necesidades de cada paciente.

            </p>


          </div>









          {/* Certificados */}

          <div className="rounded-3xl bg-black p-10 text-center text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl">


            <h2 className="relative inline-block text-2xl font-semibold">

              Certificados Médicos

              <span className="absolute -bottom-3 left-1/2 h-px w-12 -translate-x-1/2 bg-gray-400"></span>

            </h2>



            <p className="mt-8 leading-7 text-gray-300">

              Evaluación médica profesional para la
              emisión de certificados según indicación clínica.

            </p>


          </div>









          {/* Apto físico */}

          <div className="rounded-3xl bg-black p-10 text-center text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl">


            <h2 className="relative inline-block text-2xl font-semibold">

              Apto Físico

              <span className="absolute -bottom-3 left-1/2 h-px w-12 -translate-x-1/2 bg-gray-400"></span>

            </h2>



            <p className="mt-8 leading-7 text-gray-300">

              Valoración médica orientada a actividades
              deportivas, laborales, universitarias y requerimientos específicos.

            </p>


          </div>









          {/* Estudios */}

          <div className="rounded-3xl bg-black p-10 text-center text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl">


            <h2 className="relative inline-block text-2xl font-semibold">

              Solicitud de Estudios

              <span className="absolute -bottom-3 left-1/2 h-px w-12 -translate-x-1/2 bg-gray-400"></span>

            </h2>



            <p className="mt-8 leading-7 text-gray-300">

              Evaluación médica y solicitud de estudios
              complementarios cuando estén indicados.

            </p>


          </div>









          {/* Recetas */}

          <div className="rounded-3xl bg-black p-10 text-center text-white shadow-lg md:col-span-2 transition hover:-translate-y-1 hover:shadow-xl">


            <h2 className="relative inline-block text-2xl font-semibold">

              Renovación de Recetas Médicas

              <span className="absolute -bottom-3 left-1/2 h-px w-12 -translate-x-1/2 bg-gray-400"></span>

            </h2>



            <p className="mx-auto mt-8 max-w-3xl leading-7 text-gray-300">

              Seguimiento de tratamientos previamente indicados,
              evaluación médica y renovación de medicación
              según criterio profesional.

            </p>


          </div>





        </section>









        {/* CTA */}

        <section className="mt-20 rounded-3xl bg-gray-50 p-12 text-center">


          <h2 className="text-3xl font-semibold text-gray-900">

            ¿Necesitás atención médica?

          </h2>




          <p className="mt-4 text-gray-600">

            Reservá tu consulta de manera rápida,
            segura y sencilla.

          </p>




          <Link

            href="/reservar"

            className="
              mt-8
              inline-block
              rounded-full
              bg-black
              px-10
              py-4
              font-semibold
              text-white
              transition
              hover:bg-gray-800
            "

          >

            Reservar turno

          </Link>


        </section>




      </div>


    </main>
  );
}