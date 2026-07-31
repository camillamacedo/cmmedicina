import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">

      <div className="mx-auto max-w-7xl px-5 py-14 md:px-6 md:py-20">

        <div
          className="
            grid
            gap-12
            text-center
            md:gap-14
            lg:grid-cols-[2fr_1fr_1fr]
            lg:text-left
          "
        >

          {/* MARCA */}

          <div className="flex flex-col items-center lg:items-start">

            <Link
              href="/"
              className="inline-flex items-center gap-3 transition-opacity hover:opacity-80"
            >

              <Image
                src="/logo.png"
                alt="CM Medicina"
                width={52}
                height={52}
                className="rounded-full md:h-[60px] md:w-[60px]"
              />

              <div>

                <h2 className="text-xl font-semibold tracking-tight text-neutral-900 md:text-2xl">
                  CM Medicina
                </h2>

                <p className="mt-1 text-[10px] uppercase tracking-[0.30em] text-neutral-400 md:text-xs">
                  Medicina Online
                </p>

              </div>

            </Link>

            <p
              className="
                mt-6
                max-w-md
                text-base
                leading-7
                text-neutral-500
                md:mt-8
                md:text-lg
                md:leading-8
              "
            >

              Atención médica personalizada, segura y basada
              en evidencia científica, ofreciendo consultas
              online con calidad, cercanía y compromiso en
              todo el territorio argentino.

            </p>

          </div>



          {/* NAVEGACIÓN */}

          <div>

            <h3 className="text-sm font-semibold uppercase tracking-[0.30em] text-neutral-400">
              Navegación
            </h3>

            <div className="mt-6 flex flex-col gap-4 md:mt-8">

              <Link
                href="/"
                className="text-neutral-600 transition hover:text-black"
              >
                Inicio
              </Link>

              <Link
                href="/servicios"
                className="text-neutral-600 transition hover:text-black"
              >
                Servicios
              </Link>

              <Link
                href="/reservar"
                className="text-neutral-600 transition hover:text-black"
              >
                Reservar turno
              </Link>

              <Link
                href="/contacto"
                className="text-neutral-600 transition hover:text-black"
              >
                Contacto
              </Link>

            </div>

          </div>



          {/* CONTACTO */}

          <div>

            <h3 className="text-sm font-semibold uppercase tracking-[0.30em] text-neutral-400">
              Contacto
            </h3>

            <div className="mt-6 flex flex-col gap-4 md:mt-8">

              <a
                href="https://wa.me/5491158607484"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 transition hover:text-black"
              >
                WhatsApp
              </a>

              <a
                href="https://instagram.com/dramacedocamilla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 transition hover:text-black"
              >
                Instagram
              </a>

              <p className="pt-2 text-sm leading-6 text-neutral-500">
                Atención online en toda Argentina.
              </p>

            </div>

          </div>

        </div>



        {/* DIVISOR */}
  

        <div className="my-12 h-px bg-neutral-200 md:my-16"></div>
        
              

        {/* COPYRIGHT */}

        <div
          className="
            mt-10
            flex
            flex-col
            items-center
            justify-between
            gap-4
            text-center
            text-sm
            text-neutral-400
            md:mt-14
            md:flex-row
            md:text-left
          "
        >

          <p>
            © 2026{" "}
            <span className="font-medium text-neutral-700">
              CM Medicina
            </span>
            .
            Todos los derechos reservados.
          </p>


          <p>
            Matrícula Nacional Nº 202589
          </p>


        </div>


      </div>

    </footer>
  );
}
