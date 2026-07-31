export default function Services() {
  return (
    <section className="bg-neutral-50 py-24">

      <div className="mx-auto max-w-7xl px-6">


        {/* HEADER */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm uppercase tracking-[0.30em] text-neutral-400">
            Servicios
          </span>


          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-neutral-900">
            Atención médica personalizada
          </h2>


          <p className="mt-5 text-lg leading-8 text-neutral-500">
            Servicios médicos pensados para cuidar tu salud
            con seguridad, cercanía y evidencia científica.
          </p>

        </div>



        {/* CARDS */}

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">



          {/* Consulta Médica */}

          <div className="rounded-3xl border border-neutral-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-neutral-400 hover:shadow-sm">

            <div className="flex flex-col items-center text-center">

              <h3 className="text-lg font-semibold text-neutral-900">
                Consulta Médica
              </h3>

              <div className="mt-4 h-px w-8 bg-neutral-300"></div>

              <p className="mt-4 max-w-xs text-sm leading-6 text-neutral-500">
                Evaluación clínica integral y seguimiento personalizado.
              </p>

            </div>

          </div>



          {/* Médico de Cabecera */}

          <div className="rounded-3xl border border-neutral-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-neutral-400 hover:shadow-sm">

            <div className="flex flex-col items-center text-center">

              <h3 className="text-lg font-semibold text-neutral-900">
                Médico de Cabecera
              </h3>

              <div className="mt-4 h-px w-8 bg-neutral-300"></div>

              <p className="mt-4 max-w-xs text-sm leading-6 text-neutral-500">
                Acompañamiento continuo para el cuidado de tu salud.
              </p>

            </div>

          </div>



          {/* Cardiología */}

          <div className="rounded-3xl border border-neutral-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-neutral-400 hover:shadow-sm">

            <div className="flex flex-col items-center text-center">

              <h3 className="text-lg font-semibold text-neutral-900">
                Cardiología
              </h3>

              <div className="mt-4 h-px w-8 bg-neutral-300"></div>

              <p className="mt-4 max-w-xs text-sm leading-6 text-neutral-500">
                Prevención y seguimiento de la salud cardiovascular.
              </p>

            </div>

          </div>



          {/* Certificados */}

          <div className="rounded-3xl border border-neutral-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-neutral-400 hover:shadow-sm">

            <div className="flex flex-col items-center text-center">

              <h3 className="text-lg font-semibold text-neutral-900">
                Certificados Médicos
              </h3>

              <div className="mt-4 h-px w-8 bg-neutral-300"></div>

              <p className="mt-4 max-w-xs text-sm leading-6 text-neutral-500">
                Evaluación médica profesional para certificados.
              </p>

            </div>

          </div>



          {/* Recetas */}

          <div className="rounded-3xl border border-neutral-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-neutral-400 hover:shadow-sm">

            <div className="flex flex-col items-center text-center">

              <h3 className="text-lg font-semibold text-neutral-900">
                Renovación de Recetas
              </h3>

              <div className="mt-4 h-px w-8 bg-neutral-300"></div>

              <p className="mt-4 max-w-xs text-sm leading-6 text-neutral-500">
                Seguimiento seguro de tratamientos habituales.
              </p>

            </div>

          </div>



          {/* Teleconsulta */}

          <div className="rounded-3xl border border-neutral-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-neutral-400 hover:shadow-sm">

            <div className="flex flex-col items-center text-center">

              <h3 className="text-lg font-semibold text-neutral-900">
                Teleconsulta
              </h3>

              <div className="mt-4 h-px w-8 bg-neutral-300"></div>

              <p className="mt-4 max-w-xs text-sm leading-6 text-neutral-500">
                Atención online con privacidad y comodidad.
              </p>

            </div>

          </div>



        </div>




        {/* BOTÓN */}

        <div className="mt-12 text-center">

          <a
            href="/servicios"
            className="
            inline-flex
            rounded-full
            border
            border-neutral-300
            px-8
            py-3
            text-sm
            font-medium
            text-neutral-800
            transition
            hover:border-black
            hover:bg-black
            hover:text-white
            "
          >
            Ver todos los servicios
          </a>

        </div>


      </div>

    </section>
  );
}
