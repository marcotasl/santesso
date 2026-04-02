const clientes = [
  "Laticínio Cajes",
  "Laticínio Ki Sabor",
  "Agroilma",
  "Alhesco",
  "Carfil Pneus",
  "Total Pneus",
  "Vocabulário Confecções",
  "Doces Joacy",
  "Nacional Pneus",
  "Rações Grande Lago",
  "Unicaixas",
  "Têxtil Anápolina",
  "Kiss Motel",
  "Frigorífico Providência",
  "Estrelandia Recapagem",
  "Vaccinar",
];

export default function Clientes() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-medium uppercase tracking-wider text-[var(--color-primary)] mb-2">
            Empresas que confiam na Santesso
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-secondary)] leading-tight max-w-xl">
            Presentes em <span className="text-[var(--color-primary)]">diversos setores</span> da indústria
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {clientes.map((nome) => (
            <div
              key={nome}
              className="flex items-center justify-center rounded-xl bg-gray-50 border border-gray-100 px-4 py-5 text-center hover:border-[var(--color-primary)]/30 hover:bg-orange-50/50 transition-colors"
            >
              <span className="text-sm font-semibold text-[var(--color-secondary)] leading-tight">
                {nome}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-[var(--color-gray-400)]">
          E muitas outras empresas em todo o Brasil.
        </p>
      </div>
    </section>
  );
}
