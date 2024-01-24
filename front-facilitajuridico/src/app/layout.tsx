// Metadata, CSS Global e fonte
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// metadata do site, titulo e descrição
export const metadata: Metadata = {
  title: "Gerenciamento de Clientes",
  description: "Autoria: Giovani Feitosa Leal Pereira",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // retorna o layout do site, onde botei o background color blue geral
  return (
    <html lang="en">
      <body className="bg-blue-600">{children}</body>
    </html>
  );
}
