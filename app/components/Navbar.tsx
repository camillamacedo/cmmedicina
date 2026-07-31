"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (

    <header className="fixed top-0 z-50 w-full border-b border-neutral-200 bg-white/90 backdrop-blur-md">

      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 md:h-24 md:px-8">

        {/* LOGO */}

        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3 transition-opacity hover:opacity-80"
        >

          <Image
            src="/logo.png"
            alt="CM Medicina"
            width={50}
            height={50}
            className="rounded-full md:h-[58px] md:w-[58px]"
          />

          <div>

            <h1 className="text-base font-semibold tracking-tight text-neutral-900 md:text-xl">
              Dra. Camilla Macedo
            </h1>

            <p className="mt-0.5 text-[10px] uppercase tracking-[0.22em] text-neutral-400 md:text-xs">
              Medicina Online
            </p>

          </div>

        </Link>

        {/* MENU DESKTOP */}

        <div className="hidden items-center gap-10 text-[15px] font-medium lg:flex">

          <Link
            href="/"
            className="text-neutral-500 transition hover:text-black"
          >
            Inicio
          </Link>

          <Link
            href="/servicios"
            className="text-neutral-500 transition hover:text-black"
          >
            Servicios
          </Link>

          <Link
            href="/teleconsulta"
            className="text-neutral-500 transition hover:text-black"
          >
            Teleconsulta
          </Link>

          <Link
            href="/contacto"
            className="text-neutral-500 transition hover:text-black"
          >
            Contacto
          </Link>

        </div>

        {/* BOTÃO DESKTOP */}

        <Link
          href="/reservar"
          className="hidden rounded-full bg-black px-8 py-3 text-sm font-medium text-white transition hover:bg-neutral-800 lg:block"
        >
          Reservar turno
        </Link>

        {/* BOTÃO MENU MOBILE */}

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 lg:hidden"
        >

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >

            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                open
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />

          </svg>

        </button>
                {/* MENU MOBILE */}

        {open && (
          <div
            className="
              absolute
              left-0
              top-[72px]
              w-full
              border-b
              border-neutral-200
              bg-white
              shadow-xl
              lg:hidden
            "
          >

            <div className="mx-auto flex max-w-7xl flex-col px-5 py-6">

              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-4 text-base font-medium text-neutral-700 transition hover:bg-neutral-100"
              >
                Inicio
              </Link>

              <Link
                href="/servicios"
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-4 text-base font-medium text-neutral-700 transition hover:bg-neutral-100"
              >
                Servicios
              </Link>

              <Link
                href="/teleconsulta"
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-4 text-base font-medium text-neutral-700 transition hover:bg-neutral-100"
              >
                Teleconsulta
              </Link>

              <Link
                href="/contacto"
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-4 text-base font-medium text-neutral-700 transition hover:bg-neutral-100"
              >
                Contacto
              </Link>

              <div className="my-5 border-t border-neutral-200" />

              <Link
                href="/reservar"
                onClick={() => setOpen(false)}
                className="
                  flex
                  justify-center
                  rounded-full
                  bg-black
                  px-6
                  py-4
                  text-base
                  font-semibold
                  text-white
                  transition
                  hover:bg-neutral-800
                "
              >
                Reservar turno
              </Link>

              <a
                href="https://wa.me/5491158607484"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-3
                  flex
                  justify-center
                  rounded-full
                  border
                  border-neutral-300
                  px-6
                  py-4
                  text-base
                  font-medium
                  text-neutral-800
                  transition
                  hover:border-black
                  hover:bg-neutral-50
                "
              >
                WhatsApp
              </a>

            </div>

          </div>
        )}

      </nav>

    </header>

  );
}
