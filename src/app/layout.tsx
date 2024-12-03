import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Oficial",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
