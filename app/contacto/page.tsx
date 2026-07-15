import Link from "next/link";

export default function Contacto() {

  return (

    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">


      <div className="mx-auto max-w-6xl px-6 py-20">



        <Link
          href="/"
          className="text-gray-500 transition hover:text-black"
        >
          ← Volver al inicio
        </Link>





        <section className="mt-10 text-center">


         




          <h1 className="mt-6 text-5xl font-bold">
            Estamos para ayudarte
          </h1>




          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            Si tenés dudas o necesitás información sobre nuestros servicios,
            comunicate con nosotros.
          </p>



        </section>







        <section className="mt-16 grid gap-8 md:grid-cols-3">





          {/* WhatsApp */}

          <div className="rounded-3xl border bg-white p-8 shadow-lg text-center">


            <h2 className="text-2xl font-semibold">
              WhatsApp
            </h2>


            <p className="mt-4 text-gray-600">
              Atención rápida y directa.
            </p>



            <a
              href="https://wa.me/5491158607484"
              target="_blank"
              className="mt-6 inline-block rounded-xl bg-green-500 px-6 py-3 font-medium text-white shadow-md transition hover:bg-green-600 hover:scale-105"
            >
              Escribir por WhatsApp
            </a>



          </div>







          {/* Email */}

          <div className="rounded-3xl border bg-white p-8 shadow-lg text-center">


            <h2 className="text-2xl font-semibold">
              Email
            </h2>



            <p className="mt-4 text-gray-600">
              Envíanos tu consulta por correo electrónico.
            </p>




            <a
              href="mailto:camilla.macedo@outlook.com"
              className="mt-6 inline-block rounded-xl border px-6 py-3 transition hover:bg-gray-100"
            >
              Enviar email
            </a>



          </div>







          {/* Ubicación */}

          <div className="rounded-3xl border bg-white p-8 shadow-lg text-center">


            <h2 className="text-2xl font-semibold">
              Instagram
            </h2>



            <p className="mt-4 text-gray-600">
              Acompananos en redes sociales para más información y novedades.
            </p>




            <Link
              href="https:instagram.com/dramacedocamilla"
              className="mt-6 inline-block rounded-xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 px-6 py-3 font-medium text-white shadow-md transition hover:scale-105"
            >
              @DRAMACEDOCAMILLA
            </Link>



          </div>



        </section>







        <section className="mt-16 rounded-3xl bg-black p-10 text-center text-white">


          <h2 className="text-3xl font-bold">
            CM Medicina
          </h2>



          <p className="mx-auto mt-4 max-w-xl text-gray-300">
            Atención médica cercana, profesional y accesible.
          </p>




          <a
            href="https://wa.me/5491158607484"
            target="_blank"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-3 font-medium text-black transition hover:bg-gray-200"
          >
            Contactar ahora
          </a>



        </section>




      </div>


    </main>

  );
}