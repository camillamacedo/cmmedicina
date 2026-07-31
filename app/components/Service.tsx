export default function Services() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-6xl px-6">


        {/* HEADER */}

        <div className="text-center">

          <span className="text-sm uppercase tracking-[0.30em] text-neutral-400">
            Servicios
          </span>


          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-neutral-900">
            Atención médica personalizada
          </h2>


          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-neutral-500">
            Servicios médicos pensados para ofrecer una atención
            segura, cercana y basada en evidencia científica.
          </p>

        </div>



        {/* CARDS */}

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">


          {[
            {
              title: "Consulta Médica",
              text: "Evaluación clínica integral y seguimiento personalizado.",
            },
            {
              title: "Médico de Cabecera",
              text: "Acompañamiento continuo para cuidar tu salud.",
            },
            {
              title: "Cardiología",
              text: "Prevención y seguimiento cardiovascular.",
            },
            {
              title: "Certificados Médicos",
              text: "Evaluación profesional para emisión de certificados.",
            },
            {
              title: "Renovación de Recetas",
              text: "Seguimiento seguro de tratamientos habituales.",
            },
            {
              title: "Teleconsulta",
              text: "Atención online con privacidad y comodidad.",
            },

          ].map((service) => (

            <div
              key={service.title}
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


                <h3 className="text-lg font-semibold text-neutral-900">
                  {service.title}
                </h3>


                <div className="mt-4 h-px w-8 bg-neutral-300"></div>


                <p className="mt-4 max-w-xs text-sm leading-6 text-neutral-500">
                  {service.text}
                </p>


              </div>


            </div>

          ))}


        </div>




        {/* BOTÃO */}

        <div className="mt-12 text-center">

          <a
            href="/servicios"
            className="
            inline-flex
            rounded-full
            border
            border-neutral-300
            px-8
            py-3
            text-sm
            font-medium
            text-neutral-800
            transition
            hover:border-black
            hover:bg-black
            hover:text-white
            "
          >
            Ver todos los servicios
          </a>

        </div>


      </div>

    </section>
  );
}
