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

export default function Home() {
  return (
    <>
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
