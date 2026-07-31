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
    border-gray-200
    bg-white
    text-gray-900
    px-4
    py-3
    outline-none
    transition
    placeholder:text-gray-400
    autofill:bg-white
    focus:border-black
    focus:ring-2
    focus:ring-black/10
  `;



  return (

    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">


      <div className="mx-auto max-w-6xl px-6 py-20">



        <Link
          href="/"
          className="text-sm text-gray-500 transition hover:text-black"
        >
          ← Volver al inicio
        </Link>





        {/* HEADER */}

<section className="mt-10 flex justify-center">


  <div
    className="
    w-full
    max-w-3xl
    rounded-[28px]
    bg-black
    px-6
    py-8
    text-center
    text-white
    shadow-xl
    "
  >


    <div className="mx-auto mb-4 flex justify-center">

      <img
        src="/logo.png"
        alt="CM Medicina"
        className="h-14 w-auto object-contain"
      />

    </div>





    <h1
      className="
      text-3xl
      font-bold
      tracking-tight
      md:text-4xl
      "
    >
      Reservá tu turno
    </h1>





    <p
      className="
      mx-auto
      mt-3
      max-w-xl
      text-sm
      leading-6
      text-gray-300
      md:text-base
      "
    >
      Completá tus datos y recibí la confirmación
      de tu consulta por WhatsApp.
    </p>



  </div>


</section>





        {/* COMO FUNCIONA */}


        <section className="mx-auto mt-10 max-w-4xl">


          <div
            className="
            rounded-3xl
            border
            border-gray-100
            bg-white
            p-8
            shadow-[0_20px_50px_rgba(0,0,0,0.05)]
            "
          >


            <h2 className="text-center text-2xl font-semibold text-gray-900">
              ¿Cómo funciona?
            </h2>



            <div
              className="
              mt-8
              grid
              gap-6
              md:grid-cols-4
              "
            >

              <div className="text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
                  1
                </div>
                <p className="mt-3 text-sm text-gray-600">
                  Completá tus datos
                </p>
              </div>


              <div className="text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
                  2
                </div>
                <p className="mt-3 text-sm text-gray-600">
                  Elegí fecha y horario
                </p>
              </div>


              <div className="text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
                  3
                </div>
                <p className="mt-3 text-sm text-gray-600">
                  Recibí confirmación
                </p>
              </div>


              <div className="text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
                  4
                </div>
                <p className="mt-3 text-sm text-gray-600">
                  Realizá tu consulta
                </p>
              </div>


            </div>


          </div>


        </section>

                {/* FORMULARIO */}


        <section className="mx-auto mt-12 max-w-3xl">


          <div
            className="
            rounded-[32px]
            border
            border-gray-100
            bg-white
            p-8
            shadow-[0_20px_50px_rgba(0,0,0,0.08)]
            md:p-10
            "
          >



            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >





              <div>

                <label
                  className="
                  mb-2
                  block
                  text-sm
                  font-medium
                  text-gray-700
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








              <div>


                <label
                  className="
                  mb-2
                  block
                  text-sm
                  font-medium
                  text-gray-700
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
                    text-gray-700
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
                    text-gray-700
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









              <div>


                <label
                  className="
                  mb-2
                  block
                  text-sm
                  font-medium
                  text-gray-700
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









              <div>


                <label
                  className="
                  mb-2
                  block
                  text-sm
                  font-medium
                  text-gray-700
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
                    text-gray-700
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
                    text-gray-700
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

                      <option key={hora}>
                        {hora}
                      </option>

                    ))}



                  </select>



                </div>



              </div>









              <button

                type="submit"

                className="
                w-full
                rounded-full
                bg-green-600
                py-4
                font-semibold
                text-white
                shadow-md
                transition
                hover:bg-green-700
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
                text-gray-500
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
