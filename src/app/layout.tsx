import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LaserCraft 2026 - Top 10 Grabadoras Láser para Casa | Menos de 300€",
  description: "Descubre las mejores grabadoras láser para el hogar en 2026. Comparativa, precios y análisis de las 10 mejores opciones por menos de 300€. Guía de compra definitiva.",
  keywords: [
    "grabadora laser",
    "grabadora laser barata",
    "mejor grabadora laser 2026",
    "grabadora laser casa",
    "laser engraver español",
    "grabadora laser menos 300 euros",
    "SCULPFUN",
    "ATOMSTACK",
    "grabadora laser madera",
    "top grabadoras laser",
  ],
  authors: [{ name: "LaserCraft 2026" }],
  creator: "LaserCraft 2026",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://laser-craft-2026.vercel.app",
  },
  verification: {
    google: "fZUOj4Z8UPBXyzy1mejxBIccTzzIZTcgc5CMkwP_8wc",
    other: {
      "msvalidate.01": "0E8CC3A34FCD6B0D846A0668AD1E3A09",
    },
  },
  openGraph: {
    title: "LaserCraft 2026 - Top 10 Grabadoras Láser | Menos de 300€",
    description: "Las mejores grabadoras láser para el hogar por menos de 300€. Comparativa, tutorial y guía de compra definitiva 2026.",
    url: "https://laser-craft-2026.vercel.app",
    siteName: "LaserCraft 2026",
    images: [
      {
        url: "https://laser-craft-2026.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "LaserCraft 2026 - Top 10 Grabadoras Láser para Casa",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LaserCraft 2026 - Top 10 Grabadoras Láser | Menos de 300€",
    description: "Las mejores grabadoras láser para el hogar por menos de 300€. Comparativa, tutorial y guía definitiva 2026.",
    images: ["https://laser-craft-2026.vercel.app/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://laser-craft-2026.vercel.app/#website",
      url: "https://laser-craft-2026.vercel.app",
      name: "LaserCraft 2026",
      description:
        "Las mejores grabadoras láser para el hogar por menos de 300€. Comparativa, tutorial y guía de compra definitiva 2026.",
      inLanguage: "es-ES",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate:
            "https://laser-craft-2026.vercel.app/?s={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "ItemList",
      "@id": "https://laser-craft-2026.vercel.app/#top10",
      name: "Top 10 Grabadoras Láser 2026",
      description:
        "Las 10 mejores grabadoras láser para uso doméstico por menos de 300€",
      url: "https://laser-craft-2026.vercel.app/#top-10",
      numberOfItems: 10,
      itemListOrder: "https://schema.org/ItemListOrderDescending",
    },
    {
      "@type": "FAQPage",
      "@id": "https://laser-craft-2026.vercel.app/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Cuál es la mejor grabadora láser para principiantes en 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Para principiantes en 2026, recomendamos la SCULPFUN S9 o la ATOMSTACK Swift Mini 3W por su facilidad de uso, precio asequible y gran comunidad de soporte.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué grabadora láser puedo comprar por menos de 300€?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Existen excelentes opciones por menos de 300€ como la SCULPFUN S9, ATOMSTACK Swift 7W, LONGER Ray5 Mini y la Genmitsu Kortek, todas analizadas en esta guía.",
          },
        },
        {
          "@type": "Question",
          name: "¿Es seguro usar una grabadora láser en casa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí, siempre que se usen las gafas de protección adecuadas, se trabaje en un espacio ventilado y se sigan las instrucciones del fabricante. Todas las máquinas de este ranking incluyen medidas de seguridad.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
