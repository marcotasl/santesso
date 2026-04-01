import Image from "next/image";

const depoimentos = [
  {
    src: "/images/depoimento-1.webp",
    alt: "Depoimento sobre qualidade dos produtos Santesso",
  },
  {
    src: "/images/depoimento-2.webp",
    alt: "Depoimento sobre a empresa Caldeiras Santesso",
  },
  {
    src: "/images/depoimento-3.webp",
    alt: "Depoimento sobre caldeiras Santesso",
  },
  {
    src: "/images/depoimento-4.webp",
    alt: "Depoimento Kennedy Arruda sobre Santesso",
  },
];

export default function Depoimentos() {
  return (
    <section id="clientes" className="py-20 bg-[var(--color-gray-100)]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-wider text-[var(--color-primary)] mb-2">
            Depoimentos
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-secondary)]">
            Quem conhece, recomenda Santesso
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {depoimentos.map((dep) => (
            <div
              key={dep.src}
              className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <Image
                src={dep.src}
                alt={dep.alt}
                width={363}
                height={467}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
