export default function Services() {
  return (
    <section className="bg-neutral-50 py-28">

      <div className="mx-auto max-w-7xl px-6">

        {/* HEADER */}

        <div className="text-center">

          <span className="text-sm uppercase tracking-[0.30em] text-neutral-400">
            Servicios
          </span>

          <h2 className="mt-6 text-5xl font-semibold tracking-tight text-neutral-900">
            Atención médica integral
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-500">
            Consultas diseñadas para ofrecer una atención personalizada,
            segura y basada en evidencia científica.
          </p>

        </div>


        {/* SERVICES GRID */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">


          {/* CERTIFICADOS */}

          <div className="rounded-[32px] border border-neutral-200 bg-white p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="h-px w-12 bg-neutral-300" />

            <h3 className="mt-8 text-2xl font-semibold text-neutral-900">
              Certificados
            </h3>

            <p className="mt-5 leading-8 text-neutral-500">
              Emisión de certificados médicos luego de una evaluación profesional y personalizada.
            </p>

          </div>


          {/* CLINICA */}

          <div className="rounded-[32px] border border-neutral-200 bg-white p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="h-px w-12 bg-neutral-300" />

            <h3 className="mt-8 text-2xl font-semibold text-neutral-900">
              Clínica Médica
            </h3>

            <p className="mt-5 leading-8 text-neutral-500">
              Evaluación clínica integral, diagnóstico, tratamiento y seguimiento continuo.
            </p>

          </div>


          {/* CARDIOLOGIA */}

          <div className="rounded-[32px] border border-neutral-200 bg-white p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="h-px w-12 bg-neutral-300" />

            <h3 className="mt-8 text-2xl font-semibold text-neutral-900">
              Cardiología
            </h3>

            <p className="mt-5 leading-8 text-neutral-500">
              Prevención, evaluación y seguimiento de factores de riesgo cardiovascular.
            </p>

          </div>


          {/* TELECONSULTA */}

          <div className="rounded-[32px] border border-neutral-200 bg-white p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="h-px w-12 bg-neutral-300" />

            <h3 className="mt-8 text-2xl font-semibold text-neutral-900">
              Teleconsulta
            </h3>

            <p className="mt-5 leading-8 text-neutral-500">
              Consultas médicas online con privacidad, seguridad y cercanía desde cualquier lugar.
            </p>

          </div>


        </div>

      </div>

    </section>
  );
}
