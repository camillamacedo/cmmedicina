import Image from "next/image";

export default function About() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-2">


        {/* FOTO */}

        <div className="flex justify-center">

          <div className="rounded-3xl bg-gray-100 p-3 shadow-xl">

            <Image
              src="/dra-camilla-1.png"
              alt="Dra. Camilla Macedo - CM Medicina"
              width={420}
              height={520}
              className="rounded-3xl object-cover"
            />

          </div>

        </div>





        {/* TEXTO */}

        <div>


          <span className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            Sobre la Dra. Camilla Macedo
          </span>





          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Medicina con excelencia, cercanía y compromiso
          </h2>





          <p className="mt-6 text-lg leading-8 text-gray-600">

            Médica egresada de la Universidad de Buenos Aires (UBA),
            comprometida con brindar una atención médica de excelencia,
            centrada en la persona y respaldada por la mejor evidencia
            científica disponible.

          </p>





          <p className="mt-6 text-lg leading-8 text-gray-600">

            Cada consulta se desarrolla en un espacio de escucha,
            respeto y confidencialidad, donde las decisiones se toman
            de manera personalizada, considerando las necesidades,
            antecedentes y objetivos de cada paciente.

          </p>





          <p className="mt-6 text-lg leading-8 text-gray-600">

            A través de la telemedicina, ofrezco un servicio accesible,
            seguro y de alta calidad, permitiendo realizar consultas
            médicas desde cualquier lugar, sin perder la cercanía ni
            el vínculo médico-paciente.

          </p>





          <p className="mt-6 text-lg leading-8 text-gray-600">

            Mi compromiso es acompañarte en cada etapa del cuidado
            de tu salud con profesionalismo, claridad y un enfoque
            integral orientado a la prevención, el diagnóstico y
            el tratamiento.

          </p>







          {/* FRASE DESTACADA */}

          <div className="mt-10 w-full rounded-3xl bg-gray-50 px-8 py-6 text-center shadow-sm">

            <p className="text-xl font-semibold text-gray-800 sm:whitespace-nowrap">

              📍Medicina de calidad, estés donde estés.

            </p>

          </div>



        </div>


      </div>


    </section>
  );
}