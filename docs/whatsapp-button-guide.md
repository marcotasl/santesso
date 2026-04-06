# Botao Flutuante de WhatsApp — Next.js + Tailwind

## 1. Componente `WhatsAppButton.tsx`

Crie o arquivo `src/components/WhatsAppButton.tsx`:

```tsx
"use client";

const WHATSAPP_URL = "https://SEU-LINK-AQUI"; // <- troque pelo seu link

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors"
      aria-label="Fale conosco no WhatsApp"
    >
      <svg className="whatsapp-icon h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}
```

## 2. CSS de animacao

Adicione ao seu `globals.css` (apos os imports do Tailwind):

```css
/* WhatsApp button animations */
@keyframes whatsapp-pulse {
  0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5); }
  70% { box-shadow: 0 0 0 18px rgba(37, 211, 102, 0); }
  100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
}

@keyframes whatsapp-wiggle {
  0%, 100% { transform: rotate(0deg); }
  15% { transform: rotate(12deg); }
  30% { transform: rotate(-10deg); }
  45% { transform: rotate(8deg); }
  60% { transform: rotate(-6deg); }
  75% { transform: rotate(3deg); }
}

.whatsapp-btn {
  animation: whatsapp-pulse 2s ease-in-out infinite;
}

.whatsapp-btn .whatsapp-icon {
  animation: whatsapp-wiggle 1.2s ease-in-out infinite;
  animation-delay: 3s;
}

.whatsapp-btn:hover .whatsapp-icon {
  animation-delay: 0s;
}
```

## 3. Usar no layout/pagina

No seu `page.tsx` principal:

```tsx
import WhatsAppButton from "@/components/WhatsAppButton";

// dentro do JSX, no final do conteudo:
<WhatsAppButton />
```

## Efeitos

| Efeito | Descricao |
|--------|-----------|
| **Pulse** | Onda verde pulsante ao redor do botao (loop infinito, 2s) |
| **Wiggle** | Icone chacoalha a cada 3s para chamar atencao |
| **Hover** | No hover, o wiggle dispara imediatamente (sem delay) |
