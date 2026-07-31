import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">


      {/* HERO */}

      <section className="mx-auto max-w-7xl px-6 py-28">

        <div className="grid items-center gap-20 lg:grid-cols-2">


          {/* TEXTO */}

          <div>

            <span className="inline-flex items-center rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium tracking-wide text-neutral-600">
              Medicina Online • Argentina
            </span>


            <h1 className="mt-8 text-6xl font-semibold leading-tight tracking-tight">

              Dra. Camilla Macedo

              <br />

              <span className="font-normal text-neutral-500">
                Atención médica personalizada
                <br />
                donde estés.
              </span>

            </h1>


            <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-500">

              Consultas médicas online con un enfoque humano,
              basado en evidencia y pensado para acompañarte
              en cada etapa de tu salud.

            </p>



            <div className="mt-12 flex flex-wrap gap-5">


              <Link
                href="/reservar"
                className="rounded-full bg-black px-10 py-4 font-medium text-white transition duration-300 hover:scale-105 hover:bg-neutral-800"
              >
                Reservá tu consulta
              </Link>



              <a
                href="https://wa.me/5491158607484"
                target="_blank"
                className="rounded-full border border-neutral-300 bg-white px-10 py-4 font-medium text-neutral-800 transition duration-300 hover:border-black hover:bg-neutral-50"
              >
                WhatsApp
              </a>


            </div>


          </div>





          {/* LOGO */}


          <div className="flex justify-center">


            <div
              className="
              flex
              h-[420px]
              w-[420px]
              items-center
              justify-center
              rounded-full
              border
              border-neutral-200
              bg-white
              shadow-[0_20px_60px_rgba(0,0,0,.05)]
              "
            >

              <Image
                src="/logo.png"
                alt="CM Medicina"
                width={420}
                height={420}
                className="h-[75%] w-[75%] object-contain"
              />

            </div>


          </div>


        </div>


      </section>





      {/* DIFERENCIALES */}


      <section className="py-24 bg-white">


        <div className="mx-auto max-w-7xl px-6">


          <div className="text-center">


            <span className="text-sm uppercase tracking-[0.3em] text-neutral-400">
              Excelencia Médica
            </span>



            <h2 className="mt-5 text-4xl font-semibold tracking-tight">

              ¿Por qué elegir la
              <br />
              Dra. Camilla Macedo?

            </h2>



            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-500">

              Una experiencia médica diseñada para ofrecer
              confianza, comodidad y atención personalizada.

            </p>


          </div>





          {/* CARDS DIFERENCIALES */}


          <div className="mt-14 grid gap-5 lg:grid-cols-3">



            <div
              className="
              rounded-3xl
              border
              border-neutral-200
              bg-white
              px-6
              py-7
              text-center
              transition
              duration-300
              hover:-translate-y-1
              hover:border-neutral-400
              hover:shadow-sm
              "
            >

              <div className="flex flex-col items-center">


                <h3 className="text-lg font-semibold">
                  Atención personalizada
                </h3>


                <div className="mt-4 h-px w-8 bg-neutral-300"></div>


                <p className="mt-4 max-w-xs text-sm leading-6 text-neutral-500">

                  Consultas centradas en tus necesidades,
                  antecedentes y objetivos de salud.

                </p>


              </div>


            </div>





            <div
              className="
              rounded-3xl
              border
              border-neutral-200
              bg-white
              px-6
              py-7
              text-center
              transition
              duration-300
              hover:-translate-y-1
              hover:border-neutral-400
              hover:shadow-sm
              "
            >

              <div className="flex flex-col items-center">


                <h3 className="text-lg font-semibold">
                  Telemedicina segura
                </h3>


                <div className="mt-4 h-px w-8 bg-neutral-300"></div>


                <p className="mt-4 max-w-xs text-sm leading-6 text-neutral-500">

                  Atención online con privacidad,
                  seguridad y cercanía.

                </p>


              </div>


            </div>

                        <div
              className="
              rounded-3xl
              border
              border-neutral-200
              bg-white
              px-6
              py-7
              text-center
              transition
              duration-300
              hover:-translate-y-1
              hover:border-neutral-400
              hover:shadow-sm
              "
            >

              <div className="flex flex-col items-center">


                <h3 className="text-lg font-semibold">
                  Horarios flexibles
                </h3>


                <div className="mt-4 h-px w-8 bg-neutral-300"></div>


                <p className="mt-4 max-w-xs text-sm leading-6 text-neutral-500">

                  Elegí el momento más conveniente
                  para tu consulta.

                </p>


              </div>


            </div>


          </div>


        </div>


      </section>






      {/* SERVICIOS */}


      <section className="bg-neutral-50 py-24">


        <div className="mx-auto max-w-7xl px-6">



          <div className="text-center">


            <span className="text-sm uppercase tracking-[0.3em] text-neutral-400">
              Servicios
            </span>



            <h2 className="mt-5 text-4xl font-semibold tracking-tight">
              Atención médica integral
            </h2>



            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-500">

              Soluciones médicas diseñadas para acompañarte
              en cada etapa, con atención personalizada
              y basada en evidencia científica.

            </p>


          </div>





          {/* CARDS SERVICIOS */}


          <div className="mt-14 grid gap-5 lg:grid-cols-3">



            <div
              className="
              rounded-3xl
              border
              border-neutral-200
              bg-white
              px-6
              py-7
              text-center
              transition
              duration-300
              hover:-translate-y-1
              hover:border-neutral-400
              hover:shadow-sm
              "
            >

              <div className="flex flex-col items-center">


                <h3 className="text-lg font-semibold">
                  Consulta Médica
                </h3>


                <div className="mt-4 h-px w-8 bg-neutral-300"></div>


                <p className="mt-4 max-w-xs text-sm leading-6 text-neutral-500">

                  Evaluación clínica completa,
                  diagnóstico, tratamiento y seguimiento
                  personalizado.

                </p>


              </div>


            </div>





            <div
              className="
              rounded-3xl
              border
              border-neutral-200
              bg-white
              px-6
              py-7
              text-center
              transition
              duration-300
              hover:-translate-y-1
              hover:border-neutral-400
              hover:shadow-sm
              "
            >

              <div className="flex flex-col items-center">


                <h3 className="text-lg font-semibold">
                  Certificados Médicos
                </h3>


                <div className="mt-4 h-px w-8 bg-neutral-300"></div>


                <p className="mt-4 max-w-xs text-sm leading-6 text-neutral-500">

                  Evaluación profesional para emisión
                  de certificados médicos.

                </p>


              </div>


            </div>





            <div
              className="
              rounded-3xl
              border
              border-neutral-200
              bg-white
              px-6
              py-7
              text-center
              transition
              duration-300
              hover:-translate-y-1
              hover:border-neutral-400
              hover:shadow-sm
              "
            >

              <div className="flex flex-col items-center">


                <h3 className="text-lg font-semibold">
                  Recetas y Estudios
                </h3>


                <div className="mt-4 h-px w-8 bg-neutral-300"></div>


                <p className="mt-4 max-w-xs text-sm leading-6 text-neutral-500">

                  Renovación de recetas,
                  solicitud de estudios y orientación médica.

                </p>


              </div>


            </div>


          </div>





          <div className="mt-12 text-center">


            <Link
              href="/servicios"
              className="
              inline-flex
              items-center
              rounded-full
              border
              border-black
              px-10
              py-4
              font-medium
              transition-all
              duration-300
              hover:bg-black
              hover:text-white
              "
            >

              Ver todos los servicios

            </Link>


          </div>



        </div>


      </section>







      {/* CTA FINAL */}


      <section className="py-28">


        <div className="mx-auto max-w-6xl px-6">


          <div
            className="
            rounded-[40px]
            bg-neutral-900
            px-12
            py-20
            text-center
            text-white
            shadow-[0_30px_80px_rgba(0,0,0,.15)]
            "
          >


            <span className="text-sm uppercase tracking-[0.3em] text-neutral-400">
              Agenda Online
            </span>



            <h2 className="mt-6 text-5xl font-semibold tracking-tight">

              Tu salud merece
              una atención de excelencia.

            </h2>



            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-300">

              Reservá tu consulta online de forma rápida,
              segura y desde cualquier lugar de Argentina.

            </p>




            <div className="mt-12 flex flex-wrap justify-center gap-5">


              <Link
                href="/reservar"
                className="
                rounded-full
                bg-white
                px-10
                py-4
                font-medium
                text-black
                transition
                duration-300
                hover:scale-105
                "
              >

                Reservar turno

              </Link>



              <a
                href="https://wa.me/5491158607484"
                target="_blank"
                className="
                rounded-full
                border
                border-neutral-600
                px-10
                py-4
                font-medium
                text-white
                transition
                hover:border-white
                "
              >

                WhatsApp

              </a>


            </div>


          </div>


        </div>


      </section>



    </main>
  );
}
