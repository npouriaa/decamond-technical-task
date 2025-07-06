// Import type for defining page metadata
import type { Metadata } from "next";

// Global styles applied across the entire app
import "./globals.scss";

// Define metadata for the entire application
export const metadata: Metadata = {
  title: "Decamond Technical Task",
  description: "Decamond Technical Task",
};

// Root layout wrapper — applies to all pages
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
