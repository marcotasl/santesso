"use client";

const items = [
  {
    text: "Estamos fechando produção das próximas semanas — Consulte disponibilidade agora",
    icon: (
      <svg className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    text: "Entrega rápida para todo o Brasil",
    icon: (
      <svg className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H18.75M3.375 14.25h4.875M3.375 14.25V3.375c0-.621.504-1.125 1.125-1.125h9.75c.621 0 1.125.504 1.125 1.125v4.875m0 0h4.5c.621 0 1.125.504 1.125 1.125v4.875" />
      </svg>
    ),
  },
  {
    text: "Financiamento FINAME/BNDES disponível",
    icon: (
      <svg className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

function MarqueeContent() {
  return (
    <>
      {items.map((item, i) => (
        <span
          key={i}
          className="inline-flex items-center gap-2 text-base font-semibold"
          style={{ color: "var(--color-secondary)" }}
        >
          {item.icon}
          {item.text}
          <span className="mx-8" style={{ color: "#d1d5db" }}>|</span>
        </span>
      ))}
    </>
  );
}

export default function UrgencyBanner() {
  return (
    <div
      className="border-y overflow-hidden whitespace-nowrap"
      style={{ background: "#f3f4f6", borderColor: "#e5e7eb", padding: "14px 0" }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          width: "max-content",
          animation: "marquee 50s linear infinite",
        }}
      >
        <MarqueeContent />
        <MarqueeContent />
        <MarqueeContent />
        <MarqueeContent />
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
