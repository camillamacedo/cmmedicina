import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-neutral-200 bg-white/90 backdrop-blur-md">

      <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between px-8">

        {/* Logo */}

        <Link
          href="/"
          className="flex items-center gap-4 transition-opacity hover:opacity-80"
        >

          <Image
            src="/logo.png"
            alt="CM Medicina"
            width={58}
            height={58}
            className="rounded-full"
          />

          <div>

            <h1 className="text-xl font-semibold tracking-tight text-neutral-900">
              Dra. Camilla Macedo
            </h1>

            <p className="mt-1 text-xs uppercase tracking-[0.25em] text-neutral-400">
              Medicina Online
            </p>

          </div>

        </Link>

        {/* Menu */}

        <div className="hidden items-center gap-10 lg:flex text-[15px] font-medium">

          <Link
            href="/#inicio"
            className="text-neutral-500 transition hover:text-black"
          >
            Inicio
          </Link>

          <Link
            href="/servicios"
            className="text-neutral-500 transition hover:text-black"
          >
            Servicios
          </Link>

          <Link
            href="/teleconsulta"
            className="text-neutral-500 transition hover:text-black"
          >
            Teleconsulta
          </Link>

          <Link
            href="/contacto"
            className="text-neutral-500 transition hover:text-black"
          >
            Contacto
          </Link>

        </div>

        {/* Botão */}

        <Link
          href="/reservar"
          className="rounded-full bg-black px-8 py-3 text-sm font-medium text-white transition duration-300 hover:scale-105 hover:bg-neutral-800"
        >
          Reservar turno
        </Link>

      </nav>

    </header>
  );
}
