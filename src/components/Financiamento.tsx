import Image from "next/image";

export default function Financiamento() {
  return (
    <section id="financie" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12">
          <Image
            src="/images/bndes-logo.png"
            alt="BNDES - Banco Nacional de Desenvolvimento Econômico e Social"
            width={128}
            height={40}
            className="h-auto object-contain mb-6"
          />
          <p className="text-sm font-medium uppercase tracking-wider text-[var(--color-primary)] mb-2">
            Financiamento
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-secondary)] leading-tight max-w-2xl">
            Financie Sua Caldeira Industrial com <span className="text-[var(--color-primary)]">FINAME</span> e Caldeiras Santesso
          </h2>
          <p className="mt-4 text-lg text-[var(--color-gray-600)] leading-relaxed max-w-3xl">
            A Caldeiras Santesso, em parceria com o BNDES e o programa FINAME,
            oferecem uma oportunidade única para que sua empresa adquira
            caldeiras industriais de alta qualidade com condições especiais de
            financiamento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="rounded-2xl bg-orange-50 border border-orange-100 p-8">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-[var(--color-primary)] text-white mb-4">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[var(--color-secondary)] mb-2">
              Entrada de 40%
            </h3>
            <p className="text-[var(--color-gray-600)] leading-relaxed">
              Com possibilidade de parcelamento até a data do aviso de equipamento pronto.
            </p>
          </div>

          <div className="rounded-2xl bg-orange-50 border border-orange-100 p-8">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-[var(--color-primary)] text-white mb-4">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[var(--color-secondary)] mb-2">
              Comece agora
            </h3>
            <p className="text-[var(--color-gray-600)] leading-relaxed">
              Inicie seu projeto sem precisar desembolsar tudo de imediato. Planeje com tranquilidade.
            </p>
          </div>

          <div className="rounded-2xl bg-orange-50 border border-orange-100 p-8">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-[var(--color-primary)] text-white mb-4">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[var(--color-secondary)] mb-2">
              FINAME/BNDES
            </h3>
            <p className="text-[var(--color-gray-600)] leading-relaxed">
              Taxas competitivas e prazos estendidos através da linha de crédito do BNDES.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
