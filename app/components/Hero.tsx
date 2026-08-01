import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">

      {/* HERO */}

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-6 md:py-24">

        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">

          {/* TEXTO */}

          <div className="order-2 text-center lg:order-1 lg:text-left">

            <span
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-neutral-200
                px-4
                py-2
                text-xs
                font-medium
                tracking-wide
                text-neutral-600
                md:text-sm
              "
            >
              Medicina Online • Argentina
            </span>

            <h1
              className="
                mt-6
                text-4xl
                font-semibold
                leading-tight
                tracking-tight
                sm:text-5xl
                lg:text-6xl
              "
            >
              Dra. Camilla Macedo

              <br />

              <span className="font-normal text-neutral-500">
                Atención médica personalizada
                <br />
                donde estés.
              </span>

            </h1>

            <p
              className="
                mx-auto
                mt-6
                max-w-xl
                text-base
                leading-7
                text-neutral-500
                md:mx-0
                md:text-lg
                md:leading-8
              "
            >
              Consultas médicas online con un enfoque humano,
              basado en evidencia y pensado para acompañarte
              en cada etapa de tu salud.
            </p>

            <div
              className="
                mt-10
                flex
                flex-col
                gap-4
                sm:flex-row
                sm:justify-center
                lg:justify-start
              "
            >

              <Link
                href="/reservar"
                className="
                  w-full
                  rounded-full
                  bg-black
                  px-8
                  py-3.5
                  text-center
                  font-medium
                  text-white
                  transition
                  duration-300
                  hover:scale-[1.02]
                  hover:bg-neutral-800
                  sm:w-auto
                "
              >
                Reservá tu consulta
              </Link>

              <a
                href="https://wa.me/5491158607484"
                target="_blank"
                className="
                  w-full
                  rounded-full
                  border
                  border-neutral-300
                  bg-white
                  px-8
                  py-3.5
                  text-center
                  font-medium
                  text-neutral-800
                  transition
                  duration-300
                  hover:border-black
                  hover:bg-neutral-50
                  sm:w-auto
                "
              >
                WhatsApp
              </a>

            </div>

          </div>

          {/* LOGO */}
<div className="mx-auto h-44 w-44 overflow-hidden rounded-full shadow-sm">
  <Image
    src="/logo.png"
    alt="CM Medicina"
    width={340}
    height={340}
    className="h-full w-full object-cover scale-110"
    priority
  />
</div>
      </section>

      {/* DIFERENCIALES */}

      <section className="bg-white py-16 md:py-24">

        <div className="mx-auto max-w-7xl px-5 md:px-6">

          <div className="text-center">

            <span className="text-xs uppercase tracking-[0.3em] text-neutral-400 md:text-sm">
              Excelencia Médica
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:mt-5 md:text-4xl">
              ¿Por qué elegir la
              <br />
              Dra. Camilla Macedo?
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-base
                leading-7
                text-neutral-500
                md:text-lg
                md:leading-8
              "
            >
              Una experiencia médica diseñada para ofrecer
              confianza, comodidad y atención personalizada.
            </p>

          </div>

                    {/* CARDS DIFERENCIALES */}

          <div
            className="
              mt-10
              grid
              gap-5
              md:mt-14
              md:grid-cols-2
              xl:grid-cols-3
            "
          >

            {/* CARD 1 */}

            <div
              className="
                rounded-2xl
                border
                border-neutral-200
                bg-white
                p-6
                text-center
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-neutral-400
                hover:shadow-md
                md:rounded-3xl
                md:p-7
              "
            >

              <div className="flex flex-col items-center">

                <h3 className="text-lg font-semibold">
                  Atención personalizada
                </h3>

                <div className="mt-4 h-px w-10 bg-neutral-300" />

                <p
                  className="
                    mt-4
                    max-w-xs
                    text-sm
                    leading-6
                    text-neutral-500
                  "
                >
                  Consultas centradas en tus necesidades,
                  antecedentes y objetivos de salud.
                </p>

              </div>

            </div>

            {/* CARD 2 */}

            <div
              className="
                rounded-2xl
                border
                border-neutral-200
                bg-white
                p-6
                text-center
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-neutral-400
                hover:shadow-md
                md:rounded-3xl
                md:p-7
              "
            >

              <div className="flex flex-col items-center">

                <h3 className="text-lg font-semibold">
                  Telemedicina segura
                </h3>

                <div className="mt-4 h-px w-10 bg-neutral-300" />

                <p
                  className="
                    mt-4
                    max-w-xs
                    text-sm
                    leading-6
                    text-neutral-500
                  "
                >
                  Atención online con privacidad,
                  seguridad y cercanía.
                </p>

              </div>

            </div>

            {/* CARD 3 */}

            <div
              className="
                rounded-2xl
                border
                border-neutral-200
                bg-white
                p-6
                text-center
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-neutral-400
                hover:shadow-md
                md:rounded-3xl
                md:p-7
              "
            >

              <div className="flex flex-col items-center">

                <h3 className="text-lg font-semibold">
                  Horarios flexibles
                </h3>

                <div className="mt-4 h-px w-10 bg-neutral-300" />

                <p
                  className="
                    mt-4
                    max-w-xs
                    text-sm
                    leading-6
                    text-neutral-500
                  "
                >
                  Elegí el momento más conveniente
                  para tu consulta.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SERVICIOS */}

      <section className="bg-neutral-50 py-16 md:py-24">

        <div className="mx-auto max-w-7xl px-5 md:px-6">

          <div className="text-center">

            <span className="text-xs uppercase tracking-[0.3em] text-neutral-400 md:text-sm">
              Servicios
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:mt-5 md:text-4xl">
              Atención médica integral
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-base
                leading-7
                text-neutral-500
                md:text-lg
                md:leading-8
              "
            >
              Soluciones médicas diseñadas para acompañarte
              en cada etapa, con atención personalizada
              y basada en evidencia científica.
            </p>

          </div>

                   {/* CARDS SERVICIOS */}

          <div
            className="
              mt-10
              grid
              gap-5
              md:mt-14
              md:grid-cols-2
              xl:grid-cols-3
            "
          >

            {/* CARD 1 */}

            <div
              className="
                rounded-2xl
                border
                border-neutral-200
                bg-white
                p-6
                text-center
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-neutral-400
                hover:shadow-md
                md:rounded-3xl
                md:p-7
              "
            >

              <div className="flex flex-col items-center">

                <h3 className="text-lg font-semibold">
                  Consulta Médica
                </h3>

                <div className="mt-4 h-px w-10 bg-neutral-300" />

                <p
                  className="
                    mt-4
                    max-w-xs
                    text-sm
                    leading-6
                    text-neutral-500
                  "
                >
                  Evaluación clínica completa,
                  diagnóstico, tratamiento y seguimiento
                  personalizado.
                </p>

              </div>

            </div>



            {/* CARD 2 */}

            <div
              className="
                rounded-2xl
                border
                border-neutral-200
                bg-white
                p-6
                text-center
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-neutral-400
                hover:shadow-md
                md:rounded-3xl
                md:p-7
              "
            >

              <div className="flex flex-col items-center">

                <h3 className="text-lg font-semibold">
                  Certificados Médicos
                </h3>

                <div className="mt-4 h-px w-10 bg-neutral-300" />

                <p
                  className="
                    mt-4
                    max-w-xs
                    text-sm
                    leading-6
                    text-neutral-500
                  "
                >
                  Evaluación profesional para emisión
                  de certificados médicos.
                </p>

              </div>

            </div>



            {/* CARD 3 */}

            <div
              className="
                rounded-2xl
                border
                border-neutral-200
                bg-white
                p-6
                text-center
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-neutral-400
                hover:shadow-md
                md:rounded-3xl
                md:p-7
              "
            >

              <div className="flex flex-col items-center">

                <h3 className="text-lg font-semibold">
                  Recetas y Estudios
                </h3>

                <div className="mt-4 h-px w-10 bg-neutral-300" />

                <p
                  className="
                    mt-4
                    max-w-xs
                    text-sm
                    leading-6
                    text-neutral-500
                  "
                >
                  Renovación de recetas,
                  solicitud de estudios y orientación médica.
                </p>

              </div>

            </div>

          </div>



          {/* BOTÓN */}

          <div className="mt-10 text-center md:mt-12">

            <Link
              href="/servicios"
              className="
                inline-flex
                w-full
                items-center
                justify-center
                rounded-full
                border
                border-black
                px-8
                py-3.5
                font-medium
                transition-all
                duration-300
                hover:bg-black
                hover:text-white
                sm:w-auto
              "
            >

              Ver todos los servicios

            </Link>

          </div>

        </div>

      </section>



      {/* CTA FINAL */}

      <section className="py-16 md:py-24">

        <div className="mx-auto max-w-6xl px-5 md:px-6">

          <div
            className="
              rounded-[28px]
              bg-neutral-900
              px-6
              py-12
              text-center
              text-white
              shadow-[0_30px_80px_rgba(0,0,0,.15)]
              md:rounded-[40px]
              md:px-12
              md:py-20
            "
          >

            <span className="text-xs uppercase tracking-[0.3em] text-neutral-400 md:text-sm">
              Agenda Online
            </span>

            <h2
              className="
                mt-5
                text-3xl
                font-semibold
                tracking-tight
                md:mt-6
                md:text-5xl
              "
            >
              Tu salud merece
              <br />
              una atención de excelencia.
            </h2>

            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-base
                leading-7
                text-neutral-300
                md:mt-8
                md:text-lg
                md:leading-8
              "
            >
              Reservá tu consulta online de forma rápida,
              segura y desde cualquier lugar de Argentina.
            </p>

            <div
              className="
                mt-10
                flex
                flex-col
                gap-4
                sm:flex-row
                sm:justify-center
              "
            >
                            <Link
                href="/reservar"
                className="
                  w-full
                  rounded-full
                  bg-white
                  px-8
                  py-3.5
                  text-center
                  font-medium
                  text-black
                  transition
                  duration-300
                  hover:scale-[1.02]
                  sm:w-auto
                "
              >
                Reservar turno
              </Link>

              <a
                href="https://wa.me/5491158607484"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-full
                  rounded-full
                  border
                  border-neutral-600
                  px-8
                  py-3.5
                  text-center
                  font-medium
                  text-white
                  transition
                  hover:border-white
                  sm:w-auto
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
