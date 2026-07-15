export default function Services() {
  return (
    <section className="bg-gray-50 px-6 py-24">

      <div className="mx-auto max-w-6xl">

        <h2 className="text-center text-4xl font-bold">
          Nuestros Servicios
        </h2>

        <p className="mt-4 text-center text-gray-600">
          Atención médica con calidad, comodidad y seguridad.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

<div className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-lg">
            <div className="text-4xl">📄</div>

            <h3 className="mt-6 text-xl font-semibold">
              Certificados
            </h3>

            <p className="mt-3 text-gray-600">
              Emisión de certificados médicos tras evaluación.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-lg">
            <div className="text-4xl">🩺</div>

            <h3 className="mt-6 text-xl font-semibold">
              Clínica Médica
            </h3>

            <p className="mt-3 text-gray-600">
              Evaluación integral y seguimiento de pacientes.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-lg">
            <div className="text-4xl">❤️</div>

            <h3 className="mt-6 text-xl font-semibold">
              Cardiología
            </h3>

            <p className="mt-3 text-gray-600">
              Prevención y cuidado de la salud cardiovascular.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-lg">
            <div className="text-4xl">💻</div>

            <h3 className="mt-6 text-xl font-semibold">
              Teleconsulta
            </h3>

            <p className="mt-3 text-gray-600">
              Consultas online desde cualquier lugar del país.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}