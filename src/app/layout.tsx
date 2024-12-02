import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Advertorial Template",
  description: "A customizable advertorial template",
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
