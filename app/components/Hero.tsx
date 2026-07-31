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

          <div className="mt-16 grid gap-8 lg:grid-cols-3">

            {/* CARD 1 */}

            <div className="rounded-[32px] border border-neutral-200 bg-white p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

              <h3 className="text-xl font-semibold">
                Atención personalizada
              </h3>

              <div className="mt-5 h-px w-14 bg-neutral-200"></div>

              <p className="mt-8 leading-8 text-neutral-500">

                Cada consulta es realizada con tiempo,
                dedicación y un enfoque individual para
                comprender tus necesidades de salud.

              </p>

            </div>

            {/* CARD 2 */}

            <div className="rounded-[32px] border border-neutral-200 bg-white p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

              <h3 className="text-xl font-semibold">
                Telemedicina segura
              </h3>

              <div className="mt-5 h-px w-14 bg-neutral-200"></div>

              <p className="mt-8 leading-8 text-neutral-500">

                Consultas online con privacidad,
                confidencialidad y la misma calidad
                de una atención presencial.

              </p>

            </div>

            {/* CARD 3 */}

            <div className="rounded-[32px] border border-neutral-200 bg-white p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

              <h3 className="text-xl font-semibold">
                Horarios flexibles
              </h3>

              <div className="mt-5 h-px w-14 bg-neutral-200"></div>

              <p className="mt-8 leading-8 text-neutral-500">

                Elegí el horario que mejor se adapte
                a tu rutina y recibí atención médica
                desde cualquier lugar.

              </p>

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
        Soluciones médicas diseñadas para acompañarte en cada etapa,
        con atención personalizada y basada en evidencia científica.
      </p>

    </div>

    <div className="mt-16 grid gap-8 lg:grid-cols-3">

      {/* CARD 1 */}

      <div className="rounded-[32px] border border-neutral-200 bg-white p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

        <h3 className="text-xl font-semibold">
          Consulta Médica
        </h3>

        <div className="mt-5 h-px w-14 bg-neutral-200"></div>

        <p className="mt-8 leading-8 text-neutral-500">

          Evaluación clínica completa,
          diagnóstico, tratamiento y seguimiento
          personalizado para cada paciente.

        </p>

      </div>

      {/* CARD 2 */}

      <div className="rounded-[32px] border border-neutral-200 bg-white p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

        <h3 className="text-xl font-semibold">
          Certificados Médicos
        </h3>

        <div className="mt-5 h-px w-14 bg-neutral-200"></div>

        <p className="mt-8 leading-8 text-neutral-500">

          Emisión de certificados
          médicos con evaluación profesional,
          responsabilidad y seguridad.

        </p>

      </div>

      {/* CARD 3 */}

      <div className="rounded-[32px] border border-neutral-200 bg-white p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

        <h3 className="text-xl font-semibold">
          Recetas y Estudios
        </h3>

        <div className="mt-5 h-px w-14 bg-neutral-200"></div>

        <p className="mt-8 leading-8 text-neutral-500">

          Renovación de recetas,
          solicitud de estudios complementarios
          y orientación médica.

        </p>

      </div>

    </div>

    <div className="mt-14 text-center">

      <Link
        href="/servicios"
        className="inline-flex items-center rounded-full border border-black px-10 py-4 font-medium transition-all duration-300 hover:bg-black hover:text-white"
      >
        Ver todos los servicios
      </Link>

    </div>

  </div>

</section>

{/* CTA FINAL */}

<section className="py-28">

  <div className="mx-auto max-w-6xl px-6">

    <div className="rounded-[40px] bg-neutral-900 px-12 py-20 text-center text-white shadow-[0_30px_80px_rgba(0,0,0,.15)]">

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
          className="rounded-full bg-white px-10 py-4 font-medium text-black transition duration-300 hover:scale-105"
        >
          Reservar turno
        </Link>

        <a
          href="https://wa.me/5491158607484"
          target="_blank"
          className="rounded-full border border-neutral-600 px-10 py-4 font-medium text-white transition hover:border-white"
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
