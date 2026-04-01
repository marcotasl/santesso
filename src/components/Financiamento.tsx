import Image from "next/image";

const WHATSAPP_URL = "https://wp.faleconosco.chat/6ba943211";

export default function Financiamento() {
  return (
    <section id="financie" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-[var(--color-primary)] mb-2">
              Financiamento
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-secondary)] leading-tight">
              Financie Sua Caldeira Industrial com FINAME e Caldeiras Santesso
            </h2>
            <p className="mt-6 text-lg text-[var(--color-gray-600)] leading-relaxed">
              A Caldeiras Santesso, em parceria com o BNDES e o programa FINAME,
              oferecem uma oportunidade única para que sua empresa adquira
              caldeiras industriais de alta qualidade com condições especiais de
              financiamento.
            </p>
            <p className="mt-4 text-lg text-[var(--color-gray-600)] leading-relaxed">
              O FINAME é uma linha de crédito do BNDES voltada para a aquisição
              de máquinas e equipamentos nacionais, oferecendo taxas
              competitivas e prazos estendidos.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-8 py-4 text-base font-semibold text-white hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              Consultar Financiamento
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="flex items-center justify-center">
            <div className="bg-[var(--color-gray-100)] rounded-2xl p-12">
              <Image
                src="/images/finame.png"
                alt="FINAME - Financiamento BNDES"
                width={500}
                height={172}
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
