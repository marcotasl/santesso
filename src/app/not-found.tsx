import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <h1 className="text-6xl font-extrabold text-[var(--color-secondary)]">
          404
        </h1>
        <p className="mt-4 text-xl text-[var(--color-gray-600)]">
          Página não encontrada
        </p>
        <p className="mt-2 text-[var(--color-gray-400)]">
          A página que você está procurando não existe ou foi removida.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-8 py-3 text-base font-semibold text-white hover:bg-[var(--color-primary-dark)] transition-colors"
        >
          Voltar ao início
        </Link>
      </div>
    </div>
  );
}
