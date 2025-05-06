import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Omar's Terminal",
  description: "A terminal-style personal website",
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
