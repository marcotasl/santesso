import Image from "next/image";

export default function Sobre() {
  return (
    <section id="santesso" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/images/fachada.webp"
                alt="Fachada da Caldeiras Santesso"
                width={459}
                height={396}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-[var(--color-primary)] mb-2">
              Sobre a Empresa
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-secondary)] leading-tight">
              Toda jornada de sucesso, tem um começo
            </h2>

            <p className="mt-6 text-lg text-[var(--color-gray-600)] leading-relaxed">
              A Caldeiras Santesso, fundada em 1977, é especializada na
              fabricação e instalação de Caldeiras geradoras de vapor, de vários
              modelos, direcionadas para os múltiplos setores industriais.
            </p>

            <p className="mt-4 text-lg text-[var(--color-gray-600)] leading-relaxed">
              Nossa experiência de 45 anos atuando no mercado, visa acima de
              tudo a Qualidade e Segurança de nossos equipamentos.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <svg className="h-6 w-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-[var(--color-secondary)]">Localização</p>
                  <p className="text-[var(--color-gray-600)]">Aparecida de Goiânia – GO, 74911-265</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="h-6 w-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <div>
                  <p className="font-semibold text-[var(--color-secondary)]">Empresa</p>
                  <p className="text-[var(--color-gray-600)]">RS Caldeiras Indústria e Comércio Eireli</p>
                  <p className="text-sm text-[var(--color-gray-400)]">CNPJ: 32.983.627/0001-04</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
