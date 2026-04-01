import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Caldeiras Santesso | Caldeiras Industriais com Preço Justo e Qualidade Garantida",
  description:
    "Somos especialistas na fabricação de caldeiras geradoras de vapor a lenha, com mais de 47 anos de excelência no mercado, atuando com segurança e eficiência comprovadas.",
  keywords: [
    "caldeiras industriais",
    "caldeiras a vapor",
    "caldeiras a lenha",
    "fabricação de caldeiras",
    "FINAME",
    "caldeiras santesso",
  ],
  openGraph: {
    title: "Caldeiras Santesso | Caldeiras Industriais",
    description:
      "Especialistas na fabricação de caldeiras geradoras de vapor a lenha, com mais de 47 anos de excelência.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
