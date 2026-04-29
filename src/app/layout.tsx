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
  title: "LaserCraft 2026 - Top Grabadoras Láser",
  description: "Descubre las mejores grabadoras láser para el hogar y emprendedores en 2026. Comparativas, reseñas y guías de mantenimiento.",
  verification: {
    google: "fZUOj4Z8UPBXyzy1mejxBIccTzzIZTcgc5CMkwP_8wc",
    other: {
      "msvalidate.01": "0E8CC3A34FCD6B0D846A0668AD1E3A09",
    },
  },
  openGraph: {
    title: "LaserCraft 2026 - Top 10 Grabadoras Láser",
    description: "Las mejores grabadoras láser para el hogar por menos de 300€. Comparativa, tutorial y guía de compra definitiva 2026.",
    url: "https://laser-craft-2026.vercel.app",
    siteName: "LaserCraft 2026",
    images: [
      {
        url: "https://laser-craft-2026.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "LaserCraft 2026 - Top 10 Grabadoras Láser",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LaserCraft 2026 - Top 10 Grabadoras Láser",
    description: "Las mejores grabadoras láser para el hogar por menos de 300€. Comparativa, tutorial y guía definitiva 2026.",
    images: ["https://laser-craft-2026.vercel.app/og-image.png"],
  },
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
