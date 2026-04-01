import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Diferenciais from "@/components/Diferenciais";
import Financiamento from "@/components/Financiamento";
import Depoimentos from "@/components/Depoimentos";
import Sobre from "@/components/Sobre";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Diferenciais />
        <Financiamento />
        <Depoimentos />
        <Sobre />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
