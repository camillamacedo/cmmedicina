import Link from "next/link";
import Image from "next/image";

export default function Home() {

  return (

    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">


      {/* HERO */}

      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="grid items-center gap-12 md:grid-cols-2">


          <div>


            




            <h1 className="mt-6 text-5xl font-bold leading-tight text-gray-900">

              Dra. Camilla Macedo

              <br />

              <span className="text-gray-600">
                Atención médica a tu alcance
              </span>

            </h1>




            <p className="mt-6 max-w-xl text-lg text-gray-600">

              Atención médica personalizada, segura y accesible
              desde cualquier lugar de Argentina.

            </p>





            <div className="mt-8 flex flex-wrap gap-4">



              {/* Reservar */}

              <Link

                href="/reservar"

                className="rounded-xl bg-gray-200 px-8 py-4 font-semibold text-black shadow-md transition hover:bg-gray-300 hover:scale-105"

              >

                Reservá tu consulta

              </Link>





              {/* WhatsApp */}

              <a

                href="https://wa.me/5491158607484"

                target="_blank"

                className="rounded-xl bg-green-500 px-8 py-4 font-semibold text-white shadow-md transition hover:bg-green-600 hover:scale-105"

              >

                WhatsApp

              </a>



            </div>


          </div>





          {/* LOGO */}

          <div className="flex justify-center">


            <div className="flex h-80 w-80 items-center justify-center overflow-hidden rounded-full bg-white p-8 shadow-xl">


              <Image

                src="/logo.png"

                alt="CM Medicina"

                width={400}

                height={400}

                className="h-full w-full object-contain"

              />


            </div>


          </div>



        </div>


      </section>









 {/* DIFERENCIALES */}

<section className="bg-white py-20">


  <div className="mx-auto max-w-6xl px-6">


    <div className="text-center">


      



      <h2 className="mt-4 text-3xl font-semibold text-gray-900">
        ¿Por qué elegir una consulta con la Dra. Camilla Macedo?
      </h2>



      <p className="mx-auto mt-4 max-w-2xl text-gray-500">
        Atención médica personalizada, segura y basada en evidencia.
      </p>


    </div>







    <div className="mt-12 grid gap-6 md:grid-cols-3">





      {/* CARD 1 */}

      <div className="rounded-3xl bg-black p-8 text-center transition duration-300 hover:-translate-y-1 hover:shadow-xl">


        <h3 className="relative inline-block text-lg font-semibold text-white">

          Atención personalizada

          <span className="absolute -bottom-3 left-1/2 h-px w-12 -translate-x-1/2 bg-gray-400"></span>

        </h3>



        <p className="mt-8 text-sm leading-7 text-gray-300">

          Una consulta centrada en tus necesidades,
          antecedentes y objetivos de salud.

        </p>


      </div>









      {/* CARD 2 */}

      <div className="rounded-3xl bg-black p-8 text-center transition duration-300 hover:-translate-y-1 hover:shadow-xl">


        <h3 className="relative inline-block text-lg font-semibold text-white">

          Telemedicina segura

          <span className="absolute -bottom-3 left-1/2 h-px w-12 -translate-x-1/2 bg-gray-400"></span>

        </h3>



        <p className="mt-8 text-sm leading-7 text-gray-300">

          Atención médica online con la misma calidad
          y cercanía, estés donde estés.

        </p>


      </div>









      {/* CARD 3 */}

      <div className="rounded-3xl bg-black p-8 text-center transition duration-300 hover:-translate-y-1 hover:shadow-xl">


        <h3 className="relative inline-block text-lg font-semibold text-white">

          Horarios flexibles

          <span className="absolute -bottom-3 left-1/2 h-px w-12 -translate-x-1/2 bg-gray-400"></span>

        </h3>



        <p className="mt-8 text-sm leading-7 text-gray-300">

          Elegí el momento más conveniente
          para realizar tu consulta.

        </p>


      </div>





    </div>


  </div>


</section>







      {/* SERVICIOS */}


<section className="bg-gray-50 py-20">


  <div className="mx-auto max-w-6xl px-6">



    <div className="text-center">


     



      <h2 className="mt-4 text-3xl font-semibold text-gray-900">
        Nuestros servicios
      </h2>



      <p className="mx-auto mt-4 max-w-2xl text-gray-500">
        Atención médica integral con un enfoque personalizado
        y basado en evidencia.
      </p>


    </div>







    <div className="mt-12 grid gap-6 md:grid-cols-3">





      {/* CARD 1 */}

      <div className="rounded-3xl bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">


        <h3 className="relative inline-block text-lg font-semibold text-gray-900">

          Consulta Médica

          <span className="absolute -bottom-3 left-1/2 h-px w-12 -translate-x-1/2 bg-gray-300"></span>

        </h3>



        <p className="mt-7 text-sm leading-7 text-gray-500">

          Evaluación clínica y seguimiento personalizado
          para el cuidado de tu salud.

        </p>


      </div>









      {/* CARD 2 */}

      <div className="rounded-3xl bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">


        <h3 className="relative inline-block text-lg font-semibold text-gray-900">

          Certificados Médicos

          <span className="absolute -bottom-3 left-1/2 h-px w-12 -translate-x-1/2 bg-gray-300"></span>

        </h3>



        <p className="mt-7 text-sm leading-7 text-gray-500">

          Evaluación médica profesional
          para la emisión de certificados.

        </p>


      </div>









      {/* CARD 3 */}

      <div className="rounded-3xl bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">


        <h3 className="relative inline-block text-lg font-semibold text-gray-900">

          Recetas y Estudios

          <span className="absolute -bottom-3 left-1/2 h-px w-12 -translate-x-1/2 bg-gray-300"></span>

        </h3>



        <p className="mt-7 text-sm leading-7 text-gray-500">

          Renovación de recetas,
          solicitud de estudios y orientación médica.

        </p>


      </div>





    </div>







    <div className="mt-10 text-center">


      <Link

        href="/servicios"

        className="
          inline-block
          rounded-full
          bg-black
          px-10
          py-3
          font-semibold
          text-white
          shadow-md
          transition
          hover:bg-gray-800
        "

      >

        Ver todos los servicios

      </Link>


    </div>



  </div>


</section>








      {/* CTA FINAL */}


      <section className="mx-auto mb-20 max-w-6xl px-6">


        <div className="rounded-3xl bg-black p-12 text-center text-white">


          <h2 className="text-4xl font-bold">

            Tu salud merece atención de calidad.

          </h2>



          <p className="mt-4 text-gray-300">

            Reservá tu consulta de manera rápida y sencilla.

          </p>





          <Link

            href="/reservar"

            className="mt-8 inline-block rounded-xl bg-gray-200 px-10 py-4 font-semibold text-black shadow-md transition hover:bg-gray-300 hover:scale-105"

          >

            Reservar turno

          </Link>



        </div>


      </section>





    </main>

  );
}