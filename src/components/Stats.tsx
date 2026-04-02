import AnimatedCounter from "./AnimatedCounter";

const stats = [
  {
    value: 47,
    suffix: " anos",
    label: "de Experiência",
    description: "Desde 1977 fabricando e instalando caldeiras com qualidade e segurança comprovadas em todo o Brasil.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.023 6.023 0 01-3.52 1.122 6.023 6.023 0 01-3.52-1.122" />
      </svg>
    ),
  },
  {
    value: 1000,
    suffix: "+",
    label: "Caldeiras Fabricadas",
    description: "Equipamentos entregues para os mais diversos setores industriais: alimentos, têxtil, químico e hospitalar.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.28z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    value: 800,
    suffix: "+",
    label: "Clientes Atendidos",
    description: "Empresas de todos os portes confiam na Santesso para manter sua produção operando com total eficiência.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
];

export default function Stats() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-stretch">
          <div className="lg:col-span-2 flex flex-col justify-center">
            <p className="text-sm font-medium uppercase tracking-wider text-[var(--color-primary)] mb-2">
              Tradição de Excelência
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-secondary)] leading-tight">
              A escolha de mais de <span className="text-[var(--color-primary)]">800 Empresas</span> em diversos Setores
            </h2>
            <p className="mt-4 text-[var(--color-gray-600)] leading-relaxed">
              Com mais de 47 anos de experiência, nossa fábrica de caldeiras já
              entregou mais de 1.000 equipamentos para os mais diversos tipos de
              setores industriais.
            </p>
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between min-h-[260px]"
              >
                <div>
                  <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-orange-50 text-[var(--color-primary)] mb-4">
                    {stat.icon}
                  </div>
                  <p className="text-4xl font-extrabold text-[var(--color-primary)]">
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                      duration={2000}
                    />
                  </p>
                  <p className="mt-1 text-base font-semibold text-[var(--color-secondary)]">
                    {stat.label}
                  </p>
                </div>
                <p className="mt-4 text-sm text-[var(--color-gray-600)] leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
