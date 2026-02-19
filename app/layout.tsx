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
  title: "Acces Alternatif - Travaux sur Cordes & Accès Difficile",
  description: "Spécialiste des travaux en hauteur, accès difficile et sécurité en Île-de-France. BTP, industrie, nettoyage et maintenance.",
  keywords: ["cordiste", "travaux en hauteur", "accès difficile", "nettoyage vitre", "BTP", "industrie", "sécurité", "Paris", "Île-de-France", "monuments historiques", "HLM"],
  icons: {
    icon: '/logo-acces-alternatif-cordiste.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
