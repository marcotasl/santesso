import Image from "next/image";

const diferenciais = [
  {
    title: "Mais de 47 Anos de Excelência",
    description:
      "Com quase meio século de experiência, fabricamos e operamos caldeiras geradoras de vapor para os mais diversos setores industriais.",
  },
  {
    title: "Máxima Segurança Comprovada",
    description:
      "Há mais de 47 anos no mercado e sem nenhum registro de acidentes.",
  },
  {
    title: "Confiança Além do Padrão",
    description:
      "Nossas caldeiras possuem um fusível térmico de alta segurança que age como última proteção.",
  },
  {
    title: "Qualidade Certificada",
    description:
      "Materiais de alto desempenho que atendem rigorosamente às normas ASME.",
  },
  {
    title: "Eficiência com Baixo Custo de Combustível",
    description:
      "Caldeiras econômicas, operando com lenha e diversos combustíveis sólidos.",
  },
  {
    title: "Atendimento que Acompanha Você",
    description:
      "Suporte personalizado via WhatsApp para esclarecer dúvidas.",
  },
];

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="py-20 bg-[var(--color-gray-100)]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-wider text-[var(--color-primary)] mb-2">
            Por que escolher a Santesso?
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-secondary)]">
            Nossos Diferenciais
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diferenciais.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="mb-5">
                <Image
                  src="/images/icone-santesso.svg"
                  alt=""
                  width={28}
                  height={70}
                  className="h-14 w-auto"
                />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-secondary)] mb-3">
                {item.title}
              </h3>
              <p className="text-[var(--color-gray-600)] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
