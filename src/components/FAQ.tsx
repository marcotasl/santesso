const groupIcons: Record<string, React.ReactNode> = {
  Garantia: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  "Transporte e logística": (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0H6.375m11.25-4.5V6.75a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25v7.5m16.5 0h.375a2.25 2.25 0 002.25-2.25V9a2.25 2.25 0 00-2.25-2.25h-1.5l-2.25 3h3.75" />
    </svg>
  ),
  "Montagem e instalação": (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-3.4a.75.75 0 010-1.28l5.1-3.4a.75.75 0 011.08.67V9.2l4.09-2.73a.75.75 0 011.08.67v6.56a.75.75 0 01-1.08.67L12.5 11.64v1.57a.75.75 0 01-1.08.67z" />
    </svg>
  ),
  "Assistência técnica": (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
    </svg>
  ),
  Entrega: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  ),
};

const faqGroups = [
  {
    title: "Garantia",
    items: [
      {
        question: "Qual é o prazo de garantia da caldeira?",
        answer:
          "Nossas caldeiras possuem garantia de 12 meses contra defeitos de fabricação, contados a partir da emissão da nota fiscal ou do início da operação (o que ocorrer primeiro).",
      },
      {
        question: "O que está incluso na garantia?",
        answer:
          "A garantia cobre falhas relacionadas a fabricação e qualidade dos materiais utilizados no equipamento.",
      },
      {
        question: "O que pode invalidar a garantia?",
        answer:
          "A garantia permanece válida desde que o equipamento seja operado conforme projeto e não sofra alterações, instalação inadequada ou intervenções não autorizadas.",
      },
      {
        question: "Equipamentos elétricos e eletrônicos estão cobertos?",
        answer:
          "Itens elétricos e eletrônicos, incluindo motores, não estão incluídos na cobertura de garantia.",
      },
      {
        question: "Desgaste de peças está coberto?",
        answer:
          "Não. Desgastes naturais de peças e acessórios fazem parte do uso normal do equipamento.",
      },
      {
        question: "Danos por transporte estão cobertos?",
        answer:
          "Não. Danos causados durante transporte não fazem parte da cobertura de garantia.",
      },
      {
        question: "Uso inadequado afeta a garantia?",
        answer:
          "Sim. Qualquer uso fora das especificações pode comprometer a garantia do equipamento.",
      },
      {
        question: "Manutenção por terceiros interfere na garantia?",
        answer:
          "Sim. Intervenções não autorizadas podem invalidar a garantia do equipamento.",
      },
    ],
  },
  {
    title: "Transporte e logística",
    items: [
      {
        question: "Quem é responsável pelo transporte da caldeira?",
        answer:
          "O transporte, seguro e serviço de guincho são de responsabilidade do comprador (FOB).",
      },
    ],
  },
  {
    title: "Montagem e instalação",
    items: [
      {
        question: "A montagem da caldeira está inclusa?",
        answer:
          "Sim, oferecemos o serviço de montagem da caldeira sem custo adicional.",
      },
      {
        question: "Quem fornece os materiais da instalação?",
        answer:
          "Materiais, rede de vapor, pontos de água e energia são de responsabilidade do comprador.",
      },
      {
        question: "Custos com deslocamento da equipe estão inclusos?",
        answer:
          "Despesas com viagem, estadia e alimentação da equipe são de responsabilidade do comprador.",
      },
      {
        question: "Como funciona o agendamento da montagem?",
        answer:
          "A montagem deve ser agendada com antecedência mínima de 7 dias úteis após o carregamento do equipamento.",
      },
    ],
  },
  {
    title: "Assistência técnica",
    items: [
      {
        question: "Como funciona a assistência técnica?",
        answer:
          "Disponibilizamos assistência técnica em dias úteis, conforme o tempo de deslocamento até o local.",
      },
      {
        question: "Quem arca com os custos de atendimento?",
        answer:
          "Despesas de deslocamento, estadia e alimentação da equipe técnica são por conta do comprador.",
      },
    ],
  },
  {
    title: "Entrega",
    items: [
      {
        question: "Qual é o prazo de entrega?",
        answer:
          "O prazo de entrega é definido em contrato, conforme programação de produção e data acordada.",
      },
      {
        question: "Como funciona o carregamento?",
        answer:
          "O carregamento é realizado conforme data previamente alinhada entre as partes.",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-medium uppercase tracking-wider text-[var(--color-primary)] mb-2">
            Dúvidas Frequentes
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-secondary)] leading-tight">
            Perguntas <span className="text-[var(--color-primary)]">frequentes</span>
          </h2>
          <p className="mt-4 text-[var(--color-gray-600)] leading-relaxed max-w-2xl mx-auto">
            Confira as informações mais importantes sobre nossos equipamentos e serviços. Ficou com alguma dúvida adicional? Fale conosco.
          </p>
        </div>

        <div className="space-y-16">
          {faqGroups.map((group) => (
            <div key={group.title}>
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-[var(--color-primary)] text-white">
                  {groupIcons[group.title]}
                </div>
                <h3 className="text-2xl font-bold text-[var(--color-secondary)]">
                  {group.title}
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {group.items.map((item) => (
                  <div
                    key={item.question}
                    className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm"
                  >
                    <p className="text-lg font-semibold text-[var(--color-secondary)] mb-2">
                      {item.question}
                    </p>
                    <p className="text-base text-[var(--color-gray-600)] leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
