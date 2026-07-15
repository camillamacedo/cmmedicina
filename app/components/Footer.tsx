import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t bg-white">

      <div className="mx-auto max-w-6xl px-6 py-12">


        <div className="grid gap-10 md:grid-cols-3">


          {/* LOGO / MARCA */}

          <div>

            <div className="flex items-center gap-3">

              <Image
                src="/logo.png"
                alt="CM Medicina"
                width={55}
                height={55}
                className="rounded-full object-contain"
              />

              <div>

                <h2 className="text-xl font-bold">
                  CM Medicina
                </h2>

                <p className="text-sm text-gray-500">
                  Atención médica a tu alcance
                </p>

              </div>

            </div>


            <p className="mt-5 text-gray-600">
              Atención médica personalizada,
              segura y accesible en todo el territorio nacional.
            </p>


          </div>





          {/* NAVEGAÇÃO */}

          <div>

            <h3 className="text-lg font-semibold">
              Navegación
            </h3>


            <div className="mt-4 flex flex-col gap-3">


              <Link
                href="/"
                className="text-gray-600 hover:text-black"
              >
                Inicio
              </Link>


              <Link
                href="/servicios"
                className="text-gray-600 hover:text-black"
              >
                Servicios
              </Link>


              <Link
                href="/reservar"
                className="text-gray-600 hover:text-black"
              >
                Reservar turno
              </Link>


              <Link
                href="/contacto"
                className="text-gray-600 hover:text-black"
              >
                Contacto
              </Link>


            </div>


          </div>






          {/* CONTACTO */}

          <div>


            <h3 className="text-lg font-semibold">
              Contacto
            </h3>


            <div className="mt-4 flex flex-col gap-4">


              <a
                href="https://wa.me/5491158607484"
                target="_blank"
                className="font-medium text-green-600 hover:text-green-700"
              >
                WhatsApp
              </a>



              <a
                href="https://instagram.com/dramacedocamilla"
                target="_blank"
                className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text font-semibold text-transparent hover:opacity-80"
              >
                Instagram
              </a>



              <p className="text-gray-600">
                Atención online en Argentina
              </p>


            </div>


          </div>


        </div>





        {/* COPYRIGHT */}

        <div className="mt-12 border-t pt-6 text-center text-sm text-gray-500">

          © 2026 CM Medicina. Todos los derechos reservados. Matricula Nacional 202589. 

        </div>



      </div>


    </footer>
  );
}