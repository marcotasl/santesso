import type { Metadata } from "next";
import { Reddit_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const redditSans = Reddit_Sans({
  variable: "--font-reddit-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://santesso.vercel.app"),
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Caldeiras Santesso | Caldeiras Industriais",
    description:
      "Especialistas na fabricação de caldeiras geradoras de vapor a lenha, com mais de 47 anos de excelência.",
    url: "https://santesso.vercel.app",
    siteName: "Caldeiras Santesso",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/images/hero-caldeira-principal.jpeg",
        width: 1200,
        height: 630,
        alt: "Caldeira industrial Santesso",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Caldeiras Santesso | Caldeiras Industriais",
    description:
      "Especialistas na fabricação de caldeiras geradoras de vapor a lenha, com mais de 47 anos de excelência.",
    images: ["/images/hero-caldeira-principal.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${redditSans.variable} antialiased`}>
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://app.datalitics.com.br/styles/styles.min.css"
        />
        {/* Rastreamento WhatsApp — CRM Impulso: propaga gclid/wbraid/gbraid e UTMs pros links de WhatsApp */}
        <Script
          id="crm-impulso-wa"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){
  var p=new URLSearchParams(location.search);
  var g=p.get('gclid'),w=p.get('wbraid'),b=p.get('gbraid');
  var us=p.get('utm_source'),um=p.get('utm_medium'),uc=p.get('utm_campaign'),ut=p.get('utm_term');
  if(!g&&!w&&!b&&!us)return;
  var q='';
  if(g)q='gclid='+encodeURIComponent(g);
  if(w)q+=(q?'&':'')+'wbraid='+encodeURIComponent(w);
  if(b)q+=(q?'&':'')+'gbraid='+encodeURIComponent(b);
  if(us)q+=(q?'&':'')+'utm_source='+encodeURIComponent(us);
  if(um)q+=(q?'&':'')+'utm_medium='+encodeURIComponent(um);
  if(uc)q+=(q?'&':'')+'utm_campaign='+encodeURIComponent(uc);
  if(ut)q+=(q?'&':'')+'utm_term='+encodeURIComponent(ut);
  function inject(){
    document.querySelectorAll('a[href*="wa.me"],a[href*="whatsapp"],a[href*="/r/wa/"],a[href*="/api/w/"]').forEach(function(el){
      if(el.href.indexOf('?'+q)<0&&el.href.indexOf('&'+q)<0){
        if(el.href.indexOf('/api/w/')>-1){
          el.href=el.href+(el.href.indexOf('?')>-1?'&':'?')+q;
        } else {
          el.href='https://plataforma.marketingimpulso.com/r/wa/santesso?'+q;
        }
      }
    });
  }
  window.addEventListener('load',function(){ inject(); setTimeout(inject,1000); });
})();`,
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PCQ3XMN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PCQ3XMN');`,
          }}
        />
        <Script
          id="datalitics"
          strategy="afterInteractive"
          src="https://cdn.datalitics.app/script_v4.min.js"
        />
      </body>
    </html>
  );
}
