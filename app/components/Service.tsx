export default function Services() {
  return (
    <section className="bg-white py-28">

      <div className="mx-auto max-w-7xl px-6">


        {/* HEADER */}

        <div className="max-w-2xl">

          <span className="text-sm uppercase tracking-[0.30em] text-neutral-400">
            Servicios
          </span>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-neutral-900">
            Atención médica personalizada
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-500">
            Servicios médicos pensados para ofrecer una atención segura,
            cercana y basada en evidencia científica.
          </p>

        </div>


        {/* SERVICIOS */}

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">


          {/* Consulta */}

          <div className="group rounded-3xl border border-neutral-200 p-8 transition duration-300 hover:border-neutral-400">

            <span className="text-xs uppercase tracking-[0.25em] text-neutral-400">
              01
            </span>

            <h3 className="mt-5 text-xl font-semibold text-neutral-900">
              Consulta Médica
            </h3>

            <p className="mt-4 leading-7 text-neutral-500">
              Evaluación clínica integral, diagnóstico,
              tratamiento y seguimiento personalizado.
            </p>

          </div>


          {/* Médico de cabecera */}

          <div className="group rounded-3xl border border-neutral-200 p-8 transition duration-300 hover:border-neutral-400">

            <span className="text-xs uppercase tracking-[0.25em] text-neutral-400">
              02
            </span>

            <h3 className="mt-5 text-xl font-semibold text-neutral-900">
              Médico de Cabecera
            </h3>

            <p className="mt-4 leading-7 text-neutral-500">
              Acompañamiento continuo para el cuidado integral
              de tu salud.
            </p>

          </div>


          {/* Cardiología */}

          <div className="group rounded-3xl border border-neutral-200 p-8 transition duration-300 hover:border-neutral-400">

            <span className="text-xs uppercase tracking-[0.25em] text-neutral-400">
              03
            </span>

            <h3 className="mt-5 text-xl font-semibold text-neutral-900">
              Cardiología
            </h3>

            <p className="mt-4 leading-7 text-neutral-500">
              Prevención cardiovascular, evaluación de riesgos
              y seguimiento especializado.
            </p>

          </div>


          {/* Certificados */}

          <div className="group rounded-3xl border border-neutral-200 p-8 transition duration-300 hover:border-neutral-400">

            <span className="text-xs uppercase tracking-[0.25em] text-neutral-400">
              04
            </span>

            <h3 className="mt-5 text-xl font-semibold text-neutral-900">
              Certificados Médicos
            </h3>

            <p className="mt-4 leading-7 text-neutral-500">
              Emisión de certificados luego de una evaluación médica profesional.
            </p>

          </div>


          {/* Recetas */}

          <div className="group rounded-3xl border border-neutral-200 p-8 transition duration-300 hover:border-neutral-400">

            <span className="text-xs uppercase tracking-[0.25em] text-neutral-400">
              05
            </span>

            <h3 className="mt-5 text-xl font-semibold text-neutral-900">
              Renovación de Recetas
            </h3>

            <p className="mt-4 leading-7 text-neutral-500">
              Seguimiento de tratamientos y renovación
              de medicación cuando corresponda.
            </p>

          </div>


          {/* Teleconsulta */}

          <div className="group rounded-3xl border border-neutral-200 p-8 transition duration-300 hover:border-neutral-400">

            <span className="text-xs uppercase tracking-[0.25em] text-neutral-400">
              06
            </span>

            <h3 className="mt-5 text-xl font-semibold text-neutral-900">
              Teleconsulta
            </h3>

            <p className="mt-4 leading-7 text-neutral-500">
              Atención médica online con privacidad,
              comodidad y seguridad.
            </p>

          </div>


        </div>


        {/* BOTÓN */}

        <div className="mt-14">

          <a
            href="/servicios"
            className="inline-flex rounded-full border border-neutral-300 px-8 py-3 text-sm font-medium text-neutral-800 transition hover:border-black hover:bg-black hover:text-white"
          >
            Ver todos los servicios
          </a>

        </div>


      </div>

    </section>
  );
}
