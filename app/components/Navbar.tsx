import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur border-b">

      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

        <div className="flex items-center gap-3">

  <Image
  src="/logo.png"
  alt="CM Medicina"
  width={55}
  height={55}
/>

  <div>
    <h1 className="text-xl font-bold">
      Camilla Macedo
    </h1>

    <p className="text-xs text-gray-500">
      Medicina a tu alcance
    </p>
  </div>

</div>

        <div className="hidden md:flex items-center gap-8 text-sm">

          <Link
  href="/#inicio"
  className="text-gray-600 transition hover:text-black"
>
  Inicio
</Link>

          <Link href="servicios">
            Servicios
          </Link>

          <Link href="Teleconsulta">
            Teleconsulta
          </Link>

          <Link href="contacto">
            Contacto
          </Link>

        </div>

        <Link
  href="/reservar"
  className="rounded-full bg-black px-6 py-3 text-sm text-white transition hover:bg-gray-800"
>
  Reservar Turno
</Link>

      </nav>

    </header>
  );
}
