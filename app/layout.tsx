import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 1. MODIFICA I METADATA QUI: Questo è ciò che leggeranno i motori di ricerca e le schede del browser
export const metadata: Metadata = {
  title: "Antonio Verno | Portfolio Personale",
  description: "Portfolio personale di Antonio Verno, sviluppatore software. Scopri i miei progetti e le mie competenze.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 2. Linqua Impostata su "it"
    <html
      lang="it"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}