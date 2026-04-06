import Image from "next/image";

const WHATSAPP_URL = "https://wp.faleconosco.chat/6ba943211";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 lg:pt-28 lg:pb-20 overflow-hidden">
      {/* Background placeholder — substituir por imagem real */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-secondary)] via-[#1a2744] to-[#0f1a30]">
        {/* Placeholder para imagem de fundo */}
        <div className="absolute inset-0 bg-[url('/images/hero-bg-placeholder.jpg')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-secondary)]/95 via-[var(--color-secondary)]/70 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl w-full px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Título */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
              Caldeiras Industriais{" "}
              <span className="text-[var(--color-primary)]">sob medida</span> para
              sua produção.
            </h1>
            <p className="mt-3 text-xl sm:text-2xl font-semibold text-gray-300">
              Entrega rápida e financiamento disponível
            </p>

            <p className="mt-4 text-base text-[var(--color-primary)] font-medium">
              Receba uma proposta em poucas horas
            </p>

            {/* Atendemos empresas */}
            <div className="mt-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
              <p className="font-semibold text-white mb-3">
                Atendemos empresas que precisam de:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-[var(--color-primary)] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Produção contínua de vapor
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-[var(--color-primary)] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Expansão industrial
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-[var(--color-primary)] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Redução de custo energético
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-8 py-4 text-base font-semibold text-white hover:bg-[var(--color-primary-dark)] transition-colors shadow-lg shadow-orange-900/30"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="sm:hidden">Orçamento rápido agora</span>
                <span className="hidden sm:inline">Solicitar orçamento rápido no WhatsApp</span>
              </a>
              <div className="mt-3 flex items-center justify-center sm:justify-start gap-2 text-base font-bold text-green-300">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400"></span>
                </span>
                Atendimento imediato via WhatsApp
              </div>
            </div>
          </div>

          {/* Coluna direita — imagem da caldeira */}
          <div className="flex items-center justify-center relative">
            <div className="relative">
              <Image
                src="/images/hero-caldeira-principal.jpeg"
                alt="Caldeira industrial Santesso"
                width={420}
                height={530}
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 350px, 420px"
                className="rounded-2xl shadow-2xl w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[420px]"
                priority
              />

              {/* Box flutuante — Financiamento */}
              <div className="absolute -left-2 sm:-left-4 lg:-left-8 top-4 sm:top-8 lg:top-12 rounded-xl bg-black/40 backdrop-blur-lg border border-white/15 px-3 py-2 sm:px-5 sm:py-4 shadow-lg max-w-[160px] sm:max-w-[200px]">
                <div className="flex items-center gap-2 text-orange-300 mb-1">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-bold text-white">FINAME/BNDES</span>
                </div>
                <p className="text-sm text-white/80">Financiamento disponível com taxas competitivas</p>
              </div>

              {/* Box flutuante — Projetos sob medida */}
              <div className="absolute -right-2 sm:-right-4 lg:-right-8 bottom-8 sm:bottom-12 lg:bottom-16 rounded-xl bg-black/40 backdrop-blur-lg border border-white/15 px-3 py-2 sm:px-5 sm:py-4 shadow-lg max-w-[160px] sm:max-w-[200px]">
                <div className="flex items-center gap-2 text-blue-300 mb-1">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.28z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm font-bold text-white">Sob Medida</span>
                </div>
                <p className="text-sm text-white/80">Projetos personalizados para sua operação</p>
              </div>

              <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-[var(--color-primary)] opacity-15 blur-3xl"></div>
              <div className="absolute -top-6 -right-6 h-40 w-40 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
