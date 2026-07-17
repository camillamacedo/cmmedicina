"use client";

export default function WhatsAppButton() {

  const phone = "+5491158607484";

  const message =
    "Hola, soy paciente de CM Medicina y quisiera solicitar un turno.";

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-full
        bg-green-500
        text-white
        shadow-xl
        transition
        hover:scale-110
      "
      aria-label="Contactar por WhatsApp"
    >
      <svg
        viewBox="0 0 32 32"
        fill="currentColor"
        className="h-8 w-8"
      >
        <path d="M16.004 2.667C8.65 2.667 2.667 8.65 2.667 16c0 2.35.62 4.56 1.706 6.47L2.667 29.333l7.043-1.68A13.27 13.27 0 0 0 16.004 29.333C23.35 29.333 29.333 23.35 29.333 16S23.35 2.667 16.004 2.667z"/>
      </svg>
    </a>
  );
}