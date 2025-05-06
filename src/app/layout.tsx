import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Omar Alhait",
  description: "Graphic design is my passion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
