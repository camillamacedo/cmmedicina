import Link from "next/link";

export default function SolicitudExamen() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">

      <div className="mx-auto max-w-6xl px-6 py-20">

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
              Solicitud de Exámenes Médicos
            </h1>

          </div>


          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
            Durante la consulta médica online, la Dra. Camilla Macedo puede
            indicar estudios complementarios cuando exista una necesidad
            clínica. La solicitud se realiza luego de una evaluación médica
            personalizada y de acuerdo con el criterio profesional.
          </p>


        </section>



        {/* ESTUDIOS */}


        <section className="mt-20">


          <h2 className="text-center text-4xl font-bold text-black">
            ¿Qué estudios pueden solicitarse?
          </h2>


          <div className="mt-10 grid gap-5 md:grid-cols-3">


            <div className="rounded-3xl bg-gray-100 p-5 text-center">
              Análisis de sangre
            </div>


            <div className="rounded-3xl bg-gray-100 p-5 text-center">
              Estudios de laboratorio
            </div>


            <div className="rounded-3xl bg-gray-100 p-5 text-center">
              Orina y otros estudios clínicos
            </div>


            <div className="rounded-3xl bg-gray-100 p-5 text-center">
              Electrocardiograma
            </div>


            <div className="rounded-3xl bg-gray-100 p-5 text-center">
              Ecografías
            </div>


            <div className="rounded-3xl bg-gray-100 p-5 text-center">
              Radiografías
            </div>


            <div className="rounded-3xl bg-gray-100 p-5 text-center">
              Tomografía y Resonancia
            </div>


            <div className="rounded-3xl bg-gray-100 p-5 text-center">
              Otros estudios complementarios
            </div>


          </div>


        </section>
                {/* CUÁNDO SE SOLICITA */}


        <section className="mt-20">


          <h2 className="text-center text-4xl font-bold text-black">
            ¿Cuándo se solicita un estudio?
          </h2>


          <div className="mx-auto mt-8 max-w-4xl rounded-3xl bg-gray-100 p-6 text-center">


            <p className="text-sm leading-7 text-gray-600">
              Cada paciente recibe una evaluación individual durante la
              teleconsulta. Los estudios únicamente son solicitados cuando
              existe una indicación médica y contribuyen al diagnóstico,
              seguimiento o prevención de enfermedades.
            </p>


          </div>


        </section>



        {/* TELEMEDICINA */}


        <section className="mt-20">


          <h2 className="text-center text-4xl font-bold text-black">
            Atención médica online en Argentina
          </h2>


          <div className="mx-auto mt-8 max-w-4xl rounded-3xl bg-gray-100 p-6 text-center">


            <p className="text-sm leading-7 text-gray-600">
              La consulta virtual permite recibir orientación médica, solicitar
              estudios cuando estén indicados, renovar recetas, obtener
              certificados médicos y realizar el seguimiento de múltiples
              enfermedades desde cualquier lugar de Argentina.
            </p>


          </div>


        </section>



        {/* CTA */}


        <section className="mx-auto mt-20 max-w-4xl rounded-3xl bg-black px-8 py-10 text-center text-white">


          <h2 className="text-3xl font-bold">
            ¿Necesitás una consulta médica?
          </h2>


          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/80">
            Reservá tu turno y recibí atención médica personalizada desde
            cualquier lugar de Argentina.
          </p>


          <Link
            href="/reservar"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-black transition hover:bg-gray-200"
          >
            Reservar turno
          </Link>


        </section>


      </div>

    </main>
  );
}
