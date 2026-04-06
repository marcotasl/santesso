import Header from "@/components/Header";
import Hero from "@/components/Hero";
import UrgencyBanner from "@/components/UrgencyBanner";
import Stats from "@/components/Stats";
import ProductCarousel from "@/components/ProductCarousel";
import Diferenciais from "@/components/Diferenciais";
import Clientes from "@/components/Clientes";
import Financiamento from "@/components/Financiamento";
import Depoimentos from "@/components/Depoimentos";
import FAQ from "@/components/FAQ";
import Sobre from "@/components/Sobre";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FadeIn from "@/components/FadeIn";
import CTABanner from "@/components/CTABanner";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Caldeiras Santesso",
  legalName: "RS Caldeiras Indústria e Comércio Eireli",
  url: "https://santesso.vercel.app",
  logo: "https://santesso.vercel.app/images/logo-dark.svg",
  description:
    "Especialistas na fabricação de caldeiras geradoras de vapor a lenha, com mais de 47 anos de excelência no mercado.",
  foundingDate: "1977",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Aparecida de Goiânia",
    addressRegion: "GO",
    postalCode: "74911-265",
    addressCountry: "BR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    availableLanguage: "Portuguese",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qual é o prazo de garantia da caldeira?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nossas caldeiras possuem garantia de 12 meses contra defeitos de fabricação, contados a partir da emissão da nota fiscal ou do início da operação (o que ocorrer primeiro).",
      },
    },
    {
      "@type": "Question",
      name: "A montagem da caldeira está inclusa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim, oferecemos o serviço de montagem da caldeira sem custo adicional.",
      },
    },
    {
      "@type": "Question",
      name: "Qual é o prazo de entrega?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O prazo de entrega é definido em contrato, conforme programação de produção e data acordada.",
      },
    },
    {
      "@type": "Question",
      name: "Como funciona a assistência técnica?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Disponibilizamos assistência técnica em dias úteis, conforme o tempo de deslocamento até o local.",
      },
    },
    {
      "@type": "Question",
      name: "Quem é responsável pelo transporte da caldeira?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O transporte, seguro e serviço de guincho são de responsabilidade do comprador (FOB).",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <UrgencyBanner />
        <div className="bg-gradient-to-b from-gray-100 via-orange-50/60 to-orange-50">
          <FadeIn>
            <Stats />
          </FadeIn>
          <ProductCarousel />
          <FadeIn>
            <Diferenciais />
          </FadeIn>
        </div>
        <CTABanner
          title="Precisa de uma caldeira sob medida?"
          subtitle="Receba uma proposta personalizada em poucas horas."
          buttonText="Solicitar orçamento"
          variant="dark"
        />
        <FadeIn>
          <Clientes />
        </FadeIn>
        <FadeIn>
          <Depoimentos />
        </FadeIn>
        <FadeIn>
          <Financiamento />
        </FadeIn>
        <CTABanner
          title="Aproveite as condições do FINAME"
          subtitle="Financie sua caldeira com taxas competitivas e prazos estendidos."
          buttonText="Consultar financiamento"
          variant="primary"
        />
        <FadeIn>
          <FAQ />
        </FadeIn>
        <FadeIn>
          <Sobre />
        </FadeIn>
        <CTABanner
          title="Pronto para começar seu projeto?"
          subtitle="Nossa equipe está disponível para atender você agora mesmo."
          buttonText="Falar com especialista"
          variant="dark"
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
