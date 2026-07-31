import Image from "next/image";

export default function About() {
  return (
    <section className="bg-white py-28">

      <div className="mx-auto grid max-w-7xl items-center gap-24 px-6 lg:grid-cols-2">

        {/* FOTO */}

        <div className="flex justify-center">

          <div className="overflow-hidden rounded-[36px] border border-neutral-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,.05)]">

            <Image
              src="/dra-camilla-1.png"
              alt="Dra. Camilla Macedo"
              width={480}
              height={620}
              className="object-cover"
            />

          </div>

        </div>

        {/* TEXTO */}

        <div>

          <span className="text-sm uppercase tracking-[0.30em] text-neutral-400">
            Sobre la Dra. Camilla Macedo
          </span>

          <h2 className="mt-6 text-5xl font-semibold leading-tight tracking-tight text-neutral-900">

            Una medicina cercana,
            humana y basada en evidencia.

          </h2>

          <p className="mt-8 text-lg leading-8 text-neutral-500">

            Médica egresada de la <strong>Universidad de Buenos Aires (UBA)</strong>,
            dedicada a brindar una atención médica personalizada, con un enfoque
            integral y centrado en cada paciente.

          </p>

          {/* BLOQUES */}

          <div className="mt-12 space-y-8">

            <div>

              <h3 className="text-xl font-semibold text-neutral-900">
                Atención personalizada
              </h3>

              <div className="mt-3 h-px w-14 bg-neutral-200"></div>

              <p className="mt-5 leading-8 text-neutral-500">

                Cada consulta se desarrolla con tiempo, escucha activa y respeto,
                permitiendo comprender tu historia clínica, tus objetivos y tus
                necesidades para ofrecer un tratamiento adaptado a vos.

              </p>

            </div>

            <div>

              <h3 className="text-xl font-semibold text-neutral-900">
                Medicina basada en evidencia
              </h3>

              <div className="mt-3 h-px w-14 bg-neutral-200"></div>

              <p className="mt-5 leading-8 text-neutral-500">

                Todas las decisiones médicas se apoyan en la mejor evidencia
                científica disponible, priorizando la seguridad, la prevención
                y el bienestar integral del paciente.

              </p>

            </div>

            <div>

              <h3 className="text-xl font-semibold text-neutral-900">
                Telemedicina segura
              </h3>

              <div className="mt-3 h-px w-14 bg-neutral-200"></div>

              <p className="mt-5 leading-8 text-neutral-500">

                Consultas online con la misma calidad, privacidad y compromiso
                que una atención presencial, para que puedas cuidar tu salud
                desde cualquier lugar de Argentina.

              </p>

            </div>

          </div>

          {/* FRASE DESTACADA */}

          <div className="mt-12">

  <div className="h-px w-12 bg-neutral-300"></div>

  <p className="mt-5 text-xl font-medium tracking-tight text-neutral-900">
    Medicina de calidad,
    estés donde estés.
  </p>

</div>

        </div>

      </div>

    </section>
  );
}
