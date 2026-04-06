"use client";

import Image from "next/image";

const slides = [
  { src: "/images/caldeira-aquecimento.webp", alt: "Equipamento industrial - Caldeira de aquecimento" },
  { src: "/images/caldeira-azul-2.webp", alt: "Caldeira industrial azul" },
  { src: "/images/caldeira-lenha.webp", alt: "Caldeira a lenha" },
  { src: "/images/caldeirao-azul.webp", alt: "Caldeirao azul industrial" },
  { src: "/images/trocador-calor.webp", alt: "Trocador de calor industrial" },
  { src: "/images/hero-caldeira.webp", alt: "Caldeira industrial Santesso" },
];

function ImageStrip() {
  return (
    <>
      {slides.map((slide) => (
        <div
          key={slide.src}
          className="flex-shrink-0 rounded-xl overflow-hidden h-64 sm:h-72 lg:h-80"
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            width={500}
            height={400}
            sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 500px"
            className="h-full w-auto object-contain"
          />
        </div>
      ))}
    </>
  );
}

export default function ProductCarousel() {
  return (
    <section className="py-12 overflow-hidden">
      <div
        style={{
          display: "flex",
          gap: "1rem",
          width: "max-content",
          animation: "carousel-scroll 90s linear infinite",
        }}
      >
        <ImageStrip />
        <ImageStrip />
      </div>

      <style>{`
        @keyframes carousel-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
