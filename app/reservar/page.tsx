"use client";

import Link from "next/link";

export default function Reservar() {


  const horarios = Array.from({ length: 57 }, (_, i) => {

    const totalMinutes = 8 * 60 + i * 15;

    const horas = Math.floor(totalMinutes / 60);
    const minutos = totalMinutes % 60;

    return `${String(horas).padStart(2, "0")}:${String(minutos).padStart(2, "0")}`;

  });



  const numeroWhatsApp = "5491158607484";



  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {

    e.preventDefault();


    const formData = new FormData(e.currentTarget);



    const mensaje = `
*Nueva solicitud de turno - CM Medicina*

👤 Nombre y Apellido:
${formData.get("nombre")}

🎂 Edad:
${formData.get("edad")}

📱 Número de contacto:
${formData.get("contacto")}

📧 Mail:
${formData.get("mail")}

🩺 Atención solicitada:
${formData.get("atencion")}

📝 Motivo de consulta:
${formData.get("motivo")}

📅 Fecha:
${formData.get("fecha")}

⏰ Horario:
${formData.get("horario")}


Solicitud enviada desde la página web de CM Medicina.
`;



    const url =
      `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;


    window.open(url, "_blank");

  }





  const inputStyle = `
    w-full
    rounded-xl
    border
    border-neutral-200
    bg-white
    px-4
    py-3
    text-neutral-900
    outline-none
    transition
    placeholder:text-neutral-400
    focus:border-black
    focus:ring-2
    focus:ring-black/10
  `;




  return (

    <main className="min-h-screen bg-gradient-to-b from-white to-neutral-50">


      <div
        className="
          mx-auto
          max-w-6xl
          px-5
          py-16
          md:px-6
          md:py-20
        "
      >



        <Link
          href="/"
          className="
            text-sm
            text-neutral-500
            transition
            hover:text-black
          "
        >
          ← Volver al inicio
        </Link>





        {/* COMO FUNCIONA */}

        <section
          className="
            mx-auto
            mt-8
            max-w-3xl
          "
        >

          <div
            className="
              rounded-2xl
              border
              border-neutral-100
              bg-white
              px-4
              py-3
              shadow-sm
            "
          >

            <div
              className="
                grid
                grid-cols-2
                gap-y-4
                text-center
                md:grid-cols-4
              "
            >

              <div>
                <span className="text-sm font-semibold text-black">
                  1
                </span>

                <p className="mt-1 text-xs text-neutral-500">
                  Completá tus datos
                </p>
              </div>



              <div>
                <span className="text-sm font-semibold text-black">
                  2
                </span>

                <p className="mt-1 text-xs text-neutral-500">
                  Elegí fecha y horario
                </p>
              </div>



              <div>
                <span className="text-sm font-semibold text-black">
                  3
                </span>

                <p className="mt-1 text-xs text-neutral-500">
                  Recibí confirmación
                </p>
              </div>



              <div>
                <span className="text-sm font-semibold text-black">
                  4
                </span>

                <p className="mt-1 text-xs text-neutral-500">
                  Realizá tu consulta
                </p>
              </div>


            </div>

          </div>
                  {/* FORMULARIO */}


        <section
          className="
            mx-auto
            mt-10
            max-w-3xl
          "
        >


          <div
            className="
              rounded-[32px]
              border
              border-neutral-100
              bg-white
              p-6
              shadow-[0_20px_50px_rgba(0,0,0,0.08)]
              md:p-10
            "
          >


            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >




              {/* NOMBRE */}


              <div>

                <label
                  className="
                    mb-2
                    block
                    text-sm
                    font-medium
                    text-neutral-700
                  "
                >
                  Nombre y Apellido
                </label>


                <input

                  required

                  name="nombre"

                  type="text"

                  placeholder="Ingresá tu nombre completo"

                  className={inputStyle}

                />


              </div>







              {/* EDAD */}


              <div>


                <label
                  className="
                    mb-2
                    block
                    text-sm
                    font-medium
                    text-neutral-700
                  "
                >
                  Edad
                </label>


                <input

                  required

                  name="edad"

                  type="number"

                  placeholder="Ej: 35"

                  className={inputStyle}

                />


              </div>








              {/* CONTACTO + MAIL */}


              <div
                className="
                  grid
                  gap-6
                  md:grid-cols-2
                "
              >



                <div>


                  <label
                    className="
                      mb-2
                      block
                      text-sm
                      font-medium
                      text-neutral-700
                    "
                  >
                    Número de contacto
                  </label>



                  <input

                    required

                    name="contacto"

                    type="tel"

                    placeholder="+54 9..."

                    className={inputStyle}

                  />


                </div>







                <div>


                  <label
                    className="
                      mb-2
                      block
                      text-sm
                      font-medium
                      text-neutral-700
                    "
                  >
                    Mail
                  </label>



                  <input

                    required

                    name="mail"

                    type="email"

                    placeholder="correo@email.com"

                    className={inputStyle}

                  />


                </div>


              </div>









              {/* ATENCION */}


              <div>


                <label
                  className="
                    mb-2
                    block
                    text-sm
                    font-medium
                    text-neutral-700
                  "
                >
                  Seleccionar atención
                </label>



                <select

                  required

                  name="atencion"

                  className={inputStyle}

                >


                  <option value="">
                    Seleccionar
                  </option>


                  <option>
                    Consulta Médica
                  </option>


                  <option>
                    Certificados Médicos
                  </option>


                  <option>
                    Apto Físico
                  </option>


                  <option>
                    Solicitud de Estudios
                  </option>


                  <option>
                    Renovación de Recetas Médicas
                  </option>


                </select>


              </div>









              {/* MOTIVO */}


              <div>


                <label
                  className="
                    mb-2
                    block
                    text-sm
                    font-medium
                    text-neutral-700
                  "
                >
                  Motivo de Consulta
                </label>



                <textarea

                  required

                  name="motivo"

                  rows={5}

                  placeholder="Describí brevemente el motivo de tu consulta"

                  className={inputStyle}

                />


              </div>
                            {/* FECHA + HORARIO */}


              <div
                className="
                  grid
                  gap-6
                  md:grid-cols-2
                "
              >


                <div>


                  <label
                    className="
                      mb-2
                      block
                      text-sm
                      font-medium
                      text-neutral-700
                    "
                  >
                    Seleccioná el día
                  </label>



                  <input

                    required

                    name="fecha"

                    type="date"

                    className={inputStyle}

                  />


                </div>







                <div>


                  <label
                    className="
                      mb-2
                      block
                      text-sm
                      font-medium
                      text-neutral-700
                    "
                  >
                    Seleccioná el horario
                  </label>




                  <select

                    required

                    name="horario"

                    className={inputStyle}

                  >


                    <option value="">
                      Seleccionar horario
                    </option>



                    {horarios.map((hora) => (

                      <option
                        key={hora}
                      >
                        {hora}
                      </option>

                    ))}


                  </select>



                </div>


              </div>








              {/* BOTON WHATSAPP */}


              <button

                type="submit"

                className="
                  w-full
                  rounded-full
                  bg-black
                  py-4
                  font-semibold
                  text-white
                  shadow-md
                  transition
                  duration-300
                  hover:bg-neutral-800
                  hover:shadow-lg
                "

              >

                Solicitar turno por WhatsApp

              </button>







              <p
                className="
                  text-center
                  text-sm
                  leading-6
                  text-neutral-500
                "
              >

                Al enviar esta solicitud recibirás
                confirmación de disponibilidad antes
                de la consulta.

              </p>







            </form>


          </div>


        </section>





      </div>


    </main>


  );


}

        </section>
