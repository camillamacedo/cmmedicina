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





  return (


    <main className="min-h-screen bg-white">


      <div className="mx-auto max-w-6xl px-6 py-20">



        <Link
          href="/"
          className="text-gray-500 transition hover:text-black"
        >
          ← Volver al inicio
        </Link>






{/* HEADER */}

<section className="mt-14 flex justify-center">

  <div className="w-full max-w-4xl rounded-3xl bg-black px-8 py-10 text-center text-white shadow-lg">



    <h1 className="mt-4 text-4xl font-bold md:text-5xl">
      Reservá tu consulta médica
    </h1>



    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-300 md:text-lg">

      Completá tus datos y seleccioná el horario que mejor
      se adapte a vos. Recibirás confirmación de tu turno
      por WhatsApp.

    </p>


  </div>

</section>









      





        {/* FORMULARIO */}


        <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-black-100 bg-white p-8 shadow-lg md:p-10">



          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >





            <div>

              <label className="mb-2 block text-sm font-medium text-gray-700">
                Nombre y Apellido
              </label>


              <input
                required
                name="nombre"
                type="text"
                placeholder="Ingresá tu nombre completo"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-black"
              />

            </div>






            <div>

              <label className="mb-2 block text-sm font-medium text-gray-700">
                Edad
              </label>


              <input
                required
                name="edad"
                type="number"
                placeholder="Ej: 35"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-black"
              />

            </div>








            <div className="grid gap-6 md:grid-cols-2">


              <div>

                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Número de contacto
                </label>


                <input
                  required
                  name="contacto"
                  type="tel"
                  placeholder="+54 9..."
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-black"
                />

              </div>





              <div>

                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Mail
                </label>


                <input
                  required
                  name="mail"
                  type="email"
                  placeholder="correo@email.com"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-black"
                />

              </div>


            </div>









            <div>


              <label className="mb-2 block text-sm font-medium text-gray-700">
                Seleccionar atención
              </label>



              <select
                required
                name="atencion"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-black"
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


              <label className="mb-2 block text-sm font-medium text-gray-700">
                Motivo de Consulta
              </label>


              <textarea

                required

                name="motivo"

                rows={5}

                placeholder="Describí brevemente el motivo de tu consulta"

                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-black"

              />


            </div>









            <div className="grid gap-6 md:grid-cols-2">


              <div>

                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Seleccioná el día
                </label>


                <input
                  required
                  name="fecha"
                  type="date"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-black"
                />


              </div>






              <div>


                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Seleccioná el horario
                </label>



                <select

                  required

                  name="horario"

                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-black"

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
              transition
              hover:bg-green-700
              "

            >

              Confirmar solicitud de turno por WhatsApp

            </button>





            <p className="text-center text-sm text-gray-500">

              Al enviar esta solicitud recibirás confirmación
              de disponibilidad antes de la consulta.

            </p>





          </form>


        </div>





      </div>


    </main>

  );
}