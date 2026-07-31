import Link from "next/link";

export default function Teleconsulta() {
  return (
    <main className="min-h-screen bg-white">

      <section className="mx-auto max-w-6xl px-6 py-20">


        <Link
          href="/"
          className="text-gray-500 transition hover:text-black"
        >
          ← Volver al inicio
        </Link>




        <div className="mt-12 text-center">


          


          <h1 className="mt-6 text-5xl font-bold text-gray-900">
            Consulta médica online
          </h1>



          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">

            Realizá tu consulta médica desde cualquier lugar,
            con la misma calidad, confidencialidad y cercanía
            de una consulta presencial.

          </p>


        </div>






        <div className="mt-16 grid gap-8 md:grid-cols-3">


          <div className="rounded-3xl bg-gray-50 p-8 shadow-sm">

            <h3 className="text-xl font-semibold">
              📍 Desde cualquier lugar
            </h3>

            <p className="mt-4 text-gray-600">
              Accedé a atención médica sin necesidad de trasladarte.
            </p>

          </div>




          <div className="rounded-3xl bg-gray-50 p-8 shadow-sm">

            <h3 className="text-xl font-semibold">
              🔒 Atención segura
            </h3>

            <p className="mt-4 text-gray-600">
              Consultas realizadas con privacidad y confidencialidad.
            </p>

          </div>




          <div className="rounded-3xl bg-gray-50 p-8 shadow-sm">

            <h3 className="text-xl font-semibold">
              🩺 Seguimiento personalizado
            </h3>

            <p className="mt-4 text-gray-600">
              Un espacio de escucha y acompañamiento médico.
            </p>

          </div>


        </div>







        <div className="mt-16 rounded-3xl bg-gray-50 p-10 text-center shadow-sm">

  <h2 className="text-3xl font-bold">
    Consulta virtual
  </h2>

  <p className="mx-auto mt-4 max-w-2xl text-gray-600">
    El acceso a Google Meet está disponible para pacientes
    con turno previamente confirmado.
  </p>

  <a
    href="/Meet"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-8 inline-block rounded-full bg-black px-8 py-4 font-semibold text-white transition hover:opacity-80"
  >
    Ingresar a consulta
  </a>

</div>
      </section>

    </main>
  );
}