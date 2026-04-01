const stats = [
  { value: "47+", label: "Anos de Experiência" },
  { value: "1000+", label: "Caldeiras Fabricadas" },
  { value: "800+", label: "Clientes Atendidos" },
];

export default function Stats() {
  return (
    <section className="py-16 bg-[var(--color-secondary)]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="text-center text-sm font-medium uppercase tracking-wider text-orange-300 mb-2">
          Tradição de Excelência
        </p>
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-white mb-12">
          A escolha de mais de 800 Empresas em diversos Setores de Produção
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-white/5 border border-white/10"
            >
              <p className="text-5xl sm:text-6xl font-bold text-[var(--color-primary)]">
                {stat.value}
              </p>
              <p className="mt-2 text-lg text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 mt-8 max-w-2xl mx-auto">
          Com mais de 47 anos de experiência, nossa fábrica de caldeiras já
          entregou mais de 1.000 equipamentos para os mais diversos tipos de
          setores industriais.
        </p>
      </div>
    </section>
  );
}
