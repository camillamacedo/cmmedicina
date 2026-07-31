import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">

      <div className="mx-auto max-w-7xl px-6 py-24">

        <div className="grid gap-16 lg:grid-cols-[2fr_1fr_1fr]">

          {/* MARCA */}

          <div>

            <Link
              href="/"
              className="inline-flex items-center gap-4 transition-opacity hover:opacity-80"
            >

              <Image
                src="/logo.png"
                alt="CM Medicina"
                width={60}
                height={60}
                className="rounded-full"
              />

              <div>

                <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
                  CM Medicina
                </h2>

                <p className="mt-1 text-xs uppercase tracking-[0.35em] text-neutral-400">
                  Medicina Online
                </p>

              </div>

            </Link>

            <p className="mt-8 max-w-md text-lg leading-8 text-neutral-500">

              Atención médica personalizada, segura y basada en evidencia,
              ofreciendo consultas online con calidad, cercanía y compromiso
              en todo el territorio argentino.

            </p>

          </div>

          {/* NAVEGACIÓN */}

          <div>

            <h3 className="text-sm font-semibold uppercase tracking-[0.30em] text-neutral-400">
              Navegación
            </h3>

            <div className="mt-8 flex flex-col gap-5">

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

            <div className="mt-8 flex flex-col gap-5">

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

              <p className="pt-2 text-neutral-500">
                Atención online en toda Argentina.
              </p>

            </div>

          </div>

        </div>

        {/* DIVISOR */}

        <div className="my-14 h-px bg-neutral-200"></div>

        {/* COPYRIGHT */}

        <div className="flex flex-col items-center justify-between gap-5 text-sm text-neutral-400 md:flex-row">

          <p>
            © 2026 <span className="font-medium text-neutral-700">CM Medicina</span>.
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
