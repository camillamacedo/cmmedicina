"use client";

import { useState } from "react";

export default function WhatsAppButton() {

  const [showText, setShowText] = useState(false);


  return (

    <div
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
      onMouseEnter={() => setShowText(true)}
      onMouseLeave={() => setShowText(false)}
    >


      {/* Texto */}

      <div
        className={`
          hidden md:block
          rounded-xl
          bg-white
          px-4
          py-2
          text-sm
          font-medium
          text-gray-800
          shadow-lg
          transition-all
          duration-300
          ${showText ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"}
        `}
      >

        Agendá tu consulta

      </div>





      {/* Botão */}

      <a

        href="https://wa.me/5491158607484"

        target="_blank"

        rel="noopener noreferrer"

        aria-label="Contactar por WhatsApp"

        className="
          whatsapp-animation
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-green-500
          text-white
          shadow-lg
          transition
          hover:scale-110
          hover:bg-green-600
        "

      >


        <svg

          xmlns="http://www.w3.org/2000/svg"

          viewBox="0 0 32 32"

          className="h-8 w-8 fill-current"

        >

          <path d="M16 3C8.82 3 3 8.37 3 15c0 2.65.9 5.1 2.42 7.1L4 29l7.2-1.85A13.4 13.4 0 0016 27c7.18 0 13-5.37 13-12S23.18 3 16 3zm0 21.5c-1.8 0-3.5-.45-5-1.25l-.35-.18-4.3 1.1 1.15-4.05-.22-.35A9.4 9.4 0 016.5 15c0-5.25 4.25-9.5 9.5-9.5s9.5 4.25 9.5 9.5-4.25 9.5-9.5 9.5z"/>

        </svg>


      </a>


    </div>

  );
}